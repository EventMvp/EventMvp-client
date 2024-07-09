// utils/axiosInstance.ts

import axios from "axios";

// Create an instance of axios with custom config if needed
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PRODUCTION_URL, // Your API base URL from environment variable
  timeout: 5000, // Timeout after 10 seconds
  headers: {
    "Content-Type": "application/json",
    // You can add more headers here if needed
  },
});

// Optional: Interceptors for request and response
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify request headers or do other tasks before sending the request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Handle success responses
    return response.data; // Extract only the data from response
  },
  (error) => {
    // Handle error responses
    return Promise.reject(error);
  }
);

export default axiosInstance;
