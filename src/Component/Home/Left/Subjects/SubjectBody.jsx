import React, { useEffect, useState } from 'react';
import { Button, Card, Typography,Box} from '@mui/material';
import Modal from './Modal';
import SimpleDialogBox from './SimpleDialogBox';
import { Link } from 'react-router-dom';



const SubjectBody = ({item}) => {
    const emails = ['username@gmail.com', 'user02@gmail.com'];
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
    };
  
    const [modal,setModal]=useState(false);
     const [resume,setResume]=useState(null);
     useEffect(()=>{
        if(item.file!=''){
            setResume(item.file)

        }
        else{
            setResume('PDF NOT AVAIALABLE')
        }
        

     },[])
    
     console.log(modal)
    console.log(resume)
    return (
        <Card sx={{
            border:'2px solid black',
            margin:"10px",
            background: 'rgba(216, 216, 216, 0.16)',
borderRadius: '16px',
boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
backdropFilter: 'blur(3.7px)',
border: '2px solid rgba(216, 216, 216, 1.5)'
        }}>

            <Box sx={{
                padding:'10px',
                margin:'10px',
                display:'flex',
                flexDirection:'column',
                '&>*':{
                    margin:'5px'
                }
            }}>
                <Typography><b>Problem Statement:</b>{item.title}</Typography>
                <Typography><b>Author:</b>{item.author}</Typography>
                <Typography><b>Subject:</b>{item.option}</Typography>
                
                <Box sx={{display:'flex','&>*':{
                    margin:"5px"
                }}}>
                    <Box>
                    <Button color={'primary'} variant={'contained'} style={{background:"black"}} onClick={handleClickOpen}>PDF</Button>
                    </Box>
                    <Box>
                    <Button component ={Link} to={`/ans/${item.id}`}color={'primary'} variant={'contained'} style={{background:"black"}} onClick={handleClickOpen}>ANSWER</Button>
                    </Box>
                </Box>

                <SimpleDialogBox
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        resume={resume}
      />

            </Box>
        </Card>
    );
};

export default SubjectBody;