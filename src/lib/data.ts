"use server";
import axios from "axios";
import {
  GetNftInfoResponse,
  GetNftResponse,
  NftFetchParams,
} from "./definitions";

export const fetchNftByContract = async (params: NftFetchParams) => {
  try {
    const { data, status } = await axios.get<GetNftResponse>(
      process.env.API_URL + "nftApis/byContract",
      {
        params,
      }
    );
    return data;
  } catch (err) {
    // return err;
    return null;
  }
};

export const fetchNftInfo = async (params: NftFetchParams) => {
  try {
    const { data, status } = await axios.get<GetNftInfoResponse>(
      process.env.API_URL + "nftApis/nftDetails",
      {
        params,
      }
    );
    console.log("nft1:", data);
    return data?.data?.nft;
  } catch (err) {
    console.log("nft1:", err);
    // return err;
    return null;
  }
};
