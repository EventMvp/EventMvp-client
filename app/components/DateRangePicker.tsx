import { useState } from "react";
import DatePicker from "react-datepicker";

const DateRangePicker = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update: [Date | null, Date | null]) => {
        setDateRange(update);
      }}
      isClearable={true}
      placeholderText="Date"
    />
  );
};

export default DateRangePicker;
