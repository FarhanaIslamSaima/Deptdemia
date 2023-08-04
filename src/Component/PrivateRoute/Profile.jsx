import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { useEffect } from "react";
import { getAuth } from '@firebase/auth';
import { collection, getDoc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { Box, Grid, Typography } from '@mui/material';
import NewsfeedBody from '../NewsFeed/NewsfeedBody';


export default function Profile() {
    
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [userquery,setQuery]=useState([]);
    
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
                console.log(res);
            })
            setQuery(res);
            
}, [auth.currentUser.uid])
    return (
        <div>
            <input type="text" disabled value={email} /><br/>
            <input type="text"  disabled value={name} />
            <button onClick={onLogout}>Logout</button>
            <hr />
            <p>My query </p>
            <hr />
            <Box  sx={{
            margin:"20px"
        }}>
           
        <Grid container>
            {
                userquery.map(item=>(
                    <Grid item lg={12} sm={12} xs={12}>
                    <Typography><b>Author:</b> {item.author}</Typography>
                <Typography><b>Subject:</b>{item.option}</Typography>
                <Typography><b>Date:</b>21.05.2001</Typography>
                <Typography><b>Problem statement:</b>{item.content}</Typography>
                   
        
                </Grid>

                ))
            }
       
       
        

       </Grid>
       </Box>

        </div>
    )
}