"use client";

import Card from "@/components/Card/Card";
import useEvent from "@/hooks/useEvents";
import { useRouter } from "next/navigation";

const EventList: React.FC<{ filters: any }> = ({ filters }) => {
  const { events, freeEvents, isLoading, error } = useEvent(filters);
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (!events) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="text-2xl">No events</div>
      </div>
    );
  }

  if (error)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="text-2xl">Something is wrong</div>
      </div>
    );

  const handleCardClick = (eventId: number) => {
    router.push(`/event/${eventId}`);
  };

  return (
    <>
      <div className="px-4 pt-4 md:px-12 md:pt-8">
        {freeEvents && freeEvents?.length > 0 && (
          <>
            <h1 className="text-2xl px-4">Got your Free Events!!!</h1>
            <div className="overflow-x-auto py-4">
              <div className="flex gap-4 justify-start">
                {freeEvents.map((event) => (
                  <Card
                    key={event.id}
                    {...event}
                    className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                    onClick={() => handleCardClick(event.id)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
        {events && events.length > 0 && (
          <>
            <h1 className="text-2xl px-4">Got your Upcoming Events!!!</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4 md:px-8">
              {events.map((event) => (
                <Card
                  key={event.id}
                  {...event}
                  onClick={() => handleCardClick(event.id)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EventList;
