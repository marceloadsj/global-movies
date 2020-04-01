import React from "react";

import TheHeader from "features/app/organisms/TheHeader";
import TheFooter from "features/app/organisms/TheFooter";

export default function App() {
  return (
    <>
      <main className="p-5 flex-1">
        <TheHeader />
      </main>

      <TheFooter />
    </>
  );
}
