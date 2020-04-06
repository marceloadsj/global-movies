import React from "react";

import Skeleton from "components/Skeleton";

export default function MovieDetailsSkeleton() {
  return (
    <section className="p-5 lg:p-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
        <Skeleton className="w-10/12 sm:w-1/2 lg:w-1/4 h-64 py-64" />

        <div className="ml-0 lg:ml-10 mt-10 flex-1 w-full">
          <Skeleton className="w-64 h-20" />

          <Skeleton className="mt-10 w-64 px-64 h-12" />

          <Skeleton className="mt-10 w-full h-32" />

          <Skeleton className="mt-10 w-64 h-16" />
        </div>
      </div>
    </section>
  );
}
