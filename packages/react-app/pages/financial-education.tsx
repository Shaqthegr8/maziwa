const FinancialEducationPage = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Financial Education</h1>
  
        {/* Introduction Section */}
        <div className="mb-8">
          <p className="text-lg text-gray-600">
            Welcome to our Peer-to-Peer (P2P) Financial Education platform! Here, users who are knowledgeable in finance can share their expertise by teaching their peers and, in return, earn some cKes for their contributions. Whether you want to be a teacher and help others learn, or a student eager to enhance your financial knowledge, this platform is designed to foster financial literacy for everyone.
          </p>
        </div>
  
        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">How It Works</h2>
          <ul className="space-y-4 list-disc list-inside">
            <li className="text-gray-600">
              <strong>Become a Teacher:</strong> If you're well-versed in finance, you can apply to be a teacher on this platform. You'll be able to teach your peers, share your knowledge, and in return, earn cKes directly to your portfolio for every session you complete.
            </li>
            <li className="text-gray-600">
              <strong>Become a Student:</strong> If you're eager to learn about finance, you can apply to be a student. You'll have access to peer-taught courses, personalized lessons, and opportunities to ask questions and grow your financial literacy.
            </li>
            <li className="text-gray-600">
              <strong>Reward System:</strong> For every lesson successfully taught, teachers will receive cKes based on the number of students and the quality of the lesson. It's a win-win for both teachers and students as they gain knowledge and reward.
            </li>
          </ul>
        </section>
  
        {/* Call to Action Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Join the Financial Education Movement</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to dive into the world of financial literacy? Whether you're interested in teaching or learning, we have the perfect place for you. Apply below to start your journey!
          </p>
  
          {/* Teacher Application Section */}
          <div className="flex justify-between space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/2 p-6 border border-gray-200 rounded-lg shadow-md bg-white">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Apply to be a Teacher</h3>
              <p className="text-lg text-gray-600 mb-4">
                Share your knowledge with others and earn cKes by teaching students. Apply to become a teacher today and start making a difference.
              </p>
              <a
                href="/under-development"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700"
              >
                Apply to be a Teacher
              </a>
            </div>
  
            {/* Student Application Section */}
            <div className="w-full md:w-1/2 p-6 border border-gray-200 rounded-lg shadow-md bg-white">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Apply to be a Student</h3>
              <p className="text-lg text-gray-600 mb-4">
                Learn from your peers, enhance your financial skills, and become financially literate. Apply now to start learning!
              </p>
              <a
                href="/under-development"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700"
              >
                Apply to be a Student
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default FinancialEducationPage;
  