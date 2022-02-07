import React from 'react';

import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';


import { AuthContext, AuthProvider } from "./contexts/auth"
import { useContext } from 'react';
function AppRoutes(props) {
    const Private = ({children}) => {
      const { authenticated, loading } = useContext(AuthContext);
    
    //antes de verificar se esta autenticado, verifico se esta carregado
    if(loading) {
      return <div className="loading"> Carregando...</div>
    }

    if(!authenticated){
      return <Navigate to="/login" />;
    }
  return children;  
  }

  // user != null
  // authenticate false

  return (
    <div>
      <Router>
      <AuthProvider >
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/" element={<Private><Home /></Private>} />
            {/* Home Page */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default AppRoutes;