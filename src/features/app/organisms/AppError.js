import React from "react";

import Icon from "components/Icon";

export default function AppError({ children }) {
  return (
    <section className="flex items-center justify-center flex-1">
      <div className="p-10 rounded border border-red-900 text-red-500 text-center max-w-xl">
        <Icon name="alert-circle" className="text-5xl" />

        <div className="text-xl mt-10">{children}</div>
      </div>
    </section>
  );
}
