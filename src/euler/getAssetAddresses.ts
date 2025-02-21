import { Address } from 'viem';

import { getEffectiveBaseAndQuote } from './getEffectiveBaseAndQuote';
import { Adapter } from './types';

export function getAssetAddresses(adapter: Adapter): Address[] {
  let extra: Address[] = [];
  if (adapter.name === 'CrossAdapter') {
    extra = [adapter.cross];
  }
  return [...getEffectiveBaseAndQuote(adapter), ...extra];
}
