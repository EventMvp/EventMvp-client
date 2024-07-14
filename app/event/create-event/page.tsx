import Navbar from "@/components/navbar/Navbar";
import FormCreateEvent from "../components/FormCreateEvent";

const CreateEvent = () => {
  return (
    <>
      <Navbar />
      <div className="m-6 p-6 rounded-md shadow-lg bg-slate-100">
        <h1 className="font-medium text-xl">CREATE EVENT</h1>
        <div className="pt-8">
          <FormCreateEvent />
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
