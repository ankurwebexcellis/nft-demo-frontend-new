import { Suspense } from "react";
import { fetchNftByContract } from "@/lib/data";

import FilterDropdown from "@/components/FilterDropdown";
import Listing from "@/components/nftList/Listing";
import { CardSkeleton, ListingCardSkeleton } from "@/components/Skeletons";

const Contract = async ({
  searchParams,
}: {
  searchParams?: {
    collection?: string;
  };
}) => {
  const address = searchParams?.collection || "";

  const nftList = (await fetchNftByContract({ address })) || null;

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
          {nftList?.data?.nfts && <Listing data={nftList?.data?.nfts} />}
        </Suspense>
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
};

export default Contract;
