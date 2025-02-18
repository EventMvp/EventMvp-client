"use client";

import { Check, ChevronLeft, Copy, SquarePen } from "lucide-react";
import CardEvent from "./components/CardEvent";
import Link from "next/link";
import BackButton from "../../components/BackButton";
import useProfileDetails from "@/hooks/useProfileDetails";
import { useState } from "react";
import { useSession } from "next-auth/react";
import useTransaction from "@/hooks/useTransaction";
import usePurchasedEvents from "@/hooks/usePurchasedEvents";

const ProfilePage = () => {
  const { data, isLoading, error } = useProfileDetails();
  const [copied, setCopied] = useState(false);
  const { data: session } = useSession();
  const role = session?.user.role;

  const { purchasedEvent, isLoadingPurchasedEvent, errorPurchased } =
    usePurchasedEvents();

  console.log(purchasedEvent);

  if (isLoading || isLoadingPurchasedEvent) return <div>Loading...</div>;
  if (error || errorPurchased)
    return error ? (
      <div>{error.message}</div>
    ) : (
      <div>{errorPurchased?.message}</div>
    );

  const copyToClipboard = () => {
    if (data?.referralCode) {
      navigator.clipboard.writeText(data.referralCode).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-4 w-screen">
      <div className="flex flex-col gap-4 md:pr-10 items-center md:items-center md:border-transparent md:border-2 md:border-r-primary-content">
        <h1 className="text-2xl font-semibold text-left w-full inline-flex items-center gap-2">
          <BackButton />
          Profile
        </h1>
        <div className="w-[250px] h-[250px]">
          <img
            src="https://placehold.co/250x250"
            alt="Photo profile"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2 pt-4 text-center md:justify-start">
          <p className="relative">{data?.username}</p>
          <p>{data?.email}</p>
          <p>
            Your referral code: {data?.referralCode}
            <button
              onClick={copyToClipboard}
              className="cursor-pointer transition-transform duration-300 transform hover:scale-125">
              {copied ? (
                <Check width={16} height={16} />
              ) : (
                <Copy width={16} height={16} />
              )}
            </button>
          </p>
          <p className="font-semibold">Your Points: {data?.points}</p>
        </div>
        {role && role === "ORGANIZER" ? (
          <Link href={"/event/create-event"} passHref legacyBehavior>
            <a target="_blank">
              <div className="btn btn-primary text-white">
                Create your Event
              </div>
            </a>
          </Link>
        ) : (
          <div className="w-full p-2 flex justify-center items-center border-2 border-grey-opacity rounded-lg">
            <p className="text-xs font-light">
              Want to create your own event? Register to become{" "}
              <Link href={"/sign-up"} passHref legacyBehavior>
                <a target="_blank">
                  <strong className="underline">Organizer</strong>
                </a>
              </Link>
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col p-4 gap-4 w-full">
        <div className="">
          <h1 className="font-semibold">Upcoming Events</h1>
          <div className="flex flex-col gap-4 p-4">
            {purchasedEvent?.upcomingEvents?.map((event) => (
              <CardEvent key={event.eventId} {...event} />
            ))}
          </div>
          <h1 className="font-semibold">Past Events</h1>
          {purchasedEvent?.pastEvent ? (
            <div className="flex flex-col gap-4 p-4">
              {purchasedEvent.pastEvent.map((event) => (
                <CardEvent key={event.eventId} {...event} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
