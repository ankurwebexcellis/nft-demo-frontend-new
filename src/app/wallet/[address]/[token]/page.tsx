import NftDetails from "@/components/NftDetails";
import { fetchNftInfo } from "@/lib/data";
import { truncateAddress } from "@/lib/utils";
import Link from "next/link";

const NftPage = async ({
  params,
}: {
  params: { address: string; identifier: string };
}) => {
  const { address, identifier } = params;
  const nftInfo = (await fetchNftInfo({ address, identifier })) || null;
  return (
    <div className="fwc-wrapper">
      {nftInfo && <NftDetails nftInfo={nftInfo} />}
    </div>
  );
};

export default NftPage;
