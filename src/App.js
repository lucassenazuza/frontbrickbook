import "./App.css";
import React from "react";
import LoginPage from "pages/LoginPage";
import { BrowserRouter as Router  , Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import {blue, green} from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
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
