"use client";

import { getEventById } from "@/api/getEventById";
import { GET_EVENT_BY_ID } from "@/constants/queryKey";
import { useQuery } from "@tanstack/react-query";

const useEventDetails = (eventId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [GET_EVENT_BY_ID],
    queryFn: async () => await getEventById(eventId),
    enabled: !!eventId,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useEventDetails;
