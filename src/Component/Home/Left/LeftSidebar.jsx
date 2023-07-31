import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import LeftSIdeBody from './LeftSIdeBody';
const pages = ['Physics','Chemistry','Math','Biology'];

const LeftSidebar = () => {
  var i=0;
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
        <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },position:'absolute',right:'10px',top:'65px'}} >
        <Button
         
          onClick={handleOpenNavMenu}
       variant={'contained'}
       color='primary'
       sx={{
        background:'black'
       }}
       
        >
          Solutions
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
            width:'300px'
          }}
        >
           { pages.map((page)=>(
           
             
              <MenuItem  onClick={handleCloseNavMenu}>
             <Link to={`/subject/${page}`} style={{textDecoration:'none',color:'black', fontWeight:'bold'}} ><Typography textAlign="center" sx={{fontWeight:'bold'}}>{page}</Typography></Link> 
             
            </MenuItem>

           ))}
          
          
           
        
        </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
     <LeftSIdeBody></LeftSIdeBody>
      </Box>
      </Container>

    );
};

export default LeftSidebar;