import { Address, BlockNumber, BlockTag, getAddress, parseAbiItem, PublicClient } from 'viem';

type Params = {
  publicClient: PublicClient;
  routerAddresses: Address[];
  fromBlock: BlockNumber | BlockTag | undefined;
  toBlock: BlockNumber | BlockTag | undefined;
};

const event = parseAbiItem(
  'event ConfigSet(address indexed asset0, address indexed asset1, address indexed oracle)',
);

export async function indexRouterHistoricalAdapters({
  publicClient,
  routerAddresses,
  fromBlock,
  toBlock,
}: Params): Promise<Address[]> {
  const adapterAddresses = new Set<Address>();
  const events = await publicClient.getLogs({
    address: routerAddresses,
    event,
    fromBlock,
    toBlock,
  });

  events.forEach((e) => {
    const address = getAddress(`0x${e.topics[3].slice(-40)}`);
    adapterAddresses.add(address);
  });

  return Array.from(adapterAddresses);
}
