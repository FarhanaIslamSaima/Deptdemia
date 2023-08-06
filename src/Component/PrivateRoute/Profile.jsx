import React, {useState} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { useEffect } from "react";
import { getAuth } from '@firebase/auth';
import { collection, getDoc, getDocs, onSnapshot, orderBy, query, snapshotEqual, where } from 'firebase/firestore';
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import Dashboardbody from '../NewsFeed/Dashboardbody';
import Pic from './assets/propic.jpg'


export default function Profile() {
    
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [userquery,setQuery]=useState([]);
    const [userContribution, setUserContribuiton] = useState([]);
    const location = useLocation();
    console.log(location.pathname);
    console.log(userquery)
    
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
      });
    const { name, email } = formData;
    function onLogout() {
        auth.signOut();
        navigate("/");
    }
    useEffect(()=>{

            
            let res=[];
            const ref=collection(db,'Query');
            const q=query(ref,where("authorId", "==", auth.currentUser.uid));
        
            onSnapshot(q,(snapshot)=>{
                snapshot.docs.forEach((doc)=>{
                    res.push({...doc.data(),id:doc.id});
                })
                setQuery(res);
                console.log(res);
            })
            let contribute=[];
            const con_ref=collection(db,'Contribution');
            const con_q=query(con_ref,where("authorId", "==", auth.currentUser.uid));

            onSnapshot(con_q, (snapshot)=>{
                snapshot.docs.forEach((doc)=>{
                    contribute.push({...doc.data(), id:doc.id});
                })
                setUserContribuiton(contribute);
                console.log(contribute);
            })

           
            
}, [auth.currentUser.uid])
    return (
    <Box sx={{width:'100%'}}>
        <Box sx={{width:'100%',display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column','&>*':{
            margin:'10px'
        }}}>
            <Typography variant='h5'>My Profile</Typography>
            <Box sx={{width:'200px',height:'200px', display:'flex', justifyContent:'center',alignItems:'center',borderRadius:"50%",border:'2px solid black'}}>
                <img src={Pic} width={'100%'} height={'100%'} style={{borderRadius:"50%"}}/>
            </Box>
            <Box sx={{'&>*':{
             
                
            }}}>
                <Typography sx={{fontSize:'20px'}}>Name:{name}</Typography>
                <Typography sx={{fontSize:'20px'}}>Email:{email}</Typography>
                <Typography sx={{fontSize:'20px'}}>Contrbutions:{userContribution.length}</Typography>
                <Typography sx={{fontSize:'20px'}}>Query:{userquery.length}</Typography>
                <Button variant={'contained'} color={'primary'} onClick={onLogout} sx={{background:'black' ,marginTop:'10px'}} >Logout</Button>
               
            </Box>
            
            

        </Box>
        
        <Box>
        <hr/>
            <Typography sx={{padding:'5px',display:'flex',justifyContent:'center',alignItems:'center'}} variant='h5'>My Query</Typography>
            <hr/>
            <Container sx={{ py:8 }} >
        
        <Grid container spacing={4}>
  
           {userquery.map(item=>(
            <Grid item sx={12} lg={4}>
                <Dashboardbody item={item}/>

            </Grid>
           
           
          


       ))}

           </Grid>
          
   </Container>
 
  
        </Box>
       
      

        </Box>
    )
}