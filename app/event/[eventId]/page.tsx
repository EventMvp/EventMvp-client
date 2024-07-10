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
