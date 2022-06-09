import React from 'react';

const About = () => {
    return (
        <div id='aboutme' className='bg-[#25262A]'>
            <div className='min-h-screen w-full lg:w-3/4 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div className='order-2 lg:order-1'>
                    <div className='group h-40 w-full max-w-lg bg-[#2D2E32] rounded-md my-6 hover:-translate-y-3 transition-all duration-300 ease-in-out'>
                        <p className='text-white group-hover:text-[#57C78E] text-2xl p-5'>Front-end Development</p>
                        <p className='text-sm text-gray-500 px-5 max-w-sm'>HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, ReactJS</p>
                    </div>
                    <div className='group h-40 w-full max-w-lg bg-[#2D2E32] rounded-md my-6 hover:-translate-y-3 transition-all duration-300 ease-in-out'>
                        <p className='text-white group-hover:text-[#57c78e] text-2xl p-5'>Full-stack Development</p>
                        <p className='text-sm text-gray-500 px-5 max-w-sm'>JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB</p>
                    </div>
                    <div className='group h-40 w-full max-w-lg bg-[#2D2E32] rounded-md my-6 hover:-translate-y-3 transition-all duration-300 ease-in-out'>
                        <p className='text-white group-hover:text-[#57c78e] text-2xl p-5'>Software Development</p>
                        <p className='text-sm text-gray-500 px-5 max-w-sm'>Basic knowledge of C++, OOP, RDBMS, Networks</p>
                    </div>
                </div>
                <div className='px-5 order-1 lg:order-2'>
                    <div>
                        <p className='text-gray-400 py-3'>Introduction</p>
                    </div>
                    <div>
                        <p className='py-3 text-white text-4xl'>Hello! I'm Nafiul Alam</p>
                    </div>
                    <div className='py-3 max-w-md text-gray-400 text-justify'>
                        <p>Recently I graduated from Independent University, Bangladesh with a B.Sc in Electrical &#38; Electronics Engineering. From the introduction to programming in my junior year, i've been in love with programming. Since then, I've learnt C++, Python, Computer networking, Cryptography and most recently JavaScript. And little by little I've learnt to make a full-stack website utilizing the popular MERN stack technologies. Everyday I'm trying to learn something new and grow by experimenting. Now-a-days I'm looking for career opportunities in this vast IT field. If you find my works interesting and suitable for a full time position or even an internship  in your organization, please consider giving me a knock.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;