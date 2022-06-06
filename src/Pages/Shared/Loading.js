import React from 'react';
import loader from "../../assets/images/loader.gif";

const Loading = () => {
    return (
        <div className='bg-[#16191E]'>
            <div className='min-h-screen flex justify-center items-center'>
                <img className='w-16' src={loader} alt="" />
            </div>
        </div>
    );
};

export default Loading;