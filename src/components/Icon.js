import React from "react";
import classnames from "classnames";

export default function Icon({ name, className }) {
  return (
    <svg
      width="1em"
      height="1em"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classnames("inline stroke-current stroke-2", className)}
    >
      <use xlinkHref={`/feather-sprite.svg#${name}`} />
    </svg>
  );
}
