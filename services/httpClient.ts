import axios from "axios"

export const req = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
})