/* AngleGenius ― Footer Component */


export default function AppFooter() {
    // Define arrays for Legal and References sections
    const legalItems: { label: string; link: string }[] = [
        { label: "Privacy Policy", link: "#" },
        { label: "Terms of Service", link: "#" },
        { label: "Cookies Policy", link: "#" }
    ];
    
    const referenceItems: { label: string; link: string }[] = [
        { label: "Get started", link: "https://flowbite.com/" },
        { label: "Testimonials", link: "https://tailwindcss.com/" },
        { label: "Contact us", link: "https://tailwindcss.com/" }
    ];
    
    // React component for rendering a list
    const FooterListItem: React.FC<{ label: string; link: string }> = ({ label, link }) => (
        <li className="">
            <a href={link} className="hover:underline">
                {label}
            </a>
        </li>
  );

    const FooterBrand = () => (
        <a href="https://flowbite.com/" className="flex items-center justify-center md:justify-start">
            <img 
                src="/assets/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                AngleGenius
            </span>
        </a>
    );

    return(
        <>
        <footer className="nav-dark nav-glass">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-4">
                <div className="md:flex md:justify-between">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <FooterBrand />
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    {/* References section */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                            References
                            </h2>
                            <ul className="text-gray-300 dark:text-gray-400 font-medium space-y-4">
                            {referenceItems.map((item, index) => (
                                <FooterListItem key={index} label={item.label} link={item.link} />
                            ))}
                            </ul>
                        </div>
                    {/* Legal section */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                            Legal
                            </h2>
                            <ul className="text-gray-300 font-medium space-y-4">
                            {legalItems.map((item, index) => (
                                <FooterListItem key={index} label={item.label} link={item.link} />
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-500 sm:mx-auto lg:my-4" />
                <div className="flex justify-center">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023{' '}
                        <a href="https://flowbite.com/" className="hover:underline text-center">
                            AngleGenius™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
        </>
    );
}