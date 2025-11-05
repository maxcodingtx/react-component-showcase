import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import moviesData from "../data/movies.json";
import { type MovieProps } from "../components/MovieCard";

export const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const currentFavorites = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites") || "{}")
    : {};

  // Load movie details on mount
  useEffect(() => {
    if (id) {
      const movieId = parseInt(id, 10);
      const foundMovie = moviesData.find((m) => m.id === movieId);
      setMovie(foundMovie || null);
    }
  }, [id]);

  if (!movie || movie.id > 1000 || movie.id < 1) {
    return (
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Movie Not Found</h1>
            <p className="py-6">The movie with ID {id} could not be found.</p>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen">
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            ← Back to Movie Explorer
          </Link>
        </div>
        <div className="flex-none">
          <span className="text-xl font-bold">Movie Details</span>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="card bg-base-200 mx-auto max-w-4xl shadow-xl">
          <div className="card-body">
            <div className="mb-6">
              <h1 className="card-title mb-4 text-4xl font-bold">
                {movie.title}
              </h1>
              <div className="mb-4 flex flex-wrap gap-4">
                <div className="badge badge-outline badge-lg">
                  Year: {movie.year}
                </div>
                <div className="badge badge-primary badge-lg">
                  ⭐ {movie.rating}/10
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-semibold">Description</h2>
              <p className="text-lg opacity-80">{movie.description}</p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h3 className="card-title">Movie Information</h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Title:</span>{" "}
                      {movie.title}
                    </p>
                    <p>
                      <span className="font-semibold">Release Year:</span>{" "}
                      {movie.year}
                    </p>
                    <p>
                      <span className="font-semibold">Rating:</span>{" "}
                      {movie.rating}/10
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h3 className="card-title">Quick Actions</h3>
                  <div className="space-y-2">
                    <button
                      className="btn btn-success w-full"
                      onClick={() => {
                        if (!currentFavorites.keys[movie.id]) {
                          localStorage.setItem(
                            "favorites",
                            JSON.stringify([...currentFavorites, movie.id]),
                          );
                          alert("Movie added to favorites!");
                        } else {
                          alert("Movie is already in favorites!");
                        }
                      }}
                    >
                      Add to Favorites
                    </button>
                    <button className="btn btn-info w-full">Share Movie</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-actions justify-start">
              <Link to="/" className="btn btn-neutral">
                Back to Home
              </Link>
              <Link to="/favorites" className="btn btn-neutral">
                View Favorites
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
