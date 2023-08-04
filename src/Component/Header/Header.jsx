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
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const pages = ['Query', 'Contribute'];
const subjects = ['Physics', 'Chemistry', 'Math', 'Biology'];
const Actions=['Logout'];




const Header = () => {
  const test="NAN"
   const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const auth = getAuth();
  const [pageState, setPageState] = React.useState("Sign in");
 
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

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
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <div>Loading</div>;
  }


  return (
    <AppBar position="static"
    sx={
      {
        background:'black'

      }
    }
    
    
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DEPTDEMIA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              }}
            >
               
                  <MenuItem  onClick={handleCloseNavMenu}>
                 <Link to={'/Query'} style={{textDecoration:'none', color:'black'}}><Typography textAlign="center">Query</Typography></Link>
                
                
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                 <Link to={'/Contribute'} style={{textDecoration:'none', color:'black'}}><Typography textAlign="center">Contribute</Typography></Link>
                
                
                </MenuItem>
                <MenuItem>
                <Link to={"/profile"} style={{textDecoration:'none', color:'black'}}><Typography sx={{
              color:'black',
              textDecoration:'none'

           }}>{pageState}</Typography></Link>
                
                
                </MenuItem>
              

              
              
              
               
            
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              href:"/",
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DEPTDEMIA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Link to={"/Query"} style={{textDecoration:'none'}}><Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block ' }}
              >
                Query
              </Button></Link>
              <Link to={`/Contribute`} style={{textDecoration:'none'}}><Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block ' }}
              >
                Contribution
              </Button></Link>
              
           
          </Box>
          <Box sx={{ flexGrow: 0,display: { xs: 'none', md: 'flex' } }}>
            
              
              <Link to={"/profile"} style={{textDecoration:'none', color:'black'}}><Typography sx={{
              color:'white',
              textDecoration:'none'

           }}>{pageState}</Typography></Link>
              
        
         
          </Box>

          <Box sx={{ flexGrow: 0,display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Typography sx={{color:'white'}}>Courses</Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {subjects.map((subject) => (
                <MenuItem key={subject} onClick={handleCloseUserMenu}>
                  <Link to={`subject/${subject}` } style={{textDecoration:'none',color:'black'}}><Typography textAlign="center">{subject}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    );
};

export default Header;