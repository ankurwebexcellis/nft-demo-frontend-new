"use server";
import axios from "axios";
import { GetNftResponse, NftFetchParams } from "./definitions";

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
