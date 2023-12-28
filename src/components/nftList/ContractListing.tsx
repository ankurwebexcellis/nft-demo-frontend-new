"use client";

import Card from "./Card";
import { Nft } from "@/lib/definitions";
import { Suspense, useEffect, useState } from "react";
import { fetchNftByContract } from "@/lib/data";
import LoadMore from "./LoadMore";
import { ListingCardSkeleton } from "../Skeletons";

const Listing = ({
  data,
  address,
}: {
  data: {
    nfts: Nft[];
    next: string;
  };
  address: string;
}) => {
  const [nftList, setNftList] = useState<Nft[]>(data?.nfts ?? []);
  const [next, setNext] = useState<string>(data?.next ?? "");

  useEffect(() => {
    if (address) {
      setNftList(data.nfts);
      setNext(data.next);
    }
  }, [address]);

  const getNftList = async () => {
    const newList = await fetchNftByContract({ address, next });
    if (newList?.nfts) setNftList([...nftList, ...newList?.nfts]);
    if (newList?.next) setNext(newList?.next);
  };

  return (
    <>
      <Suspense fallback={<ListingCardSkeleton />}>
        <ul className="grid-card-list d-flex flex-wrap">
          {nftList?.map((nft) => (
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
        <LoadMore getNftList={getNftList} />
      </Suspense>
    </>
  );
};

export default Listing;
