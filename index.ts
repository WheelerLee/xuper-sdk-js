const XuperSDK = require('./dist/index.js').default;
// import XuperSDK from './src/index';

const xsdk = XuperSDK.getInstance({
    node: '10.0.0.50:37101',
    chain: 'xuper',
    // env: {
    //     node: {
    //         disableGRPC: true,
    //     },
    // },
});

// xsdk.checkStatus().then(x => console.log('xxx', x));
xsdk.getSystemStatus(4).then(x => console.log('xxx', x));
// xsdk.queryContractStatData().then(x => console.log('xxx', x));
xsdk.getConsensusStatus().then(x => console.log('xxx', x));
// xsdk.getBalanceDetail('dHter1dYEkJRiEcYrPdsLbjFkcfnvRecg').then(x => console.log('xxx', x));
