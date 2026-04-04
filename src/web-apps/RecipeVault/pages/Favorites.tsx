import { RecipeCard } from "../components/barrel";
import { type Recipe } from "../types/recipe";
import { Link } from "react-router";
import { useRecipeVaultStore } from "../store/RecipeStore";

export const Favorites = () => {
  const recipes = useRecipeVaultStore((state) => state.recipes);
  const favoriteRecipesIds = useRecipeVaultStore((state) => state.favorites);
  const favoriteRecipes: Recipe[] = recipes.filter((recipe) =>
    favoriteRecipesIds.includes(recipe.id),
  );

  console.log("Favorite Recipes:", favoriteRecipesIds);
  return (
    <div className="grid grid-cols-1 gap-4 p-4 *:p-4 md:grid-cols-2 lg:grid-cols-3">
      <Link
        to="/"
        className="text-primary col-span-full mb-4 text-center hover:underline"
      >
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
