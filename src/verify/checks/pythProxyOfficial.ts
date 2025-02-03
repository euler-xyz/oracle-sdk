import { PythOracle } from "../../euler/types";
import { CheckResultWithId } from "./types";
import { CHAIN_ID_TO_OFFICIAL_PYTH_PROXY, CHECKS, failCheck, passCheck } from "./utils";

type Params = {
  adapter: PythOracle;
};

export function pythProxyOfficial({ adapter }: Params): CheckResultWithId {
  if (adapter.pyth === CHAIN_ID_TO_OFFICIAL_PYTH_PROXY[adapter.chainId]) {
    return passCheck(CHECKS.OFFICIAL_PYTH_PROXY, "Adapter is connected to the official Pyth proxy");
  } else {
    return failCheck(
      CHECKS.OFFICIAL_PYTH_PROXY,
      "Adapter is not connected to the official Pyth proxy",
    );
  }
}
