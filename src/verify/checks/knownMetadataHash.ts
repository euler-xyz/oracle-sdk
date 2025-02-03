import { decode } from "cbor-x";
import { Hex } from "viem";

import { Adapter } from "../../euler/types";
import { CheckResultWithId } from "./types";
import { ADAPTER_METADATA_HASHES, CHECKS, failCheck, passCheck } from "./utils";

export function knownMetadataHash(adapter: Adapter, code: Hex | undefined): CheckResultWithId {
  if (!code || code === "0x") {
    return failCheck(CHECKS.SOURCE_CODE_PROVENANCE, "Adapter contract is missing (0x)");
  }

  const metadataHash = extractMetadataHash(code);
  if (!metadataHash) {
    return failCheck(
      CHECKS.SOURCE_CODE_PROVENANCE,
      "Failed to extract metadata hash from bytecode",
    );
  }

  const expectedHashes = ADAPTER_METADATA_HASHES[adapter.name];
  if (!expectedHashes) {
    return failCheck(
      CHECKS.SOURCE_CODE_PROVENANCE,
      `No metadata hash defined for adapter type: ${adapter.name}`,
    );
  }

  const expectedHash = expectedHashes.find((hash) => metadataHash === hash);

  if (metadataHash !== expectedHash) {
    return failCheck(
      CHECKS.SOURCE_CODE_PROVENANCE,
      `Contract metadata hash mismatch for ${
        adapter.name
      }: got ${metadataHash}, expected one of ${expectedHashes.join(", ")}`,
    );
  }

  return passCheck(
    CHECKS.SOURCE_CODE_PROVENANCE,
    `Contract metadata hash matches a known hash for ${adapter.name}: ${expectedHash}`,
  );
}

function extractMetadataHash(bytecode: Hex): string | null {
  try {
    // Remove 0x prefix
    const code = bytecode.slice(2);

    // Last 2 bytes contain the CBOR length
    const cborLength = parseInt(code.slice(-4), 16);

    // Extract CBOR data using the length
    const cborData = code.slice(-(4 + cborLength * 2), -4);

    // Convert hex to bytes for CBOR decoding
    const bytes = new Uint8Array(
      cborData.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) || [],
    );

    // Decode CBOR data
    const metadata = decode(bytes);

    // Convert ipfs byte array to hex string
    if (metadata.ipfs) {
      const ipfsBytes = new Uint8Array(metadata.ipfs);
      return (
        "0x" +
        Array.from(ipfsBytes)
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("")
      );
    }

    return null;
  } catch (e) {
    console.error("Failed to extract metadata hash:", e);
    return null;
  }
}
