export default function FinishingUpFormModule() {
    const formletTitle: string = "Finishing up";
    const formletSubtitle: string = "Provide the necessary details to register your business with us";

    return (
        <section>
            <div>
                <h1 className="uppercase text-lg font-semibold">{formletTitle}</h1>
                <h2 className="text-sm text-gray-00">{formletSubtitle}</h2>
            </div>

            <hr className="mt-2"/>
            
            <form className="mt-3 md:mt-5">
                <div className="flex items-center mb-4">
                    <h1>I agree to let AngleGenius make the required changes to my company's messaging in order to create effective angles and campaigns.</h1>
                </div>
                <div className="flex items-center mb-4">
                    <input id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">I agree</a>.</label>
                </div>
            </form>

        </section>
    );
    
}