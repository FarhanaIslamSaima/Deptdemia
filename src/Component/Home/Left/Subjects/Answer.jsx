import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { query,where,onSnapshot,collection } from 'firebase/firestore';
import { getDoc,doc } from 'firebase/firestore';
import { db } from '../../../../firebase';
import { Button, Typography } from '@mui/material';
import {Box} from '@mui/material';
const Answer = () => {
    const {id}=useParams();
    const [ans,setAns]=useState([])
    console.log(ans);
    useEffect(()=>{
        const getData=async()=>{
            const Docref=doc(db,'Contribution',id);
            const docSnap=await getDoc(Docref);
            setAns(docSnap.data());
            console.log(docSnap.data());
        }
        getData();



    },[])
    return (
        <Box sx={{margin:"20px", padding:'10px','&>*':{
            padding:"10px"

        }}}>
            <Typography variant='h5' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>{ans.title}</Typography>
            {
                ans.content!=''?<Typography><b>ANS:</b>{ans.content}</Typography>:<Typography>Answer Not Available.View PDF</Typography>
            }
            
            
            
           

            <Button variant={'contained'} color={'primary'} sx={{background:'black'}} component={Link} to={`/subject/${ans.option}`}>Back</Button>

        </Box>
    );
};

export default Answer;