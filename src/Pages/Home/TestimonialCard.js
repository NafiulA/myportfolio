import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div class="card w-full bg-[#2D2E32] shadow-xl">
            <div class="p-5">
                <p className='my-3'>{testimonial.testimony}</p>
                <div className='flex justify-end items-center'>
                    <div class="avatar">
                        <div class="w-10 rounded-full ring ring-[#57c78e]">
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