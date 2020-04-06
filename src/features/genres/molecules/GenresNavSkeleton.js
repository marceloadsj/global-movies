import React from "react";

import Skeleton from "components/Skeleton";

export default function GenresNavSkeleton() {
  return (
    <>
      <Skeleton className="w-1/2 h-8" />

      <Skeleton className="mt-5 ml-3 w-2/3 h-5" />

      <Skeleton className="mt-5 ml-3 w-2/3 h-5" />

      <Skeleton className="mt-5 ml-3 w-2/3 h-5" />

      <Skeleton className="mt-5 ml-3 w-2/3 h-5" />

      <Skeleton className="mt-5 ml-3 w-2/3 h-5" />
    </>
  );
}
