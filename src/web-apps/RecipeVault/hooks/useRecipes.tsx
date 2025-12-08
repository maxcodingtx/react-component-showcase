import { useState, createContext } from "react";
import recipeData from "../data/recipes.json";
import { type Recipe } from "../types/recipe";

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(recipeData as Recipe[]);

  return { recipes, setRecipes };
};

export const RecipesProvider = createContext<
  ReturnType<typeof useRecipes> | undefined
>(undefined);
