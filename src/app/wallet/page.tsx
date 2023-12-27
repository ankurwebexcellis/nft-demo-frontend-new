import FilterDropdown from "@/components/FilterDropdown";
import { ListingCardSkeleton } from "@/components/Skeletons";
import Listing from "@/components/nftList/Listing";
import { fetchNftByWallet } from "@/lib/data";
import { Suspense } from "react";

const Wallet = async ({
  searchParams,
}: {
  searchParams?: {
    collection?: string;
  };
}) => {
  const address = searchParams?.collection || "";

  const nftList = (await fetchNftByWallet({ address })) || null;

  return (
    <div className="main-content-wrapper position-relative">
      <div className="mcw-header d-flex align-items-center">
        <h1>NFTs by Wallet</h1>
      </div>
      <div className="fwc-wrapper">
        <Suspense fallback={<ListingCardSkeleton />}>
          {nftList && <Listing data={nftList} address={address} />}
        </Suspense>
      </div>
    </div>
  );
};

export default Wallet;
