import React, { useEffect, useState, useMemo } from "react";

import fetchDb from "utilities/fetchDb";
import Icon from "components/Icon";
import Button from "components/Button";
import useBreakpoints from "hooks/useBreakpoints";
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

  // we get the right number of columns per breakpoint
  const { xl, md, sm } = useBreakpoints();
  const cols = (xl && 5) || (md && 4) || (sm && 3) || 2;

  // here we slice the movies to fit properly on the screen
  const { results, total_results } = movies;

  const sliceMovies = useMemo(() => {
    if (results) {
      if (results.length === total_results) return results;

      return results.slice(0, results.length - (results.length % cols));
    }
  }, [results, total_results, cols]);

  if (movies.state === "loading" || movies.state === "error") return null;

  return (
    <div className="lg:ml-5 mt-5 md:mt-10 lg:mt-16 pb-10 flex-1">
      <h3 className="flex items-center text-xl text-white">
        <Icon name="trending-up" className="mr-3" /> Trending Movies
      </h3>

      <div className="mt-5 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {sliceMovies.map((movie) => {
          return <TrendingMoviesPoster key={movie.id} movie={movie} />;
        })}
      </div>

      {page < movies.total_pages && (
        <div className="text-center">
          <Button
            className="mt-10 w-full sm:w-auto"
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
