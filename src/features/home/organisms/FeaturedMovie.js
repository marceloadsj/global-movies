import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import fetchDb from "utilities/fetchDb";
import Icon from "components/Icon";
import Divider from "components/Divider";
import Button from "components/Button";
import Card from "components/Card";
import VoteTag from "../atoms/VoteTag";

export default function FeaturedMovie() {
  // load the featured movie from the json endpoint
  const [movie, setMovie] = useState({ state: "loading" });

  useEffect(() => {
    async function run() {
      try {
        const response = await fetchDb.get(
          `/3/movie/${process.env.REACT_APP_FEATURED_MOVIE_ID}`
        );

        setMovie({ state: "success", ...response.data });
      } catch (exception) {
        // TODO: I should send the error to an error tracker tool
        setMovie({ state: "error" });
      }
    }

    run();
  }, []);

  // parse the released year to show on the screen
  const release_date = movie.release_date;

  const releaseYear = useMemo(() => {
    if (release_date) {
      return dayjs(release_date).format("YYYY");
    }
  }, [release_date]);

  // get configuration to show the movie banner
  const configuration = useSelector((state) => state.configuration);

  const { base_url, backdrop_sizes } = configuration.images;
  const originalBackdropSize = backdrop_sizes[backdrop_sizes.length - 1];

  const movieBackdrop = `${base_url}${originalBackdropSize}${movie.backdrop_path}`;

  // mount movie url link
  const movieUrl = `/movie/${movie.id}`;

  // if we could load the featured, we simply doesnt show it
  if (movie.state === "loading" || movie.state === "error") return null;

  return (
    <>
      <img
        src={movieBackdrop}
        alt=""
        className="absolute top-0 opacity-25 mask-image-top-sm-bottom-lg mt-10"
      />

      <div className="z-10 relative px-5 xl:px-16 pt-5 md:pt-10 pb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:h-5">
          <div className="flex items-center -mx-1">
            {movie.genres.map((genre) => {
              return (
                <Link
                  key={genre.id}
                  to={`/genre/${genre.id}`}
                  className="rounded-full inline-block px-2 text-xs border border-orange-700 hover:border-orange-600 text-gray-200 hover:text-gray-100 mx-1 font-medium"
                >
                  {genre.name}
                </Link>
              );
            })}
          </div>

          <Divider vertical variant="light" className="hidden sm:block mx-5" />

          <div className="text-gray-400 flex items-center mt-2 sm:mt-0 text-xs sm:text-base">
            <Icon name="clock" className="mr-2" /> {movie.runtime} minutes
          </div>
        </div>

        <div className="flex items-baseline font-bold mt-5 sm:mt-10">
          <h1 className="text-white text-4xl md:text-5xl border-b border-transparent hover:border-white leading-none">
            <Link to={movieUrl}>{movie.original_title}</Link>
          </h1>

          <span className="ml-6 text-orange-500 text-lg md:text-xl flex items-center">
            <Icon name="calendar" className="mr-2" /> {releaseYear}
          </span>
        </div>

        <h2 className="mt-5 inline-block text-gray-400 text-lg sm:text-2xl md:text-3xl border-b border-transparent hover:border-gray-400 leading-none">
          <Link to={movieUrl}>{movie.tagline}</Link>
        </h2>

        <div className="xl:max-w-4xl mt-5 sm:mt-10">
          <Card bodyClassName="h-32 md:h-48 xl:h-auto pb-5 xl:pb-0 overflow-y-scroll mask-image-bottom-sm xl:mask-image-none">
            <h5 className="text-white text-lg flex items-center">
              <Icon name="align-left" className="mr-2" />
              Overview
            </h5>

            <p className="text-gray-500 text-justify">{movie.overview}</p>
          </Card>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center h-5">
              <VoteTag value={movie.vote_average} />

              <Divider vertical className="mx-3" />

              <div className="text-gray-500 text-xs">
                {movie.vote_count} votes
              </div>
            </div>

            <div className="ml-5 text-xs -mx-1 md:-mx-2 text-gray-500 truncate">
              {movie.production_companies.map((productionCompany) => {
                return (
                  <span key={productionCompany.id} className="mx-1 md:mx-2">
                    {productionCompany.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <Button
          icon="info"
          isLink
          to={movieUrl}
          className="mt-5 w-full sm:w-auto"
        >
          Check More Details
        </Button>
      </div>
    </>
  );
}
