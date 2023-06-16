
import React from 'react';
import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

import { faq } from '../global/constant';

const AccordionM = () => {
    const [index, setIndex] = useState(-1);
    return (
        <div className='relative'>
            {faq.map((item, ind) => (
                <div>
                    <h2>
                        <div onClick={() => setIndex(ind)} className="flex items-center cursor-pointer justify-between w-full p-5 font-medium text-left text-gray-500 focus:ring-4 focus:ring-gray-200">
                            <span className='acc-title'>{item.title}</span>
                            <HiArrowRight className={index === ind ? 'text-blue-400' : 'text-white'} />
                        </div>
                    </h2>
                    <div className={index === ind ? 'block' : 'hidden'}>
                        <div className="acc-body p-5">
                            {item.body.split('\n').map((text, index) => (
                                <React.Fragment key={index}>
                                    {index !== 0 ? <br /> : <></>}
                                    {text}
                                </React.Fragment>
                            ))}
                            <span style={{ paddingLeft: '10px', color: '#00ACFF' }}>Read more</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AccordionM;