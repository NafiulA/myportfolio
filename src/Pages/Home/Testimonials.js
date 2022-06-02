import React from 'react';

const Testimonials = () => {
    return (
        <div id='testimonial' className='bg-[#2D2E32]'>
            <div className='py-20 min-h-screen w-full lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <div>
                        <p className='text-4xl pb-5 text-white '>Testimonials<span className='text-[#57C78E]'>.</span></p>
                        <p className='text-gray-400 my-5'>If you have any advice or suggestions or thoughts on me, please feel free to leave a word. I would highly appreciate your words. </p>
                    </div>

                    <div>
                        <button className='text-xl p-2 my-5 bg-[#25262A] text-white rounded-md hover:bg-[#2D2E32] hover:text-[#57C78E] hover:scale-105 transition-all duration-300 ease-in-out'>Leave a word</button>
                    </div>
                </div>
                <div className=' w-full min-h-[60vh] border-2 border-[#57C78E] rounded-md'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 items-center'>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;