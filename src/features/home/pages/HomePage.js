import React from "react";

import FeaturedMovie from "../organisms/FeaturedMovie";
import GenresNav from "../organisms/GenresNav";
import TrendingMovies from "../organisms/TrendingMovies";

export default function HomePage() {
  return (
    <>
      <FeaturedMovie />

      <section className="p-10 flex">
        <GenresNav />

        <TrendingMovies />
      </section>
    </>
  );
}
