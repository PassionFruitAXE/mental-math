import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { message } from "antd";

export const createAxiosByInterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
  });

  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    response => {
      const { code, msg, data } = response.data;
      if (code >= 200 && code < 300) {
        return response.data;
      } else {
        console.log(response.config);
        message.error(msg || "未知错误");
        return Promise.reject(response.data);
      }
    },
    error => {
      console.log("error-response:", error.response);
      console.log("error-config:", error.config);
      console.log("error-request:", error.request);
      message.error(error?.response?.data?.msg || error.message);
      return Promise.reject(error);
    }
  );

  return instance;
};
