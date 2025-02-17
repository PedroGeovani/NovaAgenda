import { URL } from '@/api/address'
import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios'

function apiConfig(baseUrl: string): AxiosRequestConfig {
  return {
    baseURL: baseUrl
  }
}

function initAxios(config: AxiosRequestConfig, token?: any): AxiosInstance {
  const defineInstance = axios.create(config)
  defineInstance.interceptors.request.use(
    (request: AxiosRequestConfig): any => {
      return request
    },
    (error) => Promise.reject(error)
  )

  defineInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      alert(error)
      return Promise.reject(error)
    }
  )

  return defineInstance
}

function api(baseURL = URL, token?: any) {
  return initAxios(apiConfig(baseURL), token)
}

export default api
