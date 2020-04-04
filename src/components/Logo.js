import React from "react";

import Icon from "components/Icon";

export default function Logo() {
  return (
    <div className="uppercase font-black text-white text-xl tracking-wide flex items-center">
      G<span className="hidden sm:inline">lobal</span> M
      <Icon name="film" className="text-orange-500" />
      vies
    </div>
  );
}
