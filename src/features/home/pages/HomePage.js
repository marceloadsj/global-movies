import React from "react";

import GenresNav from "features/genres/organisms/GenresNav";
import MoviesList from "features/movies/organisms/MoviesList";
import MovieDetails from "features/movies/organisms/MovieDetails";
import MovieSectionTemplate from "../templates/MovieSectionTemplate";

export default function HomePage() {
  return (
    <>
      <MovieDetails
        movieId={process.env.REACT_APP_FEATURED_MOVIE_ID}
        isFeatured
      />

      <MovieSectionTemplate>
        <GenresNav />

        <MoviesList
          fetchUrl="/3/trending/movie/week"
          title="Trending Movies"
          icon="trending-up"
        />
      </MovieSectionTemplate>
    </>
  );
}
