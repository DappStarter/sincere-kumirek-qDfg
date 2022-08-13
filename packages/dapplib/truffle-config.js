require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note punch pumpkin harvest nasty food giant'; 
let testAccounts = [
"0x8dd741617a529e663c033c2054e1189275e46e1dcc22a3a56d43cc49e47c602e",
"0xaaa55ee888399757f812326a494b2c28c65dda5cb3b8cb73055c4b8ee284d81c",
"0x9b8d0f7191f3641e05b6d523ba96c77ef8e38c7417792fb71320838806a8d55c",
"0x9a1d3e2142616cc4de6ec0f6188f832fd23b1c8b3f9accd46ff6018f32692c27",
"0xe48793b21a88499024d9032e9b0dabed40ea81d1ec24fe0c905eb89c41ffea70",
"0xe41cbffb47b40e5afee694bb7e62e93d2693283b8ac1e595df69b774e11054d7",
"0xe2399db59146e007a7db1883ed94e67cc0d932f10b5fc254fce0b56581980c37",
"0x46821dcc03bcf6307bde3e5c63b5250856ea5861a161f6ebc404ac5359928f2a",
"0x23f13a2ee43fbb6204ba4e7faf28e1bfb216809622b377a2b99296f5f15aa38a",
"0xadadfe10dc52089e9b5cfbf8b68d1335d75408f7ad47a9219147e1bf485dbcba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

