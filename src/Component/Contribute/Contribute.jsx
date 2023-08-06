import React from 'react';
import { Grid } from '@mui/material';
import ContributeBody from './ContributeBody';
import { useParams } from 'react-router-dom';

const Contribute = () => {
    const {quid}=useParams();
    console.log(quid);
    
    return (
        <Grid container sx={{   background:'#E8E3C5',height:'1000px'}}>
            <Grid item sm={12} xs={12}>
                <ContributeBody></ContributeBody>

            </Grid>
        </Grid>
    );
};

export default Contribute;