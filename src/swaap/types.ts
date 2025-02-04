import { Address, Hex } from "viem";

export type SwaapSafeguardPool = {
  address: Address;
  chainId: number;
  name: string;
  symbol: string;
  decimals: number;
  poolId: Hex;
  owner: Address;
  signer: Address;
  authorizer: Address;
  protocolFeesCollector: Address;
  paused: boolean;
  recoveryMode: boolean;
  allowlistEnabled: boolean;
};
