import Card from "./Card";
import { Nft } from "@/lib/definitions";
import { Suspense, useEffect, useState } from "react";
import LoadMore from "./LoadMore";
import { ListingCardSkeleton } from "../Skeletons";

const Listing = async ({
  data,
  address,
}: {
  data: {
    nfts: Nft[];
    next: string;
  };
  address: string;
}) => {
  return (
    <>
      <Suspense fallback={<ListingCardSkeleton />}>
        <ul className="grid-card-list d-flex flex-wrap">
          {data?.nfts?.map((nft) => (
            <Card
              address={nft.contract}
              collection={nft.collection}
              identifier={nft.identifier}
              image={nft.image_url}
              name={nft.name}
              token={nft.token_standard}
              key={nft.collection + nft.identifier}
            />
          ))}
        </ul>
      </Suspense>
    </>
  );
};

export default Listing;
