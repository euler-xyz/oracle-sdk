import { CheckResultWithId } from "./types";
import {
  CHECKS,
  failCheck,
  passCheck,
  PYTH_STALENESS_RANGE_MAXIMUM,
  PYTH_STALENESS_RANGE_MINIMUM,
} from "./utils";
import { PythOracle } from "../../euler/types";

type Params = {
  adapter: PythOracle;
};

export function pythStalenessRange({ adapter }: Params): CheckResultWithId {
  if (adapter.maxStaleness < PYTH_STALENESS_RANGE_MINIMUM) {
    return failCheck(
      CHECKS.PYTH_STALENESS_RANGE,
      `Max staleness is too low (less than ${PYTH_STALENESS_RANGE_MINIMUM} seconds).`,
    );
  } else if (adapter.maxStaleness > PYTH_STALENESS_RANGE_MAXIMUM) {
    return failCheck(
      CHECKS.PYTH_STALENESS_RANGE,
      `Max staleness is too high (greater than ${PYTH_STALENESS_RANGE_MAXIMUM} seconds).`,
    );
  } else {
    return passCheck(
      CHECKS.PYTH_STALENESS_RANGE,
      `Max staleness is within the recommended range (${PYTH_STALENESS_RANGE_MINIMUM} - ${PYTH_STALENESS_RANGE_MAXIMUM} seconds).`,
    );
  }
}
