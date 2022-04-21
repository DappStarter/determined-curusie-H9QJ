require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad gloom process outer tower'; 
let testAccounts = [
"0x5e2a7a4ed96f6582eea5bd078218715869fce197c347924f933e029f2122a724",
"0xe3984ef877f16412830e2e47a19e7eaba79acb67bb9aebd5e45894e98b38c219",
"0xfb07e94e57ce283cd685dd93b4177f0bc003c4a96edfc0069da753db09efea48",
"0x3219841ffbc9b4b5c66f25d893dc59ca67a709aa287a755016c059ec20e724fe",
"0xc26f7e5b33e0d9913546c050864feb97467f8fd748ab54831fff664b13e1f54c",
"0x755170bf63b76ed48783e662729443a46f41b065d6548720dbfcd3d244c2db7b",
"0xb0f552773f10f66c0b0eb65f9a0c78910f6b0471250b348011d5117fbbac65fa",
"0x6ec4eba5e5ab4d7b5c2d86f9c3c9a7942cf7ca53348bed31d140abcf20a1d2d7",
"0x60b5a7bcd4032fa2928e99ee55b7d0f2717e6d7d4bd49ccf9f651ee2f280fcd1",
"0xbb32770b96d9eee6cd11e419de9a665a99c61e84fd469cb3a8db83f315a25220"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

