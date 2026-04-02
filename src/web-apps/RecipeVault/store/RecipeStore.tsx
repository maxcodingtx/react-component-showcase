import { create } from "zustand";
import recipeData from "../data/recipes.json";
import type { Recipe } from "../types/recipe";
import type { MealPlanEntry } from "../components/MealPlanCalendar";
import { persist } from "zustand/middleware";

interface RecipeVaultStore {
  recipes: Recipe[];
  favorites: number[];
  mealPlan: MealPlanEntry[];
  setRecipes: (recipes: Recipe[]) => void;
  toggleFavorite: (recipeId: number) => void;
  addToMealPlan: (entry: MealPlanEntry) => void;
  removeFromMealPlan: (recipeId: string) => void;
}

export const useRecipeVaultStore = create<RecipeVaultStore>()(
  persist(
    (set) => ({
      recipes: recipeData as Recipe[],
      favorites: [],
      mealPlan: [],
      setRecipes: (recipes) => set({ recipes }),
      toggleFavorite: (recipeId) =>
        set((state) => ({
          favorites: state.favorites.includes(recipeId)
            ? state.favorites.filter((id) => id !== recipeId)
            : [...state.favorites, recipeId],
        })),
      addToMealPlan: (entry) =>
        set((state) => ({ mealPlan: [...state.mealPlan, entry] })),
      removeFromMealPlan: (recipeId) =>
        set((state) => ({
          mealPlan: state.mealPlan.filter((r) => r.id.toString() !== recipeId),
        })),
    }),
    {
      name: "recipe-vault-store",
      partialize: (state) => ({
        favorites: state.favorites,
        mealPlan: state.mealPlan,
      }),
    },
  ),
);
