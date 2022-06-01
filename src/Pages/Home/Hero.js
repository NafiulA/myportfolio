import React from 'react';
import portfolio from "../../assets/images/portfolio.png";

const Hero = () => {
    return (
        <div className='min-h-screen bg-[#2D2E32]'>
            <div className='w-full md:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
                <div className='order-2 lg:order-1'>
                    <div className='w-60 bg-[#57C78E] rounded-md'>

                    </div>
                </div>
                <div className='order-1 lg:order-2'>
                    <div className='static h-min mt-20 lg:mt-0 lg:relative lg:h-screen'>
                        <img className='static lg:absolute lg:bottom-0' src={portfolio} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;