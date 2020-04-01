import React from "react";

import Logo from "../atoms/Logo";
import TheHeaderNav from "../molecules/TheHeaderNav";

export default function TheHeader() {
  return (
    <header className="h-16 bg-orange-500 flex items-center justify-between px-10 shadow">
      <Logo />

      <TheHeaderNav />
    </header>
  );
}
