import { Address } from 'viem';

import { EORACLE_CONFIGS_BASE_URL } from './constants';
import { EOracleMetadata } from './types';

type PartialEOracleJsonConfig = {
  feeds: Record<string, Address>;
};

export async function fetchEOracleMetadata(chainId: number): Promise<EOracleMetadata> {
  // Avoid double slashes: EORACLE_CONFIGS_BASE_URL already ends with '/'
  const url = `${EORACLE_CONFIGS_BASE_URL}${chainId}/42420/targetContractAddresses.json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch eOracle metadata from ${url}: ${response.status} ${response.statusText}`);
  }

  const metadata = (await response.json()) as PartialEOracleJsonConfig;
  const feeds = metadata?.feeds ?? {};

  return Object.entries(feeds).map(([symbol, address]) => ({
    symbol,
    feedAddress: address,
    deviationPercentage: 0.5,
    heartbeat: 86400,
  }));
}
