import axios, { AxiosRequestConfig } from "axios";
import history from "./history";
import tokenService from "./token-service";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = tokenService.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (config.url === "/api/user/logout") {
      config.data = { refreshToken: tokenService.getRefreshToken() };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const data = await instance.post("/api/user/refresh-token", {
          refreshToken: tokenService.getRefreshToken(),
        });
        const { accessToken, refreshToken } = data.data;
        tokenService.setAccessToken(accessToken);
        tokenService.setRefreshToken(refreshToken);
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);
        tokenService.clearTokens();
        history.replace("/login");
        return Promise.reject(refreshError);
      }
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
