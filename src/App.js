import "./App.css";
import React from "react";
import LoginPage from "pages/LoginPage";
import { BrowserRouter as Router  , Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
