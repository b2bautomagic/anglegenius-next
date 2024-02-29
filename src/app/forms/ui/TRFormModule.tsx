import './FormModule.css';

export default function TrackRecordFormModule() {
    const formletTitle: string = "Track Record";
    const formletSubtitle: string = "Provide the necessary details to register your business with us";

    /* Set the values for each field parameter */
    const formletRowA: string = "Have you worked with any noteworthy organizations, companies or individuals?";
    const formletPlaceholderA: string = "List here";

    const formletRowB: string = "Is there an outstanding result or case study that you got from a customer that can be shared?";
    const formletPlaceholderB: string = "Provide a link if possible";

    const formletRowC: string = "What are your most impressive statistics?";
    const formletPlaceholderC: string = "Ex: we've helped X person or company achieve Y in Z time";

    const formletRowD: string = "Do you have a track record that sets you apart from others?";
    const formletPlaceholderD: string = "Ex: Length of time in business, results for customers, specialize in specific vertical";

    const formletRowE: string = "How many customers have you served over time?";
    const formletPlaceholderE: string = "Ex: We've helped 500 people/companies over the last 5 years to get X result";

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
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">{formletRowA}</label>
                    <textarea id="message" placeholder={formletPlaceholderA} rows={rowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
                {/* Row B */}
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">{formletRowB}</label>
                    <textarea id="message" placeholder={formletPlaceholderB} rows={rowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
                {/* Row C */}
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">{formletRowC}</label>
                    <textarea id="message" placeholder={formletPlaceholderC} rows={rowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
                {/* Row D */}
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">{formletRowD}</label>
                    <textarea id="message" placeholder={formletPlaceholderD} rows={rowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
                {/* Row E */}
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">{formletRowA}</label>
                    <textarea id="message" placeholder={formletPlaceholderE} rows={rowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
            </form>

        </section>
    );
}