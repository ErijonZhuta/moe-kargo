import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/moe-kargo",
  headers: {
    Accept: "application/json",
  },
});

export default api;
