import React from 'react';
import {AppBar,Toolbar,makeStyles,Button,Box,Typography, Grid} from '@material-ui/core'
const useStyle=makeStyles({
   header:{
    background:'black'
   },
   container:{
    display:'flex',
    width:'100%'
    
   },
   leftContainer:{
    width:'50%'
   },
   rightContainer:{
    width:"50%",
    marginLeft:'auto',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    '&>*':{
       // margin:'10px'
    margin:'5px',
    fontWeight:'bold',
    fontSize:'18px'
    }
   }

})

const Header = () => {
    const classes=useStyle();

    return (
       <AppBar className={classes.header}>
        <Toolbar>
            <Box className={classes.container}>
            <Box className={classes.leftContainer}>
        
                

</Box>
<Box className={classes.rightContainer}>
    
       <Typography>Query</Typography>
        <Typography>Contribute</Typography>
       <Typography>Logout</Typography>
   
    
     
        
        

        
     

    

            
          

</Box>

            </Box>
            

        </Toolbar>
       </AppBar>
    );
};

export default Header;