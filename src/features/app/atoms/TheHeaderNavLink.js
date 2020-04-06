import React from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

import Icon from "components/Icon";

export default function TheHeaderNavLink({ to, children, icon }) {
  const { pathname } = useLocation();

  let selected = pathname === to;

  if (to !== "/") {
    selected = pathname.startsWith(to);
  }

  return (
    <Link
      to={to}
      className={classnames(
        "flex items-center px-5 md:px-3 lg:px-5 transition duration-150 hover:bg-gray-700 active:bg-gray-900 border-b-4",
        !selected &&
          "text-gray-400 hover:text-gray-300 active:text-gray-500 border-transparent",
        selected && "text-white border-orange-500"
      )}
    >
      <Icon name={icon} className="text-sm md:mr-3" />

      <span className="hidden md:inline">{children}</span>
    </Link>
  );
}
