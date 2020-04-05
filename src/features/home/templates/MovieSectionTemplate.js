import React from "react";

export default function MovieSectionTemplate({ children }) {
  return (
    <section className="p-5 lg:p-10 flex flex-col lg:flex-row min-h-screen">
      {children}
    </section>
  );
}
