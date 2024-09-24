const MicroloansPage = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Microloans</h1>
  
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-lg text-gray-600">
            Microloans are small, short-term loans that are often offered to individuals or small businesses who lack access to traditional banking services. Microloans can be crucial in providing financial independence and fostering entrepreneurial growth, especially in underserved communities.
          </p>
        </div>
  
        {/* Use Cases Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Use Cases of Microloans</h2>
          <ul className="space-y-4 list-disc list-inside">
            <li className="text-gray-600">
              <strong>Small Business Startups:</strong> Microloans are often used to help individuals start small businesses in industries such as agriculture, retail, and handicrafts. They provide the seed money needed for initial investments, such as buying stock, equipment, or raw materials.
            </li>
            <li className="text-gray-600">
              <strong>Expanding Existing Businesses:</strong> Entrepreneurs can use microloans to expand their small businesses, purchase more inventory, hire additional workers, or acquire new equipment to scale operations.
            </li>
            <li className="text-gray-600">
              <strong>Covering Emergency Expenses:</strong> In times of financial difficulty, microloans can provide a safety net for families needing funds for medical emergencies, home repairs, or education costs.
            </li>
            <li className="text-gray-600">
              <strong>Supporting Agriculture:</strong> Microloans can be used by small-scale farmers to buy seeds, fertilizer, or farming equipment, enabling them to grow crops and improve productivity.
            </li>
          </ul>
        </section>
  
        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Benefits of Microloans</h2>
          <ul className="space-y-4 list-disc list-inside">
            <li className="text-gray-600">
              <strong>Access to Capital:</strong> Microloans make it possible for individuals who do not qualify for traditional loans to access funds to start or grow their businesses.
            </li>
            <li className="text-gray-600">
              <strong>Fostering Entrepreneurship:</strong> By providing funds to aspiring business owners, microloans empower individuals to take control of their financial futures and become self-sufficient.
            </li>
            <li className="text-gray-600">
              <strong>Improving Livelihoods:</strong> Many microloan recipients experience improved living conditions as they are able to increase their income, support their families, and contribute to their communities.
            </li>
            <li className="text-gray-600">
              <strong>Flexible Repayment Terms:</strong> Microloans typically offer more flexible repayment terms than traditional loans, making it easier for borrowers to repay without financial strain.
            </li>
            <li className="text-gray-600">
              <strong>Lower Interest Rates:</strong> Many microloan programs offer lower interest rates compared to payday loans or other short-term lending options, making borrowing more affordable.
            </li>
          </ul>
        </section>
  
       {/* Call to Action */}
<section className="text-center py-8 bg-blue-50 rounded-lg">
  <h2 className="text-2xl font-semibold text-gray-800">Ready to Apply for a Microloan?</h2>
  <p className="mt-4 text-gray-600">
    Explore our microloan offerings and take control of your financial future today.
  </p>
  <div className="mt-6">
    <a
      href="/under-development"  // Link to the Under Development page
      className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700"
    >
      Apply Now
    </a>
  </div>
</section>

      </div>
    );
  };
  
  export default MicroloansPage;
  