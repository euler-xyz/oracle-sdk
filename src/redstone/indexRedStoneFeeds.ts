import { Address, parseAbi, PublicClient } from "viem";

import { RedStoneFeed } from "./types";
import { indexByAbi } from "../utils/indexByAbi";

const abiFunctions = parseAbi([
  "function accessController() view returns (address)",
  "function aggregator() view returns (address)",
  "function decimals() view returns (uint8)",
  "function description() view returns (string)",
  "function version() view returns (uint256)",
  "function dataFeedId() view returns (bytes32)",
  "function priceFeedAdapter() view returns (address)",
]);

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
};

export async function indexRedStoneFeeds({
  publicClient,
  addresses,
}: Params): Promise<RedStoneFeed[]> {
  return indexByAbi({ publicClient, addresses, abiFunctions });
}
