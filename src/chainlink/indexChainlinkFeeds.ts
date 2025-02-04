import { Address, parseAbi, PublicClient } from "viem";

import { ChainlinkFeed } from "./types";
import { indexByAbi } from "../utils/indexByAbi";

const abiFunctions = parseAbi([
  "function accessController() view returns (address)",
  "function aggregator() view returns (address)",
  "function decimals() view returns (uint8)",
  "function description() view returns (string)",
  "function owner() view returns (address)",
  "function version() view returns (uint256)",
]);

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
};

export async function indexChainlinkFeeds({
  publicClient,
  addresses,
}: Params): Promise<ChainlinkFeed[]> {
  return indexByAbi({ publicClient, addresses, abiFunctions });
}
