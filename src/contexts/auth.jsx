import React , { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";
import api, { createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{ const recoveredUser = 
    localStorage.getItem('user')
    if(recoveredUser){
      //verifico se existe usuario savo e decodifico ele
      //e salvo no contexto da aplicação
      setUser(JSON.parse(recoveredUser));
    }
    // aguardo useEffect q eh assincrono acabar
    setLoading(false);
  }, [])
    const login = async (email, password) => {
      console.log("login", {email, password});

      const response = await createSession(email, password);
      console.log(response.data);

      //api cria uma session, e api retona usuario
      const loggedUser = email;
      const token = response.data.token;
      
      //sempre q a api for enviar uma req, vai enviar esse token
      api.defaults.headers.Authorization = `Bearer ${token}`;

      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);
      
      setUser(loggedUser);
      navigate("/");

    };
    const logout = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      console.log("logout");
      setUser(null);
      api.defaults.headers.Authorization = null;
      navigate("/login")
    };




    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }} >
            { children}
        </AuthContext.Provider>

    );
}