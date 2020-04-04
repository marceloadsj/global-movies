import React, { useEffect, useState } from "react";

import fetchDb from "utilities/fetchDb";
import Card from "components/Card";
import GenresNavLink from "../molecules/GenresNavLink";

export default function GenresNav() {
  // load all genres to create the left nav bar
  const [genres, setGenres] = useState({ state: "loading" });

  useEffect(() => {
    setGenres({ state: "loading" });

    async function run() {
      try {
        const response = await fetchDb.get("/3/genre/movie/list");

        setGenres({ state: "success", data: response.data.genres });
      } catch (exception) {
        // TODO: I should send the error to an error tracker tool
        setGenres({ state: "error" });
      }
    }

    run();
  }, []);

  // we doesn't show the bar if don't have the genres
  if (genres.state === "loading" || genres.state === "error") return null;

  return (
    <div className="-mb-32 py-10 sticky top-0 max-h-screen overflow-y-scroll w-full max-w-xs">
      <Card>
        <h5 className="text-gray-300 text-xl mb-5">Genres</h5>

        {genres.data.map((genre) => (
          <GenresNavLink key={genre.id} genre={genre} />
        ))}
      </Card>
    </div>
  );
}
