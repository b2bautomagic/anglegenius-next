// Import necessary modules and types
import React from 'react';

import ContactInfoFormModule from './CIFormModule';
import IdealClientProfileFormModule from './ICPFormModule';
import OfferFormModule from './OfferFormModule';
import TrackRecordFormModule from './TRFormModule';
import BackgroundMaterialFormModule from './BMFormModule';
import FinishingUpFormModule from './FUFormModule';

// Define the FormStep type
export interface FormStep {
    level: number;
    label: string;
    component: React.ReactNode;
}

// Define the formSteps array
export const formSteps: FormStep[] = [
    { level: 1, label: "Contact Info", component: <ContactInfoFormModule /> },
    { level: 2, label: "Ideal Client Profile", component: <IdealClientProfileFormModule /> },
    { level: 3, label: "Offer", component: <OfferFormModule />},
    { level: 4, label: "Track Record", component:<TrackRecordFormModule /> },
    { level: 5, label: "Background Material", component:<BackgroundMaterialFormModule /> },
    { level: 6, label: "Finishing Up", component:<FinishingUpFormModule /> }
    
];

// Define the Next and Back button handlers
export const handleNext = (stepState: number, setStepState: React.Dispatch<React.SetStateAction<number>>) => {
    if (stepState < formSteps.length) {
        setStepState(stepState + 1);
    }
};

export const handleBack = (stepState: number, setStepState: React.Dispatch<React.SetStateAction<number>>) => {
    if (stepState > 1) {
        setStepState(stepState - 1);
    }
};
