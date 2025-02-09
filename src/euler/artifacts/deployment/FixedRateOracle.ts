export default {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: '_base', type: 'address', internalType: 'address' },
        { name: '_quote', type: 'address', internalType: 'address' },
        { name: '_rate', type: 'uint256', internalType: 'uint256' },
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
      name: 'rate',
      inputs: [],
      outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
      stateMutability: 'view',
    },
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
      '0x61010060405234801562000011575f80fd5b5060405162000a3a38038062000a3a83398101604081905262000034916200021d565b805f0362000055576040516301a4c16560e21b815260040160405180910390fd5b6001600160a01b03808416608081905290831660a05260c08290525f906200007d90620000b1565b90505f6200009360a051620000b160201b60201c565b9050620000a282828062000191565b60e05250620003eb9350505050565b5f63ffffffff826001600160a01b031611620000cf57506012919050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290515f9182916001600160a01b0386169162000113916200025b565b5f60405180830381855afa9150503d805f81146200014d576040519150601f19603f3d011682016040523d82523d5f602084013e62000152565b606091505b509150915081801562000166575080516020145b6200017357601262000189565b8080602001905181019062000189919062000289565b949350505050565b5f6200018983620001a38685620002c6565b5f60268360ff161180620001ba575060268260ff16115b15620001d9576040516302950f9560e51b815260040160405180910390fd5b620001e683600a620003db565b6080620001f584600a620003db565b901b1790505b92915050565b80516001600160a01b038116811462000218575f80fd5b919050565b5f805f6060848603121562000230575f80fd5b6200023b8462000201565b92506200024b6020850162000201565b9150604084015190509250925092565b5f82515f5b818110156200027c576020818601810151858301520162000260565b505f920191825250919050565b5f602082840312156200029a575f80fd5b815160ff81168114620002ab575f80fd5b9392505050565b634e487b7160e01b5f52601160045260245ffd5b60ff8181168382160190811115620001fb57620001fb620002b2565b600181815b808511156200032257815f1904821115620003065762000306620002b2565b808516156200031457918102915b93841c9390800290620002e7565b509250929050565b5f826200033a57506001620001fb565b816200034857505f620001fb565b81600181146200036157600281146200036c576200038c565b6001915050620001fb565b60ff841115620003805762000380620002b2565b50506001821b620001fb565b5060208310610133831016604e8410600b8410161715620003b1575081810a620001fb565b620003bd8383620002e2565b805f1904821115620003d357620003d3620002b2565b029392505050565b5f620002ab60ff8416836200032a565b60805160a05160c05160e051610607620004335f395f61024b01525f818160ee015261022a01525f818161016f01526101fe01525f818161012301526101dc01526106075ff3fe608060405234801561000f575f80fd5b506004361061006f575f3560e01c80635001f3b51161004d5780635001f3b51461011e578063999b93af1461016a578063ae68676c14610191575f80fd5b80630579e61f1461007357806306fdde03146100a05780632c4e722e146100e9575b5f80fd5b6100866100813660046104ec565b6101a4565b604080519283526020830191909152015b60405180910390f35b6100dc6040518060400160405280600f81526020017f4669786564526174654f7261636c65000000000000000000000000000000000081525081565b6040516100979190610525565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610097565b6101457f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610097565b6101457f000000000000000000000000000000000000000000000000000000000000000081565b61011061019f3660046104ec565b6101be565b5f805f6101b28686866101d4565b96879650945050505050565b5f6101ca8484846101d4565b90505b9392505050565b5f80610222847f0000000000000000000000000000000000000000000000000000000000000000857f0000000000000000000000000000000000000000000000000000000000000000610279565b9050610270857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846103bd565b95945050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480156102e057508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156102ec57505f6103b5565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561035257508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561035f575060016103b5565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b5f6fffffffffffffffffffffffffffffffff8316608084901c83156103f9576103f087826103eb898661058f565b610409565b925050506103b5565b6103f087610407888561058f565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8385098181108201900380610457578261044e5763ae47f7025f526004601cfd5b508190046101cd565b80831161046b5763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146104e7575f80fd5b919050565b5f805f606084860312156104fe575f80fd5b8335925061050e602085016104c4565b915061051c604085016104c4565b90509250925092565b5f602080835283518060208501525f5b8181101561055157858101830151858201604001528201610535565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b80820281158282048414176105cb577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea26469706673582212206f7a3c8b1db06a65d27e867d185d6386d05ef62075907d338c6fe11d460a65cb64736f6c63430008180033',
    sourceMap:
      '396:1817:89:-:0;;;1239:389;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1311:5;1320:1;1311:10;1307:64;;1330:41;;-1:-1:-1;;;1330:41:89;;;;;;;;;;;1307:64;-1:-1:-1;;;;;1381:12:89;;;;;;;1403:14;;;;;1427:12;;;;1449:18;;1470;;:12;:18::i;:::-;1449:39;;1498:19;1520;1533:5;;1520:12;;;:19;;:::i;:::-;1498:41;-1:-1:-1;1557:64:89;1578:12;1498:41;;1557:20;:64::i;:::-;1549:72;;-1:-1:-1;396:1817:89;;-1:-1:-1;;;;396:1817:89;1798:316:82;1858:5;709:10;1887:5;-1:-1:-1;;;;;1879:40:82;;1875:55;;-1:-1:-1;1928:2:82;;1798:316;-1:-1:-1;1798:316:82:o;1875:55::-;1993:35;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1993:35:82;-1:-1:-1;;;1993:35:82;;;1976:53;;1941:12;;;;-1:-1:-1;;;;;1976:16:82;;;:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1940:89;;;;2046:7;:28;;;;;2057:4;:11;2072:2;2057:17;2046:28;:61;;2105:2;2046:61;;;2088:4;2077:25;;;;;;;;;;;;:::i;:::-;2039:68;1798:316;-1:-1:-1;;;;1798:316:82:o;2551:182:105:-;2654:5;2678:48;2683:13;2698:27;2713:12;2698;:27;:::i;:::-;1192:5;727:2;1213:13;:28;;;:59;;;;727:2;1245:12;:27;;;1213:59;1209:126;;;1295:29;;-1:-1:-1;;;1295:29:105;;;;;;;;;;;1209:126;1392:19;1398:13;1392:2;:19;:::i;:::-;1385:3;1363:18;1369:12;1363:2;:18;:::i;:::-;:25;;1362:49;1344:68;;1114:305;;;;;:::o;14:177:470:-;93:13;;-1:-1:-1;;;;;135:31:470;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:354::-;284:6;292;300;353:2;341:9;332:7;328:23;324:32;321:52;;;369:1;366;359:12;321:52;392:40;422:9;392:40;:::i;:::-;382:50;;451:49;496:2;485:9;481:18;451:49;:::i;:::-;441:59;;540:2;529:9;525:18;519:25;509:35;;196:354;;;;;:::o;555:412::-;684:3;722:6;716:13;747:1;757:129;771:6;768:1;765:13;757:129;;;869:4;853:14;;;849:25;;843:32;830:11;;;823:53;786:12;757:129;;;-1:-1:-1;941:1:470;905:16;;930:13;;;-1:-1:-1;905:16:470;555:412;-1:-1:-1;555:412:470:o;972:273::-;1040:6;1093:2;1081:9;1072:7;1068:23;1064:32;1061:52;;;1109:1;1106;1099:12;1061:52;1141:9;1135:16;1191:4;1184:5;1180:16;1173:5;1170:27;1160:55;;1211:1;1208;1201:12;1160:55;1234:5;972:273;-1:-1:-1;;;972:273:470:o;1250:127::-;1311:10;1306:3;1302:20;1299:1;1292:31;1342:4;1339:1;1332:15;1366:4;1363:1;1356:15;1382:148;1470:4;1449:12;;;1463;;;1445:31;;1488:13;;1485:39;;;1504:18;;:::i;1535:416::-;1624:1;1661:5;1624:1;1675:270;1696:7;1686:8;1683:21;1675:270;;;1755:4;1751:1;1747:6;1743:17;1737:4;1734:27;1731:53;;;1764:18;;:::i;:::-;1814:7;1804:8;1800:22;1797:55;;;1834:16;;;;1797:55;1913:22;;;;1873:15;;;;1675:270;;;1679:3;1535:416;;;;;:::o;1956:806::-;2005:5;2035:8;2025:80;;-1:-1:-1;2076:1:470;2090:5;;2025:80;2124:4;2114:76;;-1:-1:-1;2161:1:470;2175:5;;2114:76;2206:4;2224:1;2219:59;;;;2292:1;2287:130;;;;2199:218;;2219:59;2249:1;2240:10;;2263:5;;;2287:130;2324:3;2314:8;2311:17;2308:43;;;2331:18;;:::i;:::-;-1:-1:-1;;2387:1:470;2373:16;;2402:5;;2199:218;;2501:2;2491:8;2488:16;2482:3;2476:4;2473:13;2469:36;2463:2;2453:8;2450:16;2445:2;2439:4;2436:12;2432:35;2429:77;2426:159;;;-1:-1:-1;2538:19:470;;;2570:5;;2426:159;2617:34;2642:8;2636:4;2617:34;:::i;:::-;2687:6;2683:1;2679:6;2675:19;2666:7;2663:32;2660:58;;;2698:18;;:::i;:::-;2736:20;;1956:806;-1:-1:-1;;;1956:806:470:o;2767:140::-;2825:5;2854:47;2895:4;2885:8;2881:19;2875:4;2854:47;:::i;2767:140::-;396:1817:89;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      '0x608060405234801561000f575f80fd5b506004361061006f575f3560e01c80635001f3b51161004d5780635001f3b51461011e578063999b93af1461016a578063ae68676c14610191575f80fd5b80630579e61f1461007357806306fdde03146100a05780632c4e722e146100e9575b5f80fd5b6100866100813660046104ec565b6101a4565b604080519283526020830191909152015b60405180910390f35b6100dc6040518060400160405280600f81526020017f4669786564526174654f7261636c65000000000000000000000000000000000081525081565b6040516100979190610525565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610097565b6101457f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610097565b6101457f000000000000000000000000000000000000000000000000000000000000000081565b61011061019f3660046104ec565b6101be565b5f805f6101b28686866101d4565b96879650945050505050565b5f6101ca8484846101d4565b90505b9392505050565b5f80610222847f0000000000000000000000000000000000000000000000000000000000000000857f0000000000000000000000000000000000000000000000000000000000000000610279565b9050610270857f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000846103bd565b95945050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480156102e057508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156102ec57505f6103b5565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561035257508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561035f575060016103b5565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b5f6fffffffffffffffffffffffffffffffff8316608084901c83156103f9576103f087826103eb898661058f565b610409565b925050506103b5565b6103f087610407888561058f565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8385098181108201900380610457578261044e5763ae47f7025f526004601cfd5b508190046101cd565b80831161046b5763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146104e7575f80fd5b919050565b5f805f606084860312156104fe575f80fd5b8335925061050e602085016104c4565b915061051c604085016104c4565b90509250925092565b5f602080835283518060208501525f5b8181101561055157858101830151858201604001528201610535565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b80820281158282048414176105cb577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea26469706673582212206f7a3c8b1db06a65d27e867d185d6386d05ef62075907d338c6fe11d460a65cb64736f6c63430008180033',
    sourceMap:
      '396:1817:89:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1003:215:82;;;;;;:::i;:::-;;:::i;:::-;;;;722:25:470;;;778:2;763:18;;756:34;;;;695:18;1003:215:82;;;;;;;;475:47:89;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;818:29::-;;;;;;;;1559:25:470;;;1547:2;1532:18;818:29:89;1413:177:470;575:29:89;;;;;;;;1771:42:470;1759:55;;;1741:74;;1729:2;1714:18;575:29:89;1595:226:470;658:30:89;;;;;759:153:82;;;;;;:::i;:::-;;:::i;1003:215::-;1092:7;1101;1120:17;1140:32;1150:8;1160:4;1166:5;1140:9;:32::i;:::-;1120:52;;;-1:-1:-1;1003:215:82;-1:-1:-1;;;;;1003:215:82:o;759:153::-;847:7;873:32;883:8;893:4;899:5;873:9;:32::i;:::-;866:39;;759:153;;;;;;:::o;1938:273:89:-;2038:7;2057:12;2072:59;2104:5;2111:4;2117:6;2125:5;2072:31;:59::i;:::-;2057:74;;2148:56;2173:8;2183:4;2189:5;2196:7;2148:24;:56::i;:::-;2141:63;1938:273;-1:-1:-1;;;;;1938:273:89:o;1829:368:105:-;1974:4;2011;1998:17;;:9;:17;;;:40;;;;;2033:5;2019:19;;:10;:19;;;1998:40;1994:58;;;-1:-1:-1;2047:5:105;2040:12;;1994:58;2079:5;2066:18;;:9;:18;;;:40;;;;;2102:4;2088:18;;:10;:18;;;2066:40;2062:57;;;-1:-1:-1;2115:4:105;2108:11;;2062:57;2136:54;;;;;2010:42:470;2079:15;;;2136:54:105;;;2061:34:470;2131:15;;2111:18;;;2104:43;1973:18;;2136:54:105;;;;;;;1829:368;;;;;;;:::o;3090:645::-;3224:7;470:66;3268:38;;3359:3;3336:26;;;3372:357;;;;3471:73;3500:8;3510:9;3521:22;3534:9;3521:10;:22;:::i;:::-;3471:28;:73::i;:::-;3464:80;;;;;;3372:357;3645:73;3674:8;3684:22;3697:9;3684:10;:22;:::i;:::-;3708:9;20285:3569:68;20897:9;;;20995:6;20904:1;20901;20982:20;21110:14;;;21098:27;;21090:36;;;21211:278;;21257:1;21247:153;;21299:10;21293:4;21286:24;21373:4;21367;21360:18;21247:153;-1:-1:-1;21431:14:68;;;21466:5;;21211:278;21610:2;21607:1;21604:9;21594:149;;21650:10;21644:4;21637:24;21720:4;21714;21707:18;21594:149;22000:1;21997;21994;21987:15;22148:1;22144:9;;;22137:17;;22239:9;;;;;23559:13;;;23551:22;;;23583:9;;;;23579:17;;;23598:1;23575:25;23547:54;23635:14;;23631:22;23515:164;22614:1;22621;22617:9;;22610:17;;22896:11;;;22889:19;;22880:29;22969:11;;;22962:19;;22953:29;23043:11;;;23036:19;;23027:29;23117:11;;;23110:19;;23101:29;23191:11;;;23184:19;;23175:29;23767:11;;;23760:19;;;23751:29;23273:529;20285:3569;;;;;:::o;14:196:470:-;82:20;;142:42;131:54;;121:65;;111:93;;200:1;197;190:12;111:93;14:196;;;:::o;215:328::-;292:6;300;308;361:2;349:9;340:7;336:23;332:32;329:52;;;377:1;374;367:12;329:52;413:9;400:23;390:33;;442:38;476:2;465:9;461:18;442:38;:::i;:::-;432:48;;499:38;533:2;522:9;518:18;499:38;:::i;:::-;489:48;;215:328;;;;;:::o;801:607::-;913:4;942:2;971;960:9;953:21;1003:6;997:13;1046:6;1041:2;1030:9;1026:18;1019:34;1071:1;1081:140;1095:6;1092:1;1089:13;1081:140;;;1190:14;;;1186:23;;1180:30;1156:17;;;1175:2;1152:26;1145:66;1110:10;;1081:140;;;1085:3;1270:1;1265:2;1256:6;1245:9;1241:22;1237:31;1230:42;1399:2;1329:66;1324:2;1316:6;1312:15;1308:88;1297:9;1293:104;1289:113;1281:121;;;;801:607;;;;:::o;2158:322::-;2231:9;;;2262;;2279:15;;;2273:22;;2259:37;2249:225;;2330:77;2327:1;2320:88;2431:4;2428:1;2421:15;2459:4;2456:1;2449:15;2249:225;2158:322;;;;:::o',
    linkReferences: {},
    immutableReferences: {
      '26504': [
        { start: 291, length: 32 },
        { start: 476, length: 32 },
      ],
      '26507': [
        { start: 367, length: 32 },
        { start: 510, length: 32 },
      ],
      '26510': [
        { start: 238, length: 32 },
        { start: 554, length: 32 },
      ],
      '26514': [{ start: 587, length: 32 }],
    },
  },
  methodIdentifiers: {
    'base()': '5001f3b5',
    'getQuote(uint256,address,address)': 'ae68676c',
    'getQuotes(uint256,address,address)': '0579e61f',
    'name()': '06fdde03',
    'quote()': '999b93af',
    'rate()': '2c4e722e',
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_base","type":"address"},{"internalType":"address","name":"_quote","type":"address"},{"internalType":"uint256","name":"_rate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"PriceOracle_InvalidConfiguration","type":"error"},{"inputs":[{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"PriceOracle_NotSupported","type":"error"},{"inputs":[],"name":"PriceOracle_Overflow","type":"error"},{"inputs":[],"name":"base","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"quote","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"devdoc":{"author":"Euler Labs (https://www.eulerlabs.com/)","custom:security-contact":"security@euler.xyz","errors":{"PriceOracle_NotSupported(address,address)":[{"params":{"base":"The address of the base asset.","quote":"The address of the quote asset."}}]},"kind":"dev","methods":{"constructor":{"details":"`_rate` must be given in the quote asset\'s decimals.","params":{"_base":"The address of the base asset.","_quote":"The address of the quote asset.","_rate":"The fixed conversion rate between base and quote."}},"getQuote(uint256,address,address)":{"params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` that is equivalent to `inAmount` of `base`."}},"getQuotes(uint256,address,address)":{"details":"Does not support true bid/ask pricing.","params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` you would get for selling `inAmount` of `base`.","_1":"The amount of `quote` you would spend for buying `inAmount` of `base`."}}},"stateVariables":{"name":{"return":"The name of the oracle.","returns":{"_0":"The name of the oracle."}},"rate":{"details":"Must be given in the quote asset\'s decimals."}},"title":"FixedRateOracle","version":1},"userdoc":{"errors":{"PriceOracle_InvalidConfiguration()":[{"notice":"The configuration parameters for the PriceOracle are invalid."}],"PriceOracle_NotSupported(address,address)":[{"notice":"The base/quote path is not supported."}],"PriceOracle_Overflow()":[{"notice":"The quote cannot be completed due to overflow."}]},"kind":"user","methods":{"base()":{"notice":"The address of the base asset."},"constructor":{"notice":"Deploy a FixedRateOracle."},"getQuote(uint256,address,address)":{"notice":"One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread."},"getQuotes(uint256,address,address)":{"notice":"Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token."},"name()":{"notice":"Get the name of the oracle."},"quote()":{"notice":"The address of the quote asset."},"rate()":{"notice":"The fixed conversion rate between base and quote."}},"notice":"PriceOracle adapter that applies a fixed exchange rate.","version":1}},"settings":{"compilationTarget":{"lib/euler-price-oracle/src/adapter/fixed/FixedRateOracle.sol":"FixedRateOracle"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":20000},"remappings":[":@axiom-crypto/v2-periphery/=lib/euler-price-oracle/lib/axiom-std/lib/axiom-v2-periphery/src/",":@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/=lib/openzeppelin-contracts/contracts/",":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":@pendle/core-v2/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":@pyth/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":@redstone/evm-connector/=lib/euler-price-oracle/lib/redstone-oracles-monorepo/packages/evm-connector/contracts/",":@solady/=lib/euler-price-oracle/lib/solady/src/",":@uniswap/v3-core/=lib/euler-price-oracle/lib/v3-core/",":@uniswap/v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/",":ERC4626/=lib/euler-earn/lib/properties/lib/ERC4626/contracts/",":axiom-std/=lib/euler-price-oracle/lib/axiom-std/src/",":axiom-v2-periphery/=lib/euler-price-oracle/lib/axiom-v2-periphery/src/",":crytic-properties/=lib/euler-earn/lib/properties/contracts/",":ds-test/=lib/ethereum-vault-connector/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",":ethereum-vault-connector/=lib/ethereum-vault-connector/src/",":euler-earn/=lib/euler-earn/src/",":euler-price-oracle-test/=lib/euler-price-oracle/test/",":euler-price-oracle/=lib/euler-price-oracle/src/",":euler-vault-kit/=lib/euler-vault-kit/src/",":evc/=lib/ethereum-vault-connector/src/",":evk-test/=lib/euler-vault-kit/test/",":evk/=lib/euler-vault-kit/src/",":fee-flow/=lib/fee-flow/src/",":forge-gas-snapshot/=lib/euler-vault-kit/lib/permit2/lib/forge-gas-snapshot/src/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts-upgradeable/lib/halmos-cheatcodes/src/",":native-token-transfers/=lib/native-token-transfers/evm/src/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":openzeppelin-contracts/=lib/openzeppelin-contracts/contracts/",":openzeppelin/=lib/ethereum-vault-connector/lib/openzeppelin-contracts/contracts/",":pendle-core-v2-public/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":permit2/=lib/euler-vault-kit/lib/permit2/",":properties/=lib/euler-earn/lib/properties/contracts/",":pyth-sdk-solidity/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":redstone-oracles-monorepo/=lib/euler-price-oracle/lib/",":reward-streams/=lib/reward-streams/src/",":solady/=lib/euler-price-oracle/lib/solady/src/",":solidity-bytes-utils/=lib/native-token-transfers/evm/lib/solidity-bytes-utils/contracts/",":solmate/=lib/fee-flow/lib/solmate/src/",":v3-core/=lib/euler-price-oracle/lib/v3-core/contracts/",":v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/contracts/",":wormhole-solidity-sdk/=lib/native-token-transfers/evm/lib/wormhole-solidity-sdk/src/","lib/euler-earn:@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/","lib/euler-earn:@openzeppelin/=lib/euler-earn/lib/openzeppelin-contracts/","lib/euler-earn:ethereum-vault-connector/=lib/euler-earn/lib/ethereum-vault-connector/src/","lib/euler-price-oracle:@openzeppelin/contracts/=lib/euler-price-oracle/lib/openzeppelin-contracts/contracts/","lib/native-token-transfers/evm:openzeppelin-contracts/contracts/=lib/native-token-transfers/evm/lib/openzeppelin-contracts/contracts/"]},"sources":{"lib/euler-price-oracle/lib/solady/src/utils/FixedPointMathLib.sol":{"keccak256":"0xd890a3c47fd08d2d663890af4561045edc531ca1d7687bbf9dd7a2d1f15f1a3e","license":"MIT","urls":["bzz-raw://b8a4777858cb1c9ffa53f9c1f115d6e9c9af547cf02e06ab9e175da373b46da4","dweb:/ipfs/QmQSKB7DZnatj6eJtugzUvKxrxFrdzFwRMJxQpsTbtup1P"]},"lib/euler-price-oracle/src/adapter/BaseAdapter.sol":{"keccak256":"0x1ca090708d2c03edd58fdb6c22638fce41e93c5f4021b382940d088ae49c81e3","license":"GPL-2.0-or-later","urls":["bzz-raw://d00bbb80bdb34321bea2055bcb1364cd860e7662ec513254ffa61698c09526b4","dweb:/ipfs/QmeCE976ZZy6oLCP2emgBjvx8vJxKvoEJ4yF65QKLjQJDo"]},"lib/euler-price-oracle/src/adapter/fixed/FixedRateOracle.sol":{"keccak256":"0x748346c9b1f1b8e3e22d34445df1facb04d29004d634799edf7e49ad5e769f07","license":"GPL-2.0-or-later","urls":["bzz-raw://87161edf45582827ed46bf27ac597a9eafe4dfc85268af534e6b541b1fe379c4","dweb:/ipfs/QmStTHEUqfVK1d5N1HmzYLQ9MhYn6iBxRtgswTurKFLjjD"]},"lib/euler-price-oracle/src/interfaces/IPriceOracle.sol":{"keccak256":"0x03567dd4084dc74a9e2f9eeffce4d9047989b0d2122820716c3bc75891484308","license":"GPL-2.0-or-later","urls":["bzz-raw://23965a79475c85a0a8a3a137a76424f60debd9e592bc9127d463392fad7df30f","dweb:/ipfs/QmPc1bV3kZ3ynLGTqG6xRbZ3E5AstYdfipXbysSqYGhJYA"]},"lib/euler-price-oracle/src/lib/Errors.sol":{"keccak256":"0x2551662bcef8d4a5cb7cdc8cd404f28c726af1bcfe7ef371b22d53322a932698","license":"GPL-2.0-or-later","urls":["bzz-raw://1641b99e0c907950448d62205fc23b5550c44899ba8c0bc0274a6b0a501981b9","dweb:/ipfs/QmZvDhw4Ao3m8jRjNjT8Xq8imCPecJyytUTtCUjt5RoB4v"]},"lib/euler-price-oracle/src/lib/ScaleUtils.sol":{"keccak256":"0x9bd1ac81aab20c82eacbdda286996571530cdb1505d74299b56fd51fef0be9f8","license":"GPL-2.0-or-later","urls":["bzz-raw://5be0485ea15aff9b321012c1a1102425b7c63375d4a378d2a81ae55f60038bf3","dweb:/ipfs/QmZwg2KtMWzjc6PMxJ98iTYcEVj8Bbs8YdNQNNHRq3pwfM"]},"lib/forge-std/src/interfaces/IERC20.sol":{"keccak256":"0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947","license":"MIT","urls":["bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7","dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9"]}},"version":1}',
  metadata: {
    compiler: { version: '0.8.24+commit.e11b9ed9' },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            { internalType: 'address', name: '_base', type: 'address' },
            { internalType: 'address', name: '_quote', type: 'address' },
            { internalType: 'uint256', name: '_rate', type: 'uint256' },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
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
          name: 'rate',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        },
      ],
      devdoc: {
        kind: 'dev',
        methods: {
          constructor: {
            details: "`_rate` must be given in the quote asset's decimals.",
            params: {
              _base: 'The address of the base asset.',
              _quote: 'The address of the quote asset.',
              _rate: 'The fixed conversion rate between base and quote.',
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
          constructor: { notice: 'Deploy a FixedRateOracle.' },
          'getQuote(uint256,address,address)': {
            notice:
              'One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread.',
          },
          'getQuotes(uint256,address,address)': {
            notice:
              'Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token.',
          },
          'name()': { notice: 'Get the name of the oracle.' },
          'quote()': { notice: 'The address of the quote asset.' },
          'rate()': {
            notice: 'The fixed conversion rate between base and quote.',
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
        'lib/euler-price-oracle/src/adapter/fixed/FixedRateOracle.sol': 'FixedRateOracle',
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
      'lib/euler-price-oracle/src/adapter/fixed/FixedRateOracle.sol': {
        keccak256: '0x748346c9b1f1b8e3e22d34445df1facb04d29004d634799edf7e49ad5e769f07',
        urls: [
          'bzz-raw://87161edf45582827ed46bf27ac597a9eafe4dfc85268af534e6b541b1fe379c4',
          'dweb:/ipfs/QmStTHEUqfVK1d5N1HmzYLQ9MhYn6iBxRtgswTurKFLjjD',
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
  id: 89,
} as const;
