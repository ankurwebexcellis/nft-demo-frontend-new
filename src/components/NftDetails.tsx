import { Nft } from "@/lib/definitions";
import Image from "next/image";
import RedirectOwner from "./RedirectOwner";

const NftDetails = ({ nftInfo }: { nftInfo: Nft }) => {
  return (
    <div className="grid-card-details-row d-flex flex-wrap">
      <div className="gcdr-img-box">
        <div className="gcdr-img-outer text-white">
          <div className="gcdr-image">
            {nftInfo?.image_url && (
              <Image
                src={nftInfo?.image_url}
                alt="NFT Image"
                width={200}
                height={300}
                loading="eager"
                priority
              />
            )}
          </div>
          <div className="gcdr-group d-flex flex-wrap">
            <div className="gcdr-item flex-grow-1 w-auto">
              <h6>{nftInfo?.token_standard}</h6>
              <p className="opacity-50 ">
                <strong>Token</strong>
              </p>
            </div>
            <div className="gcdr-item flex-grow-1 w-auto">
              <h6 className="ellipsis">{nftInfo?.collection}</h6>
              <p>
                <strong>Collection</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="gcdr-text-box">
        <div className="gcdr-heading">
          <h2>{nftInfo?.name}</h2>
        </div>
        <p className="grey-text">#{nftInfo?.identifier}</p>
        <p>{nftInfo?.description}</p>
        {nftInfo?.traits && (
          <div className="gcdr-widget-wrapper">
            <div className="gcdr-widget-box">
              <h4>Traits</h4>
              <ul className="gw-list d-flex flex-wrap">
                {nftInfo?.traits?.map((trait, index) => (
                  <li key={trait.trait_type + trait.value + index}>
                    <div className="gw-box">
                      <em>{trait?.trait_type}</em>
                      <h6>{trait?.value}</h6>
                      <p>{trait?.trait_count} have this trait</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {nftInfo?.owners && (
          <div className="gcdr-widget-wrapper">
            <div className="gcdr-widget-box">
              <h4>Owners</h4>
              <div className="gcdr-details-box">
                <ul className="gcdr-text-list">
                  {nftInfo?.owners?.map((owner, index) => (
                    <li key={owner?.address}>
                      <div className="number-list-box">
                        <div className="number-list-numerical">{index + 1}</div>
                        <div className="number-list-content">
                          <RedirectOwner owner={owner} />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NftDetails;
