const InvestmentPortfolio = ({ name, description, returnRate }: { name: string; description: string; returnRate: string; }) => (
    <div className="border border-gray-200 p-6 rounded-lg shadow-md bg-white">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{name}</h3>
      <p className="text-lg text-gray-600 mb-4">{description}</p>
      <p className="text-gray-700 mb-4"><strong>Annual Return:</strong> {returnRate}</p>
      <a
        href="/under-development"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700"
      >
        Learn More
      </a>
    </div>
  );
  
  const InvestmentsPage = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Investment Portfolios</h1>
        
        {/* Introductory Paragraph */}
        <div className="mb-12">
          <p className="text-lg text-gray-600">
            Explore a range of investment portfolios tailored to meet your financial goals. Each portfolio is a curated collection of assets that aims to provide competitive returns over the long term.
          </p>
        </div>
        
        {/* Portfolio Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InvestmentPortfolio
            name="The Techie"
            description="A collection of the best-performing tech companies such as Apple, Microsoft, and Amazon. Ideal for tech enthusiasts and long-term growth investors."
            returnRate="12% per annum"
          />
          <InvestmentPortfolio
            name="The Dividend King"
            description="A diversified portfolio of high-dividend-paying stocks such as Johnson & Johnson, Procter & Gamble, and Coca-Cola. Designed for income-focused investors."
            returnRate="8% per annum"
          />
          <InvestmentPortfolio
            name="The S&P 500 Tracker"
            description="A low-cost index fund tracking the performance of the S&P 500, consisting of 500 of the largest U.S. companies. Perfect for passive investors."
            returnRate="10% per annum"
          />
          <InvestmentPortfolio
            name="The Green Investor"
            description="A portfolio focused on environmentally friendly companies and green energy, including firms like Tesla and NextEra Energy."
            returnRate="9% per annum"
          />
          <InvestmentPortfolio
            name="The Emerging Markets Explorer"
            description="An exciting portfolio of companies from emerging markets such as China, India, and Brazil. High risk, high reward."
            returnRate="15% per annum"
          />
        </div>
      </div>
    );
  };
  
  export default InvestmentsPage;
  