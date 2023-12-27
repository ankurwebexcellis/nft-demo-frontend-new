import Card from "./Card";

const Listing = () => {
  return (
    <ul className="grid-card-list d-flex flex-wrap">
      <Card
        address="abc990uASDLKJjklanm"
        collection="collection"
        identifier="123"
        image="url"
        name="Testing"
        token="000"
        key={123}
      />
      {/* {nftList?.map((nft) => (
        <Card
          key={nft.identifier}
          name={nft?.name}
          identifier={nft?.identifier}
          image={nft?.image_url}
          token={nft?.token_standard}
          collection={nft?.collection}
          address={nft?.contract}
        />
      ))} */}
    </ul>
  );
};

export default Listing;
