"use client"

import AppNavbar from "../ui/AppNavbar"
import AppFooter from "../ui/AppFooter"
import { PricingCard } from "./ui/PricingCard";
import LaunchCountdown from "./ui/countdown/LaunchCountdown";
import PaymentProviderView from "./ui/provider/PaymentProviderView";

export default function PaymentPage() {
    const PaymentSectionLabel = (attr: any) => (
        <>
        <div className="flex mt-8">
            <h3 className="bg-gray-100 text-gray-800 text-base font-medium me-2 px-2.5 py-0.5 rounded-t-lg">
                {attr.context}
            </h3>
        </div>
        <hr />
        </>
    );

    return(
        <>
        <AppNavbar />

        <section className="py-16 px-4 md:px-24">
            <main className="max-w-screen p-6 md:py-8 md:px-40 bg-white rounded-lg shadow">
                <section className=''>
                {/* Title */}
                <h5 className="mb-2 text-xl font-bold tracking-tight text-center">Pricing & Payments</h5>
                </section>

                {/* Icon */}
                <section className="flex flew-row justify-center">
                    <img className="h-16" src="/assets/dollar.png" alt="Payment Icon" />
                </section>

                <form className="">
                    {/* Payment Email */}
                    <section>
                        <PaymentSectionLabel context="Provide a payment email address:" />
                        <div className="relative mt-3">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5" placeholder="Email address" required />
                        </div>

                        <div className="md:flex md:flex-row mt-2">
                            <div>
                                <span className="bg-gray-100 text-gray-800 text-xs font-semibold font-medium me-2 px-2 py-0.5 rounded">INFO</span>
                            </div>
                            <div className="pt-1.5">
                                <p className="text-sm font-semibold hover:underline text-gray-900">The email adddress provided must correspond with the email stated on the form previously filled.</p>
                            </div>
                        </div>
                    </section>

                    {/* Payment Plan */}
                    <section>
                        <PaymentSectionLabel context="Choose your plan:" />
                        <LaunchCountdown />

                        <fieldset>
                        <div className="grid grid-row-2 gap-3 md:grid-cols-3 p-4 mt-1">
                        <div className="rounded-lg col-start-1 md:col-start-2 col-end-3">
                                <div className="flex items-center p-2 bgr-app-gradient rounded-t-lg">
                                    <input id="pricing-option-1" type="radio" name="pricing-plans" value="one-off" className="w-5 h-5 border-gray-300" />
                                    <label htmlFor="pricing-option-1" className="block ms-2 font-medium text-white">Pre-sale</label>
                                </div>
                                                                                                                             
                                <PricingCard cost="1" per="angle" description="Sign up and get one angle today!" />
                            </div>

                            {/* <div className="rounded-lg card-disabled opacity-50 hidden">
                                <div className="flex items-center p-2 bgr-app-gradient rounded-t-lg">
                                    <input id="pricing-option-1" type="radio" name="pricing-plans" value="one-off" className="w-5 h-5 border-gray-300" disabled/>
                                    <label htmlFor="pricing-option-1" className="block ms-2 font-medium text-white">One-off angle</label>
                                </div>

                                <PricingCard cost="30" per="angle" description="Some text to describe the plan." />
                            </div>

                            <div className="rounded-lg card-disabled opacity-50 hidden">
                                <div className="flex items-center p-2 bgr-app-gradient rounded-t-lg">
                                    <input id="pricing-option-2" type="radio" name="pricing-plans" value="prepaid" className="w-5 h-5 border-gray-300" disabled/>
                                    <label htmlFor="pricing-option-2" className="block ms-2 font-medium text-white">Prepaid</label>
                                </div>

                                <PricingCard cost="100" per="month" description="Some text to describe the plan." />
                            </div> */}
                        </div>
                        </fieldset>
                    </section>

                </form>

                    {/* Payment Provider */}
                    <section>
                        <PaymentSectionLabel context="Choose a payment provider:" />

                        <PaymentProviderView />
                    </section>
                
            </main>
        </section>

        <AppFooter />
        </>
    )
}