import { Address } from "viem";

export type ChronicleFeed = {
  chainId: number;
  address: Address;
  authed: Address[];
  bar: number;
  challengeReward: bigint;
  decimals: number;
  feedRegistrationMessage: string;
  feeds: Address[];
  maxChallengeReward: bigint;
  opChallengePeriod: number;
  opFeedId: number;
  tolled: Address[];
  wat: string;
};
