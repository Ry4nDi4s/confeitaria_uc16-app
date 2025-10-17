import axios from "axios";

const api = axios.create({
    baseURL: 'https://confeitaria-uc16.onrender.com',
    //baseURL: 'http://localhost:3000',
  });
  api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;