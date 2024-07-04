import { getCategory } from "@/api/getCategory";
import { getFilteredEvents } from "@/api/getFilteredEvents";
import { getEvents } from "@/api/getevents";
import {
  GET_CATEGORY,
  GET_EVENTS,
  GET_FILTERED_EVENTS,
  GET_FREE_EVENTS,
} from "@/constants/queryKey";
import { Event } from "@/types/events";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const useEvent = (filters?: Record<string, any>) => {
  // const {
  //   data: events,
  //   isLoading: isLoadingEvents,
  //   error: errorEvents,
  // } = useQuery({
  //   queryKey: [GET_EVENTS],
  //   queryFn: async () => await getEvents(),
  //   retry: false,
  // });

  const {
    data: categories,
    isLoading: isCategoryLoading,
    error: categoryError,
  } = useQuery({
    queryKey: [GET_CATEGORY],
    queryFn: async () => await getCategory(),
    retry: false,
  });

  const {
    data: filteredEvents,
    isLoading: isFilteredEventsLoading,
    error: filteredEventsError,
  } = useQuery({
    queryKey: [GET_FILTERED_EVENTS, filters],
    queryFn: async () => await getFilteredEvents(filters),
    enabled: !!filters,
  });

  const {
    data: freeEvents,
    isLoading: isLoadingFreeEvents,
    error: errorFreeEvents,
  } = useQuery({
    queryKey: [GET_FREE_EVENTS],
    queryFn: async () => await getFilteredEvents({ isFree: true, size: 1 }),
    retry: false,
  });

  return {
    events: filteredEvents,
    freeEvents,
    categories,
    isLoading:
      isCategoryLoading || isFilteredEventsLoading || isLoadingFreeEvents,
    error: categoryError || filteredEventsError || errorFreeEvents,
  };
};

export default useEvent;
