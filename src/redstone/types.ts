import { Address, Hex } from 'viem';

type Chain = {
  name: string;
  id: number;
};

type UpdateTriggers = {
  deviationPercentage?: number;
  timeSinceLastUpdateInMilliseconds?: number;
  cron?: string[];
};

type RedStoneRelayerBase = {
  chain: Chain;
  updateTriggers: UpdateTriggers;
  adapterContract: Address;
  dataServiceId: string;
};

export type RedStoneRelayerManifest = RedStoneRelayerBase & {
  priceFeeds: {
    [key: string]: Address; // symbol -> address mapping
  };
};

export type RedStoneRelayerMultiFeedManifest = RedStoneRelayerBase & {
  adapterContractType: 'multi-feed';
  priceFeeds: {
    [key: string]: {
      priceFeedAddress: Address;
      updateTriggersOverrides?: UpdateTriggers;
    };
  };
};

export type RedStoneMetadata = {
  symbol: string;
  priceFeedAddress: Address;
  deviationPercentage?: number;
  heartbeat?: number;
}[];

export type RedStoneFeed = {
  chainId: number;
  address: Address;
  aggregator: Address;
  decimals: number;
  description: string;
  version: bigint;
  dataFeedId: Hex;
  priceFeedAdapter: Address;
};
