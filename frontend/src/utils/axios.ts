import axios, { AxiosRequestConfig } from "axios";
import history from "./history";
import tokenService from "./token-service";

const instance = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

const protectedPaths = [
    '/api/user/profile',
    '/api/orders',
    '/api/secure/data',
    // Add more protected paths as needed
];

instance.interceptors.request.use(
    config => {
        // Check if the request URL is one of the protected paths
        const isProtectedRoute = protectedPaths.some(path => config.url && config.url.includes(path));


        const accessToken = tokenService.getAccessToken();
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


instance.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const data = await instance.post('/api/user/refresh-token', {
                refreshToken: tokenService.getRefreshToken(),
            });
            const { accessToken, refreshToken } = data.data;
            tokenService.setAccessToken(accessToken);
            tokenService.setRefreshToken(refreshToken);
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            return instance(originalRequest);
        } catch (refreshError) {
            console.error("Error refreshing token:", refreshError);
            tokenService.clearTokens();
            history.replace('/login');
            return Promise.reject(refreshError);
        }
    }
    return Promise.reject(error);
});

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
