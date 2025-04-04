import axios from "axios";
import { URL } from "../constant/url";

const API = axios.create({
  baseURL: `${URL.BACKEND_URL}`,
  withCredentials: true,
});

export default API;
