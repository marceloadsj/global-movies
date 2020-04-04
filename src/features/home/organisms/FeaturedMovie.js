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

        setMovie({ state: "success", data: response.data });
      } catch (exception) {
        // TODO: I should send the error to an error tracker tool
        setMovie({ state: "error" });
      }
    }

    run();
  }, []);

  // parse the released year to show on the screen
  const release_date = movie.data?.release_date;

  const releaseYear = useMemo(() => {
    if (release_date) {
      return dayjs(release_date).format("YYYY");
    }
  }, [release_date]);

  // get configuration to show the movie banner
  const configuration = useSelector((state) => state.configuration);

  // if we could load the featured, we simply doesnt show it
  if (movie.state === "loading" || movie.state === "error") return null;

  // mount the backdrop image url of the movie
  const { base_url, backdrop_sizes } = configuration.images;
  const originalBackdropSize = backdrop_sizes[backdrop_sizes.length - 1];

  const movieBackdrop = `${base_url}${originalBackdropSize}${movie.data.backdrop_path}`;

  // mount movie url link
  const movieUrl = `/movie/${movie.data.id}`;

  return (
    <>
      <img
        src={movieBackdrop}
        alt=""
        className="absolute top-0 opacity-25 mask-image-top-sm-bottom-lg mt-10"
      />

      <div className="z-10 relative pl-24 pt-32 pb-32">
        <div className="flex items-center h-5">
          <div className="flex items-center -mx-1">
            {movie.data.genres.map((genre) => {
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

          <Divider vertical variant="light" className="mx-5" />

          <div className="text-gray-400 flex items-center">
            <Icon name="clock" className="mr-2" /> {movie.data.runtime} minutes
          </div>
        </div>

        <div className="flex items-baseline font-bold mt-10">
          <h1 className="text-white text-5xl border-b border-transparent hover:border-white leading-none">
            <Link to={movieUrl}>{movie.data.original_title}</Link>
          </h1>

          <span className="ml-6 text-orange-500 text-xl flex items-center">
            <Icon name="calendar" className="mr-2" /> {releaseYear}
          </span>
        </div>

        <h2 className="mt-5 inline-block text-gray-400 text-3xl mt-3 border-b border-transparent hover:border-gray-400 leading-none">
          <Link to={movieUrl}>{movie.data.tagline}</Link>
        </h2>

        <div className="max-w-4xl mt-12">
          <Divider className="my-5" light />

          <Card className="mt-10">
            <h5 className="text-white text-lg flex items-center">
              <Icon name="align-left" className="mr-2" />
              Overview
            </h5>

            <p className="text-gray-500 text-justify">{movie.data.overview}</p>
          </Card>

          <div className="mt-5 text-xs flex items-center justify-between">
            <div className="flex items-center h-5">
              <VoteTag value={movie.data.vote_average} />

              <Divider vertical className="mx-3" />

              <div className="text-gray-500">{movie.data.vote_count} votes</div>
            </div>

            <div className="mt-3 -mx-2 flex items-center text-gray-500">
              {movie.data.production_companies.map((productionCompany) => {
                return (
                  <div key={productionCompany.id} className="mx-2">
                    {productionCompany.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Button icon="info" isLink to={movieUrl} className="mt-10">
          Check More Details
        </Button>
      </div>
    </>
  );
}
