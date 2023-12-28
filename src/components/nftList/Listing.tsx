"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import { GetNftResponse, Nft } from "@/lib/definitions";
import { useInView } from "react-intersection-observer";
import { fetchNftByContract } from "@/lib/data";
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

  const getNftList = async () => {
    const newList = await fetchNftByContract({ address, next });
    if (newList?.nfts) setNftList([...nftList, ...newList?.nfts]);
    if (newList?.next) setNext(newList?.next);
  };

  return (
    <>
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
    </>
  );
};

export default Listing;
