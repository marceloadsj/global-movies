import React from "react";
import { useRouteMatch } from "react-router-dom";

import MovieDetails from "../organisms/MovieDetails";

export default function SelectedMoviePage() {
  const {
    params: { movieId },
  } = useRouteMatch();

  return <MovieDetails movieId={movieId} />;
}
