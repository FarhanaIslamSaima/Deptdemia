import React from 'react';
import { Grid,Box, Typography } from '@mui/material';
import SubjectBody from './SubjectBody';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getElement } from '../../../../Actions/GetElement';
import { ContactPageSharp } from '@mui/icons-material';
import { db } from '../../../../firebase';
import {collection,where,query,ref, onSnapshot} from 'firebase/firestore'
import pic from './assets/pic.jpg'
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
         
            background:`url(${pic}) no-repeat center center fixed`,
            width:'100%',
            height:'1000px'
            
           
        }}>
            <Typography variant={'h5'} sx={{
                display:"flex",
                justifyContent:'center',
                alignItems:'center',
                marginBottom:"10px",
                marginTop:'10px'

            }}>FIND YOUR DESIRED SUBJECt SOLUTION :</Typography>
            <Box sx={{
               
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