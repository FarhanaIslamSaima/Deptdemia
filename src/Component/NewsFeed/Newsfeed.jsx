import React from 'react';
import { Grid,Box, Typography } from '@mui/material';
import NewsfeedBody from './NewsfeedBody';
const Newsfeed = () => {
    return (
        <Box  sx={{
            margin:"20px"
        }}>
           
        <Grid container>
        <Grid item lg={12} sm={12} xs={12}>
            <NewsfeedBody/>
           

        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
            <NewsfeedBody/>
           

        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
            <NewsfeedBody/>
           

        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
            <NewsfeedBody/>
           

        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
            <NewsfeedBody/>
           

        </Grid>

       </Grid>
       </Box>
    );
};

export default Newsfeed;