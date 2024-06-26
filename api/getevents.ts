import { config } from "@/constants/url";
import { Event } from "@/types/events";
import axiosInstance from "@/utils/axiosInstance";

async function getData() {
  let endpoints = config.endpoints.events;

  try {
    const response = await axiosInstance.get(endpoints);
    return response;
  } catch (error) {
    console.log("Error fetching data", error);
    throw error;
  }
}

export async function getEvents() {
  const Events = (await getData()) as unknown as Event[];
  return Events;
}
