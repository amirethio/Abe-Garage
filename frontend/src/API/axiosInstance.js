import axios from "axios";
import logedindata from "./../utils/auth";
import { setUserDataExternal } from "../context/AuthContext";

let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/refresh`,
          { withCredentials: true }
        );

        setAccessToken(res.data.accessToken);
        localStorage.setItem("authToken", res.data.accessToken);

        if (setUserDataExternal) {
          const decode = logedindata();
          setUserDataExternal(decode);
        }

        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // refresh failed → logout
        localStorage.removeItem("authToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
