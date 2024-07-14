import { CalendarDays, MapPinned } from "lucide-react";

const BuyTicket = () => {
  return (
    <div className="flex p-8 gap-8">
      <div className="flex flex-col gap-8 basis-4/5">
        <div className="w-full h-full">
          <img
            src="https://placehold.co/700x300"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-3xl">Description</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            enim. Harum maxime deleniti architecto beatae et cumque reiciendis
            quisquam sapiente ut adipisci autem veritatis illo voluptatibus,
            corrupti soluta ab laboriosam? Consequatur dicta earum, architecto
            optio exercitationem possimus distinctio doloribus quae? Tempora
            dicta, perferendis totam nulla suscipit quibusdam laudantium atque a
            debitis facilis cupiditate veniam alias modi eum tempore laborum
            saepe.
          </p>
        </div>
      </div>
      <div className="basis-1/5 flex flex-col gap-4">
        <div className="bg-slate-100 p-4 shadow-lg rounded-lg flex flex-col gap-4">
          <div className="flex flex-col gap-0">
            <p className="font-medium text-lg">TITLE EVENT</p>
            <p className="text-sm">Category</p>
          </div>
          <div className="flex gap-3">
            <CalendarDays color="blue" />
            <p>2022-12-12</p>
          </div>
          <div className="flex gap-3">
            <CalendarDays color="blue" />
            <p>TIME</p>
          </div>
          <div className="flex gap-3">
            <MapPinned color="blue" />
            <p>2022-12-12</p>
          </div>
        </div>
        <div className="bg-slate-100 p-2 shadow-lg rounded-lg flex gap-2">
          <div className="basis-1/5">
            <div className="w-full h-full">
              <img
                src="https://placehold.co/100x100"
                alt=""
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-slate-400 text-sm">Organized By</p>
            <p className="font-medium text-lg">ORGANIZER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;
