import React from 'react';
import { Grid,Box, Typography } from '@mui/material';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { ContactPageSharp } from '@mui/icons-material';

import {collection,where,query,ref, onSnapshot} from 'firebase/firestore'
import { db } from '../../../firebase';

import { useState } from 'react';
import SpecQueryBody from '../ContributeSol/SpecQueryBody';
import SpecSolbody from './SpecSolbody';

const SpecSol = () => {
    const [solution,setSolution]=useState([]);
    const {id}=useParams()
    console.log(id)
    useEffect(()=>{
        const colRef=collection(db,'QuerySol');
        const q=query(colRef,where("queryId","==",id));
        onSnapshot(q,(snapshot)=>{
            let sol=[];
            snapshot.docs.forEach((doc)=>{
                sol.push({...doc.data(),id:doc.id});
            })
            setSolution(sol);
            console.log(sol);

        })

    },[])
    
    const [sub,setSub]=useState([]);
    console.log(solution)
    
    
  
    
    return (
        <Box sx={{
         
            height:'100px',
            width:'100%',
            background:'#E8E3C5',
            height:"1000px"
        
            
            
           
        }}>
            <Typography variant={'h5'} sx={{
                display:"flex",
                justifyContent:'center',
                alignItems:'center',
                marginBottom:"10px",
                marginTop:"10px"
                

            }}>FIND YOUR DESIRED  SOLUTION :</Typography>
            <Box sx={{
               
            }}>

         
        <Grid container>
            {solution && solution.map(item=>(
                <Grid item xs={12} sm={12} lg={4}>
                <SpecSolbody item={item}/>
               

            </Grid>

            ))}
            
                    

             
           
          
           
            
            
           
            
        </Grid>
        </Box>
        </Box>
       
    );
};

export default SpecSol;