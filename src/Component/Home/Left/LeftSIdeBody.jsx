import React from 'react';
import { Box, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { BorderBottomOutlined } from '@mui/icons-material';


const LeftSIdeBody = () => {
    return (
       <Box sx={{
        display:'flex',
        justifyContent:'center',
        marginTop:'10px',
        flexDirection:'column',
        width:"100%",
        fontWeight:'bold'

       }}>
        <Typography sx={{
            fontWeight:'bold',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }} variant={'h5'}>Contributions</Typography>
        <Box sx={{
            marginTop:'10px'
        }}>
            <Box sx={{
                padding:'10px',
                display:"flex",
                borderBottom:'1px solid black',
                '&>*':{
                    padding:'5px',
                
                },
                cursor:'pointer',
                
               
                
            }}>
                <BookIcon></BookIcon>
                <Typography >PHYSICS</Typography>
            </Box>
            <Box sx={{
                padding:'10px',
                display:"flex",
                borderBottom:'1px solid black',
                '&>*':{
                    padding:'5px',
                
                },
                cursor:'pointer',
                
               
                
            }}>
                <BookIcon></BookIcon>
                <Typography>PHYSICS</Typography>
            </Box>
            <Box sx={{
                display:"flex",
                padding:'10px',
                borderBottom:'1px solid black',
                '&>*':{
                    padding:'5px',
                
                },
                cursor:'pointer',
                
               
                
            }}>
                <BookIcon></BookIcon>
                <Typography>PHYSICS</Typography>
            </Box>
            <Box sx={{
                display:"flex",
                borderBottom:'1px solid black',
                padding:'10px',
                '&>*':{
                    padding:'5px',
                
                },
                cursor:'pointer',
                
               
                
            }}>
                <BookIcon></BookIcon>
                <Typography>PHYSICS</Typography>
            </Box>
            <Box sx={{
                display:"flex",
                borderBottom:'1px solid black',
                padding:'10px',
                '&>*':{
                    padding:'5px',
                
                },
                cursor:'pointer',
                
               
                
            }}>
                <BookIcon></BookIcon>
                <Typography>PHYSICS</Typography>
            </Box>
            <Box sx={{
                display:"flex",
                padding:'10px',
                borderBottom:'1px solid black',
                '&>*':{
                    padding:'5px',
                
                },
                cursor:'pointer',
                
               
                
            }}>
                <BookIcon></BookIcon>
                <Typography>PHYSICS</Typography>
            </Box>
            <Box sx={{
                display:"flex",
                padding:'10px',
                borderBottom:'1px solid black',
                '&>*':{
                    padding:'5px',
                
                },
                cursor:'pointer',
                
               
                
            }}>
                <BookIcon></BookIcon>
                <Typography>PHYSICS</Typography>
            </Box>
        </Box>

       </Box>
    );
};

export default LeftSIdeBody;