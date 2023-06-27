
const About = () => {
    return (
        <div>
            <div className="mx-8 pb-6 pt-16">
                <div className="text-[45px] pb-4" style={{ fontFamily: 'Fredoka' }}>About Us</div>
                <div className="text-gray-400 text-[20px] pb-6" style={{ fontFamily: 'Roboto' }}>At Stasha Blockchain Ecosystem, we are passionate about revolutionizing the world through the power of blockchain technology. Our mission is to create a decentralized, transparent, and secure ecosystem that empowers individuals and businesses alike.</div>
                <div className="text-gray-400 text-[20px] pb-6" style={{ fontFamily: 'Roboto' }}>Blockchain technology has the potential to transform industries, reshape economies, and redefine the way we interact and transact. At Stasha, we believe in harnessing this potential to drive innovation, efficiency, and trust in various sectors.</div>
                <div className="text-gray-400 text-[20px] pb-6" style={{ fontFamily: 'Roboto' }}>Our ecosystem is built on the principles of decentralization, immutability, and transparency. By leveraging distributed ledger technology, we aim to enable seamless peer-to-peer transactions, eliminate intermediaries, and foster a new era of trust and accountability.</div>
                <div className="text-gray-400 text-[30px] pb-6" style={{ fontFamily: 'Roboto' }}>Key Values and Principles:</div>
                <ul className="flex gap-4 flex-col">
                    <li className="text-gray-400 text-[20px]">1. Innovation: We are committed to pushing the boundaries of what is possible with blockchain technology. We continuously explore new solutions, adapt to evolving market needs, and embrace emerging trends to stay at the forefront of innovation.</li>
                    <li className="text-gray-400 text-[20px]">2. Trust and Security: Security is paramount in the blockchain space. We prioritize the highest standards of security and privacy to ensure the protection of our users' information and assets. Through robust encryption, smart contract audits, and rigorous security protocols, we strive to build trust and instill confidence in our ecosystem.</li>
                    <li className="text-gray-400 text-[20px]">3. User Empowerment: We believe in empowering individuals and businesses to take control of their data and assets. Our user-centric approach ensures that our tools and services are accessible, user-friendly, and tailored to meet the diverse needs of our community.</li>
                    <li className="text-gray-400 text-[20px]">4. Collaboration: Collaboration is the cornerstone of our success. We actively engage with industry partners, developers, and users to foster a collaborative environment. By working together, we can unlock the full potential of blockchain technology and drive meaningful change.</li>
                    <li className="text-gray-400 text-[20px]">5. Social Impact: We recognize the transformative power of blockchain beyond financial applications. We seek to drive positive social impact by exploring blockchain's potential in areas such as supply chain transparency, decentralized identity, healthcare, and more.
                    </li>
                </ul>
                <div className="text-gray-400 text-[20px] pt-12 pb-6" style={{ fontFamily: 'Roboto' }}>Join us on our journey as we shape the future of blockchain technology. Together, we can build a decentralized world that empowers individuals, fosters innovation, and creates new opportunities for a better tomorrow.</div>
                <div className="text-gray-400 text-[20px] pb-24" style={{ fontFamily: 'Roboto' }}>Welcome to Stasha Blockchain Ecosystem - where possibilities are endless.</div>
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

export default About;