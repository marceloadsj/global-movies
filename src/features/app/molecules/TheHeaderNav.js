import React from "react";

import TheHeaderNavLink from "../atoms/TheHeaderNavLink";

export default function TheHeaderNav() {
  return (
    <nav className="flex h-full">
      <TheHeaderNavLink to="/" icon="home">
        Home
      </TheHeaderNavLink>

      <TheHeaderNavLink to="/genres" icon="grid">
        Genres
      </TheHeaderNavLink>

      <TheHeaderNavLink to="/search" icon="search">
        Search
      </TheHeaderNavLink>
    </nav>
  );
}
