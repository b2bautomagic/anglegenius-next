/* AngleGenius ― 'Get Started' Sectional Card Component */

export default function StartingSection() {
    const ListBadge: React.FC<{ label: string }> = ({ label }) => {
        return (
          <span className="bg-app-color text-white text-xs font-medium me-2 px-1.5 py-0.5 rounded border-blue-400">
            {label}
          </span>
        );
    }

    return(
        <div className="max-w-screen p-6 md:py-6 md:px-20 nav-dark rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">Let's get started...</h5>
        </a>
        <ul className="font-normal text-gray-300 space-y-2">
        <li>We've come across thousands of B2B companies struggling to sell products and services that are indistinguishable from their rivals.</li>
        <li className="px-2 font-semibold">This leads to competing on price - because, commodities, sell chiefly on price.</li>
        <li>Many such companies are experiencing this difficulty because they are uncertain about:</li>
        <li><ListBadge label="1" />what results they can guarantee their clients and,</li>
        <li><ListBadge label="2" />why any client should do business with them over their rivals.</li>
        <li>To this effect, AngleGenius exists to help B2B companies generate effective angles for cold outreach that book at least 10 appointments monthly with potential clients.</li>
        <li>It's currently free. However, if you close any appointments which AngleGenius helps you set,</li>
        </ul>
        <div className="mt-3 text-center">
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-app-color rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        you agree to transfer 10% of your revenue from that client in perpetuity to AngleGenius.
          <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
        </div>
        </div>
    );
}