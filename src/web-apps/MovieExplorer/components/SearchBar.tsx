interface SearchBarProps {
  query: string;
  onChange: (newQuery: string) => void;
  onClear?: () => void;
}

export const SearchBar = ({ query, onChange, onClear }: SearchBarProps) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="flex-grow rounded border border-gray-300 p-2"
        placeholder="Search for a movie..."
      />
      <button
        onClick={onClear}
        className="ml-2 rounded bg-red-500 p-2 text-white"
      >
        Clear
      </button>
    </div>
  );
};
