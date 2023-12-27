import FilterDropdown from "@/components/FilterDropdown";
import Listing from "@/components/nftList/Listing";
import { fetchNftByContract } from "@/lib/data";

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
        <Listing data={nftList} />
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
