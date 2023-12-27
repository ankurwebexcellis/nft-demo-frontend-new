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
    console.log("Response:", data, status);
    return data;
  } catch (err) {
    console.log("Error:", err);
    // return err;
  }
};
