import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000,
});

// handle pre request
apiClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // get token from local storage
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// handle response
apiClient.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response.data;
  },
  (error) => {
    //handle error from server
    // 400, 401, 403, 404, 500
    // if (error.response.status === 404) {
    //   window.location.replace("/404");
    // }

    // if (error.response.status === 401) {
    //   // redirect to login page
    //   window.location.replace("/login");
    // }

    // if (error.response.status === 403) {
    //   // redirect to 403 page
    //   window.location.replace("/403");
    // }

    // Do something with response error
    return Promise.reject(error);
  }
);

// method
export const get = <T,>({
  url,
  params,
  config,
}: {
  url: string;
  params?: AxiosRequestConfig["params"];
  config?: AxiosRequestConfig;
}): Promise<T> =>
  apiClient.get(url, {
    url,
    params,
    ...config,
  });

export const post = <T,>({
  url,
  data,
  config,
}: {
  url: string;
  data: unknown;
  config?: AxiosRequestConfig;
}): Promise<T> => apiClient.post(url, data, config);