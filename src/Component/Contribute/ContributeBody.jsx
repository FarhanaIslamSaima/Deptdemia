import React from 'react';
import { Box, Typography } from '@mui/material';

const ContributeBody = () => {
    return (
       <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:"50px",
        
       }}>
        <Typography sx={{fontWeight:"bold"}} variant={'h5'}>Anything you want to contribute</Typography>
        <Box>

        </Box>

       </Box>
    );
};

export default ContributeBody;