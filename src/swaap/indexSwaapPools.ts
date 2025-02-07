import { Address, Hex, parseAbi, PublicClient } from 'viem';

import { indexByAbi } from '../utils/indexByAbi';

import { SwaapSafeguardPool } from './types';

const abiFunctions = parseAbi([
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function getPoolId() view returns (bytes32)',
  'function getOwner() view returns (address)',
  'function signer() view returns (address)',
  'function getAuthorizer() view returns (address)',
  'function getProtocolFeesCollector() view returns (address)',
  'function getPausedState() view returns (bool,uint256,uint256)',
  'function isRecoveryMode() view returns (bool)',
  'function isAllowlistEnabled() view returns (bool)',
]);

type Params = {
  publicClient: PublicClient;
  addresses: Address[];
};

export async function indexSwaapPools({
  publicClient,
  addresses,
}: Params): Promise<SwaapSafeguardPool[]> {
  return indexByAbi<SwaapSafeguardPool>({
    publicClient,
    addresses,
    abiFunctions,
    transformers: {
      getPausedState: (value) => {
        const [paused] = value as [boolean, bigint, bigint];
        return { paused };
      },
      getAuthorizer: (value) => ({ authorizer: value as Address }),
      getOwner: (value) => ({ owner: value as Address }),
      getPoolId: (value) => ({ poolId: value as Hex }),
      getProtocolFeesCollector: (value) => ({ protocolFeesCollector: value as Address }),
      isRecoveryMode: (value) => ({ recoveryMode: value as boolean }),
      isAllowlistEnabled: (value) => ({ allowlistEnabled: value as boolean }),
    },
  });
}
