import { useState, createContext } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const storedFavorites = localStorage.getItem("favoriteRecipes");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const toggleFavorite = (recipeId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(recipeId)
        ? prevFavorites.filter((id) => id !== recipeId)
        : [...prevFavorites, recipeId],
    );
  };

  return { favorites, toggleFavorite };
};

export const FavoritesProvider = createContext<
  ReturnType<typeof useFavorites> | undefined
>(undefined);
