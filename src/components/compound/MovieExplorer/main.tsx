import { BrowserRouter, Routes, Route } from "react-router";
import { MovieExplorerApp } from "./App";
import { Favorites } from "./Favorites";
import { MovieDetailsPage } from "./movie/id";

export const MovieExplorerMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieExplorerApp />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
