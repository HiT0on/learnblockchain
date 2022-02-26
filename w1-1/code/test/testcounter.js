const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Counter test", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    await counter.count()

    expect(await counter.counter()).to.equal(1);


    const countTx = await counter.set(2);
    await countTx.wait();

    expect(await counter.counter()).to.equal(3);
  });
});