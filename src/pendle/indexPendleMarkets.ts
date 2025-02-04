import { Address, parseAbi, PublicClient } from "viem";

import { PendleMarket } from "./types";
import { indexByAbi } from "../utils/indexByAbi";

const abiFunctions = parseAbi([
  "function decimals() view returns (uint8)",
  "function expiry() view returns (uint256)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function factory() view returns (address)",
  "function totalSupply() view returns (uint256)",
  "function totalActiveSupply() view returns (uint256)",
]);

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
};

export async function indexPendleMarkets({
  publicClient,
  addresses,
}: Params): Promise<PendleMarket[]> {
  return indexByAbi({ publicClient, addresses, abiFunctions });
}
