import { Address } from 'viem';
import { arbitrum, base, bsc, mainnet, mantle, optimism, plasma } from 'viem/chains';

export const chainIdToPendleOracle: Record<number, Address> = {
  [mainnet.id]: '0x9a9Fa8338dd5E5B2188006f1Cd2Ef26d921650C2',
  [optimism.id]: '0x9a9Fa8338dd5E5B2188006f1Cd2Ef26d921650C2',
  [arbitrum.id]: '0x9a9Fa8338dd5E5B2188006f1Cd2Ef26d921650C2',
  [mantle.id]: '0x9a9Fa8338dd5E5B2188006f1Cd2Ef26d921650C2',
  [bsc.id]: '0x9a9Fa8338dd5E5B2188006f1Cd2Ef26d921650C2',
  [base.id]: '0x9a9Fa8338dd5E5B2188006f1Cd2Ef26d921650C2',
  [plasma.id]: '0x9a9Fa8338dd5E5B2188006f1Cd2Ef26d921650C2',
};
