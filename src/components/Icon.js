import React, { useEffect } from "react";
import classnames from "classnames";
import feather from "feather-icons";

export default function Icon({ name, className }) {
  useEffect(() => {
    feather.replace();
  }, [name, className]);

  return (
    <i
      data-feather={name}
      width="1em"
      height="1em"
      className={classnames("inline stroke-current stroke-2", className)}
    />
  );
}
