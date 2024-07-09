import { Event } from "@/types/events";

interface CardProps extends Event {
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ ...props }) => {
  const { title, date, description, onClick, className } = props;

  return (
    <div
      className={`card bg-base-100 shadow-xl ${className}`}
      onClick={onClick}>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          {description}
        </p>
        <p>{date}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline bg-primary text-white">FREE</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
