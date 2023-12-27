import Listing from "@/components/nftList/Listing";

const Contract = () => {
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
                <div className="fml-box">
                  <label className="form-label">NFT Collection </label>
                  <select
                    className="form-select"
                    // onChange={(e) => {
                    //   document.removeEventListener(
                    //     "scroll",
                    //     trackScrolling,
                    //     true
                    //   );
                    //   setAddress(e.target.value);
                    // }}
                    // value={address}
                  >
                    <option value="0x5Af0D9827E0c53E4799BB226655A1de152A425a5">
                      Token Milady (MIL)
                    </option>
                    <option value="0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7">
                      Token Loot (LOOT)
                    </option>
                    <option value="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB">
                      Token CRYPTOPUNKS
                    </option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Listing />
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
