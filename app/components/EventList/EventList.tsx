"use client";

import Card from "@/components/Card/Card";
import useEvent from "@/hooks/useEvents";

const EventList: React.FC<{ filters: any }> = ({ filters }) => {
  const { events, isLoading, error } = useEvent(filters);

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4 md:px-8">
      {events.map((event) => {
        return <Card key={event.id} {...event} />;
      })}
    </div>
  );
};

export default EventList;
