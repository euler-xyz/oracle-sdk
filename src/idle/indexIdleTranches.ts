import { Address, parseAbi, PublicClient } from 'viem';

import { indexByAbi } from '../utils/indexByAbi';

import { IdleTranche } from './types';

const abiFunctions = parseAbi([
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function minter() view returns (address)',
]);

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
};

export async function indexIdleTranches({
  publicClient,
  addresses,
}: Params): Promise<IdleTranche[]> {
  return indexByAbi({ publicClient, addresses, abiFunctions });
}
