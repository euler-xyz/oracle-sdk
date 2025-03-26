import { Address } from 'viem';

export type EOracleMetadata = {
  symbol: string;
  feedAddress: Address;
  deviationPercentage: number;
  heartbeat: number;
}[];

export type EOracleFeed = {
  chainId: number;
  address: Address;
  decimals: number;
  description: string;
  feedId: number;
  version: bigint;
};
