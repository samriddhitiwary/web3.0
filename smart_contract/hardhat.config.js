require('@nomiclabs/hardhat-waffle');

// 0x818c21d757324d72dc0c160be99e7980d6c1370de7b1db7d64d13d36fbe2edf1

module.exports = {
  solidity: '0.8.27',
  networks: {
    selopia: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/KezKLfhpPgGr0AzQJbOYMS94kam7iS-s',
      accounts: ['68dc2531b6e6551da529fd836c509f074b1bd9cd14e97675c2c78aa4da25e1a0'],
    },
  },
};