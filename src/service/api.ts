import axios from "axios";

const api = axios.create({
  baseURL: "https://trabalho-dev-web2.vercel.app",
});

export default api;
