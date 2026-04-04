# Recipe Vault

A feature-rich recipe browsing app built as a compound component demo. It showcases search and filtering, favorites with local storage, recipe details, and a simple meal planning flow using Zustand and React Router.

## Overview

- `RecipeVaultMain`: Router wrapper for all pages.
- `RecipeVaultApp`: Home view with search, listing, and favorite toggling.
- Zustand store: `useRecipeVaultStore` for recipes, favorites, and meal plan actions.
- Data seed: `data/recipes.json` (typed via `types/recipe.ts`).

## Features

- Search by title, description, or category.
- Favorite recipes with persistence in `localStorage` (`favoriteRecipes`).
- Detail view per recipe (`/recipe/:id`).
- Meal plan calendar (`/meal-plan`) with add/remove entries.
- Add recipe form (`/add-recipe`) placeholder for extensibility.

## File Structure

- `App.tsx`: Main grid/list logic, search, and favorites toggle.
- `main.tsx`: Defines app routes.
- `components/`: UI pieces (`NavBar`, `SearchBar`, `RecipeCard`, `FavoriteButton`, `FilterPanel`, `MealPlanCalendar`, `RecipeForm`).
- `store/RecipeStore.tsx`: Central Zustand state and actions.
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

Alternatively, if you already have a top-level router, mount these routes inside your existing router:

```tsx
import { Routes, Route } from "react-router";
import { RecipeVaultApp } from "../../compound/RecipeVault/App";
import {
  Favorites,
  RecipeDetails,
  MealPlan,
  AddRecipe,
} from "../../compound/RecipeVault/pages/barrel";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RecipeVaultApp />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/add-recipe" element={<AddRecipe />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/meal-plan" element={<MealPlan />} />
    </Routes>
  );
}
```

## State & Persistence

- Recipes state is initialized from `recipes.json` in the Zustand store and can be extended to support create/update/delete.
- Favorites and meal plan are persisted in `localStorage` using the Zustand persist middleware (`recipe-vault-store`).

## Styling

- Uses Tailwind CSS and daisyUI utility classes. Adjust layouts and themes as needed.
