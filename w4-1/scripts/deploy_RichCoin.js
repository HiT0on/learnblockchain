
const hre = require("hardhat");
const { writeAbiAddr } = require('./artifact_saver.js')


async function main() {

  const RichCoin = await hre.ethers.getContractFactory("RichCoin");
  const myToken = await RichCoin.deploy();

  await myToken.deployed();

  console.log("mytoken deployed to:", myToken.address);
  let artifact = await artifacts.readArtifact("RichCoin");
  await writeAbiAddr(artifact, myToken.address, "RichCoin", network.name);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
