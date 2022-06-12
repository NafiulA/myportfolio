import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div data-aos="fade-up" data-aos-delay="300" className="card w-full bg-[#2D2E32] shadow-xl">
            <div className="p-5">
                <p className='my-3'>{testimonial.testimony}</p>
                <div className='flex justify-end items-center'>
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-[#57c78e]">
                            <img src={testimonial.photo} alt="" referrerPolicy="no-referrer" />
                        </div>
                    </div>
                    <p className='ml-5'>{testimonial.name}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;