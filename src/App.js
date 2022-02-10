import "./App.css";
import React from "react";
import AppRoutes from "./AppRoutes";
import { createTheme, ThemeProvider } from '@material-ui/core'


const theme = createTheme({
  palette:{
    background: {
      default: "#303030"
    }
  },
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
