import React from "react";
import { WatchedMovie } from "./WatchedMovie";

export const ListWatched = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};
