import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import portfolio from "../../assets/images/karakuni.jpg";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div id='top' className='min-h-[90vh] lg:min-h-screen bg-[#2D2E32]'>
            <div className='w-full md:w-4/5 mx-auto min-h-[90vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
                <div className='order-1 px-3'>
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
                <div className='order-2 flex justify-center items-center'>
                    <div className='w-full flex justify-center mt-2 lg:mt-0'>
                        <img className='w-full max-w-[420px] lg:max-w-[520px] object-contain border-4 border-[#25262A] rounded-xl shadow-md shadow-slate-900' src={portfolio} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
