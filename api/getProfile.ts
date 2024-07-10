import { config } from "@/constants/url";
import { category } from "@/types/category";
import { Event } from "@/types/events";
import { Profile } from "@/types/profile";
import axiosInstance from "@/utils/axiosInstance";

async function getData() {
  let endpoints = config.endpoints.getProfile;

  try {
    const response = await axiosInstance.get(endpoints);
    return response.data;
  } catch (error) {
    console.log("Error message", error);
    throw error;
  }
}

export async function getProfile() {
  const profile = (await getData()) as unknown as Profile;
  return profile;
}
