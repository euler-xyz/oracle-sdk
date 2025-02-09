export default {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: '_base', type: 'address', internalType: 'address' },
        { name: '_quote', type: 'address', internalType: 'address' },
        { name: '_feed', type: 'address', internalType: 'address' },
        {
          name: '_maxStaleness',
          type: 'uint256',
          internalType: 'uint256',
        },
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
      name: 'feed',
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
      name: 'quote',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    { type: 'error', name: 'PriceOracle_InvalidAnswer', inputs: [] },
    {
      type: 'error',
      name: 'PriceOracle_InvalidConfiguration',
      inputs: [],
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
    {
      type: 'error',
      name: 'PriceOracle_TooStale',
      inputs: [
        { name: 'staleness', type: 'uint256', internalType: 'uint256' },
        { name: 'maxStaleness', type: 'uint256', internalType: 'uint256' },
      ],
    },
  ],
  bytecode: {
    object:
      '0x61012060405234801562000011575f80fd5b5060405162000cd638038062000cd6833981016040819052620000349162000299565b603c8110806200004157505f5b1562000060576040516301a4c16560e21b815260040160405180910390fd5b6001600160a01b03808516608081905284821660a05290831660c05260e08290525f906200008e906200012d565b90505f620000a460a0516200012d60201b60201c565b90505f60c0516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000e6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200010c9190620002e8565b90506200011b8383836200020d565b61010052506200047895505050505050565b5f63ffffffff826001600160a01b0316116200014b57506012919050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290515f9182916001600160a01b038616916200018f9162000311565b5f60405180830381855afa9150503d805f8114620001c9576040519150601f19603f3d011682016040523d82523d5f602084013e620001ce565b606091505b5091509150818015620001e2575080516020145b620001ef57601262000205565b80806020019051810190620002059190620002e8565b949350505050565b5f62000205836200021f868562000353565b5f60268360ff16118062000236575060268260ff16115b1562000255576040516302950f9560e51b815260040160405180910390fd5b6200026283600a62000468565b60806200027184600a62000468565b901b1790505b92915050565b80516001600160a01b038116811462000294575f80fd5b919050565b5f805f8060808587031215620002ad575f80fd5b620002b8856200027d565b9350620002c8602086016200027d565b9250620002d8604086016200027d565b6060959095015193969295505050565b5f60208284031215620002f9575f80fd5b815160ff811681146200030a575f80fd5b9392505050565b5f82515f5b8181101562000332576020818601810151858301520162000316565b505f920191825250919050565b634e487b7160e01b5f52601160045260245ffd5b60ff81811683821601908111156200027757620002776200033f565b600181815b80851115620003af57815f19048211156200039357620003936200033f565b80851615620003a157918102915b93841c939080029062000374565b509250929050565b5f82620003c75750600162000277565b81620003d557505f62000277565b8160018114620003ee5760028114620003f95762000419565b600191505062000277565b60ff8411156200040d576200040d6200033f565b50506001821b62000277565b5060208310610133831016604e8410600b84101617156200043e575081810a62000277565b6200044a83836200036f565b805f19048211156200046057620004606200033f565b029392505050565b5f6200030a60ff841683620003b7565b60805160a05160c05160e051610100516107fe620004d85f395f6103c201525f818161016c01528181610334015261038901525f818160f9015261025a01525f81816101a1015261023001525f8181610145015261020e01526107fe5ff3fe608060405234801561000f575f80fd5b506004361061007a575f3560e01c80635001f3b5116100585780635001f3b51461014057806387cf469614610167578063999b93af1461019c578063ae68676c146101c3575f80fd5b80630579e61f1461007e57806306fdde03146100ab57806337a7b7d8146100f4575b5f80fd5b61009161008c366004610663565b6101d6565b604080519283526020830191909152015b60405180910390f35b6100e76040518060400160405280601981526020017f436861696e6c696e6b496e6672657175656e744f7261636c650000000000000081525081565b6040516100a2919061069c565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a2565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b61018e7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100a2565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b61018e6101d1366004610663565b6101f0565b5f805f6101e4868686610206565b96879650945050505050565b5f6101fc848484610206565b90505b9392505050565b5f80610254847f0000000000000000000000000000000000000000000000000000000000000000857f00000000000000000000000000000000000000000000000000000000000000006103f4565b90505f807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156102c1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102e5919061071f565b509350509250505f8213610325576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6103308242610798565b90507f00000000000000000000000000000000000000000000000000000000000000008111156103ba576040517fa6e68d63000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000060248201526044015b60405180910390fd5b826103e789827f000000000000000000000000000000000000000000000000000000000000000088610534565b9998505050505050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561045b57508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561046757505f61052c565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480156104cd57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156104da5750600161052c565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8087166004830152841660248201526044016103b1565b949350505050565b5f6fffffffffffffffffffffffffffffffff8316608084901c831561057057610567878261056289866107b1565b610580565b9250505061052c565b6105678761057e88856107b1565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83850981811082019003806105ce57826105c55763ae47f7025f526004601cfd5b508190046101ff565b8083116105e25763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461065e575f80fd5b919050565b5f805f60608486031215610675575f80fd5b833592506106856020850161063b565b91506106936040850161063b565b90509250925092565b5f602080835283518060208501525f5b818110156106c8578581018301518582016040015282016106ac565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b805169ffffffffffffffffffff8116811461065e575f80fd5b5f805f805f60a08688031215610733575f80fd5b61073c86610706565b945060208601519350604086015192506060860151915061075f60808701610706565b90509295509295909350565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156107ab576107ab61076b565b92915050565b80820281158282048414176107ab576107ab61076b56fea2646970667358221220bbc39c409d4697c843913afb02e2a76062f903f0e904eb2b5790988f5a21482e64736f6c63430008180033',
    sourceMap:
      '735:3191:69:-:0;;;2305:687;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1005:9;2400:13;:41;:86;;;-1:-1:-1;2445:41:69;2400:86;2396:165;;;2509:41;;-1:-1:-1;;;2509:41:69;;;;;;;;;;;2396:165;-1:-1:-1;;;;;2571:12:69;;;;;;;2593:14;;;;;2617:12;;;;;2639:28;;;;2745:18;;2766;;:12;:18::i;:::-;2745:39;;2794:19;2816;2829:5;;2816:12;;;:19;;:::i;:::-;2794:41;;2845:18;2888:4;;-1:-1:-1;;;;;2866:36:69;;:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2845:59;-1:-1:-1;2922:63:69;2943:12;2957:13;2845:59;2922:20;:63::i;:::-;2914:71;;-1:-1:-1;735:3191:69;;-1:-1:-1;;;;;;735:3191:69;1798:316:66;1858:5;709:10;1887:5;-1:-1:-1;;;;;1879:40:66;;1875:55;;-1:-1:-1;1928:2:66;;1798:316;-1:-1:-1;1798:316:66:o;1875:55::-;1993:35;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1993:35:66;-1:-1:-1;;;1993:35:66;;;1976:53;;1941:12;;;;-1:-1:-1;;;;;1976:16:66;;;:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1940:89;;;;2046:7;:28;;;;;2057:4;:11;2072:2;2057:17;2046:28;:61;;2105:2;2046:61;;;2088:4;2077:25;;;;;;;;;;;;:::i;:::-;2039:68;1798:316;-1:-1:-1;;;;1798:316:66:o;2551:182:89:-;2654:5;2678:48;2683:13;2698:27;2713:12;2698;:27;:::i;:::-;1192:5;727:2;1213:13;:28;;;:59;;;;727:2;1245:12;:27;;;1213:59;1209:126;;;1295:29;;-1:-1:-1;;;1295:29:89;;;;;;;;;;;1209:126;1392:19;1398:13;1392:2;:19;:::i;:::-;1385:3;1363:18;1369:12;1363:2;:18;:::i;:::-;:25;;1362:49;1344:68;;1114:305;;;;;:::o;14:177:456:-;93:13;;-1:-1:-1;;;;;135:31:456;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:440::-;293:6;301;309;317;370:3;358:9;349:7;345:23;341:33;338:53;;;387:1;384;377:12;338:53;410:40;440:9;410:40;:::i;:::-;400:50;;469:49;514:2;503:9;499:18;469:49;:::i;:::-;459:59;;537:49;582:2;571:9;567:18;537:49;:::i;:::-;626:2;611:18;;;;605:25;196:440;;;;-1:-1:-1;;;196:440:456:o;641:273::-;709:6;762:2;750:9;741:7;737:23;733:32;730:52;;;778:1;775;768:12;730:52;810:9;804:16;860:4;853:5;849:16;842:5;839:27;829:55;;880:1;877;870:12;829:55;903:5;641:273;-1:-1:-1;;;641:273:456:o;919:412::-;1048:3;1086:6;1080:13;1111:1;1121:129;1135:6;1132:1;1129:13;1121:129;;;1233:4;1217:14;;;1213:25;;1207:32;1194:11;;;1187:53;1150:12;1121:129;;;-1:-1:-1;1305:1:456;1269:16;;1294:13;;;-1:-1:-1;1269:16:456;919:412;-1:-1:-1;919:412:456:o;1336:127::-;1397:10;1392:3;1388:20;1385:1;1378:31;1428:4;1425:1;1418:15;1452:4;1449:1;1442:15;1468:148;1556:4;1535:12;;;1549;;;1531:31;;1574:13;;1571:39;;;1590:18;;:::i;1621:416::-;1710:1;1747:5;1710:1;1761:270;1782:7;1772:8;1769:21;1761:270;;;1841:4;1837:1;1833:6;1829:17;1823:4;1820:27;1817:53;;;1850:18;;:::i;:::-;1900:7;1890:8;1886:22;1883:55;;;1920:16;;;;1883:55;1999:22;;;;1959:15;;;;1761:270;;;1765:3;1621:416;;;;;:::o;2042:806::-;2091:5;2121:8;2111:80;;-1:-1:-1;2162:1:456;2176:5;;2111:80;2210:4;2200:76;;-1:-1:-1;2247:1:456;2261:5;;2200:76;2292:4;2310:1;2305:59;;;;2378:1;2373:130;;;;2285:218;;2305:59;2335:1;2326:10;;2349:5;;;2373:130;2410:3;2400:8;2397:17;2394:43;;;2417:18;;:::i;:::-;-1:-1:-1;;2473:1:456;2459:16;;2488:5;;2285:218;;2587:2;2577:8;2574:16;2568:3;2562:4;2559:13;2555:36;2549:2;2539:8;2536:16;2531:2;2525:4;2522:12;2518:35;2515:77;2512:159;;;-1:-1:-1;2624:19:456;;;2656:5;;2512:159;2703:34;2728:8;2722:4;2703:34;:::i;:::-;2773:6;2769:1;2765:6;2761:19;2752:7;2749:32;2746:58;;;2784:18;;:::i;:::-;2822:20;;2042:806;-1:-1:-1;;;2042:806:456:o;2853:140::-;2911:5;2940:47;2981:4;2971:8;2967:19;2961:4;2940:47;:::i;2853:140::-;735:3191:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      '0x608060405234801561000f575f80fd5b506004361061007a575f3560e01c80635001f3b5116100585780635001f3b51461014057806387cf469614610167578063999b93af1461019c578063ae68676c146101c3575f80fd5b80630579e61f1461007e57806306fdde03146100ab57806337a7b7d8146100f4575b5f80fd5b61009161008c366004610663565b6101d6565b604080519283526020830191909152015b60405180910390f35b6100e76040518060400160405280601981526020017f436861696e6c696e6b496e6672657175656e744f7261636c650000000000000081525081565b6040516100a2919061069c565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a2565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b61018e7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100a2565b61011b7f000000000000000000000000000000000000000000000000000000000000000081565b61018e6101d1366004610663565b6101f0565b5f805f6101e4868686610206565b96879650945050505050565b5f6101fc848484610206565b90505b9392505050565b5f80610254847f0000000000000000000000000000000000000000000000000000000000000000857f00000000000000000000000000000000000000000000000000000000000000006103f4565b90505f807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156102c1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102e5919061071f565b509350509250505f8213610325576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6103308242610798565b90507f00000000000000000000000000000000000000000000000000000000000000008111156103ba576040517fa6e68d63000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000060248201526044015b60405180910390fd5b826103e789827f000000000000000000000000000000000000000000000000000000000000000088610534565b9998505050505050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561045b57508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561046757505f61052c565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480156104cd57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156104da5750600161052c565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8087166004830152841660248201526044016103b1565b949350505050565b5f6fffffffffffffffffffffffffffffffff8316608084901c831561057057610567878261056289866107b1565b610580565b9250505061052c565b6105678761057e88856107b1565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83850981811082019003806105ce57826105c55763ae47f7025f526004601cfd5b508190046101ff565b8083116105e25763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461065e575f80fd5b919050565b5f805f60608486031215610675575f80fd5b833592506106856020850161063b565b91506106936040850161063b565b90509250925092565b5f602080835283518060208501525f5b818110156106c8578581018301518582016040015282016106ac565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b805169ffffffffffffffffffff8116811461065e575f80fd5b5f805f805f60a08688031215610733575f80fd5b61073c86610706565b945060208601519350604086015192506060860151915061075f60808701610706565b90509295509295909350565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156107ab576107ab61076b565b92915050565b80820281158282048414176107ab576107ab61076b56fea2646970667358221220bbc39c409d4697c843913afb02e2a76062f903f0e904eb2b5790988f5a21482e64736f6c63430008180033',
    sourceMap:
      '735:3191:69:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1003:215:66;;;;;;:::i;:::-;;:::i;:::-;;;;722:25:456;;;778:2;763:18;;756:34;;;;695:18;1003:215:66;;;;;;;;824:57:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;1506:29::-;;;;;;;;1589:42:456;1577:55;;;1559:74;;1547:2;1532:18;1506:29:69;1413:226:456;1234:29:69;;;;;1663:37;;;;;;;;1790:25:456;;;1778:2;1763:18;1663:37:69;1644:177:456;1343:30:69;;;;;759:153:66;;;;;;:::i;:::-;;:::i;1003:215::-;1092:7;1101;1120:17;1140:32;1150:8;1160:4;1166:5;1140:9;:32::i;:::-;1120:52;;;-1:-1:-1;1003:215:66;-1:-1:-1;;;;;1003:215:66:o;759:153::-;847:7;873:32;883:8;893:4;899:5;873:9;:32::i;:::-;866:39;;759:153;;;;;;:::o;3287:637:69:-;3387:7;3406:12;3421:59;3453:5;3460:4;3466:6;3474:5;3421:31;:59::i;:::-;3406:74;;3494:13;3510:17;3554:4;3532:43;;;:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3491:86;;;;;;;3601:1;3591:6;:11;3587:58;;3611:34;;;;;;;;;;;;;;3587:58;3655:17;3675:27;3693:9;3675:15;:27;:::i;:::-;3655:47;;3728:12;3716:9;:24;3712:89;;;3749:52;;;;;;;;722:25:456;;;3788:12:69;763:18:456;;;756:34;695:18;;3749:52:69;;;;;;;;3712:89;3836:6;3860:57;3885:8;3836:6;3902:5;3909:7;3860:24;:57::i;:::-;3853:64;3287:637;-1:-1:-1;;;;;;;;;3287:637:69:o;1829:368:89:-;1974:4;2011;1998:17;;:9;:17;;;:40;;;;;2033:5;2019:19;;:10;:19;;;1998:40;1994:58;;;-1:-1:-1;2047:5:89;2040:12;;1994:58;2079:5;2066:18;;:9;:18;;;:40;;;;;2102:4;2088:18;;:10;:18;;;2066:40;2062:57;;;-1:-1:-1;2115:4:89;2108:11;;2062:57;2136:54;;;;;2994:42:456;3063:15;;;2136:54:89;;;3045:34:456;3115:15;;3095:18;;;3088:43;2957:18;;2136:54:89;2810:327:456;1829:368:89;;;;;;;:::o;3090:645::-;3224:7;470:66;3268:38;;3359:3;3336:26;;;3372:357;;;;3471:73;3500:8;3510:9;3521:22;3534:9;3521:10;:22;:::i;:::-;3471:28;:73::i;:::-;3464:80;;;;;;3372:357;3645:73;3674:8;3684:22;3697:9;3684:10;:22;:::i;:::-;3708:9;20285:3569:52;20897:9;;;20995:6;20904:1;20901;20982:20;21110:14;;;21098:27;;21090:36;;;21211:278;;21257:1;21247:153;;21299:10;21293:4;21286:24;21373:4;21367;21360:18;21247:153;-1:-1:-1;21431:14:52;;;21466:5;;21211:278;21610:2;21607:1;21604:9;21594:149;;21650:10;21644:4;21637:24;21720:4;21714;21707:18;21594:149;22000:1;21997;21994;21987:15;22148:1;22144:9;;;22137:17;;22239:9;;;;;23559:13;;;23551:22;;;23583:9;;;;23579:17;;;23598:1;23575:25;23547:54;23635:14;;23631:22;23515:164;22614:1;22621;22617:9;;22610:17;;22896:11;;;22889:19;;22880:29;22969:11;;;22962:19;;22953:29;23043:11;;;23036:19;;23027:29;23117:11;;;23110:19;;23101:29;23191:11;;;23184:19;;23175:29;23767:11;;;23760:19;;;23751:29;23273:529;20285:3569;;;;;:::o;14:196:456:-;82:20;;142:42;131:54;;121:65;;111:93;;200:1;197;190:12;111:93;14:196;;;:::o;215:328::-;292:6;300;308;361:2;349:9;340:7;336:23;332:32;329:52;;;377:1;374;367:12;329:52;413:9;400:23;390:33;;442:38;476:2;465:9;461:18;442:38;:::i;:::-;432:48;;499:38;533:2;522:9;518:18;499:38;:::i;:::-;489:48;;215:328;;;;;:::o;801:607::-;913:4;942:2;971;960:9;953:21;1003:6;997:13;1046:6;1041:2;1030:9;1026:18;1019:34;1071:1;1081:140;1095:6;1092:1;1089:13;1081:140;;;1190:14;;;1186:23;;1180:30;1156:17;;;1175:2;1152:26;1145:66;1110:10;;1081:140;;;1085:3;1270:1;1265:2;1256:6;1245:9;1241:22;1237:31;1230:42;1399:2;1329:66;1324:2;1316:6;1312:15;1308:88;1297:9;1293:104;1289:113;1281:121;;;;801:607;;;;:::o;1826:179::-;1904:13;;1957:22;1946:34;;1936:45;;1926:73;;1995:1;1992;1985:12;2010:473;2113:6;2121;2129;2137;2145;2198:3;2186:9;2177:7;2173:23;2169:33;2166:53;;;2215:1;2212;2205:12;2166:53;2238:39;2267:9;2238:39;:::i;:::-;2228:49;;2317:2;2306:9;2302:18;2296:25;2286:35;;2361:2;2350:9;2346:18;2340:25;2330:35;;2405:2;2394:9;2390:18;2384:25;2374:35;;2428:49;2472:3;2461:9;2457:19;2428:49;:::i;:::-;2418:59;;2010:473;;;;;;;;:::o;2488:184::-;2540:77;2537:1;2530:88;2637:4;2634:1;2627:15;2661:4;2658:1;2651:15;2677:128;2744:9;;;2765:11;;;2762:37;;;2779:18;;:::i;:::-;2677:128;;;;:::o;3142:168::-;3215:9;;;3246;;3263:15;;;3257:22;;3243:37;3233:71;;3284:18;;:::i',
    linkReferences: {},
    immutableReferences: {
      '19371': [
        { start: 325, length: 32 },
        { start: 526, length: 32 },
      ],
      '19374': [
        { start: 417, length: 32 },
        { start: 560, length: 32 },
      ],
      '19377': [
        { start: 249, length: 32 },
        { start: 602, length: 32 },
      ],
      '19380': [
        { start: 364, length: 32 },
        { start: 820, length: 32 },
        { start: 905, length: 32 },
      ],
      '19384': [{ start: 962, length: 32 }],
    },
  },
  methodIdentifiers: {
    'base()': '5001f3b5',
    'feed()': '37a7b7d8',
    'getQuote(uint256,address,address)': 'ae68676c',
    'getQuotes(uint256,address,address)': '0579e61f',
    'maxStaleness()': '87cf4696',
    'name()': '06fdde03',
    'quote()': '999b93af',
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_base","type":"address"},{"internalType":"address","name":"_quote","type":"address"},{"internalType":"address","name":"_feed","type":"address"},{"internalType":"uint256","name":"_maxStaleness","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"PriceOracle_InvalidAnswer","type":"error"},{"inputs":[],"name":"PriceOracle_InvalidConfiguration","type":"error"},{"inputs":[{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"PriceOracle_NotSupported","type":"error"},{"inputs":[],"name":"PriceOracle_Overflow","type":"error"},{"inputs":[{"internalType":"uint256","name":"staleness","type":"uint256"},{"internalType":"uint256","name":"maxStaleness","type":"uint256"}],"name":"PriceOracle_TooStale","type":"error"},{"inputs":[],"name":"base","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feed","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStaleness","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"quote","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"author":"Euler Labs (https://www.eulerlabs.com/)","custom:security-contact":"security@euler.xyz","details":"Integration Note: `maxStaleness` is an immutable parameter set in the constructor. If the aggregator\'s heartbeat changes, this adapter may exhibit unintended behavior. Modified from `ChainlinkOracle` to allow larger values for `maxStaleness`.","errors":{"PriceOracle_NotSupported(address,address)":[{"params":{"base":"The address of the base asset.","quote":"The address of the quote asset."}}],"PriceOracle_TooStale(uint256,uint256)":[{"params":{"maxStaleness":"The maximum time elapsed since the last price update.","staleness":"The time elapsed since the price was updated."}}]},"kind":"dev","methods":{"constructor":{"details":"Consider setting `_maxStaleness` to slightly more than the feed\'s heartbeat to account for possible network delays when the heartbeat is triggered.","params":{"_base":"The address of the base asset corresponding to the feed.","_feed":"The address of the Chainlink price feed.","_maxStaleness":"The maximum allowed age of the price.","_quote":"The address of the quote asset corresponding to the feed."}},"getQuote(uint256,address,address)":{"params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` that is equivalent to `inAmount` of `base`."}},"getQuotes(uint256,address,address)":{"details":"Does not support true bid/ask pricing.","params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` you would get for selling `inAmount` of `base`.","_1":"The amount of `quote` you would spend for buying `inAmount` of `base`."}}},"stateVariables":{"feed":{"details":"https://docs.chain.link/data-feeds/price-feeds/addresses"},"maxStaleness":{"details":"Reverts if block.timestamp - updatedAt > maxStaleness."},"name":{"return":"The name of the oracle.","returns":{"_0":"The name of the oracle."}}},"title":"ChainlinkInfrequentOracle","version":1},"userdoc":{"errors":{"PriceOracle_InvalidAnswer()":[{"notice":"The external feed returned an invalid answer."}],"PriceOracle_InvalidConfiguration()":[{"notice":"The configuration parameters for the PriceOracle are invalid."}],"PriceOracle_NotSupported(address,address)":[{"notice":"The base/quote path is not supported."}],"PriceOracle_Overflow()":[{"notice":"The quote cannot be completed due to overflow."}],"PriceOracle_TooStale(uint256,uint256)":[{"notice":"The price is too stale."}]},"kind":"user","methods":{"base()":{"notice":"The address of the base asset corresponding to the feed."},"constructor":{"notice":"Deploy a ChainlinkOracle."},"feed()":{"notice":"The address of the Chainlink price feed."},"getQuote(uint256,address,address)":{"notice":"One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread."},"getQuotes(uint256,address,address)":{"notice":"Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token."},"maxStaleness()":{"notice":"The maximum allowed age of the price."},"name()":{"notice":"Get the name of the oracle."},"quote()":{"notice":"The address of the quote asset corresponding to the feed."}},"notice":"PriceOracle adapter for Chainlink push-based price feeds.","version":1}},"settings":{"compilationTarget":{"lib/euler-price-oracle/src/adapter/chainlink/ChainlinkInfrequentOracle.sol":"ChainlinkInfrequentOracle"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":20000},"remappings":[":@axiom-crypto/v2-periphery/=lib/euler-price-oracle/lib/axiom-std/lib/axiom-v2-periphery/src/",":@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/=lib/openzeppelin-contracts/contracts/",":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":@pendle/core-v2/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":@pyth/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":@redstone/evm-connector/=lib/euler-price-oracle/lib/redstone-oracles-monorepo/packages/evm-connector/contracts/",":@solady/=lib/euler-price-oracle/lib/solady/src/",":@uniswap/v3-core/=lib/euler-price-oracle/lib/v3-core/",":@uniswap/v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/",":ERC4626/=lib/euler-earn/lib/properties/lib/ERC4626/contracts/",":axiom-std/=lib/euler-price-oracle/lib/axiom-std/src/",":axiom-v2-periphery/=lib/euler-price-oracle/lib/axiom-v2-periphery/src/",":crytic-properties/=lib/euler-earn/lib/properties/contracts/",":ds-test/=lib/ethereum-vault-connector/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",":ethereum-vault-connector/=lib/ethereum-vault-connector/src/",":euler-earn/=lib/euler-earn/src/",":euler-price-oracle-test/=lib/euler-price-oracle/test/",":euler-price-oracle/=lib/euler-price-oracle/src/",":euler-vault-kit/=lib/euler-vault-kit/src/",":evc/=lib/ethereum-vault-connector/src/",":evk-test/=lib/euler-vault-kit/test/",":evk/=lib/euler-vault-kit/src/",":fee-flow/=lib/fee-flow/src/",":forge-gas-snapshot/=lib/euler-vault-kit/lib/permit2/lib/forge-gas-snapshot/src/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts-upgradeable/lib/halmos-cheatcodes/src/",":native-token-transfers/=lib/native-token-transfers/evm/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":openzeppelin-contracts/=lib/openzeppelin-contracts/contracts/",":openzeppelin/=lib/ethereum-vault-connector/lib/openzeppelin-contracts/contracts/",":pendle-core-v2-public/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":permit2/=lib/euler-vault-kit/lib/permit2/",":properties/=lib/euler-earn/lib/properties/contracts/",":pyth-sdk-solidity/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":redstone-oracles-monorepo/=lib/euler-price-oracle/lib/",":reward-streams/=lib/reward-streams/src/",":solady/=lib/euler-price-oracle/lib/solady/src/",":solidity-bytes-utils/=lib/native-token-transfers/evm/lib/solidity-bytes-utils/contracts/",":solmate/=lib/fee-flow/lib/solmate/src/",":v3-core/=lib/euler-price-oracle/lib/v3-core/contracts/",":v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/contracts/",":wormhole-solidity-sdk/=lib/native-token-transfers/evm/lib/wormhole-solidity-sdk/src/","lib/euler-price-oracle:@openzeppelin/contracts/=lib/euler-price-oracle/lib/openzeppelin-contracts/contracts/","lib/native-token-transfers/evm:openzeppelin-contracts/contracts/=lib/native-token-transfers/evm/lib/openzeppelin-contracts/contracts/"]},"sources":{"lib/euler-price-oracle/lib/solady/src/utils/FixedPointMathLib.sol":{"keccak256":"0xd890a3c47fd08d2d663890af4561045edc531ca1d7687bbf9dd7a2d1f15f1a3e","license":"MIT","urls":["bzz-raw://b8a4777858cb1c9ffa53f9c1f115d6e9c9af547cf02e06ab9e175da373b46da4","dweb:/ipfs/QmQSKB7DZnatj6eJtugzUvKxrxFrdzFwRMJxQpsTbtup1P"]},"lib/euler-price-oracle/src/adapter/BaseAdapter.sol":{"keccak256":"0x1ca090708d2c03edd58fdb6c22638fce41e93c5f4021b382940d088ae49c81e3","license":"GPL-2.0-or-later","urls":["bzz-raw://d00bbb80bdb34321bea2055bcb1364cd860e7662ec513254ffa61698c09526b4","dweb:/ipfs/QmeCE976ZZy6oLCP2emgBjvx8vJxKvoEJ4yF65QKLjQJDo"]},"lib/euler-price-oracle/src/adapter/chainlink/AggregatorV3Interface.sol":{"keccak256":"0xe194a399e3116518f2d400d6efcba0dd50c54370fe1c1cd7856a85fe1b37eff2","license":"MIT","urls":["bzz-raw://7842782856c8474d80aed065a5a307395e2d6665298ff6a5e0fe80fdac4faf9c","dweb:/ipfs/QmQk6VV64sgUpaGRhjYF2i6i2bAdKCCq87EJQShi77SacZ"]},"lib/euler-price-oracle/src/adapter/chainlink/ChainlinkInfrequentOracle.sol":{"keccak256":"0xdb02e12d48380eeeedf22a023bc83ccce47cbe00fc76c5f4563b9cb17245d4f8","license":"GPL-2.0-or-later","urls":["bzz-raw://2ba4c4dc1cb482e05e445944e185375ce33a0f6caec052983e3b1ad64b6b1b61","dweb:/ipfs/QmaUUej22omMwCt1TGD59acb8uaHtc6hW5w5amAjKtEVu2"]},"lib/euler-price-oracle/src/interfaces/IPriceOracle.sol":{"keccak256":"0x03567dd4084dc74a9e2f9eeffce4d9047989b0d2122820716c3bc75891484308","license":"GPL-2.0-or-later","urls":["bzz-raw://23965a79475c85a0a8a3a137a76424f60debd9e592bc9127d463392fad7df30f","dweb:/ipfs/QmPc1bV3kZ3ynLGTqG6xRbZ3E5AstYdfipXbysSqYGhJYA"]},"lib/euler-price-oracle/src/lib/Errors.sol":{"keccak256":"0x2551662bcef8d4a5cb7cdc8cd404f28c726af1bcfe7ef371b22d53322a932698","license":"GPL-2.0-or-later","urls":["bzz-raw://1641b99e0c907950448d62205fc23b5550c44899ba8c0bc0274a6b0a501981b9","dweb:/ipfs/QmZvDhw4Ao3m8jRjNjT8Xq8imCPecJyytUTtCUjt5RoB4v"]},"lib/euler-price-oracle/src/lib/ScaleUtils.sol":{"keccak256":"0x9bd1ac81aab20c82eacbdda286996571530cdb1505d74299b56fd51fef0be9f8","license":"GPL-2.0-or-later","urls":["bzz-raw://5be0485ea15aff9b321012c1a1102425b7c63375d4a378d2a81ae55f60038bf3","dweb:/ipfs/QmZwg2KtMWzjc6PMxJ98iTYcEVj8Bbs8YdNQNNHRq3pwfM"]},"lib/forge-std/src/interfaces/IERC20.sol":{"keccak256":"0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947","license":"MIT","urls":["bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7","dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9"]}},"version":1}',
  metadata: {
    compiler: { version: '0.8.24+commit.e11b9ed9' },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            { internalType: 'address', name: '_base', type: 'address' },
            { internalType: 'address', name: '_quote', type: 'address' },
            { internalType: 'address', name: '_feed', type: 'address' },
            {
              internalType: 'uint256',
              name: '_maxStaleness',
              type: 'uint256',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        { inputs: [], type: 'error', name: 'PriceOracle_InvalidAnswer' },
        {
          inputs: [],
          type: 'error',
          name: 'PriceOracle_InvalidConfiguration',
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
          inputs: [
            {
              internalType: 'uint256',
              name: 'staleness',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxStaleness',
              type: 'uint256',
            },
          ],
          type: 'error',
          name: 'PriceOracle_TooStale',
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
          name: 'feed',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'inAmount',
              type: 'uint256',
            },
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
            {
              internalType: 'uint256',
              name: 'inAmount',
              type: 'uint256',
            },
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
          name: 'quote',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
        },
      ],
      devdoc: {
        kind: 'dev',
        methods: {
          constructor: {
            details:
              "Consider setting `_maxStaleness` to slightly more than the feed's heartbeat to account for possible network delays when the heartbeat is triggered.",
            params: {
              _base: 'The address of the base asset corresponding to the feed.',
              _feed: 'The address of the Chainlink price feed.',
              _maxStaleness: 'The maximum allowed age of the price.',
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
          constructor: { notice: 'Deploy a ChainlinkOracle.' },
          'feed()': { notice: 'The address of the Chainlink price feed.' },
          'getQuote(uint256,address,address)': {
            notice:
              'One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread.',
          },
          'getQuotes(uint256,address,address)': {
            notice:
              'Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token.',
          },
          'maxStaleness()': {
            notice: 'The maximum allowed age of the price.',
          },
          'name()': { notice: 'Get the name of the oracle.' },
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
        'lib/euler-price-oracle/src/adapter/chainlink/ChainlinkInfrequentOracle.sol':
          'ChainlinkInfrequentOracle',
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
      'lib/euler-price-oracle/src/adapter/chainlink/AggregatorV3Interface.sol': {
        keccak256: '0xe194a399e3116518f2d400d6efcba0dd50c54370fe1c1cd7856a85fe1b37eff2',
        urls: [
          'bzz-raw://7842782856c8474d80aed065a5a307395e2d6665298ff6a5e0fe80fdac4faf9c',
          'dweb:/ipfs/QmQk6VV64sgUpaGRhjYF2i6i2bAdKCCq87EJQShi77SacZ',
        ],
        license: 'MIT',
      },
      'lib/euler-price-oracle/src/adapter/chainlink/ChainlinkInfrequentOracle.sol': {
        keccak256: '0xdb02e12d48380eeeedf22a023bc83ccce47cbe00fc76c5f4563b9cb17245d4f8',
        urls: [
          'bzz-raw://2ba4c4dc1cb482e05e445944e185375ce33a0f6caec052983e3b1ad64b6b1b61',
          'dweb:/ipfs/QmaUUej22omMwCt1TGD59acb8uaHtc6hW5w5amAjKtEVu2',
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
  id: 69,
} as const;
