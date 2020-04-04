import React from "react";
import { Link } from "react-router-dom";

import Divider from "components/Divider";
import Logo from "components/Logo";
import { ReactComponent as TmdbLogo } from "images/tmdb-logo.svg";
import useBreakpoints from "hooks/useBreakpoints";
import TheHeaderNav from "../molecules/TheHeaderNav";

export default function TheHeader() {
  const { sm } = useBreakpoints();

  return (
    <header className="h-16 bg-gray-800 flex items-center justify-between px-5 lg:px-10 shadow-md rounded z-10 mt-5 mx-5">
      <div className="flex items-center h-full py-3">
        <Link to="/">
          <Logo />
        </Link>

        {sm && (
          <>
            <Divider vertical className="mx-5 lg:mx-10" />

            <TmdbLogo className="w-32" />
          </>
        )}
      </div>

      <TheHeaderNav />
    </header>
  );
}
