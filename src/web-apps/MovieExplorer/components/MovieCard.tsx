import { Link } from "react-router";
import { FavoriteButton } from "./FavoriteButton";

export interface MovieProps {
  id: number;
  title: string;
  posterUrl?: string;
  description: string;
  year: number;
  rating: number;
}

interface MovieCardProps {
  movie: MovieProps;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export const MovieCard = ({
  movie,
  isFavorite,
  onToggleFavorite,
}: MovieCardProps) => {
  return (
    <div className="card card-border shadow-xl">
      <div className="card-body">
        {movie.posterUrl && <img src={movie.posterUrl} alt={movie.title} />}
        <h3 className="card-title">{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}</p>
        <div className="card-actions justify-start">
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={() => onToggleFavorite(movie.id)}
          />
          <Link to={`/movie/${movie.id}`}>
            <span className="hover:font-bold">More Info</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
