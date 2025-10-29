// Category Filter Component
// This component allows users to filter products by category.
// Takes two props, categories (array of category strings) and onSelectCategory (callback function).
import { ProductType } from "../ProductType";

type AcceptedStrings =
  | Pick<ProductType, "category">["category"]
  | "All Categories";
type CategoryFilterProps = {
  categories: AcceptedStrings[];
  selectedCategory: AcceptedStrings;
  onFilterChange: (category: AcceptedStrings) => void;
};

export function CategoryFilter({
  categories,
  selectedCategory,
  onFilterChange,
}: CategoryFilterProps) {
  return (
    // change to <select> for better accessibility
    <select
      className="select select-primary mx-auto block"
      value={selectedCategory}
      onChange={(e) => onFilterChange(e.target.value as AcceptedStrings)}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
