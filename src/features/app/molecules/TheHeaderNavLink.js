import React from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

import Icon from "components/Icon";

export default function NavLink({ className, children, icon, ...props }) {
  const { pathname } = useLocation();

  const selected = pathname === props.to;

  return (
    <Link
      {...props}
      className={classnames(
        "flex items-center px-5 transition duration-150 hover:bg-gray-700 active:bg-gray-900 border-b-4",
        className,
        !selected &&
          "text-gray-400 hover:text-gray-300 active:text-gray-500 border-transparent",
        selected && "text-white border-orange-500"
      )}
    >
      <Icon name={icon} className="text-sm mr-3" /> {children}
    </Link>
  );
}
