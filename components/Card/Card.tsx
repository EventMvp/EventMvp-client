import { Event } from "@/types/events";
import { formatToIDR } from "@/utils/formatToIDR";

interface CardProps extends Event {
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ ...props }) => {
  const {
    title,
    date,
    description,
    onClick,
    className,
    priceRange,
    organizer,
    picture,
  } = props;

  return (
    <div
      className={`card bg-base-100 shadow-xl ${className}`}
      onClick={onClick}>
      <figure>
        <img src={picture} alt={title} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          {description}
        </p>
        <p>{date}</p>
        <p>
          Organized by: <strong>{organizer}</strong>
        </p>
        <div className="card-actions justify-end">
          {priceRange && priceRange == "FREE" ? (
            <div className="badge badge-outline bg-primary text-white">
              FREE
            </div>
          ) : (
            <div className="badge badge-outline bg-primary text-white">
              {priceRange}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
