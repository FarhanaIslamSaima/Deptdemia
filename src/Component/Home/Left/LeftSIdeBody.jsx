import React from 'react';
import { Box, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { BorderBottomOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Physics from './Subjects/Physics/Physics';

const Subject=['Physics','Chemistry','Math','Biology']
const LeftSIdeBody = () => {
    var i=1;
    return (
       <Box sx={{
        display:'flex',
        justifyContent:'center',
        marginTop:'10px',
        flexDirection:'column',
        width:"100%",
        fontWeight:'bold',
        

       }}>
        <Typography sx={{
            fontWeight:'bold',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }} variant={'h5'}>Solutions</Typography>
        <Box sx={{
            marginTop:'10px'
        }}>
            {Subject.map(item=>(
                     <Link to={`subject/${i++}`} style={{textDecoration: 'none', color:'black'}}> <Box sx={{
                        padding:'10px',
                        display:"flex",
                        borderBottom:'1px solid #d5d5d5',
                        '&>*':{
                            padding:'5px',
                        
                        },
                        cursor:'pointer',
                        textDecoration:"none",
                        '&:hover':{
                            background:'#d5d5d5',
                            
        
                        }
                        
                       
                        
                    }}>
                        <BookIcon></BookIcon>
                        <Typography sx={{fontWeight:'bold'}}>{item}</Typography>
                    </Box></Link>


            ))}
      
            
        </Box>

       </Box>
    );
};

export default LeftSIdeBody;