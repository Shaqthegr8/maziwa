// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Maziwa {
    
    // Structs
    struct User {
        address userAddress;
        uint256 savingsBalance;
        uint256 loanBalance;
        uint256 investmentBalance;
        uint256 creditScore; // Simplified credit score based on transaction history
        bool isRegistered;
    }
    
    struct Loan {
        uint256 loanId;
        address borrower;
        address lender;
        uint256 amount;
        uint256 interestRate;
        uint256 duration; // Duration in days
        bool isRepaid;
    }
    
    struct Investment {
        uint256 investmentId;
        address investor;
        string projectDescription;
        uint256 amount;
        uint256 expectedReturn;
        uint256 duration; // Duration in days
        bool isMatured;
    }

    // State Variables
    uint256 public loanCounter;
    uint256 public investmentCounter;
    address public owner;
    mapping(address => User) public users;
    mapping(uint256 => Loan) public loans;
    mapping(uint256 => Investment) public investments;

    // Events
    event UserRegistered(address indexed user);
    event SavingsDeposited(address indexed user, uint256 amount);
    event SavingsWithdrawn(address indexed user, uint256 amount);
    event LoanRequested(uint256 indexed loanId, address indexed borrower, uint256 amount);
    event LoanGranted(uint256 indexed loanId, address indexed lender, uint256 amount);
    event LoanRepaid(uint256 indexed loanId, address indexed borrower);
    event InvestmentMade(uint256 indexed investmentId, address indexed investor, uint256 amount);
    event InvestmentMatured(uint256 indexed investmentId, address indexed investor, uint256 returnAmount);

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier onlyRegistered() {
        require(users[msg.sender].isRegistered, "User not registered");
        _;
    }

    // Constructor
    constructor() {
        owner = msg.sender;
    }

    // Register User
    function registerUser() public {
        require(!users[msg.sender].isRegistered, "User already registered");

        users[msg.sender] = User({
            userAddress: msg.sender,
            savingsBalance: 0,
            loanBalance: 0,
            investmentBalance: 0,
            creditScore: 0,
            isRegistered: true
        });

        emit UserRegistered(msg.sender);
    }

    // Deposit Savings
    function depositSavings() public payable onlyRegistered {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        users[msg.sender].savingsBalance += msg.value;
        emit SavingsDeposited(msg.sender, msg.value);
    }

    // Withdraw Savings
    function withdrawSavings(uint256 amount) public onlyRegistered {
        require(users[msg.sender].savingsBalance >= amount, "Insufficient savings balance");
        users[msg.sender].savingsBalance -= amount;
        payable(msg.sender).transfer(amount);
        emit SavingsWithdrawn(msg.sender, amount);
    }

    // Request a Loan
    function requestLoan(uint256 amount, uint256 interestRate, uint256 duration) public onlyRegistered {
        require(amount > 0, "Loan amount must be greater than 0");

        loanCounter++;
        loans[loanCounter] = Loan({
            loanId: loanCounter,
            borrower: msg.sender,
            lender: address(0),
            amount: amount,
            interestRate: interestRate,
            duration: duration,
            isRepaid: false
        });

        emit LoanRequested(loanCounter, msg.sender, amount);
    }

    // Grant a Loan
    function grantLoan(uint256 loanId) public payable onlyRegistered {
        Loan storage loan = loans[loanId];
        require(loan.loanId == loanId, "Loan does not exist");
        require(loan.lender == address(0), "Loan already granted");
        require(msg.value == loan.amount, "Incorrect loan amount");

        loan.lender = msg.sender;
        users[loan.borrower].loanBalance += loan.amount;
        users[loan.borrower].creditScore += 10; // Simplified credit score increment

        payable(loan.borrower).transfer(loan.amount);
        emit LoanGranted(loanId, msg.sender, loan.amount);
    }

    // Repay a Loan
    function repayLoan(uint256 loanId) public payable onlyRegistered {
        Loan storage loan = loans[loanId];
        require(loan.loanId == loanId, "Loan does not exist");
        require(loan.borrower == msg.sender, "Not the borrower");
        require(!loan.isRepaid, "Loan already repaid");

        uint256 repaymentAmount = loan.amount + (loan.amount * loan.interestRate / 100);
        require(msg.value == repaymentAmount, "Incorrect repayment amount");

        loan.isRepaid = true;
        users[msg.sender].loanBalance -= loan.amount;
        users[loan.lender].savingsBalance += msg.value;

        emit LoanRepaid(loanId, msg.sender);
    }

    // Make an Investment
    function makeInvestment(string memory projectDescription, uint256 amount, uint256 expectedReturn, uint256 duration) public onlyRegistered payable {
        require(msg.value == amount, "Investment amount mismatch");

        investmentCounter++;
        investments[investmentCounter] = Investment({
            investmentId: investmentCounter,
            investor: msg.sender,
            projectDescription: projectDescription,
            amount: amount,
            expectedReturn: expectedReturn,
            duration: duration,
            isMatured: false
        });

        users[msg.sender].investmentBalance += amount;
        emit InvestmentMade(investmentCounter, msg.sender, amount);
    }

    // Mature an Investment
    function matureInvestment(uint256 investmentId) public onlyOwner {
        Investment storage investment = investments[investmentId];
        require(investment.investmentId == investmentId, "Investment does not exist");
        require(!investment.isMatured, "Investment already matured");

        uint256 returnAmount = investment.amount + (investment.amount * investment.expectedReturn / 100);
        investment.isMatured = true;
        users[investment.investor].investmentBalance -= investment.amount;
        users[investment.investor].savingsBalance += returnAmount;

        emit InvestmentMatured(investmentId, investment.investor, returnAmount);
    }

    // Fallback Function
    fallback() external payable {
        depositSavings();
    }

    receive() external payable {
        depositSavings();
    }
}
