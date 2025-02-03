import { Address, parseAbi, PublicClient } from "viem";

type Params = {
  publicClient: PublicClient;
  factoryAddress: Address;
};

const abi = parseAbi([
  "function getDeploymentsListLength() view returns (uint256)",
  "function getDeploymentsListSlice(uint256,uint256) view returns (address[])",
]);

export async function fetchDeployedRouters({
  publicClient,
  factoryAddress,
}: Params): Promise<Address[]> {
  const length = await publicClient.readContract({
    address: factoryAddress,
    abi,
    functionName: "getDeploymentsListLength",
  });

  const routerAddresses = await publicClient.readContract({
    address: factoryAddress,
    abi,
    functionName: "getDeploymentsListSlice",
    args: [0n, length],
  });

  return routerAddresses as Address[];
}
