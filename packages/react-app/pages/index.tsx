import PrimaryButton from "@/components/Button";
import { useWeb3 } from "@/contexts/useWeb3";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const {
    address,
    getUserAddress,
    sendCUSD,
    mintValoraNFT,
    getNFTs,
    signTransaction,
  } = useWeb3();
  const [cUSDLoading, setCUSDLoading] = useState(false);
  const [nftLoading, setNFTLoading] = useState(false);
  const [signingLoading, setSigningLoading] = useState(false);
  const [userOwnedNFTs, setUserOwnedNFTs] = useState<string[]>([]);
  const [tx, setTx] = useState<any>(undefined);

  useEffect(() => {
    getUserAddress().then(async () => {
      const tokenURIs = await getNFTs();
      setUserOwnedNFTs(tokenURIs);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-50 w-full">
        <h1 className="text-4xl font-bold text-gray-800">
          Start Investing with Maziwa Today
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Unlock financial inclusion with savings, microloans, P2P lending, and investment opportunities.
        </p>
        <div className="mt-8">
          <PrimaryButton
            onClick={() => window.location.href = '/savings'}
            title="Start Saving Today"
            widthFull={false}
          />
        </div>
      </section>
      
      
      {/* Features Section */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">What We Offer</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our range of financial services designed to empower you.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800">Savings</h3>
              <p className="mt-4 text-gray-600">
                Save securely with competitive interest rates.
              </p>
              <PrimaryButton
                onClick={() => window.location.href = '/savings'}
                title="Learn More"
                widthFull={false}
              />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800">Microloans</h3>
              <p className="mt-4 text-gray-600">
                Access small loans with flexible repayment options.
              </p>
              <PrimaryButton
                onClick={() => window.location.href = '/microloans'}
                title="Learn More"
                widthFull={false}
              />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800">P2P Lending</h3>
              <p className="mt-4 text-gray-600">
                Lend or borrow money directly from peers in your community.
              </p>
              <PrimaryButton
                onClick={() => window.location.href = '/p2p-lending'}
                title="Learn More"
                widthFull={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-indigo-600 text-white text-center w-full">
        <h2 className="text-3xl font-bold">
          Ready to get started with Maziwa?
        </h2>
        <p className="mt-4 text-lg">
          Join us today and take control of your financial future.
        </p>
        <div className="mt-8">
          <PrimaryButton
            onClick={() => window.location.href = '/signup'}
            title="Sign Up Now"
            widthFull={false}
            additionalClasses="bg-white text-indigo-600"
          />
        </div>
      </section>
    </div>
  );
}
