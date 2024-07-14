"use client";
import BackButton from "@/components/BackButton";
import ModalBuyTicket from "../components/ModalBuyTicket";
import { useParams } from "next/navigation";
import useEventDetails from "@/hooks/useEventDetails";

const EventDetails: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>() || {};

  if (!eventId) {
    throw new Error("ID is needed");
  }
  console.log("THIS IS EVENTID ===========" + eventId + "=============");

  const { data: event, isLoading, error } = useEventDetails(eventId as string);

  const handleModalOpen = () => {
    const modal = document.getElementById(
      "buy-ticket"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex gap-4">
        <BackButton />
        <h1 className="text-2xl font-semibold">{event?.title}</h1>
      </div>
      <img
        src="https://placehold.co/800x400"
        alt="Event Image"
        className="w-full h-auto rounded-lg"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-2">
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Duration</h3>
          <p>3 hours</p>
        </div>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Date</h3>
          <p>{event?.date}</p>
        </div>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Location</h3>
          <p>{event?.location}</p>
        </div>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Category</h3>
          <p>{event?.category?.name}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Description</h1>
        <p>{event?.description}</p>
      </div>
      <div className="flex flex-col justify-center gap-2 text-center mt-4">
        <p className="font-medium text-lg">From {event?.price}</p>
        <button className="btn btn-primary" onClick={handleModalOpen}>
          Buy Ticket
        </button>
        <ModalBuyTicket id="buy-ticket" />
      </div>
    </div>
  );
};

export default EventDetails;

// "use client";
// import { useState, useEffect } from "react";
// import BackButton from "@/components/BackButton";
// import ModalBuyTicket from "../components/ModalBuyTicket";
// import { useParams } from "next/navigation";
// import useEventDetails from "@/hooks/useEventDetails";
// import useUserPoints from "@/hooks/useUserPoints";
// import useAvailableVouchers from "@/hooks/useAvailableVouchers";
// import useTicketTypes from "@/hooks/useTicketTypes"; // New hook

// interface TicketType {
//   id: string;
//   name: string;
//   price: number;
// }

// interface TicketSelection {
//   [key: string]: number;
// }

// const EventDetails: React.FC = () => {
//   const { eventId } = useParams<{ eventId: string }>() || {};
//   const [usePoints, setUsePoints] = useState(false);
//   const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);
//   const [ticketSelection, setTicketSelection] = useState<TicketSelection>({});
//   const [totalPrice, setTotalPrice] = useState(0);

//   if (!eventId) {
//     throw new Error("ID is needed");
//   }

//   const {
//     data: event,
//     isLoading: eventLoading,
//     error: eventError,
//   } = useEventDetails(eventId as string);
//   const { points, isLoading: pointsLoading } = useUserPoints();
//   const { vouchers, isLoading: vouchersLoading } =
//     useAvailableVouchers(eventId);
//   const { ticketTypes, isLoading: ticketTypesLoading } =
//     useTicketTypes(eventId); // Fetch ticket types

//   useEffect(() => {
//     let price = 0;
//     ticketTypes.forEach((ticket) => {
//       price += ticket.price * (ticketSelection[ticket.id] || 0);
//     });

//     if (usePoints && points) {
//       price = Math.max(0, price - points);
//     }
//     if (selectedVoucher) {
//       price = Math.max(0, price - selectedVoucher.discount);
//     }
//     setTotalPrice(price);
//   }, [ticketTypes, ticketSelection, usePoints, points, selectedVoucher]);

//   const handleTicketChange = (ticketId: string, quantity: number) => {
//     setTicketSelection((prev) => ({
//       ...prev,
//       [ticketId]: Math.max(0, quantity),
//     }));
//   };

//   const handleModalOpen = () => {
//     const modal = document.getElementById(
//       "buy-ticket"
//     ) as HTMLDialogElement | null;
//     if (modal) {
//       modal.showModal();
//     }
//   };

//   if (eventLoading || pointsLoading || vouchersLoading || ticketTypesLoading)
//     return <div>Loading...</div>;
//   if (eventError) return <div>Error: {eventError.message}</div>;

