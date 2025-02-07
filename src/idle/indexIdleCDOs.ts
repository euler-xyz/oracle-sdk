import { Address, parseAbi, PublicClient } from 'viem';

import { indexByAbi } from '../utils/indexByAbi';

import { IdleCDO } from './types';

const abiFunctions = parseAbi([
  'function owner() view returns (address)',
  'function guardian() view returns (address)',
  'function token() view returns (address)',
  'function paused() view returns (bool)',
]);

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
};

export async function indexIdleCDOs({ publicClient, addresses }: Params): Promise<IdleCDO[]> {
  return indexByAbi<IdleCDO>({ publicClient, addresses, abiFunctions });
}
