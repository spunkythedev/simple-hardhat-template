const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", function () {
  let simpleStorage;

  beforeEach(async function () {
    simpleStorage = await ethers.deployContract("SimpleStorage");
    await simpleStorage.waitForDeployment();
  });

  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });
});
