require("@nomiclabs/hardhat-waffle");
//账号秘钥
const ROPSTEN = "";
module.exports = {
  //部署网络
  defaultNetwork: "dev",
  networks: {
    dev: {
      url: 'http://127.0.0.1:8545',
      accounts: [`0x${ROPSTEN}`],
      chainId: 31337
    },
    bnbtest:{
      url:'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [`0x${ROPSTEN}`],
      chainId: 97
    }
  },
  solidity: {
    // 编译版本
    compilers: [
      {
        version: "0.8.9",
        settings: {}
      },
    ]
  },
  //编译以后的文件路径
  paths: {
    // 合约来源
    sources: "./contracts",
    // 测试文件
    tests: "./test",
    // 缓存目录
    cache: "./cache",
    // 编译目录
    artifacts: "./artifacts"
  }
};