import React, { useEffect, useState, useMemo } from "react";

import fetchDb from "utilities/fetchDb";
import Icon from "components/Icon";
import Card from "components/Card";
import Button from "components/Button";
import useBreakpoints from "hooks/useBreakpoints";
import MoviePoster from "../molecules/MoviePoster";

export default function MoviesList({ fetchUrl, title, icon }) {
  // we control the infinite pagination and movies list
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState({ state: "loading" });

  // if the fetch url changes, we reset the state
  useEffect(() => {
    setPage(1);
    setMovies({ state: "loading" });
  }, [fetchUrl]);

  // we load the movies to show on screen, pagination based
  useEffect(() => {
    async function run() {
      try {
        const response = await fetchDb.get(fetchUrl, {
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
      } catch (error) {
        // TODO: I should send the error to an error tracker tool
      }
    }

    run();
  }, [page, fetchUrl]);

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

  const hasMovies = Boolean(sliceMovies?.length);

  return (
    <div className="lg:ml-5 mt-5 flex-1">
      <h3 className="flex items-center text-xl text-white">
        {icon && <Icon name={icon} className="mr-3" />} {title}
      </h3>

      {!hasMovies && (
        <Card
          className="text-gray-500 text-center mt-5"
          bodyClassName="flex flex-col items-center justify-center"
        >
          <Icon name="slash" className="text-4xl" />

          <div className="mt-5 text-lg">No movies found</div>
        </Card>
      )}

      {hasMovies && (
        <div className="mt-5 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
          {sliceMovies.map((movie) => {
            return <MoviePoster key={movie.id} movie={movie} />;
          })}
        </div>
      )}

      {page < movies.total_pages && (
        <div className="text-center">
          <Button
            className="mt-5 md:mt-10 w-full sm:w-auto"
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
