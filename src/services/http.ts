import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import useToast from "../composables/toast";

const toast = useToast()
const BASE_URL = import.meta.env.VITE_BASE_URL

console.log('base',BASE_URL)

export default function useHttp() {

    const http = axios.create({
        baseURL: BASE_URL,
        timeout: 60000,
    })

    http.interceptors.response.use(
        (response) => {
            toast.success('data recieved successfully')
            return Promise.resolve(response)
        },
        // handle error
        (error) => {
            const msg = error?.response?.data
            toast.error(msg)
            return Promise.reject(error)
        }
    );
    return { http }
}