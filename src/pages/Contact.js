
const Contact = () => {
    return (
        <div>
            <div className="mx-8 pb-6 pt-16">
                <div className="text-[45px] pb-4" style={{ fontFamily: 'Fredoka' }}>Contact Us</div>
                <div className="text-gray-400 text-[20px]" style={{ fontFamily: 'Roboto' }}>Thank you for your interest in Stasha Blockchain Ecosystem. If you have any questions, comments, or concerns, please feel free to reach out to us. We value your feedback and are here to assist you.</div>
                <div className="text-gray-400 text-[20px] pt-12" style={{ fontFamily: 'Roboto' }}>Contact Information</div>
                <ul className="pl-8 pt-4" style={{ listStyleType: 'disc' }}>
                    <li className="text-gray-400 text-[20px]">By email: hello@stasha.io</li>
                </ul>
                <div className="text-gray-400 text-[20px] pb-8" style={{ fontFamily: 'Roboto' }}>Our dedicated support team is available to address any inquiries you may have. Whether you need assistance with our products, have technical questions, or require further information about our services, we are ready to help.</div>
                <div className="text-gray-400 text-[20px]" style={{ fontFamily: 'Roboto' }}>Please allow us some time to respond to your inquiry, and we will make every effort to provide you with a timely and accurate response. Your satisfaction is important to us, and we appreciate your patience.
                    We look forward to hearing from you and being of assistance.</div>
            </div>
            <div className='flex flex-col items-center part14 pt-24'>
                <div className='part5-title text-[25px] md:text-[45px] text-center md:text-left'>Subscribe to our Newsletter</div>
                <div className='part5-body text-[12px] md:text-[23px] text-center md:text-left'>Stay up to date for the latest crypto news, courses & more!</div>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-4 pb-20 pt-4'>
                <input className='hidden md:block part14-input' placeholder='Enter Email' />
                <div className='hidden md:block part1-but px-12 text-center'>Subscribe</div>
                <div className='md:hidden part1-but px-24 text-center' style={{ background: '#3333333B' }}>Subscribe</div>
            </div>
        </div>
    )
}

export default Contact;