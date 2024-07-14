interface CounterButtonProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
}

const CounterTicket: React.FC<CounterButtonProps> = ({
  value,
  onIncrement,
  onDecrement,
  min = 0,
  max = Infinity,
}) => {
  return (
    <div className="flex items-center gap-3">
      <button
        className="flex items-center px-2 py-0 bg-gray-200 rounded-lg"
        onClick={onDecrement}
        disabled={value <= min}>
        -
      </button>
      <span className="text-lg font-semibold">{value}</span>
      <button
        className="flex items-center px-2 py-0 bg-gray-200 rounded-lg"
        onClick={onIncrement}
        disabled={value >= max}>
        +
      </button>
    </div>
  );
};

export default CounterTicket;
