import { FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="lg:flex lg:justify-between gap-4">
                        <div className="hidden md:block mb-6 lg:mb-0">
                            <div className="flex items-center pb-4">
                                <img src="./logo.png" className="mr-3" alt="Flowbite Logo" />
                                <span className="fredoka self-center text-4xl whitespace-nowrapn">Stasha</span>
                            </div>
                            <div className='grid grid-cols-4 gap-4 w-[180px] lg:w-full self-center'>
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
                                        <div>Stasha Smartchain</div>
                                    </li>
                                    <li>
                                        <div>Stasha Exchanges</div>
                                    </li>
                                    <li>
                                        <div>Stasha Block Explorer</div>
                                    </li>
                                    <li>
                                        <div>Stasha Wallet</div>
                                    </li>
                                    <li>
                                        <div>Alterverse</div>
                                    </li>
                                    <li>
                                        <div>NFT Marketplace</div>
                                    </li>
                                    <li>
                                        <div>Stasha Coin</div>
                                    </li>
                                    <li>
                                        <div>Staking Platform</div>
                                    </li>
                                    <li>
                                        <div>Multi-sig Wallet</div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="footer-title mb-6">Quick Links</h2>
                                <ul className="footer-body flex flex-col gap-4">
                                    <li>
                                        <div>About Us</div>
                                    </li>
                                    <li>
                                        <div>Partners</div>
                                    </li>
                                    <li>
                                        <div>Blogs</div>
                                    </li>
                                    <li>
                                        <div>Resources</div>
                                    </li>
                                    <li>
                                        <div>FAQs</div>
                                    </li>
                                    <li>
                                        <div>Career</div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="footer-title mb-6">Dev</h2>
                                <ul className="footer-body flex flex-col gap-4">
                                    <li>
                                        <div>Documentation</div>
                                    </li>
                                    <li>
                                        <div>Whitepaper</div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="footer-title mb-6">Support</h2>
                                <ul className="footer-body flex flex-col gap-4">
                                    <li>
                                        <div>Terms of Use</div>
                                    </li>
                                    <li>
                                        <div>Privacy Policy</div>
                                    </li>
                                    <li>
                                        <div>Contact Us</div>
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