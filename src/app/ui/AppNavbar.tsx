/* AngleGenius ― Navbar Component */

export default function AppNavbar() {
    const brandURI = "https://anglegenius.co";
    
    /* AngleGenius ― Branding Component */
    const Logo = () => {
        return(
        <img src="/assets/logo.svg"
             className="h-6" 
             alt="anglegenius_logo">
        </img>
        );
    };

    return (
        <nav id="" className={`nav-dark nav-glass fixed w-full z-20 top-0 start-0 border-b border-gray-700`}>
            <div id="" className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">

                <a id="" href={brandURI} className="flex items-center space-x-4">
                    <Logo />
                    <span id="" className="self-center text-white text-xl font-bold whitespace-nowrap">AngleGenius</span>
                </a>

                <div id="" className="flex md:order-2 space-x-3 md:space-x-0">
                    <div className="flex space-x-3">
                        <button type="button" className="hidden md:block text-white hover:bg-white hover:text-black font-medium rounded-2xl text-sm px-4 py-1.5 text-center">Login</button>
                        <button type="button" className="hidden md:block text-white bg-app-color font-medium rounded-2xl text-sm px-4 py-1.5 text-center">Sign Up</button>
                    </div>

                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path clip-rule="evenodd" d="m9 15c0-.5523.44772-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.55228 0-1-.4477-1-1zm-6-10c0-.55229.44771-1 1-1h12c.5523 0 1 .44771 1 1 0 .55228-.4477 1-1 1h-12c-.55229 0-1-.44772-1-1zm0 5c0-.55228.44771-1 1-1h12c.5523 0 1 .44772 1 1 0 .5523-.4477 1-1 1h-12c-.55229 0-1-.4477-1-1z" fill="rgb(0,0,0)" fill-rule="evenodd"/>
                        </svg>
                    </button>

                </div>

                <div id="navbar-sticky" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="nav-hover flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0" aria-current="page">get started</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">reviews</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">socials</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">offers</a>
                        </li>
                        <li className="md:hidden">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
