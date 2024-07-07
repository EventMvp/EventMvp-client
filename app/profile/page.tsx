import { ChevronLeft, SquarePen } from "lucide-react";
import CardEvent from "./components/CardEvent";
import Link from "next/link";
import BackButton from "../../components/BackButton";

const ProfilePage = () => {
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
          <p className="relative">
            Kyraa
            <span className="absolute cursor-pointer transition-transform duration-300 transform hover:scale-125">
              <SquarePen width={16} height={16} />
            </span>
          </p>
          <p>Fiqra@gmail.com</p>
          <p className="font-semibold">Your Points: POINTS</p>
        </div>
      </div>
      <div className="flex flex-col p-4 gap-4 w-full">
        <div className="">
          <h1 className="font-semibold">Upcoming Events</h1>
          <div className="flex flex-col gap-4 p-4">
            <CardEvent />
            <CardEvent />
            <CardEvent />
          </div>
          <h1 className="font-semibold">Upcoming Events</h1>
          <div className="flex flex-col gap-4 p-4">
            <CardEvent />
            <CardEvent />
            <CardEvent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
