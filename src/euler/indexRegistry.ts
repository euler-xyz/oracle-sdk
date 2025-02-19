import { Address, getAddress, parseAbiItem, PublicClient } from 'viem';

type Params = {
  publicClient: PublicClient;
  snapshotRegistry: Address;
  fromBlock: bigint;
};

type RegistryEntry = {
  addedAt: bigint;
  revokedAt: bigint;
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

  addedEvents.forEach((e) => {
    const address = getAddress(`0x${e.topics[1].slice(-40)}`);
    const addedAt = BigInt(e.data);
    const existingEntry = entries[address];
    entries[address] = {
      addedAt: addedAt > existingEntry.addedAt ? addedAt : existingEntry.addedAt,
      revokedAt: 0n,
    };
  });

  revokedEvents.forEach((e) => {
    const address = getAddress(`0x${e.topics[0].slice(-40)}`);
    const revokedAt = BigInt(e.data);
    const existingEntry = entries[address];
    entries[address] = {
      addedAt: existingEntry.addedAt,
      revokedAt: revokedAt > existingEntry.revokedAt ? revokedAt : existingEntry.revokedAt,
    };
  });

  return entries;
}
