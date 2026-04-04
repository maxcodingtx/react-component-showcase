import {
  SearchBar,
  RecipeCard,
  FavoriteButton,
  NavBar,
} from "./components/barrel";
import { useState } from "react";
import { useRecipeVaultStore } from "./store/RecipeStore";

export const RecipeVaultApp = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const recipes = useRecipeVaultStore((state) => state.recipes);
  const favoriteRecipesIds = useRecipeVaultStore((state) => state.favorites);
  const toggleFavorite = useRecipeVaultStore((state) => state.toggleFavorite);

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <NavBar favoritesCount={favoriteRecipesIds.length} />
      <div className="mx-auto max-w-7xl">
        <h1 className="my-4 text-2xl font-bold">Recipe Vault</h1>
        <SearchBar
          query={searchQuery}
          onChange={(newQuery) => {
            setSearchQuery(newQuery);
          }}
        />
        <p>
          {filteredRecipes.length > 0
            ? filteredRecipes.length > 1
              ? `${filteredRecipes.length} recipes found.`
              : "1 recipe found."
            : "No recipes found."}
        </p>
        <div className="grid auto-rows-fr grid-cols-1 gap-4 *:px-4 *:py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-base-300 hover:bg-accent-content rounded-lg shadow-lg hover:shadow-2xl"
            >
              <RecipeCard recipe={recipe} />
              <div className="card-actions justify-end p-4">
                <FavoriteButton
                  isFavorite={favoriteRecipesIds.includes(recipe.id)}
                  onToggle={() => {
                    toggleFavorite(recipe.id);
                    console.log("Toggled favorite for recipe ID:", recipe.id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
