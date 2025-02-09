export default {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: '_base', type: 'address', internalType: 'address' },
        { name: '_quote', type: 'address', internalType: 'address' },
        { name: '_rateProvider', type: 'address', internalType: 'address' },
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
      name: 'quote',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'rateProvider',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    { type: 'error', name: 'PriceOracle_InvalidAnswer', inputs: [] },
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
      '0x61010060405234801562000011575f80fd5b5060405162000ae538038062000ae58339810160408190526200003491620001fe565b6001600160a01b03808416608081905283821660a05290821660c0525f906200005d9062000092565b90505f6200007360a0516200009260201b60201c565b9050620000838282601262000172565b60e05250620003d59350505050565b5f63ffffffff826001600160a01b031611620000b057506012919050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290515f9182916001600160a01b03861691620000f49162000245565b5f60405180830381855afa9150503d805f81146200012e576040519150601f19603f3d011682016040523d82523d5f602084013e62000133565b606091505b509150915081801562000147575080516020145b620001545760126200016a565b808060200190518101906200016a919062000273565b949350505050565b5f6200016a83620001848685620002b0565b5f60268360ff1611806200019b575060268260ff16115b15620001ba576040516302950f9560e51b815260040160405180910390fd5b620001c783600a620003c5565b6080620001d684600a620003c5565b901b1790505b92915050565b80516001600160a01b0381168114620001f9575f80fd5b919050565b5f805f6060848603121562000211575f80fd5b6200021c84620001e2565b92506200022c60208501620001e2565b91506200023c60408501620001e2565b90509250925092565b5f82515f5b818110156200026657602081860181015185830152016200024a565b505f920191825250919050565b5f6020828403121562000284575f80fd5b815160ff8116811462000295575f80fd5b9392505050565b634e487b7160e01b5f52601160045260245ffd5b60ff8181168382160190811115620001dc57620001dc6200029c565b600181815b808511156200030c57815f1904821115620002f057620002f06200029c565b80851615620002fe57918102915b93841c9390800290620002d1565b509250929050565b5f826200032457506001620001dc565b816200033257505f620001dc565b81600181146200034b5760028114620003565762000376565b6001915050620001dc565b60ff8411156200036a576200036a6200029c565b50506001821b620001dc565b5060208310610133831016604e8410600b84101617156200039b575081810a620001dc565b620003a78383620002cc565b805f1904821115620003bd57620003bd6200029c565b029392505050565b5f6200029560ff84168362000314565b60805160a05160c05160e0516106c86200041d5f395f6102f401525f818161013a015261022701525f818161016101526101fe01525f818160ee01526101dc01526106c85ff3fe608060405234801561000f575f80fd5b506004361061006f575f3560e01c8063949db6581161004d578063949db65814610135578063999b93af1461015c578063ae68676c14610183575f80fd5b80630579e61f1461007357806306fdde03146100a05780635001f3b5146100e9575b5f80fd5b610086610081366004610596565b6101a4565b604080519283526020830191909152015b60405180910390f35b6100dc6040518060400160405280601281526020017f5261746550726f76696465724f7261636c65000000000000000000000000000081525081565b60405161009791906105cf565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610097565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b610196610191366004610596565b6101be565b604051908152602001610097565b5f805f6101b28686866101d4565b96879650945050505050565b5f6101ca8484846101d4565b90505b9392505050565b5f80610222847f0000000000000000000000000000000000000000000000000000000000000000857f0000000000000000000000000000000000000000000000000000000000000000610323565b90505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663679aefce6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561028e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102b29190610639565b9050805f036102ed576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031986827f000000000000000000000000000000000000000000000000000000000000000085610467565b9695505050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561038a57508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561039657505f61045f565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480156103fc57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156104095750600161045f565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b5f6fffffffffffffffffffffffffffffffff8316608084901c83156104a35761049a87826104958986610650565b6104b3565b9250505061045f565b61049a876104b18885610650565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff838509818110820190038061050157826104f85763ae47f7025f526004601cfd5b508190046101cd565b8083116105155763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610591575f80fd5b919050565b5f805f606084860312156105a8575f80fd5b833592506105b86020850161056e565b91506105c66040850161056e565b90509250925092565b5f602080835283518060208501525f5b818110156105fb578581018301518582016040015282016105df565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b5f60208284031215610649575f80fd5b5051919050565b808202811582820484141761068c577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea26469706673582212204dfb13d1f41e79fd65f5c46409e631f3fe4ae9f840a8266957f79aecfff1b95564736f6c63430008180033',
    sourceMap:
      '631:1978:99:-:0;;;1510:403;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1586:12:99;;;;;;;1608:14;;;;;1632:28;;;;;1670:18;;1691;;:12;:18::i;:::-;1670:39;;1719:19;1741;1754:5;;1741:12;;;:19;;:::i;:::-;1719:41;-1:-1:-1;1853:53:99;1874:12;1719:41;1903:2;1853:20;:53::i;:::-;1845:61;;-1:-1:-1;631:1978:99;;-1:-1:-1;;;;631:1978:99;1798:316:82;1858:5;709:10;1887:5;-1:-1:-1;;;;;1879:40:82;;1875:55;;-1:-1:-1;1928:2:82;;1798:316;-1:-1:-1;1798:316:82:o;1875:55::-;1993:35;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1993:35:82;-1:-1:-1;;;1993:35:82;;;1976:53;;1941:12;;;;-1:-1:-1;;;;;1976:16:82;;;:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1940:89;;;;2046:7;:28;;;;;2057:4;:11;2072:2;2057:17;2046:28;:61;;2105:2;2046:61;;;2088:4;2077:25;;;;;;;;;;;;:::i;:::-;2039:68;1798:316;-1:-1:-1;;;;1798:316:82:o;2551:182:105:-;2654:5;2678:48;2683:13;2698:27;2713:12;2698;:27;:::i;:::-;1192:5;727:2;1213:13;:28;;;:59;;;;727:2;1245:12;:27;;;1213:59;1209:126;;;1295:29;;-1:-1:-1;;;1295:29:105;;;;;;;;;;;1209:126;1392:19;1398:13;1392:2;:19;:::i;:::-;1385:3;1363:18;1369:12;1363:2;:18;:::i;:::-;:25;;1362:49;1344:68;;1114:305;;;;;:::o;14:177:470:-;93:13;;-1:-1:-1;;;;;135:31:470;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:378::-;284:6;292;300;353:2;341:9;332:7;328:23;324:32;321:52;;;369:1;366;359:12;321:52;392:40;422:9;392:40;:::i;:::-;382:50;;451:49;496:2;485:9;481:18;451:49;:::i;:::-;441:59;;519:49;564:2;553:9;549:18;519:49;:::i;:::-;509:59;;196:378;;;;;:::o;579:412::-;708:3;746:6;740:13;771:1;781:129;795:6;792:1;789:13;781:129;;;893:4;877:14;;;873:25;;867:32;854:11;;;847:53;810:12;781:129;;;-1:-1:-1;965:1:470;929:16;;954:13;;;-1:-1:-1;929:16:470;579:412;-1:-1:-1;579:412:470:o;996:273::-;1064:6;1117:2;1105:9;1096:7;1092:23;1088:32;1085:52;;;1133:1;1130;1123:12;1085:52;1165:9;1159:16;1215:4;1208:5;1204:16;1197:5;1194:27;1184:55;;1235:1;1232;1225:12;1184:55;1258:5;996:273;-1:-1:-1;;;996:273:470:o;1274:127::-;1335:10;1330:3;1326:20;1323:1;1316:31;1366:4;1363:1;1356:15;1390:4;1387:1;1380:15;1406:148;1494:4;1473:12;;;1487;;;1469:31;;1512:13;;1509:39;;;1528:18;;:::i;1559:416::-;1648:1;1685:5;1648:1;1699:270;1720:7;1710:8;1707:21;1699:270;;;1779:4;1775:1;1771:6;1767:17;1761:4;1758:27;1755:53;;;1788:18;;:::i;:::-;1838:7;1828:8;1824:22;1821:55;;;1858:16;;;;1821:55;1937:22;;;;1897:15;;;;1699:270;;;1703:3;1559:416;;;;;:::o;1980:806::-;2029:5;2059:8;2049:80;;-1:-1:-1;2100:1:470;2114:5;;2049:80;2148:4;2138:76;;-1:-1:-1;2185:1:470;2199:5;;2138:76;2230:4;2248:1;2243:59;;;;2316:1;2311:130;;;;2223:218;;2243:59;2273:1;2264:10;;2287:5;;;2311:130;2348:3;2338:8;2335:17;2332:43;;;2355:18;;:::i;:::-;-1:-1:-1;;2411:1:470;2397:16;;2426:5;;2223:218;;2525:2;2515:8;2512:16;2506:3;2500:4;2497:13;2493:36;2487:2;2477:8;2474:16;2469:2;2463:4;2460:12;2456:35;2453:77;2450:159;;;-1:-1:-1;2562:19:470;;;2594:5;;2450:159;2641:34;2666:8;2660:4;2641:34;:::i;:::-;2711:6;2707:1;2703:6;2699:19;2690:7;2687:32;2684:58;;;2722:18;;:::i;:::-;2760:20;;1980:806;-1:-1:-1;;;1980:806:470:o;2791:140::-;2849:5;2878:47;2919:4;2909:8;2905:19;2899:4;2878:47;:::i;2791:140::-;631:1978:99;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      '0x608060405234801561000f575f80fd5b506004361061006f575f3560e01c8063949db6581161004d578063949db65814610135578063999b93af1461015c578063ae68676c14610183575f80fd5b80630579e61f1461007357806306fdde03146100a05780635001f3b5146100e9575b5f80fd5b610086610081366004610596565b6101a4565b604080519283526020830191909152015b60405180910390f35b6100dc6040518060400160405280601281526020017f5261746550726f76696465724f7261636c65000000000000000000000000000081525081565b60405161009791906105cf565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610097565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b610196610191366004610596565b6101be565b604051908152602001610097565b5f805f6101b28686866101d4565b96879650945050505050565b5f6101ca8484846101d4565b90505b9392505050565b5f80610222847f0000000000000000000000000000000000000000000000000000000000000000857f0000000000000000000000000000000000000000000000000000000000000000610323565b90505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663679aefce6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561028e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102b29190610639565b9050805f036102ed576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031986827f000000000000000000000000000000000000000000000000000000000000000085610467565b9695505050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561038a57508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561039657505f61045f565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480156103fc57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156104095750600161045f565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b5f6fffffffffffffffffffffffffffffffff8316608084901c83156104a35761049a87826104958986610650565b6104b3565b9250505061045f565b61049a876104b18885610650565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff838509818110820190038061050157826104f85763ae47f7025f526004601cfd5b508190046101cd565b8083116105155763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610591575f80fd5b919050565b5f805f606084860312156105a8575f80fd5b833592506105b86020850161056e565b91506105c66040850161056e565b90509250925092565b5f602080835283518060208501525f5b818110156105fb578581018301518582016040015282016105df565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b5f60208284031215610649575f80fd5b5051919050565b808202811582820484141761068c577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea26469706673582212204dfb13d1f41e79fd65f5c46409e631f3fe4ae9f840a8266957f79aecfff1b95564736f6c63430008180033',
    sourceMap:
      '631:1978:99:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1003:215:82;;;;;;:::i;:::-;;:::i;:::-;;;;722:25:470;;;778:2;763:18;;756:34;;;;695:18;1003:215:82;;;;;;;;713:50:99;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;851:29::-;;;;;;;;1589:42:470;1577:55;;;1559:74;;1547:2;1532:18;851:29:99;1413:226:470;1064:37:99;;;;;969:30;;;;;759:153:82;;;;;;:::i;:::-;;:::i;:::-;;;1790:25:470;;;1778:2;1763:18;759:153:82;1644:177:470;1003:215:82;1092:7;1101;1120:17;1140:32;1150:8;1160:4;1166:5;1140:9;:32::i;:::-;1120:52;;;-1:-1:-1;1003:215:82;-1:-1:-1;;;;;1003:215:82:o;759:153::-;847:7;873:32;883:8;893:4;899:5;873:9;:32::i;:::-;866:39;;759:153;;;;;;:::o;2206:401:99:-;2306:7;2325:12;2340:59;2372:5;2379:4;2385:6;2393:5;2340:31;:59::i;:::-;2325:74;;2409:12;2438;2424:35;;;:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2409:52;;2475:4;2483:1;2475:9;2471:56;;2493:34;;;;;;;;;;;;;;2471:56;2544;2569:8;2579:4;2585:5;2592:7;2544:24;:56::i;:::-;2537:63;2206:401;-1:-1:-1;;;;;;2206:401:99:o;1829:368:105:-;1974:4;2011;1998:17;;:9;:17;;;:40;;;;;2033:5;2019:19;;:10;:19;;;1998:40;1994:58;;;-1:-1:-1;2047:5:105;2040:12;;1994:58;2079:5;2066:18;;:9;:18;;;:40;;;;;2102:4;2088:18;;:10;:18;;;2066:40;2062:57;;;-1:-1:-1;2115:4:105;2108:11;;2062:57;2136:54;;;;;2199:42:470;2268:15;;;2136:54:105;;;2250:34:470;2320:15;;2300:18;;;2293:43;2162:18;;2136:54:105;;;;;;;1829:368;;;;;;;:::o;3090:645::-;3224:7;470:66;3268:38;;3359:3;3336:26;;;3372:357;;;;3471:73;3500:8;3510:9;3521:22;3534:9;3521:10;:22;:::i;:::-;3471:28;:73::i;:::-;3464:80;;;;;;3372:357;3645:73;3674:8;3684:22;3697:9;3684:10;:22;:::i;:::-;3708:9;20285:3569:68;20897:9;;;20995:6;20904:1;20901;20982:20;21110:14;;;21098:27;;21090:36;;;21211:278;;21257:1;21247:153;;21299:10;21293:4;21286:24;21373:4;21367;21360:18;21247:153;-1:-1:-1;21431:14:68;;;21466:5;;21211:278;21610:2;21607:1;21604:9;21594:149;;21650:10;21644:4;21637:24;21720:4;21714;21707:18;21594:149;22000:1;21997;21994;21987:15;22148:1;22144:9;;;22137:17;;22239:9;;;;;23559:13;;;23551:22;;;23583:9;;;;23579:17;;;23598:1;23575:25;23547:54;23635:14;;23631:22;23515:164;22614:1;22621;22617:9;;22610:17;;22896:11;;;22889:19;;22880:29;22969:11;;;22962:19;;22953:29;23043:11;;;23036:19;;23027:29;23117:11;;;23110:19;;23101:29;23191:11;;;23184:19;;23175:29;23767:11;;;23760:19;;;23751:29;23273:529;20285:3569;;;;;:::o;14:196:470:-;82:20;;142:42;131:54;;121:65;;111:93;;200:1;197;190:12;111:93;14:196;;;:::o;215:328::-;292:6;300;308;361:2;349:9;340:7;336:23;332:32;329:52;;;377:1;374;367:12;329:52;413:9;400:23;390:33;;442:38;476:2;465:9;461:18;442:38;:::i;:::-;432:48;;499:38;533:2;522:9;518:18;499:38;:::i;:::-;489:48;;215:328;;;;;:::o;801:607::-;913:4;942:2;971;960:9;953:21;1003:6;997:13;1046:6;1041:2;1030:9;1026:18;1019:34;1071:1;1081:140;1095:6;1092:1;1089:13;1081:140;;;1190:14;;;1186:23;;1180:30;1156:17;;;1175:2;1152:26;1145:66;1110:10;;1081:140;;;1085:3;1270:1;1265:2;1256:6;1245:9;1241:22;1237:31;1230:42;1399:2;1329:66;1324:2;1316:6;1312:15;1308:88;1297:9;1293:104;1289:113;1281:121;;;;801:607;;;;:::o;1826:184::-;1896:6;1949:2;1937:9;1928:7;1924:23;1920:32;1917:52;;;1965:1;1962;1955:12;1917:52;-1:-1:-1;1988:16:470;;1826:184;-1:-1:-1;1826:184:470:o;2347:322::-;2420:9;;;2451;;2468:15;;;2462:22;;2448:37;2438:225;;2519:77;2516:1;2509:88;2620:4;2617:1;2610:15;2648:4;2645:1;2638:15;2438:225;2347:322;;;;:::o',
    linkReferences: {},
    immutableReferences: {
      '27589': [
        { start: 238, length: 32 },
        { start: 476, length: 32 },
      ],
      '27592': [
        { start: 353, length: 32 },
        { start: 510, length: 32 },
      ],
      '27595': [
        { start: 314, length: 32 },
        { start: 551, length: 32 },
      ],
      '27599': [{ start: 756, length: 32 }],
    },
  },
  methodIdentifiers: {
    'base()': '5001f3b5',
    'getQuote(uint256,address,address)': 'ae68676c',
    'getQuotes(uint256,address,address)': '0579e61f',
    'name()': '06fdde03',
    'quote()': '999b93af',
    'rateProvider()': '949db658',
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_base","type":"address"},{"internalType":"address","name":"_quote","type":"address"},{"internalType":"address","name":"_rateProvider","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"PriceOracle_InvalidAnswer","type":"error"},{"inputs":[{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"PriceOracle_NotSupported","type":"error"},{"inputs":[],"name":"PriceOracle_Overflow","type":"error"},{"inputs":[],"name":"base","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"quote","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rateProvider","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"author":"Euler Labs (https://www.eulerlabs.com/)","custom:security-contact":"security@euler.xyz","details":"See https://docs.balancer.fi/reference/contracts/rate-providers.html Note: Every Rate Provider has unique security properties. Always perform due dilligence before deploying.","errors":{"PriceOracle_NotSupported(address,address)":[{"params":{"base":"The address of the base asset.","quote":"The address of the quote asset."}}]},"kind":"dev","methods":{"constructor":{"params":{"_base":"The address of the base asset corresponding to the Rate Provider.","_quote":"The address of the quote asset corresponding to the Rate Provider.","_rateProvider":"The address of the Balancer Rate Provider contract."}},"getQuote(uint256,address,address)":{"params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` that is equivalent to `inAmount` of `base`."}},"getQuotes(uint256,address,address)":{"details":"Does not support true bid/ask pricing.","params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` you would get for selling `inAmount` of `base`.","_1":"The amount of `quote` you would spend for buying `inAmount` of `base`."}}},"stateVariables":{"name":{"return":"The name of the oracle.","returns":{"_0":"The name of the oracle."}}},"title":"RateProviderOracle","version":1},"userdoc":{"errors":{"PriceOracle_InvalidAnswer()":[{"notice":"The external feed returned an invalid answer."}],"PriceOracle_NotSupported(address,address)":[{"notice":"The base/quote path is not supported."}],"PriceOracle_Overflow()":[{"notice":"The quote cannot be completed due to overflow."}]},"kind":"user","methods":{"base()":{"notice":"The address of the base asset corresponding to the rate provider."},"constructor":{"notice":"Deploy a RateProviderOracle."},"getQuote(uint256,address,address)":{"notice":"One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread."},"getQuotes(uint256,address,address)":{"notice":"Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token."},"name()":{"notice":"Get the name of the oracle."},"quote()":{"notice":"The address of the quote asset corresponding to the rate provider."},"rateProvider()":{"notice":"The address of the Rate Provider contract."}},"notice":"PriceOracle adapter for Balancer Rate Providers.","version":1}},"settings":{"compilationTarget":{"lib/euler-price-oracle/src/adapter/rate/RateProviderOracle.sol":"RateProviderOracle"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":20000},"remappings":[":@axiom-crypto/v2-periphery/=lib/euler-price-oracle/lib/axiom-std/lib/axiom-v2-periphery/src/",":@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/=lib/openzeppelin-contracts/contracts/",":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":@pendle/core-v2/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":@pyth/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":@redstone/evm-connector/=lib/euler-price-oracle/lib/redstone-oracles-monorepo/packages/evm-connector/contracts/",":@solady/=lib/euler-price-oracle/lib/solady/src/",":@uniswap/v3-core/=lib/euler-price-oracle/lib/v3-core/",":@uniswap/v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/",":ERC4626/=lib/euler-earn/lib/properties/lib/ERC4626/contracts/",":axiom-std/=lib/euler-price-oracle/lib/axiom-std/src/",":axiom-v2-periphery/=lib/euler-price-oracle/lib/axiom-v2-periphery/src/",":crytic-properties/=lib/euler-earn/lib/properties/contracts/",":ds-test/=lib/ethereum-vault-connector/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",":ethereum-vault-connector/=lib/ethereum-vault-connector/src/",":euler-earn/=lib/euler-earn/src/",":euler-price-oracle-test/=lib/euler-price-oracle/test/",":euler-price-oracle/=lib/euler-price-oracle/src/",":euler-vault-kit/=lib/euler-vault-kit/src/",":evc/=lib/ethereum-vault-connector/src/",":evk-test/=lib/euler-vault-kit/test/",":evk/=lib/euler-vault-kit/src/",":fee-flow/=lib/fee-flow/src/",":forge-gas-snapshot/=lib/euler-vault-kit/lib/permit2/lib/forge-gas-snapshot/src/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts-upgradeable/lib/halmos-cheatcodes/src/",":native-token-transfers/=lib/native-token-transfers/evm/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":openzeppelin-contracts/=lib/openzeppelin-contracts/contracts/",":openzeppelin/=lib/ethereum-vault-connector/lib/openzeppelin-contracts/contracts/",":pendle-core-v2-public/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":permit2/=lib/euler-vault-kit/lib/permit2/",":properties/=lib/euler-earn/lib/properties/contracts/",":pyth-sdk-solidity/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":redstone-oracles-monorepo/=lib/euler-price-oracle/lib/",":reward-streams/=lib/reward-streams/src/",":solady/=lib/euler-price-oracle/lib/solady/src/",":solidity-bytes-utils/=lib/native-token-transfers/evm/lib/solidity-bytes-utils/contracts/",":solmate/=lib/fee-flow/lib/solmate/src/",":v3-core/=lib/euler-price-oracle/lib/v3-core/contracts/",":v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/contracts/",":wormhole-solidity-sdk/=lib/native-token-transfers/evm/lib/wormhole-solidity-sdk/src/","lib/euler-earn:@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/","lib/euler-earn:@openzeppelin/=lib/euler-earn/lib/openzeppelin-contracts/","lib/euler-earn:ethereum-vault-connector/=lib/euler-earn/lib/ethereum-vault-connector/src/","lib/euler-price-oracle:@openzeppelin/contracts/=lib/euler-price-oracle/lib/openzeppelin-contracts/contracts/","lib/native-token-transfers/evm:openzeppelin-contracts/contracts/=lib/native-token-transfers/evm/lib/openzeppelin-contracts/contracts/"]},"sources":{"lib/euler-price-oracle/lib/solady/src/utils/FixedPointMathLib.sol":{"keccak256":"0xd890a3c47fd08d2d663890af4561045edc531ca1d7687bbf9dd7a2d1f15f1a3e","license":"MIT","urls":["bzz-raw://b8a4777858cb1c9ffa53f9c1f115d6e9c9af547cf02e06ab9e175da373b46da4","dweb:/ipfs/QmQSKB7DZnatj6eJtugzUvKxrxFrdzFwRMJxQpsTbtup1P"]},"lib/euler-price-oracle/src/adapter/BaseAdapter.sol":{"keccak256":"0x1ca090708d2c03edd58fdb6c22638fce41e93c5f4021b382940d088ae49c81e3","license":"GPL-2.0-or-later","urls":["bzz-raw://d00bbb80bdb34321bea2055bcb1364cd860e7662ec513254ffa61698c09526b4","dweb:/ipfs/QmeCE976ZZy6oLCP2emgBjvx8vJxKvoEJ4yF65QKLjQJDo"]},"lib/euler-price-oracle/src/adapter/rate/IRateProvider.sol":{"keccak256":"0x7b51bc2d3d4a550c8aeae3be013437e105c93a4283dcc74c340aa51c24786acf","license":"GPL-2.0-or-later","urls":["bzz-raw://13e49cb4c19f0666f9e63c475756b73f09a62b6179e506c3114c2111263625ca","dweb:/ipfs/QmPKH9r8k2bApcRbJXwfD59gz6vV46baDuwc1pFnL4RoNa"]},"lib/euler-price-oracle/src/adapter/rate/RateProviderOracle.sol":{"keccak256":"0x7b7e3f545aefe727f672080a044fddbc85172c49fa0fdaf46b5e091475e0da4f","license":"GPL-2.0-or-later","urls":["bzz-raw://eacc790e3ebf9bed98fb4de3f0592d569e7f4156652b8b94e3b534f5e0237e8b","dweb:/ipfs/QmdQb2KjBTCeS5pGYVcqKBoYx6VNNWd7W5PCMHVJWLm7Pt"]},"lib/euler-price-oracle/src/interfaces/IPriceOracle.sol":{"keccak256":"0x03567dd4084dc74a9e2f9eeffce4d9047989b0d2122820716c3bc75891484308","license":"GPL-2.0-or-later","urls":["bzz-raw://23965a79475c85a0a8a3a137a76424f60debd9e592bc9127d463392fad7df30f","dweb:/ipfs/QmPc1bV3kZ3ynLGTqG6xRbZ3E5AstYdfipXbysSqYGhJYA"]},"lib/euler-price-oracle/src/lib/Errors.sol":{"keccak256":"0x2551662bcef8d4a5cb7cdc8cd404f28c726af1bcfe7ef371b22d53322a932698","license":"GPL-2.0-or-later","urls":["bzz-raw://1641b99e0c907950448d62205fc23b5550c44899ba8c0bc0274a6b0a501981b9","dweb:/ipfs/QmZvDhw4Ao3m8jRjNjT8Xq8imCPecJyytUTtCUjt5RoB4v"]},"lib/euler-price-oracle/src/lib/ScaleUtils.sol":{"keccak256":"0x9bd1ac81aab20c82eacbdda286996571530cdb1505d74299b56fd51fef0be9f8","license":"GPL-2.0-or-later","urls":["bzz-raw://5be0485ea15aff9b321012c1a1102425b7c63375d4a378d2a81ae55f60038bf3","dweb:/ipfs/QmZwg2KtMWzjc6PMxJ98iTYcEVj8Bbs8YdNQNNHRq3pwfM"]},"lib/forge-std/src/interfaces/IERC20.sol":{"keccak256":"0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947","license":"MIT","urls":["bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7","dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9"]}},"version":1}',
  metadata: {
    compiler: { version: '0.8.24+commit.e11b9ed9' },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            { internalType: 'address', name: '_base', type: 'address' },
            { internalType: 'address', name: '_quote', type: 'address' },
            { internalType: 'address', name: '_rateProvider', type: 'address' },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        { inputs: [], type: 'error', name: 'PriceOracle_InvalidAnswer' },
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
          name: 'quote',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'rateProvider',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
        },
      ],
      devdoc: {
        kind: 'dev',
        methods: {
          constructor: {
            params: {
              _base: 'The address of the base asset corresponding to the Rate Provider.',
              _quote: 'The address of the quote asset corresponding to the Rate Provider.',
              _rateProvider: 'The address of the Balancer Rate Provider contract.',
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
            notice: 'The address of the base asset corresponding to the rate provider.',
          },
          constructor: { notice: 'Deploy a RateProviderOracle.' },
          'getQuote(uint256,address,address)': {
            notice:
              'One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread.',
          },
          'getQuotes(uint256,address,address)': {
            notice:
              'Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token.',
          },
          'name()': { notice: 'Get the name of the oracle.' },
          'quote()': {
            notice: 'The address of the quote asset corresponding to the rate provider.',
          },
          'rateProvider()': {
            notice: 'The address of the Rate Provider contract.',
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
        'lib/euler-earn:@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/',
        'lib/euler-earn:@openzeppelin/=lib/euler-earn/lib/openzeppelin-contracts/',
        'lib/euler-earn:ethereum-vault-connector/=lib/euler-earn/lib/ethereum-vault-connector/src/',
        'lib/euler-price-oracle:@openzeppelin/contracts/=lib/euler-price-oracle/lib/openzeppelin-contracts/contracts/',
        'lib/native-token-transfers/evm:openzeppelin-contracts/contracts/=lib/native-token-transfers/evm/lib/openzeppelin-contracts/contracts/',
      ],
      optimizer: { enabled: true, runs: 20000 },
      metadata: { bytecodeHash: 'ipfs' },
      compilationTarget: {
        'lib/euler-price-oracle/src/adapter/rate/RateProviderOracle.sol': 'RateProviderOracle',
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
      'lib/euler-price-oracle/src/adapter/rate/IRateProvider.sol': {
        keccak256: '0x7b51bc2d3d4a550c8aeae3be013437e105c93a4283dcc74c340aa51c24786acf',
        urls: [
          'bzz-raw://13e49cb4c19f0666f9e63c475756b73f09a62b6179e506c3114c2111263625ca',
          'dweb:/ipfs/QmPKH9r8k2bApcRbJXwfD59gz6vV46baDuwc1pFnL4RoNa',
        ],
        license: 'GPL-2.0-or-later',
      },
      'lib/euler-price-oracle/src/adapter/rate/RateProviderOracle.sol': {
        keccak256: '0x7b7e3f545aefe727f672080a044fddbc85172c49fa0fdaf46b5e091475e0da4f',
        urls: [
          'bzz-raw://eacc790e3ebf9bed98fb4de3f0592d569e7f4156652b8b94e3b534f5e0237e8b',
          'dweb:/ipfs/QmdQb2KjBTCeS5pGYVcqKBoYx6VNNWd7W5PCMHVJWLm7Pt',
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
  id: 99,
} as const;
