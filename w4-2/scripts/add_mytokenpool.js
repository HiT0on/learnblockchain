const { ethers, network } = require('hardhat');
const masterChef = require(`../deployments/dev/${network.name}-MasterChef.json`);

async function main() {
  const [deployer] = await ethers.getSigners();
  let mc = await ethers.getContractAt(masterChef.contractName, masterChef.address, deployer);
  //增加质押挖矿池
  await mc.add(50,'0x2f458554436AB8B29D67e1aBf757AF06B6B39867',true);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
