import { useState } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search recipes..."
      className="input input-primary"
    />
  );
};
