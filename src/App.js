import React from "react";

import TheHeader from "features/app/organisms/TheHeader";
import TheFooter from "features/app/organisms/TheFooter";

export default function App() {
  return (
    <>
      <main className="px-5 pt-5 pb-16">
        <TheHeader />
      </main>

      <TheFooter />
    </>
  );
}
