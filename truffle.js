/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */



var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
const mnemonic = process.env.NEM;

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*',
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(
                    mnemonic,
                    'https://ropsten.infura.io/' + accessToken
                );
            },
            network_id: '4',
            gas: 4600100,
            gasPrice: 30000000
        }
    }
};
