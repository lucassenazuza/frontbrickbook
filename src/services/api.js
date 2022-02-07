

 import axios from 'axios';


 const api = axios.create({
   baseURL: "http://localhost:8000/",
 });

 

export const createSession = async (email, password) => {
  return api.post('api/v1/auth', {email, password})
}

export default api;