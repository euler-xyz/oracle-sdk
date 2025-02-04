import { AbiFunction, Address, PublicClient } from "viem";

import { getChainId } from "../utils/getChainId";

type Params<T> = {
  publicClient: PublicClient;
  addresses: Address[];
  abiFunctions: readonly AbiFunction[];
  transformers?: Partial<Record<string, (value: unknown) => Partial<T>>>;
};

export async function indexByAbi<T>({
  publicClient,
  addresses,
  abiFunctions,
  transformers = {},
}: Params<T>): Promise<T[]> {
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
    ...Object.fromEntries(
      abiFunctions.flatMap(({ name }, j) => {
        const value = callValues[i * abiFunctions.length + j];
        const transformer = transformers[name];
        if (transformer && value !== undefined) {
          return Object.entries(transformer(value));
        }
        return [[name, value]];
      }),
    ),
  })) as T[];
}
