import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineInformationCircle, HiArrowRight } from 'react-icons/hi';
import { FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import Accordion from '../components/Accordion';
import AccordionM from '../components/AccordionM';
import { faq } from '../global/constant';

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
        <div className='flex flex-col gap-10 sm:mt-12 md:mt-0 px-6'>
            <div className="part1 w-full flex flex-col">
                <div className="left1 w-full flex flex-col md:flex-row pt-12 relative">
                    <div className='flex flex-col'>
                        <div className='md:block hidden ellipse1'></div>
                        <div className="headers text-center text-[25px] md:text-left md:text-[45px] relative">Unleashing the power of blockchain for a better tomorrow</div>
                        <div className="part5-body text-center sm:text-left text-[12px] sm:text-[23px] sm:pt-8">Embrace a World of Infinite Possibilities in Blockchain Innovation and
                            Empowerment for a Brighter Future!</div>
                    </div>
                    <div className='right1 relative self-center w-[60%]'>
                        <div className='ellipse2 md:hidden' style={{ left: '-150px', bottom: '-70px' }}></div>
                        <div className='hidden md:block ellipse2' style={{ left: '400px', top: '260px' }}></div>
                        <img alt='no img' src={ROT} className='relative md:top-[-150px] md:absolute' />
                    </div>
                </div>
                <div className="flex md:gap-4 flex-col md:w-full self-center text-center md:flex-row pt-0 md:pt-8 relative md:pb-12">
                    <div className='md:hidden flex part1-but2 text-[14px] gap-1'>Get Started with Building<MdOutlineKeyboardArrowRight className='text-xl' /></div>
                    <Link to='/ecosystem' className='part1-but text-[14px] mx-2 md:text-[22px] md:px-12'>Explore Ecosystem</Link>
                    <div className='hidden md:flex part1-but2 md:px-12'>Get Started with Building<MdOutlineKeyboardArrowRight /></div>
                </div>
            </div>
            {/* <div className='part2 w-full text-xs gap-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                <div className='myborder pb-2'>Join the thriving Stasha community today and be a part of this exciting journey. </div>
                <div className='myborder pr-4 pb-2'>Revolutionizing the way decentralized systems operate.</div>
                <div className='myborder pr-4 pb-2'>Ensuring cost-effective and efficient blockchain transactions. </div>
                <div className='myborder pr-4  pb-2'>With cutting-edge encryption, advanced authentication, and secure key management. </div>
            </div> */}
            <div className='relative'>
                <div className='rectangle1 absolute'></div>
                <div className='part3 w-full gap-1 md:gap-8 pb-8 md:pb-32 grid grid-cols-2 xl:grid-cols-4 relative'>
                    <div>
                        <div className='myborder flex items-center h-[30px] md:h-[50px] text-center md:text-left pb-2 text-[6px] mo:text-[8px] md:text-[14px]'>Join the thriving Stasha community today and be a part of this exciting journey. </div>
                        <div className='card flex-col'>
                            <div className='text-[8px] mo:text-[12px] md:text[16px] justify-center'>Total Users</div>
                            <img alt='no img' src={User} />
                        </div>
                    </div>
                    <div>
                        <div className='myborder flex items-center h-[30px] md:h-[50px] text-center md:text-left text-[6px] mo:text-[8px] md:text-[14px] pb-2'>Revolutionizing the way decentralized systems operate.</div>
                        <div className='card text-[8px] mo:text-[12px] md:text-[16px] place-content-center'>
                            <img alt='no img' className='w-[24px] mo:w-[30px] md:w-[48px]' src={Tech} />
                            Our Technology
                        </div>
                    </div>
                    <div>
                        <div className='myborder flex items-center h-[30px] md:h-[50px] text-center md:text-left text-[6px] mo:text-[8px] md:text-[14px] pb-2'>Ensuring cost-effective and efficient blockchain transactions. </div>
                        <div className='card text-[8px] mo:text-[12px] md:text-[16px] flex-col'>
                            Avg. transaction fee
                            <img alt='no img' src={Fee} />
                        </div>
                    </div>
                    <div>
                        <div className='myborder flex items-center h-[30px] md:h-[50px] text-center md:text-left text-[6px] mo:text-[8px] md:text-[14px]  pb-2'>With cutting-edge encryption, advanced authentication, and secure key management. </div>
                        <div className='card text-[8px] mo:text-[12px] md:text-[16px] place-content-center'>
                            <img alt='no img' className='w-[30px] md:w-[48px]' src={Sec} />
                            Our Security
                        </div>
                    </div>
                </div>
                <div className='part4 w-full flex flex-col xl:flex-row relative md:py-12'>
                    <div className='block md:hidden w-full px-4'>
                        <div className='text-center'>
                            <span className='part4-stasha text-[25px]'>Stasha</span>
                            <span className='part4-dex text-[25px]'> Wallet</span>
                        </div>
                        <div className='part4-join text-center pb-4 text-[12px]'>Join the decentralized revolution and take control of your digital assets with the Stasha DEX Wallet app today!</div>
                        <div className='flex gap-4 place-content-center'>
                            <div className='part4-but flex-row' style={{ width: '150px' }}>
                                <img alt='no img' src={Play} style={{ height: '30px', alignSelf: 'center' }} />
                                <div>
                                    <div className='part4-get' style={{ fontSize: '8px' }}>GET IT ON</div>
                                    <div className='part4-play' style={{ fontSize: '14px' }}>Google Play</div>
                                </div>
                            </div>
                            <div className='part4-but flex-row' style={{ width: '150px' }}>
                                <img alt='no img' src={Apple} style={{ height: '30px', alignSelf: 'center' }} />
                                <div>
                                    <div className='part4-get' style={{ fontSize: '8px' }}>Download on the</div>
                                    <div className='part4-play' style={{ fontSize: '14px' }}>App Store</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='self-center xl:absolute px-16' style={{ bottom: '-0px' }}>
                        <img alt='no img' src={IPhone} />
                    </div>
                    <div className='w-1/2'></div>
                    <div className='hidden md:block w-full xl:w-1/2 px-20 pr-8'>
                        <div className='text-center xl:text-right'>
                            <span className='part4-stasha text-[45px]'>Stasha</span>
                            <span className='part4-dex text-[45px]'> DEX Wallet</span>
                        </div>
                        <div className='part4-join text-[18px] text-center xl:text-right pb-4'>Join the decentralized revolution and take control of your digital assets with the Stasha DEX Wallet app today!</div>
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
                <div className='headers px-12 md:px-0 text-[20px] mo:text-[25px] md:text-[45px]'>Building Blockchain Infrastructures</div>
                <div className='pb-12'>
                    <div className='part5-body text-[12px] md:text-[20px]'>At Stasha, we are building a world-class blockchain infrastructure and solution company that is poised to revolutionize the way businesses and individuals use this powerful technology.</div>
                </div>
                <div className='flex flex-col items-center pb-12'>
                    <div className='flex items-center place-content-center pb-4 gap-2 text-[10px] mo:text-[14px]'>Need help? <HiOutlineInformationCircle style={{ color: '#00ACFF' }} /></div>
                    <div className='hidden md:block part5-but'>Start Building</div>
                    <div className='md:hidden part5-but' style={{ paddingLeft: '15px', paddingRight: '15px', fontSize: '14px' }}>Start Building</div>
                </div>
            </div>
            <div className='part6 text-center'>
                <div className='headers text-[25px] md:text-[45px]'>Stasha Ecosystem</div>
                <div className='pb-6 relative'>
                    <div className='md:hidden rectangle3'></div>
                    <div className='hidden md:block ellipse3'></div>
                    <div className='hidden md:block ellipse4'></div>
                    <div className='absolute' style={{ background: 'rgba(0, 172, 255, 0.2)', filter: 'blur(250px)', width: '450px', height: '650px' }}></div>
                    <div className='part5-body pb-12 relative'>Start to explore a wide variety of Decentralized applications brought to you by Stasha.</div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-0 md:gap-y-12 relative'>
                        {
                            ecosystem.map((item, id) => (
                                <div className='part6-item flex flex-col relative justify-between'>
                                    <div>
                                        <div className='flex gap-4 pl-3 justify-between'>
                                            <div className='flex gap-4'>
                                                <img alt='no img' src={`${item.eco}`} />
                                                <div className='part6-item-title'>{item.title}</div>
                                            </div>
                                            <HiArrowRight className='block self-center md:hidden' style={{ color: '#00ACFF' }} />
                                        </div>
                                        <div className='part6-item-body hidden md:block'>{item.body}</div>
                                    </div>
                                    {id !== 3 ? <div className='hidden md:flex part6-item-footer items-center'>
                                        <div>Explore</div>
                                        <HiArrowRight />
                                    </div> : <div className='hidden md:flex part6-item-footer items-center gap-4'>
                                        <img alt='no img' src={Wallet1} />
                                        <img alt='no img' src={Wallet2} />
                                        <img alt='no img' src={Wallet3} /></div>}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='part7 myborder flex flex-col xl:flex-row pb-12 gap-12'>
                <div className='w-full text-center xl:text-left xl:w-1/2'>
                    <div className='headers text-[25px] md:text-[45px]'>Opportunities for You</div>
                    <div className='part5-body text-[12px] md:text-[23px]'>An ecosystem full of potential for innovative solutions.</div>
                </div>
                <div className='hidden md:flex w-full xl:w-1/2 place-content-center gap-4 flex-row'>
                    <div className='part7-left text-[14px] md:text-[22px]'>Launch Project</div>
                    <Link to='/ecosystem' className='part7-right text-[14px] md:text-[22px]'>Explore Ecosystem</Link>
                </div>
                <div className='md:hidden flex flex-row gap-2 place-content-center'>
                    <div className='part7-left text-[10px]' style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '10px', paddingBottom: '10px' }}>Launch Project</div>
                    <div className='part7-right text-[10px]' style={{ paddingLeft: '15px', paddingRight: '15px', paddingTop: '10px', paddingBottom: '10px' }}>Explore Ecosystem</div>
                </div>
            </div>
            <div className='part8 flex flex-col relative xl:flex-row gap-4'>
                <div className='w-full xl:w-1/2'>
                    <div className='headers text-[25px] md:text-[45px] text-center xl:text-left'>Stasha Coin $STC</div>
                    <div className='part5-body text-center text-[10px] mo:text-[14px] xl:text-left pb-6'>Stasha Coin is a revolutionary digital currency built on the robust foundations of Binance Smartchain.</div>
                    <div className='hidden xl:justify-start md:justify-center md:flex gap-4 flex-col sm:flex-row'>
                        <div className='part8-but'>
                            <div className='part8-but-head text-[14px]'>Current Sale Price</div>
                            <div className='part8-but-body text-[45px]'>$0.0050</div>
                        </div>
                        <div className='part8-but'>
                            <div className='part8-but-head text-[14px]'>Token Listing Price</div>
                            <div className='part8-but-body text-[45px]'>$0.40</div>
                        </div>
                    </div>
                </div>
                <div className='flex place-content-center w-full xl:w-1/2 relative'>
                    <div className='flex relative h-80 w-full sm:w-2/3 xl:w-full'>
                        <img alt='no img' src={Right1} className='hidden md:flex absolute' style={{ right: '100px' }} />
                        <img alt='no img' src={Right2} className='hidden md:block absolute' style={{ right: '250px', top: '120px' }} />
                        <img alt='no img' src={Right3} className='hidden md:block absolute' style={{ right: '50px', top: '200px' }} />
                        <img alt='no img' src={Right1} className='md:hidden flex absolute' style={{ left: '40%', top: '30px', width: '120px' }} />
                        <img alt='no img' src={Right2} className='md:hidden absolute' style={{ left: '20%', top: '120px', width: '80px' }} />
                        <img alt='no img' src={Right3} className='md:hidden absolute' style={{ left: '60%', top: '150px', width: '70px' }} />
                    </div>
                </div>
                <div className='flex md:hidden gap-4 self-center'>
                    <div className='part8-but1'>
                        <div className='part8-but-head text-[10px] md:text-[14px]'>Current Sale Price</div>
                        <div className='part8-but-body' style={{ fontSize: '25px' }}>$0.0050</div>
                    </div>
                    <div className='part8-but1'>
                        <div className='part8-but-head text-[10px] md:text-[14px]' style={{ fontSize: '10px' }}>Token Listing Price</div>
                        <div className='part8-but-body' style={{ fontSize: '25px' }}>$0.40</div>
                    </div>
                </div>
            </div>
            <div className='part9 flex flex-col px-4 md:px-7 lg:flex-row'>
                <div className='w-full lg:w-1/2'>
                    <div className='part9-head pb-2 text-[18px] mo:text-[25px] md:text-[45px] text-center md:text-left'>Accept crypto payments globally with StashaPay</div>
                    <div className='part9-body pr-4 pb-8 text-[10px] mo:text-[12px] md:text-[18px] text-center md:text-left'>Enjoy bordeless payments with Stasha Pay. Our solutionis user friendly, fast and secure.</div>
                    <div className='cursor-pointer justify-center md:justify-start part9-footer flex items-center gap-4'>
                        <div className='text-[18px] md:text-[25px]'>Get Started</div>
                        <HiArrowRight className='hidden md:block' />
                    </div>
                </div>
                <div className='flex w-full relative h-56 lg:w-1/2 lg:p-0 pt-16 md:pt-0'>
                    <div className='flex relative w-full h-56 sm:w-5/6 lg:w-full'>
                        <img alt='no img' src={ComR} className='hidden mo:block absolute w-2/3 md:w-2/3' style={{ right: '0px' }} />
                        <img alt='no img' src={ComL} className='hidden mo:block absolute w-2/3 md:w-1/2' style={{ left: '-20px', top: '80px' }} />
                        <img alt='no img' src={ComR} className='absolute mo:hidden' style={{ right: '-10px', width: '160px' }} />
                        <img alt='no img' src={ComL} className='absolute mo:hidden' style={{ left: '0px', top: '60px', width: '120px' }} />
                    </div>
                </div>
            </div>
            <div className='part10 flex relative flex-col lg:flex-row gap-8'>
                <div className='rectangle2 absolute'></div>
                <div className='hidden md:flex relative w-full lg:w-1/2 justify-center lg:justify-start'>
                    <a href='https://Stasha.academy' className='part10-but self-center'>Get Started</a>
                </div>
                <div className='flex flex-col lg:flex-row gap-8 relative'>
                    {/* <div className='ellipse5' style={{ left: '200px', top: '200px' }}></div> */}
                    <img alt='no img' src={Academy} className='block md:hidden w-1/3 self-center' />
                    <div className='flex flex-col w-full z-10'>
                        <div className='part5-title text-[25px] md:text-[45px] text-center lg:text-right'>Stasha Academy</div>
                        <div className='part5-body text-center text-[12px] md:text-[23px] lg:text-right'>Stasha Crypto Academy is your gateway to mastering the world of cryptocurrencies and blockchain technology.</div>
                    </div>
                    <img alt='no img' src={Academy} className='hidden md:block w-1/6 self-center' />
                </div>
                <div className='md:hidden ellipse7' style={{ right: '-100px', top: '100px' }}></div>
                <div className='block md:hidden self-center' style={{ color: '#00ACFF' }}>Learn more</div>
                <div className='flex md:hidden relative w-full justify-center'>
                    <a href='https://Stasha.academy' className='part10-but self-center' style={{ paddingLeft: '40px', paddingRight: '40px', fontSize: '14px' }}>Get Started</a>
                </div>
                <div className='part10-end hidden md:block md:absolute' style={{ bottom: '0px' }}>Learn more</div>
            </div>
            <div className='part10 flex flex-col lg:flex-row relative'>
                <div className='flex flex-col lg:flex-row gap-8'>
                    <img alt='no img' src={Books} className='w-1/3 md:w-1/6 self-center' />
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='part5-title text-[25px] md:text-[45px] text-center lg:text-left'>Stasha Dictionary</div>
                        <div className='part5-body text-center text-[12px] md:text-[23px] lg:text-left'>Discover the language of the crypto world with the Stasha Crypto Dictionary. </div>
                    </div>
                </div>
                <div className='block md:hidden self-center pb-8' style={{ color: '#00ACFF' }}>Learn more</div>
                <div className='flex md:hidden relative w-full justify-center'>
                    <a href='https://dictionary.stasha.io' className='part10-but self-center' style={{ fontSize: '14px', paddingLeft: '40px', paddingRight: '40px' }}>View Dictionary</a>
                </div>
                <div className='hidden md:flex relative w-full lg:w-1/2 justify-center lg:justify-end'>
                    <a href='https://dictionary.stasha.io' className='part10-but self-center' style={{ paddingLeft: '40px', paddingRight: '40px' }}>View Dictionary</a>
                </div>
                <a href='https://dictionary.stasha.io' className='part10-end md:absolute hidden md:flex items-center gap-2 lg:right-0 bottom-0'>Learn more<HiArrowRight /></a>
            </div>
            <div className='part11 flex flex-col sm:flex-row'>
                <div className='w-full sm:w-2/3'>
                    <div className='part5-title text-[25px] md:text-[45px] text-center md:text-left'>Join Our Community</div>
                    <div className='part5-body text-center md:text-left'>Join the Stasha community and be part of the decentralized revolution.</div>
                </div>
                <div className='md:pt-0 pt-8 w-full sm:w-1/3 flex gap-4 self-center justify-center sm:justify-end'>
                    <FaTelegramPlane style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                    <FaTwitter style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                    <FaFacebookF style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                    <AiFillInstagram style={{ backgroundColor: '00ACFF' }} className="p-2 text-4xl rounded-md" />
                </div>
            </div>
            <div className='part12 flex flex-col md:flex-row relative py-12'>
                <div className='ellipse5'></div>
                <div className='w-full md:w-1/3 relative pb-4 md:pb-0'>
                    <div className='part5-title text-[25px] md:text-[45px] text-center lg:text-left'>Frequently Asked Questions</div>
                    <div className='part5-body text-center lg:text-left pb-6 md:pb-24'>Find out all the basics about Stasha</div>
                    <div className='flex flex-col'>
                        <div className='part12-quest text-center lg:text-left pb-4'>Do you have questions?</div>
                        <div className='hidden md:block part12-but self-center lg:self-start'>Ask Us</div>
                        <div className='md:hidden part12-but self-center lg:self-start' style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '15px', paddingBottom: '15px' }}>Ask Us</div>
                    </div>
                </div>
                <div className='w-full md:w-2/3 relative'>
                    <div className='hidden md:ellipse6'></div>
                    <div className='hidden md:block'><Accordion data={faq} showReadMore={true} /></div>
                    <div className='block md:hidden'><AccordionM data={faq} showReadMore={true} /></div>
                </div>
            </div>
            <div className='part13'>
                <div className='part5-title text-[25px] md:text-[45px] text-center pb-4'>Official Partners</div>
                <div className='grid grid-cols-2 sm:grid-cols-5 place-content-center place-items-center gap-8'>
                    <img alt='no img' src={Yahoo} />
                    <img alt='no img' src={Marketwatch} />
                    <img alt='no img' src={Bloomberg} />
                    <img alt='no img' src={Techbullion} />
                    <img alt='no img' src={Nasdaq} className='place-self-center col-span-2 sm:col-span-1' />
                </div>
            </div>
            <div className='part14'>
                <div className='part5-title text-[25px] md:text-[45px] text-center md:text-left'>Subscribe to our Newsletter</div>
                <div className='part5-body text-[12px] md:text-[23px] text-center md:text-left'>Stay up to date for the latest crypto news, courses & more!</div>
            </div>
            <div className='flex flex-col md:flex-row self-center gap-4 pb-20'>
                <input className='hidden md:block part14-input' placeholder='Enter Email' />
                <div className='hidden md:block part1-but px-12 text-center'>Subscribe</div>
                <div className='part1-but md:hidden px-24 text-center' style={{ background: '#3333333B' }}>Subscribe</div>
            </div>
        </div>
    );
}

export default Home;