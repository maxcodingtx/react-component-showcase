# Recipe Vault

A feature-rich recipe browsing app built as a compound component demo. It showcases search and filtering, favorites with local storage, recipe details, and a simple meal planning flow using React context providers and React Router.

## Overview

- `RecipeVaultMain`: Router + providers wrapper for all pages.
- `RecipeVaultApp`: Home view with search, listing, and favorite toggling.
- Context hooks: `useRecipes`, `useFavorites`, `useMealPlan` with corresponding providers.
- Data seed: `data/recipes.json` (typed via `types/recipe.ts`).

## Features

- Search by title, description, or category.
- Favorite recipes with persistence in `localStorage` (`favoriteRecipes`).
- Detail view per recipe (`/recipe/:id`).
- Meal plan calendar (`/meal-plan`) with add/remove entries.
- Add recipe form (`/add-recipe`) placeholder for extensibility.

## File Structure

- `App.tsx`: Main grid/list logic, search, and favorites toggle.
- `main.tsx`: Wraps routes with providers and defines app routes.
- `components/`: UI pieces (`NavBar`, `SearchBar`, `RecipeCard`, `FavoriteButton`, `FilterPanel`, `MealPlanCalendar`, `RecipeForm`).
- `hooks/`: Context state (`useRecipes`, `useFavorites`, `useMealPlan`).
- `pages/`: Route-level screens (`Favorites`, `RecipeDetails`, `MealPlan`, `AddRecipe`).
- `data/recipes.json`: Mock dataset.

## Usage

Import `RecipeVaultMain` and render it where you manage routes. It already includes `BrowserRouter`, so mount it directly:

```tsx
import { RecipeVaultMain } from "../../compound/RecipeVault/main";

export default function Showcase() {
  return <RecipeVaultMain />;
}
```

Alternatively, if you already have a top-level router, use the building blocks:

```tsx
import { Routes, Route } from "react-router";
import { RecipeVaultApp } from "../../compound/RecipeVault/App";
import {
  Favorites,
  RecipeDetails,
  MealPlan,
  AddRecipe,
} from "../../compound/RecipeVault/pages/barrel";
import {
  RecipesProvider,
  useRecipes,
} from "../../compound/RecipeVault/hooks/useRecipes";
import {
  FavoritesProvider,
  useFavorites,
} from "../../compound/RecipeVault/hooks/useFavorites";
import {
  MealPlanProvider,
  useMealPlan,
} from "../../compound/RecipeVault/hooks/useMealPlan";

export default function AppRoutes() {
  const recipes = useRecipes();
  const favorites = useFavorites();
  const mealPlan = useMealPlan();

  return (
    <RecipesProvider value={recipes}>
      <FavoritesProvider value={favorites}>
        <MealPlanProvider value={mealPlan}>
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
  );
}
```

## State & Persistence

- Recipes state is initialized from `recipes.json` and can be extended to support create/update/delete.
- Favorites are stored in component state and persisted via `localStorage` key `favoriteRecipes`.
- Meal plan state is kept in memory; extend to persist if desired.

## Styling

- Uses Tailwind CSS and daisyUI utility classes. Adjust layouts and themes as needed.
