import { Address } from 'viem';

import { Adapter } from './types';

export function getEffectiveBaseAndQuote(adapter: Adapter): [Address, Address] {
  if (adapter.name === 'LidoOracle') {
    return [adapter.WSTETH, adapter.STETH];
  }
  if (adapter.name === 'LidoFundamentalOracle') {
    return [adapter.WSTETH, adapter.WETH];
  }
  if (adapter.name === 'IdleTranchesOracle') {
    return [adapter.tranche, adapter.underlying];
  }
  if (adapter.name === 'SwaapSafeguardOracle') {
    return [adapter.safeguardPool, adapter.quote];
  }
  if (adapter.name === 'UniswapV3Oracle') {
    return [adapter.tokenA, adapter.tokenB];
  }
  return [adapter.base, adapter.quote];
}
