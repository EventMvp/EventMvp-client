import { config } from "@/constants/url";
import { Event } from "@/types/events";
import { getData } from "@/utils/getData";

export async function getEventsByTitle(filter: Record<string, any>) {
  let endpoints = config.endpoints.searchByTitle;

  const searchevents = (await getData(endpoints, filter)) as unknown as Event[];
  return searchevents;
}
