import React from "react";

import Icon from "components/Icon";

export default function TheFooter() {
  return (
    <footer className="w-full h-24 flex flex-col sm:flex-row items-center justify-between py-3 px-5 text-sm border-t border-gray-800">
      <div className="text-gray-600 flex items-center">
        Created at <Icon name="home" className="mx-1" /> with{" "}
        <Icon name="heart" className="mx-1" /> and{" "}
        <Icon name="coffee" className="ml-1" />
      </div>

      <div className="text-center sm:text-right">
        <a
          href="https://github.com/marceloadsj/global-movies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500"
        >
          Marcelo da Silva<span className="hidden sm:inline"> - Github</span>
        </a>

        <div className="text-white mt-2">
          Powered by{" "}
          <a
            href={process.env.REACT_APP_THE_MOVIE_DB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500"
          >
            themoviedb.org
          </a>
        </div>
      </div>
    </footer>
  );
}
