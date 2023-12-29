"use client";

import { NFTCardProps } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Card = ({
  address,
  collection,
  identifier,
  image,
  name,
  token,
}: NFTCardProps) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Link href={`nft/${address}/${identifier}`} className="grid-card-item">
      <div className="grid-card-box position-relative text-white ">
        <div className="gc-header d-flex flex-wrap">
          <div className="gc-header-left">
            <h5>{name}</h5>
            <small>{identifier}</small>
          </div>
        </div>
        <div className="gc-img-box">
          <div className="pc-image">
            <img src={image ?? ""} alt="NFT Image" />
          </div>
        </div>
        <div className="gc-footer">
          <div className="gc-intro-group d-flex flex-wrap">
            <div className="gc-intro-item flex-grow-1 w-auto">
              <h6>{token}</h6>
              <p className="opacity-50">
                <strong>TOKEN </strong>
              </p>
            </div>
            <div className="gc-intro-item flex-grow-1 w-auto">
              <h6 className="ellipsis">{collection}</h6>
              <p>
                <strong>Collection</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
