import { Address, parseAbi, PublicClient } from 'viem';

import { indexByAbi } from '../utils/indexByAbi';

import { EOracleFeed } from './types';

const abiFunctions = parseAbi([
  'function decimals() view returns (uint8)',
  'function description() view returns (string)',
  'function getFeedId() view returns (uint16)',
  'function version() view returns (uint256)',
]);

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
};

export async function indexEOracleFeeds({
  publicClient,
  addresses,
}: Params): Promise<EOracleFeed[]> {
  return indexByAbi<EOracleFeed>({
    publicClient,
    addresses,
    abiFunctions,
    transformers: {
      getFeedId: (value) => ({
        feedId: Number(value),
      }),
    },
  });
}
