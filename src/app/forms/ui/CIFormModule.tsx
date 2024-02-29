
export default function ContactInfoFormModule() {
    /* Set the values for the form title and subtitle */
    const formletTitle: string = "Contact Info";
    const formletSubtitle: string = "Provide the necessary details to register your business with us";

    /* Set the values for each field parameter */
    const formletRowA: string = "First name";
    const formletPlaceholderA: string = "Your first name";

    const formletRowB: string = "Last name";
    const formletPlaceholderB: string = "Your last name";

    const formletRowC: string = "Company name";
    const formletPlaceholderC: string = "Your organization's name";

    const formletRowD: string = "Company URL";
    const formletPlaceholderD: string = "Your organization's website";

    const formletRowE: string = "Email";
    const formletPlaceholderE: string = "Your email address";

    return (
        <section>
            <div>
                <h1 className="uppercase text-lg font-semibold">{formletTitle}</h1>
                <h2 className="text-sm text-gray-00">{formletSubtitle}</h2>
            </div>

            <hr className="mt-2"/>
            
            <form className="mt-3 md:mt-5">
                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* Row A */}
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">{formletRowA}</label>
                        <input type="text" placeholder={formletPlaceholderA} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                    </div>

                    {/* Row B */}
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">{formletRowB}</label>
                        <input type="text" placeholder={formletPlaceholderB} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                    </div>
                </div>

                {/* Row C */}
                <div className="mb-5">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">{formletRowC}</label>
                    <input type="text" placeholder={formletPlaceholderC} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>

                {/* Row D */}
                <div className="mb-5">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">{formletRowD}</label>
                    <input type="text" placeholder={formletPlaceholderD} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>

                {/* Row E */}
                <div className="mb-5">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">{formletRowE}</label>
                    <input type="email" placeholder={formletPlaceholderE} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                </div>
            </form>

        </section>
    );
}