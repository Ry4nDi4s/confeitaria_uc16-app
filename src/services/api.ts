import AuthRepository from "@/repositories/auth";
import axios from "axios";

const api = axios.create({
  baseURL: "https://confeitaria-uc16.onrender.com",
  //baseURL: "http://localhost:3000"
});

api.defaults.headers.post["Content-Type"] = "application/json";
api.defaults.headers.get["Content-Type"] = "application/json";
api.defaults.headers.delete["Content-Type"] = "application/json";
api.defaults.headers.put["Content-Type"] = "application/json";

export const apiAuth = api.create();

apiAuth.interceptors.request.use(function (config) {
  const token = AuthRepository.getToken();
  if (token) {
    config.headers.Authorization = " Bearer " + token;
  }
  return config;
});

// Se a resposta for 401, faz logout e redireciona
apiAuth.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      AuthRepository.setToken(null);
      //window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default api;