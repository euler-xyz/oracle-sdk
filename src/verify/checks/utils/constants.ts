import { Address } from "viem";
import {
  abstract,
  apeChain,
  arbitrum,
  astarZkEVM,
  aurora,
  avalanche,
  base,
  bitTorrent,
  blast,
  boba,
  bsc,
  canto,
  celo,
  chiliz,
  confluxESpace,
  coreDao,
  cronos,
  cronoszkEVM,
  eos,
  etherlink,
  evmos,
  fantom,
  filecoin,
  flowMainnet,
  gnosis,
  gravity,
  hedera,
  hemi,
  ink,
  iota,
  kaia,
  kava,
  kcc,
  kinto,
  lightlinkPhoenix,
  linea,
  mainnet,
  manta,
  mantle,
  merlin,
  meter,
  mode,
  morph,
  neonMainnet,
  opBNB,
  optimism,
  polygon,
  polygonZkEvm,
  ronin,
  scroll,
  sei,
  shimmer,
  soneium,
  sonic,
  superseed,
  taiko,
  viction,
  wemix,
  zetachain,
  zkFair,
  zksync,
} from "viem/chains";

import { CheckDefinition } from "../types";

export const ADAPTER_METADATA_HASHES: Record<string, string[]> = {
  ChainlinkOracle: [
    "0x1220f845d68829d96b6729958026d7d354231a3769dd7781c5008a2bc49e702c7d89",
    "0x122098be8435d1b2b6ce8a6c428a2581588cb5a55d4e6e27a78581a2a3ce73a0ad04",
    "0x12207458f598e96ece1cfe9f8eda97a5cd2dc539fbe7b0901d4d3cd079e6e6aec585",
    "0x1220371540ee03fa604ae156b8669db3c5b7408fa6a01151dc1166eed29b9d51d458",
    "0x122037912c427d1bd3b0d2c1e307ba434d832c2b266de1bad79e7ad1f560ac02d8b0",
    "0x122061cdae349570baedd0ab35cfdd64d7ec9c828d521b724a2e86ddec745851b7a3",
    "0x1220efbb7c10de69219b53b5712aee68c3587e02d746fd3d7fff158f0d71540061ca",
    "0x1220a0fa2b06551f1068b24b951f255f737875f78cf1beb35dbc16557d589139426e",
  ],
  ChainlinkInfrequentOracle: [
    "0x1220bbc39c409d4697c843913afb02e2a76062f903f0e904eb2b5790988f5a21482e",
    "0x1220f8ee89e91ed459a7edaf943852893c96be22808b8130aef97af88c71a71cdd5f",
    "0x1220c3dce3dcd2d5a7fbcbc398d2f5243c78fb2eff61a63ac8f8665b4def3d247c11",
    "0x122051b020741b88cb6fdb202c837bdc2e3311d316d2b9e399aff499d000ac0d7fce",
  ],
  ChronicleOracle: [
    "0x12201e1d8f950cfcada30dda94fb1922a04f025fc7f4005fac2d490db28fcfe7e18d",
    "0x122086df19d9aea8aee7d71ac1fa1856664af677a130f0f3328e7de4f60ad04daf92",
    "0x1220df07b13a00ad1771723e9c31e206e9361a7cb296a0a8526cf2583ee4823dbc8a",
  ],
  LidoOracle: ["0x1220bdaf2ec9d3b449864cabcdf1cfad6809785e19a57168331c8a300ba30e7eef33"],
  LidoFundamentalOracle: ["0x12201c2f2982416f75f5146c028d57d2eb05f891dd8a571e3e6178dfd0ed268cfb27"],
  PythOracle: [
    "0x1220f9155b7907a46982476065d75a7f4cc5920c9c43a6399479f847b6f11e48bd68",
    "0x1220b35e8842c40b4c90cef9861ee91311e2f2acbd8ecfdf216d4726f81b9432721f",
    "0x122036f3e70a84fc574aa2e095c94651099d69a883268e7e8034abbe1b22179cfefa",
    "0x1220665cf9cd8995c0adad76fc2323ab10da067f370f98ae7c9274ad2a8b6581f44a",
    "0x1220fba0bce2bf102553ecd23e12bb631973b5013b10d705cf7fc994d0e42877d2c0",
    "0x12209dbb70d12bdff6bb916789206bdd641058efc8c5d7de6fba6bf4148077bcee57",
    "0x122044b16fa48a1396d7254ad68e021914cc0485f42a69eea003035927f9aeed1f56",
    "0x1220f246a4266166da46653e2028acf10ef9a9ddb00fb781aed7daa0b77c51379c09",
  ],
  RedstoneCoreOracle: ["0x1220b91ac3ca26a68bf539f1d0b96b675c6e329e73fa0afe944f154daa5bcdb0e272"],
  CrossAdapter: [
    "0x122076d3b0be77e0e4ce25da47f4eee115d6ea7e00dbdd38208838161e90bebc3112",
    "0x1220c835c3847fedcd8cae177b0f57f964a9382f545faf51b62e3446299054c3c55a",
    "0x122045f1eda6f754c11cdd923b3ac3ce209035f91c265a8eb8d6b12e6c96938e961e",
    "0x1220dd69a0b9ae552c9d28fcef12e5d62c8ac6738e6b7c3dad72e964a769e6a02020",
    "0x122040af09865fdc34a3b31c23d6667e26e2c2245bdd8586416bebff67aba6e27c56",
    "0x1220000ce956a3ce362a23d2ca73b65a2ddc23aea872ca3bfa77ddef2dd9a21d7edc",
    "0x12203ef3d98afa2f48032322ef7735d828275b6f3c7b44167a997cc7cf00c12ca7f1",
    "0x1220b5f7dc9bbc9ab62e39e760d9f819ede1468e3b981adb14109f5135e2b08ade44",
    "0x12202c3c3c52edf6cb3cb858d38c2c2cdff2234b4aa15accbe64805bb277a96c737c",
    "0x122088f22586bf91de59387249731f273917f5177ab9b79bf9445bffa3a0fdb6d635",
  ],
  FixedRateOracle: [
    "0x12206f7a3c8b1db06a65d27e867d185d6386d05ef62075907d338c6fe11d460a65cb",
    "0x1220a406df41152e077489669f37327384a1b02cf2df23942e30f1c9b899b080e92b",
    "0x1220e8c289af4809f49e3df0051daca5ab5acf5a0f020119f38a6cfce966ad9b20ea",
    "0x12201648c06b0f055bb1fbd717bba8d321c6e4b0d8a8ec7115ef339564219ce83d76",
    "0x1220090ab20ad84ef141453ddd15d3c0f010a585d1832b37e5fcd94c777631596d87",
    "0x1220a2cf89894c8279c71e1a46c4a73bbddc378bb9f479175fd3effdf4402d4ac8a4",
  ],
  RateProviderOracle: [
    "0x12204dfb13d1f41e79fd65f5c46409e631f3fe4ae9f840a8266957f79aecfff1b955",
    "0x1220f2352f54dc7c4c46d6469718ea090c3b9630a9116d4666c7d258da5d7885e795",
    "0x12205e85b75821595a40fc99b7d2d472063c543dcac101ef1bc8ddc2524c867f3aab",
  ],
  PendleOracle: [
    "0x122046ab86b5153aa2a61ffad4545a71a89edd4a2a4ff65d106a19cddce4d81d7b47",
    "0x12207f25a0f27ca83891a73ceda39e6b00aa9f8fb3225505557020529b217c3a5d62",
    "0x1220e3c00e1a4ced46e1bfd47dcc9d456af1a0a17c76f1039cafef62a352e8b8a9bd",
    "0x122026b1cc67ec90e1ad83c8d4904cf6465d6dc98db94d42b5764a34817d7d54b183",
    "0x12204b2f608da04885c43f1bd83139f5773c54982ecf78961a563ffcebc616596863",
  ],
  SwaapSafeguardOracle: ["0x"],
  UniswapV3Oracle: ["0x"],
  IdleTranchesOracle: ["0x12205fab90911f9465e9f90d80ef81361680dedc1af9c5ec17910c1ac452ebbcb893"],
};

