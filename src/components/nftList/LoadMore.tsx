"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { LoadMoreListingCardSkeleton } from "../Skeletons";

const LoadMore = ({ getNftList }: { getNftList: () => Promise<void> }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      getNftList();
    }
  }, [inView]);

  return (
    <ul className="grid-card-list d-flex flex-wrap" ref={ref}>
      <LoadMoreListingCardSkeleton />
    </ul>
  );
};

export default LoadMore;
