import { type MovieProps } from "./MovieCard";
import { MovieCard } from "./MovieCard";

interface MovieListProps {
  movies: MovieProps[];
  favorites: string[];
  onToggleFavorite: (id: number) => void;
}

export const MovieList = ({
  movies,
  favorites,
  onToggleFavorite,
}: MovieListProps) => {
  return (
    <div className="p-4 sm:grid sm:grid-cols-1 sm:gap-4 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-4 xl:gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id.toString())}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};
