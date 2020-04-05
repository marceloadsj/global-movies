import React, { useState, useEffect } from "react";

import Icon from "components/Icon";
import Divider from "components/Divider";
import Card from "components/Card";
import MoviesList from "features/movies/organisms/MoviesList";

export default function SearchPage() {
  const [fetchUrl, setFetchUrl] = useState();

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function run() {
      setFetchUrl(`/3/search/movie?include_adult=false&query=${search}`);
    }

    if (search) {
      const timeout = setTimeout(run, 500);

      return () => clearTimeout(timeout);
    }

    setFetchUrl();
  }, [search]);

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
