import { Address } from 'viem';

export type PendleMarket = {
  chainId: number;
  address: Address;
  decimals: number;
  expiry: bigint;
  name: string;
  symbol: string;
  factory: Address;
  totalSupply: bigint;
  totalActiveSupply: bigint;
};

export type PendleMetadata = {
  chainId: number;
  pt: Address;
  market: Address;
  underlyingAsset: Address;
  expiry: number;
  symbol: string;
}[];