export const PASS_MESSAGE = "No anomaly found";

export const CHECKS: Record<string, CheckDefinition> = {
  SOURCE_CODE_PROVENANCE: {
    id: "SOURCE_CODE_PROVENANCE",
    severity: "HIGH",
  },
  CONSISTENT_ASSET: {
    id: "CONSISTENT_ASSET",
    severity: "HIGH",
  },
  DISTINCT_ASSETS: {
    id: "DISTINCT_ASSETS",
    severity: "HIGH",
  },
  ADAPTER_EXISTS: {
    id: "ADAPTER_EXISTS",
    severity: "HIGH",
  },
  RECOGNIZED_AGGREGATOR_V3_FEED: {
    id: "RECOGNIZED_AGGREGATOR_V3_FEED",
    severity: "MED",
  },
  PUSH_STALENESS_BUFFER: {
    id: "PUSH_STALENESS_BUFFER",
    severity: "MED",
  },
  OFFICIAL_PYTH_FEED: {
    id: "OFFICIAL_PYTH_FEED",
    severity: "HIGH",
  },
  OFFICIAL_PYTH_PROXY: {
    id: "OFFICIAL_PYTH_PROXY",
    severity: "HIGH",
  },
  PYTH_STALENESS_RANGE: {
    id: "PYTH_STALENESS_RANGE",
    severity: "HIGH",
  },
  PYTH_BASE_CORRESPONDENCE: {
    id: "PYTH_BASE_CORRESPONDENCE",
    severity: "INFO",
  },
  PYTH_QUOTE_CORRESPONDENCE: {
    id: "PYTH_QUOTE_CORRESPONDENCE",
    severity: "INFO",
  },
  UNUSUAL_FIXED_RATE: {
    id: "UNUSUAL_FIXED_RATE",
    severity: "MED",
  },
};

