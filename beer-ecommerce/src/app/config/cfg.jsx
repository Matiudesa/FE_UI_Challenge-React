import axios from 'axios'

export const client = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_ECOMMERCE_API_URL
})
