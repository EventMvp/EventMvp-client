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
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const useEvent = (filters?: Record<string, any>) => {
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
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [GET_FILTERED_EVENTS, filters],
    queryFn: async ({ pageParam }) => {
      const response = await getFilteredEvents({ ...filters, page: pageParam });
      return {
        events: response.content,
        currentPage: response.currentPage,
        totalPages: response.totalPages,
        totalElements: response.totalElements,
      };
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages - 1) {
        return lastPage.currentPage + 1;
      }
      return undefined;
    },
    initialPageParam: 0,
    enabled: !!filters,
  });

  const {
    data: freeEvents,
    isLoading: isLoadingFreeEvents,
    error: errorFreeEvents,
  } = useQuery({
    queryKey: [GET_FREE_EVENTS],
    queryFn: async () => {
      const response = await getFilteredEvents({ isFree: true });
      return response.content;
    },
    retry: false,
  });

  return {
    events: filteredEvents?.pages.flatMap((page) => page.events) || [],
    totalEvents: filteredEvents?.pages[0]?.totalElements || 0,
    freeEvents,
    categories,
    isLoading:
      isCategoryLoading || isFilteredEventsLoading || isLoadingFreeEvents,
    error: categoryError || filteredEventsError || errorFreeEvents,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useEvent;
