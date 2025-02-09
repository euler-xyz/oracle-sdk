export default {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: '_base', type: 'address', internalType: 'address' },
        { name: '_cross', type: 'address', internalType: 'address' },
        { name: '_quote', type: 'address', internalType: 'address' },
        { name: '_oracleBaseCross', type: 'address', internalType: 'address' },
        { name: '_oracleCrossQuote', type: 'address', internalType: 'address' },
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
      name: 'cross',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
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
      name: 'name',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'oracleBaseCross',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'oracleCrossQuote',
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
    {
      type: 'error',
      name: 'PriceOracle_NotSupported',
      inputs: [
        { name: 'base', type: 'address', internalType: 'address' },
        { name: 'quote', type: 'address', internalType: 'address' },
      ],
    },
  ],
  bytecode: {
    object:
      '0x610120604052348015610010575f80fd5b50604051610a2a380380610a2a83398101604081905261002f91610073565b6001600160a01b0394851660805292841660a05290831660c052821660e05216610100526100d4565b80516001600160a01b038116811461006e575f80fd5b919050565b5f805f805f60a08688031215610087575f80fd5b61009086610058565b945061009e60208701610058565b93506100ac60408701610058565b92506100ba60608701610058565b91506100c860808701610058565b90509295509295909350565b60805160a05160c05160e051610100516108b76101735f395f818161015001528181610322015261062a01525f81816101e601528181610422015261052a01525f818161017701528181610262015281816102d201526105ff01525f81816101bf015281816102fa015281816103cf0152818161050201526105d701525f818161010401528181610240015281816103f701526104da01526108b75ff3fe608060405234801561000f575f80fd5b5060043610610085575f3560e01c8063999b93af11610058578063999b93af14610172578063ae68676c14610199578063fa074d03146101ba578063fd886700146101e1575f80fd5b80630579e61f1461008957806306fdde03146100b65780635001f3b5146100ff5780636f612f9a1461014b575b5f80fd5b61009c6100973660046107c7565b610208565b604080519283526020830191909152015b60405180910390f35b6100f26040518060400160405280600c81526020017f43726f737341646170746572000000000000000000000000000000000000000081525081565b6040516100ad9190610800565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ad565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b6101ac6101a73660046107c7565b610222565b6040519081526020016100ad565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b5f805f610216868686610238565b96879650945050505050565b5f61022e848484610238565b90505b9392505050565b5f80610286847f0000000000000000000000000000000000000000000000000000000000000000857f000000000000000000000000000000000000000000000000000000000000000061065b565b90508015610496576040517fae68676c0000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527f0000000000000000000000000000000000000000000000000000000000000000169063ae68676c90606401602060405180830381865afa158015610367573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061038b919061086a565b6040517fae68676c0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301529196507f00000000000000000000000000000000000000000000000000000000000000009091169063ae68676c906064015b602060405180830381865afa15801561046a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061048e919061086a565b915050610231565b6040517fae68676c0000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527f0000000000000000000000000000000000000000000000000000000000000000169063ae68676c90606401602060405180830381865afa15801561056f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610593919061086a565b6040517fae68676c0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301529196507f00000000000000000000000000000000000000000000000000000000000000009091169063ae68676c9060640161044f565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480156106c257508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156106ce57505f610797565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561073457508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561074157506001610797565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146107c2575f80fd5b919050565b5f805f606084860312156107d9575f80fd5b833592506107e96020850161079f565b91506107f76040850161079f565b90509250925092565b5f602080835283518060208501525f5b8181101561082c57858101830151858201604001528201610810565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b5f6020828403121561087a575f80fd5b505191905056fea264697066735822122076d3b0be77e0e4ce25da47f4eee115d6ea7e00dbdd38208838161e90bebc311264736f6c63430008180033',
    sourceMap:
      '521:2519:67:-:0;;;1711:279;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1833:12:67;;;;;1855:14;;;;;1879;;;;;1903:34;;;;1947:36;;;521:2519;;14:177:456;93:13;;-1:-1:-1;;;;;135:31:456;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:550::-;302:6;310;318;326;334;387:3;375:9;366:7;362:23;358:33;355:53;;;404:1;401;394:12;355:53;427:40;457:9;427:40;:::i;:::-;417:50;;486:49;531:2;520:9;516:18;486:49;:::i;:::-;476:59;;554:49;599:2;588:9;584:18;554:49;:::i;:::-;544:59;;622:49;667:2;656:9;652:18;622:49;:::i;:::-;612:59;;690:50;735:3;724:9;720:19;690:50;:::i;:::-;680:60;;196:550;;;;;;;;:::o;:::-;521:2519:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      '0x608060405234801561000f575f80fd5b5060043610610085575f3560e01c8063999b93af11610058578063999b93af14610172578063ae68676c14610199578063fa074d03146101ba578063fd886700146101e1575f80fd5b80630579e61f1461008957806306fdde03146100b65780635001f3b5146100ff5780636f612f9a1461014b575b5f80fd5b61009c6100973660046107c7565b610208565b604080519283526020830191909152015b60405180910390f35b6100f26040518060400160405280600c81526020017f43726f737341646170746572000000000000000000000000000000000000000081525081565b6040516100ad9190610800565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ad565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b6101ac6101a73660046107c7565b610222565b6040519081526020016100ad565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b5f805f610216868686610238565b96879650945050505050565b5f61022e848484610238565b90505b9392505050565b5f80610286847f0000000000000000000000000000000000000000000000000000000000000000857f000000000000000000000000000000000000000000000000000000000000000061065b565b90508015610496576040517fae68676c0000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527f0000000000000000000000000000000000000000000000000000000000000000169063ae68676c90606401602060405180830381865afa158015610367573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061038b919061086a565b6040517fae68676c0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301529196507f00000000000000000000000000000000000000000000000000000000000000009091169063ae68676c906064015b602060405180830381865afa15801561046a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061048e919061086a565b915050610231565b6040517fae68676c0000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301527f0000000000000000000000000000000000000000000000000000000000000000169063ae68676c90606401602060405180830381865afa15801561056f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610593919061086a565b6040517fae68676c0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301527f0000000000000000000000000000000000000000000000000000000000000000811660448301529196507f00000000000000000000000000000000000000000000000000000000000000009091169063ae68676c9060640161044f565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480156106c257508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156106ce57505f610797565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561073457508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561074157506001610797565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146107c2575f80fd5b919050565b5f805f606084860312156107d9575f80fd5b833592506107e96020850161079f565b91506107f76040850161079f565b90509250925092565b5f602080835283518060208501525f5b8181101561082c57858101830151858201604001528201610810565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b5f6020828403121561087a575f80fd5b505191905056fea264697066735822122076d3b0be77e0e4ce25da47f4eee115d6ea7e00dbdd38208838161e90bebc311264736f6c63430008180033',
    sourceMap:
      '521:2519:67:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1003:215:66;;;;;;:::i;:::-;;:::i;:::-;;;;722:25:456;;;778:2;763:18;;756:34;;;;695:18;1003:215:66;;;;;;;;597:44:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;694:29::-;;;;;;;;1589:42:456;1577:55;;;1559:74;;1547:2;1532:18;694:29:67;1413:226:456;1183:41:67;;;;;869:30;;;;;759:153:66;;;;;;:::i;:::-;;:::i;:::-;;;1790:25:456;;;1778:2;1763:18;759:153:66;1644:177:456;785:30:67;;;;;1020:40;;;;;1003:215:66;1092:7;1101;1120:17;1140:32;1150:8;1160:4;1166:5;1140:9;:32::i;:::-;1120:52;;;-1:-1:-1;1003:215:66;-1:-1:-1;;;;;1003:215:66:o;759:153::-;847:7;873:32;883:8;893:4;899:5;873:9;:32::i;:::-;866:39;;759:153;;;;;;:::o;2447:591:67:-;2547:7;2566:12;2581:59;2613:5;2620:4;2626:6;2634:5;2581:31;:59::i;:::-;2566:74;;2655:7;2651:381;;;2689:63;;;;;;;;2028:25:456;;;2689:39:67;2739:5;2150:15:456;;2130:18;;;2123:43;2746:5:67;2202:15:456;;2182:18;;;2175:43;2702:16:67;2689:39;;;;2001:18:456;;2689:63:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2773:61;;;;;;;;2028:25:456;;;2773:38:67;2822:5;2150:15:456;;2130:18;;;2123:43;2829:4:67;2202:15:456;;2182:18;;;2175:43;2028:25;;-1:-1:-1;2786:15:67;2773:38;;;;;;2001:18:456;;2773:61:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2766:68;;;;;2651:381;2876:61;;;;;;;;2028:25:456;;;2876:38:67;2925:4;2150:15:456;;2130:18;;;2123:43;2931:5:67;2202:15:456;;2182:18;;;2175:43;2889:15:67;2876:38;;;;2001:18:456;;2876:61:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2958:63;;;;;;;;2028:25:456;;;2958:39:67;3008:5;2150:15:456;;2130:18;;;2123:43;3015:5:67;2202:15:456;;2182:18;;;2175:43;2028:25;;-1:-1:-1;2971:16:67;2958:39;;;;;;2001:18:456;;2958:63:67;1826:398:456;1829:368:89;1974:4;2011;1998:17;;:9;:17;;;:40;;;;;2033:5;2019:19;;:10;:19;;;1998:40;1994:58;;;-1:-1:-1;2047:5:89;2040:12;;1994:58;2079:5;2066:18;;:9;:18;;;:40;;;;;2102:4;2088:18;;:10;:18;;;2066:40;2062:57;;;-1:-1:-1;2115:4:89;2108:11;;2062:57;2136:54;;;;;2602:42:456;2671:15;;;2136:54:89;;;2653:34:456;2723:15;;2703:18;;;2696:43;2565:18;;2136:54:89;;;;;;;1829:368;;;;;;;:::o;14:196:456:-;82:20;;142:42;131:54;;121:65;;111:93;;200:1;197;190:12;111:93;14:196;;;:::o;215:328::-;292:6;300;308;361:2;349:9;340:7;336:23;332:32;329:52;;;377:1;374;367:12;329:52;413:9;400:23;390:33;;442:38;476:2;465:9;461:18;442:38;:::i;:::-;432:48;;499:38;533:2;522:9;518:18;499:38;:::i;:::-;489:48;;215:328;;;;;:::o;801:607::-;913:4;942:2;971;960:9;953:21;1003:6;997:13;1046:6;1041:2;1030:9;1026:18;1019:34;1071:1;1081:140;1095:6;1092:1;1089:13;1081:140;;;1190:14;;;1186:23;;1180:30;1156:17;;;1175:2;1152:26;1145:66;1110:10;;1081:140;;;1085:3;1270:1;1265:2;1256:6;1245:9;1241:22;1237:31;1230:42;1399:2;1329:66;1324:2;1316:6;1312:15;1308:88;1297:9;1293:104;1289:113;1281:121;;;;801:607;;;;:::o;2229:184::-;2299:6;2352:2;2340:9;2331:7;2327:23;2323:32;2320:52;;;2368:1;2365;2358:12;2320:52;-1:-1:-1;2391:16:456;;2229:184;-1:-1:-1;2229:184:456:o',
    linkReferences: {},
    immutableReferences: {
      '19198': [
        { start: 260, length: 32 },
        { start: 576, length: 32 },
        { start: 1015, length: 32 },
        { start: 1242, length: 32 },
      ],
      '19201': [
        { start: 447, length: 32 },
        { start: 762, length: 32 },
        { start: 975, length: 32 },
        { start: 1282, length: 32 },
        { start: 1495, length: 32 },
      ],
      '19204': [
        { start: 375, length: 32 },
        { start: 610, length: 32 },
        { start: 722, length: 32 },
        { start: 1535, length: 32 },
      ],
      '19207': [
        { start: 486, length: 32 },
        { start: 1058, length: 32 },
        { start: 1322, length: 32 },
      ],
      '19210': [
        { start: 336, length: 32 },
        { start: 802, length: 32 },
        { start: 1578, length: 32 },
      ],
    },
  },
  methodIdentifiers: {
    'base()': '5001f3b5',
    'cross()': 'fa074d03',
    'getQuote(uint256,address,address)': 'ae68676c',
    'getQuotes(uint256,address,address)': '0579e61f',
    'name()': '06fdde03',
    'oracleBaseCross()': 'fd886700',
    'oracleCrossQuote()': '6f612f9a',
    'quote()': '999b93af',
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_base","type":"address"},{"internalType":"address","name":"_cross","type":"address"},{"internalType":"address","name":"_quote","type":"address"},{"internalType":"address","name":"_oracleBaseCross","type":"address"},{"internalType":"address","name":"_oracleCrossQuote","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"PriceOracle_NotSupported","type":"error"},{"inputs":[],"name":"base","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cross","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracleBaseCross","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oracleCrossQuote","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"quote","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"author":"Euler Labs (https://www.eulerlabs.com/)","custom:security-contact":"security@euler.xyz","details":"For example, CrossAdapter can price wstETH/USD by querying a wstETH/stETH oracle and a stETH/USD oracle.","errors":{"PriceOracle_NotSupported(address,address)":[{"params":{"base":"The address of the base asset.","quote":"The address of the quote asset."}}]},"kind":"dev","methods":{"constructor":{"details":"Both cross oracles MUST be bidirectional.Does not support bid/ask pricing.","params":{"_base":"The address of the base asset.","_cross":"The address of the cross/through asset.","_oracleBaseCross":"The oracle that resolves base/cross and cross/base.","_oracleCrossQuote":"The oracle that resolves quote/cross and cross/quote.","_quote":"The address of the quote asset."}},"getQuote(uint256,address,address)":{"params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` that is equivalent to `inAmount` of `base`."}},"getQuotes(uint256,address,address)":{"details":"Does not support true bid/ask pricing.","params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` you would get for selling `inAmount` of `base`.","_1":"The amount of `quote` you would spend for buying `inAmount` of `base`."}}},"stateVariables":{"name":{"return":"The name of the oracle.","returns":{"_0":"The name of the oracle."}},"oracleBaseCross":{"details":"The oracle MUST be bidirectional."},"oracleCrossQuote":{"details":"The oracle MUST be bidirectional."}},"title":"CrossAdapter","version":1},"userdoc":{"errors":{"PriceOracle_NotSupported(address,address)":[{"notice":"The base/quote path is not supported."}]},"kind":"user","methods":{"base()":{"notice":"The address of the base asset."},"constructor":{"notice":"Deploy a CrossAdapter."},"cross()":{"notice":"The address of the cross/through asset."},"getQuote(uint256,address,address)":{"notice":"One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread."},"getQuotes(uint256,address,address)":{"notice":"Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token."},"name()":{"notice":"Get the name of the oracle."},"oracleBaseCross()":{"notice":"The oracle that resolves base/cross and cross/base."},"oracleCrossQuote()":{"notice":"The oracle that resolves quote/cross and cross/quote."},"quote()":{"notice":"The address of the quote asset."}},"notice":"PriceOracle that chains two PriceOracles.","version":1}},"settings":{"compilationTarget":{"lib/euler-price-oracle/src/adapter/CrossAdapter.sol":"CrossAdapter"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":20000},"remappings":[":@axiom-crypto/v2-periphery/=lib/euler-price-oracle/lib/axiom-std/lib/axiom-v2-periphery/src/",":@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/=lib/openzeppelin-contracts/contracts/",":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":@pendle/core-v2/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":@pyth/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":@redstone/evm-connector/=lib/euler-price-oracle/lib/redstone-oracles-monorepo/packages/evm-connector/contracts/",":@solady/=lib/euler-price-oracle/lib/solady/src/",":@uniswap/v3-core/=lib/euler-price-oracle/lib/v3-core/",":@uniswap/v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/",":ERC4626/=lib/euler-earn/lib/properties/lib/ERC4626/contracts/",":axiom-std/=lib/euler-price-oracle/lib/axiom-std/src/",":axiom-v2-periphery/=lib/euler-price-oracle/lib/axiom-v2-periphery/src/",":crytic-properties/=lib/euler-earn/lib/properties/contracts/",":ds-test/=lib/ethereum-vault-connector/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",":ethereum-vault-connector/=lib/ethereum-vault-connector/src/",":euler-earn/=lib/euler-earn/src/",":euler-price-oracle-test/=lib/euler-price-oracle/test/",":euler-price-oracle/=lib/euler-price-oracle/src/",":euler-vault-kit/=lib/euler-vault-kit/src/",":evc/=lib/ethereum-vault-connector/src/",":evk-test/=lib/euler-vault-kit/test/",":evk/=lib/euler-vault-kit/src/",":fee-flow/=lib/fee-flow/src/",":forge-gas-snapshot/=lib/euler-vault-kit/lib/permit2/lib/forge-gas-snapshot/src/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts-upgradeable/lib/halmos-cheatcodes/src/",":native-token-transfers/=lib/native-token-transfers/evm/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":openzeppelin-contracts/=lib/openzeppelin-contracts/contracts/",":openzeppelin/=lib/ethereum-vault-connector/lib/openzeppelin-contracts/contracts/",":pendle-core-v2-public/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":permit2/=lib/euler-vault-kit/lib/permit2/",":properties/=lib/euler-earn/lib/properties/contracts/",":pyth-sdk-solidity/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":redstone-oracles-monorepo/=lib/euler-price-oracle/lib/",":reward-streams/=lib/reward-streams/src/",":solady/=lib/euler-price-oracle/lib/solady/src/",":solidity-bytes-utils/=lib/native-token-transfers/evm/lib/solidity-bytes-utils/contracts/",":solmate/=lib/fee-flow/lib/solmate/src/",":v3-core/=lib/euler-price-oracle/lib/v3-core/contracts/",":v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/contracts/",":wormhole-solidity-sdk/=lib/native-token-transfers/evm/lib/wormhole-solidity-sdk/src/","lib/euler-price-oracle:@openzeppelin/contracts/=lib/euler-price-oracle/lib/openzeppelin-contracts/contracts/","lib/native-token-transfers/evm:openzeppelin-contracts/contracts/=lib/native-token-transfers/evm/lib/openzeppelin-contracts/contracts/"]},"sources":{"lib/euler-price-oracle/lib/solady/src/utils/FixedPointMathLib.sol":{"keccak256":"0xd890a3c47fd08d2d663890af4561045edc531ca1d7687bbf9dd7a2d1f15f1a3e","license":"MIT","urls":["bzz-raw://b8a4777858cb1c9ffa53f9c1f115d6e9c9af547cf02e06ab9e175da373b46da4","dweb:/ipfs/QmQSKB7DZnatj6eJtugzUvKxrxFrdzFwRMJxQpsTbtup1P"]},"lib/euler-price-oracle/src/adapter/BaseAdapter.sol":{"keccak256":"0x1ca090708d2c03edd58fdb6c22638fce41e93c5f4021b382940d088ae49c81e3","license":"GPL-2.0-or-later","urls":["bzz-raw://d00bbb80bdb34321bea2055bcb1364cd860e7662ec513254ffa61698c09526b4","dweb:/ipfs/QmeCE976ZZy6oLCP2emgBjvx8vJxKvoEJ4yF65QKLjQJDo"]},"lib/euler-price-oracle/src/adapter/CrossAdapter.sol":{"keccak256":"0x6c25734abb6563ecab49c2010f2ed41543b09b3d03b7a5d1c370b2ff1668bb94","license":"GPL-2.0-or-later","urls":["bzz-raw://9db5be349107d117d7a96efa509f972a53c59a77db217f6e501f9730d99834c9","dweb:/ipfs/QmVTKCQ5TTfKtL8qJnQz65jjCvwnTGi5QdxMr1CXda8inf"]},"lib/euler-price-oracle/src/interfaces/IPriceOracle.sol":{"keccak256":"0x03567dd4084dc74a9e2f9eeffce4d9047989b0d2122820716c3bc75891484308","license":"GPL-2.0-or-later","urls":["bzz-raw://23965a79475c85a0a8a3a137a76424f60debd9e592bc9127d463392fad7df30f","dweb:/ipfs/QmPc1bV3kZ3ynLGTqG6xRbZ3E5AstYdfipXbysSqYGhJYA"]},"lib/euler-price-oracle/src/lib/Errors.sol":{"keccak256":"0x2551662bcef8d4a5cb7cdc8cd404f28c726af1bcfe7ef371b22d53322a932698","license":"GPL-2.0-or-later","urls":["bzz-raw://1641b99e0c907950448d62205fc23b5550c44899ba8c0bc0274a6b0a501981b9","dweb:/ipfs/QmZvDhw4Ao3m8jRjNjT8Xq8imCPecJyytUTtCUjt5RoB4v"]},"lib/euler-price-oracle/src/lib/ScaleUtils.sol":{"keccak256":"0x9bd1ac81aab20c82eacbdda286996571530cdb1505d74299b56fd51fef0be9f8","license":"GPL-2.0-or-later","urls":["bzz-raw://5be0485ea15aff9b321012c1a1102425b7c63375d4a378d2a81ae55f60038bf3","dweb:/ipfs/QmZwg2KtMWzjc6PMxJ98iTYcEVj8Bbs8YdNQNNHRq3pwfM"]},"lib/forge-std/src/interfaces/IERC20.sol":{"keccak256":"0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947","license":"MIT","urls":["bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7","dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9"]}},"version":1}',
  metadata: {
    compiler: { version: '0.8.24+commit.e11b9ed9' },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            { internalType: 'address', name: '_base', type: 'address' },
            { internalType: 'address', name: '_cross', type: 'address' },
            { internalType: 'address', name: '_quote', type: 'address' },
            {
              internalType: 'address',
              name: '_oracleBaseCross',
              type: 'address',
            },
            {
              internalType: 'address',
              name: '_oracleCrossQuote',
              type: 'address',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          inputs: [
            { internalType: 'address', name: 'base', type: 'address' },
            { internalType: 'address', name: 'quote', type: 'address' },
          ],
          type: 'error',
          name: 'PriceOracle_NotSupported',
        },
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
          name: 'cross',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
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
          name: 'name',
          outputs: [{ internalType: 'string', name: '', type: 'string' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'oracleBaseCross',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'oracleCrossQuote',
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
            details: 'Both cross oracles MUST be bidirectional.Does not support bid/ask pricing.',
            params: {
              _base: 'The address of the base asset.',
              _cross: 'The address of the cross/through asset.',
              _oracleBaseCross: 'The oracle that resolves base/cross and cross/base.',
              _oracleCrossQuote: 'The oracle that resolves quote/cross and cross/quote.',
              _quote: 'The address of the quote asset.',
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
          'base()': { notice: 'The address of the base asset.' },
          constructor: { notice: 'Deploy a CrossAdapter.' },
          'cross()': { notice: 'The address of the cross/through asset.' },
          'getQuote(uint256,address,address)': {
            notice:
              'One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread.',
          },
          'getQuotes(uint256,address,address)': {
            notice:
              'Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token.',
          },
          'name()': { notice: 'Get the name of the oracle.' },
          'oracleBaseCross()': {
            notice: 'The oracle that resolves base/cross and cross/base.',
          },
          'oracleCrossQuote()': {
            notice: 'The oracle that resolves quote/cross and cross/quote.',
          },
          'quote()': { notice: 'The address of the quote asset.' },
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
        'lib/euler-price-oracle/src/adapter/CrossAdapter.sol': 'CrossAdapter',
      },
      evmVersion: 'cancun',
      libraries: {},
    },
    sources: {
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
      'lib/euler-price-oracle/src/adapter/CrossAdapter.sol': {
        keccak256: '0x6c25734abb6563ecab49c2010f2ed41543b09b3d03b7a5d1c370b2ff1668bb94',
        urls: [
          'bzz-raw://9db5be349107d117d7a96efa509f972a53c59a77db217f6e501f9730d99834c9',
          'dweb:/ipfs/QmVTKCQ5TTfKtL8qJnQz65jjCvwnTGi5QdxMr1CXda8inf',
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
  id: 67,
} as const;
