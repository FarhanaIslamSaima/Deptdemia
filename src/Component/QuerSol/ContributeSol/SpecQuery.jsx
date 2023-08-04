import React from 'react';
import { Grid } from '@mui/material';
import SpecQueryBody from './SpecQueryBody';
import { useParams } from 'react-router-dom';

const SpecQuery = () => {
    return (
        <Grid container>
            <Grid item sm={12} xs={12}>
                <SpecQueryBody></SpecQueryBody>

            </Grid>
        </Grid>
    );
};

export default SpecQuery;