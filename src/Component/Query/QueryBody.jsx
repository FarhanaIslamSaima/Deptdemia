import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Box, Typography,Grid, Button ,Select,InputLabel, FormControl,TextareaAutosize} from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import JoditEditor from 'jodit-react';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import { UserContext } from '../../Context/AccountContext';
import { Navigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../firebase';
import { handleQuery } from '../../Actions/AddElement';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const QueryBody = () => {
    const navigate=useNavigate();
    let x=Math.floor(Math.random()*100000);
    console.log(x);
    let text=x.toString();
    const {User}=useContext(UserContext);
    console.log(User.uid)
    
    //in user you will find the current logged in user info
    const subOption=[
        {label:'Physics',id:1},
        {label:'Chemistry',id:2},
        {label:'Math',id:3},
        {label:'Biology',id:4}
    ]

    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [file,Setfile]=useState();
    const [progress,setProgress]=useState(null);
    console.log(file);
   
   const initialize={
        option:'',
        content:'',
        file:'',
        title:''
    }
    const [value,setValue]=useState(initialize);
    const [subject,setSubject]=useState();
    const handleSubmit=async()=>{
        try{
            await handleQuery(value);
            toast.success("Query uploaded")
            navigate("/");

        }
        catch(error){
            console.log(error);
        }

    }
   

    const handleChange=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
        setValue((prev=>({...prev,author:User.displayName})))
        setValue((prev=>({...prev,authorId:User.uid})))
       

    }
useEffect(()=>{
    const uploadFile=()=>{
        const name=new Date().getTime()+file.name;
        const storageRef=ref(storage,file.name);
        const uploadTask=uploadBytesResumable(storageRef,file);
        uploadTask.on("state_changed",(snapshot)=>{
            const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            setProgress(progress);
            switch(snapshot.state){
                case "paused":
                    console.log("Upload is paused");
                    break;
                    case "running":
                        console.log("Upload is running");
                        break;
                        default:
                            break;
            }

            }
            ,(error)=>{
                console.log(error);
        },()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
                setValue((prev=>({...prev,file:downloadUrl})));
            })
        })


    }
    file&&uploadFile();
},[file])
    console.log(value)

	
    return (
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            marginTop:'50px',
            flexDirection:'column',
          
        }}>
       
            <Typography sx={{fontWeight:'bold'} } variant={'h5'}>Place your Query Here...</Typography>
           <Box sx={{
            padding:'10px',
           
            '&>*':{
                margin:"10px"
            },
            display:'flex',
            flexDirection:'column',
            width:'80%',
           }}>
            
   
    <TextField
     select
     required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          
         
          label="Course"
          name="option"
           sx={{marginBottom:'10px'}}
       
          onChange={handleChange}
         
        >
            
            
            {
            subOption.map((item)=>(
                
               
                <MenuItem sx={{ 
                    

                    
            
            
             }}
                
                value={item.label} name="option"><Typography sx={{
                    display:'flex'
                }}>{item.label}</Typography></MenuItem>
               
            ))
        }
          
         
        </TextField>
        <TextField name="title" onChange={(e)=>handleChange(e)} placeholder='Explain the exact thing you want to know'></TextField>
        

    <input  type="file" onChange={(e)=>Setfile(e.target.files[0])}/>
    <Typography sx={{fontSize:"15px",marginBottom:'10px',color:'red'}}>*Please only upload file in jpg or png format</Typography>
    <TextareaAutosize required name="content" placeholder="Write your problem's each and every details here.." minRows={5} onChange={(e)=>handleChange(e)}  sx={{
                width:'100%',
                border:'none',
                fontSize:'20px',
                height:'600px',
                '&:focus-visible':{
                    outline:'none'
                }
               
        
    }}       ></TextareaAutosize>
              
    
        <Button sx={{background:'black'}} variant={'contained'} color={'primary'} disabled={progress!=null && progress<100} onClick={handleSubmit}>Submit</Button>
    
        

           </Box>
       

        </Box>
    );
};

export default QueryBody;