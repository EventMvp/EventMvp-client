"use client";

import useSearchEvents from "@/hooks/useSearchEvents";
import EventCardRight from "./components/EventCardRight";
import { useSearchParams } from "next/navigation";
import { title } from "process";

const EventListBySearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("title") || "";
  console.log(query);

  const { searchEvents, isLoading, error } = useSearchEvents({ title: query });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <>
      {searchEvents && searchEvents.length > 0 ? (
        searchEvents.map((event) => (
          <EventCardRight key={event.id} {...event} />
        ))
      ) : (
        <div>No Events Found</div>
      )}
    </>
  );
};

export default EventListBySearch;
