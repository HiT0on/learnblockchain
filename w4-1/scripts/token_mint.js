const { ethers, network } = require('hardhat');
const myToken = require(`../deployments/dev/${network.name}-RichCoin.json`);
const myTokenMarket = require(`../deployments/dev/${network.name}-MyTokenMarket.json`);

async function main() {
  const [deployer] = await ethers.getSigners();
  let token = await ethers.getContractAt(myToken.contractName, myToken.address, deployer);
  //铸币 

  await token.mint(deployer.address, ethers.utils.parseEther('1000000000000000000'));
  //授权
  await token.approve(myTokenMarket.address, ethers.utils.parseEther('1000000000000000000'));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});