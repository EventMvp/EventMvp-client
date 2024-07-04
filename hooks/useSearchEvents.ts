import { getEventsByTitle } from "@/api/getEventByTitle";
import { GET_SEARCH_EVENTS } from "@/constants/queryKey";
import { useQuery } from "@tanstack/react-query";

const useSearchEvents = (filters?: Record<string, any>) => {
  const {
    data: searchEvents,
    isLoading,
    error,
  } = useQuery({
    queryKey: [GET_SEARCH_EVENTS, filters],
    queryFn: async () => await getEventsByTitle(filters),
    enabled: !!filters,
  });

  return {
    searchEvents,
    isLoading,
    error,
  };
};

export default useSearchEvents;
