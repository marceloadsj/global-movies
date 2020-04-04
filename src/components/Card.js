import React from "react";
import classnames from "classnames";

export default function Card({ className, bodyClassName, children }) {
  return (
    <div
      className={classnames(
        "p-5 xl:p-6 rounded border border-gray-800 overflow-hidden",
        className
      )}
    >
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
