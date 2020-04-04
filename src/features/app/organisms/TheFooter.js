import React from "react";

import Icon from "components/Icon";

export default function TheFooter() {
  return (
    <footer className="w-full h-16 flex items-center justify-between px-5 text-sm border-t border-gray-800">
      <div className="text-gray-600">
        Created at <Icon name="home" /> with <Icon name="heart" /> and{" "}
        <Icon name="coffee" />
      </div>

      <a
        href="https://github.com/marceloadsj/global-movies"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500"
      >
        Marcelo Silva<span className="hidden sm:inline"> - Github</span>
      </a>
    </footer>
  );
}
