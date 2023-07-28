import React from 'react';
import { Grid,Box, Typography } from '@mui/material';
import PhysicsBody from './PhysicsBody';


const Physics = () => {
    return (
        <Box sx={{
            margin:"20px",
            
           
        }}>
            <Typography variant={'h5'} sx={{
                display:"flex",
                justifyContent:'center',
                alignItems:'center',
                marginBottom:"10px"
            }}>FIND YOUR DESIRE PHYSICS SOLUTION :</Typography>
            <Box sx={{
                border:'2px solid black'
            }}>

         
        <Grid container>
            <Grid item xs={12} sm={12} lg={4}>
                <PhysicsBody/>
               

            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
                <PhysicsBody/>
               

            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
                <PhysicsBody/>
               

            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
                <PhysicsBody/>
               

            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
                <PhysicsBody/>
               

            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
                <PhysicsBody/>
               

            </Grid>
        </Grid>
        </Box>
        </Box>
       
    );
};

export default Physics;