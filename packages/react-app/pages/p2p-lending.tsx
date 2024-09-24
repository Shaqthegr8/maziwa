const P2PLendingPage = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">P2P Lending</h1>
  
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-lg text-gray-600">
            Peer-to-Peer (P2P) lending is an innovative financial solution that enables individuals to lend and borrow money directly without the need for traditional financial intermediaries, such as banks. 
            P2P platforms connect borrowers with lenders, offering an alternative to conventional loans and providing better interest rates for both parties.
          </p>
        </div>
  
        {/* How P2P Lending Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">How P2P Lending Works</h2>
          <ul className="space-y-4 list-disc list-inside">
            <li className="text-gray-600">
              Borrowers create a loan listing, specifying the amount of money they want to borrow, the purpose of the loan, and the interest rate they are willing to pay.
            </li>
            <li className="text-gray-600">
              Lenders browse loan listings and choose which loans to fund based on the borrower's profile, risk assessment, and interest rates.
            </li>
            <li className="text-gray-600">
              Once a loan is fully funded, the borrower receives the loan amount and agrees to repay it over a set period, typically with interest.
            </li>
            <li className="text-gray-600">
              Lenders receive monthly payments from the borrower, which includes principal and interest, until the loan is fully repaid.
            </li>
          </ul>
        </section>
  
        {/* Benefits of P2P Lending */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Benefits of P2P Lending</h2>
          <ul className="space-y-4 list-disc list-inside">
            <li className="text-gray-600">
              <strong>Better Interest Rates:</strong> P2P lending typically offers lower interest rates for borrowers and higher returns for lenders compared to traditional financial institutions.
            </li>
            <li className="text-gray-600">
              <strong>Access to Credit:</strong> Borrowers who may not qualify for traditional loans can access funds through P2P lending platforms.
            </li>
            <li className="text-gray-600">
              <strong>Empowerment for Lenders:</strong> Lenders can directly choose where to invest their money, and they can diversify their risk by lending to multiple borrowers.
            </li>
            <li className="text-gray-600">
              <strong>Efficiency:</strong> P2P lending platforms typically have lower overhead costs than traditional banks, allowing for faster and more efficient loan processes.
            </li>
          </ul>
        </section>
  
        {/* Call to Action */}
        <section className="text-center py-8 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Interested in P2P Lending?</h2>
          <p className="mt-4 text-gray-600">
            Learn more about how you can start lending or borrowing on our P2P lending platform.
          </p>
          <div className="mt-6">
            <a
              href="/under-development"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700"
            >
              Learn More
            </a>
          </div>
        </section>
      </div>
    );
  };
  
  export default P2PLendingPage;
  