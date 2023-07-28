import React from 'react';
import { Box } from '@mui/material';
import LeftSidebar from '../Left/LeftSidebar';
import RightSidebar from '../Right/RightSidebar';
const Body = () => {
    return (
        <Box sx={{
            display:'flex',
            width:'100%',
        }}>
            <Box
            sx={{width:'70%'}}
            
            >
             <RightSidebar></RightSidebar>
            </Box>
            <Box
            sx={{width:'30%'}}
            >
              <LeftSidebar></LeftSidebar>
            </Box>
        </Box>
       
    );
};

export default Body;