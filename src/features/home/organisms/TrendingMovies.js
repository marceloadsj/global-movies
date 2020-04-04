import React, { useEffect, useState, useMemo } from "react";

import fetchDb from "utilities/fetchDb";
import Icon from "components/Icon";
import Button from "components/Button";
import TrendingMoviesPoster from "../molecules/TrendingMoviesPoster";

export default function TrendingMovies() {
  // we control the infinite pagination and movies list
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState({ state: "loading" });

  useEffect(() => {
    async function run() {
      // TODO: add try catch here
      const response = await fetchDb.get("/3/trending/movie/week", {
        params: { page },
      });

      setMovies((movies) => {
        const results = movies.results || [];

        return {
          ...movies,
          ...response.data,
          state: "success",
          results: [...results, ...response.data.results],
        };
      });
    }

    run();
  }, [page]);

  // here we slice the movies to fit properly on the screen
  const { results, total_results } = movies;

  const sliceMovies = useMemo(() => {
    if (results) {
      if (results.length === total_results) return results;

      const cols = 6;

      return results.slice(0, results.length - (results.length % cols));
    }
  }, [results, total_results]);

  if (movies.state === "loading" || movies.state === "error") return null;

  return (
    <div className="ml-10 mt-16 pb-10 flex-1">
      <h3 className="flex items-center text-xl text-white">
        <Icon name="trending-up" className="mr-3" /> Trending Movies
      </h3>

      <div className="mt-10 grid grid-cols-6 gap-5">
        {sliceMovies.map((movie) => {
          return <TrendingMoviesPoster key={movie.id} movie={movie} />;
        })}
      </div>

      {page < movies.total_pages && (
        <div className="text-center">
          <Button
            className="mt-10"
            icon="plus-circle"
            onClick={() => setPage((page) => page + 1)}
          >
            Load More...
          </Button>
        </div>
      )}
    </div>
  );
}
