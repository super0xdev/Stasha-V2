import { FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="lg:flex lg:justify-between gap-4">
                        <div className="mb-6 lg:mb-0">
                            <a className="flex items-center pb-4">
                                <img src="./logo.png" className="mr-3" alt="Flowbite Logo" />
                                <span className="fredoka self-center text-4xl whitespace-nowrapn">Stasha</span>
                            </a>
                            <div className='grid grid-cols-4 gap-8 w-[180px] lg:w-full self-center'>
                                <FaTelegramPlane style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                                <FaTwitter style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                                <FaFacebookF style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                                <AiFillInstagram style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-12 lg:gap-24 sm:grid-cols-4">
                            <div>
                                <h2 className="footer-title mb-6">Products</h2>
                                <ul className="footer-body flex flex-col gap-4">
                                    <li>
                                        <a>Stasha Smartchain</a>
                                    </li>
                                    <li>
                                        <a>Stasha Exchanges</a>
                                    </li>
                                    <li>
                                        <a>Stasha Block Explorer</a>
                                    </li>
                                    <li>
                                        <a>Stasha Wallet</a>
                                    </li>
                                    <li>
                                        <a>Alterverse</a>
                                    </li>
                                    <li>
                                        <a>NFT Marketplace</a>
                                    </li>
                                    <li>
                                        <a>Stasha Coin</a>
                                    </li>
                                    <li>
                                        <a>Staking Platform</a>
                                    </li>
                                    <li>
                                        <a>Multi-sig Wallet</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="footer-title mb-6">Quick Links</h2>
                                <ul className="footer-body flex flex-col gap-4">
                                    <li>
                                        <a>About Us</a>
                                    </li>
                                    <li>
                                        <a>Partners</a>
                                    </li>
                                    <li>
                                        <a>Blogs</a>
                                    </li>
                                    <li>
                                        <a>Resources</a>
                                    </li>
                                    <li>
                                        <a>FAQs</a>
                                    </li>
                                    <li>
                                        <a>Career</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="footer-title mb-6">Dev</h2>
                                <ul className="footer-body flex flex-col gap-4">
                                    <li>
                                        <a>Documentation</a>
                                    </li>
                                    <li>
                                        <a>Whitepaper</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="footer-title mb-6">Support</h2>
                                <ul className="footer-body flex flex-col gap-4">
                                    <li>
                                        <a>Terms of Use</a>
                                    </li>
                                    <li>
                                        <a>Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
                    {/* <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm  sm:text-center text-gray-400">© 2022 Copyright and rights reserved</span>
                    </div> */}
                    <div className="footer-end text-center">© 2022 Copyright and rights reserved</div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;