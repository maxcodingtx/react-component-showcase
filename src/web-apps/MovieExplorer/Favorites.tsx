import { Link } from "react-router";
import { type MovieProps } from "./components/MovieCard";

export const Favorites = () => {
  const favorites: Record<string, MovieProps> = JSON.parse(
    localStorage.getItem("favorites") || "{}",
  );
  return (
    <div className="space-y-3 p-4 text-center">
      <h2>Your Favorites</h2>
      {Object.keys(favorites).length === 0 ? (
        <p>No favorite movies found.</p>
      ) : (
        <ul>
          {Object.values(favorites).map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
      <Link
        to="/"
        onClick={() => {
          localStorage.removeItem("favorites");
        }}
        className="btn btn-primary"
      >
        Back to Home
      </Link>
    </div>
  );
};
