import { useState } from "react";
import { type Recipe } from "../types/recipe";
import * as z from "zod";
import toast, { Toaster } from "react-hot-toast";

const recipeSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  cookTime: z.string().min(1, "Cook Time is required"),
  servings: z.number().min(1, "Servings must be at least 1"),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  ingredients: z.array(z.string().min(1, "Ingredient cannot be empty")),
  instructions: z.array(z.string().min(1, "Instruction cannot be empty")),
  category: z.string().min(1, "Category is required"),
});

type RecipeFormProps = {
  onSubmit: (data: Omit<Recipe, "id">) => void;
};

z.config({
  customError: (issue) => {
    return { message: issue.message ?? "Invalid value" };
  },
});

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
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const notifySuccess = () => toast.success("Recipe added successfully!");
  const notifyError = () =>
    toast.error("Failed to add recipe. Please check the form for errors.");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = recipeSchema.safeParse({
      title,
      description,
      cookTime,
      servings,
      difficulty,
      ingredients,
      instructions,
      category,
    });

    if (!result.success) {
      notifyError();
      const fieldErrors = result.error.flatten().fieldErrors;
      const mapped: Record<string, string> = {};
      for (const [key, messages] of Object.entries(fieldErrors)) {
        if (messages && messages.length > 0) {
          mapped[key] = messages[0];
        }
      }
      setErrors(mapped);
      return;
    }
    notifySuccess();
    setErrors({});

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
    <>
      <Toaster />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="card bg-base-100 w-96 shadow-xl"
      >
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
            {errors.title && (
              <span className="text-error mt-1 text-sm">{errors.title}</span>
            )}
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
            {errors.description && (
              <span className="text-error mt-1 text-sm">
                {errors.description}
              </span>
            )}
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
            {errors.cookTime && (
              <span className="text-error mt-1 text-sm">{errors.cookTime}</span>
            )}
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
            {errors.servings && (
              <span className="text-error mt-1 text-sm">{errors.servings}</span>
            )}
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
            {errors.category && (
              <span className="text-error mt-1 text-sm">{errors.category}</span>
            )}
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
            {errors.ingredients && (
              <span className="text-error mt-1 text-sm">
                {errors.ingredients}
              </span>
            )}
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
            {errors.instructions && (
              <span className="text-error mt-1 text-sm">
                {errors.instructions}
              </span>
            )}
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
    </>
  );
}
