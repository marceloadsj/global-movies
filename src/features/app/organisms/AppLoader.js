import React from "react";

import Icon from "components/Icon";

export default function AppLoader() {
  return (
    <section className="flex items-center justify-center flex-1">
      <Icon name="loader" className="text-gray-500 text-6xl spin" />
    </section>
  );
}
