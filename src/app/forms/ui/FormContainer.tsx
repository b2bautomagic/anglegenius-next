'use client'

import React, { useState } from 'react';
import ProgressIndicator from "./ProgressIndicator";
import ProgressBar from "./ProgressBar";
import './FormContainer.css';

// Import formSteps and button handlers from formController
import { formSteps, handleNext, handleBack } from './formController';

export default function FormContainer() {
    // State management
    const [stepState, setStepState] = useState(1);

    // Progress bar calculation
    const progressbarLevel = (100 / formSteps.length) * stepState;

    // Event handlers
    const onNextClick = () => handleNext(stepState, setStepState);
    const onBackClick = () => handleBack(stepState, setStepState);

    // Render
    return (
        <main className="max-w-screen p-6 md:py-8 md:px-20 bg-white rounded-lg shadow">
            {/* Title */}
            <h5 className="mb-2 text-xl font-bold tracking-tight text-center">Customize Your Offer</h5>

            {/* Progress indicator */}
            <section className="mt-6 mb-6">
                {/* Choose between detailed progress indicator or simplified progress bar */}
                <div className="hidden md:inline">
                    <ProgressIndicator activeStep={stepState}/>
                </div>
                <div className="inline md:hidden">
                    <ProgressBar progress={progressbarLevel} />
                </div>
            </section>
            
            {/* Form content */}
            <section className='my-2 md:my-12'>
                {formSteps[(stepState - 1)].component}
            </section>

            {/* Navigation buttons */}
            <section className="flex justify-between">
                <button className={`text-app-color bg-gray-100 text-semibold rounded-lg py-2 px-4 ${stepState === 1 ? 'invisible' : ''}`} onClick={onBackClick}>
                    <div className="flex flex-row items-center">
                        <svg className="w-3.5 h-3.5 ms-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        <span className="pl-1">Previous</span>
                    </div>
                </button>
                {stepState < formSteps.length ? (
                    <button className="button-app-gradient rounded-lg py-2 px-4 text-white" onClick={onNextClick}>
                        <div className="flex flex-row items-center">
                            <span>Next</span>
                            <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </div>
                    </button>
                ) : (
                    <button className="button-app-gradient rounded-lg py-2 px-4 text-white">Done!</button>
                )}
            </section>
        </main>
    );
}
