import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

import { indexRegistry } from './euler';

async function test() {
  console.log('test');
  const entries = await indexRegistry({
    publicClient: createPublicClient({
      chain: mainnet,
      transport: http('https://eth-mainnet.g.alchemy.com/v2/8AwSpdUDAYOOybLmxRwwCVzt2_itpVxq'),
    }),
    snapshotRegistry: '0xA084A7F49723E3cc5722E052CF7fce910E7C5Fe6',
    fromBlock: 20649148n,
  });

  console.log(entries);
}

console.log('ss');
(async () => {
  await test();
})();
