import { Address, getAddress } from 'viem';

import { PendleMetadata } from './types';

type PendleApiResponse = {
  markets: {
    name: string;
    address: Address;
    expiry: string;
    pt: string;
    yt: string;
    sy: string;
    underlyingAsset: string;
  }[];
};

function splitAddress(address: string): Address {
  return getAddress(address.split('-')[1]);
}

export async function fetchPendleMetadata(chainId: number): Promise<PendleMetadata> {
  const res = await fetch(`https://api-v2.pendle.finance/core/v1/${chainId}/markets/active`);

  const data = (await res.json()) as PendleApiResponse;

  if (!data) {
    throw new Error('No data returned from Pendle API');
  }

  return data.markets.map((market) => ({
    chainId,
    pt: splitAddress(market.pt),
    market: getAddress(market.address),
    underlyingAsset: splitAddress(market.underlyingAsset),
    expiry: Math.floor(new Date(market.expiry).getTime() / 1000),
    symbol: market.name,
  }));
}
