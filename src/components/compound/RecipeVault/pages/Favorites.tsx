import { RecipeCard } from "../components/RecipeCard";
import { type Recipe } from "../types/recipe";
import { RecipesProvider } from "../hooks/useRecipes";
import { Link } from "react-router";
import { useContext } from "react";

export const Favorites = () => {
  const recipesContext = useContext(RecipesProvider);
  const recipes = recipesContext?.recipes || [];
  const favoriteRecipesIds: number[] = JSON.parse(
    localStorage.getItem("favoriteRecipes") || "[]",
  );
  const favoriteRecipes: Recipe[] = recipes.filter((recipe) =>
    favoriteRecipesIds.includes(recipe.id),
  );

  console.log("Favorite Recipes:", favoriteRecipesIds);
  return (
    <div className="grid grid-cols-1 gap-4 p-4 *:p-4 md:grid-cols-2 lg:grid-cols-3">
      <Link to="/" className="btn btn-secondary col-span-full mb-4">
        ← Back to Recipes
      </Link>
      {favoriteRecipes && favoriteRecipes.length === 0 ? (
        <p className="col-span-full text-center">No favorite recipes found.</p>
      ) : (
        favoriteRecipes?.map((recipe: Recipe) => (
          <div
            key={recipe.id}
            className="bg-base-300 hover:bg-accent-content rounded-lg shadow-lg hover:shadow-2xl"
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))
      )}
    </div>
  );
};
