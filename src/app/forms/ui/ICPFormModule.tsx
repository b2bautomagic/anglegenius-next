import './FormModule.css';

export default function IdealClientProfileFormModule() {
    const formletTitle: string = "Ideal Client Profile";
    const formletSubtitle: string = "Provide the necessary details to register your business with us";

    /* Set the values for each field parameter */
    const formletRowA: string = "Who is your ideal client?";
    const formletPlaceholderA: string = "Tell us as much about them as you can";

    const formletRowB: string = "What are the pain points people are facing that motivates them to buy?";
    const formletPlaceholderB: string = "In regards to their business or personal lives";

    const formletRowC: string = "Where are they located?";
    const formletPlaceholderC: string = "Only if specific to certain states/countries";

    const formletRowD: string = "What major problem does your target market have that your product/service solves for them?";
    const formletPlaceholderD: string = "Tell us as much about it as you can";

    const formletRowE: string = "List 10 of your dream clients";
    const formletPlaceholderE: string = "Companies you would like to target";

    /* Declare all necessary row sizes */
    const rowSize: number = 2;

    return (
        <section>
            <div>
                <h1 className="uppercase text-lg font-semibold">{formletTitle}</h1>
                <h2 className="text-sm text-gray-00">{formletSubtitle}</h2>
            </div>

            <hr className="mt-2"/>
            
            <form className="mt-3 md:mt-5">
                {/* Row A */}
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{formletRowA}</label>
                    <textarea id="message" placeholder={formletPlaceholderA} rows={rowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
                {/* Row B */}
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{formletRowB}</label>
                    <textarea id="message" placeholder={formletPlaceholderB} rows={rowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
                {/* Row C */}
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{formletRowC}</label>
                    <textarea id="message" placeholder={formletPlaceholderC} rows={rowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
                {/* Row D */}
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{formletRowD}</label>
                    <textarea id="message" placeholder={formletPlaceholderD} rows={rowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
                {/* Row E */}
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{formletRowA}</label>
                    <textarea id="message" placeholder={formletPlaceholderE} rows={rowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
            </form>

        </section>
    );
}