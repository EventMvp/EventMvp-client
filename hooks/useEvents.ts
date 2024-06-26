import { getEvents } from "@/api/getEvents";
import { GET_EVENTS } from "@/constants/querykey";
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
    if (!events) return [];
    const uniqueCategories = new Set(events.map((event) => event.category));
    const categoriesArray = Array.from(uniqueCategories) as string[];

    return categoriesArray;
  }, [events]);

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
