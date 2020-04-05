import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import Icon from "./Icon";

export default function Button({
  className,
  isLink,
  isExternal,
  icon,
  children,
  variant = "primary",
  to,
  ...props
}) {
  let Is = isLink ? Link : "button";

  let target;
  let rel;
  let href;

  if (isExternal) {
    Is = "a";
    target = "_blank";
    rel = "noopener noreferrer";
    href = to;
    to = undefined;
  }

  return (
    <Is
      target={target}
      rel={rel}
      href={href}
      to={to}
      {...props}
      className={classnames(
        `
          text-center text-white inline-flex items-center justify-center px-8 py-2
          rounded cursor-pointer focus:outline-none focus:shadow-outline
        `,
        className,

        variant === "primary" &&
          "bg-orange-600 hover:bg-orange-500 active:bg-orange-700",

        variant === "neutral" &&
          "bg-gray-700 hover:bg-gray-600 active:bg-gray-800"
      )}
    >
      {icon && <Icon name={icon} className="mr-2" />} {children}
    </Is>
  );
}
