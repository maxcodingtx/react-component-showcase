import { type Recipe } from "../types/recipe";
import { MealPlanCalendar } from "../components/barrel";
import { MealPlanProvider } from "../hooks/useMealPlan";
import { useContext } from "react";
import { type MealPlanEntry } from "../components/MealPlanCalendar";
import { RecipesProvider } from "../hooks/useRecipes";

export const MealPlan = () => {
  const recipesContext = useContext(RecipesProvider);
  const recipes = recipesContext?.recipes || [];
  const mealPlanContext = useContext(MealPlanProvider);
  const mealPlan = mealPlanContext?.mealPlan || [];

  const handleAddMeal = (date: string, mealType: string, recipe: Recipe) => {
    const mealPlanEntry: MealPlanEntry = {
      id: recipe.id.toString(),
      date,
      mealType: mealType as MealPlanEntry["mealType"],
      recipe,
    };
    mealPlanContext?.addToMealPlan(mealPlanEntry);
  };
  const handleRemoveMeal = (recipeId: string) => {
    mealPlanContext?.removeFromMealPlan(recipeId);
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Meal Plan</h1>

      <MealPlanCalendar
        recipes={recipes}
        mealPlan={mealPlan}
        onAddMeal={(date, mealType, recipe) => {
          handleAddMeal(date, mealType, recipe);
        }}
        onRemoveMeal={(recipeId: string) => handleRemoveMeal(recipeId)}
      />
    </div>
  );
};
