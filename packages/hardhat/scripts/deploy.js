// scripts/deploy.js

const hre = require("hardhat");

async function main() {
    // Compile the smart contract
    await hre.run('compile');

    // Deploy the contract
    const Maziwa = await hre.ethers.getContractFactory("Maziwa");
    const maziwa = await Maziwa.deploy();

    await maziwa.deployed();

    console.log("Maziwa contract deployed to:", maziwa.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
