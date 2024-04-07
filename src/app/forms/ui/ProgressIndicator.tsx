import React from 'react';
import './ProgressIndicator.css';
import { formSteps } from '../lib/steps';

interface ProgressIndicatorProps {
    activeStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ activeStep }) => {
    const StepDivider: React.FC<{ activeStep: number; stepLevel: number }> = ({ activeStep, stepLevel }) => {
        const dividerStyle = activeStep > stepLevel ? 'border-app-color' : 'border-grey-100';
        return (
            <div className="z-0 flex items-center">
                <hr className={`w-20 ${dividerStyle} border-b border-4`} />
            </div>
        );
    };

    return (
        <div className='mb-3'>
            <ul className="flex justify-center size-auto">
                {formSteps.map((step, index) => {
                    // Check if the current step matches the step in iteration
                    const isCurrentStep = activeStep === step.level;

                    // Check if the step label exceeds 13 characters
                    const breakLineNeeded = step.label.length > 13;
                    const [firstWord, ...remainingWords] = step.label.split(' ');

                    return (
                        <React.Fragment key={index}>
                            <li className="z-10">
                                <div className="flex flex-col">
                                    <button className={
                                        `z-20 rounded-full 
                                        ${isCurrentStep ? 'outline outline-3 outline-app-color text-app-color' : 
                                        (activeStep > step.level ? 'bg-app-gradient text-white' : 
                                        'outline outline-3 outline-gray-300 text-gray-300')} size-8`}
                                    >{step.level}</button>
                                    <span 
                                        id={firstWord.toLowerCase()} 
                                        className={`absolute text-xs pt-10 translate-x-[-25%] text-center ${isCurrentStep ? 'font-semibold' : ''}`}
                                    >
                                        {breakLineNeeded ? (
                                            <>
                                                {firstWord} <br /> {remainingWords.join(' ')}
                                            </>
                                        ) : (
                                            step.label
                                        )}
                                    </span>
                                </div>
                            </li>
                            {index < formSteps.length - 1 && (
                                <StepDivider activeStep={activeStep} stepLevel={step.level} />
                            )}
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProgressIndicator;
