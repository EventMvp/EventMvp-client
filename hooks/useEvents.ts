import { getCategory } from "@/api/getCategory";
import { getEvents } from "@/api/getevents";
import { GET_CATEGORY, GET_EVENTS } from "@/constants/queryKey";
import { Event } from "@/types/events";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

interface EventMap {
  [key: number]: Event;
}

interface EventCategoriesGroup {
  [key: string]: Event[];
}

const useEvent = () => {
  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: [GET_EVENTS],
    queryFn: async () => await getEvents(),
    retry: false,
  });

  const {
    data: category,
    isLoading: isCategoryLoading,
    error: categoryError,
  } = useQuery({
    queryKey: [GET_CATEGORY],
    queryFn: async () => await getCategory(),
    retry: false,
  });

  const eventMap: EventMap = useMemo(() => {
    const newMap: EventMap = {};
    if (!events) return newMap;
    events.map((event) => {
      newMap[event.id] = event;
    });
    return newMap;
  }, [events]);

  const categories: string[] = useMemo(() => {
    if (!category) return [];

    return category.map((cat) => cat.name);
  }, [category]);

  const eventCategoryGroup: EventCategoriesGroup = useMemo(() => {
    const newGroup: EventCategoriesGroup = {};

    if (!events) return {};
    categories.forEach((category) => {
      const eventList = events.filter((each) => each.category === category);
      newGroup[category] = eventList;
    });
    return newGroup;
  }, [categories, events]);

  return { events, eventMap, eventCategoryGroup, categories, isLoading, error };
};

export default useEvent;
