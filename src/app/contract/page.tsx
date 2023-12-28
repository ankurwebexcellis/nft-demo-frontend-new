import { Suspense } from "react";
import { fetchNftByContract } from "@/lib/data";

import FilterDropdown from "@/components/FilterDropdown";
import Listing from "@/components/nftList/ContractListing";
import { ListingCardSkeleton } from "@/components/Skeletons";

const Contract = async ({
  searchParams,
}: {
  searchParams?: {
    collection?: string;
  };
}) => {
  const address = searchParams?.collection || "";

  const nftList = (address && (await fetchNftByContract({ address }))) || null;
  return (
    <div className="main-content-wrapper position-relative">
      <div className="mcw-header d-flex align-items-center">
        <h1>NFTs by Contract</h1>
      </div>
      <div className="fwc-wrapper">
        <div className="fwc-head ">
          <div className="fwc-inner">
            <ul className="filter-mode-list d-flex flex-wrap align-items-center">
              <li className="flex-fill">
                <FilterDropdown />
              </li>
            </ul>
          </div>
        </div>
        <Suspense fallback={<ListingCardSkeleton />}>
          {nftList && <Listing data={nftList} address={address} />}
        </Suspense>
      </div>
    </div>
  );
};

export default Contract;
