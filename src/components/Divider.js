import React from "react";
import classnames from "classnames";

export default function Divider({ className, vertical, light }) {
  return (
    <hr
      className={classnames(
        className,
        light && "border-gray-500",
        !light && "border-gray-700",

        vertical && "border-l h-full"
      )}
    />
  );
}
