import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import portfolio from "../../assets/images/portfolio.png";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div id='top' className='min-h-[90vh] bg-[#2D2E32]'>
            <div className='w-full md:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
                <div className='order-2 lg:order-1 px-3 lg:mt-10'>
                    <div className='max-w-fit bg-[#57C78E] rounded-md'>
                        <p className='p-2 text-sm mb-2'>Full-stack Developer</p>
                    </div>
                    <div className='text-4xl text-white py-5'>
                        <p><q>People don't care about what you say, they care about what you build</q></p>
                    </div>

                    <div className='mt-2 text-gray-400'>
                        <p className='py-5'>I build beautiful &#38; powerful web apps utilizing the technologies I keep learning everyday.</p>
                    </div>
                    <div className='my-10 flex flex-wrap gap-3'>
                        <div>
                        <button onClick={() => { navigate("/allprojects") }} className='p-2 text-[#57C78E] bg-[#25262A] text-2xl rounded-md flex items-center hover:bg-[#16191E] hover:text-white transition-all duration-300 ease-in-out'>
                        <p>Check my projects </p>
                        </button>
                        </div>
                        <div>
                        <button className='p-2 text-[#57C78E] bg-[#25262A] text-2xl rounded-md flex items-center hover:bg-[#16191E] hover:text-white transition-all duration-300 ease-in-out'>
                        <HashLink to="/home#contacts">Let's chat</HashLink>
                        </button>
                        </div>
                    </div>
                </div>
                <div className='order-1 lg:order-2'>
                    <div className='static h-min mt-20 lg:mt-0 lg:relative lg:h-[90vh]'>
                        <img className='static w-full lg:absolute lg:bottom-0' src={portfolio} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;