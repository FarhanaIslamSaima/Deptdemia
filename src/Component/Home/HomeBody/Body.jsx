import React from 'react';
import { Box } from '@mui/material';
import LeftSidebar from '../Left/LeftSidebar';
import RightSidebar from '../Right/RightSidebar';
import pic from '../assets/pic3.jpg'
const Body = () => {
    return (
        <>
        <Box sx={{flexGrow:1,display:{xs:'none',md:'flex'}}}>
        <Box sx={{
            display:'flex',
            width:'100%',
            
            background:'#E8E3C5',
            backgroundSize: 'cover'
        }}>
            <Box
            sx={{width:'75%'}}
            
            >
             <RightSidebar></RightSidebar>
            </Box>
            <Box
            sx={{width:'25%'}}
            >
              <LeftSidebar></LeftSidebar>
            </Box>
        </Box>
        </Box>
          <Box sx={{flexGrow:1,display:{xs:'flex',md:'none'}}}>
          <Box sx={{
              display:'flex',
              width:'100%',
              
              background:'#E8E3C5',
              backgroundSize: 'cover'
          }}>
              <Box
              sx={{width:'100%'}}
              
              >
               <RightSidebar></RightSidebar>
              </Box>
              <Box
              sx={{width:'0%'}}
              >
                <LeftSidebar></LeftSidebar>
              </Box>
          </Box>
          </Box>
         </>
       
    );
};

export default Body;