import { PurchasedEvents } from "@/types/events";

interface CardEventProps extends PurchasedEvents {}

const CardEvent: React.FC<CardEventProps> = (props) => {
  const { eventTitle, eventDate, eventLocation, tickets } = props;
  console.log(props);

  return (
    <div className="px-4 py-6 gap-2 flex flex-col rounded-lg bg-slate-100">
      <p className="text-lg font-bold pb-2">{eventTitle}</p>
      <p className="text-sm font-light text-gray-500">
        DATE: <strong>{eventDate}</strong>
      </p>
      <p className="text-sm font-light text-gray-500">
        LOCATION: <strong>{eventLocation}</strong>
      </p>
      <div className="w-full h-0 rounded-lg border-2 border-grey-opacity my-2"></div>
      {tickets &&
        tickets.map((ticket, index) => (
          <div key={index} className="flex gap-4">
            <p className="text-sm font-light text-gray-500">
              Ticket Type: <strong>{ticket.ticketType}</strong>
            </p>
            <p className="text-sm font-light text-gray-500">
              Quantity: <strong>{ticket.quantity}</strong>
            </p>
          </div>
        ))}
    </div>
  );
};

export default CardEvent;
