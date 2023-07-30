import React from 'react';
import { Grid,Box, Typography,Card ,Button} from '@mui/material';


const NewsfeedBody = () => {
    return (
     <Card sx={{
        margin:'10px',
        
     }}>
        <Box sx={{
            padding:'15px',
            display:'flex',
            flexDirection:'column',
            '&>*':{
                margin:'2px'
            }
        }}>
            <Typography><b>Author:</b> Farhana Islam</Typography>
            <Typography><b>Subject:</b>Physics</Typography>
            <Typography><b>Date:</b>21.05.2001</Typography>
            <Typography><b>Problem statement:</b>amar main somossa ami kisu pari na. hok seta physics bangla. porashona charte chaile kivabe planning shuru kora uchit</Typography>
            <Button variant={'contained'} color={'primary'} sx={{backgroundColor:'black'}}>Solution</Button>
        </Box>
     </Card>
    );
};

export default NewsfeedBody;