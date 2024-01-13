import axios from "axios";

const BASE_URL = "https://shopwithvikbackend.onrender.com/api/";

// Function to get the token from local storage
const getToken = () => {
  return localStorage.getItem("token");
};

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

// Interceptor to set the token as a header for requests
userRequest.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
