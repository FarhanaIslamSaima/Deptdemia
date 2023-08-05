import React from 'react';
import { Grid,Box, Typography,Card ,Button} from '@mui/material';
import Contribute from '../Contribute/Contribute';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const NewsfeedBody = ({item}) => {
    const test="NAN"
    const location = useLocation();
    console.log(location.pathname);
    const notProfile = true;
    if (location.pathname === "/profile" ){
        notProfile = false;
    }
    return (
     <Card sx={{
        margin:'10px',
        boxShadow:  '7px 7px 10px 1px rgba(0,0,0,0.75)',
        /* From https://css.glass */
background: 'rgba(216, 216, 216, 0.16)',
borderRadius: '16px',
boxShadow: '8px -5px 12px 0px rgba(0,0,0,0.2)',
backdropFilter: 'blur(3.7px)',
border: '1px solid rgba(216, 216, 216, 0.9)'


        
     }}>
        <Box sx={{
            padding:'15px',
            display:'flex',
            flexDirection:'column',
            '&>*':{
                margin:'2px'
            }
        }}>
            <Typography><b>Author:</b> {item.author}</Typography>
            <Typography><b>Subject:</b>{item.option}</Typography>
            
            
            
           
            <Typography><b>Problem statement:</b>{item.title}</Typography>
            <Box sx={{
                display:'flex',
                width:'100%',
                '&>*':{
                    margin:'5px'

                },
                justifyContent:'space-between'
            }}>

                
                <Box sx={{
                    width:'50%'
                }}>

                <Button component={Link} to={`/solve/${item.id}`}variant={'contained'} color={'primary'} sx={{background:'black',marginTop:'10px'}}>Solution</Button>
                </Box>
                <Box sx={{
         
                    
                    width:'50%'
                }}>
                    <Button component={Link} to={`/details/${item.id}`} variant={'contained'} color={'primary'} sx={{marginTop:'10px',background:'black'}}>See More</Button>
                </Box>

            </Box>
            
        </Box>
     </Card>
    );
};

export default NewsfeedBody;