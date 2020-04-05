import React, { useMemo, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import GenresNav from "features/genres/organisms/GenresNav";
import MovieSectionTemplate from "features/home/templates/MovieSectionTemplate";
import MoviesList from "features/home/organisms/MoviesList";
import getGenres from "../actions/getGenres";

export default function SelectedGenrePage() {
  const {
    params: { genreId },
  } = useRouteMatch();

  // load the genres if we don't have it
  const genres = useSelector((state) => state.genres);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!genres) dispatch(getGenres());
  }, [dispatch, genres]);

  // find the selected genre in our list
  const genre = useMemo(() => {
    const parsedGenreId = Number(genreId);

    return genres?.data?.find((genre) => genre.id === parsedGenreId);
  }, [genres, genreId]);

  return (
    <MovieSectionTemplate>
      <GenresNav />

      <MoviesList
        fetchUrl={`/3/discover/movie?include_adult=false&with_genres=${genreId}`}
        title={genre?.name}
      />
    </MovieSectionTemplate>
  );
}
