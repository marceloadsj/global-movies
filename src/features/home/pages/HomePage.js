import React from "react";

import FeaturedMovie from "../organisms/FeaturedMovie";
import GenresNav from "../organisms/GenresNav";
import TrendingMovies from "../organisms/TrendingMovies";

export default function HomePage() {
  return (
    <>
      <FeaturedMovie />

      <section className="p-5 md:p-10 flex flex-col lg:flex-row">
        <GenresNav />

        <TrendingMovies />
      </section>
    </>
  );
}
