import { Event } from "@/types/events";

const Card: React.FC<Event> = ({ ...props }) => {
  const { title, date } = props;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">
          {title}
          <div className="badge-sm rounded-badge badge-primary">FREE</div>
        </h2>
        <p></p>
        <p>{date}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
