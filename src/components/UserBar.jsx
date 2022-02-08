import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material';
import { AuthContext } from '../contexts/auth';

export default function DenseAppBar() {
  const user = JSON.parse(localStorage.getItem('user'));


  return (
    <Box sx={{ flexGrow: 1, marginBottom: 5 }} >
      <AppBar position="static" >
        <Toolbar variant="dense" sx = {{justifyContent: 'right', alignSelf: 'flex-end'}}>
          <Typography variant="h6" color="inherit" sx={{marginRight: 1}}  >
            Olá {user.email}!
          
          </Typography>
          <IconButton>
          <AccountCircle color="inherit" />
          </IconButton>
          
     
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}