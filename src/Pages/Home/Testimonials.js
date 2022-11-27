import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import TestimonialCard from './TestimonialCard';
import "./Testimonial.css";
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {
    const loadingHeight="half";
    const navigate = useNavigate();
    const { data: testimonials, isLoading } = useQuery("testimonials", () =>
        fetch("https://nafiulalam.onrender.com/reviews").then(res => res.json())
    );

    return (
        <div id='testimonial' className='bg-[#2D2E32]'>
            <div className='py-20 min-h-screen w-full lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div className='px-3'>
                    <div>
                        <p className='text-4xl pb-5 text-white '>Testimonials<span className='text-[#57C78E]'>.</span></p>
                        <p className='text-gray-400 my-5'>If you have any advice or suggestions or thoughts on my works, please feel free to leave a word. I would highly appreciate your words. </p>
                    </div>

                    <div>
                        <button onClick={() => { navigate("/login") }} className='text-xl p-2 my-5 bg-[#25262A] text-white rounded-md hover:bg-[#2D2E32] outline outline-[#57c78e] outline-1 hover:text-[#57C78E] hover:scale-105 transition-all duration-300 ease-in-out'>Leave a word</button>
                    </div>
                </div>
                <div data-aos="fade-left" className="mockup-window border text-gray-400 bg-[#25262A] mx-2 border-[#57c78e]">
                    {isLoading?<Loading loadingHeight={loadingHeight}></Loading>:
                    (testimonials.length < 1 ?
                        <div className='h-[60vh]'>
                            <p className='text-gray-400 p-5 border-t border-[#57c78e]'>Looking forward to your testimonials!</p>
                        </div>
                        : <div className='testimonialWindow h-[60vh] overflow-y-auto'>
                            <div className="grid grid-cols-1 lg:grid-cols-2 p-2 gap-5 justify-items-center items-center border-t border-[#57c78E]">
                                {testimonials.map(testimonial => <TestimonialCard key={testimonial._id} testimonial={testimonial}></TestimonialCard>)}
                            </div></div>)}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;