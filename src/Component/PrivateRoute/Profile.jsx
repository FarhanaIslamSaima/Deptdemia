import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { useEffect } from "react";
import { getAuth } from '@firebase/auth';
import { collection, getDoc, getDocs, onSnapshot, orderBy, query, snapshotEqual, where } from 'firebase/firestore';
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import NewsfeedBody from '../NewsFeed/NewsfeedBody';



export default function Profile() {
    
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [userquery,setQuery]=useState([]);
    const [userContribution, setUserContribuiton] = useState([]);
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
        <div>
            <input type="text" disabled value={email} /><br/>
            <input type="text"  disabled value={name} />
            <button onClick={onLogout}>Logout</button>
            <hr />
            <p>My query </p>
            <hr />
            <Container sx={{ py: 8 }} maxWidth="md">
        
                 <Grid container spacing={4}>
           
                    {userquery.map(item=>(
                    
                    <NewsfeedBody item={item}/>
                   
        

                ))}
       
                    </Grid>
            </Container>
            <hr />
            <p>My Contribution </p>
            <hr />
            <Container sx={{ py: 8 }} maxWidth="md">
        
                 <Grid container spacing={4}>
           
                    {userContribution.map(item=>(
                    
                    <NewsfeedBody item={item}/>
                   
        

                ))}
       
                    </Grid>
            </Container>

        </div>
    )
}