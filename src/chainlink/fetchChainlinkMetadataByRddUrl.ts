import { ChainlinkMetadata } from './types';

export async function fetchChainlinkMetadataByRddUrl(rddUrl: string): Promise<ChainlinkMetadata> {
  try {
    const response = await fetch(rddUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch Chainlink metadata from ${rddUrl}. Error: ${error}`);
  }
}
