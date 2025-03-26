import { Address } from 'viem';

import { EORACLE_CONFIGS_BASE_URL } from './constants';
import { EOracleMetadata } from './types';

type PartialEOracleJsonConfig = {
  feeds: Record<string, Address>;
};

export async function fetchEOracleMetadata(chainId: number): Promise<EOracleMetadata> {
  const url = `${EORACLE_CONFIGS_BASE_URL}/${chainId}/42420/targetContractAddresses.json`;

  const metadata = (await fetch(url).then((response) =>
    response.json(),
  )) as PartialEOracleJsonConfig;

  return Object.entries(metadata.feeds).map(([symbol, address]) => ({
    symbol,
    feedAddress: address,
    deviationPercentage: 0.5,
    heartbeat: 86400,
  }));
}
