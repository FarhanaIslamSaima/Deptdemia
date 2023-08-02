import React, { useState, useRef, useMemo } from 'react';
import { Box, Typography,Grid, Button ,Select,InputLabel, FormControl} from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import JoditEditor from 'jodit-react';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import { UserContext } from '../../Context/AccountContext';
import { Navigate } from 'react-router-dom';

const QueryBody = () => {
    let x=Math.floor(Math.random()*100000);
    console.log(x);
    let text=x.toString();
    const {User}=useContext(UserContext);
    console.log(User)
    
    //in user you will find the current logged in user info
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

    const handleChange=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
       

    }
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
            <Typography sx={{marginBottom:'10px'}}><b>Problem Set Code:</b>{text}</Typography>
   
    <TextField
     select
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
        

    <input type="file"/>
    <JoditEditor
			ref={editor}
			value={content}
			//config={config}
			tabIndex={1} // tabIndex of textarea
			//onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {setValue({...value,'content':newContent})}}
		/>
    
        <Button variant={'contained'} color={'primary'}>Submit</Button>
    
        

           </Box>
       

        </Box>
    );
};

export default QueryBody;