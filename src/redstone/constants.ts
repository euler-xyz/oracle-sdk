import { bob, ink, mainnet, sonic, swellchain } from "viem/chains";

export const REDSTONE_MANIFESTS_BASE_URL =
  "https://raw.githubusercontent.com/redstone-finance/redstone-oracles-monorepo/refs/heads/main/packages/on-chain-relayer/";

type RedStoneRelayerManifestSlugs = {
  multi?: string;
  standalone: string[];
};

export const chainIdToRedStoneRelayerManifestSlugs: Record<number, RedStoneRelayerManifestSlugs> = {
  [mainnet.id]: {
    multi: "ethereumMultiFeed",
    standalone: [
      "ethereumApxetheth",
      "ethereumEtherfiWeeth",
      "ethereumEtherfiWeetheth",
      "ethereumEthpluseth",
      "ethereumEzetheth",
      "ethereumPufetheth",
      "ethereumRsetheth",
      "swell",
    ],
  },
  [sonic.id]: {
    multi: "sonicMultiFeed",
    standalone: [],
  },
  [swellchain.id]: {
    multi: "swellchainMultiFeed",
    standalone: [],
  },
  [ink.id]: {
    multi: "inkMultiFeed",
    standalone: [],
  },
  [bob.id]: {
    standalone: ["bobMultiPriceFeed"],
  },
};
