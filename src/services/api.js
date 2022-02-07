

 import axios from 'axios';


 const api = axios.create({
   baseURL: "http://localhost:8000/",
 });

 

export const createSession = async (email, password) => {
  return api.post('/signin', {email, password})
}

export default api;