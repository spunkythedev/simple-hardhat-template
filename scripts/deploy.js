const { ethers, network } = require("hardhat");
const { verify } = require("../util/verify.js");
require("dotenv").config();

async function main() {
  const simpleStorage = await ethers.deployContract("SimpleStorage");
  await simpleStorage.waitForDeployment();
  const address = await simpleStorage.getAddress();
  console.log(`contract address: ${address}`);

  //? verify on etherscan if not local network
  if (network.config.chainId !== 31337 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.waitForDeployment(6);
    await verify(address, []);
  }

  //? read
  const currentValue = await simpleStorage.retrieve();
  console.log("current value: " + currentValue);

  //? write
  const txResponse = await simpleStorage.store("7");
  await txResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log("updated value: " + updatedValue);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
