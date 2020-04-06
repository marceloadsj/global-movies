import React from "react";

import Skeleton from "components/Skeleton";

export default function MoviesListSkeleton() {
  return (
    <div className="mt-5 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 w-full z-10">
      <Skeleton className="h-64" />

      <Skeleton className="h-64" />

      <Skeleton className="h-64" />

      <Skeleton className="h-64" />

      <Skeleton className="h-64" />
    </div>
  );
}
