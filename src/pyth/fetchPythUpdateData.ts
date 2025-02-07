import { Hex } from 'viem';

import { DEFAULT_HERMES_URL } from './constants';

export async function fetchPythUpdateData(
  feedIds: string[],
  hermesUrl = DEFAULT_HERMES_URL,
): Promise<Hex> {
  try {
    const feedIdsWithoutPrefix = feedIds.map((feedId) => feedId.substring(2));
    const idsParams = feedIdsWithoutPrefix.map((feedId) => `ids[]=${feedId}`).join('&');
    const url = `${hermesUrl}/v2/updates/price/latest?${idsParams}&encoding=hex&parsed=true`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (!data.binary?.data) {
      throw new Error('Invalid response format: missing binary data');
    }

    return `0x${data.binary.data}` as Hex;
  } catch (error) {
    throw new Error(
      `Failed to fetch Pyth update data for feeds [${feedIds.join(', ')}]. Error: ${error}`,
    );
  }
}
