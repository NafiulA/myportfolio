import React from 'react';
import handwave from "../../assets/icons/handwave.png";
const Contact = () => {
    return (
        <div className='bg-[#25262A]'>
            <div className='min-h-screen py-20 w-full lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
                <div>
                    <div className='text-4xl text-white'>
                        <p>Let's make something</p>
                        <p>amazing together<span className='text-[#57C78E]'>.</span></p>
                        <p className='my-5 flex'>Start by saying <span className='pl-4 text-[#57c78e]'>Hi!</span><span>
                            <img className='w-9' src={handwave} alt="" /></span></p>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

export default Contact;