"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

const FilterDropdown = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const selectValue = searchParams.get("collection") || "";

  const handleSelect = useCallback((collection: string) => {
    const params = new URLSearchParams(searchParams);

    if (collection) params.set("collection", collection);
    else params.set("collection", "0x5Af0D9827E0c53E4799BB226655A1de152A425a5");
    //  return replace(`${pathname}?${params.toString()}`);
    router.push(pathname + "?" + params.toString());
  }, []);

  useEffect(() => {
    if (!searchParams.get("collection"))
      handleSelect("0x5Af0D9827E0c53E4799BB226655A1de152A425a5");
  }, []);

  return (
    <div className="fml-box">
      <label className="form-label">NFT Collection </label>
      <select
        className="form-select"
        onChange={(e) => {
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