export const PYTH_STALENESS_RANGE_MINIMUM = 15;
export const PYTH_STALENESS_RANGE_MAXIMUM = 300;

export const MIN_HEARTBEAT_BUFFER = 900;

export const DESIGNATOR_USD = "0x0000000000000000000000000000000000000348";
export const DESIGNATOR_EUR = "0x00000000000000000000000000000000000003d2";
export const DESIGNATOR_BTC = "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB";
export const DESIGNATOR_TRY = "0x00000000000000000000000000000000000003B5";
export const SPECIAL_MKR = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";

export const RECOGNIZED_DESIGNATOR_ASSETS = [
  DESIGNATOR_USD,
  DESIGNATOR_EUR,
  DESIGNATOR_BTC,
  DESIGNATOR_TRY,
];

export const RECOGNIZED_OTHER_AGGREGATOR_V3_FEEDS: Record<
  number,
  Record<Address, { provider: string; description: string }>
> = {
  [mainnet.id]: {
    "0x056339C044055819E8Db84E71f5f2E1F536b2E5b": {
      provider: "Midas",
      description: "Midas mTBILL/USD Oracle",
    },
    "0xE4f2AE539442e1D3Fb40F03ceEbF4A372a390d24": {
      provider: "Midas",
      description: "Midas mBASIS/USD Oracle",
    },
    "0xA537EF0343e83761ED42B8E017a1e495c9a189Ee": {
      provider: "Midas",
      description: "Midas mBTC/BTC Oracle",
    },
    "0xf87d2F4d42856f0B6Eae140Aaf78bF0F777e9936": {
      provider: "MEV Capital",
      description: "MEV Capital ETH+/USD Oracle",
    },
    "0xAdb2c15Fde49D1A4294740aCb650de94184E66b2": {
      provider: "Resolv",
      description: "Resolv RLP/USD Oracle",
    },
  },
  [base.id]: {
    "0x70E58b7A1c884fFFE7dbce5249337603a28b8422": {
      provider: "Midas",
      description: "Midas mTBILL/USD Oracle",
    },
    "0x6d62D3C3C8f9912890788b50299bF4D2C64823b6": {
      provider: "Midas",
      description: "Midas mBASIS/USD Oracle",
    },
  },
};

