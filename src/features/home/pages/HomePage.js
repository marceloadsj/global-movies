import React from "react";

import GenresNav from "features/genres/organisms/GenresNav";
import MoviesList from "features/movies/organisms/MoviesList";
import MovieDetails from "features/movies/organisms/MovieDetails";
import MovieSectionTemplate from "../templates/MovieSectionTemplate";

const randomFeaturedMovies = [
  268896,
  338762,
  475557,
  351286,
  122,
  420818,
  335988,
  157336,
  27205,
  181808,
];

const randomIndex = Math.floor(Math.random() * randomFeaturedMovies.length);
const movieId = randomFeaturedMovies[randomIndex];

export default function HomePage() {
  return (
    <>
      <MovieDetails movieId={movieId} isFeatured />

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
