# Oracle SDK

A JavaScript/TypeScript utility library for interacting with various price oracle providers on Euler.

## Overview

Oracle SDK is a comprehensive toolkit that provides a unified interface for interacting with multiple price oracle providers. It simplifies the process of fetching and managing metadata and price data from various sources including Chainlink, Pyth, RedStone, Pendle, and more.

## Features

- Unified interface for multiple oracle providers: Chainlink, Pyth, Pendle, RedStone, Chronicle, and more
- Support for indexing Euler contracts: `SnapshotRegistry`, `EulerRouterFactory`, `EulerRouter`, and more
- Canonical deployment and verification artifacts for Euler oracle adapters
- TypeScript support with full type definitions
- Modern ESM and CommonJS support

### Metadata

Depending on the provider, there may be metadata available off-chain. This metadata can be used to decide which contracts / configurations are valid and official according to the provider.

| Provider  | Metadata Location                                                                                                   | Metedata Contents                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Chainlink | https://reference-data-directory.vercel.app/[slug].json                                                             | Proxy address, description, heartbeat, threshold...                  |
| RedStone  | https://github.com/redstone-finance/redstone-oracles-monorepo/tree/main/packages/on-chain-relayer/relayer-manifests | Proxy address, description, heartbeat, threshold...                  |
| Pyth      | https://hermes.pyth.network/v2/price_feeds                                                                          | Feed id, feed type, symbol, description...                           |
| Pendle    | https://api-v2.pendle.finance/bff/v3/markets/all?chainId=${chainId}                                                 | Market address, accounting asset, underlying asset, expiry, and more |

## Installation

```bash
npm install @objectivelabs/oracle-sdk
# or
yarn add @objectivelabs/oracle-sdk
# or
pnpm add @objectivelabs/oracle-sdk
```

## Development

See [DEVELOPMENT.md](DEVELOPMENT.md) for details on adding support for a new chain, oracle provider or adapter class.

### Prerequisites

- Node.js (v16 or higher recommended)
- npm, yarn, or pnpm

### Setup

1. Clone the repository:

```bash
git clone https://github.com/objectivedefi/oracle-sdk.git
cd oracle-sdk
```

2. Install dependencies:

```bash
npm install
```

### Available Scripts

- `npm run build` - Build the project (outputs both CJS and ESM formats)
- `npm run dev` - Watch mode for development
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## Dependencies

- `viem` - Ethereum interaction library

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## About

Developed and maintained by [Objective Labs](https://github.com/objectivedefi).
