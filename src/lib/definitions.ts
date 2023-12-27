export type SidebarNavProps = {
  name: string;
  href: string;
};

export type NFTCardProps = {
  address: string;
  name: string | null;
  identifier: string;
  image: string | null;
  token: string;
  collection: string;
};

export type NftFetchParams = {
  address: string;
  next?: string;
  identifier?: string;
};

export type NftTraits = {
  trait_type: string;
  value: string;
  trait_count: number;
};

export type NftOwners = {
  address: string;
  quantity?: number;
};

export type Nft = {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string | null;
  description: string | null;
  image_url: string | null;
  metadata_url: string | null;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  traits?: NftTraits[];
  owners?: NftOwners[];
};

export type GetNftResponse = {
  data: {
    nfts: Nft[];
    next: string;
  };
  status: number;
  headers?: object;
  res?: object;
};

export type GetNftInfoResponse = {
  data: {
    nft: Nft;
  };
  status: number;
};
