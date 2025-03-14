import { Address } from 'viem';

export type MevLinearDiscountFeed = {
  chainId: number;
  address: Address;
  PT: Address;
  baseDiscountPerYear: bigint;
  decimals: number;
  description: string;
  maturity: bigint;
};
