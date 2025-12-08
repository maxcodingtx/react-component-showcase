interface SearchBarProps {
  query: string;
  onChange: (newQuery: string) => void;
}

export default function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="flex-grow rounded border border-gray-300 p-2"
        placeholder="Search for a recipe..."
      />
    </div>
  );
}
