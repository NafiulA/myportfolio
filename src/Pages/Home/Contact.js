import React, { useState } from 'react';
import handwave from "../../assets/icons/handwave.png";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
    const [sending, setSending] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [openModal, setOpenModal] = useState(false);
    const [result, setResult] = useState("");

    const onSubmit = data => {
        setSending(true);
        const messageBody = {
            user_name: data.user_name,
            user_email: data.user_email,
            message: data.message
        }

        emailjs.send('service_4kofdis', 'template_pk2f52s', messageBody, 'LLoWUEN5T1_ymARmU')
            .then((result) => {
                setSending(false);
                setOpenModal(true);
                setResult(result.text);
                reset();
            }, (error) => {
                setSending(false);
                setOpenModal(true);
                setResult(error.text);
            });
    };

    return (
        <div id='contacts' className='bg-[#25262A]'>
            <div className='min-h-screen py-20 w-full lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
                <div className='px-3'>
                    <div className='text-4xl text-white'>
                        <p>Let's make something</p>
                        <p>amazing together<span className='text-[#57C78E]'>.</span></p>
                        <p className='my-5'>Start by saying <span className='text-[#57c78e]'>Hi!</span><span>
                            <img className='w-9 inline' src={handwave} alt="" /></span></p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='my-3'>
                                <input {...register("user_name", { required: "Your name is required" })} type="text" name="user_name" className='input input-sm w-full max-w-sm bg-transparent border-1 border-[#57C78E] text-gray-400 active:bg-transparent' placeholder='Your name' />
                                {errors.user_name && <p className='text-sm text-red-500'>{errors.user_name.message}</p>}
                            </div>
                            <div className='my-3'>
                                <input {...register("user_email", { required: "Your email is required" })} type="email" name="user_email" className='input input-sm w-full max-w-sm bg-transparent active:bg-transparent border-1 border-[#57C78E] text-gray-400' placeholder='Your email' />
                                {errors.user_email && <p className='text-sm text-red-500'>{errors.user_email.message}</p>}
                            </div>
                            <div className='my-3'>
                                <textarea {...register("message", { required: "Please include a message" })} type="text" name="message" className='textarea w-full max-w-sm bg-transparent border-1 border-[#57C78E] text-gray-400' style={{ "resize": "none" }} placeholder='Your message' />
                                {errors.message && <p className='text-sm text-red-500'>{errors.message.message}</p>}
                            </div>
                            {sending ? <button disabled className='block max-w-fit text-[#57C78E] px-4 py-1 bg-[#2d2c32] rounded outline outline-1 outline-[#57C78E] cursor-pointer'>
                                Sending...
                            </button>
                                : <input type="submit" value="Send" className='block max-w-fit text-[#57C78E] px-4 py-1 bg-[#2d2c32] rounded outline outline-1 outline-[#57C78E] hover:bg-[#57C78E] hover:text-white transition-all duration-300 ease-in-out cursor-pointer' />}
                        </form>
                    </div>
                </div>
                <div className='px-3'>
                    <p className='text-gray-400 py-5'>Contact Info</p>

                    <div className='bg-[#2D2E32] my-5 p-5 w-full flex items-center rounded-md text-xl text-white hover:text-[#57c78E] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#57c78e]/50 transition-all duration-300 ease-in-out'>
                        <FontAwesomeIcon className='text-[#57c78e]' icon={faAt}></FontAwesomeIcon>
                        <p className='pl-3'>nafiulalam30@gmail.com</p>
                    </div>
                    <div className='bg-[#2D2E32] my-5 p-5 w-full flex items-center rounded-md text-xl text-white hover:text-[#57c78E] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#57c78e]/50 transition-all duration-300 ease-in-out'>
                        <FontAwesomeIcon className='text-[#57c78e]' icon={faPhone}></FontAwesomeIcon>
                        <a href='tel:+8801323845385' className='pl-3'>+880-1323-845385</a>
                    </div>
                    <div className='bg-[#2D2E32] my-5 p-5 w-full flex items-center rounded-md text-xl text-white hover:text-[#57c78E] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#57c78e]/50 transition-all duration-300 ease-in-out'>
                        <FontAwesomeIcon className='text-[#57c78e]' icon={faLocationCrosshairs}></FontAwesomeIcon>
                        <p className='pl-3'>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            {openModal && <Modal
                result={result} setOpenModal={setOpenModal} setResult={setResult}></Modal>}
        </div>
    );
};

export default Contact;