import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import Icon from "./Icon";

export default function Button({
  className,
  isLink,
  icon,
  children,
  ...props
}) {
  const Is = isLink ? Link : "button";

  return (
    <Is
      {...props}
      className={classnames(
        `
          bg-orange-600 hover:bg-orange-500 active:bg-orange-700
          text-white inline-flex items-center justify-center px-8 py-2
          rounded cursor-pointer focus:outline-none focus:shadow-outline
        `,
        className
      )}
    >
      <Icon name={icon} className="mr-2" /> {children}
    </Is>
  );
}
