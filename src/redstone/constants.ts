import {
  arbitrum,
  base,
  berachain,
  bob,
  bsc,
  corn,
  ink,
  mainnet,
  optimism,
  sonic,
  swellchain,
} from 'viem/chains';

export const REDSTONE_MANIFESTS_BASE_URL =
  'https://raw.githubusercontent.com/redstone-finance/redstone-oracles-monorepo/refs/heads/main/packages/on-chain-relayer/';

type RedStoneRelayerManifestSlugs = {
  multi?: string;
  standalone: string[];
};

export const chainIdToRedStoneRelayerManifestSlugs: Record<number, RedStoneRelayerManifestSlugs> = {
  [mainnet.id]: {
    multi: 'ethereumMultiFeed',
    standalone: [
      'ethereumApxetheth',
      'ethereumEtherfiWeeth',
      'ethereumEtherfiWeetheth',
      'ethereumEthpluseth',
      'ethereumEzetheth',
      'ethereumPufetheth',
      'ethereumRsetheth',
      'ethereumStakewiseOsetheth',
      'swell',
    ],
  },
  [optimism.id]: {
    multi: 'optimismMultiFeed',
    standalone: ['optimismApxetheth'],
  },
  // [gnosis.id]: {},
  // [polygon.id]: {},
  [sonic.id]: {
    multi: 'sonicMultiFeed',
    standalone: [],
  },
  [swellchain.id]: {
    multi: 'swellchainMultiFeed',
    standalone: [],
  },
  [corn.id]: {
    multi: 'cornMultiFeed',
    standalone: [],
  },
  [arbitrum.id]: {
    multi: 'arbitrumOneMultiFeed',
    standalone: [
      'arbitrumAngleAgeur',
      'arbitrumPremia',
      'arbitrumSusdeRateProvider',
      'arbitrumWeetheth',
      'arbitrumWeethfundamental',
    ],
  },
  // [avalanche.id]: {}
  [bsc.id]: {
    multi: 'bnbMultiFeed',
    standalone: ['bnbBnb', 'bnbBtc', 'bnbEzetheth', 'bnbStone'],
  },
  [ink.id]: {
    multi: 'inkMultiFeed',
    standalone: [],
  },
  [bob.id]: {
    standalone: ['bobMultiPriceFeed'],
  },
  [berachain.id]: {
    multi: 'berachainMultiFeed',
    standalone: [],
  },
  [base.id]: {
    multi: 'baseMultiFeed',
    standalone: ['baseBsdetheth', 'baseEusd', 'basePufetheth'],
  },
};
