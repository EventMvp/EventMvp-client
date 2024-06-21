interface EventDetailsProps {
  eventId: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ eventId }) => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <h1 className="text-2xl font-semibold">EVENT TITLE</h1>
      <img
        src="https://placehold.co/800x400"
        alt="Event Image"
        className="w-full h-auto rounded-lg"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Description</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          molestiae totam iusto veritatis. Quia repudiandae cumque rem.
          Voluptates consequatur delectus explicabo fuga sed aperiam quam iste
          rem velit ratione. Dolorem?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-2">
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Duration</h3>
          <p>3 hours</p>
        </div>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Date</h3>
          <p>March 25, 2023</p>
        </div>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Location</h3>
          <p>123 Event Street, City, Country</p>
        </div>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Category</h3>
          <p>Music, Jazz, Metal</p>
        </div>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Price</h3>
          <p>50</p>
        </div>
      </div>
      <button className="btn btn-primary">Buy Ticket</button>
    </div>
  );
};

export default EventDetails;
