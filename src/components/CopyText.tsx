"use client";

import { NftOwners } from "@/lib/definitions";
import { truncateAddress } from "@/lib/utils";
import Link from "next/link";
import toast from "react-hot-toast";

const CopyText = ({ owner }: { owner: NftOwners }) => {
  return (
    <Link
      href="#!"
      onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(owner?.address);
        toast.success("Copied");
      }}
    >
      {truncateAddress(owner?.address)}
    </Link>
  );
};

export default CopyText;
