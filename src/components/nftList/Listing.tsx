"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import { GetNftResponse, Nft } from "@/lib/definitions";
import { CardSkeleton } from "../Skeletons";

const Listing = ({ data }: { data: Nft[] }) => {
  const [nftList, setNftList] = useState<Nft[]>([]);

  useEffect(() => {
    if (data) setNftList(data);
  }, [data]);

  return (
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
  );
};

export default Listing;
