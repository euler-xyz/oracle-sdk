import { Address, PublicClient } from "viem";

import {
  assetConsistent,
  assetsDistinct,
  CheckResult,
  existence,
  knownAggregatorV3Feed,
  knownMetadataHash,
  pushHeartbeat,
  pythBaseCorrespondence,
  pythFeedOfficial,
  pythProxyOfficial,
  pythQuoteCorrespondence,
  pythStalenessRange,
} from "./checks";
import { fetchChainlinkMetadata } from "../chainlink/fetchChainlinkMetadata";
import { indexAdapters } from "../euler/indexAdapters";
import { indexAssets } from "../euler/indexAssets";
import { Adapter } from "../euler/types";
import { fetchPythMetadata } from "../pyth/fetchPythMetadata";
import { fetchRedStonePriceFeeds } from "../redstone/fetchRedStonePriceFeeds";

type Params = {
  adapterAddresses: Address[];
  publicClient: PublicClient;
};

type AdapterToResults = Record<
  Address,
  {
    checks: CheckResult[];
    label?: string;
  }
>;

function extractAssetAddresses(adapter: Adapter | null): Address[] {
  if (!adapter) return [];
  const addresses: Address[] = [];

  if ("base" in adapter) addresses.push(adapter.base);
  if ("quote" in adapter) addresses.push(adapter.quote);
  if ("cross" in adapter) addresses.push(adapter.cross);
  if ("WSTETH" in adapter) addresses.push(adapter.WSTETH);
  if ("STETH" in adapter) addresses.push(adapter.STETH);
  if ("WETH" in adapter) addresses.push(adapter.WETH);
  if ("tokenA" in adapter) addresses.push(adapter.tokenA);
  if ("tokenB" in adapter) addresses.push(adapter.tokenB);
  if ("pool" in adapter) addresses.push(adapter.pool);
  if ("safeguardPool" in adapter) addresses.push(adapter.safeguardPool);
  if ("pendleMarket" in adapter) addresses.push(adapter.pendleMarket);
  if ("tranche" in adapter) addresses.push(adapter.tranche);
  if ("underlying" in adapter) addresses.push(adapter.underlying);

  return addresses.filter((address) => address !== undefined);
}

export async function runChecks({
  adapterAddresses,
  publicClient,
}: Params): Promise<AdapterToResults> {
  const chainId = publicClient.chain?.id;
  if (!chainId) {
    throw new Error("Client chain id is undefined");
  }
  const adapters = await indexAdapters({ adapterAddresses, publicClient });
  const bytecodes = await Promise.all(
    adapterAddresses.map((address) =>
      publicClient.getCode({
        address,
      }),
    ),
  );
  const assetAddresses = Array.from(
    new Set(adapters.flatMap((adapter) => extractAssetAddresses(adapter))),
  );

  const assets = await indexAssets({
    publicClient,
    addresses: assetAddresses,
  });

  const [chainlinkResult, redstoneResult, pythResult] = await Promise.allSettled([
    fetchChainlinkMetadata(chainId),
    fetchRedStonePriceFeeds(chainId),
    fetchPythMetadata(),
  ]);

  const chainlinkMetadata = chainlinkResult.status === "fulfilled" ? chainlinkResult.value : [];
  const redstoneMetadata = redstoneResult.status === "fulfilled" ? redstoneResult.value : [];
  const pythMetadata = pythResult.status === "fulfilled" ? pythResult.value : [];

  const adapterToResults: AdapterToResults = {};

  adapters.forEach((adapter, index) => {
    const checks: CheckResult[] = [];
    const existenceCheck = existence({
      chainId,
      address: adapterAddresses[index],
      adapter,
    });
    checks.push(existenceCheck);

    if (!existenceCheck.pass || !adapter) {
      return;
    }

    checks.push(knownMetadataHash(adapter, bytecodes[index]));

    const assetAddresses = extractAssetAddresses(adapter);
    checks.push(assetsDistinct(assetAddresses));

    const adapterAssets = assetAddresses.map((assetAddress) =>
      assets.find((asset) => asset.address === assetAddress),
    );
    adapterAssets.forEach((asset, i) => {
      checks.push(
        assetConsistent({
          asset,
          address: assetAddresses[i],
        }),
      );
    });

    const name = adapter.name;
    if (name === "ChainlinkOracle" || name === "ChainlinkInfrequentOracle") {
      const aggregatorV3FeedCheck = knownAggregatorV3Feed({
        adapter,
        chainlinkMetadata,
        redstoneMetadata,
      });
      checks.push(aggregatorV3FeedCheck.result);

      const heartbeatCheck = pushHeartbeat({
        maxStaleness: adapter.maxStaleness,
        heartbeat: aggregatorV3FeedCheck.heartbeat,
      });
      checks.push(heartbeatCheck);
    } else if (name === "PythOracle") {
      const pythFeedCheck = pythFeedOfficial({
        adapter,
        pythMetadata,
      });
      checks.push(pythFeedCheck.result);

      checks.push(
        pythBaseCorrespondence({
          base: assets.find((asset) => asset.address === adapter.base),
          feed: pythFeedCheck.feed,
        }),
      );

      checks.push(
        pythQuoteCorrespondence({
          quote: assets.find((asset) => asset.address === adapter.quote),
          feed: pythFeedCheck.feed,
        }),
      );

      checks.push(pythProxyOfficial({ adapter }));
      checks.push(pythStalenessRange({ adapter }));
    }
    adapterToResults[adapter.address] = {
      checks,
    };
  });

  return adapterToResults;
}
