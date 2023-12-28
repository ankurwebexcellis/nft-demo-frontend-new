import FilterDropdown from "@/components/FilterDropdown";
import { ListingCardSkeleton } from "@/components/Skeletons";
import WalletCheck from "@/components/WalletCheck";
import Listing from "@/components/nftList/WalletListing";
import { fetchNftByWallet } from "@/lib/data";
import { Suspense } from "react";

const Wallet = async ({
  searchParams,
}: {
  searchParams?: {
    address?: string;
  };
}) => {
  const address = searchParams?.address || "";
  const nftList = (address && (await fetchNftByWallet({ address }))) || null;

  return (
    <div className="main-content-wrapper position-relative">
      <div className="mcw-header d-flex align-items-center">
        <h1>NFTs by Wallet</h1>
      </div>
      <div className="fwc-wrapper">
        {!address ? (
          <WalletCheck />
        ) : (
          <Suspense fallback={<ListingCardSkeleton />}>
            {nftList && <Listing data={nftList} address={address} />}
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Wallet;
