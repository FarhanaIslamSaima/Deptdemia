import { Grid } from '@mui/material';
import React from 'react';
import QueryBody from './QueryBody';



const QueryHome = () => {
    return (
        <Grid container>
            <Grid item sm={12} xs={12}>
                <QueryBody></QueryBody>
            </Grid>
        </Grid>
        
    );
};

export default QueryHome;