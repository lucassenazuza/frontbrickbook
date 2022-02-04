import "./App.css";
import React from "react";
import LoginPage from "pages/LoginPage";
import { BrowserRouter as Router  , Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          {/* Home Page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
