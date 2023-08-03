import React, { useEffect,useState } from 'react';
import { Grid,Box, Typography } from '@mui/material';
import NewsfeedBody from './NewsfeedBody';
import { getAllQuery } from '../../Actions/GetElement';
const Newsfeed = () => {
    const [query,setQuery]=useState([]);
    query.map(item=>{
        console.log(item.id);
    })
    

    useEffect(()=>{
        const getData=async()=>{
            try{
                const data=await getAllQuery();
                setQuery(data);
                console.log(data);

            }
            catch(error){
                console.log(error);
            }

        }
        getData();

    },[])
    return (
        <Box  sx={{
            margin:"20px"
        }}>
           
        <Grid container>
            {
                query.map(item=>(
                    <Grid item lg={12} sm={12} xs={12}>
                    <NewsfeedBody item={item}/>
                   
        
                </Grid>

                ))
            }
       
       
        

       </Grid>
       </Box>
    );
};

export default Newsfeed;