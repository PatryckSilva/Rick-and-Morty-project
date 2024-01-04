import { useState } from "react";

const SearchBar = ({ names, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = event => {
    const input = event.target.value;
    setQuery(input);
    onSearch(input);
  };

  return (
    <div>
      <input
        className="gold-border w-full rounded-xl border-b-2 bg-basket_blue-900 p-2 text-basket_orange-50 outline-none"
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for team, position, name, cost, date or template ID"
      />
    </div>
  );
};

export default SearchBar;
