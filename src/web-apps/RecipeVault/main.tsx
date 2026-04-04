import { BrowserRouter, Routes, Route } from "react-router";
import { RecipeVaultApp } from "./App";
import { MealPlan, RecipeDetails, Favorites, AddRecipe } from "./pages/barrel";

export default function RecipeVaultMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeVaultApp />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/meal-plan" element={<MealPlan />} />
      </Routes>
    </BrowserRouter>
  );
}
