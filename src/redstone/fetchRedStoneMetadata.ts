import { isAddress } from 'viem';

import { chainIdToRedStoneRelayerManifestSlugs } from './chainIdToRedStoneRelayerManifestSlugs';
import { REDSTONE_MANIFESTS_BASE_URL } from './constants';
import {
  RedStoneMetadata,
  RedStoneRelayerManifest,
  RedStoneRelayerMultiFeedManifest,
} from './types';

export async function fetchRedStoneMetadata(chainId: number): Promise<RedStoneMetadata> {
  if (!chainIdToRedStoneRelayerManifestSlugs[chainId]) {
    throw new Error(`No RedStone metadata slugs found for chainId ${chainId}`);
  }

  const { multi, standalone } = chainIdToRedStoneRelayerManifestSlugs[chainId];

  // Fetch multi feed metadata
  let multiResponse: RedStoneRelayerMultiFeedManifest | undefined;

  if (multi) {
    const multiUrl = `${REDSTONE_MANIFESTS_BASE_URL}/relayer-manifests-multi-feed/${multi}.json`;
    const response = await fetch(multiUrl);
    multiResponse = await response.json();
  }

  // Fetch standalone feed metadata
  const standaloneUrls = standalone.map(
    (slug) => `${REDSTONE_MANIFESTS_BASE_URL}/relayer-manifests/${slug}.json`,
  );

  const standaloneResponses: RedStoneRelayerManifest[] = await Promise.all(
    standaloneUrls.map((url) =>
      fetch(url)
        .then((response) => response.json())
        .catch(() => {
          console.error(`Error fetching RedStone metadata for ${url}.`);
          return [];
        }),
    ),
  ).then((responses) => responses.flat());

  const priceFeeds: RedStoneMetadata = [];

  // Process multi feed metadata
  if (multiResponse) {
    const multiFeeds = Object.entries(multiResponse.priceFeeds).map(([symbol, feed]) => {
      const deviationPercentage =
        feed.updateTriggersOverrides?.deviationPercentage ??
        multiResponse.updateTriggers.deviationPercentage;

      const timeSinceLastUpdate =
        feed.updateTriggersOverrides?.timeSinceLastUpdateInMilliseconds ??
        multiResponse.updateTriggers.timeSinceLastUpdateInMilliseconds;

      return {
        symbol,
        priceFeedAddress: feed.priceFeedAddress,
        deviationPercentage,
        heartbeat: timeSinceLastUpdate ? Math.floor(timeSinceLastUpdate / 1000) : undefined,
      };
    });
    priceFeeds.push(...multiFeeds);
  }

  // Process standalone feed metadata
  standaloneResponses.forEach((metadata) => {
    const standaloneFeeds = Object.entries(metadata.priceFeeds)
      .filter(([, address]) => isAddress(address))
      .map(([symbol, address]) => {
        const { deviationPercentage, timeSinceLastUpdateInMilliseconds } = metadata.updateTriggers;

        return {
          symbol,
          priceFeedAddress: address,
          deviationPercentage,
          heartbeat: timeSinceLastUpdateInMilliseconds
            ? Math.floor(timeSinceLastUpdateInMilliseconds / 1000)
            : undefined,
        };
      });
    priceFeeds.push(...standaloneFeeds);
  });

  return priceFeeds;
}
