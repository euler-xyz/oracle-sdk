export default {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: '_pool', type: 'address', internalType: 'address' },
        { name: '_base', type: 'address', internalType: 'address' },
        { name: '_priceOracleIndex', type: 'uint256', internalType: 'uint256' },
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
      name: 'pool',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'priceOracleIndex',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
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
    { type: 'error', name: 'PriceOracle_Overflow', inputs: [] },
  ],
  bytecode: {
    object:
      '0x61012060405234801562000011575f80fd5b5060405162000c9838038062000c9883398101604081905262000034916200026b565b6001600160a01b03838116608081905290831660a05260405163c661065760e01b81525f600482015263c661065790602401602060405180830381865afa15801562000082573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620000a89190620002a9565b6001600160a01b031660c05260e081905260a0515f90620000c990620000ff565b90505f620000df60c051620000ff60201b60201c565b9050620000ef82826012620001df565b6101005250620004559350505050565b5f63ffffffff826001600160a01b0316116200011d57506012919050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290515f9182916001600160a01b038616916200016191620002cc565b5f60405180830381855afa9150503d805f81146200019b576040519150601f19603f3d011682016040523d82523d5f602084013e620001a0565b606091505b5091509150818015620001b4575080516020145b620001c1576012620001d7565b80806020019051810190620001d79190620002fa565b949350505050565b5f620001d783620001f1868562000330565b5f60268360ff16118062000208575060268260ff16115b1562000227576040516302950f9560e51b815260040160405180910390fd5b6200023483600a62000445565b60806200024384600a62000445565b901b1790505b92915050565b80516001600160a01b038116811462000266575f80fd5b919050565b5f805f606084860312156200027e575f80fd5b62000289846200024f565b925062000299602085016200024f565b9150604084015190509250925092565b5f60208284031215620002ba575f80fd5b620002c5826200024f565b9392505050565b5f82515f5b81811015620002ed5760208186018101518583015201620002d1565b505f920191825250919050565b5f602082840312156200030b575f80fd5b815160ff81168114620002c5575f80fd5b634e487b7160e01b5f52601160045260245ffd5b60ff81811683821601908111156200024957620002496200031c565b600181815b808511156200038c57815f19048211156200037057620003706200031c565b808516156200037e57918102915b93841c939080029062000351565b509250929050565b5f82620003a45750600162000249565b81620003b257505f62000249565b8160018114620003cb5760028114620003d657620003f6565b600191505062000249565b60ff841115620003ea57620003ea6200031c565b50506001821b62000249565b5060208310610133831016604e8410600b84101617156200041b575081810a62000249565b6200042783836200034c565b805f19048211156200043d576200043d6200031c565b029392505050565b5f620002c560ff84168362000394565b60805160a05160c05160e051610100516107dc620004bc5f395f61040801525f81816101450152818161027a015261035a01525f81816101a1015261023001525f818161017a015261020e01525f818160f9015281816102a0015261038001526107dc5ff3fe608060405234801561000f575f80fd5b506004361061007a575f3560e01c80631ecac338116100585780631ecac338146101405780635001f3b514610175578063999b93af1461019c578063ae68676c146101c3575f80fd5b80630579e61f1461007e57806306fdde03146100ab57806316f0115b146100f4575b5f80fd5b61009161008c3660046106aa565b6101d6565b604080519283526020830191909152015b60405180910390f35b6100e76040518060400160405280600e81526020017f4375727665454d414f7261636c6500000000000000000000000000000000000081525081565b6040516100a291906106e3565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a2565b6101677f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100a2565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b6101676101d13660046106aa565b6101f0565b5f805f6101e4868686610206565b96879650945050505050565b5f6101fc848484610206565b90505b9392505050565b5f80610254847f0000000000000000000000000000000000000000000000000000000000000000857f0000000000000000000000000000000000000000000000000000000000000000610437565b90505f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000003610332577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166386fc88d36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610307573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061032b919061074d565b9050610401565b6040517f687276530000000000000000000000000000000000000000000000000000000081527f000000000000000000000000000000000000000000000000000000000000000060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636872765390602401602060405180830381865afa1580156103da573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103fe919061074d565b90505b61042d86827f00000000000000000000000000000000000000000000000000000000000000008561057b565b9695505050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561049e57508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156104aa57505f610573565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561051057508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561051d57506001610573565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b5f6fffffffffffffffffffffffffffffffff8316608084901c83156105b7576105ae87826105a98986610764565b6105c7565b92505050610573565b6105ae876105c58885610764565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8385098181108201900380610615578261060c5763ae47f7025f526004601cfd5b508190046101ff565b8083116106295763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146106a5575f80fd5b919050565b5f805f606084860312156106bc575f80fd5b833592506106cc60208501610682565b91506106da60408501610682565b90509250925092565b5f602080835283518060208501525f5b8181101561070f578581018301518582016040015282016106f3565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b5f6020828403121561075d575f80fd5b5051919050565b80820281158282048414176107a0577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea26469706673582212205a5976f9137d73cc1bf2e2559ed39dbdc4c329318ff4184d6a1ceb3ba469c55b64736f6c63430008180033',
    sourceMap:
      '439:2905:90:-:0;;;2081:445;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;2160:12:90;;;;;;;2182;;;;;2276:26;;-1:-1:-1;;;2276:26:90;;2300:1;2276:26;;;709:25:493;2276:23:90;;682:18:493;;2276:26:90;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;2268:34:90;;;2312:36;;;;2392:4;;2358:18;;2379;;:12;:18::i;:::-;2358:39;;2407:19;2429;2442:5;;2429:12;;;:19;;:::i;:::-;2407:41;-1:-1:-1;2466:53:90;2487:12;2407:41;2516:2;2466:20;:53::i;:::-;2458:61;;-1:-1:-1;439:2905:90;;-1:-1:-1;;;;439:2905:90;1798:316:83;1858:5;709:10;1887:5;-1:-1:-1;;;;;1879:40:83;;1875:55;;-1:-1:-1;1928:2:83;;1798:316;-1:-1:-1;1798:316:83:o;1875:55::-;1993:35;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1993:35:83;-1:-1:-1;;;1993:35:83;;;1976:53;;1941:12;;;;-1:-1:-1;;;;;1976:16:83;;;:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1940:89;;;;2046:7;:28;;;;;2057:4;:11;2072:2;2057:17;2046:28;:61;;2105:2;2046:61;;;2088:4;2077:25;;;;;;;;;;;;:::i;:::-;2039:68;1798:316;-1:-1:-1;;;;1798:316:83:o;2551:182:109:-;2654:5;2678:48;2683:13;2698:27;2713:12;2698;:27;:::i;:::-;1192:5;727:2;1213:13;:28;;;:59;;;;727:2;1245:12;:27;;;1213:59;1209:126;;;1295:29;;-1:-1:-1;;;1295:29:109;;;;;;;;;;;1209:126;1392:19;1398:13;1392:2;:19;:::i;:::-;1385:3;1363:18;1369:12;1363:2;:18;:::i;:::-;:25;;1362:49;1344:68;;1114:305;;;;;:::o;14:177:493:-;93:13;;-1:-1:-1;;;;;135:31:493;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:354::-;284:6;292;300;353:2;341:9;332:7;328:23;324:32;321:52;;;369:1;366;359:12;321:52;392:40;422:9;392:40;:::i;:::-;382:50;;451:49;496:2;485:9;481:18;451:49;:::i;:::-;441:59;;540:2;529:9;525:18;519:25;509:35;;196:354;;;;;:::o;745:208::-;815:6;868:2;856:9;847:7;843:23;839:32;836:52;;;884:1;881;874:12;836:52;907:40;937:9;907:40;:::i;:::-;897:50;745:208;-1:-1:-1;;;745:208:493:o;958:412::-;1087:3;1125:6;1119:13;1150:1;1160:129;1174:6;1171:1;1168:13;1160:129;;;1272:4;1256:14;;;1252:25;;1246:32;1233:11;;;1226:53;1189:12;1160:129;;;-1:-1:-1;1344:1:493;1308:16;;1333:13;;;-1:-1:-1;1308:16:493;958:412;-1:-1:-1;958:412:493:o;1375:273::-;1443:6;1496:2;1484:9;1475:7;1471:23;1467:32;1464:52;;;1512:1;1509;1502:12;1464:52;1544:9;1538:16;1594:4;1587:5;1583:16;1576:5;1573:27;1563:55;;1614:1;1611;1604:12;1653:127;1714:10;1709:3;1705:20;1702:1;1695:31;1745:4;1742:1;1735:15;1769:4;1766:1;1759:15;1785:148;1873:4;1852:12;;;1866;;;1848:31;;1891:13;;1888:39;;;1907:18;;:::i;1938:416::-;2027:1;2064:5;2027:1;2078:270;2099:7;2089:8;2086:21;2078:270;;;2158:4;2154:1;2150:6;2146:17;2140:4;2137:27;2134:53;;;2167:18;;:::i;:::-;2217:7;2207:8;2203:22;2200:55;;;2237:16;;;;2200:55;2316:22;;;;2276:15;;;;2078:270;;;2082:3;1938:416;;;;;:::o;2359:806::-;2408:5;2438:8;2428:80;;-1:-1:-1;2479:1:493;2493:5;;2428:80;2527:4;2517:76;;-1:-1:-1;2564:1:493;2578:5;;2517:76;2609:4;2627:1;2622:59;;;;2695:1;2690:130;;;;2602:218;;2622:59;2652:1;2643:10;;2666:5;;;2690:130;2727:3;2717:8;2714:17;2711:43;;;2734:18;;:::i;:::-;-1:-1:-1;;2790:1:493;2776:16;;2805:5;;2602:218;;2904:2;2894:8;2891:16;2885:3;2879:4;2876:13;2872:36;2866:2;2856:8;2853:16;2848:2;2842:4;2839:12;2835:35;2832:77;2829:159;;;-1:-1:-1;2941:19:493;;;2973:5;;2829:159;3020:34;3045:8;3039:4;3020:34;:::i;:::-;3090:6;3086:1;3082:6;3078:19;3069:7;3066:32;3063:58;;;3101:18;;:::i;:::-;3139:20;;2359:806;-1:-1:-1;;;2359:806:493:o;3170:140::-;3228:5;3257:47;3298:4;3288:8;3284:19;3278:4;3257:47;:::i;3170:140::-;439:2905:90;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      '0x608060405234801561000f575f80fd5b506004361061007a575f3560e01c80631ecac338116100585780631ecac338146101405780635001f3b514610175578063999b93af1461019c578063ae68676c146101c3575f80fd5b80630579e61f1461007e57806306fdde03146100ab57806316f0115b146100f4575b5f80fd5b61009161008c3660046106aa565b6101d6565b604080519283526020830191909152015b60405180910390f35b6100e76040518060400160405280600e81526020017f4375727665454d414f7261636c6500000000000000000000000000000000000081525081565b6040516100a291906106e3565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a2565b6101677f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100a2565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b6101676101d13660046106aa565b6101f0565b5f805f6101e4868686610206565b96879650945050505050565b5f6101fc848484610206565b90505b9392505050565b5f80610254847f0000000000000000000000000000000000000000000000000000000000000000857f0000000000000000000000000000000000000000000000000000000000000000610437565b90505f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000003610332577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166386fc88d36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610307573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061032b919061074d565b9050610401565b6040517f687276530000000000000000000000000000000000000000000000000000000081527f000000000000000000000000000000000000000000000000000000000000000060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690636872765390602401602060405180830381865afa1580156103da573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103fe919061074d565b90505b61042d86827f00000000000000000000000000000000000000000000000000000000000000008561057b565b9695505050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561049e57508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156104aa57505f610573565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561051057508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561051d57506001610573565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b5f6fffffffffffffffffffffffffffffffff8316608084901c83156105b7576105ae87826105a98986610764565b6105c7565b92505050610573565b6105ae876105c58885610764565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8385098181108201900380610615578261060c5763ae47f7025f526004601cfd5b508190046101ff565b8083116106295763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146106a5575f80fd5b919050565b5f805f606084860312156106bc575f80fd5b833592506106cc60208501610682565b91506106da60408501610682565b90509250925092565b5f602080835283518060208501525f5b8181101561070f578581018301518582016040015282016106f3565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b5f6020828403121561075d575f80fd5b5051919050565b80820281158282048414176107a0577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea26469706673582212205a5976f9137d73cc1bf2e2559ed39dbdc4c329318ff4184d6a1ceb3ba469c55b64736f6c63430008180033',
    sourceMap:
      '439:2905:90:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1003:215:83;;;;;;:::i;:::-;;:::i;:::-;;;;722:25:493;;;778:2;763:18;;756:34;;;;695:18;1003:215:83;;;;;;;;517:46:90;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;616:29::-;;;;;;;;1589:42:493;1577:55;;;1559:74;;1547:2;1532:18;616:29:90;1413:226:493;1201:41:90;;;;;;;;1790:25:493;;;1778:2;1763:18;1201:41:90;1644:177:493;698:29:90;;;;;806:30;;;;;759:153:83;;;;;;:::i;:::-;;:::i;1003:215::-;1092:7;1101;1120:17;1140:32;1150:8;1160:4;1166:5;1140:9;:32::i;:::-;1120:52;;;-1:-1:-1;1003:215:83;-1:-1:-1;;;;;1003:215:83:o;759:153::-;847:7;873:32;883:8;893:4;899:5;873:9;:32::i;:::-;866:39;;759:153;;;;;;:::o;2825:517:90:-;2925:7;2944:12;2959:59;2991:5;2998:4;3004:6;3012:5;2959:31;:59::i;:::-;2944:74;;3029:17;3080;3060:16;:37;3056:201;;3136:4;3125:29;;;:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3113:43;;3056:201;;;3199:47;;;;;3229:16;3199:47;;;1790:25:493;3210:4:90;3199:29;;;;;1763:18:493;;3199:47:90;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3187:59;;3056:201;3274:61;3299:8;3309:9;3320:5;3327:7;3274:24;:61::i;:::-;3267:68;2825:517;-1:-1:-1;;;;;;2825:517:90:o;1829:368:109:-;1974:4;2011;1998:17;;:9;:17;;;:40;;;;;2033:5;2019:19;;:10;:19;;;1998:40;1994:58;;;-1:-1:-1;2047:5:109;2040:12;;1994:58;2079:5;2066:18;;:9;:18;;;:40;;;;;2102:4;2088:18;;:10;:18;;;2066:40;2062:57;;;-1:-1:-1;2115:4:109;2108:11;;2062:57;2136:54;;;;;2199:42:493;2268:15;;;2136:54:109;;;2250:34:493;2320:15;;2300:18;;;2293:43;2162:18;;2136:54:109;;;;;;;1829:368;;;;;;;:::o;3090:645::-;3224:7;470:66;3268:38;;3359:3;3336:26;;;3372:357;;;;3471:73;3500:8;3510:9;3521:22;3534:9;3521:10;:22;:::i;:::-;3471:28;:73::i;:::-;3464:80;;;;;;3372:357;3645:73;3674:8;3684:22;3697:9;3684:10;:22;:::i;:::-;3708:9;20285:3569:69;20897:9;;;20995:6;20904:1;20901;20982:20;21110:14;;;21098:27;;21090:36;;;21211:278;;21257:1;21247:153;;21299:10;21293:4;21286:24;21373:4;21367;21360:18;21247:153;-1:-1:-1;21431:14:69;;;21466:5;;21211:278;21610:2;21607:1;21604:9;21594:149;;21650:10;21644:4;21637:24;21720:4;21714;21707:18;21594:149;22000:1;21997;21994;21987:15;22148:1;22144:9;;;22137:17;;22239:9;;;;;23559:13;;;23551:22;;;23583:9;;;;23579:17;;;23598:1;23575:25;23547:54;23635:14;;23631:22;23515:164;22614:1;22621;22617:9;;22610:17;;22896:11;;;22889:19;;22880:29;22969:11;;;22962:19;;22953:29;23043:11;;;23036:19;;23027:29;23117:11;;;23110:19;;23101:29;23191:11;;;23184:19;;23175:29;23767:11;;;23760:19;;;23751:29;23273:529;20285:3569;;;;;:::o;14:196:493:-;82:20;;142:42;131:54;;121:65;;111:93;;200:1;197;190:12;111:93;14:196;;;:::o;215:328::-;292:6;300;308;361:2;349:9;340:7;336:23;332:32;329:52;;;377:1;374;367:12;329:52;413:9;400:23;390:33;;442:38;476:2;465:9;461:18;442:38;:::i;:::-;432:48;;499:38;533:2;522:9;518:18;499:38;:::i;:::-;489:48;;215:328;;;;;:::o;801:607::-;913:4;942:2;971;960:9;953:21;1003:6;997:13;1046:6;1041:2;1030:9;1026:18;1019:34;1071:1;1081:140;1095:6;1092:1;1089:13;1081:140;;;1190:14;;;1186:23;;1180:30;1156:17;;;1175:2;1152:26;1145:66;1110:10;;1081:140;;;1085:3;1270:1;1265:2;1256:6;1245:9;1241:22;1237:31;1230:42;1399:2;1329:66;1324:2;1316:6;1312:15;1308:88;1297:9;1293:104;1289:113;1281:121;;;;801:607;;;;:::o;1826:184::-;1896:6;1949:2;1937:9;1928:7;1924:23;1920:32;1917:52;;;1965:1;1962;1955:12;1917:52;-1:-1:-1;1988:16:493;;1826:184;-1:-1:-1;1826:184:493:o;2347:322::-;2420:9;;;2451;;2468:15;;;2462:22;;2448:37;2438:225;;2519:77;2516:1;2509:88;2620:4;2617:1;2610:15;2648:4;2645:1;2638:15;2438:225;2347:322;;;;:::o',
    linkReferences: {},
    immutableReferences: {
      '26806': [
        { start: 249, length: 32 },
        { start: 672, length: 32 },
        { start: 896, length: 32 },
      ],
      '26809': [
        { start: 378, length: 32 },
        { start: 526, length: 32 },
      ],
      '26812': [
        { start: 417, length: 32 },
        { start: 560, length: 32 },
      ],
      '26815': [
        { start: 325, length: 32 },
        { start: 634, length: 32 },
        { start: 858, length: 32 },
      ],
      '26819': [{ start: 1032, length: 32 }],
    },
  },
  methodIdentifiers: {
    'base()': '5001f3b5',
    'getQuote(uint256,address,address)': 'ae68676c',
    'getQuotes(uint256,address,address)': '0579e61f',
    'name()': '06fdde03',
    'pool()': '16f0115b',
    'priceOracleIndex()': '1ecac338',
    'quote()': '999b93af',
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_pool","type":"address"},{"internalType":"address","name":"_base","type":"address"},{"internalType":"uint256","name":"_priceOracleIndex","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"PriceOracle_NotSupported","type":"error"},{"inputs":[],"name":"PriceOracle_Overflow","type":"error"},{"inputs":[],"name":"base","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceOracleIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"quote","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"author":"Euler Labs (https://www.eulerlabs.com/)","custom:security-contact":"security@euler.xyz","errors":{"PriceOracle_NotSupported(address,address)":[{"params":{"base":"The address of the base asset.","quote":"The address of the quote asset."}}]},"kind":"dev","methods":{"constructor":{"details":"The quote is always `pool.coins[0]`. If `priceOracleIndex` is `type(uint256).max`, then the adapter will call the non-indexed price method `price_oracle()` WARNING: Some StableSwap-NG pools deployed before Dec-12-2023 have a known oracle vulerability. See (https://docs.curve.fi/stableswap-exchange/stableswap-ng/pools/oracles/#price-oracles) for more details. Additionally, verify that the pool has enough liquidity before deploying this adapter.","params":{"_base":"The address of the base asset.","_pool":"The address of the Curve pool.","_priceOracleIndex":"The index in `price_oracle` corresponding to the base asset."}},"getQuote(uint256,address,address)":{"params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` that is equivalent to `inAmount` of `base`."}},"getQuotes(uint256,address,address)":{"details":"Does not support true bid/ask pricing.","params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` you would get for selling `inAmount` of `base`.","_1":"The amount of `quote` you would spend for buying `inAmount` of `base`."}}},"stateVariables":{"name":{"return":"The name of the oracle.","returns":{"_0":"The name of the oracle."}},"priceOracleIndex":{"details":"Note that indices in `price_oracle` are shifted by 1, i.e. `0` corresponds to `coins[1]`.If type(uint256).max, then the adapter will call `price_oracle()`.Else the adapter will call the indexed price method `price_oracle(priceOracleIndex)`."}},"title":"CurveEMAOracle","version":1},"userdoc":{"errors":{"PriceOracle_NotSupported(address,address)":[{"notice":"The base/quote path is not supported."}],"PriceOracle_Overflow()":[{"notice":"The quote cannot be completed due to overflow."}]},"kind":"user","methods":{"base()":{"notice":"The address of the base asset."},"constructor":{"notice":"Deploy a CurveEMAOracle."},"getQuote(uint256,address,address)":{"notice":"One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread."},"getQuotes(uint256,address,address)":{"notice":"Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token."},"name()":{"notice":"Get the name of the oracle."},"pool()":{"notice":"The address of the Curve pool."},"priceOracleIndex()":{"notice":"The index in `price_oracle` corresponding to the base asset."},"quote()":{"notice":"The address of the quote asset, must be `pool.coins[0]`."}},"notice":"Adapter utilizing the EMA price oracle in Curve pools.","version":1}},"settings":{"compilationTarget":{"lib/euler-price-oracle/src/adapter/curve/CurveEMAOracle.sol":"CurveEMAOracle"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":20000},"remappings":[":@axiom-crypto/v2-periphery/=lib/euler-price-oracle/lib/axiom-std/lib/axiom-v2-periphery/src/",":@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/",":@layerzerolabs/lz-evm-oapp-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/oapp/",":@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/",":@layerzerolabs/oapp-evm-upgradeable/=lib/layerzero-devtools/packages/oapp-evm-upgradeable/",":@layerzerolabs/oapp-evm/=lib/layerzero-devtools/packages/oapp-evm/",":@layerzerolabs/oft-evm/=lib/layerzero-devtools/packages/oft-evm/",":@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/=lib/openzeppelin-contracts/contracts/",":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":@pendle/core-v2/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":@pyth/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":@redstone/evm-connector/=lib/euler-price-oracle/lib/redstone-oracles-monorepo/packages/evm-connector/contracts/",":@solady/=lib/euler-price-oracle/lib/solady/src/",":@uniswap/v3-core/=lib/euler-price-oracle/lib/v3-core/",":@uniswap/v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/",":ERC4626/=lib/euler-earn/lib/properties/lib/ERC4626/contracts/",":axiom-std/=lib/euler-price-oracle/lib/axiom-std/src/",":axiom-v2-periphery/=lib/euler-price-oracle/lib/axiom-v2-periphery/src/",":crytic-properties/=lib/euler-earn/lib/properties/contracts/",":ds-test/=lib/ethereum-vault-connector/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",":ethereum-vault-connector/=lib/ethereum-vault-connector/src/",":euler-earn/=lib/euler-earn/src/",":euler-price-oracle-test/=lib/euler-price-oracle/test/",":euler-price-oracle/=lib/euler-price-oracle/src/",":euler-vault-kit/=lib/euler-vault-kit/",":evc/=lib/ethereum-vault-connector/src/",":evk-test/=lib/euler-vault-kit/test/",":evk/=lib/euler-vault-kit/src/",":fee-flow/=lib/fee-flow/src/",":forge-gas-snapshot/=lib/euler-vault-kit/lib/permit2/lib/forge-gas-snapshot/src/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts-upgradeable/lib/halmos-cheatcodes/src/",":layerzero-devtools/=lib/layerzero-devtools/packages/toolbox-foundry/src/",":layerzero-v2/=lib/layerzero-v2/",":layerzero/oft-evm-upgradeable/=lib/layerzero-devtools/packages/oft-evm-upgradeable/contracts/",":layerzero/oft-evm/=lib/layerzero-devtools/packages/oft-evm/contracts/",":morpho-blue-irm/=lib/morpho-blue-irm/src/",":morpho-blue/=lib/morpho-blue-irm/lib/morpho-blue/",":native-token-transfers/=lib/native-token-transfers/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":openzeppelin-contracts/=lib/openzeppelin-contracts/contracts/",":openzeppelin/=lib/ethereum-vault-connector/lib/openzeppelin-contracts/contracts/",":pendle-core-v2-public/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":permit2/=lib/euler-vault-kit/lib/permit2/",":properties/=lib/euler-earn/lib/properties/contracts/",":pyth-sdk-solidity/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":redstone-oracles-monorepo/=lib/euler-price-oracle/lib/",":reward-streams/=lib/reward-streams/src/",":solady/=lib/euler-price-oracle/lib/solady/src/",":solidity-bytes-utils/=lib/solidity-bytes-utils/",":solmate/=lib/fee-flow/lib/solmate/src/",":v3-core/=lib/euler-price-oracle/lib/v3-core/contracts/",":v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/contracts/",":wormhole-solidity-sdk/=lib/native-token-transfers/evm/lib/wormhole-solidity-sdk/src/","lib/euler-earn:@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/","lib/euler-earn:@openzeppelin/=lib/euler-earn/lib/openzeppelin-contracts/","lib/euler-earn:ethereum-vault-connector/=lib/euler-earn/lib/ethereum-vault-connector/src/","lib/euler-price-oracle:@openzeppelin/contracts/=lib/euler-price-oracle/lib/openzeppelin-contracts/contracts/","lib/layerzero-devtools/packages/oapp-evm-upgradeable/contracts:@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/","lib/layerzero-devtools/packages/oft-evm-upgradeable/contracts:@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/","lib/layerzero-devtools/packages/oft-evm/contracts:@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts/contracts/"]},"sources":{"lib/euler-price-oracle/lib/solady/src/utils/FixedPointMathLib.sol":{"keccak256":"0xd890a3c47fd08d2d663890af4561045edc531ca1d7687bbf9dd7a2d1f15f1a3e","license":"MIT","urls":["bzz-raw://b8a4777858cb1c9ffa53f9c1f115d6e9c9af547cf02e06ab9e175da373b46da4","dweb:/ipfs/QmQSKB7DZnatj6eJtugzUvKxrxFrdzFwRMJxQpsTbtup1P"]},"lib/euler-price-oracle/src/adapter/BaseAdapter.sol":{"keccak256":"0x1ca090708d2c03edd58fdb6c22638fce41e93c5f4021b382940d088ae49c81e3","license":"GPL-2.0-or-later","urls":["bzz-raw://d00bbb80bdb34321bea2055bcb1364cd860e7662ec513254ffa61698c09526b4","dweb:/ipfs/QmeCE976ZZy6oLCP2emgBjvx8vJxKvoEJ4yF65QKLjQJDo"]},"lib/euler-price-oracle/src/adapter/curve/CurveEMAOracle.sol":{"keccak256":"0x0a0b3031784923c4b412f6a4e5f1a30f897b9839a9950d565d1d7622de8facef","license":"GPL-2.0-or-later","urls":["bzz-raw://db0a0094b4acc3fba0ea37c132ff082c806b196d1fad31ce1a904999be18fd17","dweb:/ipfs/QmPzmcEEPbGNFGGJL8NB2V14Qux6GQ1AuExjFW5DshWQge"]},"lib/euler-price-oracle/src/adapter/curve/ICurvePool.sol":{"keccak256":"0xf4979d2689a8379d21d045828f90d4fcdad9ca9baf2cbca21eb66e8fc8d2bbc6","license":"GPL-2.0-or-later","urls":["bzz-raw://1e0878a82005cb3943aa0e3e47b782caac1ed968f495c20ba4ae60287c5f0837","dweb:/ipfs/QmQPbwXymXWbcwV9Zam2sshmu3WLAVLFZZAYvQuxpNdNn7"]},"lib/euler-price-oracle/src/interfaces/IPriceOracle.sol":{"keccak256":"0x03567dd4084dc74a9e2f9eeffce4d9047989b0d2122820716c3bc75891484308","license":"GPL-2.0-or-later","urls":["bzz-raw://23965a79475c85a0a8a3a137a76424f60debd9e592bc9127d463392fad7df30f","dweb:/ipfs/QmPc1bV3kZ3ynLGTqG6xRbZ3E5AstYdfipXbysSqYGhJYA"]},"lib/euler-price-oracle/src/lib/Errors.sol":{"keccak256":"0x2551662bcef8d4a5cb7cdc8cd404f28c726af1bcfe7ef371b22d53322a932698","license":"GPL-2.0-or-later","urls":["bzz-raw://1641b99e0c907950448d62205fc23b5550c44899ba8c0bc0274a6b0a501981b9","dweb:/ipfs/QmZvDhw4Ao3m8jRjNjT8Xq8imCPecJyytUTtCUjt5RoB4v"]},"lib/euler-price-oracle/src/lib/ScaleUtils.sol":{"keccak256":"0x9bd1ac81aab20c82eacbdda286996571530cdb1505d74299b56fd51fef0be9f8","license":"GPL-2.0-or-later","urls":["bzz-raw://5be0485ea15aff9b321012c1a1102425b7c63375d4a378d2a81ae55f60038bf3","dweb:/ipfs/QmZwg2KtMWzjc6PMxJ98iTYcEVj8Bbs8YdNQNNHRq3pwfM"]},"lib/forge-std/src/interfaces/IERC20.sol":{"keccak256":"0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947","license":"MIT","urls":["bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7","dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9"]}},"version":1}',
  metadata: {
    compiler: { version: '0.8.24+commit.e11b9ed9' },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            { internalType: 'address', name: '_pool', type: 'address' },
            { internalType: 'address', name: '_base', type: 'address' },
            { internalType: 'uint256', name: '_priceOracleIndex', type: 'uint256' },
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
        { inputs: [], type: 'error', name: 'PriceOracle_Overflow' },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'base',
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
          name: 'pool',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'priceOracleIndex',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
              'The quote is always `pool.coins[0]`. If `priceOracleIndex` is `type(uint256).max`, then the adapter will call the non-indexed price method `price_oracle()` WARNING: Some StableSwap-NG pools deployed before Dec-12-2023 have a known oracle vulerability. See (https://docs.curve.fi/stableswap-exchange/stableswap-ng/pools/oracles/#price-oracles) for more details. Additionally, verify that the pool has enough liquidity before deploying this adapter.',
            params: {
              _base: 'The address of the base asset.',
              _pool: 'The address of the Curve pool.',
              _priceOracleIndex: 'The index in `price_oracle` corresponding to the base asset.',
            },
          },
          'getQuote(uint256,address,address)': {
            params: {
              base: 'The token that is being priced.',
              inAmount: 'The amount of `base` to convert.',
              quote: 'The token that is the unit of account.',
            },
            returns: { _0: 'The amount of `quote` that is equivalent to `inAmount` of `base`.' },
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
          constructor: { notice: 'Deploy a CurveEMAOracle.' },
          'getQuote(uint256,address,address)': {
            notice:
              'One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread.',
          },
          'getQuotes(uint256,address,address)': {
            notice:
              'Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token.',
          },
          'name()': { notice: 'Get the name of the oracle.' },
          'pool()': { notice: 'The address of the Curve pool.' },
          'priceOracleIndex()': {
            notice: 'The index in `price_oracle` corresponding to the base asset.',
          },
          'quote()': { notice: 'The address of the quote asset, must be `pool.coins[0]`.' },
        },
        version: 1,
      },
    },
    settings: {
      remappings: [
        '@axiom-crypto/v2-periphery/=lib/euler-price-oracle/lib/axiom-std/lib/axiom-v2-periphery/src/',
        '@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/',
        '@layerzerolabs/lz-evm-oapp-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/oapp/',
        '@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/',
        '@layerzerolabs/oapp-evm-upgradeable/=lib/layerzero-devtools/packages/oapp-evm-upgradeable/',
        '@layerzerolabs/oapp-evm/=lib/layerzero-devtools/packages/oapp-evm/',
        '@layerzerolabs/oft-evm/=lib/layerzero-devtools/packages/oft-evm/',
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
        'euler-vault-kit/=lib/euler-vault-kit/',
        'evc/=lib/ethereum-vault-connector/src/',
        'evk-test/=lib/euler-vault-kit/test/',
        'evk/=lib/euler-vault-kit/src/',
        'fee-flow/=lib/fee-flow/src/',
        'forge-gas-snapshot/=lib/euler-vault-kit/lib/permit2/lib/forge-gas-snapshot/src/',
        'forge-std/=lib/forge-std/src/',
        'halmos-cheatcodes/=lib/openzeppelin-contracts-upgradeable/lib/halmos-cheatcodes/src/',
        'layerzero-devtools/=lib/layerzero-devtools/packages/toolbox-foundry/src/',
        'layerzero-v2/=lib/layerzero-v2/',
        'layerzero/oft-evm-upgradeable/=lib/layerzero-devtools/packages/oft-evm-upgradeable/contracts/',
        'layerzero/oft-evm/=lib/layerzero-devtools/packages/oft-evm/contracts/',
        'morpho-blue-irm/=lib/morpho-blue-irm/src/',
        'morpho-blue/=lib/morpho-blue-irm/lib/morpho-blue/',
        'native-token-transfers/=lib/native-token-transfers/',
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
        'solidity-bytes-utils/=lib/solidity-bytes-utils/',
        'solmate/=lib/fee-flow/lib/solmate/src/',
        'v3-core/=lib/euler-price-oracle/lib/v3-core/contracts/',
        'v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/contracts/',
        'wormhole-solidity-sdk/=lib/native-token-transfers/evm/lib/wormhole-solidity-sdk/src/',
        'lib/euler-earn:@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/',
        'lib/euler-earn:@openzeppelin/=lib/euler-earn/lib/openzeppelin-contracts/',
        'lib/euler-earn:ethereum-vault-connector/=lib/euler-earn/lib/ethereum-vault-connector/src/',
        'lib/euler-price-oracle:@openzeppelin/contracts/=lib/euler-price-oracle/lib/openzeppelin-contracts/contracts/',
        'lib/layerzero-devtools/packages/oapp-evm-upgradeable/contracts:@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/',
        'lib/layerzero-devtools/packages/oft-evm-upgradeable/contracts:@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/',
        'lib/layerzero-devtools/packages/oft-evm/contracts:@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts/contracts/',
      ],
      optimizer: { enabled: true, runs: 20000 },
      metadata: { bytecodeHash: 'ipfs' },
      compilationTarget: {
        'lib/euler-price-oracle/src/adapter/curve/CurveEMAOracle.sol': 'CurveEMAOracle',
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
      'lib/euler-price-oracle/src/adapter/curve/CurveEMAOracle.sol': {
        keccak256: '0x0a0b3031784923c4b412f6a4e5f1a30f897b9839a9950d565d1d7622de8facef',
        urls: [
          'bzz-raw://db0a0094b4acc3fba0ea37c132ff082c806b196d1fad31ce1a904999be18fd17',
          'dweb:/ipfs/QmPzmcEEPbGNFGGJL8NB2V14Qux6GQ1AuExjFW5DshWQge',
        ],
        license: 'GPL-2.0-or-later',
      },
      'lib/euler-price-oracle/src/adapter/curve/ICurvePool.sol': {
        keccak256: '0xf4979d2689a8379d21d045828f90d4fcdad9ca9baf2cbca21eb66e8fc8d2bbc6',
        urls: [
          'bzz-raw://1e0878a82005cb3943aa0e3e47b782caac1ed968f495c20ba4ae60287c5f0837',
          'dweb:/ipfs/QmQPbwXymXWbcwV9Zam2sshmu3WLAVLFZZAYvQuxpNdNn7',
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
  id: 90,
} as const;
