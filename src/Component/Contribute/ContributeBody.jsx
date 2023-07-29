import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Box, Typography,Grid, Button ,Select,InputLabel, FormControl} from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import JoditEditor from 'jodit-react';
import MenuItem from '@mui/material/MenuItem';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../firebase';

const ContributeBody = () => {
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
   const handleChange=()=>{
    
   }
    return (
       <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:"50px",
        flexDirection:"column"
        
       }}>
        <Typography sx={{fontWeight:"bold"}} variant={'h5'}>Anything you want to contribute</Typography>
        <Box sx={{
            padding:'10px',
            '&>*':{
                margin:"10px"
            }
           }}>
            
             
     <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          sx={{
            display:'flex',
            flexDirection:"column",
            justifyContent:'center',
                    alignItems:'center',
                    color:'black'
                   
          }}
          label="Age"
          name="option"
           
       
          onChange={handleChange}
         
        >
            
            
            {
            subOption.map((item)=>(
                
               
                <MenuItem sx={{ 
                    display:"flex",

                    
            
            
             }}
                
                value={item.id} name="option"><Typography sx={{
                   display:'flex',
                   justifyContent:'center'
                }}>{item.label}</Typography></MenuItem>
               
            ))
        }
          
         
        </Select>
    <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
    <JoditEditor
			ref={editor}
			value={content}
			//config={config}
			tabIndex={1} // tabIndex of textarea
			//onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {setValue({...value,'content':newContent})}}
		/>
        <Button variant={'contained'} color={'primary'} disabled={progress!=null && progress<100}>Submit</Button>
    
        

           </Box>

       </Box>
    );
};

export default ContributeBody;