export const CHAIN_ID_TO_OFFICIAL_PYTH_PROXY: Record<number, Address> = {
  [mainnet.id]: "0x4305FB66699C3B2702D4d05CF36551390A4c69C6",
  [arbitrum.id]: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
  [base.id]: "0x8250f4aF4B972684F7b336503E2D6dFeDeB1487a",
  [optimism.id]: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
  [polygon.id]: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
  [fantom.id]: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C",
  [avalanche.id]: "0x4305FB66699C3B2702D4d05CF36551390A4c69C6",
  [bsc.id]: "0x4D7E825f80bDf85e913E0DD2A2D54927e9dE1594",
  [cronos.id]: "0xE0d0e68297772Dd5a1f1D99897c581E2082dbA5B",
  [gnosis.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43",
  [linea.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729",
  [polygonZkEvm.id]: "0xC5E56d6b40F3e3B5fbfa266bCd35C37426537c65",
  [zksync.id]: "0xf087c864AEccFb6A2Bf1Af6A0382B0d0f6c5D834",
  [abstract.id]: "0x8739d5024B5143278E2b15Bd9e7C26f6CEc658F1", // Abstract
  [apeChain.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Apechain
  [astarZkEVM.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Astar zkEVM
  [aurora.id]: "0xF89C7b475821EC3fDC2dC8099032c05c6c0c9AB9", // Aurora
  [blast.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Blast
  [bitTorrent.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // BTTC
  [boba.id]: "0x4374e5a8b9C22271E9EB878A2AA31DE97DF15DAF", // Boba
  [canto.id]: "0x98046Bd286715D3B0BC227Dd7a956b83D8978603", // Canto
  [celo.id]: "0xff1a0f4744e8582DF1aE09D5611b887B6a12925C", // Celo
  [chiliz.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Chiliz
  [confluxESpace.id]: "0xe9d69CdD6Fe41e7B621B4A688C5D1a68cB5c8ADc", // Conflux eSpace
  [coreDao.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Core DAO
  [cronoszkEVM.id]: "0x056f829183Ec806A78c26C98961678c24faB71af", // Cronos zkEVM
  [eos.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // EOS
  [evmos.id]: "0x354bF866A4B006C9AF9d9e06d9364217A8616E12", // EVMOS
  [etherlink.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Etherlink
  [filecoin.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Filecoin
  [flowMainnet.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Flow
  [gravity.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Gravity
  [hedera.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Hedera
  [hemi.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Hemi
  [ink.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Ink Kraken
  [iota.id]: "0x8D254a21b3C86D32F7179855531CE99164721933", // Iota
  [kava.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Kava
  [kcc.id]: "0xE0d0e68297772Dd5a1f1D99897c581E2082dbA5B", // KCC
  [kinto.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Kinto
  [kaia.id]: "0x2880ab155794e7179c9ee2e38200202908c17b43", // Kaia
  [lightlinkPhoenix.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // LightLink Phoenix
  [manta.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Manta
  [mantle.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Mantle
  [merlin.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Merlin
  [meter.id]: "0xbFe3f445653f2136b2FD1e6DdDb5676392E3AF16", // Meter
  [mode.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Mode
  [morph.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Morph
  [neonMainnet.id]: "0x7f2dB085eFC3560AFF33865dD727225d91B4f9A5", // Neon
  [opBNB.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // OpBNB
  [scroll.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Scroll
  [superseed.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Superseed
  [sei.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Sei EVM
  [shimmer.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Shimmer
  [sonic.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Sonic(Fantom)
  [soneium.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Soneium
  [taiko.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // Taiko
  [viction.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // Viction
  [wemix.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // WEMIX
  [zkFair.id]: "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729", // ZKFair
  [zetachain.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43", // zetachain
  [ronin.id]: "0x2880aB155794e7179c9eE2e38200202908C17B43",
};
