import ChainlinkInfrequentOracle from './ChainlinkInfrequentOracle';
import ChainlinkOracle from './ChainlinkOracle';
import ChronicleOracle from './ChronicleOracle';
import CrossAdapter from './CrossAdapter';
import FixedRateOracle from './FixedRateOracle';
import LidoFundamentalOracle from './LidoFundamentalOracle';
import LidoOracle from './LidoOracle';
import PendleOracle from './PendleOracle';
import PythOracle from './PythOracle';
import RateProviderOracle from './RateProviderOracle';
import RedstoneCoreOracle from './RedstoneCoreOracle';
import UniswapV3Oracle from './UniswapV3Oracle';

export const deploymentArtifacts = {
  ChainlinkInfrequentOracle,
  ChainlinkOracle,
  ChronicleOracle,
  CrossAdapter,
  FixedRateOracle,
  LidoFundamentalOracle,
  LidoOracle,
  PendleOracle,
  PythOracle,
  RateProviderOracle,
  RedstoneCoreOracle,
  UniswapV3Oracle,
} as const;
