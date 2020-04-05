import React from "react";

import Icon from "components/Icon";
import Card from "components/Card";
import Button from "components/Button";
import Divider from "components/Divider";
import { ReactComponent as TmdbLogo } from "images/tmdb-logo.svg";
import useGetGenres from "../hooks/useGetGenres";

export default function GenresPage() {
  // load all genres to create the left nav bar
  const genres = useGetGenres();

  if (!genres || genres?.state === "loading" || genres?.state === "error") {
    return null;
  }

  return (
    <section className="flex flex-col md:flex-row px-5 lg:px-10 pt-5 lg:pt-10">
      <div className="md:w-1/3">
        <h1 className="text-white text-2xl flex items-center">
          <Icon name="grid" className="mr-3" /> Genres
        </h1>

        <Card className="mt-5 md:mt-10 text-gray-300">
          <p>
            Here you will find the best categories and collection of movies,
            their descriptions and another specific details.
          </p>

          <p className="mt-5">
            Feel free to choose one categorie to see all movies we have on our
            database, powered by{" "}
            <a
              href={process.env.REACT_APP_THE_MOVIE_DB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500"
            >
              themoviedb.org
            </a>
            .
          </p>
        </Card>

        <Divider className="my-5 md:my-10" />

        <TmdbLogo className="w-32" />
      </div>

      <div className="flex-1 hidden md:block">
        <Divider vertical className="mx-5 lg:mx-10" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:w-2/3 mt-10 mb-5 sm:mb-10">
        {genres.data.map((genre) => {
          return (
            <Button
              variant="neutral"
              isLink
              to={`/genre/${genre.id}`}
              key={genre.id}
            >
              {genre.name}
            </Button>
          );
        })}

        <Button isLink to="/" variant="neutral" className="sm:col-span-2">
          Trending Movies
        </Button>
      </div>
    </section>
  );
}
