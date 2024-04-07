
import BitcoinPaymentProvider from "./BitcoinProviderTab";
import GumroadPaymentProvider from "./GumroadProviderTab";
import { useSignal } from "@preact/signals-react";
import { useState } from "react";

export default function PaymentProviderView() {
    const paymentOption = useSignal("");

    return (
        <div className="p-4">
            <div className="md:flex">
                <ul className="text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                    <div className="flex flex-row md:flex-col justify-between md:space-y-4">
                        <li>
                            <button className="inline-flex items-center px-4 py-3 text-white bg-gray-800 rounded-lg active w-full dark:bg-blue-600" aria-current="page">
                                <img className="h-5" src="/assets/bitcoin.png" alt="Bitcoin" />
                                <span className="ms-1.5">BTC</span>
                            </button>
                        </li>
                        <li>
                            <button className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-100 hover:bg-gray-200 w-full">
                                <img className="h-5" src="/assets/gumroad.svg" alt="Gumroad" />
                                <span className="ms-1.5">USD</span>
                            </button>
                        </li>
                        <li className="invisible">
                            <button className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-100 hover:bg-gray-200 w-full">
                                <img className="h-5" src="/assets/bank.png" alt="NUBAN" />
                                <span className="ms-1.5">NGN</span>
                            </button>
                        </li>
                    </div>
                </ul>
                                
                <div className="p-6 bg-gray-100 text-medium text-gray-500 rounded-lg w-full">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Make payment through <span className="underline">Bitcoin</span></h3>
                    <p className="mb-2">Thiss is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
                    <p>The tab JavaScript swaps classNamees to control the content visibility and styling.</p> 
                </div>
            </div>
        </div>
    );
}