import axios from "axios";

export default function setupAxiosInterceptors() {
  let userName = "user";
  let password = "password";
  let basicAuthHeader = "Basic " + window.btoa(userName + ":" + password);
  axios.interceptors.request.use(
    (config) => {
      console.log(" basicAuthHeader is " + basicAuthHeader);
      config.headers.authorization = basicAuthHeader;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
}
