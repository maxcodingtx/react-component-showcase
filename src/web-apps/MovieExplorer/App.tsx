import { useState, useEffect } from "react";
import moviesData from "./data/movies.json";
import { type MovieProps } from "./components/MovieCard";

import { MovieList, Navbar, SearchBar } from "./components/barrel";

type FavoritesMap = Record<string, MovieProps>;

export const MovieExplorerApp = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  // convert favorites to object
  const [favorites, setFavorites] = useState<FavoritesMap>({});
  const [searchQuery, setSearchQuery] = useState("");

  // Load movies on component mount
  useEffect(() => {
    setMovies(moviesData);
  }, []);

  // Filter movies based on search query
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.year.toString().includes(searchQuery),
  );

  const handleToggleFavorite = (id: number) => {
    const movieId = id.toString();
    setFavorites((favorites) => {
      const newFavorites = { ...favorites };
      if (newFavorites[movieId]) {
        delete newFavorites[movieId];
      } else {
        const movieToAdd = movies.find((m) => m.id === id);
        if (movieToAdd) {
          newFavorites[movieId] = movieToAdd;
        }
      }
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <div>
      <Navbar favoritesCount={Object.keys(favorites).length} />
      <SearchBar
        query={searchQuery}
        onChange={(query) => setSearchQuery(query)}
        onClear={() => setSearchQuery("")}
      />
      <MovieList
        movies={filteredMovies}
        favorites={Object.keys(favorites)}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
};
