import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineInformationCircle, HiArrowRight } from 'react-icons/hi';
import { FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import ROT from '../images/ROT1.gif';
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

import { real_ecosystem } from '../global/constant';

const Ecosystem = () => {
    return (
        <div className='flex flex-col gap-10 sm:mt-12 md:mt-0 px-6'>
            <div className="part1 w-full flex flex-col">
                <img alt='no img' src={ROT} className='relative w-1/2 self-center' />
            </div>
            <div className='part6 text-left'>
                <div className='headers text-[25px] text-center md:text-left md:text-[45px]'>Stasha Ecosystem:<br />Empowering the Future of Digital Assets</div>
                <div className='pb-6 relative'>
                    <div className='md:hidden rectangle3'></div>
                    <div className='hidden md:block ellipse3'></div>
                    <div className='hidden md:block ellipse4'></div>
                    <div className='absolute' style={{ background: 'rgba(0, 172, 255, 0.2)', filter: 'blur(250px)', width: '450px', height: '650px' }}></div>
                    <div className='part5-body pb-24 text-[12px] md:text-[20px] text-center md:text-left relative'>The Stasha ecosystem is an innovative and comprehensive platform designed to empower users in the world of digital assets. With a range of cutting-edge features and services, Stasha offers a seamless and secure environment for managing, trading, and interacting with various blockchain-based assets. Let's explore the key components of the Stasha ecosystem.</div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-0 md:gap-y-12 relative'>
                        {
                            real_ecosystem.map((item, id) => (
                                <div className='part6-item flex flex-col relative justify-between'>
                                    <div>
                                        <div className='flex gap-4 pl-3 justify-between'>
                                            <div className='flex gap-4'>
                                                {id != 9 &&
                                                    <img alt='no img' src={`${item.eco}`} />}
                                                <div className={`part6-item-title ${id == 9 && 'pl-6'}`}>{item.title}</div>
                                            </div>
                                            <HiArrowRight className='block self-center md:hidden' style={{ color: '#00ACFF' }} />
                                        </div>
                                        <div className='part6-item-body hidden md:block px-1'>{item.body}</div>
                                    </div>
                                    {id !== 3 ? <div className='hidden md:flex part6-item-footer items-center'>
                                        <div>{id == 9 ? 'Visit' : 'Explore'}</div>
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
            <div className='part14 pt-24'>
                <div className='part5-title text-[25px] md:text-[45px] text-center md:text-left'>Subscribe to our Newsletter</div>
                <div className='part5-body text-[12px] md:text-[23px] text-center md:text-left'>Stay up to date for the latest crypto news, courses & more!</div>
            </div>
            <div className='flex flex-col md:flex-row self-center gap-4 pb-20'>
                <input className='hidden md:block part14-input' placeholder='Enter Email' />
                <div className='hidden md:block part1-but px-12 text-center'>Subscribe</div>
                <div className='md:hidden part1-but px-24 text-center' style={{ background: '#3333333B' }}>Subscribe</div>
            </div>
        </div>
    );
}

export default Ecosystem;