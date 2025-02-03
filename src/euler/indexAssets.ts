import { Address, erc20Abi, PublicClient } from "viem";

import { Asset } from "./types";
import {
  DESIGNATOR_BTC,
  DESIGNATOR_EUR,
  DESIGNATOR_TRY,
  DESIGNATOR_USD,
  SPECIAL_MKR,
} from "../verify/checks/utils/constants";

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
};

export async function indexAssets({ publicClient, addresses }: Params): Promise<Asset[]> {
  const chainId = publicClient.chain?.id;
  if (!chainId) {
    throw new Error("Client chain id is undefined");
  }
  const results = await publicClient.multicall({
    contracts: addresses.flatMap((address) =>
      (["name", "symbol", "decimals"] as const).map((functionName) => ({
        address,
        abi: erc20Abi,
        functionName,
      })),
    ),
  });

  const assets: Asset[] = [];
  for (let i = 0; i < results.length; i += 3) {
    const address = addresses[i / 3];

    if (address === SPECIAL_MKR) {
      assets.push({
        address: address as Address,
        chainId,
        name: "Maker",
        symbol: "MKR",
        decimals: 18,
      });
      continue;
    } else if (address === DESIGNATOR_USD) {
      assets.push({
        address,
        chainId,
        name: "U.S. Dollar",
        symbol: "USD",
        decimals: 18,
      });
      continue;
    } else if (address === DESIGNATOR_EUR) {
      assets.push({
        address,
        chainId,
        name: "Euro",
        symbol: "EUR",
        decimals: 18,
      });
      continue;
    } else if (address === DESIGNATOR_TRY) {
      assets.push({
        address,
        chainId,
        name: "Turkish Lira",
        symbol: "TRY",
        decimals: 18,
      });
      continue;
    } else if (address === DESIGNATOR_BTC) {
      assets.push({
        address,
        chainId,
        name: "Bitcoin",
        symbol: "BTC",
        decimals: 18,
      });
      continue;
    }

    const name = results[i].result as string;
    const symbol = results[i + 1].result as string;
    const decimals = results[i + 2].result as number;

    assets.push({
      address,
      chainId,
      name,
      symbol,
      decimals,
    });
  }
  return assets;
}
