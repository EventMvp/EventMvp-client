import { getEventsByTitle } from "@/api/events/getEventByTitle";
import { GET_SEARCH_EVENTS } from "@/constants/queryKey";
import { FiltersEventParams } from "@/types/FilterEventParams";
import { useQuery } from "@tanstack/react-query";

const useSearchEvents = (filters?: Record<string, any>) => {
  const {
    data: searchEvents,
    isLoading,
    error,
  } = useQuery({
    queryKey: [GET_SEARCH_EVENTS, filters],
    queryFn: async () => await getEventsByTitle(filters as FiltersEventParams),
    enabled: !!filters,
  });

  return {
    searchEvents,
    isLoading,
    error,
  };
};

export default useSearchEvents;
