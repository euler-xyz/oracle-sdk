import { CheckResultWithId } from "./types";
import { CHECKS, failCheck, MIN_HEARTBEAT_BUFFER, passCheck } from "./utils";

type Params = {
  maxStaleness: bigint;
  heartbeat: number | undefined;
};

export function pushHeartbeat({ maxStaleness, heartbeat }: Params): CheckResultWithId {
  if (!heartbeat) {
    return failCheck(CHECKS.PUSH_STALENESS_BUFFER, "Feed heartbeat is unknown");
  }
  if (maxStaleness < heartbeat + MIN_HEARTBEAT_BUFFER) {
    return failCheck(
      CHECKS.PUSH_STALENESS_BUFFER,
      `Adapter max staleness (${maxStaleness}) is insufficient for the feed's heartbeat (${heartbeat}). Minimum recommended max staleness is ${
        heartbeat + MIN_HEARTBEAT_BUFFER
      } seconds.`,
    );
  }

  return passCheck(
    CHECKS.PUSH_STALENESS_BUFFER,
    `Adapter max staleness (${maxStaleness}) is sufficient for the feed's heartbeat (${heartbeat}).`,
  );
}
