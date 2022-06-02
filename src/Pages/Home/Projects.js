import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faLink, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import manufacturehut from "../../assets/images/manufacturehut.png";
import stockpile from "../../assets/images/stockpile.png";
import gymwhale from "../../assets/images/gymwhale.png";

const Projects = () => {
    return (
        <div id='projects' className='bg-[#25262A] py-10'>
            <div className='min-h-screen w-full lg:w-4/5 mx-auto grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center items-center'>
                <div>
                    <p className='text-3xl text-white border-b py-2 my-16 border-[#57C78E]'>Latest Projects</p>
                </div>
                <div className='row-span-2 bg-[#2D3037] p-10 rounded-lg w-full'>
                    <div>
                        <div className='flex items-start lg:items-center justify-between gap-4 mb-3'>
                            <div className='flex items-center'>
                                <p className='mr-2 text-2xl text-white hover:text-[#57C78E] transition-all duration-300'>ManufactureHut</p>
                                <FontAwesomeIcon className='text-[#57C78E]' icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
                            </div>
                            <div className='flex flex-wrap'>
                                <span className='px-1 text-gray-300 text-xs bg-[#4E4D53] rounded mr-2 my-1'>ReactJS</span>
                                <span className='px-1 text-gray-300 text-xs bg-[#4E4D53] rounded mr-2 my-1'>NodeJS</span>
                                <span className='px-1 text-gray-300 text-xs bg-[#4E4D53] rounded mr-2 my-1'>ExpressJS</span>
                                <span className='px-1 text-gray-300 text-xs bg-[#4E4D53] rounded mr-2 my-1'>MongoDB</span>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <a className='px-2 rounded-full bg-slate-700 text-sm text-gray-400 mr-2 hover:text-[#57C78E] transition-all duration-300 ease-in-out' href='#s'><span className='mr-2'>Client Repo
                            </span>
                                <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                            </a>
                            <a className='px-2 rounded-full bg-slate-700 text-sm text-gray-400 mr-2 hover:text-[#57C78E] transition-all duration-300 ease-in-out' href='#s'><span className='mr-2'>Server Repo
                            </span>
                                <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                            </a>
                        </div>
                        <p className='text-sm text-gray-400 mb-10'>It's an manufacturer service provider website containing different dashboards for users and admins.</p>
                    </div>
                    <div className='w-full'>
                        <img className='rounded-lg' src={manufacturehut} alt="" />
                    </div>
                </div>
                <div className='row-span-2 bg-[#181B2C] p-10 rounded-lg w-full'>
                    <div>
                        <div className='flex items-start lg:items-center justify-between gap-4 mb-3'>
                            <div className='flex items-center'>
                                <p className='mr-2 text-2xl text-white hover:text-[#57C78E] transition-all duration-300'>Stockpile</p>
                                <FontAwesomeIcon className='text-[#57C78E]' icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
                            </div>
                            <div className='flex flex-wrap'>
                                <span className='px-1 text-gray-300 text-xs bg-[#4E4D53] rounded mr-2 my-1'>ReactJS</span>
                                <span className='px-1 text-gray-300 text-xs bg-[#4E4D53] rounded mr-2 my-1'>NodeJS</span>
                                <span className='px-1 text-gray-300 text-xs bg-[#4E4D53] rounded mr-2 my-1'>ExpressJS</span>
                                <span className='px-1 text-gray-300 text-xs bg-[#4E4D53] rounded mr-2 my-1'>MongoDB</span>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <a className='px-2 rounded-full bg-slate-700 text-sm text-gray-400 mr-2 hover:text-[#57C78E] transition-all duration-300 ease-in-out' href='#s'><span className='mr-2'>Client Repo
                            </span>
                                <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                            </a>
                            <a className='px-2 rounded-full bg-slate-700 text-sm text-gray-400 mr-2 hover:text-[#57C78E] transition-all duration-300 ease-in-out' href='#s'><span className='mr-2'>Server Repo
                            </span>
                                <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                            </a>
                        </div>
                        <p className='text-sm text-gray-400 mb-10'>It's an inventory management website where users keep track of their inventories and admin can manage all users and inventories.</p>
                    </div>
                    <div className='w-full'>
                        <img className='rounded-lg' src={stockpile} alt="" />
                    </div>
                </div>
                <div className='row-span-2 bg-[#16191E] p-10 rounded-lg w-full'>
                    <div>
                        <div className='flex items-start lg:items-center justify-between mb-3 gap-4'>
                            <div className='flex items-center'>
                                <p className='mr-2 text-2xl text-white hover:text-[#57C78E] transition-all duration-300'>Gymwhale</p>
                                <FontAwesomeIcon className='text-[#57C78E]' icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
                            </div>
                            <div className='flex flex-wrap'>
                                <span className='px-1 text-gray-300 text-xs bg-[#4E4D53] rounded mr-2 my-1'>HTML</span>
                                <span className='px-1 text-gray-300 text-xs bg-[#4E4D53] rounded mr-2 my-1'>Tailwind CSS</span>
                                <span className='px-1 text-gray-300 text-xs bg-[#4E4D53] rounded mr-2 my-1'>ReactJS</span>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <a className='px-2 rounded-full bg-slate-700 text-sm text-gray-400 mr-2 hover:text-[#57C78E] transition-all duration-300 ease-in-out' href='#s'><span className='mr-2'>Client Repo
                            </span>
                                <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                            </a>
                        </div>
                        <p className='text-sm text-gray-400 mb-10'>On this website an individual gym trainer provides his services to the world. People can book for a session from the website.</p>
                    </div>
                    <div className='w-full'>
                        <img className='rounded-lg' src={gymwhale} alt="" />
                    </div>
                </div>
                <div>
                    <button className='p-2 my-16 text-[#57C78E] bg-[#2D2E32] text-2xl rounded-md flex items-center hover:bg-[#16191E] hover:text-white transition-all duration-300 ease-in-out'>
                        <p className='mr-3'>Checkout More</p>
                        <FontAwesomeIcon icon={faUpRightFromSquare}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Projects;