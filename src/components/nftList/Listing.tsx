import Card from "./Card";
import { GetNftResponse } from "@/lib/definitions";

const Listing = ({ data }: { data: GetNftResponse | null }) => {
  return (
    <ul className="grid-card-list d-flex flex-wrap">
      {data?.data?.nfts?.map((nft) => (
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
