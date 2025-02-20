export default {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: '_cdo', type: 'address', internalType: 'address' },
        { name: '_tranche', type: 'address', internalType: 'address' },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'cdo',
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
      name: 'tranche',
      inputs: [],
      outputs: [{ name: '', type: 'address', internalType: 'address' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'underlying',
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
      '0x61010060405234801562000011575f80fd5b5060405162000c3238038062000c328339810160408190526200003491620002f6565b816001600160a01b0316816001600160a01b031663075461726040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200007b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620000a191906200032c565b6001600160a01b031614620000c9576040516301a4c16560e21b815260040160405180910390fd5b6001600160a01b03808316608081905290821660a05260408051637e062a3560e11b8152905163fc0c546a916004808201926020929091908290030181865afa15801562000119573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200013f91906200032c565b6001600160a01b031660c0525f62000157826200018a565b90505f6200016d60c0516200018a60201b60201c565b90506200017c8282806200026a565b60e05250620004d892505050565b5f63ffffffff826001600160a01b031611620001a857506012919050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290515f9182916001600160a01b03861691620001ec916200034f565b5f60405180830381855afa9150503d805f811462000226576040519150601f19603f3d011682016040523d82523d5f602084013e6200022b565b606091505b50915091508180156200023f575080516020145b6200024c57601262000262565b808060200190518101906200026291906200037d565b949350505050565b5f62000262836200027c8685620003b3565b5f60268360ff16118062000293575060268260ff16115b15620002b2576040516302950f9560e51b815260040160405180910390fd5b620002bf83600a620004c8565b6080620002ce84600a620004c8565b901b1790505b92915050565b80516001600160a01b0381168114620002f1575f80fd5b919050565b5f806040838503121562000308575f80fd5b6200031383620002da565b91506200032360208401620002da565b90509250929050565b5f602082840312156200033d575f80fd5b6200034882620002da565b9392505050565b5f82515f5b8181101562000370576020818601810151858301520162000354565b505f920191825250919050565b5f602082840312156200038e575f80fd5b815160ff8116811462000348575f80fd5b634e487b7160e01b5f52601160045260245ffd5b60ff8181168382160190811115620002d457620002d46200039f565b600181815b808511156200040f57815f1904821115620003f357620003f36200039f565b808516156200040157918102915b93841c9390800290620003d4565b509250929050565b5f826200042757506001620002d4565b816200043557505f620002d4565b81600181146200044e5760028114620004595762000479565b6001915050620002d4565b60ff8411156200046d576200046d6200039f565b50506001821b620002d4565b5060208310610133831016604e8410600b84101617156200049e575081810a620002d4565b620004aa8383620003cf565b805f1904821115620004c057620004c06200039f565b029392505050565b5f6200034860ff84168362000417565b60805160a05160c05160e05161070b620005275f395f61033701525f818161016101526101fe01525f818161013a015281816101dc015261025f01525f818160ee015261028c015261070b5ff3fe608060405234801561000f575f80fd5b506004361061006f575f3560e01c80636ebc0af11161004d5780636ebc0af1146101355780636f307dc31461015c578063ae68676c14610183575f80fd5b80630579e61f1461007357806306fdde03146100a0578063387a7237146100e9575b5f80fd5b6100866100813660046105d9565b6101a4565b604080519283526020830191909152015b60405180910390f35b6100dc6040518060400160405280601281526020017f49646c655472616e636865734f7261636c65000000000000000000000000000081525081565b6040516100979190610612565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610097565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b6101966101913660046105d9565b6101be565b604051908152602001610097565b5f805f6101b28686866101d4565b96879650945050505050565b5f6101ca8484846101d4565b90505b9392505050565b5f80610222847f0000000000000000000000000000000000000000000000000000000000000000857f0000000000000000000000000000000000000000000000000000000000000000610366565b6040517f9290d42700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301529192505f917f00000000000000000000000000000000000000000000000000000000000000001690639290d42790602401602060405180830381865afa1580156102d1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102f5919061067c565b9050805f03610330576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035c86827f0000000000000000000000000000000000000000000000000000000000000000856104aa565b9695505050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480156103cd57508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156103d957505f6104a2565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561043f57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561044c575060016104a2565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b5f6fffffffffffffffffffffffffffffffff8316608084901c83156104e6576104dd87826104d88986610693565b6104f6565b925050506104a2565b6104dd876104f48885610693565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8385098181108201900380610544578261053b5763ae47f7025f526004601cfd5b508190046101cd565b8083116105585763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146105d4575f80fd5b919050565b5f805f606084860312156105eb575f80fd5b833592506105fb602085016105b1565b9150610609604085016105b1565b90509250925092565b5f602080835283518060208501525f5b8181101561063e57858101830151858201604001528201610622565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b5f6020828403121561068c575f80fd5b5051919050565b80820281158282048414176106cf577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea26469706673582212202264fb6ac38394231c39b18d83e2acca94b663fa90eff94f5ad05080fdc2b96c64736f6c63430008180033',
    sourceMap:
      '562:1890:92:-:0;;;1247:524;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1340:4;-1:-1:-1;;;;;1305:39:92;1318:8;-1:-1:-1;;;;;1305:29:92;;:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1305:39:92;;1301:93;;1353:41;;-1:-1:-1;;;1353:41:92;;;;;;;;;;;1301:93;-1:-1:-1;;;;;1405:10:92;;;;;;;1425:18;;;;;1466:22;;;-1:-1:-1;;;1466:22:92;;;;:20;;:22;;;;;;;;;;;;;;;1405:10;1466:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1453:35:92;;;1498:21;1522:22;1535:8;1522:12;:22::i;:::-;1498:46;;1554:24;1581;1594:10;;1581:12;;;:24;;:::i;:::-;1554:51;-1:-1:-1;1687:77:92;1708:15;1554:51;;1687:20;:77::i;:::-;1679:85;;-1:-1:-1;562:1890:92;;-1:-1:-1;;;562:1890:92;1798:316:82;1858:5;709:10;1887:5;-1:-1:-1;;;;;1879:40:82;;1875:55;;-1:-1:-1;1928:2:82;;1798:316;-1:-1:-1;1798:316:82:o;1875:55::-;1993:35;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1993:35:82;-1:-1:-1;;;1993:35:82;;;1976:53;;1941:12;;;;-1:-1:-1;;;;;1976:16:82;;;:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1940:89;;;;2046:7;:28;;;;;2057:4;:11;2072:2;2057:17;2046:28;:61;;2105:2;2046:61;;;2088:4;2077:25;;;;;;;;;;;;:::i;:::-;2039:68;1798:316;-1:-1:-1;;;;1798:316:82:o;2551:182:105:-;2654:5;2678:48;2683:13;2698:27;2713:12;2698;:27;:::i;:::-;1192:5;727:2;1213:13;:28;;;:59;;;;727:2;1245:12;:27;;;1213:59;1209:126;;;1295:29;;-1:-1:-1;;;1295:29:105;;;;;;;;;;;1209:126;1392:19;1398:13;1392:2;:19;:::i;:::-;1385:3;1363:18;1369:12;1363:2;:18;:::i;:::-;:25;;1362:49;1344:68;;1114:305;;;;;:::o;14:177:485:-;93:13;;-1:-1:-1;;;;;135:31:485;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:293::-;275:6;283;336:2;324:9;315:7;311:23;307:32;304:52;;;352:1;349;342:12;304:52;375:40;405:9;375:40;:::i;:::-;365:50;;434:49;479:2;468:9;464:18;434:49;:::i;:::-;424:59;;196:293;;;;;:::o;494:208::-;564:6;617:2;605:9;596:7;592:23;588:32;585:52;;;633:1;630;623:12;585:52;656:40;686:9;656:40;:::i;:::-;646:50;494:208;-1:-1:-1;;;494:208:485:o;707:412::-;836:3;874:6;868:13;899:1;909:129;923:6;920:1;917:13;909:129;;;1021:4;1005:14;;;1001:25;;995:32;982:11;;;975:53;938:12;909:129;;;-1:-1:-1;1093:1:485;1057:16;;1082:13;;;-1:-1:-1;1057:16:485;707:412;-1:-1:-1;707:412:485:o;1124:273::-;1192:6;1245:2;1233:9;1224:7;1220:23;1216:32;1213:52;;;1261:1;1258;1251:12;1213:52;1293:9;1287:16;1343:4;1336:5;1332:16;1325:5;1322:27;1312:55;;1363:1;1360;1353:12;1402:127;1463:10;1458:3;1454:20;1451:1;1444:31;1494:4;1491:1;1484:15;1518:4;1515:1;1508:15;1534:148;1622:4;1601:12;;;1615;;;1597:31;;1640:13;;1637:39;;;1656:18;;:::i;1687:416::-;1776:1;1813:5;1776:1;1827:270;1848:7;1838:8;1835:21;1827:270;;;1907:4;1903:1;1899:6;1895:17;1889:4;1886:27;1883:53;;;1916:18;;:::i;:::-;1966:7;1956:8;1952:22;1949:55;;;1986:16;;;;1949:55;2065:22;;;;2025:15;;;;1827:270;;;1831:3;1687:416;;;;;:::o;2108:806::-;2157:5;2187:8;2177:80;;-1:-1:-1;2228:1:485;2242:5;;2177:80;2276:4;2266:76;;-1:-1:-1;2313:1:485;2327:5;;2266:76;2358:4;2376:1;2371:59;;;;2444:1;2439:130;;;;2351:218;;2371:59;2401:1;2392:10;;2415:5;;;2439:130;2476:3;2466:8;2463:17;2460:43;;;2483:18;;:::i;:::-;-1:-1:-1;;2539:1:485;2525:16;;2554:5;;2351:218;;2653:2;2643:8;2640:16;2634:3;2628:4;2625:13;2621:36;2615:2;2605:8;2602:16;2597:2;2591:4;2588:12;2584:35;2581:77;2578:159;;;-1:-1:-1;2690:19:485;;;2722:5;;2578:159;2769:34;2794:8;2788:4;2769:34;:::i;:::-;2839:6;2835:1;2831:6;2827:19;2818:7;2815:32;2812:58;;;2850:18;;:::i;:::-;2888:20;;2108:806;-1:-1:-1;;;2108:806:485:o;2919:140::-;2977:5;3006:47;3047:4;3037:8;3033:19;3027:4;3006:47;:::i;2919:140::-;562:1890:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      '0x608060405234801561000f575f80fd5b506004361061006f575f3560e01c80636ebc0af11161004d5780636ebc0af1146101355780636f307dc31461015c578063ae68676c14610183575f80fd5b80630579e61f1461007357806306fdde03146100a0578063387a7237146100e9575b5f80fd5b6100866100813660046105d9565b6101a4565b604080519283526020830191909152015b60405180910390f35b6100dc6040518060400160405280601281526020017f49646c655472616e636865734f7261636c65000000000000000000000000000081525081565b6040516100979190610612565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610097565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b6101966101913660046105d9565b6101be565b604051908152602001610097565b5f805f6101b28686866101d4565b96879650945050505050565b5f6101ca8484846101d4565b90505b9392505050565b5f80610222847f0000000000000000000000000000000000000000000000000000000000000000857f0000000000000000000000000000000000000000000000000000000000000000610366565b6040517f9290d42700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301529192505f917f00000000000000000000000000000000000000000000000000000000000000001690639290d42790602401602060405180830381865afa1580156102d1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102f5919061067c565b9050805f03610330576040517fd743df6a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035c86827f0000000000000000000000000000000000000000000000000000000000000000856104aa565b9695505050505050565b5f8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480156103cd57508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156103d957505f6104a2565b8173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614801561043f57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b1561044c575060016104a2565b6040517f4ca22af000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80871660048301528416602482015260440160405180910390fd5b949350505050565b5f6fffffffffffffffffffffffffffffffff8316608084901c83156104e6576104dd87826104d88986610693565b6104f6565b925050506104a2565b6104dd876104f48885610693565b835b8282027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8385098181108201900380610544578261053b5763ae47f7025f526004601cfd5b508190046101cd565b8083116105585763ae47f7025f526004601cfd5b828486095f84810385169485900494848311909303908390038390046001010292030417600260038302811880840282030280840282030280840282030280840282030280840282030280840290910302029392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146105d4575f80fd5b919050565b5f805f606084860312156105eb575f80fd5b833592506105fb602085016105b1565b9150610609604085016105b1565b90509250925092565b5f602080835283518060208501525f5b8181101561063e57858101830151858201604001528201610622565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b5f6020828403121561068c575f80fd5b5051919050565b80820281158282048414176106cf577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea26469706673582212202264fb6ac38394231c39b18d83e2acca94b663fa90eff94f5ad05080fdc2b96c64736f6c63430008180033',
    sourceMap:
      '562:1890:92:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1003:215:82;;;;;;:::i;:::-;;:::i;:::-;;;;722:25:485;;;778:2;763:18;;756:34;;;;695:18;1003:215:82;;;;;;;;644:50:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;749:28::-;;;;;;;;1589:42:485;1577:55;;;1559:74;;1547:2;1532:18;749:28:92;1413:226:485;836:32:92;;;;;926:35;;;;;759:153:82;;;;;;:::i;:::-;;:::i;:::-;;;1790:25:485;;;1778:2;1763:18;759:153:82;1644:177:485;1003:215:82;1092:7;1101;1120:17;1140:32;1150:8;1160:4;1166:5;1140:9;:32::i;:::-;1120:52;;;-1:-1:-1;1003:215:82;-1:-1:-1;;;;;1003:215:82:o;759:153::-;847:7;873:32;883:8;893:4;899:5;873:9;:32::i;:::-;866:39;;759:153;;;;;;:::o;2043:407:92:-;2143:7;2162:12;2177:67;2209:5;2216:7;2225:6;2233:10;2177:31;:67::i;:::-;2269:35;;;;;:26;2296:7;1577:55:485;;2269:35:92;;;1559:74:485;2162:82:92;;-1:-1:-1;;;2278:3:92;2269:26;;;;1532:18:485;;2269:35:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2254:50;;2318:4;2326:1;2318:9;2314:56;;2336:34;;;;;;;;;;;;;;2314:56;2387;2412:8;2422:4;2428:5;2435:7;2387:24;:56::i;:::-;2380:63;2043:407;-1:-1:-1;;;;;;2043:407:92:o;1829:368:105:-;1974:4;2011;1998:17;;:9;:17;;;:40;;;;;2033:5;2019:19;;:10;:19;;;1998:40;1994:58;;;-1:-1:-1;2047:5:105;2040:12;;1994:58;2079:5;2066:18;;:9;:18;;;:40;;;;;2102:4;2088:18;;:10;:18;;;2066:40;2062:57;;;-1:-1:-1;2115:4:105;2108:11;;2062:57;2136:54;;;;;2199:42:485;2268:15;;;2136:54:105;;;2250:34:485;2320:15;;2300:18;;;2293:43;2162:18;;2136:54:105;;;;;;;1829:368;;;;;;;:::o;3090:645::-;3224:7;470:66;3268:38;;3359:3;3336:26;;;3372:357;;;;3471:73;3500:8;3510:9;3521:22;3534:9;3521:10;:22;:::i;:::-;3471:28;:73::i;:::-;3464:80;;;;;;3372:357;3645:73;3674:8;3684:22;3697:9;3684:10;:22;:::i;:::-;3708:9;20285:3569:68;20897:9;;;20995:6;20904:1;20901;20982:20;21110:14;;;21098:27;;21090:36;;;21211:278;;21257:1;21247:153;;21299:10;21293:4;21286:24;21373:4;21367;21360:18;21247:153;-1:-1:-1;21431:14:68;;;21466:5;;21211:278;21610:2;21607:1;21604:9;21594:149;;21650:10;21644:4;21637:24;21720:4;21714;21707:18;21594:149;22000:1;21997;21994;21987:15;22148:1;22144:9;;;22137:17;;22239:9;;;;;23559:13;;;23551:22;;;23583:9;;;;23579:17;;;23598:1;23575:25;23547:54;23635:14;;23631:22;23515:164;22614:1;22621;22617:9;;22610:17;;22896:11;;;22889:19;;22880:29;22969:11;;;22962:19;;22953:29;23043:11;;;23036:19;;23027:29;23117:11;;;23110:19;;23101:29;23191:11;;;23184:19;;23175:29;23767:11;;;23760:19;;;23751:29;23273:529;20285:3569;;;;;:::o;14:196:485:-;82:20;;142:42;131:54;;121:65;;111:93;;200:1;197;190:12;111:93;14:196;;;:::o;215:328::-;292:6;300;308;361:2;349:9;340:7;336:23;332:32;329:52;;;377:1;374;367:12;329:52;413:9;400:23;390:33;;442:38;476:2;465:9;461:18;442:38;:::i;:::-;432:48;;499:38;533:2;522:9;518:18;499:38;:::i;:::-;489:48;;215:328;;;;;:::o;801:607::-;913:4;942:2;971;960:9;953:21;1003:6;997:13;1046:6;1041:2;1030:9;1026:18;1019:34;1071:1;1081:140;1095:6;1092:1;1089:13;1081:140;;;1190:14;;;1186:23;;1180:30;1156:17;;;1175:2;1152:26;1145:66;1110:10;;1081:140;;;1085:3;1270:1;1265:2;1256:6;1245:9;1241:22;1237:31;1230:42;1399:2;1329:66;1324:2;1316:6;1312:15;1308:88;1297:9;1293:104;1289:113;1281:121;;;;801:607;;;;:::o;1826:184::-;1896:6;1949:2;1937:9;1928:7;1924:23;1920:32;1917:52;;;1965:1;1962;1955:12;1917:52;-1:-1:-1;1988:16:485;;1826:184;-1:-1:-1;1826:184:485:o;2347:322::-;2420:9;;;2451;;2468:15;;;2462:22;;2448:37;2438:225;;2519:77;2516:1;2509:88;2620:4;2617:1;2610:15;2648:4;2645:1;2638:15;2438:225;2347:322;;;;:::o',
    linkReferences: {},
    immutableReferences: {
      '26651': [
        { start: 238, length: 32 },
        { start: 652, length: 32 },
      ],
      '26654': [
        { start: 314, length: 32 },
        { start: 476, length: 32 },
        { start: 607, length: 32 },
      ],
      '26657': [
        { start: 353, length: 32 },
        { start: 510, length: 32 },
      ],
      '26661': [{ start: 823, length: 32 }],
    },
  },
  methodIdentifiers: {
    'cdo()': '387a7237',
    'getQuote(uint256,address,address)': 'ae68676c',
    'getQuotes(uint256,address,address)': '0579e61f',
    'name()': '06fdde03',
    'tranche()': '6ebc0af1',
    'underlying()': '6f307dc3',
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_cdo","type":"address"},{"internalType":"address","name":"_tranche","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"PriceOracle_InvalidAnswer","type":"error"},{"inputs":[],"name":"PriceOracle_InvalidConfiguration","type":"error"},{"inputs":[{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"PriceOracle_NotSupported","type":"error"},{"inputs":[],"name":"PriceOracle_Overflow","type":"error"},{"inputs":[],"name":"cdo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inAmount","type":"uint256"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"quote","type":"address"}],"name":"getQuotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tranche","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"author":"Idle DAO (https://idle.finance)","custom:security-contact":"security@euler.xyz","details":"Do not use this oracle for pricing a borrowable Idle tranche.","errors":{"PriceOracle_NotSupported(address,address)":[{"params":{"base":"The address of the base asset.","quote":"The address of the quote asset."}}]},"kind":"dev","methods":{"constructor":{"params":{"_cdo":"The address of the Idle CDO contract.","_tranche":"The address of a tranche corresponding to the CDO."}},"getQuote(uint256,address,address)":{"params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` that is equivalent to `inAmount` of `base`."}},"getQuotes(uint256,address,address)":{"details":"Does not support true bid/ask pricing.","params":{"base":"The token that is being priced.","inAmount":"The amount of `base` to convert.","quote":"The token that is the unit of account."},"returns":{"_0":"The amount of `quote` you would get for selling `inAmount` of `base`.","_1":"The amount of `quote` you would spend for buying `inAmount` of `base`."}}},"stateVariables":{"name":{"return":"The name of the oracle.","returns":{"_0":"The name of the oracle."}}},"title":"IdleTranchesOracle","version":1},"userdoc":{"errors":{"PriceOracle_InvalidAnswer()":[{"notice":"The external feed returned an invalid answer."}],"PriceOracle_InvalidConfiguration()":[{"notice":"The configuration parameters for the PriceOracle are invalid."}],"PriceOracle_NotSupported(address,address)":[{"notice":"The base/quote path is not supported."}],"PriceOracle_Overflow()":[{"notice":"The quote cannot be completed due to overflow."}]},"kind":"user","methods":{"cdo()":{"notice":"The address of the CDO contract."},"constructor":{"notice":"Deploy an IdleTranchesOracle."},"getQuote(uint256,address,address)":{"notice":"One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread."},"getQuotes(uint256,address,address)":{"notice":"Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token."},"name()":{"notice":"Get the name of the oracle."},"tranche()":{"notice":"The address of the tranche contract."},"underlying()":{"notice":"The address of the tranche\'s asset."}},"notice":"Adapter for pricing Idle tranches to their respective underlying.","version":1}},"settings":{"compilationTarget":{"lib/euler-price-oracle/src/adapter/idle/IdleTranchesOracle.sol":"IdleTranchesOracle"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":20000},"remappings":[":@axiom-crypto/v2-periphery/=lib/euler-price-oracle/lib/axiom-std/lib/axiom-v2-periphery/src/",":@layerzerolabs/lz-evm-messagelib-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/messagelib/",":@layerzerolabs/lz-evm-oapp-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/oapp/",":@layerzerolabs/lz-evm-protocol-v2/=lib/layerzero-v2/packages/layerzero-v2/evm/protocol/",":@layerzerolabs/oapp-evm-upgradeable/=lib/layerzero-devtools/packages/oapp-evm-upgradeable/",":@layerzerolabs/oapp-evm/=lib/layerzero-devtools/packages/oapp-evm/",":@layerzerolabs/oft-evm/=lib/layerzero-devtools/packages/oft-evm/",":@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/=lib/openzeppelin-contracts/contracts/",":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":@pendle/core-v2/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":@pyth/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":@redstone/evm-connector/=lib/euler-price-oracle/lib/redstone-oracles-monorepo/packages/evm-connector/contracts/",":@solady/=lib/euler-price-oracle/lib/solady/src/",":@uniswap/v3-core/=lib/euler-price-oracle/lib/v3-core/",":@uniswap/v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/",":ERC4626/=lib/euler-earn/lib/properties/lib/ERC4626/contracts/",":axiom-std/=lib/euler-price-oracle/lib/axiom-std/src/",":axiom-v2-periphery/=lib/euler-price-oracle/lib/axiom-v2-periphery/src/",":crytic-properties/=lib/euler-earn/lib/properties/contracts/",":ds-test/=lib/ethereum-vault-connector/lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",":ethereum-vault-connector/=lib/ethereum-vault-connector/src/",":euler-earn/=lib/euler-earn/src/",":euler-price-oracle-test/=lib/euler-price-oracle/test/",":euler-price-oracle/=lib/euler-price-oracle/src/",":euler-vault-kit/=lib/euler-vault-kit/",":evc/=lib/ethereum-vault-connector/src/",":evk-test/=lib/euler-vault-kit/test/",":evk/=lib/euler-vault-kit/src/",":fee-flow/=lib/fee-flow/src/",":forge-gas-snapshot/=lib/euler-vault-kit/lib/permit2/lib/forge-gas-snapshot/src/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts-upgradeable/lib/halmos-cheatcodes/src/",":layerzero-devtools/=lib/layerzero-devtools/packages/toolbox-foundry/src/",":layerzero-v2/=lib/layerzero-v2/",":layerzero/oft-evm-upgradeable/=lib/layerzero-devtools/packages/oft-evm-upgradeable/contracts/",":layerzero/oft-evm/=lib/layerzero-devtools/packages/oft-evm/contracts/",":morpho-blue-irm/=lib/morpho-blue-irm/src/",":morpho-blue/=lib/morpho-blue-irm/lib/morpho-blue/",":native-token-transfers/=lib/native-token-transfers/",":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",":openzeppelin-contracts/=lib/openzeppelin-contracts/contracts/",":openzeppelin/=lib/ethereum-vault-connector/lib/openzeppelin-contracts/contracts/",":pendle-core-v2-public/=lib/euler-price-oracle/lib/pendle-core-v2-public/contracts/",":permit2/=lib/euler-vault-kit/lib/permit2/",":properties/=lib/euler-earn/lib/properties/contracts/",":pyth-sdk-solidity/=lib/euler-price-oracle/lib/pyth-sdk-solidity/",":redstone-oracles-monorepo/=lib/euler-price-oracle/lib/",":reward-streams/=lib/reward-streams/src/",":solady/=lib/euler-price-oracle/lib/solady/src/",":solidity-bytes-utils/=lib/solidity-bytes-utils/",":solmate/=lib/fee-flow/lib/solmate/src/",":v3-core/=lib/euler-price-oracle/lib/v3-core/contracts/",":v3-periphery/=lib/euler-price-oracle/lib/v3-periphery/contracts/",":wormhole-solidity-sdk/=lib/native-token-transfers/evm/lib/wormhole-solidity-sdk/src/","lib/euler-earn:@openzeppelin-upgradeable/=lib/euler-earn/lib/openzeppelin-contracts-upgradeable/contracts/","lib/euler-earn:@openzeppelin/=lib/euler-earn/lib/openzeppelin-contracts/","lib/euler-earn:ethereum-vault-connector/=lib/euler-earn/lib/ethereum-vault-connector/src/","lib/euler-price-oracle:@openzeppelin/contracts/=lib/euler-price-oracle/lib/openzeppelin-contracts/contracts/","lib/layerzero-devtools/packages/oapp-evm-upgradeable/contracts:@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/","lib/layerzero-devtools/packages/oft-evm-upgradeable/contracts:@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/","lib/layerzero-devtools/packages/oft-evm/contracts:@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts/contracts/"]},"sources":{"lib/euler-price-oracle/lib/solady/src/utils/FixedPointMathLib.sol":{"keccak256":"0xd890a3c47fd08d2d663890af4561045edc531ca1d7687bbf9dd7a2d1f15f1a3e","license":"MIT","urls":["bzz-raw://b8a4777858cb1c9ffa53f9c1f115d6e9c9af547cf02e06ab9e175da373b46da4","dweb:/ipfs/QmQSKB7DZnatj6eJtugzUvKxrxFrdzFwRMJxQpsTbtup1P"]},"lib/euler-price-oracle/src/adapter/BaseAdapter.sol":{"keccak256":"0x1ca090708d2c03edd58fdb6c22638fce41e93c5f4021b382940d088ae49c81e3","license":"GPL-2.0-or-later","urls":["bzz-raw://d00bbb80bdb34321bea2055bcb1364cd860e7662ec513254ffa61698c09526b4","dweb:/ipfs/QmeCE976ZZy6oLCP2emgBjvx8vJxKvoEJ4yF65QKLjQJDo"]},"lib/euler-price-oracle/src/adapter/idle/IIdleCDO.sol":{"keccak256":"0xb0bc5863b0a72f8d3d9341ac2869356606e38e3464cb552767baf63c676a1c0b","license":"Apache-2.0","urls":["bzz-raw://9903ca6c3ad96812db5eeea9affd1b3c3bf4c5cf4f85bc554a58dab4c77db782","dweb:/ipfs/QmbFgWEbqQznMxu8ZndaJWSS4cT2fuyiDKKKJsFQqKfySM"]},"lib/euler-price-oracle/src/adapter/idle/IIdleTranche.sol":{"keccak256":"0x3c32cf639199f1fc524192d0944e45ed4eb40ab1ee65a8aef2bb3f14c5def0ce","license":"Apache-2.0","urls":["bzz-raw://dc7549be54e1c9925f21f553082892d95f440c59834b4a3d976edd10d8501773","dweb:/ipfs/QmdY1e1KM4ksrPx7kWF9eZu6fvs8Nw9HRSHakRNnXDfv2H"]},"lib/euler-price-oracle/src/adapter/idle/IdleTranchesOracle.sol":{"keccak256":"0x040fc4983ac5133f54779e5f9632eefc2b81e75f00f743f92ac1cf6a3c3e6746","license":"GPL-2.0-or-later","urls":["bzz-raw://70603bf96fe3fd72b8b5ea10ce762ded4715b3e1b866930cfb75fe24206e8c30","dweb:/ipfs/QmQ4wYd7uRUJV4EUgiJGCUCpGdurhr8BWpiWw1ZLEWmaNF"]},"lib/euler-price-oracle/src/interfaces/IPriceOracle.sol":{"keccak256":"0x03567dd4084dc74a9e2f9eeffce4d9047989b0d2122820716c3bc75891484308","license":"GPL-2.0-or-later","urls":["bzz-raw://23965a79475c85a0a8a3a137a76424f60debd9e592bc9127d463392fad7df30f","dweb:/ipfs/QmPc1bV3kZ3ynLGTqG6xRbZ3E5AstYdfipXbysSqYGhJYA"]},"lib/euler-price-oracle/src/lib/Errors.sol":{"keccak256":"0x2551662bcef8d4a5cb7cdc8cd404f28c726af1bcfe7ef371b22d53322a932698","license":"GPL-2.0-or-later","urls":["bzz-raw://1641b99e0c907950448d62205fc23b5550c44899ba8c0bc0274a6b0a501981b9","dweb:/ipfs/QmZvDhw4Ao3m8jRjNjT8Xq8imCPecJyytUTtCUjt5RoB4v"]},"lib/euler-price-oracle/src/lib/ScaleUtils.sol":{"keccak256":"0x9bd1ac81aab20c82eacbdda286996571530cdb1505d74299b56fd51fef0be9f8","license":"GPL-2.0-or-later","urls":["bzz-raw://5be0485ea15aff9b321012c1a1102425b7c63375d4a378d2a81ae55f60038bf3","dweb:/ipfs/QmZwg2KtMWzjc6PMxJ98iTYcEVj8Bbs8YdNQNNHRq3pwfM"]},"lib/forge-std/src/interfaces/IERC20.sol":{"keccak256":"0x4cab887298790f908c27de107e4e2907ca5413aee482ef776f8d2f353c5ef947","license":"MIT","urls":["bzz-raw://bb715e0c4a2bdbe432bb624501506041f06e878e0b72675aebba30ad2c2b72e7","dweb:/ipfs/QmWhhLSvkxS2NrukJJHqFY8gDVE5r9rD4PfHvR24pwdKv9"]}},"version":1}',
  metadata: {
    compiler: { version: '0.8.24+commit.e11b9ed9' },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            { internalType: 'address', name: '_cdo', type: 'address' },
            { internalType: 'address', name: '_tranche', type: 'address' },
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
          name: 'cdo',
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
          name: 'tranche',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'underlying',
          outputs: [{ internalType: 'address', name: '', type: 'address' }],
        },
      ],
      devdoc: {
        kind: 'dev',
        methods: {
          constructor: {
            params: {
              _cdo: 'The address of the Idle CDO contract.',
              _tranche: 'The address of a tranche corresponding to the CDO.',
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
          'cdo()': { notice: 'The address of the CDO contract.' },
          constructor: { notice: 'Deploy an IdleTranchesOracle.' },
          'getQuote(uint256,address,address)': {
            notice:
              'One-sided price: How much quote token you would get for inAmount of base token, assuming no price spread.',
          },
          'getQuotes(uint256,address,address)': {
            notice:
              'Two-sided price: How much quote token you would get/spend for selling/buying inAmount of base token.',
          },
          'name()': { notice: 'Get the name of the oracle.' },
          'tranche()': { notice: 'The address of the tranche contract.' },
          'underlying()': { notice: "The address of the tranche's asset." },
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
        'lib/euler-price-oracle/src/adapter/idle/IdleTranchesOracle.sol': 'IdleTranchesOracle',
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
      'lib/euler-price-oracle/src/adapter/idle/IIdleCDO.sol': {
        keccak256: '0xb0bc5863b0a72f8d3d9341ac2869356606e38e3464cb552767baf63c676a1c0b',
        urls: [
          'bzz-raw://9903ca6c3ad96812db5eeea9affd1b3c3bf4c5cf4f85bc554a58dab4c77db782',
          'dweb:/ipfs/QmbFgWEbqQznMxu8ZndaJWSS4cT2fuyiDKKKJsFQqKfySM',
        ],
        license: 'Apache-2.0',
      },
      'lib/euler-price-oracle/src/adapter/idle/IIdleTranche.sol': {
        keccak256: '0x3c32cf639199f1fc524192d0944e45ed4eb40ab1ee65a8aef2bb3f14c5def0ce',
        urls: [
          'bzz-raw://dc7549be54e1c9925f21f553082892d95f440c59834b4a3d976edd10d8501773',
          'dweb:/ipfs/QmdY1e1KM4ksrPx7kWF9eZu6fvs8Nw9HRSHakRNnXDfv2H',
        ],
        license: 'Apache-2.0',
      },
      'lib/euler-price-oracle/src/adapter/idle/IdleTranchesOracle.sol': {
        keccak256: '0x040fc4983ac5133f54779e5f9632eefc2b81e75f00f743f92ac1cf6a3c3e6746',
        urls: [
          'bzz-raw://70603bf96fe3fd72b8b5ea10ce762ded4715b3e1b866930cfb75fe24206e8c30',
          'dweb:/ipfs/QmQ4wYd7uRUJV4EUgiJGCUCpGdurhr8BWpiWw1ZLEWmaNF',
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
  id: 92,
} as const;
