import './FormModule.css';

export default function OffersFormModule() {
    const formletTitle: string = "Offers";
    const formletSubtitle: string = "Provide the necessary details to register your business with us";

    /* Set the values for each field parameter */
    const formletRowA: string = "What is your solution to your target market's problem?";
    const formletPlaceholderA: string = "What it's called and how it works";

    const formletRowB: string = "Is there something special or unique about the problem you solve or how you solve it?";
    const formletPlaceholderB: string = "Explain in detail";

    const formletRowC: string = "Is there some unnecessary element or cumbersome feature in your competitor's product?";
    const formletPlaceholderC: string = "If applicable, explain in detail";

    const formletRowD: string = "Is there a specific time frame that you could deliver a result in that could strengthen your message?";
    const formletPlaceholderD: string = "Ex: Get a 2x boost in sales meetings per rep within 6 weeks";

    const formletRowE: string = "Do you offer any guarantees?";
    const formletPlaceholderE: string = " If so, what are they?";

    /* Declare all necessary row sizes */
    const rowSize: number = 2;
    const detailedRowSize: number = 3

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
                    <textarea id="message" placeholder={formletPlaceholderA} rows={detailedRowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
                {/* Row B */}
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">{formletRowB}</label>
                    <textarea id="message" placeholder={formletPlaceholderB} rows={detailedRowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
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
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">{formletRowE}</label>
                    <textarea id="message" placeholder={formletPlaceholderE} rows={rowSize} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" required></textarea>
                </div>
            </form>

        </section>
    );
}