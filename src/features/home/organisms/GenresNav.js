import React, { useEffect, useState } from "react";

import fetchDb from "utilities/fetchDb";
import Card from "components/Card";
import useBreakpoints from "hooks/useBreakpoints";
import GenresNavLink from "../molecules/GenresNavLink";
import { useHistory } from "react-router-dom";

import Icon from "components/Icon";

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

  // we render a select tag on mobile
  const { lg } = useBreakpoints();

  const history = useHistory();

  // we doesn't show the bar if don't have the genres
  if (genres.state === "loading" || genres.state === "error") return null;

  if (!lg) {
    return (
      <div className="w-full">
        <select
          className="px-3 py-2 rounded border border-gray-800 appearance-none bg-gray-900 text-white focus:outline-none focus:shadow-outline w-full"
          onChange={(event) =>
            event.target.value && history.push(`/genre/${event.target.value}`)
          }
        >
          <option value="">Genres</option>

          {genres.data.map((genre) => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </select>

        <Icon name="chevron-down" className="text-white -ml-8" />
      </div>
    );
  }

  return (
    <div className="py-10 pr-5 sticky top-0 max-h-screen overflow-y-scroll w-64 xl:w-full xl:max-w-xs">
      <Card>
        <h5 className="text-gray-300 text-xl mb-5">Genres</h5>

        {genres.data.map((genre) => (
          <GenresNavLink key={genre.id} genre={genre} />
        ))}
      </Card>
    </div>
  );
}
