import React from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

import Icon from "components/atoms/Icon";

export default function NavLink({ className, children, icon, ...props }) {
  const { pathname } = useLocation();

  const selected = pathname === props.to;

  return (
    <Link
      {...props}
      className={classnames(
        "flex items-center px-5 transition duration-150 hover:bg-orange-400 active:bg-orange-600 border-b-2",
        className,
        !selected &&
          "text-orange-200 hover:text-orange-100 active:text-orange-300 border-transparent",
        selected && "text-white border-white"
      )}
    >
      <Icon name={icon} className="text-sm mr-3" /> {children}
    </Link>
  );
}
