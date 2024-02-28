/* AngleGenius ― 'Get Started' Jumbotron Component */

export default function HeroSection() {
    return(
        <main className="bg-center bg-no-repeat bg-[url('/assets/hero_offer_1.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-28">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">B2B Offer Creator!</h1>
        <p className="text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
        Unlock the power of irresistible offers crafted exclusively for your business. We specialize in creating dynamic, results-driven offers that will propel your brand forward in your niche.
        </p>
      </div>
    </main>
    );
}