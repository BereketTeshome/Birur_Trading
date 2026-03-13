import axios from "axios";

export const api = axios.create({
  baseURL: "https://birur-trading-backend.vercel.app/api",
});
