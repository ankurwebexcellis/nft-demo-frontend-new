"use client";

import { Suspense, useEffect, useState } from "react";
import Card from "./Card";
import { Nft } from "@/lib/definitions";
import { ListingCardSkeleton } from "../Skeletons";
import { fetchNftByWallet } from "@/lib/data";
import LoadMore from "./LoadMore";

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
  const [nftList, setNftList] = useState<Nft[]>(data?.nfts ?? []);
  const [next, setNext] = useState<string>(data?.next ?? "");

  useEffect(() => {
    if (address) {
      setNftList(data.nfts);
      setNext(data.next);
    }
  }, [address]);

  const getNftList = async () => {
    if (!address) return;
    const newList = await fetchNftByWallet({ address, next });
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
        {address && nftList?.length > 0 && next && (
          <LoadMore getNftList={getNftList} />
        )}
      </Suspense>
    </>
  );
};

export default Listing;