//   return (
//     <div className="flex flex-col p-4 gap-4">
//       <div className="flex gap-4">
//         <BackButton />
//         <h1 className="text-2xl font-semibold">{event?.title}</h1>
//       </div>
//       <img
//         src="https://placehold.co/800x400"
//         alt="Event Image"
//         className="w-full h-auto rounded-lg"
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-2">
//         <div className="mb-2">
//           <h3 className="text-xl font-semibold">Duration</h3>
//           <p>3 hours</p>
//         </div>
//         <div className="mb-2">
//           <h3 className="text-xl font-semibold">Date</h3>
//           <p>{event?.date}</p>
//         </div>
//         <div className="mb-2">
//           <h3 className="text-xl font-semibold">Location</h3>
//           <p>{event?.location}</p>
//         </div>
//         <div className="mb-2">
//           <h3 className="text-xl font-semibold">Category</h3>
//           <p>{event?.category?.name}</p>
//         </div>
//       </div>
//       <div className="flex flex-col gap-2">
//         <h1 className="text-xl font-semibold">Description</h1>
//         <p>{event?.description}</p>
//       </div>
//       <div className="flex flex-col justify-center gap-2 text-center mt-4">
//         <p className="font-medium text-lg">From {event?.price}</p>
//         <button className="btn btn-primary" onClick={handleModalOpen}>
//           Buy Ticket
//         </button>
//         <ModalBuyTicket id="buy-ticket" />
//       </div>

//       <div className="flex flex-col gap-2 mt-4">
//         <h2 className="text-xl font-semibold">Select Tickets</h2>

//         {/* Ticket Selection */}
//         {ticketTypes.map((ticket) => (
//           <div key={ticket.id} className="flex items-center justify-between">
//             <span>
//               {ticket.name} - ${ticket.price}
//             </span>
//             <div className="flex items-center gap-2">
//               <button
//                 className="btn btn-sm btn-outline"
//                 onClick={() =>
//                   handleTicketChange(
//                     ticket.id,
//                     (ticketSelection[ticket.id] || 0) - 1
//                   )
//                 }>
//                 -
//               </button>
//               <span>{ticketSelection[ticket.id] || 0}</span>
//               <button
//                 className="btn btn-sm btn-outline"
//                 onClick={() =>
//                   handleTicketChange(
//                     ticket.id,
//                     (ticketSelection[ticket.id] || 0) + 1
//                   )
//                 }>
//                 +
//               </button>
//             </div>
//           </div>
//         ))}

//         {/* Points Section */}
//         <div className="flex items-center gap-2 mt-4">
//           <input
//             type="checkbox"
//             id="usePoints"
//             checked={usePoints}
//             onChange={(e) => setUsePoints(e.target.checked)}
//           />
//           <label htmlFor="usePoints">Use {points} points</label>
//         </div>

//         {/* Vouchers Section */}
//         <div className="mt-2">
//           <h3 className="font-medium">Available Vouchers:</h3>
//           <ul className="list-disc pl-5">
//             {vouchers.map((voucher) => (
//               <li
//                 key={voucher.id}
//                 className="flex items-center justify-between">
//                 <span>
//                   {voucher.name} - {voucher.discount} off
//                 </span>
//                 <button
//                   className="btn btn-sm btn-outline"
//                   onClick={() => setSelectedVoucher(voucher)}
//                   disabled={selectedVoucher?.id === voucher.id}>
//                   {selectedVoucher?.id === voucher.id ? "Applied" : "Apply"}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Total Price */}
//         <div className="mt-4">
//           <h3 className="font-semibold">Total Price: ${totalPrice}</h3>
//         </div>
//       </div>

//       <div className="flex flex-col justify-center gap-2 text-center mt-4">
//         <button
//           className="btn btn-primary"
//           onClick={handleModalOpen}
//           disabled={Object.values(ticketSelection).every((v) => v === 0)}>
//           Proceed to Payment
//         </button>
//         <ModalBuyTicket
//           id="buy-ticket"
//           totalPrice={totalPrice}
//           usePoints={usePoints}
//           selectedVoucher={selectedVoucher}
//           ticketSelection={ticketSelection}
//         />
//       </div>
//     </div>
//   );
// };

// export default EventDetails;
