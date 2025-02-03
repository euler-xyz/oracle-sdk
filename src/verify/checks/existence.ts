import { Address } from "viem";

import { Adapter } from "../../euler/types";
import { CheckResultWithId } from "./types";
import { CHECKS, failCheck, passCheck } from "./utils";

type Params = {
  chainId: number;
  address: Address;
  adapter: Adapter | null;
};

export function existence({ chainId, address, adapter }: Params): CheckResultWithId {
  if (!adapter) {
    return failCheck(
      CHECKS.ADAPTER_EXISTS,
      `Could not index adapter ${address} on chain ${chainId}`,
    );
  }
  return passCheck(CHECKS.ADAPTER_EXISTS, "Successfully indexed adapter");
}
