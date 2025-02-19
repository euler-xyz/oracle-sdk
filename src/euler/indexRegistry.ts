import { Address, parseAbiItem, PublicClient } from 'viem';

import { RegistryEntry } from './types';

type Params = {
  publicClient: PublicClient;
  snapshotRegistry: Address;
  fromBlock: bigint;
};

const addedEvent = parseAbiItem(
  'event Added(address indexed element, address indexed asset0, address indexed asset1, uint256 addedAt)',
);

const revokedEvent = parseAbiItem('event Revoked(address indexed element, uint256 revokedAt)');

export async function indexRegistry({
  publicClient,
  snapshotRegistry,
  fromBlock,
}: Params): Promise<Record<Address, RegistryEntry>> {
  const entries: Record<Address, RegistryEntry> = {};
  const addedEvents = await publicClient.getLogs({
    address: snapshotRegistry,
    event: addedEvent,
    fromBlock,
  });
  const revokedEvents = await publicClient.getLogs({
    address: snapshotRegistry,
    event: revokedEvent,
    fromBlock,
  });

  const sortedEvents = [...addedEvents, ...revokedEvents].sort((a, b) => {
    if (a.blockNumber === b.blockNumber) {
      return Number(a.transactionIndex) - Number(b.transactionIndex);
    }
    return Number(a.blockNumber) - Number(b.blockNumber);
  });

  sortedEvents.forEach((e) => {
    if (e.eventName === 'Added') {
      const { element, addedAt } = e.args;
      if (!element || !addedAt) return;
      const existingEntry = entries[element];
      if (existingEntry) {
        entries[element].addedAt = addedAt;
      } else {
        entries[element] = {
          addedAt,
          revokedAt: 0n,
        };
      }
    } else if (e.eventName === 'Revoked') {
      const { element, revokedAt } = e.args;
      if (!element || !revokedAt) return;
      const existingEntry = entries[element];
      if (existingEntry) {
        entries[element].revokedAt = revokedAt;
      } else {
        entries[element] = {
          addedAt: 0n,
          revokedAt,
        };
      }
    }
  });

  return entries;
}
