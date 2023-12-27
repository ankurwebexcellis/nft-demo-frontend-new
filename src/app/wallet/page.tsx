import FilterDropdown from "@/components/FilterDropdown";
import Listing from "@/components/nftList/Listing";

export default function Contract({
  searchParams,
}: {
  searchParams?: {
    collection?: string;
  };
}) {
  const collection = searchParams?.collection || "";
  return (
    <div className="main-content-wrapper position-relative">
      <div className="mcw-header d-flex align-items-center">
        <h1>NFTs by Wallet</h1>
      </div>
      <div className="fwc-wrapper">
        <Listing collection={collection} />
        {/* <CardListing loading={loading} nftList={nftList} />
        {loadingMore && (
          <ul className="grid-card-list d-flex flex-wrap">
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </ul>
        )} */}
      </div>
    </div>
  );
}
