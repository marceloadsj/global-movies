import React from "react";
import classnames from "classnames";

export default function Skeleton({ className }) {
  return <div className={classnames("rounded bg-gray-800", className)} />;
}
