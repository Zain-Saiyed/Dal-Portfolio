import axios, { AxiosRequestConfig } from "axios";
import history from "./history";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 10000,
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access - redirecting to login");
      history.replace("/login");
    }
    return Promise.reject(error);
  }
);

const GET = (url: string, options?: AxiosRequestConfig) => {
  return instance.get(url, options);
};

const POST = (url: string, data?: any, options?: AxiosRequestConfig) => {
  return instance.post(url, data, options);
};

const PUT = (url: string, data?: any, options?: AxiosRequestConfig) => {
  return instance.put(url, data, options);
};

const PATCH = (url: string, data?: any, options?: AxiosRequestConfig) => {
  return instance.patch(url, data, options);
};

const DELETE = (url: string, options?: AxiosRequestConfig) => {
  return instance.delete(url, options);
};

export { GET, POST, PUT, DELETE, PATCH };

