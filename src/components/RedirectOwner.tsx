"use client";

import { NftOwners } from "@/lib/definitions";
import { truncateAddress } from "@/lib/utils";
import Link from "next/link";

const RedirectOwner = ({ owner }: { owner: NftOwners }) => {
  return (
    <Link href={`/wallet?address=${owner?.address}`}>
      {truncateAddress(owner?.address)}
    </Link>
  );
};

export default RedirectOwner;
