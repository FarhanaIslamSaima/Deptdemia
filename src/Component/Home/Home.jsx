import React from 'react';
import Body from './HomeBody/Body';
import { Grid } from '@mui/material';

const Home = () => {
    return (
       <Grid container>
        <Grid item sx={12} xs={12}>
            <Body></Body>
        </Grid>
       </Grid>
    );
};

export default Home;