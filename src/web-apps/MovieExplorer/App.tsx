import { useState } from "react";
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  type PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import moviesData from "./data/movies.json";
import { type MovieProps } from "./components/MovieCard";

import { MovieList, Navbar, SearchBar } from "./components/barrel";

type FavoritesMap = Record<string, MovieProps>;
const columnHelper = createColumnHelper<MovieProps>();
const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
];

export const MovieExplorerApp = () => {
  const [favorites, setFavorites] = useState<FavoritesMap>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 8,
  });

  const movies = moviesData as MovieProps[];

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.year.toString().includes(searchQuery),
  );

  const table = useReactTable({
    data: filteredMovies,
    columns,
    state: { pagination },
    onPaginationChange: setPagination,
    autoResetPageIndex: false,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const paginatedMovies = table.getRowModel().rows.map((row) => row.original);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  };

  const handleSearchClear = () => {
    setSearchQuery("");
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  };

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
        onChange={handleSearchChange}
        onClear={handleSearchClear}
      />
      <MovieList
        movies={paginatedMovies}
        favorites={Object.keys(favorites)}
        onToggleFavorite={handleToggleFavorite}
      />
      <div className="flex flex-wrap items-center justify-center gap-3 p-4">
        <button
          type="button"
          className="btn btn-sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <span className="text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} {`of `}
          {table.getPageCount() || 1}
        </span>
        <button
          type="button"
          className="btn btn-sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
        <select
          className="select select-sm select-bordered"
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[8, 12, 16].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
