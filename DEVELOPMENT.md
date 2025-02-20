# Development Guide

## Adding support for a new chain

### Chainlink Metadata

If Chainlink is supported, add the chain to [src/chainlink/chainIdToRddSlug.ts](src/chainlink/chainIdToRddSlug.ts).

The list of supported chains and their slugs can be found here: https://github.com/smartcontractkit/documentation/blob/main/src/features/data/chains.ts

### Pendle Metadata

If Pendle is supported, add the chain to [src/pendle/chainIdToPendleOracle.ts](src/pendle/chainIdToPendleOracle.ts).

The list of supported chains can be found here: https://github.com/pendle-finance/pendle-core-v2-public/tree/main/deployments. The `pendleOracle` address can be found in the `core-[chainId].json` file with key `pyYtLpOracle`.

### Pyth Metadata

If Pyth is supported, add the chain to [src/pyth/chainIdToPythProxy.ts](src/pyth/chainIdToPythProxy.ts).

The list of supported chains and the proxy addresses can be found here: https://docs.pyth.network/price-feeds/contract-addresses/evm

### RedStone Metadata

If RedStone is supported, add the chain to [src/redstone/chainIdToRedStoneRelayerManifestSlugs.ts](src/redstone/chainIdToRedStoneRelayerManifestSlugs.ts).

The list of supported slugs can be found here:

- https://github.com/redstone-finance/redstone-oracles-monorepo/tree/main/packages/on-chain-relayer/relayer-manifests (for standalone feeds)
- https://github.com/redstone-finance/redstone-oracles-monorepo/tree/main/packages/on-chain-relayer/relayer-manifests-multi-feed (for multi feeds)

Verify that the chain entry in the feed JSON matches the chain id.

## Adding support for a new oracle provider

1. Create a folder `src/[provider]`. Put all types in `src/[provider]/types.ts`. Export all files in `src/[provider]/index.ts`.

2. Put one external function per file.

3. If indexing contracts, use [src/utils/indexByAbi.ts](src/utils/indexByAbi.ts) with inlined ABI. See [src/chainlink/indexChainlinkFeeds.ts](src/chainlink/indexChainlinkFeeds.ts) for an example. Follow the naming convention `indexProviderContracts`.

4. If fetching metadata, create a `fetchProviderMetadata.ts` file. See [src/chainlink/fetchChainlinkMetadata.ts](src/chainlink/fetchChainlinkMetadata.ts) for an example. Document this in the README.md and in this file.

## Adding support for a new oracle adapter class

1. Ensure the adapter class is in `euler-price-oracle` and the submodule is updated in `evk-periphery`.

1. Run the following commands from within the `evk-periphery` repo.

1. Compile the deployment artifact with `forge clean && forge build`.

   1. Take the compilation output JSON from `out/Class.sol/Class.json` and put it in `src/euler/artifacts/deployment`.
   1. Change the file extension to `.ts`. Surround the JSON with `export { ... } as const`.

1. Compile the verification artifact with `forge verify-contract 0x0000000000000000000000000000000000000000 ContractName --show-standard-json-input >> artifact.json`.

   1. Take the output and put it in `src/euler/artifacts/verification`.
   1. Change the file extension to `.ts`. Surround the JSON with `export { ... } as const`.
