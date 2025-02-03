import { Address } from "viem";

import { Asset } from "../../euler/types";
import { CheckResultWithId } from "./types";
import { CHECKS, failCheck, passCheck, RECOGNIZED_DESIGNATOR_ASSETS } from "./utils";

type Params = {
  asset: Asset | undefined;
  address: Address;
};

export function assetConsistent({ asset, address }: Params): CheckResultWithId {
  if (!asset) {
    return failCheck(CHECKS.CONSISTENT_ASSET, `Could not index asset ${address}`);
  }

  if (RECOGNIZED_DESIGNATOR_ASSETS.includes(asset.address)) {
    return passCheck(CHECKS.CONSISTENT_ASSET, `Asset ${address} is a special designator address`);
  }

  if (!asset.symbol) {
    return failCheck(CHECKS.CONSISTENT_ASSET, `Did not find symbol for asset ${address}`);
  }
  if (!asset.name) {
    return failCheck(CHECKS.CONSISTENT_ASSET, `Did not find name for asset ${address}`);
  }
  if (!asset.decimals) {
    return failCheck(CHECKS.CONSISTENT_ASSET, `Did not find decimals for asset ${address}`);
  }

  return passCheck(
    CHECKS.CONSISTENT_ASSET,
    `Asset ${address} is ${asset.symbol} (${asset.name}) with ${asset.decimals} decimals`,
  );
}
