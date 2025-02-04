import { Address } from "viem";

export type ChainlinkFeed = {
  chainId: number;
  address: Address;
  accessController: Address;
  aggregator: Address;
  decimals: number;
  description: string;
  owner: Address;
  version: bigint;
};

export type ChainlinkFeedMetadata = {
  compareOffchain: string;
  contractAddress: string;
  contractType: string;
  contractVersion: number;
  decimalPlaces: number | null;
  ens: string;
  formatDecimalPlaces: number | null;
  healthPrice: string;
  heartbeat: number;
  history: null;
  multiply: string;
  name: string;
  pair: [string, string];
  path: string;
  proxyAddress: string;
  threshold: number;
  valuePrefix: string;
  assetName: string;
  feedCategory: string;
  feedType: string;
  decimals: number;
  docs: {
    assetClass?: string;
    assetSubClass?: string;
    assetName?: string;
    baseAsset?: string;
    baseAssetClic?: string;
    blockchainName?: string;
    clicProductName?: string;
    deliveryChannelCode?: string;
    feedCategory?: string;
    feedType?: string;
    marketHours?: string;
    productSubType?: string;
    productType?: string;
    productTypeCode?: string;
    quoteAsset?: string;
    quoteAssetClic?: string;
    underlyingAsset?: string;
    underlyingAssetClic?: string;
  };
};

export type ChainlinkMetadata = ChainlinkFeedMetadata[];
