import React from "react";

import FeaturedMovie from "../organisms/FeaturedMovie";
import GenresNav from "../organisms/GenresNav";
import TrendingMovies from "../organisms/TrendingMovies";

export default function HomePage() {
  return (
    <>
      <FeaturedMovie />

      <section className="px-5 lg:px-10 flex flex-col lg:flex-row">
        <GenresNav />

        <TrendingMovies />
      </section>
    </>
  );
}
