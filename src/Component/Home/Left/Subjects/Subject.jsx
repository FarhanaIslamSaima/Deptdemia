import React from 'react';
import { Grid,Box, Typography } from '@mui/material';
import SubjectBody from './SubjectBody';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getElement } from '../../../../Actions/GetElement';
import { ContactPageSharp } from '@mui/icons-material';
import { db } from '../../../../firebase';
import {collection,where,query,ref, onSnapshot} from 'firebase/firestore'
import { useState } from 'react';
const Subject = () => {
    const {subject}=useParams();
    const [sub,setSub]=useState([]);
    console.log(sub)
    
    
    useEffect(()=>{
        const colRef=collection(db,'Contribution');
        const q=query(colRef,where("option","==",subject));
        onSnapshot(q,(snapshot)=>{
            let book=[];
            snapshot.docs.forEach((doc)=>{
                
                book.push({...doc.data(),id:doc.id});
            })
            
            setSub(book)
           

        })
       
       

       

       

    },[])
    
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
            {
                sub.map(item=>(
                    <Grid item xs={12} sm={12} lg={4}>
                    <SubjectBody item={item}/>
                   
    
                </Grid>

                ))
            }
           
          
           
            
            
           
            
        </Grid>
        </Box>
        </Box>
       
    );
};

export default Subject;