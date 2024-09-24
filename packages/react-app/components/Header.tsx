import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRouter } from "next/router";


export default function Header() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const router = useRouter();

  // Function to handle wallet connection
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Please install a web3 wallet like MetaMask or Valora.");
    }
  };

  return (
    <Disclosure as="nav" className="bg-colors-secondary border-b border-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-white font-semibold text-2xl">
                <a href="/">
    <img
      src="/public/logo.svg" // Path to your new logo
      alt="MAZIWA"
      className="h-8 w-auto"
    />
  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a href="/" className="inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900">
                    Home
                  </a>
                  <a href="/savings" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-black">
                    Savings
                  </a>
                  <a href="/microloans" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-black">
                    Microloans
                  </a>
                  <a href="/p2p-lending" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-black">
                    P2P Lending
                  </a>
                  <a href="/investments" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-black">
                    Investments
                  </a>
                  <a href="/financial-education" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-black">
                    Financial Education
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                {walletAddress ? (
                  <span className="text-sm text-gray-900">
                    Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </span>
                ) : (
                  <button
                    onClick={connectWallet}
                    className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/savings"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-black"
              >
                Savings
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/microloans"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-black"
              >
                Microloans
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/p2p-lending"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-black"
              >
                P2P Lending
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/investments"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-black"
              >
                Investments
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/education"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-black"
              >
                Financial Education
              </Disclosure.Button>
              
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

declare global {
  interface Window {
    ethereum: any;
  }
}
