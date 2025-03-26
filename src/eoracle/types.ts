import { Address } from 'viem';

export type EOracleMetadata = {
  symbol: string;
  feedAddress: Address;
  deviationPercentage: number;
  heartbeat: number;
}[];
