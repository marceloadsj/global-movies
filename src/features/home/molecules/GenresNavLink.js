import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import classnames from "classnames";

export default function GenresNavLink({ genre }) {
  // get the bool if the link is selected or not
  const {
    params: { genreId },
  } = useRouteMatch();

  const selected = genre.id === Number(genreId);

  return (
    <Link
      to={`/genre/${genre.id}`}
      className={classnames(
        "block rounded px-3 py-2 hover:text-white hover:bg-gray-800",
        !selected && "text-gray-500",
        selected && "text-orange-500 bg-gray-800"
      )}
    >
      {genre.name}
    </Link>
  );
}
