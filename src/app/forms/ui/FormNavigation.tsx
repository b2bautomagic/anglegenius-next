interface FormNavigationProps {
    beacon: number;
    totalSteps: number;
    foward: () => void;
    backward: () => void;
    tender: () => void;
  }
  
  export const FormNavigation: React.FC<FormNavigationProps> = ({
    beacon,
    totalSteps,
    foward,
    backward,
    tender
  }) => (
    <>
    {/* Navigation buttons */}
    <section className="flex justify-between">
                <button className={`text-app-color bg-gray-100 text-semibold rounded-lg py-2 px-4 ${beacon === 0 ? 'invisible' : ''}`} onClick={backward}>
                    <div className="flex flex-row items-center">
                        <svg className="w-3.5 h-3.5 ms-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        <span className="pl-1">Previous</span>
                    </div>
                </button>
                
                {beacon < (totalSteps - 1) ? (
                    <button className="button-app-gradient rounded-lg py-2 px-4 text-white" onClick={foward}>
                        <div className="flex flex-row items-center">
                            <span>Next</span>
                            <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </div>
                    </button>
                ) : (
                    <button onClick={tender} className="button-app-gradient rounded-lg py-2 px-4 text-white">Done!</button>
                )}
            </section>
    </>
  );