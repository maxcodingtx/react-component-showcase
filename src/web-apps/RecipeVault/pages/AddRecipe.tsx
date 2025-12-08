import { RecipeForm } from "../components/barrel";
import { type Recipe } from "../types/recipe";
import { RecipesProvider } from "../hooks/useRecipes";
import { Link } from "react-router";
import { useContext } from "react";

type NewRecipe = Omit<Recipe, "id">;

export const AddRecipe = () => {
  const recipesContext = useContext(RecipesProvider);
  const recipes = recipesContext?.recipes || [];
  const setRecipes = recipesContext?.setRecipes;

  return (
    <div className="grid place-items-center p-4">
      <div className="text-center">
        <Link to="/" className="text-primary mb-4 inline-block hover:underline">
          ← Back to Home
        </Link>
        <h1 className="mb-4 text-3xl font-bold">Add New Recipe</h1>
      </div>
      <RecipeForm
        onSubmit={(newRecipe: NewRecipe) => {
          const newRecipeId =
            recipes.length > 0 ? Math.max(...recipes.map((r) => r.id)) + 1 : 1;
          const recipeWithId: Recipe = { id: newRecipeId, ...newRecipe };

          if (setRecipes) setRecipes([...recipes, recipeWithId]);
          console.log("Added new recipe:", recipeWithId);
        }}
      />
    </div>
  );
};
