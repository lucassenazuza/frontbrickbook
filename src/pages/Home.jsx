import { Button } from '@material-ui/core';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import LogoLego from '../components/LogoLego';

import { AuthContext } from '../contexts/auth';
function Home(props) {

    return (
        <div>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                    <Card sx={{padding: 2}} elevation={3}>
                    <LogoLego locationFile={"/castle.png"}></LogoLego>
                    <CardContent>
          <Typography gutterBottom variant="h5" color="text.secondary" component="div">
            
          Everything is awesome...</Typography></CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;