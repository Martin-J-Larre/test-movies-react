import { useState } from "react";
import { Movie } from "./Movie";

export const ListMovies = ({ isOpen1, movies }) => {
  return (
    <>
      (
      <ul className="list">
        {movies?.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </ul>
      )
    </>
  );
};
