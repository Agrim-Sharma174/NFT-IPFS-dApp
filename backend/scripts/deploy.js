const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a AGRPunks
  const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5";
  /*
  DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
  so AGRPunksContract here is a factory for instances of our AGRPunks contract.
  */
  // here we deploy the contract
 const AGRPunksContract = await hre.ethers.deployContract("AGRPunks", [
   metadataURL
 ]);

  await AGRPunksContract.waitForDeployment();

 // print the address of the deployed contract
  console.log("AGRPunks Contract Address:", AGRPunksContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });