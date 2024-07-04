const UpcomingEvents = () => {
  return (
    <div className="flex-col gap-2 py-4 text-black">
      <div className="flex gap-2 justify-evenly">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn-md items-center p-4 flex rounded-lg gap-2 bg-grey-opacity">
            Weekdays
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-28">
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn-md items-center p-4 flex rounded-lg gap-2 bg-grey-opacity">
            Weekdays
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu mx-4 p-4 shadow bg-base-100 rounded-box w-28">
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn-md items-center p-4 flex rounded-lg gap-2 bg-grey-opacity">
            Weekdays
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu mx-4 p-4 shadow bg-base-100 rounded-box w-28">
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
      </div>
      <div className="px-4 pt-4 md:px-12 md:pt-8 flex items-center justify-between">
        <h1 className="text-2xl ">Upcoming Events</h1>
        <p className="pr-4 pt-2">See all</p>
      </div>
    </div>
  );
};

export default UpcomingEvents;
