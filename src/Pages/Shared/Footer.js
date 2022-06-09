import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import { Link } from 'react-router-dom';

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
                    <a href='https://github.com/NafiulA' target="_blank" rel="noreferrer" className='mx-3'>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                    <a href='https://www.linkedin.com/in/nafiul-alam/' target="_blank" rel="noreferrer" className='mx-3'>
                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                    </a>
                    <a href='https://twitter.com/NafiulAlam16' target="_blank" rel="noreferrer" className='mx-3'>
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                    <a href='https://www.facebook.com/nafiul.alam.16/' target="_blank" rel="noreferrer" className='mx-3'>
                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                </div>
                <div className='text-gray-400 justify-self-center lg:justify-self-end text-sm py-5'>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;