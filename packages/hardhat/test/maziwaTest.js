const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Maziwa", function () {
    let Maziwa;
    let maziwa;
    let owner;
    let user1;
    let user2;

    beforeEach(async function () {
        [owner, user1, user2] = await ethers.getSigners();
        Maziwa = await ethers.getContractFactory("Maziwa");
        maziwa = await Maziwa.deploy();
        await maziwa.deployed();
    });

    it("Should register a new user", async function () {
        await maziwa.connect(user1).registerUser();
        const userData = await maziwa.users(user1.address);
        expect(userData.isRegistered).to.be.true;
    });

    it("Should allow a user to deposit savings", async function () {
        await maziwa.connect(user1).registerUser();
        await maziwa.connect(user1).depositSavings({ value: ethers.utils.parseEther("1.0") });
        const userData = await maziwa.users(user1.address);
        expect(userData.savingsBalance.toString()).to.equal(ethers.utils.parseEther("1.0").toString());
    });

    it("Should allow a user to withdraw savings", async function () {
        await maziwa.connect(user1).registerUser();
        await maziwa.connect(user1).depositSavings({ value: ethers.utils.parseEther("1.0") });
        await maziwa.connect(user1).withdrawSavings(ethers.utils.parseEther("0.5"));
        const userData = await maziwa.users(user1.address);
        expect(userData.savingsBalance.toString()).to.equal(ethers.utils.parseEther("0.5").toString());
    });

    it("Should allow a user to request a loan", async function () {
        await maziwa.connect(user1).registerUser();
        await maziwa.connect(user1).requestLoan(ethers.utils.parseEther("2.0"), 5, 30);
        const loan = await maziwa.loans(1);
        expect(loan.borrower).to.equal(user1.address);
        expect(loan.amount.toString()).to.equal(ethers.utils.parseEther("2.0").toString());
    });

    it("Should allow a user to grant a loan", async function () {
        await maziwa.connect(user1).registerUser();
        await maziwa.connect(user2).registerUser();
        await maziwa.connect(user1).requestLoan(ethers.utils.parseEther("2.0"), 5, 30);
        await maziwa.connect(user2).grantLoan(1, { value: ethers.utils.parseEther("2.0") });

        const loan = await maziwa.loans(1);
        expect(loan.lender).to.equal(user2.address);
        expect(loan.amount.toString()).to.equal(ethers.utils.parseEther("2.0").toString());
    });

    it("Should allow a borrower to repay a loan", async function () {
        await maziwa.connect(user1).registerUser();
        await maziwa.connect(user2).registerUser();
        await maziwa.connect(user1).requestLoan(ethers.utils.parseEther("2.0"), 5, 30);
        await maziwa.connect(user2).grantLoan(1, { value: ethers.utils.parseEther("2.0") });

        const loanAmount = ethers.utils.parseEther("2.0");
        const interest = loanAmount.mul(5).div(100);  // 5% interest
        const totalRepayment = loanAmount.add(interest);

        await maziwa.connect(user1).repayLoan(1, { value: totalRepayment });

        const loan = await maziwa.loans(1);
        expect(loan.isRepaid).to.be.true;
    });

    it("Should allow a user to make an investment", async function () {
        await maziwa.connect(user1).registerUser();
        await maziwa.connect(user1).makeInvestment("Project A", ethers.utils.parseEther("1.0"), 10, 365, { value: ethers.utils.parseEther("1.0") });
        const investment = await maziwa.investments(1);
        expect(investment.investor).to.equal(user1.address);
        expect(investment.amount.toString()).to.equal(ethers.utils.parseEther("1.0").toString());
    });

    it("Should mature an investment and transfer returns", async function () {
        await maziwa.connect(user1).registerUser();
        await maziwa.connect(user1).makeInvestment("Project A", ethers.utils.parseEther("1.0"), 10, 365, { value: ethers.utils.parseEther("1.0") });

        await maziwa.matureInvestment(1);

        const userData = await maziwa.users(user1.address);
        const expectedReturn = ethers.utils.parseEther("1.1"); // 10% return
        expect(userData.savingsBalance.toString()).to.equal(expectedReturn.toString());
    });
});
