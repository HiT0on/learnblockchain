const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Counter test", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(7);
    await counter.deployed();

    // await counter.count()

    expect(await counter.getCounter()).to.equal(7);


    const countTx = await counter.count();
    await countTx.wait();

    expect(await counter.getCounter()).to.equal(8);
  });
});