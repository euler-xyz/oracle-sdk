import { chainIdToRddSlug, RDD_URL } from './chainIdToRddSlug';
import { fetchChainlinkMetadataByRddUrl } from './fetchChainlinkMetadataByRddUrl';
import { ChainlinkMetadata } from './types';

export async function fetchChainlinkMetadata(chainId: number): Promise<ChainlinkMetadata> {
  const rddSlug = chainIdToRddSlug[chainId];
  if (!rddSlug) {
    throw new Error(`Chainlink metadata not found for chainId ${chainId}`);
  }
  const rddUrl = `${RDD_URL}/${rddSlug}.json`;
  return fetchChainlinkMetadataByRddUrl(rddUrl);
}
