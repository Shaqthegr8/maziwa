import { useEffect, useState } from 'react';

const SavingsComponent = () => {
  const [savings, setSavings] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch data from backend
  const fetchSavings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/savings');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSavings(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchSavings();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Savings Data</h1>
      <ul>
        {savings.map((item) => (
          <li key={item.id}>
            Amount: {item.amount} {item.currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavingsComponent;
