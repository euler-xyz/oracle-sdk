import { PublicClient } from "viem";

export function getChainId(publicClient: PublicClient): number {
  const chainId = publicClient.chain?.id;
  if (!chainId) {
    throw new Error("Client chain id is undefined");
  }
  return chainId;
}
