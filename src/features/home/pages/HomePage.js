import React from "react";

import FeaturedMovie from "../organisms/FeaturedMovie";
import GenresNav from "../organisms/GenresNav";

export default function HomePage() {
  return (
    <>
      <FeaturedMovie />

      <section className="p-10 flex">
        <GenresNav />
      </section>
    </>
  );
}
