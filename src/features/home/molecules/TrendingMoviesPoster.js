import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import VoteTag from "../atoms/VoteTag";

export default function TrendingMoviesPoster({ movie }) {
  // get configuration to show the movie banner
  const configuration = useSelector((state) => state.configuration);

  // mount the backdrop image url of the movie
  const { base_url, poster_sizes } = configuration.images;
  const specificPosterSize = poster_sizes[3];

  const movieBackdrop = `${base_url}${specificPosterSize}${movie.poster_path}`;

  // parse release date to show
  const releaseDate = useMemo(() => {
    return dayjs(movie.release_date).format("MMM YYYY");
  }, [movie.release_date]);

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="bg-black group rounded overflow-hidden"
    >
      <img
        src={movieBackdrop}
        title={movie.original_title}
        alt={movie.original_title}
        className="group-hover:scale-105 transform transition duration-150 shadow cursor-pointer mask-image-bottom-sm"
      />

      <div className="p-3 text-center">
        <div className="text-sm text-white truncate">
          {movie.original_title}
        </div>

        <div className="flex justify-between text-xs mt-3">
          <VoteTag value={movie.vote_average} />

          <div className="font-bold text-gray-500">{releaseDate}</div>
        </div>
      </div>
    </Link>
  );
}
