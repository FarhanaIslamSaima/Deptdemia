import React from 'react';
import { Grid } from '@mui/material';
import ContributeBody from './ContributeBody';

const Contribute = () => {
    return (
        <Grid container>
            <Grid item sm={12} xs={12}>
                <ContributeBody></ContributeBody>

            </Grid>
        </Grid>
    );
};

export default Contribute;