import {
  Card,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import api from '../services/api'

import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { KeyboardArrowRight } from "@mui/icons-material";
import LogoLego from "components/LogoLego";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "block",
      flexDirection: "column",
      justifyContent: "space-between",
      margin: 20,
      padding: 20,
    },
    card: {
      display: "flex",
      alignItems: "center",

      justifyContent: "center",
      margin: 20,
      padding: 20,
    },
    item: {
      margin: 5,
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

function Login(props) {
  const classes = useStyles();

  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault()

      login(email, password) // integração com meu contexto
  }
  return (
    <div>
      <Card className={classes.card}>
        <form noValidate autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {/* <Typography variant="h4" color="initial" className={classes.item}>
              BrickBook
            </Typography> */}
            <LogoLego locationFile={'/logobrick.png'}/>
            <Grid item className={classes.item}>
              <TextField label="Login" color="secondary" fullWidth required onChange = {(e) => {setEmail(e.target.value)}} />
            </Grid>
            <Grid item className={classes.item}>
              <TextField
                label="Password"
                color="secondary"
                type="password"
                fullWidth
                required
                onChange = {(e) => {setPassword(e.target.value)}}
              />
            </Grid>
            <Grid item className={classes.item}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<KeyboardArrowRight />}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </div>
  );
}

export default Login;
