import axios from "axios";
import { URL } from "./address";

const instance = axios.create({
    baseURL: URL
  })


