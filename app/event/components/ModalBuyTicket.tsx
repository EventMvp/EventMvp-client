"use client";
import { useEffect, useState } from "react";
import FormBuyTicket from "./FormBuyTicket";
import { Event } from "@/types/events";
import { formatToIDR } from "@/utils/formatToIDR";
import { Voucher } from "@/types/voucher";
import { TransactionData } from "@/types/transactionData";
import { EventTicketItem } from "@/types/eventTicket";
import transactionAPI from "@/api/transaction/transactionAPI";
import { useRouter } from "next/navigation";

interface ModalProps extends Event {
  idModal: string;
  finalCheckoutData: TransactionData;
  voucher?: Voucher;
  eventTicket: EventTicketItem[];
  userPoints: number;
}

const ModalBuyTicket: React.FC<ModalProps> = (props) => {
  const {
    idModal,
    title,
    organizer,
    date,
    location,
    category,
    finalCheckoutData,
    voucher,
    eventTicket,
    userPoints,
  } = props;

  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [voucherDiscount, setVoucherDiscount] = useState<number>(0);
  const [pointDiscount, setPointDiscount] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBuyTicket = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await transactionAPI.createTransactions(finalCheckoutData);
      router.push("/");
      console.log(result);
    } catch (err) {
      setError("Failed to create transaction. Please Try Again");
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: Calculate estimated final price to show inside the modal
  useEffect(() => {
    const calculatedTotalPrice = finalCheckoutData.items.reduce((sum, item) => {
      const ticket = eventTicket?.find((t) => t.id === item.eventTicketId);
      return sum + (ticket?.price || 0) * item.quantity;
    }, 0);
    setTotalPrice(calculatedTotalPrice);

    // calculate voucher discount
    if (voucher) {
      const discount =
        (calculatedTotalPrice * voucher.discountPercentage) / 100;
      setVoucherDiscount(discount);
    }

    //calculate points discount
    if (finalCheckoutData.usePoints) {
      const maxPointsDiscount = Math.min(userPoints, calculatedTotalPrice);
      setPointDiscount(maxPointsDiscount);
    }
  }, [
    finalCheckoutData.items,
    finalCheckoutData.usePoints,
    voucher,
    eventTicket,
    userPoints,
  ]);

  useEffect(() => {
    const calculatedFinalPrice = Math.max(
      totalPrice - voucherDiscount - pointDiscount,
      0
    );
    setFinalPrice(calculatedFinalPrice);
  }, [totalPrice, voucherDiscount, pointDiscount]);

  return (
    <dialog className="modal text-left" id={idModal}>
      <div className="modal-box flex flex-col">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="font-semibold text-2xl pb-2">Confirm Your Order</h1>
        <div className="rounded-lg bg-grey-opacity">
          <div className="flex flex-col p-4 gap-2">
            <h3 className="font-medium text-lg">{title}</h3>
            <p>BY: {organizer}</p>
            <p>
              <strong>Date: </strong>
              {date}
            </p>
            <p>
              <strong>Location: </strong>
              {location}
            </p>
            <p>{category?.name}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 divide-y-2 divide-dashed">
          <h3 className="text-xl font font-semibold mt-2">Your Order</h3>
          {finalCheckoutData.items.map((item, index) => {
            const ticket = eventTicket?.find(
              (t) => t.id === item.eventTicketId
            );
            return (
              <div key={index} className="flex flex-col gap-2">
                <p className="font-semibold">Ticket Type</p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-0">
                    <p className="text-sm">{ticket?.ticketType}</p>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm">
                    {formatToIDR((ticket?.price || 0) * item.quantity)}
                  </p>
                </div>
              </div>
            );
          })}
          {voucher && (
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Voucher Applied</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-0">
                  <p className="text-sm">{voucher.name}</p>
                  <p className="text-xs text-gray-500">
                    Discount: {voucher.discountPercentage}
                  </p>
                </div>
                <p className="text-sm">{formatToIDR(-voucherDiscount)}</p>
              </div>
            </div>
          )}
          {finalCheckoutData.usePoints && (
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Points Applied</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-0">
                  <p className="text-xs text-gray-500">
                    Points: {pointDiscount}
                  </p>
                </div>
                <p className="text-sm">{formatToIDR(-pointDiscount)}</p>
              </div>
            </div>
          )}
          <div className="flex justify-between pt-2 gap-2">
            <p className="font-semibold">Total</p>
            <p className="text-sm">{formatToIDR(finalPrice)}</p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-8"
          onClick={handleBuyTicket}
          disabled={isLoading}>
          {isLoading ? "Processing..." : "Buy Ticket"}
        </button>
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
