import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react';

const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    return (
        <div className='bg-[#25262A]'>
            <div className='w-full lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-strech items-center'>
                <div className='justify-self-center lg:justify-self-start'>
                    <p className='text-gray-400 py-5 text-sm'>Copyright &#169; {fullYear} - All rights reserved.</p>
                </div>
                <div className='text-gray-400 justify-self-center text-sm py-5'>
                    <a href="#f" className='mx-3'>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                    <a href="#f" className='mx-3'>
                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                    </a>
                    <a href="#f" className='mx-3'>
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                    <a href="#f" className='mx-3'>
                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                </div>
                <div className='text-gray-400 justify-self-center lg:justify-self-end text-sm py-5'>
                    <a href="#psd">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;