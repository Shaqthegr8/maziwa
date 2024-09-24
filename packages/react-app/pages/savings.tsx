import { useEffect, useState } from "react";
import { useWeb3 } from "@/contexts/useWeb3";
import PrimaryButton from "@/components/Button";

const SavingsPage = () => {
  const {
    address,
    getUserSavingsBalance,
    depositSavings,
    withdrawSavings,
    getTransactionHistory,
  } = useWeb3();

  const [savingsBalance, setSavingsBalance] = useState<string>("0");
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [withdrawAmount, setWithdrawAmount] = useState<string>("");
  const [transactionHistory, setTransactionHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch user's savings balance and transaction history on page load
  useEffect(() => {
    if (address) {
      fetchSavingsBalance();
      fetchTransactionHistory();
    }
  }, [address]);

  const fetchSavingsBalance = async () => {
    const balance = await getUserSavingsBalance();
    setSavingsBalance(balance);
  };

  const fetchTransactionHistory = async () => {
    const history = await getTransactionHistory();
    setTransactionHistory(history);
  };

  const handleDeposit = async () => {
    setLoading(true);
    try {
      await depositSavings(depositAmount);
      await fetchSavingsBalance();
      setDepositAmount("");
    } catch (error) {
      console.error("Error depositing savings:", error);
    }
    setLoading(false);
  };

  const handleWithdraw = async () => {
    setLoading(true);
    try {
      await withdrawSavings(withdrawAmount);
      await fetchSavingsBalance();
      setWithdrawAmount("");
    } catch (error) {
      console.error("Error withdrawing savings:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Savings</h1>
      <div className="bg-white shadow rounded-lg p-8">
        {/* Display User Savings Balance */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Your Savings Balance</h2>
          <p className="text-lg mt-2 text-gray-600">{savingsBalance} cKES</p>
        </div>

        {/* Deposit Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700">Deposit Savings</h3>
          <div className="flex mt-4">
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Enter deposit amount"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <PrimaryButton
              onClick={handleDeposit}
              title="Deposit"
              loading={loading}
            />
          </div>
        </div>

        {/* Withdraw Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700">Withdraw Savings</h3>
          <div className="flex mt-4">
            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="Enter withdrawal amount"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <PrimaryButton
              onClick={handleWithdraw}
              title="Withdraw"
              loading={loading}
            />
          </div>
        </div>

        {/* Transaction History Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Transaction History</h3>
          {transactionHistory.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {transactionHistory.map((tx, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {tx}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-gray-600">No transaction history available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavingsPage;
