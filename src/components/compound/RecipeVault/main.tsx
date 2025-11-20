import { BrowserRouter, Routes, Route } from "react-router";
import { RecipeVaultApp } from "./App";
import { MealPlan, RecipeDetails, Favorites, AddRecipe } from "./pages/barrel";
import { RecipesProvider, useRecipes } from "./hooks/useRecipes";
import { useFavorites, FavoritesProvider } from "./hooks/useFavorites";
import { useMealPlan, MealPlanProvider } from "./hooks/useMealPlan";

export const RecipeVaultMain = () => {
  const recipesContextValue = useRecipes();
  const favoritesContextValue = useFavorites();
  const mealPlanContextValue = useMealPlan();
  return (
    <BrowserRouter>
      <RecipesProvider value={recipesContextValue}>
        <FavoritesProvider value={favoritesContextValue}>
          <MealPlanProvider value={mealPlanContextValue}>
            <Routes>
              <Route path="/" element={<RecipeVaultApp />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/add-recipe" element={<AddRecipe />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
              <Route path="/meal-plan" element={<MealPlan />} />
            </Routes>
          </MealPlanProvider>
        </FavoritesProvider>
      </RecipesProvider>
    </BrowserRouter>
  );
};
