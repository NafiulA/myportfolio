import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs' className='bg-[#2D2E32]'>
            <div className='min-h-screen py-20 w-full lg:w-4/5 mx-auto'>
                <p className='text-4xl text-white pl-3'>Blogs<span className='text-[#57C78E]'>_</span></p>
                <div className='max-w-fit mx-auto min-h-[70vh] grid grid-cols-1 items-center bg-gradient-to-br from-orange-400 to-[#57C78E] bg-clip-text'>
                    <p className='text-7xl text-transparent text-center'>Coming Soon</p>
                </div>
            </div>


        </div>
    );
};

export default Blogs;