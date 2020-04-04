import React from "react";
import classnames from "classnames";

export default function Card({ className, children }) {
  return (
    <div
      className={classnames("p-6 rounded border border-gray-800", className)}
    >
      {children}
    </div>
  );
}
