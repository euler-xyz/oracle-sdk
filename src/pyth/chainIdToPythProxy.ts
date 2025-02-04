import { Address } from "viem";
import {
  mainnet,
  arbitrum,
  base,
  optimism,
  polygon,
  fantom,
  avalanche,
  bsc,
  cronos,
  gnosis,
  linea,
  polygonZkEvm,
  abstract,
  apeChain,
  astarZkEVM,
  aurora,
  blast,
  bitTorrent,
  boba,
  canto,
  celo,
  chiliz,
  confluxESpace,
  coreDao,
  cronoszkEVM,
  eos,
  evmos,
  etherlink,
  filecoin,
  flowMainnet,
  gravity,
  hedera,
  hemi,
  ink,
  iota,
  kava,
  kcc,
  kinto,
  kaia,
  lightlinkPhoenix,
  manta,
  mantle,
  merlin,
  meter,
  mode,
  morph,
  neonMainnet,
  opBNB,
  scroll,
  superseed,
  sei,
  shimmer,
  sonic,
  soneium,
  taiko,
  viction,
  wemix,
  zkFair,
  zetachain,
  ronin,
} from "viem/chains";
import { zksync } from "viem/zksync";

export const chainIdToPythProxy: Record<number, Address> = {
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
