import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

import Icon from "components/Icon";
import Divider from "components/Divider";
import Card from "components/Card";
import MoviesList from "features/movies/organisms/MoviesList";

export default function SearchPage() {
  const {
    params: { query },
  } = useRouteMatch();

  // put the search query on url, with a debounce
  const [search, setSearch] = useState(query || "");
  const history = useHistory();

  useEffect(() => {
    async function run() {
      history.push(`/search/${search}`);
    }

    if (search) {
      const timeout = setTimeout(run, 500);

      return () => clearTimeout(timeout);
    }

    history.push("/search");
  }, [history, search]);

  // mount the proper fetchUrl
  let fetchUrl;

  if (query) {
    fetchUrl = `/3/search/movie?include_adult=false&query=${query}`;
  }

  return (
    <section className="p-5 lg:p-10">
      <h1 className="text-white text-2xl flex items-center">
        <Icon name="search" className="mr-3" /> Search
      </h1>

      <input
        className="w-full px-10 py-5 rounded bg-gray-800 mt-5 focus:outline-none focus:shadow-outline text-white text-lg text-center"
        placeholder="Type a movie title here. E.g. Pacific Rim"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <Divider className="my-10" />

      {!fetchUrl && (
        <Card
          className="text-gray-500 text-center"
          bodyClassName="flex flex-col items-center justify-center"
        >
          <Icon name="align-justify" className="text-4xl" />

          <div className="mt-5 text-lg">The result will appear here</div>
        </Card>
      )}

      {fetchUrl && (
        <MoviesList
          fetchUrl={fetchUrl}
          title={`Search result for "${search}"`}
          icon="search"
        />
      )}
    </section>
  );
}
