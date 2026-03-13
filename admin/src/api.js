import axios from "axios";

export const api = axios.create({
  baseURL: "https://birur-trading-backend.onrender.com/api",
});
