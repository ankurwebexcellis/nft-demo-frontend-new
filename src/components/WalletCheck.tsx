"use client";

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const WalletCheck = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const address = searchParams.get("address");
  const connectWallet = async (e: React.MouseEvent<HTMLElement>) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined") {
      try {
        // @ts-ignore.
        let ethereum = window?.ethereum;
        if (!ethereum)
          return window.open(
            "https://metamask.app.link/dapp/" + process.env.REACT_APP_SITE_URL,
            "_blank"
          );

        // Check if we are authorized to access the user's wallet
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        const params = new URLSearchParams(searchParams);
        params.set("address", accounts[0]);
        router.push(pathname + "?" + params.toString());
      } catch (err) {}
    }
  };

  return (
    <div className="fwc-body">
      <div className="no-record-found-container">
        {/* {!checked && ( */}
        <div className="nfr-box">
          <div className="nrf-text">
            {address && (
              <div
                className="text-content"
                style={{ maxWidth: "40rem", margin: "0 auto" }}
              >
                <h6>
                  You have already connected your wallet. Your connected wallet
                  address is "{address}"
                </h6>
                <p>
                  Your wallet does not seem to have any NFT. You can disconnect
                  your wallet manually from MetaMask and try connecting another
                  wallet.
                </p>
              </div>
            )}
            <Link
              href="#!"
              className="btn btn-primary btn-sm mt-4"
              onClick={(e) => connectWallet(e)}
            >
              Connect Your Wallet
            </Link>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
  //   return children;
};

export default WalletCheck;
