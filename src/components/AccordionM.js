
import React from 'react';
import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

const AccordionM = (props) => {
    const [index, setIndex] = useState(-1);
    return (
        <div className='relative'>
            {props.data.map((item, ind) => (
                <div>
                    <h2>
                        <div onClick={() => setIndex(ind)} className="myborder flex items-center cursor-pointer justify-between w-full py-5 font-medium text-left text-gray-500 focus:ring-4 focus:ring-gray-200">
                            <span className='acc-title' style={{ fontSize: '16px' }}>{item.title}</span>
                            <HiArrowRight className={index === ind ? 'text-blue-400 text-2xl' : 'text-white text-3xl'} />
                        </div>
                    </h2>
                    <div className={index === ind ? 'block' : 'hidden'}>
                        <div className="acc-body px-4">
                            {item.body.split('\n').map((text, index) => (
                                <React.Fragment key={index}>
                                    {index !== 0 ? <br /> : <></>}
                                    {text}
                                </React.Fragment>
                            ))}
                            {props.showReadMore && <span style={{ paddingLeft: '10px', color: '#00ACFF' }}>Read more</span>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AccordionM;