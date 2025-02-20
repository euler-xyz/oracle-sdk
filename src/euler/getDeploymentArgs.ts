import { Abi, Hex } from 'viem';

import { deploymentArtifacts } from './artifacts';
import { getConstructorArgs } from './getConstructorArgs';
import { Adapter } from './types';

type DeployArgs = {
  abi: Abi;
  args: readonly unknown[];
  bytecode: Hex;
};

export function getDeploymentArgs(adapter: Adapter): DeployArgs {
  if (adapter.name === 'SwaapSafeguardOracle' || adapter.name === 'IdleTranchesOracle') {
    throw new Error('Adapter class is not supported');
  }

  const args = getConstructorArgs(adapter);
  const { abi, bytecode } = deploymentArtifacts[adapter.name];

  return {
    abi,
    args,
    bytecode: bytecode.object as Hex,
  };
}
