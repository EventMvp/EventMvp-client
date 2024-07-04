import { config } from "@/constants/url";
import axiosInstance from "./axiosInstance";

export async function getData(endpoints: string, params?: Record<string, any>) {
  try {
    const response = await axiosInstance.get(endpoints, { params });
    return response.data;
  } catch (error) {
    console.log("Error message", error);
    throw error;
  }
}
