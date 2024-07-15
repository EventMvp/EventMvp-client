import { config } from "@/constants/url";
import { Event } from "@/types/events";
import { getData } from "@/utils/getData";

export async function getEventById(eventId: string) {
  let endpoints = config.endpoints.getEventById + eventId;

  const getEventById = (await getData(endpoints)) as unknown as Event;
  return getEventById;
}
