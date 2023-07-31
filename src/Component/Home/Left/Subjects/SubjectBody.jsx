import React from 'react';
import { Button, Card, Typography,Box} from '@mui/material';

const SubjectBody = () => {
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
                <Typography><b>Problem Statement:</b> ami kisu pari na</Typography>
                <Typography><b>Author:</b>Farhana Islam</Typography>
                <Typography><b>Date:</b>21.05.2001</Typography>
                <Button color={'primary'} variant={'contained'} style={{background:"black"}}>View Solution</Button>
            </Box>
        </Card>
    );
};

export default SubjectBody;