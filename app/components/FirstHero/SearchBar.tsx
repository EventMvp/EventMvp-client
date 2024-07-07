"use client";

import useSearchEvents from "@/hooks/useSearchEvents";
import { Event } from "@/types/events";
import { Search } from "lucide-react";
import { ChangeEvent, FocusEventHandler, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const {
    searchEvents: suggestions,
    isLoading,
    error,
  } = useSearchEvents({ title: debouncedQuery });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const handleSuggestionClick = (suggestions: Event) => {
    setQuery(suggestions.title);
  };

  const handleFocus = (): void => {
    setIsFocused(true);
  };

  const handleBlur = (): void => {
    // Delay to allow click on suggestion before closing
    setTimeout(() => setIsFocused(false), 100);
  };

  return (
    <div className="relative">
      <div className="rounded-badge shadow flex border-grey-opacity border-2 mx-2 h-14 items-center">
        <Search width={24} height={24} className="m-2" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search"
          className="flex-grow px-2 h-full border-none rounded-xl bg-transparent focus:outline-none"
        />
      </div>
      {isFocused && (
        <div>
          {isLoading && (
            <div className="absolute left-0 right-0 bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10">
              Loading...
            </div>
          )}
          {error && (
            <div className="absolute left-0 right-0 bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10">
              Error fetching data
            </div>
          )}
          {suggestions && suggestions?.length > 0 && (
            <ul className="absolute left-0 right-0 mx-4 bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() => handleSuggestionClick(suggestion)} // Use onMouseDown to avoid input blur
                >
                  {suggestion.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
