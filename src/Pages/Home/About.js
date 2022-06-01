import React from 'react';

const About = () => {
    return (
        <div className='bg-[#25262A]'>
            <div className='min-h-screen w-full lg:w-4/5 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <div className=''>
                        <p>Front-end Developer</p>
                    </div>
                    <div><p>Full-stack Developer</p></div>
                    <div>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div className='px-5'>
                    <div>
                        <p className='text-gray-400 py-3'>Introduction</p>
                    </div>
                    <div>
                        <p className='py-3 text-white text-4xl'>Hello! I'm Nafiul Alam</p>
                    </div>
                    <div className='py-3 max-w-md text-gray-400 text-justify'>
                        <p>Recently I graduated from Independent University, Bangladesh with a B.Sc in Electrical &#38; Electronics Engineering. From the introduction to programming in my junior year, i've been in love with programming. Since then, I've learnt C++, Python, Computer networking, Cryptography and most recently JavaScript. And little by little I've learnt to make a full-stack website utilizing the popular MERN stack technologies. Everyday I'm trying to learn something new and grow by experimenting. Now-a-days I'm looking for career opportunities in this vast IT field. If you find my works interesting and suitable for a internship or trainee in your organization, please consider giving me a knock.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;