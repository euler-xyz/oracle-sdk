import { Address, getAddress, PublicClient } from "viem";

import { PendleMetadata } from "./types";

type PendleApiResponse = {
  chainIdList: number[];
  addressList: Address[];
  ptList: Address[];
  accountingAssetList: Address[];
};

type Params = {
  publicClient: PublicClient;
};

export async function fetchPendleMetadata({ publicClient }: Params): Promise<PendleMetadata> {
  const chainId = publicClient.chain?.id;
  if (!chainId) {
    throw new Error("Client chain id is undefined");
  }

  const res = await fetch(
    `https://api-v2.pendle.finance/bff/v3/markets/all?isActive=true&chainId=${chainId}`,
  );

  const data = (await res.json()) as PendleApiResponse;

  if (!data) {
    throw new Error("No data returned from Pendle API");
  }

  const ptAddresses = data.ptList.map((address) => address.split("-")[1] as Address);

  const accountingAssets = data.accountingAssetList.map(
    (address) => address.split("-")[1] as Address,
  );

  return data.ptList.map((_, i) => ({
    chainId,
    pt: getAddress(ptAddresses[i]),
    market: getAddress(data.addressList[i]),
    asset: getAddress(accountingAssets[i]),
  }));
}
