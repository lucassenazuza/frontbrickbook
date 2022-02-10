

 import axios from 'axios';


 const api = axios.create({
   baseURL: "http://localhost:8080/",  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
 });

 

export const createSession = async (email, password) => {
  return api.post('/signin', {email, password}, )
}

export default api;