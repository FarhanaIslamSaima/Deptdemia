import { Grid } from '@mui/material';
import React from 'react';
import QueryBody from './QueryBody';
import pic from './assets/pic.jpg'



const QueryHome = () => {
    return (
        <Grid container sx={{
            background:`url(${pic}) no-repeat center center fixed`,
            height:'1000px'
            
        }}>
            <Grid item sm={12} xs={12}>
                <QueryBody></QueryBody>
            </Grid>
        </Grid>
        
    );
};

export default QueryHome;