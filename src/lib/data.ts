import axios from "axios";
import {
  GetNftInfoResponse,
  GetNftResponse,
  NftFetchParams,
} from "./definitions";

export const fetchNftByContract = async (params: NftFetchParams) => {
  try {
    const { data, status } = await axios.get<GetNftResponse>(
      process.env.NEXT_PUBLIC_API_URL + "nftApis/byContract",
      {
        params: { ...params, limit: 20 },
      }
    );
    return data?.data;
  } catch (err) {
    // return err;
    return null;
  }
};

export const fetchNftByWallet = async (params: NftFetchParams) => {
  try {
    const { data, status } = await axios.get<GetNftResponse>(
      process.env.API_URL + "nftApis/byWallet",
      {
        params,
      }
    );
    return data?.data;
  } catch (err) {
    // return err;
    return null;
    // TODO: Error Handling for all api calls
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
    return data?.data?.nft;
  } catch (err) {
    // return err;
    return null;
  }
};
