import React from "react";

import GenresNav from "features/genres/organisms/GenresNav";
import FeaturedMovie from "../organisms/FeaturedMovie";
import MoviesList from "../organisms/MoviesList";
import MovieSectionTemplate from "../templates/MovieSectionTemplate";

export default function HomePage() {
  return (
    <>
      <FeaturedMovie />

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
