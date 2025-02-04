import { Address, parseAbi, PublicClient } from "viem";

import { ChronicleFeed } from "./types";
import { indexByAbi } from "../utils/indexByAbi";

const abiFunctions = parseAbi([
  "function authed() view returns (address[])",
  "function bar() view returns (uint8)",
  "function challengeReward() view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function feedRegistrationMessage() view returns (bytes32)",
  "function feeds() view returns (address[])",
  "function maxChallengeReward() view returns (uint256)",
  "function opChallengePeriod() view returns (uint16)",
  "function opFeedId() view returns (uint8)",
  "function tolled() view returns (address[])",
  "function wat() view returns (bytes32)",
]);

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
};

export async function indexChronicleFeeds({
  publicClient,
  addresses,
}: Params): Promise<ChronicleFeed[]> {
  return indexByAbi({ publicClient, addresses, abiFunctions });
}
