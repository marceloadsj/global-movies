import React from "react";

import Logo from "../atoms/Logo";
import TheHeaderNav from "../molecules/TheHeaderNav";
import { ReactComponent as TmdbLogo } from "images/tmdb-logo.svg";

export default function TheHeader() {
  return (
    <header className="h-16 bg-gray-800 flex items-center justify-between px-10 shadow-md rounded">
      <div className="flex items-center h-full py-3">
        <Logo />

        <hr className="border-l h-full border-gray-700 mx-10" />

        <TmdbLogo className="w-32" />
      </div>

      <TheHeaderNav />
    </header>
  );
}
