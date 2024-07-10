import { config } from "@/constants/url";
import { Register } from "@/types/register";
import axiosInstance from "@/utils/axiosInstance";

async function getData(value: Register) {
  let endpoints = config.endpoints.createUser;

  try {
    const response = await axiosInstance.post(endpoints, value);
    return response.data;
  } catch (e) {
    console.log("Error fetching data", e);
    throw e;
  }
}

export async function addUser(value: Register) {
  const user = (await getData(value)) as unknown as Register;
  console.log("User added successfully:", user);
  return user;
}
