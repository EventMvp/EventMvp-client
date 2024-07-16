import { config } from "@/constants/url";
import { EventTicketItem } from "@/types/eventTicket";
import { getData } from "@/utils/getData";

export async function getEventTicketByEventId(eventId: string) {
  let endpoints = config.endpoints.getEventTicketByEventId + eventId;

  const ticketTypeList = (await getData(
    endpoints
  )) as unknown as EventTicketItem[];
  return ticketTypeList;
}
