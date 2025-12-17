import { Address } from 'viem';
import { arbitrum, base, bsc, mainnet, mantle, optimism, plasma, hyperEvm } from 'viem/chains';

export const chainIdToPendleOracle: Record<number, Address> = {
  [mainnet.id]: '0x5542be50420E88dd7D5B4a3D488FA6ED82F6DAc2',
  [optimism.id]: '0x5542be50420E88dd7D5B4a3D488FA6ED82F6DAc2',
  [arbitrum.id]: '0x5542be50420E88dd7D5B4a3D488FA6ED82F6DAc2',
  [mantle.id]: '0x5542be50420E88dd7D5B4a3D488FA6ED82F6DAc2',
  [bsc.id]: '0x5542be50420E88dd7D5B4a3D488FA6ED82F6DAc2',
  [base.id]: '0x5542be50420E88dd7D5B4a3D488FA6ED82F6DAc2',
  [plasma.id]: '0x5542be50420E88dd7D5B4a3D488FA6ED82F6DAc2',
  [hyperEvm.id]: '0x5542be50420E88dd7D5B4a3D488FA6ED82F6DAc2',
};

//https://github.com/pendle-finance/pendle-core-v2-public/tree/main/deployments