import React, { useState } from 'react';
import { Grid } from '@mui/material';
import SpecQueryBody from './SpecQueryBody';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useEffect } from 'react';

const SpecQuery = () => {
    const {id}=useParams();
    const [query,setQuery]=useState(null);
    useEffect(()=>{
        const getData=async()=>{
            const Docref=doc(db,'Query',id);
            const docSnap=await getDoc(Docref);
            setQuery(docSnap.data());
            console.log(docSnap.data());

        
     
        
       
        
        
        
    

    }
    getData();

        
    },[])
    return (
        <Grid container>
            <Grid item sm={12} xs={12}>
                <SpecQueryBody query={query} id={id}></SpecQueryBody>

            </Grid>
        </Grid>
    );
};

export default SpecQuery;