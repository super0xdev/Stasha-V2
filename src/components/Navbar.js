import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [flag, setFlag] = useState(false);

    const showMenu = () => {
        setVisible(true);
        console.log('-');
    }

    const toggleMenu = () => {
        setFlag(!flag);
    }

    window.addEventListener("click", function (event) {
        const tmp = this.document.getElementById('button');
        if (tmp && tmp === event.target) {
            setVisible(true);
        }
        else setVisible(false);
    });

    return (
        <nav className="p-3">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 gap-2">
                <div className="flex items-center sm:w-12">
                    <img alt='no img' src="./logo.png" className="w-6 md:w-full mr-3" />
                    <span className="fredoka self-center text-2xl md:text-4xl whitespace-nowrapn">Stasha</span>
                </div>
                <div className="relative md:hidden ml-auto">
                    <button type="button" onClick={toggleMenu} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden w-full md:flex md:w-auto" style={{ fontFamily: 'Roboto' }}>
                    <ul className="flex flex-col w-1/3 gap-12 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <div className="header-font block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</div>
                        </li>
                        <li>
                            {/* <button onClick={() => showMenu()} id="button" className="header-font flex items-center justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">Ecosystem */}
                            <Link to='/ecosystem' id="button" className="header-font flex items-center justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">Ecosystem
                                <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </Link>

                            <div className={`${visible === false ? 'hidden' : 'block'} font-normal absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <div className="block px-4 py-2 hover:bg-gray-100">Dashboard</div>
                                    </li>
                                    <li>
                                        <div className="block px-4 py-2 hover:bg-gray-100">Settings</div>
                                    </li>
                                    <li>
                                        <div className="block px-4 py-2 hover:bg-gray-100">Earnings</div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="header-font block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Community</div>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="hidden md:flex flex-col w-full lg:w-1/3 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-3 md:mt-0 md:border-0">
                        <li>
                            <FaTelegramPlane style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-xl" />
                        </li>
                        <li>
                            <FaTwitter style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-xl" />
                        </li>
                        <li>
                            <FaFacebookF style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-xl" />
                        </li>
                        <li>
                            <AiFillInstagram style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-xl" />
                        </li>
                    </ul>
                </div>

            </div>
            <div className={`${flag === false ? 'hidden' : 'w-full'} bg-black`}>
                <div className="header-font rounded-md cursor-pointer px-12 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">Home</div>
                <div className="header-font rounded-md cursor-pointer px-12 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">Ecosystem</div>
                <div className="header-font rounded-md cursor-pointer px-12 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">Community</div>
            </div>
        </nav>

    )
}

export default Navbar;