import React from 'react';
import Body from './HomeBody/Body';
import { Grid } from '@mui/material';
import { getAuth } from 'firebase/auth';


const Home = () => {
    const auth=getAuth();
    console.log(auth.currentUser)
    return (
       <Grid container>
        <Grid item sx={12} xs={12}>
            <Body></Body>
        </Grid>
       </Grid>
    );
};

export default Home;