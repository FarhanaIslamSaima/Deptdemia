import React from 'react';
import { Box } from '@mui/material';
import LeftSidebar from '../Left/LeftSidebar';
import RightSidebar from '../Right/RightSidebar';
import pic from '../assets/pic3.jpg'
const Body = () => {
    return (
        <Box sx={{
            display:'flex',
            width:'100%',
            
            background:'#E8E3C5',
            backgroundSize: 'cover'
        }}>
            <Box
            sx={{width:'80%'}}
            
            >
             <RightSidebar></RightSidebar>
            </Box>
            <Box
            sx={{width:'20%'}}
            >
              <LeftSidebar></LeftSidebar>
            </Box>
        </Box>
       
    );
};

export default Body;