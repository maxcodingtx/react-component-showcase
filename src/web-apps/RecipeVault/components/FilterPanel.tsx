import { type Recipe } from "../types/recipe";

type AcceptedDifficulties =
  | Pick<Recipe, "difficulty">["difficulty"]
  | "All Difficulties";

interface FilterPanelProps {
  difficulties: AcceptedDifficulties[];
  selectedDifficulty: AcceptedDifficulties;
  onFilterChange: (difficulty: AcceptedDifficulties) => void;
}

export default function FilterPanel({
  difficulties,
  selectedDifficulty,
  onFilterChange,
}: FilterPanelProps) {
  return (
    <select
      className="select select-primary"
      value={selectedDifficulty}
      onChange={(e) => {
        onFilterChange(e.target.value as AcceptedDifficulties);
      }}
    >
      {difficulties.map((difficulty) => (
        <option key={difficulty} value={difficulty}>
          {difficulty}
        </option>
      ))}
    </select>
  );
}
