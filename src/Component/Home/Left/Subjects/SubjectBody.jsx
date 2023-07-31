import React, { useEffect, useState } from 'react';
import { Button, Card, Typography,Box} from '@mui/material';
import Modal from './Modal';
import SimpleDialogBox from './SimpleDialogBox';



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
        setResume(item.file)

     },[])
    
     console.log(modal)
    console.log(resume)
    return (
        <Card sx={{
            border:'2px solid black',
            margin:"10px"
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
                <Typography><b>Date:</b>21.05.2001</Typography>
                <Button color={'primary'} variant={'contained'} style={{background:"black"}} onClick={handleClickOpen}>View Solution</Button>
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