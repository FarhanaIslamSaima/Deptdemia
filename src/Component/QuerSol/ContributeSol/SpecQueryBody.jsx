import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Box, Typography,Grid, Button ,Select,InputLabel, FormControl} from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import JoditEditor from 'jodit-react';
import MenuItem from '@mui/material/MenuItem';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase';
import { useContext } from 'react';
import { UserContext } from '../../../Context/AccountContext';
import { handleElement } from '../../../Actions/AddElement';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { querySol } from '../../../Actions/AddElement';

const SpecQueryBody = () => {
    const [query,setQuery]=useState();
    console.log(query)
    const {id}=useParams();
    console.log(id);
    useEffect(()=>{
        const getData=async()=>{
            const Docref=doc(db,'Query',id);
            const docSnap=await getDoc(Docref);
            setQuery(docSnap.data());
            console.log(docSnap.data());

        }
        setValue((prev=>({...prev,author:User.displayName})))
        setValue((prev=>({...prev,option:query.option})))
        setValue((prev=>({...prev,content:query.content})))
        setValue((prev=>({...prev,queryId:id})))
        getData();
        
     
    },[])
    

    const navigate=useNavigate();
    const {User,setUser}=useContext(UserContext);
    console.log(User.displayName);
    const subOption=[
        {label:'Physics',id:1},
        {label:'Chemistry',id:2},
        {label:'Math',id:3},
        {label:'Biology',id:4}
    ]

    const editor = useRef(null);
	const [content, setContent] = useState('');
   
   const initialize={
        option:'',
        content:'',
        img:''
    }
    const [value,setValue]=useState();
    const [subject,setSubject]=useState();
    const [file,setFile]=useState();
    console.log(value)
    const [progress,setProgress]=useState(null);
    console.log(progress)
    
 
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

            },(error)=>{
                console.log(error)
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                    setValue((prev=>({...prev,file:downloadURL})))
                })
            }
            
            )
        }

    file&&uploadFile();
    console.log(progress)
    },[file])
   const handleChange=(e)=>{
    setValue({...value,[e.target.name]:e.target.value})
    setValue((prev=>({...prev,author:User.displayName})))
    setValue((prev=>({...prev,authorId:User.uid})));
    
    
   }
   const handleSubmit=async()=>{
    try{
        await querySol(value);
        alert("Solve Updated Successfully");
        navigate("/");
      

    }
    catch(error){
        console.log(error);
    }
    

   }
    return (
       <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:"50px",
        flexDirection:"column",
       
        
       }}>
        <Typography sx={{fontWeight:"bold"}} variant={'h5'}>Anything you want to contribute</Typography>
        <Box sx={{
            padding:'10px',
            '&>*':{
                margin:"10px"
            },
            display:'flex',
            flexDirection:'column',
            width:'80%',
    
           }
           
           }>
            
           
     <TextField  disabled value={query.option} sx={{marginBottom:'10px'}} >
     
   
          
         
        </TextField>
    
        <TextField required id="outlined-basic" disabled value={query.content}variant="outlined" onChange={(e)=>handleChange(e)} name="title" sx={{
          


        }}/>

    <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
   
        <Button variant={'contained'} color={'primary'} disabled={progress!=null && progress<100} onClick={handleSubmit}>Submit</Button>
    
        

           </Box>

       </Box>
    );
};

export default SpecQueryBody;