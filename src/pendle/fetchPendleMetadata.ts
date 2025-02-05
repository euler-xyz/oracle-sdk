import { Address, getAddress, PublicClient } from "viem";

import { PendleMetadata } from "./types";
import { getChainId } from "../utils/getChainId";

type PendleApiResponse = {
  chainIdList: number[];
  addressList: Address[];
  ptList: Address[];
  accountingAssetList: Address[];
  underlyingAssetList: Address[];
  expiryList: number[];
  symbolList: string[];
};

type Params = {
  publicClient: PublicClient;
};

function splitAddress(address: string): Address {
  return address.split("-")[1] as Address;
}

export async function fetchPendleMetadata({ publicClient }: Params): Promise<PendleMetadata> {
  const chainId = getChainId(publicClient);

  const res = await fetch(`https://api-v2.pendle.finance/bff/v3/markets/all?chainId=${chainId}`);

  const data = (await res.json()) as PendleApiResponse;

  if (!data) {
    throw new Error("No data returned from Pendle API");
  }

  const ptAddresses = data.ptList.map((address) => splitAddress(address));
  const accountingAssets = data.accountingAssetList.map((address) => splitAddress(address));
  const underlyingAssets = data.underlyingAssetList.map((address) => splitAddress(address));

  return data.ptList.map((_, i) => ({
    chainId,
    pt: getAddress(ptAddresses[i]),
    market: getAddress(data.addressList[i]),
    accountingAsset: getAddress(accountingAssets[i]),
    underlyingAsset: getAddress(underlyingAssets[i]),
    expiry: data.expiryList[i],
    symbol: data.symbolList[i],
  }));
}
