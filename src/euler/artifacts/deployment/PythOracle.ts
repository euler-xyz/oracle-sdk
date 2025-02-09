export default {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: '_pyth', type: 'address', internalType: 'address' },
        { name: '_base', type: 'address', internalType: 'address' },
        { name: '_quote', type: 'address', internalType: 'address' },
        { name: '_feedId', type: 'bytes32', internalType: 'bytes32' },
        { name: '_maxStaleness', type: 'uint256', internalType: 'uint256' },
        { name: '_maxConfWidth', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'base',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'feedId',
      inputs: [],
      outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getQuote',
      inputs: [
        { name: 'inAmount', type: 'uint256', internalType: 'uint256' },
        { name: 'base', type: 'address', internalType: 'address' },
        { name: 'quote', type: 'address', internalType: 'address' },
      ],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getQuotes',
      inputs: [
        { name: 'inAmount', type: 'uint256', internalType: 'uint256' },
        { name: 'base', type: 'address', internalType: 'address' },
        { name: 'quote', type: 'address', internalType: 'address' },
      ],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'maxConfWidth',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'maxStaleness',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'name',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'pyth',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'quote',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    { type: 'error', name: 'PriceOracle_InvalidAnswer', inputs: [] },
    { type: 'error', name: 'PriceOracle_InvalidConfiguration', inputs: [] },
    {
      type: 'error',
      name: 'PriceOracle_NotSupported',
      inputs: [
        { name: 'base', type: 'address', internalType: 'address' },
        { name: 'quote', type: 'address', internalType: 'address' },
      ],
    },
    { type: 'error', name: 'PriceOracle_Overflow', inputs: [] },
  ],
  bytecode: {
    object:
      '0x61018060405234801562000011575f80fd5b506040516200107c3803806200107c8339810160408190526200003491620001e5565b61038482111562000058576040516301a4c16560e21b815260040160405180910390fd5b600a8110806200006957506101f481115b1562000088576040516301a4c16560e21b815260040160405180910390fd5b6001600160a01b0380871660805285811660a081905290851660c05260e0849052610100839052610120829052620000c090620000e9565b60ff166101405260c051620000d590620000e9565b60ff1661016052506200029e945050505050565b5f63ffffffff826001600160a01b0316116200010757506012919050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290515f9182916001600160a01b038616916200014b9162000247565b5f60405180830381855afa9150503d805f811462000185576040519150601f19603f3d011682016040523d82523d5f602084013e6200018a565b606091505b50915091508180156200019e575080516020145b620001ab576012620001c1565b80806020019051810190620001c1919062000275565b949350505050565b80516001600160a01b0381168114620001e0575f80fd5b919050565b5f805f805f8060c08789031215620001fb575f80fd5b6200020687620001c9565b95506200021660208801620001c9565b94506200022660408801620001c9565b9350606087015192506080870151915060a087015190509295509295509295565b5f82515f5b818110156200026857602081860181015185830152016200024c565b505f920191825250919050565b5f6020828403121562000286575f80fd5b815160ff8116811462000297575f80fd5b9392505050565b60805160a05160c05160e05161010051610120516101405161016051610d516200032b5f395f8181610325015261036301525f6102ef01525f81816101c601526106cb01525f818161019f015261060101525f818161011e015261053801525f81816101ed01526102a301525f8181610153015261028101525f818161022701526105600152610d515ff3fe608060405234801561000f575f80fd5b506004361061009f575f3560e01c806387cf469611610072578063999b93af11610058578063999b93af146101e8578063ae68676c1461020f578063f98d06f014610222575f80fd5b806387cf46961461019a57806388df1eff146101c1575f80fd5b80630579e61f146100a357806306fdde03146100d05780634a643499146101195780635001f3b51461014e575b5f80fd5b6100b66100b136600461095f565b610249565b604080519283526020830191909152015b60405180910390f35b61010c6040518060400160405280600a81526020017f507974684f7261636c650000000000000000000000000000000000000000000081525081565b6040516100c79190610998565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100c7565b6101757f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c7565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b6101757f000000000000000000000000000000000000000000000000000000000000000081565b61014061021d36600461095f565b610263565b6101757f000000000000000000000000000000000000000000000000000000000000000081565b5f805f610257868686610279565b96879650945050505050565b5f61026f848484610279565b90505b9392505050565b5f806102c7847f0000000000000000000000000000000000000000000000000000000000000000857f00000000000000000000000000000000000000000000000000000000000000006103a9565b90505f6102d26104ed565b8051604082015191925067ffffffffffffffff16905f90610313907f0000000000000000000000000000000000000000000000000000000000000000610a2f565b90505f80825f0b13156103515761034a7f0000000000000000000000000000000000000000000000000000000000000000836107c4565b9050610390565b61038d61035d83610a6d565b610387907f0000000000000000000000000000000000000000000000000000000000000000610aa8565b5f6107c4565b90505b61039c89848388610835565b9998505050505050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561041057508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561041c57505f6104e5565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561048257508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561048f575060016104e5565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b604080516080810182525f8082526020820181905291810182905260608101919091526040517f96834ad30000000000000000000000000000000000000000000000000000000081527f000000000000000000000000000000000000000000000000000000000000000060048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906396834ad390602401608060405180830381865afa1580156105ba573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105de9190610ae9565b9050428160600151101561065f575f8160600151426105fd9190610b8d565b90507f0000000000000000000000000000000000000000000000000000000000000000811115610659576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506106af565b5f4282606001516106709190610b8d565b9050603c8111156106ad576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b5f815f015160070b13158061071557508051612710906106fa907f00000000000000000000000000000000000000000000000000000000000000009067ffffffffffffffff16610ba0565b6107049190610bb7565b816020015167ffffffffffffffff16115b1561074c576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec816040015160030b12806107885750600c816040015160030b135b156107bf576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b5f60268360ff1611806107da575060268260ff16115b15610811576040517f52a1f2a000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61081c83600a610d0d565b608061082984600a610d0d565b901b1790505b92915050565b5f6fffffffffffffffffffffffffffffffff8316608084901c83156108715761086887826108638986610ba0565b610881565b925050506104e5565b6108688761087f8885610ba0565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83850981811082019003806108cf57826108c65763ae47f7025f526004601cfd5b50819004610272565b8083116108e35763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146107bf575f80fd5b5f805f60608486031215610971575f80fd5b833592506109816020850161093c565b915061098f6040850161093c565b90509250925092565b5f602080835283518060208501525f5b818110156109c4578581018301518582016040015282016109a8565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82810b9082900b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808112607f8213171561082f5761082f610a02565b5f815f0b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808103610aa057610aa0610a02565b5f0392915050565b60ff818116838216019081111561082f5761082f610a02565b805167ffffffffffffffff811681146107bf575f80fd5b8051600381900b81146107bf575f80fd5b5f60808284031215610af9575f80fd5b6040516080810181811067ffffffffffffffff82111715610b41577f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6040528251600781900b8114610b55575f80fd5b8152610b6360208401610ac1565b6020820152610b7460408401610ad8565b6040820152606083015160608201528091505092915050565b8181038181111561082f5761082f610a02565b808202811582820484141761082f5761082f610a02565b5f82610bea577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b600181815b80851115610c4857817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610c2e57610c2e610a02565b80851615610c3b57918102915b93841c9390800290610bf4565b509250929050565b5f82610c5e5750600161082f565b81610c6a57505f61082f565b8160018114610c805760028114610c8a57610ca6565b600191505061082f565b60ff841115610c9b57610c9b610a02565b50506001821b61082f565b5060208310610133831016604e8410600b8410161715610cc9575081810a61082f565b610cd38383610bef565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610d0557610d05610a02565b029392505050565b5f61027260ff841683610c5056fea2646970667358221220f9155b7907a46982476065d75a7f4cc5920c9c43a6399479f847b6f11e48bd6864736f6c63430008180033',
    sourceMap:
      '803:5978:81:-:0;;;3643:746;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1097:10;3832:13;:41;3828:120;;;3896:41;;-1:-1:-1;;;3896:41:81;;;;;;;;;;;3828:120;1260:2;3961:13;:42;:88;;;;1413:3;4007:13;:42;3961:88;3957:167;;;4072:41;;-1:-1:-1;;;4072:41:81;;;;;;;;;;;3957:167;-1:-1:-1;;;;;4134:12:81;;;;;4156;;;;;;;4178:14;;;;;4202:16;;;;4228:28;;;;4266;;;;4319:18;;:12;:18::i;:::-;4304:33;;;;4376:5;;4363:19;;:12;:19::i;:::-;4347:35;;;;-1:-1:-1;803:5978:81;;-1:-1:-1;;;;;803:5978:81;1798:316:66;1858:5;709:10;1887:5;-1:-1:-1;;;;;1879:40:66;;1875:55;;-1:-1:-1;1928:2:66;;1798:316;-1:-1:-1;1798:316:66:o;1875:55::-;1993:35;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1993:35:66;-1:-1:-1;;;1993:35:66;;;1976:53;;1941:12;;;;-1:-1:-1;;;;;1976:16:66;;;:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1940:89;;;;2046:7;:28;;;;;2057:4;:11;2072:2;2057:17;2046:28;:61;;2105:2;2046:61;;;2088:4;2077:25;;;;;;;;;;;;:::i;:::-;2039:68;1798:316;-1:-1:-1;;;;1798:316:66:o;14:177:456:-;93:13;;-1:-1:-1;;;;;135:31:456;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:564::-;311:6;319;327;335;343;351;404:3;392:9;383:7;379:23;375:33;372:53;;;421:1;418;411:12;372:53;444:40;474:9;444:40;:::i;:::-;434:50;;503:49;548:2;537:9;533:18;503:49;:::i;:::-;493:59;;571:49;616:2;605:9;601:18;571:49;:::i;:::-;561:59;;660:2;649:9;645:18;639:25;629:35;;704:3;693:9;689:19;683:26;673:36;;749:3;738:9;734:19;728:26;718:36;;196:564;;;;;;;;:::o;765:412::-;894:3;932:6;926:13;957:1;967:129;981:6;978:1;975:13;967:129;;;1079:4;1063:14;;;1059:25;;1053:32;1040:11;;;1033:53;996:12;967:129;;;-1:-1:-1;1151:1:456;1115:16;;1140:13;;;-1:-1:-1;1115:16:456;765:412;-1:-1:-1;765:412:456:o;1182:273::-;1250:6;1303:2;1291:9;1282:7;1278:23;1274:32;1271:52;;;1319:1;1316;1309:12;1271:52;1351:9;1345:16;1401:4;1394:5;1390:16;1383:5;1380:27;1370:55;;1421:1;1418;1411:12;1370:55;1444:5;1182:273;-1:-1:-1;;;1182:273:456:o;:::-;803:5978:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      '0x608060405234801561000f575f80fd5b506004361061009f575f3560e01c806387cf469611610072578063999b93af11610058578063999b93af146101e8578063ae68676c1461020f578063f98d06f014610222575f80fd5b806387cf46961461019a57806388df1eff146101c1575f80fd5b80630579e61f146100a357806306fdde03146100d05780634a643499146101195780635001f3b51461014e575b5f80fd5b6100b66100b136600461095f565b610249565b604080519283526020830191909152015b60405180910390f35b61010c6040518060400160405280600a81526020017f507974684f7261636c650000000000000000000000000000000000000000000081525081565b6040516100c79190610998565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100c7565b6101757f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c7565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b6101757f000000000000000000000000000000000000000000000000000000000000000081565b61014061021d36600461095f565b610263565b6101757f000000000000000000000000000000000000000000000000000000000000000081565b5f805f610257868686610279565b96879650945050505050565b5f61026f848484610279565b90505b9392505050565b5f806102c7847f0000000000000000000000000000000000000000000000000000000000000000857f00000000000000000000000000000000000000000000000000000000000000006103a9565b90505f6102d26104ed565b8051604082015191925067ffffffffffffffff16905f90610313907f0000000000000000000000000000000000000000000000000000000000000000610a2f565b90505f80825f0b13156103515761034a7f0000000000000000000000000000000000000000000000000000000000000000836107c4565b9050610390565b61038d61035d83610a6d565b610387907f0000000000000000000000000000000000000000000000000000000000000000610aa8565b5f6107c4565b90505b61039c89848388610835565b9998505050505050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561041057508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561041c57505f6104e5565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561048257508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561048f575060016104e5565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b604080516080810182525f8082526020820181905291810182905260608101919091526040517f96834ad30000000000000000000000000000000000000000000000000000000081527f000000000000000000000000000000000000000000000000000000000000000060048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906396834ad390602401608060405180830381865afa1580156105ba573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105de9190610ae9565b9050428160600151101561065f575f8160600151426105fd9190610b8d565b90507f0000000000000000000000000000000000000000000000000000000000000000811115610659576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506106af565b5f4282606001516106709190610b8d565b9050603c8111156106ad576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b5f815f015160070b13158061071557508051612710906106fa907f00000000000000000000000000000000000000000000000000000000000000009067ffffffffffffffff16610ba0565b6107049190610bb7565b816020015167ffffffffffffffff16115b1561074c576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec816040015160030b12806107885750600c816040015160030b135b156107bf576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b5f60268360ff1611806107da575060268260ff16115b15610811576040517f52a1f2a000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61081c83600a610d0d565b608061082984600a610d0d565b901b1790505b92915050565b5f6fffffffffffffffffffffffffffffffff8316608084901c83156108715761086887826108638986610ba0565b610881565b925050506104e5565b6108688761087f8885610ba0565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83850981811082019003806108cf57826108c65763ae47f7025f526004601cfd5b50819004610272565b8083116108e35763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146107bf575f80fd5b5f805f60608486031215610971575f80fd5b833592506109816020850161093c565b915061098f6040850161093c565b90509250925092565b5f602080835283518060208501525f5b818110156109c4578581018301518582016040015282016109a8565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82810b9082900b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808112607f8213171561082f5761082f610a02565b5f815f0b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808103610aa057610aa0610a02565b5f0392915050565b60ff818116838216019081111561082f5761082f610a02565b805167ffffffffffffffff811681146107bf575f80fd5b8051600381900b81146107bf575f80fd5b5f60808284031215610af9575f80fd5b6040516080810181811067ffffffffffffffff82111715610b41577f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6040528251600781900b8114610b55575f80fd5b8152610b6360208401610ac1565b6020820152610b7460408401610ad8565b6040820152606083015160608201528091505092915050565b8181038181111561082f5761082f610a02565b808202811582820484141761082f5761082f610a02565b5f82610bea577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b600181815b80851115610c4857817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610c2e57610c2e610a02565b80851615610c3b57918102915b93841c9390800290610bf4565b509250929050565b5f82610c5e5750600161082f565b81610c6a57505f61082f565b8160018114610c805760028114610c8a57610ca6565b600191505061082f565b60ff841115610c9b57610c9b610a02565b50506001821b61082f565b5060208310610133831016604e8410600b8410161715610cc9575081810a61082f565b610cd38383610bef565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610d0557610d05610a02565b029392505050565b5f61027260ff841683610c5056fea2646970667358221220f9155b7907a46982476065d75a7f4cc5920c9c43a6399479f847b6f11e48bd6864736f6c63430008180033',
    sourceMap:
      '803:5978:81:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1003:215:66;;;;;;:::i;:::-;;:::i;:::-;;;;722:25:456;;;778:2;763:18;;756:34;;;;695:18;1003:215:66;;;;;;;;1821:42:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;2297:31::-;;;;;;;;1559:25:456;;;1547:2;1532:18;2297:31:81;1413:177:456;2031:29:81;;;;;;;;1771:42:456;1759:55;;;1741:74;;1729:2;1714:18;2031:29:81;1595:226:456;2388:37:81;;;;;2565;;;;;2140:30;;;;;759:153:66;;;;;;:::i;:::-;;:::i;1923:29:81:-;;;;;1003:215:66;1092:7;1101;1120:17;1140:32;1150:8;1160:4;1166:5;1140:9;:32::i;:::-;1120:52;;;-1:-1:-1;1003:215:66;-1:-1:-1;;;;;1003:215:66:o;759:153::-;847:7;873:32;883:8;893:4;899:5;873:9;:32::i;:::-;866:39;;759:153;;;;;;:::o;4677:709:81:-;4777:7;4796:12;4811:59;4843:5;4850:4;4856:6;4864:5;4811:31;:59::i;:::-;4796:74;;4881:36;4920:19;:17;:19::i;:::-;4981:17;;5056:16;;;;4881:58;;-1:-1:-1;4966:34:81;;;4950:13;;5030:43;;5035:12;5030:43;:::i;:::-;5010:63;;5084:11;5124:1;5109:12;:16;;;5105:201;;;5149:51;5165:13;5186:12;5149:15;:51::i;:::-;5141:59;;5105:201;;;5239:56;5277:13;5278:12;5277:13;:::i;:::-;5255:36;;:13;:36;:::i;:::-;5293:1;5239:15;:56::i;:::-;5231:64;;5105:201;5322:57;5347:8;5357:5;5364;5371:7;5322:24;:57::i;:::-;5315:64;4677:709;-1:-1:-1;;;;;;;;;4677:709:81:o;1829:368:89:-;1974:4;2011;1998:17;;:9;:17;;;:40;;;;;2033:5;2019:19;;:10;:19;;;1998:40;1994:58;;;-1:-1:-1;2047:5:89;2040:12;;1994:58;2079:5;2066:18;;:9;:18;;;:40;;;;;2102:4;2088:18;;:10;:18;;;2066:40;2062:57;;;-1:-1:-1;2115:4:89;2108:11;;2062:57;2136:54;;;;;3023:42:456;3092:15;;;2136:54:89;;;3074:34:456;3144:15;;3124:18;;;3117:43;2986:18;;2136:54:89;;;;;;;1829:368;;;;;;;:::o;5701:1078:81:-;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5818:34:81;;;;;5845:6;5818:34;;;1559:25:456;5789:26:81;;5824:4;5818:26;;;;;1532:18:456;;5818:34:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5789:63;;5883:15;5867:1;:13;;;:31;5863:474;;;5968:17;6006:1;:13;;;5988:15;:31;;;;:::i;:::-;5968:51;;6049:12;6037:9;:24;6033:71;;;6070:34;;;;;;;;;;;;;;6033:71;5900:215;5863:474;;;6189:17;6225:15;6209:1;:13;;;:31;;;;:::i;:::-;6189:51;;964:9;6258;:25;6254:72;;;6292:34;;;;;;;;;;;;;;6254:72;6121:216;5863:474;6440:1;6429;:7;;;:12;;;;:70;;;-1:-1:-1;6461:7:81;;1776:6;;6454:30;;6472:12;;6454:30;;;:::i;:::-;:45;;;;:::i;:::-;6445:1;:6;;;:54;;;6429:70;6425:142;;;6522:34;;;;;;;;;;;;;;6425:142;1536:3;6641:1;:6;;;:21;;;:46;;;;1658:2;6666:1;:6;;;:21;;;6641:46;6637:118;;;6710:34;;;;;;;;;;;;;;6637:118;6771:1;5701:1078;-1:-1:-1;5701:1078:81:o;1114:305:89:-;1192:5;727:2;1213:13;:28;;;:59;;;;727:2;1245:12;:27;;;1213:59;1209:126;;;1295:29;;;;;;;;;;;;;;1209:126;1392:19;1398:13;1392:2;:19;:::i;:::-;1385:3;1363:18;1369:12;1363:2;:18;:::i;:::-;:25;;1362:49;1344:68;;1114:305;;;;;:::o;3090:645::-;3224:7;470:66;3268:38;;3359:3;3336:26;;;3372:357;;;;3471:73;3500:8;3510:9;3521:22;3534:9;3521:10;:22;:::i;:::-;3471:28;:73::i;:::-;3464:80;;;;;;3372:357;3645:73;3674:8;3684:22;3697:9;3684:10;:22;:::i;:::-;3708:9;20285:3569:52;20897:9;;;20995:6;20904:1;20901;20982:20;21110:14;;;21098:27;;21090:36;;;21211:278;;21257:1;21247:153;;21299:10;21293:4;21286:24;21373:4;21367;21360:18;21247:153;-1:-1:-1;21431:14:52;;;21466:5;;21211:278;21610:2;21607:1;21604:9;21594:149;;21650:10;21644:4;21637:24;21720:4;21714;21707:18;21594:149;22000:1;21997;21994;21987:15;22148:1;22144:9;;;22137:17;;22239:9;;;;;23559:13;;;23551:22;;;23583:9;;;;23579:17;;;23598:1;23575:25;23547:54;23635:14;;23631:22;23515:164;22614:1;22621;22617:9;;22610:17;;22896:11;;;22889:19;;22880:29;22969:11;;;22962:19;;22953:29;23043:11;;;23036:19;;23027:29;23117:11;;;23110:19;;23101:29;23191:11;;;23184:19;;23175:29;23767:11;;;23760:19;;;23751:29;23273:529;20285:3569;;;;;:::o;14:196:456:-;82:20;;142:42;131:54;;121:65;;111:93;;200:1;197;190:12;215:328;292:6;300;308;361:2;349:9;340:7;336:23;332:32;329:52;;;377:1;374;367:12;329:52;413:9;400:23;390:33;;442:38;476:2;465:9;461:18;442:38;:::i;:::-;432:48;;499:38;533:2;522:9;518:18;499:38;:::i;:::-;489:48;;215:328;;;;;:::o;801:607::-;913:4;942:2;971;960:9;953:21;1003:6;997:13;1046:6;1041:2;1030:9;1026:18;1019:34;1071:1;1081:140;1095:6;1092:1;1089:13;1081:140;;;1190:14;;;1186:23;;1180:30;1156:17;;;1175:2;1152:26;1145:66;1110:10;;1081:140;;;1085:3;1270:1;1265:2;1256:6;1245:9;1241:22;1237:31;1230:42;1399:2;1329:66;1324:2;1316:6;1312:15;1308:88;1297:9;1293:104;1289:113;1281:121;;;;801:607;;;;:::o;2008:184::-;2060:77;2057:1;2050:88;2157:4;2154:1;2147:15;2181:4;2178:1;2171:15;2197:242;2234:4;2283:16;;;2265;;;;2261:39;2325:66;2315:77;;2404:4;2394:15;;2312:98;2309:124;;;2413:18;;:::i;2444:237::-;2477:3;2524:5;2521:1;2510:20;2554:66;2545:7;2542:79;2539:105;;2624:18;;:::i;:::-;2664:1;2660:15;;2444:237;-1:-1:-1;;2444:237:456:o;2686:148::-;2774:4;2753:12;;;2767;;;2749:31;;2792:13;;2789:39;;;2808:18;;:::i;3171:175::-;3249:13;;3302:18;3291:30;;3281:41;;3271:69;;3336:1;3333;3326:12;3351:164;3428:13;;3481:1;3470:20;;;3460:31;;3450:59;;3505:1;3502;3495:12;3520:914;3614:6;3667:3;3655:9;3646:7;3642:23;3638:33;3635:53;;;3684:1;3681;3674:12;3635:53;3717:2;3711:9;3759:3;3751:6;3747:16;3829:6;3817:10;3814:22;3793:18;3781:10;3778:34;3775:62;3772:242;;;3870:77;3867:1;3860:88;3971:4;3968:1;3961:15;3999:4;3996:1;3989:15;3772:242;4030:2;4023:22;4067:16;;4123:1;4112:20;;;4102:31;;4092:59;;4147:1;4144;4137:12;4092:59;4160:21;;4214:48;4258:2;4243:18;;4214:48;:::i;:::-;4209:2;4201:6;4197:15;4190:73;4296:47;4339:2;4328:9;4324:18;4296:47;:::i;:::-;4291:2;4283:6;4279:15;4272:72;4398:2;4387:9;4383:18;4377:25;4372:2;4364:6;4360:15;4353:50;4422:6;4412:16;;;3520:914;;;;:::o;4439:128::-;4506:9;;;4527:11;;;4524:37;;;4541:18;;:::i;4572:168::-;4645:9;;;4676;;4693:15;;;4687:22;;4673:37;4663:71;;4714:18;;:::i;4745:274::-;4785:1;4811;4801:189;;4846:77;4843:1;4836:88;4947:4;4944:1;4937:15;4975:4;4972:1;4965:15;4801:189;-1:-1:-1;5004:9:456;;4745:274::o;5024:476::-;5113:1;5150:5;5113:1;5164:330;5185:7;5175:8;5172:21;5164:330;;;5304:4;5236:66;5232:77;5226:4;5223:87;5220:113;;;5313:18;;:::i;:::-;5363:7;5353:8;5349:22;5346:55;;;5383:16;;;;5346:55;5462:22;;;;5422:15;;;;5164:330;;;5168:3;5024:476;;;;;:::o;5505:866::-;5554:5;5584:8;5574:80;;-1:-1:-1;5625:1:456;5639:5;;5574:80;5673:4;5663:76;;-1:-1:-1;5710:1:456;5724:5;;5663:76;5755:4;5773:1;5768:59;;;;5841:1;5836:130;;;;5748:218;;5768:59;5798:1;5789:10;;5812:5;;;5836:130;5873:3;5863:8;5860:17;5857:43;;;5880:18;;:::i;:::-;-1:-1:-1;;5936:1:456;5922:16;;5951:5;;5748:218;;6050:2;6040:8;6037:16;6031:3;6025:4;6022:13;6018:36;6012:2;6002:8;5999:16;5994:2;5988:4;5985:12;5981:35;5978:77;5975:159;;;-1:-1:-1;6087:19:456;;;6119:5;;5975:159;6166:34;6191:8;6185:4;6166:34;:::i;:::-;6296:6;6228:66;6224:79;6215:7;6212:92;6209:118;;;6307:18;;:::i;:::-;6345:20;;5505:866;-1:-1:-1;;;5505:866:456:o;6376:140::-;6434:5;6463:47;6504:4;6494:8;6490:19;6484:4;6463:47;:::i',
    linkReferences: {},
    immutableReferences: {
      '20690': [
        { start: 551, length: 32 },
        { start: 1376, length: 32 },
      ],
      '20693': [
        { start: 339, length: 32 },
        { start: 641, length: 32 },
      ],
      '20696': [
        { start: 493, length: 32 },
        { start: 675, length: 32 },
      ],
      '20699': [
        { start: 286, length: 32 },
        { start: 1336, length: 32 },
      ],
      '20702': [
        { start: 415, length: 32 },
        { start: 1537, length: 32 },
      ],
      '20705': [
        { start: 454, length: 32 },
        { start: 1739, length: 32 },
      ],
      '20708': [{ start: 751, length: 32 }],
      '20711': [
        { start: 805, length: 32 },
        { start: 867, length: 32 },
      ],
    },
  },
  methodIdentifiers: {
    'base()': '5001f3b5',
    'feedId()': '4a643499',
    'getQuote(uint256,address,address)': 'ae68676c',
    'getQuotes(uint256,address,address)': '0579e61f',
    'maxConfWidth()': '88df1eff',
    'maxStaleness()': '87cf4696',
    'name()': '06fdde03',
    'pyth()': 'f98d06f0',
    'quote()': '999b93af',
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_pyth","type":"address"},{"internalType":"address","name":"_base","type":"address"},{"internalType":"address","name":"_quote","type":"address"},{"internalType":"bytes32","name":"_feedId","type":"bytes32"},{"internalType":"uint256","name":"_maxStaleness","type":"uint256"},{"internalType":"uint256","name":"_maxConfWidth","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"PriceOracle_InvalidAnswer","type":"error"},{"inputs":[],"name":"PriceOracle_InvalidConfiguration","type":"error"},{"inputs":[{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"PriceOracle_NotSupported","type":"error"},{"inputs":[],"name":"PriceOracle_Overflow","type":"error"},{"inputs":[],"name":"base","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feedId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxConfWidth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStaleness","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pyth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"quote","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"author":"Euler Labs (https://www.eulerlabs.com/)","custom:security-contact":"security@euler.xyz","details":"Integration Note: Pyth is a pull-based oracle which requires price updates to be pushed by the user. Before calling `getQuote*` dispatch a call `updatePriceFeeds` on the Pyth oracle proxy to refresh the price. This is best done atomically via a multicall contract such as the Ethereum Vault Connector (EVC).","errors":{"PriceOracle_NotSupported(address,address)":[{"params":{"base":"The address of the base asset.","quote":"The address of the quote asset."}}]},"kind":"dev","methods":{"constructor":{"details":"Note: A high confidence interval indicates market volatility or Pyth consensus instability. Consider a lower `_maxConfWidth` for highly-correlated pairs and a higher value for uncorrelated pairs. Pairs with few data sources and low liquidity are more prone to volatility spikes and consensus instability.","params":{"_base":"The address of the base asset corresponding to the feed.","_feedId":"The id of the feed in the Pyth network.","_maxConfWidth":"The maximum width of the confidence interval in basis points.","_maxStaleness":"The maximum allowed age of the price.","_pyth":"The address of the Pyth oracle proxy.","_quote":"The address of the quote asset corresponding to the feed."}},"getQuote(uint256,address,address)":{"params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` that is equivalent to `inAmount` of `base`."}},"getQuotes(uint256,address,address)":{"details":"Does not support true bid/ask pricing.","params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` you would get for selling `inAmount` of `base`.","_1":"The amount of `quote` you would spend for buying `inAmount` of `base`."}}},"stateVariables":{"BASIS_POINTS":{"details":"The denominator for basis points values (maxConfWidth)."},"MAX_CONF_WIDTH_LOWER_BOUND":{"details":"Equal to 0.1%."},"MAX_CONF_WIDTH_UPPER_BOUND":{"details":"Equal to 5%."},"MAX_EXPONENT":{"details":"The largest PythStruct exponent that the oracle can handle."},"MIN_EXPONENT":{"details":"The smallest PythStruct exponent that the oracle can handle."},"baseDecimals":{"details":"Used for correcting for the decimals of base and quote."},"feedId":{"details":"See https://pyth.network/developers/price-feed-ids."},"maxConfWidth":{"details":"Note: this value is in basis points i.e. 500 = 5%."},"name":{"return":"The name of the oracle.","returns":{"_0":"The name of the oracle."}},"quoteDecimals":{"details":"Used for correcting for the decimals of base and quote."}},"title":"PythOracle","version":1},"userdoc":{"errors":{"PriceOracle_InvalidAnswer()":[{"notice":"The external feed returned an invalid answer."}],"PriceOracle_InvalidConfiguration()":[{"notice":"The configuration parameters for the PriceOracle are invalid."}],"PriceOracle_NotSupported(address,address)":[{"notice":"The base/quote path is not supported."}],"PriceOracle_Overflow()":[{"notice":"The quote cannot be completed due to overflow."}]},"kind":"user","methods":{"base()":{"notice":"The address of the base asset corresponding to the feed."},"constructor":{"notice":"Deploy a PythOracle."},"feedId()":{"notice":"The id of the feed in the Pyth network."},"getQuote(uint256,address,address)":{"notice":"One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread."},"getQuotes(uint256,address,address)":{"notice":"Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token."},"maxConfWidth()":{"notice":"The maximum allowed width of the confidence interval."},"maxStaleness()":{"notice":"The maximum allowed age of the price."},"name()":{"notice":"Get the name of the oracle."},"pyth()":{"notice":"The address of the Pyth oracle proxy."},"quote()":{"notice":"The address of the quote asset corresponding to the feed."}},"notice":"PriceOracle adapter for Pyth pull-based price feeds.","version":1}},"settings":{"compilationTarget":{"lib/euler-price-oracle/src/adapter/pyth/PythOracle.sol":"PythOracle"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":20000},"remappings":[":@axiom-crypto/v2-periphery/=lib/euler-price-oracle/lib/axiom-std/lib/axiom-v2-periphery/src/",":@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/=lib/openzeppelin-contracts/contracts/",":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":@pendle/core-v2/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":@pyth/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":@redstone/evm-connector/=lib/euler-price-oracle/lib/redstone-oracles-monorepo/packages/evm-connector/contracts/",":@solady/=lib/euler-price-oracle/lib/solady/src/",":@uniswap/v3-core/=lib/euler-price-oracle/lib/v3-core/",":@uniswap/v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/",":ERC4626/=lib/euler-earn/lib/properties/lib/ERC4626/contracts/",":axiom-std/=lib/euler-price-oracle/lib/axiom-std/src/",":axiom-v2-periphery/=lib/euler-price-oracle/lib/axiom-v2-periphery/src/",":crytic-properties/=lib/euler-earn/lib/properties/contracts/",":ds-test/=lib/ethereum-vault-connector/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",":ethereum-vault-connector/=lib/ethereum-vault-connector/src/",":euler-earn/=lib/euler-earn/src/",":euler-price-oracle-test/=lib/euler-price-oracle/test/",":euler-price-oracle/=lib/euler-price-oracle/src/",":euler-vault-kit/=lib/euler-vault-kit/src/",":evc/=lib/ethereum-vault-connector/src/",":evk-test/=lib/euler-vault-kit/test/",":evk/=lib/euler-vault-kit/src/",":fee-flow/=lib/fee-flow/src/",":forge-gas-snapshot/=lib/euler-vault-kit/lib/permit2/lib/forge-gas-snapshot/src/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts-upgradeable/lib/halmos-cheatcodes/src/",":native-token-transfers/=lib/native-token-transfers/evm/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":openzeppelin-contracts/=lib/openzeppelin-contracts/contracts/",":openzeppelin/=lib/ethereum-vault-connector/lib/openzeppelin-contracts/contracts/",":pendle-core-v2-public/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":permit2/=lib/euler-vault-kit/lib/permit2/",":properties/=lib/euler-earn/lib/properties/contracts/",":pyth-sdk-solidity/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":redstone-oracles-monorepo/=lib/euler-price-oracle/lib/",":reward-streams/=lib/reward-streams/src/",":solady/=lib/euler-price-oracle/lib/solady/src/",":solidity-bytes-utils/=lib/native-token-transfers/evm/lib/solidity-bytes-utils/contracts/",":solmate/=lib/fee-flow/lib/solmate/src/",":v3-core/=lib/euler-price-oracle/lib/v3-core/contracts/",":v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/contracts/",":wormhole-solidity-sdk/=lib/native-token-transfers/evm/lib/wormhole-solidity-sdk/src/","lib/euler-price-oracle:@openzeppelin/contracts/=lib/euler-price-oracle/lib/openzeppelin-contracts/contracts/","lib/native-token-transfers/evm:openzeppelin-contracts/contracts/=lib/native-token-transfers/evm/lib/openzeppelin-contracts/contracts/"]},"sources":{"lib/euler-price-oracle/lib/pyth-sdk-solidity/IPyth.sol":{"keccak256":"0x949c65c65fea0578c09a6fc068e09ed1165adede2c835984cefcb25d76de1de2","license":"Apache-2.0","urls":["bzz-raw://4d7cb071e08e81bb8b113a928f4c2d2b3cdf950ad64c6c7003ea3d874163ca77","dweb:/ipfs/QmRbQchPxRTBMHi7WzLb8XnMGzPDQcWhu7i2u5naUsCRoZ"]},"lib/euler-price-oracle/lib/pyth-sdk-solidity/IPythEvents.sol":{"keccak256":"0x048a35526c2e77d107d43ba336f1dcf31f64cef25ba429ae1f7a0fbc11c23320","license":"Apache-2.0","urls":["bzz-raw://b75be4c3643b22305995aba71fc92146dbf51fa82d2f9728c515d7749b32dca3","dweb:/ipfs/QmRby4XA9jJQGhxoJ16BTUDuU7BzLFfadbfTgBiQsDgNyZ"]},"lib/euler-price-oracle/lib/pyth-sdk-solidity/PythStructs.sol":{"keccak256":"0x95ff0a6d64517348ef604b8bcf246b561a9445d7e607b8f48491c617cfda9b65","license":"Apache-2.0","urls":["bzz-raw://fb7f4ffe03be7379d3833c5946e38153de26aef4a4da0323a1ec603787de9eb7","dweb:/ipfs/QmW4WkkLPGjDJrLrW4mYfxtFh8e9KAcPhrnNdxPQsfkS6t"]},"lib/euler-price-oracle/lib/solady/src/utils/FixedPointMathLib.sol":{"keccak256":"0xd890a3c47fd08d2d663890af4561045edc531ca1d7687bbf9dd7a2d1f15f1a3e","license":"MIT","urls":["bzz-raw://b8a4777858cb1c9ffa53f9c1f115d6e9c9af547cf02e06ab9e175da373b46da4","dweb:/ipfs/QmQSKB7DZnatj6eJtugzUvKxrxFrdzFwRMJxQpsTbtup1P"]},"lib/euler-price-oracle/src/adapter/BaseAdapter.sol":{"keccak256":"0x1ca090708d2c03edd58fdb6c22638fce41e93c5f4021b382940d088ae49c81e3","license":"GPL-2.0-or-later","urls":["bzz-raw://d00bbb80bdb34321bea2055bcb1364cd860e7662ec513254ffa61698c09526b4","dweb:/ipfs/QmeCE976ZZy6oLCP2emgBjvx8vJxKvoEJ4yF65QKLjQJDo"]},"lib/euler-price-oracle/src/adapter/pyth/PythOracle.sol":{"keccak256":"0xa35eec700de63102d21b4406542e57bec3e7f84aff9055ed80c6a8dddad3928f","license":"GPL-2.0-or-later","urls":["bzz-raw://d24a039ded7ffc238d17b76b71a3d88ac022cb8faff4c8506c0efa49f1d2175d","dweb:/ipfs/QmavEgyQxohqzNUWfgaxDAqRsvjFVRdAhNKSQdVYEzQyeY"]},"lib/euler-price-oracle/src/interfaces/IPriceOracle.sol":{"keccak256":"0x03567dd4084dc74a9e2f9eeffce4d9047989b0d2122820716c3bc75891484308","license":"GPL-2.0-or-later","urls":["bzz-raw://23965a79475c85a0a8a3a137a76424f60debd9e592bc9127d463392fad7df30f","dweb:/ipfs/QmPc1bV3kZ3ynLGTqG6xRbZ3E5AstYdfipXbysSqYGhJYA"]},"lib/euler-price-oracle/src/lib/Errors.sol":{"keccak256":"0x2551662bcef8d4a5cb7cdc8cd404f28c726af1bcfe7ef371b22d53322a932698","license":"GPL-2.0-or-later","urls":["bzz-raw://1641b99e0c907950448d62205fc23b5550c44899ba8c0bc0274a6b0a501981b9","dweb:/ipfs/QmZvDhw4Ao3m8jRjNjT8Xq8imCPecJyytUTtCUjt5RoB4v"]},"lib/euler-price-oracle/src/lib/ScaleUtils.sol":{"keccak256":"0x9bd1ac81aab20c82eacbdda286996571530cdb1505d74299b56fd51fef0be9f8","license":"GPL-2.0-or-later","urls":["bzz-raw://5be0485ea15aff9b321012c1a1102425b7c63375d4a378d2a81ae55f60038bf3","dweb:/ipfs/QmZwg2KtMWzjc6PMxJ98iTYcEVj8Bbs8YdNQNNHRq3pwfM"]},"lib/forge-std/src/interfaces/IERC20.sol":{"keccak256":"0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947","license":"MIT","urls":["bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7","dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9"]}},"version":1}',
  metadata: {
    compiler: { version: '0.8.24+commit.e11b9ed9' },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            { internalType: 'address', name: '_pyth', type: 'address' },
            { internalType: 'address', name: '_base', type: 'address' },
            { internalType: 'address', name: '_quote', type: 'address' },
            { internalType: 'bytes32', name: '_feedId', type: 'bytes32' },
            { internalType: 'uint256', name: '_maxStaleness', type: 'uint256' },
            { internalType: 'uint256', name: '_maxConfWidth', type: 'uint256' },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        { inputs: [], type: 'error', name: 'PriceOracle_InvalidAnswer' },
        { inputs: [], type: 'error', name: 'PriceOracle_InvalidConfiguration' },
        {
          inputs: [
            { internalType: 'address', name: 'base', type: 'address' },
            { internalType: 'address', name: 'quote', type: 'address' },
          ],
          type: 'error',
          name: 'PriceOracle_NotSupported',
        },
        { inputs: [], type: 'error', name: 'PriceOracle_Overflow' },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'base',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'feedId',
          outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        },
        {
          inputs: [
            { internalType: 'uint256', name: 'inAmount', type: 'uint256' },
            { internalType: 'address', name: 'base', type: 'address' },
            { internalType: 'address', name: 'quote', type: 'address' },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'getQuote',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        },
        {
          inputs: [
            { internalType: 'uint256', name: 'inAmount', type: 'uint256' },
            { internalType: 'address', name: 'base', type: 'address' },
            { internalType: 'address', name: 'quote', type: 'address' },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'getQuotes',
          outputs: [
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'uint256', name: '', type: 'uint256' },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'maxConfWidth',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'maxStaleness',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'name',
          outputs: [{ internalType: 'string', name: '', type: 'string' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'pyth',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'quote',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
        },
      ],
      devdoc: {
        kind: 'dev',
        methods: {
          constructor: {
            details:
              'Note: A high confidence interval indicates market volatility or Pyth consensus instability. Consider a lower `_maxConfWidth` for highly-correlated pairs and a higher value for uncorrelated pairs. Pairs with few data sources and low liquidity are more prone to volatility spikes and consensus instability.',
            params: {
              _base: 'The address of the base asset corresponding to the feed.',
              _feedId: 'The id of the feed in the Pyth network.',
              _maxConfWidth: 'The maximum width of the confidence interval in basis points.',
              _maxStaleness: 'The maximum allowed age of the price.',
              _pyth: 'The address of the Pyth oracle proxy.',
              _quote: 'The address of the quote asset corresponding to the feed.',
            },
          },
          'getQuote(uint256,address,address)': {
            params: {
              base: 'The token that is being priced.',
              inAmount: 'The amount of `base` to convert.',
              quote: 'The token that is the unit of account.',
            },
            returns: {
              _0: 'The amount of `quote` that is equivalent to `inAmount` of `base`.',
            },
          },
          'getQuotes(uint256,address,address)': {
            details: 'Does not support true bid/ask pricing.',
            params: {
              base: 'The token that is being priced.',
              inAmount: 'The amount of `base` to convert.',
              quote: 'The token that is the unit of account.',
            },
            returns: {
              _0: 'The amount of `quote` you would get for selling `inAmount` of `base`.',
              _1: 'The amount of `quote` you would spend for buying `inAmount` of `base`.',
            },
          },
        },
        version: 1,
      },
      userdoc: {
        kind: 'user',
        methods: {
          'base()': {
            notice: 'The address of the base asset corresponding to the feed.',
          },
          constructor: { notice: 'Deploy a PythOracle.' },
          'feedId()': { notice: 'The id of the feed in the Pyth network.' },
          'getQuote(uint256,address,address)': {
            notice:
              'One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread.',
          },
          'getQuotes(uint256,address,address)': {
            notice:
              'Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token.',
          },
          'maxConfWidth()': {
            notice: 'The maximum allowed width of the confidence interval.',
          },
          'maxStaleness()': { notice: 'The maximum allowed age of the price.' },
          'name()': { notice: 'Get the name of the oracle.' },
          'pyth()': { notice: 'The address of the Pyth oracle proxy.' },
          'quote()': {
            notice: 'The address of the quote asset corresponding to the feed.',
          },
        },
        version: 1,
      },
    },
    settings: {
      remappings: [
        '@axiom-crypto/v2-periphery/=lib/euler-price-oracle/lib/axiom-std/lib/axiom-v2-periphery/src/',
        '@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/',
        '@openzeppelin/=lib/openzeppelin-contracts/contracts/',
        '@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/',
        '@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/',
        '@pendle/core-v2/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/',
        '@pyth/=lib/euler-price-oracle/lib/pyth-sdk-solidity/',
        '@redstone/evm-connector/=lib/euler-price-oracle/lib/redstone-oracles-monorepo/packages/evm-connector/contracts/',
        '@solady/=lib/euler-price-oracle/lib/solady/src/',
        '@uniswap/v3-core/=lib/euler-price-oracle/lib/v3-core/',
        '@uniswap/v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/',
        'ERC4626/=lib/euler-earn/lib/properties/lib/ERC4626/contracts/',
        'axiom-std/=lib/euler-price-oracle/lib/axiom-std/src/',
        'axiom-v2-periphery/=lib/euler-price-oracle/lib/axiom-v2-periphery/src/',
        'crytic-properties/=lib/euler-earn/lib/properties/contracts/',
        'ds-test/=lib/ethereum-vault-connector/lib/forge-std/lib/ds-test/src/',
        'erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/',
        'ethereum-vault-connector/=lib/ethereum-vault-connector/src/',
        'euler-earn/=lib/euler-earn/src/',
        'euler-price-oracle-test/=lib/euler-price-oracle/test/',
        'euler-price-oracle/=lib/euler-price-oracle/src/',
        'euler-vault-kit/=lib/euler-vault-kit/src/',
        'evc/=lib/ethereum-vault-connector/src/',
        'evk-test/=lib/euler-vault-kit/test/',
        'evk/=lib/euler-vault-kit/src/',
        'fee-flow/=lib/fee-flow/src/',
        'forge-gas-snapshot/=lib/euler-vault-kit/lib/permit2/lib/forge-gas-snapshot/src/',
        'forge-std/=lib/forge-std/src/',
        'halmos-cheatcodes/=lib/openzeppelin-contracts-upgradeable/lib/halmos-cheatcodes/src/',
        'native-token-transfers/=lib/native-token-transfers/evm/src/',
        'openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/',
        'openzeppelin-contracts/=lib/openzeppelin-contracts/contracts/',
        'openzeppelin/=lib/ethereum-vault-connector/lib/openzeppelin-contracts/contracts/',
        'pendle-core-v2-public/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/',
        'permit2/=lib/euler-vault-kit/lib/permit2/',
        'properties/=lib/euler-earn/lib/properties/contracts/',
        'pyth-sdk-solidity/=lib/euler-price-oracle/lib/pyth-sdk-solidity/',
        'redstone-oracles-monorepo/=lib/euler-price-oracle/lib/',
        'reward-streams/=lib/reward-streams/src/',
        'solady/=lib/euler-price-oracle/lib/solady/src/',
        'solidity-bytes-utils/=lib/native-token-transfers/evm/lib/solidity-bytes-utils/contracts/',
        'solmate/=lib/fee-flow/lib/solmate/src/',
        'v3-core/=lib/euler-price-oracle/lib/v3-core/contracts/',
        'v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/contracts/',
        'wormhole-solidity-sdk/=lib/native-token-transfers/evm/lib/wormhole-solidity-sdk/src/',
        'lib/euler-price-oracle:@openzeppelin/contracts/=lib/euler-price-oracle/lib/openzeppelin-contracts/contracts/',
        'lib/native-token-transfers/evm:openzeppelin-contracts/contracts/=lib/native-token-transfers/evm/lib/openzeppelin-contracts/contracts/',
      ],
      optimizer: { enabled: true, runs: 20000 },
      metadata: { bytecodeHash: 'ipfs' },
      compilationTarget: {
        'lib/euler-price-oracle/src/adapter/pyth/PythOracle.sol': 'PythOracle',
      },
      evmVersion: 'cancun',
      libraries: {},
    },
    sources: {
      'lib/euler-price-oracle/lib/pyth-sdk-solidity/IPyth.sol': {
        keccak256: '0x949c65c65fea0578c09a6fc068e09ed1165adede2c835984cefcb25d76de1de2',
        urls: [
          'bzz-raw://4d7cb071e08e81bb8b113a928f4c2d2b3cdf950ad64c6c7003ea3d874163ca77',
          'dweb:/ipfs/QmRbQchPxRTBMHi7WzLb8XnMGzPDQcWhu7i2u5naUsCRoZ',
        ],
        license: 'Apache-2.0',
      },
      'lib/euler-price-oracle/lib/pyth-sdk-solidity/IPythEvents.sol': {
        keccak256: '0x048a35526c2e77d107d43ba336f1dcf31f64cef25ba429ae1f7a0fbc11c23320',
        urls: [
          'bzz-raw://b75be4c3643b22305995aba71fc92146dbf51fa82d2f9728c515d7749b32dca3',
          'dweb:/ipfs/QmRby4XA9jJQGhxoJ16BTUDuU7BzLFfadbfTgBiQsDgNyZ',
        ],
        license: 'Apache-2.0',
      },
      'lib/euler-price-oracle/lib/pyth-sdk-solidity/PythStructs.sol': {
        keccak256: '0x95ff0a6d64517348ef604b8bcf246b561a9445d7e607b8f48491c617cfda9b65',
        urls: [
          'bzz-raw://fb7f4ffe03be7379d3833c5946e38153de26aef4a4da0323a1ec603787de9eb7',
          'dweb:/ipfs/QmW4WkkLPGjDJrLrW4mYfxtFh8e9KAcPhrnNdxPQsfkS6t',
        ],
        license: 'Apache-2.0',
      },
      'lib/euler-price-oracle/lib/solady/src/utils/FixedPointMathLib.sol': {
        keccak256: '0xd890a3c47fd08d2d663890af4561045edc531ca1d7687bbf9dd7a2d1f15f1a3e',
        urls: [
          'bzz-raw://b8a4777858cb1c9ffa53f9c1f115d6e9c9af547cf02e06ab9e175da373b46da4',
          'dweb:/ipfs/QmQSKB7DZnatj6eJtugzUvKxrxFrdzFwRMJxQpsTbtup1P',
        ],
        license: 'MIT',
      },
      'lib/euler-price-oracle/src/adapter/BaseAdapter.sol': {
        keccak256: '0x1ca090708d2c03edd58fdb6c22638fce41e93c5f4021b382940d088ae49c81e3',
        urls: [
          'bzz-raw://d00bbb80bdb34321bea2055bcb1364cd860e7662ec513254ffa61698c09526b4',
          'dweb:/ipfs/QmeCE976ZZy6oLCP2emgBjvx8vJxKvoEJ4yF65QKLjQJDo',
        ],
        license: 'GPL-2.0-or-later',
      },
      'lib/euler-price-oracle/src/adapter/pyth/PythOracle.sol': {
        keccak256: '0xa35eec700de63102d21b4406542e57bec3e7f84aff9055ed80c6a8dddad3928f',
        urls: [
          'bzz-raw://d24a039ded7ffc238d17b76b71a3d88ac022cb8faff4c8506c0efa49f1d2175d',
          'dweb:/ipfs/QmavEgyQxohqzNUWfgaxDAqRsvjFVRdAhNKSQdVYEzQyeY',
        ],
        license: 'GPL-2.0-or-later',
      },
      'lib/euler-price-oracle/src/interfaces/IPriceOracle.sol': {
        keccak256: '0x03567dd4084dc74a9e2f9eeffce4d9047989b0d2122820716c3bc75891484308',
        urls: [
          'bzz-raw://23965a79475c85a0a8a3a137a76424f60debd9e592bc9127d463392fad7df30f',
          'dweb:/ipfs/QmPc1bV3kZ3ynLGTqG6xRbZ3E5AstYdfipXbysSqYGhJYA',
        ],
        license: 'GPL-2.0-or-later',
      },
      'lib/euler-price-oracle/src/lib/Errors.sol': {
        keccak256: '0x2551662bcef8d4a5cb7cdc8cd404f28c726af1bcfe7ef371b22d53322a932698',
        urls: [
          'bzz-raw://1641b99e0c907950448d62205fc23b5550c44899ba8c0bc0274a6b0a501981b9',
          'dweb:/ipfs/QmZvDhw4Ao3m8jRjNjT8Xq8imCPecJyytUTtCUjt5RoB4v',
        ],
        license: 'GPL-2.0-or-later',
      },
      'lib/euler-price-oracle/src/lib/ScaleUtils.sol': {
        keccak256: '0x9bd1ac81aab20c82eacbdda286996571530cdb1505d74299b56fd51fef0be9f8',
        urls: [
          'bzz-raw://5be0485ea15aff9b321012c1a1102425b7c63375d4a378d2a81ae55f60038bf3',
          'dweb:/ipfs/QmZwg2KtMWzjc6PMxJ98iTYcEVj8Bbs8YdNQNNHRq3pwfM',
        ],
        license: 'GPL-2.0-or-later',
      },
      'lib/forge-std/src/interfaces/IERC20.sol': {
        keccak256: '0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947',
        urls: [
          'bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7',
          'dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9',
        ],
        license: 'MIT',
      },
    },
    version: 1,
  },
  id: 81,
} as const;
