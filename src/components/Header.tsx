"use client";

import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <header id="header" className="text-white">
      <div className="header-main">
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid">
            <div className="nav-inside d-flex align-items-center justify-content-between">
              <Link className="navbar-brand text-white" href="/contract">
                NFT Hub
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
