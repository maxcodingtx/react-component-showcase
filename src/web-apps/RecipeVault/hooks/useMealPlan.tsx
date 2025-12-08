import { createContext, useState } from "react";
import { type MealPlanEntry } from "../components/MealPlanCalendar";

export const useMealPlan = () => {
  const [mealPlan, setMealPlan] = useState<MealPlanEntry[]>([]);

  const addToMealPlan = (recipe: MealPlanEntry) => {
    setMealPlan((prev) => [...prev, recipe]);
  };

  const removeFromMealPlan = (recipeId: string) => {
    setMealPlan((prev) =>
      prev.filter((recipe) => recipe.id.toString() !== recipeId),
    );
  };

  return { mealPlan, addToMealPlan, removeFromMealPlan };
};

export const MealPlanProvider = createContext<
  ReturnType<typeof useMealPlan> | undefined
>(undefined);
