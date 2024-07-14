"use client";
import { useState } from "react";
import FormBuyTicket from "./FormBuyTicket";

interface ModalProps {
  id: string;
}

const ModalBuyTicket: React.FC<ModalProps> = ({ id }) => {
  const [numberTicket, setNumberTicket] = useState(1);

  return (
    <dialog className="modal text-left" id={id}>
      <div className="modal-box flex flex-col">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="font-semibold text-2xl pb-2">Buy your Ticket</h1>
        <div className="rounded-lg bg-grey-opacity">
          <div className="flex flex-col p-4 gap-2">
            <h3 className="font-medium text-lg">TITLE EVENT</h3>
            <p>BY: ORGANIZER</p>
            <p>
              <strong>Date: </strong>DATE LENGKAP
            </p>
            <p>
              <strong>Location: </strong>Madison Square Garden, NY
            </p>
            <p>CATEGORY</p>
          </div>
        </div>
        <div className="dialog">
          <FormBuyTicket />
        </div>
      </div>
    </dialog>
  );
};

export default ModalBuyTicket;

// "use client";
// import { useState } from "react";
// import FormBuyTicket from "./FormBuyTicket";

// interface ModalProps {
//   id: string;
//   totalPrice: number;
//   usePoints: boolean;
//   selectedVoucher: { id: string; name: string; discount: number } | null;
//   ticketSelection: { [key: string]: number };
//   event?: {
//     title: string;
//     organizer: string;
//     date: string;
//     location: string;
//     category: { name: string };
//   };
// }

// const ModalBuyTicket: React.FC<ModalProps> = ({
//   id,
//   totalPrice,
//   usePoints,
//   selectedVoucher,
//   ticketSelection,
//   event,
// }) => {
//   return (
//     <dialog className="modal text-left" id={id}>
//       <div className="modal-box flex flex-col">
//         <form method="dialog">
//           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//             ✕
//           </button>
//         </form>
//         <h1 className="font-semibold text-2xl pb-2">Buy your Ticket</h1>
//         <div className="rounded-lg bg-grey-opacity">
//           <div className="flex flex-col p-4 gap-2">
//             <h3 className="font-medium text-lg">
//               {event?.title || "TITLE EVENT"}
//             </h3>
//             <p>BY: {event?.organizer || "ORGANIZER"}</p>
//             <p>
//               <strong>Date: </strong>
//               {event?.date || "DATE LENGKAP"}
//             </p>
//             <p>
//               <strong>Location: </strong>
//               {event?.location || "Madison Square Garden, NY"}
//             </p>
//             <p>{event?.category?.name || "CATEGORY"}</p>
//           </div>
//         </div>
//         <div className="dialog">
//           <FormBuyTicket />
//         </div>
//       </div>
//     </dialog>
//   );
// };

// export default ModalBuyTicket;
