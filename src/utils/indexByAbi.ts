import { AbiFunction, Address, PublicClient } from "viem";

import { getChainId } from "../utils/getChainId";

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
  abiFunctions: readonly AbiFunction[];
};

export async function indexByAbi<T>({
  publicClient,
  addresses,
  abiFunctions,
}: Params): Promise<T[]> {
  const chainId = getChainId(publicClient);

  const contractCalls = addresses.flatMap((address) =>
    abiFunctions.map(({ name }) => ({
      address,
      abi: abiFunctions,
      functionName: name,
    })),
  );

  const callResults = await publicClient.multicall({
    contracts: contractCalls,
  });

  const callValues = callResults.map(({ result, error }) => (error ? undefined : result));

  return addresses.map((address, i) => ({
    address,
    chainId,
    ...abiFunctions.map(({ name }, j) => ({
      [name]: callValues[i * abiFunctions.length + j],
    })),
  })) as T[];
}
