import React, { useState } from 'react';
import "./animate.css";
import { CustomText } from '@/components/custom';

const Success: React.FC = () => {
    const [close, setClose] = useState(false);

    return (
        <div className={`fixed z-50 inset-0 flex backdrop-blur-3xl items-center justify-center ${close ? 'hidden' : 'flex'}`} onClick={() => setClose(!close)}>
            <div className=" relative flex items-center flex-col justify-center gap-5 bg-black rounded-lg shadow px-14 py-8">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2" className='mt-0'>
                    <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth={6} strokeMiterlimit={10} cx={65.1} cy={65.1} r={62.1} />
                    <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth={6} strokeLinecap="round" strokeMiterlimit={10} points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                </svg>
                <CustomText description>Success</CustomText>
            </div>
        </div>
    );
};

export default Success;
