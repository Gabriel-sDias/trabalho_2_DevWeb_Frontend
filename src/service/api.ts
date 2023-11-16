import axios from "axios";
//configuração da url base da api
const api = axios.create({
  baseURL: "https://trabalho-dev-web2.vercel.app",
});

export default api;
