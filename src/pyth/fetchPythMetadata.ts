import { DEFAULT_HERMES_URL } from "./constants";
import { PythMetadata } from "./types";

export async function fetchPythMetadata(hermesUrl = DEFAULT_HERMES_URL): Promise<PythMetadata> {
  const url = `${hermesUrl}/v2/price_feeds`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: PythMetadata = await response.json();
    return data.map((feed) => ({ ...feed, id: `0x${feed.id}` }));
  } catch (error) {
    throw new Error(`Failed to fetch Pyth metadata. Error: ${error}`);
  }
}
