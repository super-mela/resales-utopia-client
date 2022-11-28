import axios from "axios";

export const instance = axios.create({
  baseURL: `https://resales-utopia-server.vercel.app/`,
  headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
});
