// import { Event } from "@/types/events";
// import Image from "next/image";

// const EventCardRight: React.FC<Event> = ({ ...props }) => {
//   const { title, date, description } = props;

//   return (
//     <div className="flex justify-center">
//       <div className="flex flex-col md:flex-row md:w-4/6 gap-4 p-4 m-4 shadow-lg bg-base-100 rounded-lg">
//         <div className="w-fit h-[200px] md:w-1/3">
//           <img
//             className="object-contain rounded-lg"
//             src="https://placehold.co/300x200"
//             alt="event image"
//           />
//         </div>
//         <div className="flex flex-col justify-between gap-2 md:w-2/3">
//           <div>
//             <h1 className="font-medium text-lg">{title}</h1>
//             <p className="text-gray-500">Event Date: {date}</p>
//             <p className="overflow-hidden text-ellipsis whitespace-nowrap">
//               {description}
//             </p>
//           </div>
//           <div>
//             <div className="btn btn-primary w-full">Learn More</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCardRight;

import { Event } from "@/types/events";
import Image from "next/image";

const EventCardRight: React.FC<Event> = ({ ...props }) => {
  const { title, date, description } = props;

  return (
    <div className="flex flex-col md:flex-row md:w-4/6 gap-4 p-4 m-4 shadow-lg bg-base-100 rounded-lg">
      <div className="w-full md:w-1/3 h-[200px]">
        <img
          className="object-cover rounded-lg h-full w-full"
          src="https://placehold.co/300x200"
          alt="event image"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 md:w-2/3">
        <div>
          <h1 className="font-medium text-lg">{title}</h1>
          <p className="text-gray-500">Event Date: {date}</p>
          <p className="overflow-hidden text-ellipsis">{description}</p>
        </div>
        <div>
          <div className="btn btn-primary w-full">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default EventCardRight;
