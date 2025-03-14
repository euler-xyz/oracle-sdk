import { Address, parseAbi, PublicClient } from 'viem';

import { indexByAbi } from '../utils/indexByAbi';

import { MevLinearDiscountFeed } from './types';

const abiFunctions = parseAbi([
  'function PT() view returns (address)',
  'function baseDiscountPerYear() view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function description() view returns (string)',
  'function maturity() view returns (uint256)',
]);

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
};

export async function indexMevLinearDiscountFeeds({
  publicClient,
  addresses,
}: Params): Promise<MevLinearDiscountFeed[]> {
  return indexByAbi<MevLinearDiscountFeed>({
    publicClient,
    addresses,
    abiFunctions,
  });
}
