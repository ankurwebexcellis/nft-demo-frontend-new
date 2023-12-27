"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const FilterDropdown = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectValue = searchParams.get("address") || "";

  const handleSelect = useCallback((address: string) => {
    const params = new URLSearchParams(searchParams);

    if (address) params.set("address", address);
    else params.set("address", "0x5Af0D9827E0c53E4799BB226655A1de152A425a5");

    replace(`${pathname}?${params.toString()}`);
  }, []);

  return (
    <div className="fml-box">
      <label className="form-label">NFT Collection </label>
      <select
        className="form-select"
        onChange={(e) => {
          //   document.removeEventListener(
          //     "scroll",
          //     trackScrolling,
          //     true
          //   );
          handleSelect(e.target.value);
        }}
        value={selectValue}
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
  );
};

export default FilterDropdown;
