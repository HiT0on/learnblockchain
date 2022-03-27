const { artifacts,network } = require('hardhat');
const { writeAbiAddr } = require('./artifact_saver.js')
const masterChef = require(`../deployments/dev/${network.name}-MasterChef.json`);

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    console.log("Account balance:", (await deployer.getBalance()).toString());
     const MyTokenMarket = await ethers.getContractFactory("MyTokenMarket");
     const myTokenMarket = await MyTokenMarket.deploy("0xE21152A843674c02b7aFeBF78A485AE3e05bCe28", "0x2f458554436AB8B29D67e1aBf757AF06B6B39867", "0x556c0AB03C9840989EDAf26a9FFB7C8fa3E79d9F",masterChef.address);
    //等待部署完成
    await myTokenMarket.deployed();
    console.log("myTokenMarket合约地址：", myTokenMarket.address);
    //储存部署信息在文件
    let artifact = await artifacts.readArtifact("MyTokenMarket");
    await writeAbiAddr(artifact, myTokenMarket.address, "MyTokenMarket", network.name);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});