import { Address } from "viem";

export type PendlePool = {
  chainId: number;
  pt: Address;
  market: Address;
  asset: Address;
};

export type PendleMetadata = PendlePool[];
