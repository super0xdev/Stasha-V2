import Accordion from '../components/Accordion'
import AccordionM from '../components/AccordionM'
import Rafiki from '../images/rafiki.svg'
import Community from '../images/communityfleet.png'
import University from '../images/universityfleet.png'
import Tech from '../images/techfleet.png'
import Amico from '../images/amico.png'
import { faq_ambassador } from '../global/constant'

const Ambadassor = () => {
    return (
        <div className='px-16'>
            <div className="flex flex-col text-center gap-4 py-20">
                <div className='absolute left-[-100px] top-[20px] w-[600px] h-[560px] rounded-[50%]' style={{ background: 'rgba(80, 97, 255, 0.20)', filter: 'blur(100px)' }} />
                <div className="text-[70px] fredoka">Stasha Ambadassor</div>
                <div className="text-[20px] pb-8 roboto" style={{ fontFamily: 'roboto' }}>Contribute to the fastest growing community in the Web3 space.</div>
                <div className="part10-but">Apply Now</div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-[45px] fredoka">Stasha Ambassadorship Program?</div>
                <div className="text-[20px] roboto">The Stasha Ambassador program enables you to be an advocate for Stasha in your local community, actively contributing to the larger vision of the project. You are empowered to take the lead in organizing virtual and in-person meetups, generating original content, expanding your network, and engaging in various other activities that support the growth of Stasha Ecosystem.</div>
            </div>
            <div className='relative pt-12'>
                <div className='absolute left-[260px] top-[20px] w-[600px] h-[560px] rounded-[50%]' style={{ background: 'linear-gradient(180deg, rgba(0, 172, 255, 0.20) 0%, rgba(80, 97, 255, 0.04) 100%)', filter: 'blur(100px)' }} />
                <div className='absolute right-[-200px] top-[150px] w-[600px] h-[560px] rounded-[50%]' style={{ background: 'rgba(0, 172, 255, 0.19)', filter: 'blur(100px)' }} />
                <div className='absolute right-[-140px] top-[570px] w-[720px] h-[150px] bg-black'></div>
                <div className='fredoka text-[45px] pb-8'>Why Join?</div>
                <div className="flex w-full gap-28">
                    <div className="p-4 w-1/2 rounded-[20px] text-[20px] self-center" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
                        <ul className="pl-8 flex flex-col gap-4 py-8" style={{ listStyleType: 'disc' }}>
                            <li>Be a local advocate for Stasha, spreading awareness and promoting its vision.</li>
                            <li>Collaborate with prominent protocols to drive Stasha's growth.</li>
                            <li>Expand your professional network and enhance your portfolio.</li>
                            <li>Learn about cutting-edge scaling and Layer 2 technologies from industry leaders.</li>
                            <li>Contribute to research initiatives and have an impact on the Stasha community.</li>
                        </ul>
                    </div>
                    <div className='self-center'><img className='' src={Rafiki} /></div>
                </div>
            </div>
            <div className='relative py-24'>
                <div className='text-[45px] fredoka text-center'>Join a fleet now and start growing</div>
                <div className='flex gap-4'>
                    <div className='relative rounded-[20px] p-8 roboto' style={{ width: '380px', height: '600px', background: 'rgba(255, 255, 255, 0.04)' }}>
                        <div className='flex gap-4'><img src={Community} />COMMUNITY FLEET</div>
                        <ul className="pl-8 flex flex-col gap-4 py-8 text-[20px]" style={{ listStyleType: 'disc', color: '#9c9c9c' }}>
                            <li>Create content showcasing Stasha and its ecosystem partners.</li>
                            <li>Host local meetups to foster Stasha community engagement.</li>
                            <li>Represent Stasha as an ambassador in your region.</li>
                            <li>Contribute to the Stasha ecosystem as a gamer or artist.</li>
                        </ul>
                        <div className="part10-but flex justify-center mx-4 absolute bottom-12" style={{ width: '250px' }}>Apply Now</div>
                    </div>
                    <div className='relative rounded-[20px] p-8 roboto' style={{ width: '380px', height: '600px', background: 'rgba(255, 255, 255, 0.04)' }}>
                        <div className='flex gap-4'><img src={University} />UNIVERSITY FLEET</div>
                        <ul className="pl-8 flex flex-col gap-4 py-8 text-[20px]" style={{ listStyleType: 'disc', color: '#9c9c9c' }}>
                            <li>Research, create content, and develop dApps with Stasha.</li>
                            <li>Be a university ambassador for Stasha, spreading awareness about its potential.</li>
                            <li>Inspire students interested in web3 to build on Stasha.</li>
                        </ul>
                        <div className="part10-but flex justify-center mx-4 absolute bottom-12" style={{ width: '250px' }}>Apply Now</div>
                    </div>
                    <div className='relative rounded-[20px] p-8 roboto' style={{ width: '380px', height: '600px', background: 'rgba(255, 255, 255, 0.04)' }}>
                        <div className='flex gap-4'><img src={Tech} />TECH FLEET</div>
                        <ul className="pl-8 flex flex-col gap-4 py-8 text-[20px]" style={{ listStyleType: 'disc', color: '#9c9c9c' }}>
                            <li>Build analytics dashboards specifically designed for the Stasha ecosystem.</li>
                            <li>Develop tooling to enhance the functionality and user experience of dApps on Stasha.</li>
                            <li>Educate and empower developers to effectively scale their dApps using Stasha.</li>
                        </ul>
                        <div className="part10-but flex justify-center mx-4 absolute bottom-12" style={{ width: '250px' }}>Apply Now</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='fredoka text-[45px]'>Stasha Global Communities</div>
                <div className='roboto text-[20px]' style={{ color: '#9c9c9c' }}>Communities across globe representing/hosting events for Stasha Blockchain Ecosystem</div>
                <div className='flex gap-4'>
                    <div className='relative rounded-[12px] bg-black roboto' style={{ border: 'solid 1px rgba(51, 51, 51,0.7) ', width: '460px', height: '240px' }}>
                        <div className='p-4 absolute bottom-6 text-[20px]' style={{ color: '#9c9c9c' }}>Stasha Hackaton</div>
                        <div className='p-4 absolute bottom-0 text-[16px] text-white'>Frankfurt, Germany</div>
                    </div>
                    <div className='relative rounded-[12px] bg-black roboto' style={{ border: 'solid 1px rgba(51, 51, 51,0.7) ', width: '460px', height: '240px' }}>
                        <div className='p-4 absolute bottom-6 text-[20px]' style={{ color: '#9c9c9c' }}>Stasha Hackaton</div>
                        <div className='p-4 absolute bottom-0 text-[16px] text-white'>Frankfurt, Germany</div>
                    </div>
                    <div className='relative rounded-[12px] bg-black roboto' style={{ border: 'solid 1px rgba(51, 51, 51,0.7) ', width: '460px', height: '240px' }}>
                        <div className='p-4 absolute bottom-6 text-[20px]' style={{ color: '#9c9c9c' }}>Stasha Hackaton</div>
                        <div className='p-4 absolute bottom-0 text-[16px] text-white'>Frankfurt, Germany</div>
                    </div>
                </div>
                <div className="part10-but w-[250px] mt-12">Host Event</div>
            </div>
            <div className='pt-16'>
                <div className='fredoka text-[45px] pb-8'>Achievements</div>
                <div className="flex w-full gap-28">
                    <div className="p-4 w-1/2 rounded-[20px] text-[20px] self-center" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
                        <div className='px-4 py-8' style={{ color: '#9c9c9c' }}>Explore the exceptional content crafted by Stasha Ambassadors, and get involved in content creation yourself! Once you become an Ambassador, your content will be showcased alongside others for the broader community to enjoy.</div>
                        <div className='pl-4' style={{ color: '#00ACFF' }}>View Achievement Portal</div>
                    </div>
                    <div className='self-center pl-12'><img src={Amico} /></div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row relative py-12'>
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
                    <div className='hidden md:block'><Accordion data={faq_ambassador} showReadMore={false} /></div>
                    <div className='block md:hidden'><AccordionM data={faq_ambassador} showReadMore={false} /></div>
                </div>
            </div>
            <div className='part14 pt-12'>
                <div className='part5-title text-[25px] md:text-[45px] text-center'>Subscribe to our Newsletter</div>
                <div className='part5-body text-[12px] md:text-[23px] text-center'>Stay up to date for the latest crypto news, courses & more!</div>
            </div>
            <div className='flex flex-col justify-center md:flex-row self-center gap-4 pb-20'>
                <input className='hidden md:block part14-input' placeholder='Enter Email' />
                <div className='hidden md:block part1-but px-12 text-center'>Subscribe</div>
                <div className='part1-but md:hidden px-24 text-center' style={{ background: '#3333333B' }}>Subscribe</div>
            </div>
        </div >
    )
}

export default Ambadassor;