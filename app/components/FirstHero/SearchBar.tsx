import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="rounded-badge shadow flex border-grey-opacity border-2 mx-2 h-14 items-center">
      <Search width={24} height={24} className="m-2" />
      <p>Search</p>
    </div>
  );
};

export default SearchBar;
