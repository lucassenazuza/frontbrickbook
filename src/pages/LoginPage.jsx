import { Grid } from "@material-ui/core";
import Login from "components/login/Login";
import LogoLego from "components/logoLego/LogoLego";

import React from "react";

function LoginPage(props) {
    const locationLogo="/lego.png"
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <Grid item  >
          <LogoLego locationFile={locationLogo} />
        </Grid>
        <Grid item md={12}> 
          <Login />
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginPage;
