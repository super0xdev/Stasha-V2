import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineInformationCircle, HiArrowRight } from 'react-icons/hi';
import { FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import Accordion from '../components/Accordion';

import ROT from '../images/ROT1.gif';
import User from '../images/user.png';
import Tech from '../images/tech.png';
import Fee from '../images/fee.png';
import Sec from '../images/security.png';
import IPhone from '../images/iphone.png';
import Play from '../images/mdi_google-play.png';
import Apple from '../images/apple.png';
import Right1 from '../images/stc-right1.png';
import Right2 from '../images/stc-right2.png';
import Right3 from '../images/stc-right3.png';
import ComL from '../images/ComL.png';
import ComR from '../images/ComR.png';
import Academy from '../images/academy.png';
import Books from '../images/books.png';
import Yahoo from '../images/yahoo.png';
import Marketwatch from '../images/marketwatch.png';
import Bloomberg from '../images/bloomberg.png';
import Techbullion from '../images/techbullion.png';
import Nasdaq from '../images/nasdaq.png';
import Wallet1 from '../images/wallet1.png';
import Wallet2 from '../images/wallet2.png';
import Wallet3 from '../images/wallet3.png';

import { ecosystem } from '../global/constant';

const Home = () => {
    return (
        <div className='flex flex-col gap-10 sm:mt-12 md:mt-0'>
            <div className="part1 w-full flex flex-col lg:flex-row">
                <div className="left1 w-full flex flex-col gap-4 pt-12 relative">
                    <div className='ellipse1'></div>
                    <div className="headers relative">Unleashing the power of blockchain for a better tomorrow.</div>
                    <div className="part5-body pt-8">Embrace a World of Infinite Possibilities in Blockchain Innovation and
                        Empowerment for a Brighter Future!</div>
                    <div className="flex flex-col w-[380px] text-center xl:w-full xl:flex-row">
                        <div className='part1-but'>Explore Ecosystem</div>
                        <div className='flex part1-but2'>Get Started with Building<MdOutlineKeyboardArrowRight /></div>
                    </div>
                </div>
                <div className='right1 relative self-center w-[60%] right-[-40px]'>
                    <div className='ellipse2'></div>
                    <img alt='no img' src={ROT} style={{ zIndex: '-1' }} />
                </div>
            </div>
            <div className='part2 w-full text-xs gap-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                <div className='myborder pb-2'>Join the thriving Stasha community today and be a part of this exciting journey. </div>
                <div className='myborder pr-4 pb-2'>Revolutionizing the way decentralized systems operate.</div>
                <div className='myborder pr-4 pb-2'>Ensuring cost-effective and efficient blockchain transactions. </div>
                <div className='myborder pr-4  pb-2'>With cutting-edge encryption, advanced authentication, and secure key management. </div>
            </div>
            <div className='relative'>
                <div className='rectangle1 absolute'></div>
                <div className='part3 w-full gap-12 pb-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 relative'>
                    <div className='card flex-col'>
                        <div className='justify-center'>Total Users</div>
                        <img alt='no img' src={User} />
                    </div>
                    <div className='card place-content-center'>
                        <img alt='no img' src={Tech} />
                        Our Technology
                    </div>
                    <div className='card flex-col'>
                        Avg. transaction fee
                        <img alt='no img' src={Fee} />
                    </div>
                    <div className='card place-content-center'>
                        <img alt='no img' src={Sec} />
                        Our Security
                    </div>
                </div>
                <div className='part4 w-full flex flex-col xl:flex-row relative py-12'>
                    <div className='self-center xl:absolute px-16' style={{ bottom: '-0px' }}>
                        <img alt='no img' src={IPhone} />
                    </div>
                    <div className='w-1/2'></div>
                    <div className='w-full xl:w-1/2 px-20 pr-8'>
                        <div className='text-center xl:text-right'>
                            <span className='part4-stasha'>Stasha</span>
                            <span className='part4-dex'> DEX Wallet</span>
                        </div>
                        <div className='part4-join text-center xl:text-right pb-4'>Join the decentralized revolution and take control of your digital assets with the Stasha DEX Wallet app today!</div>
                        <div className='flex gap-10 place-content-center xl:float-right'>
                            <div className='part4-but flex-col sm:flex-row'>
                                <img alt='no img' src={Play} style={{ height: '30px', alignSelf: 'center' }} />
                                <div>
                                    <div className='part4-get'>GET IT ON</div>
                                    <div className='part4-play'>Google Play</div>
                                </div>
                            </div>
                            <div className='part4-but flex-col sm:flex-row'>
                                <img alt='no img' src={Apple} style={{ height: '30px', alignSelf: 'center' }} />
                                <div>
                                    <div className='part4-get'>Download on the</div>
                                    <div className='part4-play'>App Store</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='part5 text-center sm:px-28 pt-16 relative'>
                <div className='headers'>Building Blockchain Infrastructures</div>
                <div className='pb-12'>
                    <div className='part5-body'>At Stasha, we are building a world-class blockchain infrastructure and solution company that is poised to revolutionize the way businesses and individuals use this powerful technology.</div>
                </div>
                <div className='flex flex-col items-center pb-12'>
                    <div className='flex items-center place-content-center pb-4 gap-2'>Need help? <HiOutlineInformationCircle style={{ color: '#00ACFF' }} /></div>
                    <div className='part5-but'>Start Building</div>
                </div>
            </div>
            <div className='part6 text-center'>
                <div className='headers'>Stasha Ecosystem</div>
                <div className='pb-6 relative'>
                    <div className='ellipse3'></div>
                    <div className='ellipse4'></div>
                    <div className='part5-body pb-12 relative'>Start to explore a wide variety of Decentralized applications brought to you by Stasha.</div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-12 relative'>
                        {
                            ecosystem.map((item, id) => (
                                <div className='part6-item flex flex-col relative'>
                                    <div className='flex gap-4 pl-3'>
                                        <img alt='no img' src={`${item.eco}`} />
                                        <div className='part6-item-title'>{item.title}</div>
                                    </div>
                                    <div className='part6-item-body'>{item.body}</div>
                                    {id !== 3 ? <div className='flex part6-item-footer items-center absolute bottom-6'>
                                        <div>Explore</div>
                                        <HiArrowRight />
                                    </div> : <div className='flex part6-item-footer items-center absolute bottom-6 gap-4'>
                                        <img alt='no img' src={Wallet1} />
                                        <img alt='no img' src={Wallet2} />
                                        <img alt='no img' src={Wallet3} /></div>}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='part7 myborder flex flex-col xl:flex-row pb-12'>
                <div className='w-full text-center xl:text-left xl:w-1/2'>
                    <div className='headers'>Opportunities for You</div>
                    <div className='part5-body'>An ecosystem full of potential for innovative solutions.</div>
                </div>
                <div className='w-full place-content-center xl:w-1/2 flex gap-8 flex-col sm:flex-row'>
                    <div className='part7-left'>Launch Project</div>
                    <div className='part7-right'>Explore Ecosystem</div>
                </div>
            </div>
            <div className='part8 flex flex-col relative xl:flex-row gap-4'>
                <div className='w-full xl:w-1/2'>
                    <div className='headers text-center xl:text-left'>Stasha Coin $STC</div>
                    <div className='part5-body text-center xl:text-left pb-6'>Stasha Coin is a revolutionary digital currency built on the robust foundations of Binance Smartchain.</div>
                    <div className='flex gap-4 flex-col sm:flex-row'>
                        <div className='part8-but'>
                            <div className='part8-but-head'>Current Sale Price</div>
                            <div className='part8-but-body'>$0.0050</div>
                        </div>
                        <div className='part8-but'>
                            <div className='part8-but-head'>Token Listing Price</div>
                            <div className='part8-but-body'>$0.40</div>
                        </div>
                    </div>
                </div>
                <div className='flex place-content-center w-full xl:w-1/2 relative'>
                    <div className='flex relative h-80 w-full sm:w-2/3 xl:w-full'>
                        <img alt='no img' src={Right1} className='flex absolute' style={{ right: '100px' }} />
                        <img alt='no img' src={Right2} className='absolute' style={{ right: '250px', top: '120px' }} />
                        <img alt='no img' src={Right3} className='absolute' style={{ right: '50px', top: '200px' }} />
                    </div>
                </div>
            </div>
            <div className='part9 flex flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2'>
                    <div className='part9-head pb-2'>Accept crypto payments globally with StashaPay</div>
                    <div className='part9-body pr-4 pb-8'>Enjoy bordeless payments with Stasha Pay. Our solutionis user friendly, fast and secure.</div>
                    <div className='cursor-pointer part9-footer flex items-center gap-4'>
                        <div>Get Started</div>
                        <HiArrowRight />
                    </div>
                </div>
                <div className='flex w-full relative h-56 lg:w-1/2 lg:p-0'>
                    <div className='flex relative w-full h-56 sm:w-5/6 lg:w-full'>
                        <img alt='no img' src={ComR} className='absolute' style={{ right: '0px' }} />
                        <img alt='no img' src={ComL} className='absolute' style={{ left: '30px', top: '100px' }} />
                    </div>
                </div>
            </div>
            <div className='part10 flex relative flex-col lg:flex-row gap-8'>
                <div className='rectangle2 absolute'></div>
                <div className='flex relative w-full lg:w-1/2 justify-center lg:justify-start'>
                    <a href='https://Stasha.academy' className='part10-but self-center'>Get Started</a>
                </div>
                <div className='flex flex-col lg:flex-row gap-8'>
                    <div className='flex flex-col w-full z-10'>
                        <div className='part5-title text-center lg:text-right'>Stasha Academy</div>
                        <div className='part5-body text-center lg:text-right'>Stasha Crypto Academy is your gateway to mastering the world of cryptocurrencies and blockchain technology.</div>
                    </div>
                    <img alt='no img' src={Academy} className='w-1/6 self-center' />
                </div>
                <div className='part10-end md:absolute' style={{ bottom: '0px' }}>Learn more</div>
            </div>
            <div className='part10 flex flex-col lg:flex-row relative'>
                <div className='flex flex-col lg:flex-row gap-8'>
                    <img alt='no img' src={Books} className='w-1/6 self-center' />
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='part5-title text-center lg:text-left'>Stasha Dictionary</div>
                        <div className='part5-body text-center lg:text-left'>Discover the language of the crypto world with the Stasha Crypto Dictionary. </div>
                    </div>
                </div>
                <div className='flex flex-row relative w-full lg:w-1/2 justify-center lg:justify-end pb-2'>
                    <a href='https://dictionary.stasha.io' className='part10-but'>View Dictionary</a>
                </div>
                <div className='part10-end md:absolute flex items-center gap-2 lg:right-0 bottom-0'>Learn more<HiArrowRight /></div>
            </div>
            <div className='part11 flex flex-col sm:flex-row'>
                <div className='w-full sm:w-2/3'>
                    <div className='part5-title'>Join Our Community</div>
                    <div className='part5-body'>Join the Stasha community and be part of the decentralized revolution.</div>
                </div>
                <div className='w-full sm:w-1/3 flex gap-4 self-center justify-center sm:justify-end'>
                    <FaTelegramPlane style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                    <FaTwitter style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                    <FaFacebookF style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                    <AiFillInstagram style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                </div>
            </div>
            <div className='part12 flex flex-col md:flex-row relative py-12'>
                <div className='ellipse5'></div>
                <div className='w-full md:w-1/3 relative'>
                    <div className='part5-title text-center lg:text-left'>Frequently Asked Questions</div>
                    <div className='part5-body text-center lg:text-left pb-24'>Find out all the basics about Stasha</div>
                    <div className='flex flex-col'>
                        <div className='part12-quest text-center lg:text-left'>Do you have questions?</div>
                        <div className='part12-but self-center lg:self-start'>Ask Us</div>
                    </div>
                </div>
                <div className='w-full md:w-2/3 relative'>
                    <div className='ellipse6'></div>
                    <Accordion />
                </div>
            </div>
            <div className='part13'>
                <div className='part5-title text-center'>Official Partners</div>
                <div className='grid grid-cols-1 sm:grid-cols-5 place-content-center place-items-center gap-4'>
                    <img alt='no img' src={Yahoo} />
                    <img alt='no img' src={Marketwatch} />
                    <img alt='no img' src={Bloomberg} />
                    <img alt='no img' src={Techbullion} />
                    <img alt='no img' src={Nasdaq} />
                </div>
            </div>
            <div className='part14'>
                <div className='part5-title'>Subscribe to our Newsletter</div>
                <div className='part5-body'>Stay up to date for the latest crypto news, courses & more!</div>
            </div>
            <div className='flex flex-col md:flex-row self-center gap-4 pb-20'>
                <input className='part14-input' placeholder='Enter Email' />
                <div className='part1-but'>Subscribe</div>
            </div>
        </div>
    );
}

export default Home;