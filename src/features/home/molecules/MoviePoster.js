import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import Icon from "components/Icon";
import VoteTag from "../atoms/VoteTag";

export default function MoviePoster({ movie }) {
  // get configuration to show the movie banner
  const configuration = useSelector((state) => state.configuration);

  // mount the backdrop image url of the movie
  const { base_url, poster_sizes } = configuration.images;
  const specificPosterSize = poster_sizes[3];

  const movieBackdrop =
    movie.poster_path && `${base_url}${specificPosterSize}${movie.poster_path}`;

  // parse release date to show
  const releaseDate = useMemo(() => {
    return dayjs(movie.release_date).format("MMM YYYY");
  }, [movie.release_date]);

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="bg-black group rounded overflow-hidden flex flex-col justify-between"
    >
      {movieBackdrop && (
        <img
          src={movieBackdrop}
          title={movie.original_title}
          alt={movie.original_title}
          className="group-hover:scale-105 transform transition duration-150 shadow cursor-pointer mask-image-bottom-sm"
        />
      )}

      {!movieBackdrop && (
        <div className="flex-1 flex flex-col items-center justify-center text-red-500 py-24">
          <Icon name="image" className="text-5xl" />

          <div className="text-center mt-3">Poster Unavailable</div>
        </div>
      )}

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
