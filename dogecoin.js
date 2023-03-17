const bitcoin = require('bitcoinjs-lib')
const coinstring = require('coinstring');

const dogecoin = {
	messagePrefix: '\x19Dogecoin Signed Message:\n',
	bip32: {
		public: 0x02facafd,
		private: 0x02fac398
	},
	pubKeyHash: 0x1e,
	scriptHash: 0x16,
	wif: 0x9e
};

const dogecointestnet = {
	messagePrefix: '\x18Bitcoin Signed Message:\n',
	bech32: 'tb',
	bip32: {
		public: 0x043587cf,
		private: 0x04358394
	},
	pubKeyHash: 0x6f,
	scriptHash: 0xc4,
	wif: 0xef
}

const keyPair = bitcoin.ECPair.makeRandom({ network: dogecoin })
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: dogecoin })

console.log(address)

const isValid = coinstring.validate(0x1E, address);

console.log(isValid)

