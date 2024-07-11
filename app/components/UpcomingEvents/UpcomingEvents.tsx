"use client";
import useEvent from "@/hooks/useEvents";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import EventList from "../EventList/EventList";
import useEventFilters from "@/hooks/useEventFilters";
import DatePicker from "react-datepicker";
import { format, parse } from "date-fns";
// import useEventFilters from "@/hooks/useEventFilters";

const UpcomingEvents = () => {
  const { filters, handleFilterChange } = useEventFilters();
  const { categories, isLoading, error } = useEvent(filters);

  const [dateRange, setDateRange] = useState<[any, any]>([
    filters.startDate
      ? parse(filters.startDate, "yyyy-MM-dd", new Date())
      : null,
    filters.endDate ? parse(filters.endDate, "yyyy-MM-dd", new Date()) : null,
  ]);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const [startDate, endDate] = dateRange;
    if (startDate && endDate) {
      handleFilterChange({
        startDate: format(startDate, "yyyy-MM-dd"),
        endDate: format(endDate, "yyyy-MM-dd"),
      });
    } else if (!startDate && !endDate) {
      handleFilterChange({
        startDate: null,
        endDate: null,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex-col gap-2 py-4 text-black">
        <div className="flex gap-2 justify-evenly items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn-md items-center p-4 flex rounded-lg gap-2 bg-grey-opacity">
              Category
              <ChevronDown width={24} height={24} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-48">
              {categories?.map((category) => (
                <li
                  key={category.id}
                  className="text-base pb-4 last:pb-2 hover:bg-gray-100 rounded-md"
                  onClick={() =>
                    handleFilterChange({ categoryId: category.id })
                  }>
                  <a className="flex justify-between items-center">
                    {category.name}
                    {filters.categoryId === category.id && <Check size={16} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn-md items-center p-4 flex rounded-lg gap-2 bg-grey-opacity">
              Price
              <ChevronDown width={24} height={24} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-48">
              <li
                className="text-base pb-4 hover:bg-gray-100 rounded-md"
                onClick={() => handleFilterChange({ isFree: false })}>
                <a className="flex justify-between items-center">
                  Paid
                  {filters.isFree === false && <Check size={16} />}
                </a>
              </li>
              <li
                className="text-base hover:bg-gray-100 rounded-md"
                onClick={() => handleFilterChange({ isFree: true })}>
                <a className="flex justify-between items-center">
                  Free
                  {filters.isFree === true && <Check size={16} />}
                </a>
              </li>
            </ul>
          </div>
          <DatePicker
            selectsRange={true}
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            onChange={(update: [Date | null, Date | null]) => {
              setDateRange(update);
            }}
            isClearable={true}
            placeholderText="Date"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
      </div>
      <EventList filters={filters} />
    </>
  );
};

export default UpcomingEvents;
