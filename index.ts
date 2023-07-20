const XuperSDK = require('./dist/index.js');
const BN = require('bn.js');
// import XuperSDK from './src/index';

// const xsdk = XuperSDK.getInstance({
//     node: '10.0.0.50:37101',
//     chain: 'xuper',
//     // env: {
//     //     node: {
//     //         disableGRPC: true,
//     //     },
//     // },
// });

// xsdk.checkStatus().then(x => console.log('xxx', x));
// xsdk.getSystemStatus(4).then(x => console.log('xxx', x));
// xsdk.queryContractStatData().then(x => console.log('xxx', x));
// xsdk.getConsensusStatus().then(x => console.log('xxx', x));
// xsdk.getBalanceDetail('dHter1dYEkJRiEcYrPdsLbjFkcfnvRecg').then(x => console.log('xxx', x));
// console.log(XuperSDK.toHex('BFBS4Fvt6K7vk6E2UYyotMBPFWCploWb6QtpKaVkf3s='));
// console.log(XuperSDK.hexToBase64('F0h25dQ='));

console.log(XuperSDK.toHex('hYSQuImHbWpj+s/0FYOcj71PH9lB9hsf/JN45VUWHEQ='));

console.log(atob('aUV2YlpQTmhUM0FEeVFEUTl1U1pFZ2daa210azJVZGtQ'));
console.log(atob('Z0ZqYnAxYzd5cjZoY01oZ1FYdGs1b3NuWnpWR0xWdmto'));
console.log(atob('dGVzdA=='));
// console.log(atob('F0h25dQ='));
// console.log(btoa(new BN(111).toArray().map(v => String.fromCharCode(v)).join('')));

const decodedString = atob('D0JA');

// 将解码后的字符串拆分为单个字符，并获取每个字符的 Unicode 码点
const codePoints = Array.from(decodedString).map((char) => char.charCodeAt(0));

// 将 Unicode 码点转换为字节值，并创建一个 BN 对象
const bytes = codePoints.map((codePoint) => codePoint & 0xff);
const x = new BN(bytes);

// 根据具体的编码方案，将 BN 对象转换回原始的值 x
// 这里假设 x 是一个整数，如果 x 是其他数据类型，根据具体情况进行转换

console.log(x.toString());


// 99,985,656,214 99,985,656,169
