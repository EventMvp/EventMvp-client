import { config } from "@/constants/url";
import { category } from "@/types/category";
import { Event } from "@/types/events";
import axiosInstance from "@/utils/axiosInstance";

async function getData() {
  let endpoints = config.endpoints.getCategoryEvent;
  try {
    const response = await axiosInstance.get(endpoints);
    return response.data;
  } catch (error) {}
}

export async function getCategory() {
  const Events = (await getData()) as unknown as category[];
  return Events;
}
