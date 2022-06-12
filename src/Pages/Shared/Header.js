import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import "./Header.css";
import { HashLink as Link } from 'react-router-hash-link';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const menu = <>
        <li className='hoverStyle'><Link to="/home#aboutme">About Me</Link></li>
        <li className='hoverStyle'><Link to="/home#projects">Projects</Link></li>
        <li className='hoverStyle'><Link to="/home#testimonial">Testimonial</Link></li>
        <li className='hoverStyle'><Link to="/home#blogs">Blogs</Link></li>
        <li className='hoverStyle'><Link to="/home#contacts">Contact</Link></li>
        {user && <li className='hoverStyle'><Link to="/dashboard">Dashboard</Link></li>}

    </>
    return (
        <div className="navbar bg-[#2D2E32] text-white sticky top-0 z-50">
            <div className="navbar-start">
                <Link className="p-5 text-xl" to='/home#top'>Nafiul Alam</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 text-sm p-0">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://drive.google.com/file/d/1RiooLzeBUX9_6rL8NuAi-Xmw_7P11KAN/view?usp=sharing' target="_blank" rel="noreferrer" className='bg-[#333438] flex items-center mr-3 p-2 text-xs lg:hidden rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                    <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
                    <p className='pl-2'>My Resume</p>
                </a>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content text-sm mt-3 p-2 shadow bg-[#2D2E32] rounded-box w-52">
                        {menu}
                        <hr className='mx-4 my-3 bg-[#57C78E] border-none h-[2px]' />
                        <div>
                            <a href='https://github.com/NafiulA' target="_blank" rel="noreferrer" className='bg-[#333438] flex items-center ml-4 mb-2 p-2 rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                <p className='pl-2'>Github</p>
                            </a>
                            <a href='https://www.linkedin.com/in/nafiul-alam/' target="_blank" rel="noreferrer" className='bg-[#333438] flex items-center ml-4 mb-2 p-2 rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                                <p className='pl-2'>LinkedIn</p>
                            </a>
                        </div>
                    </ul>
                </div>
                <div className='hidden lg:flex text-xs'>
                    <a href='https://github.com/NafiulA' target="_blank" rel="noreferrer" className='bg-[#333438] flex items-center mr-5 p-2 rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        <p className='pl-2'>Github</p>
                    </a>
                    <a href='https://www.linkedin.com/in/nafiul-alam/' target="_blank" rel="noreferrer" className='bg-[#333438] flex items-center mr-5 p-2 rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                        <p className='pl-2'>LinkedIn</p>
                    </a>
                    <a href='https://drive.google.com/file/d/1RiooLzeBUX9_6rL8NuAi-Xmw_7P11KAN/view?usp=sharing' target="_blank" rel="noreferrer" className='bg-[#333438] flex items-center mr-5 p-2 rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                        <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
                        <p className='pl-2'>My Resume</p>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Header;