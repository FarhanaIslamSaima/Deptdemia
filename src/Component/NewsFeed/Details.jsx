import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection,doc,getDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebase';
import { Box, Typography ,Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { InsertEmoticon } from '@mui/icons-material';
const Details = () => {
    const {id}=useParams();
    const [query,setQuery]=useState([])
    console.log(query);
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
        <Box sx={{background:'#E8E3C5',height:"1000px"}}>
       
           <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',margin:'10px','&>*':{
            margin:'6px'
           }}}>
            
                
                 <Typography variant={'h4'}>{query.title}</Typography>
                 <Typography ><b>Author:</b>{query.author}</Typography>
                 <Typography ><b>Subject:</b>{query.option}</Typography>
                 
                {query.file!=''? <Box sx={{height:'25%',width:'25%',display:{xs:'none',md:'flex'}}}>

<img src={query.file} width={'100%'} height={'100%'} style={{objectFit:'scale-down'}}/>
</Box>:''}
{query.file!=''? <Box sx={{height:'75%',width:'75%',display:{xs:'flex',md:'none'}}}>

<img src={query.file} width={'100%'} height={'100%'} style={{objectFit:'scale-down'}}/>
</Box>:''}
                 
                 <Typography sx={{marginBottom:'5px',padding:'5px'}}>{query.content}</Typography>
                 <Button component={Link} to={`/SpecQuery/${id}`} variant={'contained'} color={'primary'} sx={{background:'black'}}>Submit Solution</Button>
                
                
                
                


           

           </Box>
           </Box>
    );
};

export default Details;