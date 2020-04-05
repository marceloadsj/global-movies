import React, { useMemo } from "react";
import { useRouteMatch } from "react-router-dom";

import GenresNav from "features/genres/organisms/GenresNav";
import MovieSectionTemplate from "features/home/templates/MovieSectionTemplate";
import MoviesList from "features/home/organisms/MoviesList";
import useGetGenres from "../hooks/useGetGenres";

export default function SelectedGenrePage() {
  const {
    params: { genreId },
  } = useRouteMatch();

  // load the genres if we don't have it
  const genres = useGetGenres();

  // find the selected genre in our list
  const genre = useMemo(() => {
    const parsedGenreId = Number(genreId);

    return genres?.data?.find((genre) => genre.id === parsedGenreId);
  }, [genres, genreId]);

  return (
    <MovieSectionTemplate>
      <GenresNav />

      <MoviesList
        fetchUrl={`/3/discover/movie?include_adult=false&sort_by=popularity.desc&with_genres=${genreId}`}
        title={genre?.name}
      />
    </MovieSectionTemplate>
  );
}
