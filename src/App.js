import "./App.css";
import React from "react";
import AppRoutes from "./AppRoutes";
import { createMuiTheme, ThemeProvider } from '@material-ui/core'


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Arial',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
