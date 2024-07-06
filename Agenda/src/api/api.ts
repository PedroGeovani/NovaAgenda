import axios from "axios";
import { URL } from "./address";

export const api = axios.create({
    baseURL: URL
  })


