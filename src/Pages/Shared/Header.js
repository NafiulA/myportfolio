import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div class="navbar bg-[#2D2E32] text-white fixed z-50">
            <div class="navbar-start">
                <Link class="p-5 text-xl" to='/'>Nafiul Alam</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="flex gap-5 text-sm p-0">
                    <li className='hoverStyle'><Link to="/home#aboutme">About Me</Link></li>
                    <li className='hoverStyle'><Link to="/home#services">Services</Link></li>
                    <li className='hoverStyle'><Link to="/home#projects">Projects</Link></li>
                    <li className='hoverStyle'><Link to="/home#blogs">Blogs</Link></li>
                    <li className='hoverStyle'><Link to="/home#contact">Contact</Link></li>
                </ul>
            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content text-sm mt-3 p-2 shadow bg-[#2D2E32] rounded-box w-52">
                        <li className='hoverStyle'><Link to="/home#aboutme">About Me</Link></li>
                        <li className='hoverStyle'><Link to="/home#services">Services</Link></li>
                        <li className='hoverStyle'><Link to="/home#projects">Projects</Link></li>
                        <li className='hoverStyle'><Link to="/home#blogs">Blogs</Link></li>
                        <li className='hoverStyle'><Link to="/home#contact">Contact</Link></li>
                        <hr className='mx-4 my-3 bg-[#57C78E] border-none h-[2px]' />
                        <div>
                            <button className='bg-[#333438] flex items-center ml-4 mb-2 p-2 rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                <p className='pl-2'>Github</p>
                            </button>
                            <button className='bg-[#333438] flex items-center ml-4 mb-2 p-2 rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                                <p className='pl-2'>LinkedIn</p>
                            </button>
                            <button className='bg-[#333438] flex items-center ml-4 mb-2 p-2 rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                                <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
                                <p className='pl-2'>My Resume</p>
                            </button>
                        </div>

                    </ul>
                </div>
                <div className='hidden lg:flex text-xs'>
                    <button className='bg-[#333438] flex items-center mr-5 p-2 rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        <p className='pl-2'>Github</p>
                    </button>
                    <button className='bg-[#333438] flex items-center mr-5 p-2 rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                        <p className='pl-2'>LinkedIn</p>
                    </button>
                    <button className='bg-[#333438] flex items-center mr-5 p-2 rounded hover:bg-[#2D2E32] hover:text-[#57C78E] transition-all duration-500 ease-in-out'>
                        <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
                        <p className='pl-2'>My Resume</p>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Header;