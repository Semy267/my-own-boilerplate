import axios, { AxiosInstance } from "axios";
import config from "../environment";

const createAxiosInstance = (baseUrl: string = ""): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      //* Kalau ada api key tambahkan disini
    },
  });

  interceptor(instance);
  return instance;
};

const interceptor = (instance: AxiosInstance) => {
  //* interceptor saat request
  instance.interceptors.request.use(async (request) => {
    //* kalau ada token auth tambahkan disini
    //? request.headers.Authorization = `Bearer ${token}`;

    return request;
  });

  instance.interceptors.response.use((response) => response);
};

export const base = createAxiosInstance(config.BASE_URL);
