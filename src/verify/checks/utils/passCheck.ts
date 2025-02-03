import { CheckDefinition, CheckResultWithId } from "../types";
import { PASS_MESSAGE } from "./constants";

export function passCheck(check: CheckDefinition, message?: string): CheckResultWithId {
  return {
    ...check,
    message: message || PASS_MESSAGE,
    pass: true,
  };
}
