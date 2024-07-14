import { getEventTicketByEventId } from "@/api/getEventTicketByEventId";
import { GET_EVENT_TICKET } from "@/constants/queryKey";
import { useQuery } from "@tanstack/react-query";

const useTransaction = (eventId: string) => {
  const {
    data: eventTicket,
    isLoading,
    error,
  } = useQuery({
    queryKey: [GET_EVENT_TICKET],
    queryFn: async () => await getEventTicketByEventId(eventId),
  });

  return {
    eventTicket,
    isLoading,
    error,
  };
};

export default useTransaction;
