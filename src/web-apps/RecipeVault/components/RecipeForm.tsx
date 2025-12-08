import { useState } from "react";
import { type Recipe } from "../types/recipe";

type RecipeFormProps = {
  onSubmit: (data: Omit<Recipe, "id">) => void;
};

export default function RecipeForm({ onSubmit }: RecipeFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState(1);
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">(
    "Easy",
  );
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [currentInstruction, setCurrentInstruction] = useState("");

  const handleAddIngredient = () => {
    if (currentIngredient.trim()) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient("");
    }
  };

  const handleAddInstruction = () => {
    if (currentInstruction.trim()) {
      setInstructions([...instructions, currentInstruction.trim()]);
      setCurrentInstruction("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      cookTime,
      servings,
      difficulty,
      ingredients,
      instructions,
      category,
    });
    setTitle("");
    setDescription("");
    setCookTime("");
    setServings(1);
    setDifficulty("Easy");
    setIngredients([]);
    setInstructions([]);
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Add Recipe</h2>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Recipe Title</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Title"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Recipe Description"
            className="textarea textarea-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Cook Time</span>
          </label>
          <input
            type="text"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            placeholder="e.g., 30 minutes"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Servings</span>
          </label>
          <input
            type="number"
            min="1"
            value={servings}
            onChange={(e) => setServings(Number(e.target.value))}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Difficulty</span>
          </label>
          <select
            value={difficulty}
            onChange={(e) =>
              setDifficulty(e.target.value as "Easy" | "Medium" | "Hard")
            }
            className="select select-bordered w-full max-w-xs"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Dinner, Dessert"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Add Ingredient</span>
          </label>
          <div className="join">
            <input
              type="text"
              value={currentIngredient}
              onChange={(e) => setCurrentIngredient(e.target.value)}
              placeholder="Add Ingredient"
              className="input input-bordered join-item flex-1"
            />
            <button
              type="button"
              onClick={handleAddIngredient}
              className="btn btn-primary join-item"
            >
              Add
            </button>
          </div>
        </div>

        {ingredients.length > 0 && (
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ingredients</span>
            </label>
            <ul className="menu bg-base-200 rounded-box">
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Add Instruction</span>
          </label>
          <div className="join">
            <input
              type="text"
              value={currentInstruction}
              onChange={(e) => setCurrentInstruction(e.target.value)}
              placeholder="Add Instruction"
              className="input input-bordered join-item flex-1"
            />
            <button
              type="button"
              onClick={handleAddInstruction}
              className="btn btn-primary join-item"
            >
              Add
            </button>
          </div>
        </div>

        {instructions.length > 0 && (
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructions</span>
            </label>
            <ol className="menu bg-base-200 rounded-box">
              {instructions.map((instruction, index) => (
                <li key={index}>
                  <span>
                    {index + 1}. {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="card-actions">
          <button type="submit" className="btn btn-success">
            Submit Recipe
          </button>
        </div>
      </div>
    </form>
  );
}
