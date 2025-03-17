import axios from 'axios'

// export const axiosInstance = axios.create()
// axiosInstance.defaults.baseURL = import.meta.env.VITE_APP_API_DOMEIN

// https://apidog.com/jp/blog/axios-baseurl-guide/
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_DOMEIN,
})
