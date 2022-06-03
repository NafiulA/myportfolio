import React from 'react';
import notFound from "../../assets/images/notfound.png";

const NotFound = () => {
    return (
        <div className='bg-[#2D2E32]'>
            <div className='min-h-screen flex justify-items-center items-center'>
                <img className='w-11/12 md:w-1/3 mx-auto' src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;