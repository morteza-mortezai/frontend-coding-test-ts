import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export default function useHttp() {

    const http = axios.create({
        baseURL: BASE_URL,
        timeout: 60000,
        // headers
    })

    return {http}
}