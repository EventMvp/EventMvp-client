import { Event } from "@/types/events";
import Image from "next/image";

const EventCardRight: React.FC<Event> = ({ ...props }) => {
  const { title, date, description } = props;

  return (
    <div className="flex flex-col gap-4 p-4 m-4 shadow-lg bg-base-100 rounded-lg">
      <div className="w-full h-[200px]">
        <Image
          src="https://placehold.co/300x200"
          width={300}
          height={200}
          alt="event image"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-lg">{title}</h1>
        <p className="text-gray-500">Event Date: {date}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          {description}
        </p>
        <div className="btn btn-primary">Learn More</div>
      </div>
    </div>
  );
};

export default EventCardRight;
