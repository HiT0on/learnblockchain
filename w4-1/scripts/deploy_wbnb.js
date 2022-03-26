
const hre = require("hardhat");
const { writeAbiAddr } = require('./artifact_saver.js')


async function main() {

  const wbnb = await hre.ethers.getContractFactory("WBNB");
  const WBNB = await wbnb.deploy();

  await WBNB.deployed();

  console.log("WBNB deployed to:", WBNB.address);
  let artifact = await artifacts.readArtifact("WBNB");
  await writeAbiAddr(artifact, WBNB.address, "WBNB", network.name);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
