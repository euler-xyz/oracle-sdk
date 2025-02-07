import { Address } from 'viem';

export type IdleCDO = {
  chainId: number;
  address: Address;
  owner: Address;
  guardian: Address;
  token: Address;
  paused: boolean;
};

export type IdleTranche = {
  chainId: number;
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
  minter: Address;
};
