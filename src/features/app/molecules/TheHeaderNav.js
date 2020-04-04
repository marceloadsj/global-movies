import React from "react";

import TheHeaderNavLink from "../atoms/TheHeaderNavLink";

export default function TheHeaderNav() {
  return (
    <nav className="flex h-full">
      <TheHeaderNavLink to="/" icon="home">
        Home
      </TheHeaderNavLink>

      <TheHeaderNavLink to="/genres" className="ml-5" icon="grid">
        Genres
      </TheHeaderNavLink>

      <TheHeaderNavLink to="/search" className="ml-5" icon="search">
        Search
      </TheHeaderNavLink>
    </nav>
  );
}
