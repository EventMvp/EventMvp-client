import { config } from "@/constants/url";
import { CreateEventReqDto } from "@/types/FormCreateEventTypes";

export const createEvent = async (eventData: CreateEventReqDto) => {
  const response = await fetch(config.BASE_URL + config.endpoints.buyEvent, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(eventData),
  });

  const data = await response.json();

  if (data.success === true) {
    return data.data;
  } else {
    throw new Error(data.message || "Failed to create event");
  }
};
