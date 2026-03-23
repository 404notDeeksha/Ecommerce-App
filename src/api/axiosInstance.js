import axios from "axios";
import { URL } from "@config/index.js";

const API = axios.create({
  baseURL: `${URL.BACKEND_URL}`,
  withCredentials: true,
});

export default API;
