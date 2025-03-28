import axios from "axios"

export const API_URL = import.meta.env.VITE_API_URL

export const API = axios.create({
   baseURL: API_URL,
   withCredentials: true,
   headers: {
      "Content-Type": "application/json",
   },
})
