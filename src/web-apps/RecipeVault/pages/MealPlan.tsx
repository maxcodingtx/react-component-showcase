import { type Recipe } from "../types/recipe";
import { MealPlanCalendar } from "../components/barrel";
import { type MealPlanEntry } from "../components/MealPlanCalendar";
import { Link } from "react-router";
import { useRecipeVaultStore } from "../store/RecipeStore";

export const MealPlan = () => {
  const recipes = useRecipeVaultStore((state) => state.recipes);
  const mealPlan = useRecipeVaultStore((state) => state.mealPlan);
  const addToMealPlan = useRecipeVaultStore((state) => state.addToMealPlan);
  const removeFromMealPlan = useRecipeVaultStore(
    (state) => state.removeFromMealPlan,
  );

  const handleAddMeal = (date: string, mealType: string, recipe: Recipe) => {
    const mealPlanEntry: MealPlanEntry = {
      id: recipe.id.toString(),
      date,
      mealType: mealType as MealPlanEntry["mealType"],
      recipe,
    };
    addToMealPlan(mealPlanEntry);
  };
  const handleRemoveMeal = (recipeId: string) => {
    removeFromMealPlan(recipeId);
  };

  return (
    <div>
      <Link
        to="/"
        className="text-primary mb-4 block text-center hover:underline"
      >
        ← Back to Recipe Vault
      </Link>
      <h1 className="my-4 text-center text-2xl font-bold">Meal Plan</h1>

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
