import { Address, erc20Abi, PublicClient } from "viem";

import { Asset } from "./types";
import { getChainId } from "../utils/getChainId";

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
  fallbacks?: Asset[];
};

export async function indexAssets({
  publicClient,
  addresses,
  fallbacks,
}: Params): Promise<Asset[]> {
  const chainId = getChainId(publicClient);
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

    const fallback = fallbacks?.find((fallback) => fallback.address === address);

    if (fallback) {
      assets.push(fallback);
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
