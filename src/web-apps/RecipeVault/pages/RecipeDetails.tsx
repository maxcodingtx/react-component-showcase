import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { type Recipe } from "../types/recipe";
import data from "../data/recipes.json";
import { FavoriteButton } from "../components/barrel";
import { Link } from "react-router";
import { useRecipeVaultStore } from "../store/RecipeStore";

export const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const favoriteRecipes = useRecipeVaultStore((state) => state.favorites);
  const toggleFavorite = useRecipeVaultStore((state) => state.toggleFavorite);
  useEffect(() => {
    if (id) {
      const foundRecipe = (data as Recipe[]).find((r) => r.id === parseInt(id));
      setRecipe(foundRecipe || null);
    }
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto p-4">
        <div className="alert alert-error">
          <span>Recipe not found!</span>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-success";
      case "Medium":
        return "text-warning";
      case "Hard":
        return "text-error";
      default:
        return "text-neutral";
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <Link
            to="/"
            className="text-primary mb-4 inline-block hover:underline"
          >
            Back to Recipes
          </Link>

          <h1 className="card-title mb-4 text-3xl">{recipe.title}</h1>

          <p className="text-base-content/80 mb-6 text-lg">
            {recipe.description}
          </p>

          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="stat bg-base-200 rounded-lg">
              <div className="stat-title">Cook Time</div>
              <div className="stat-value text-lg">{recipe.cookTime}</div>
            </div>
            <div className="stat bg-base-200 rounded-lg">
              <div className="stat-title">Servings</div>
              <div className="stat-value text-lg">{recipe.servings}</div>
            </div>
            <div className="stat bg-base-200 rounded-lg">
              <div className="stat-title">Difficulty</div>
              <div
                className={`stat-value text-lg ${getDifficultyColor(recipe.difficulty)}`}
              >
                {recipe.difficulty}
              </div>
            </div>
            <div className="stat bg-base-200 rounded-lg">
              <div className="stat-title">Category</div>
              <div className="stat-value text-lg">{recipe.category}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Ingredients</h2>
              <div className="bg-base-200 rounded-lg p-4">
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-primary mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Instructions</h2>
              <div className="bg-base-200 rounded-lg p-4">
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-primary text-primary-content mt-0.5 mr-3 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
                        {index + 1}
                      </span>
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="card-actions mt-6 justify-end">
            <FavoriteButton
              isFavorite={favoriteRecipes.includes(recipe.id)}
              onToggle={() => {
                toggleFavorite(recipe.id);
              }}
            />
            <button className="btn btn-primary">Add to Meal Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};
