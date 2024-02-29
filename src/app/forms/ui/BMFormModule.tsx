import './FormModule.css';

export default function BackgroundMaterialFormModule() {
    const formletTitle: string = "Background Material";
    const formletSubtitle: string = "Provide the necessary details to register your business with us";

    /* Set the values for each field parameter */
    const formletRowA: string = "Do you have any useful content for your market?";
    const formletPlaceholderA: string = "Ex: Whitepapers, articles, offers, lead magnets (paste links here)";

    const formletRowB: string = "Anything else we should know about your product or ideal customer?";
    const formletPlaceholderB: string = "";

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
            </form>

        </section>
    );
}