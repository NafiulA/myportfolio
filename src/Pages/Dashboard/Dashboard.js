import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col bg-[#2D2E32] border-t-2 border-[#57c78e]">
                    <div className='flex justify-between p-5'>
                        <h3 className='text-2xl text-white'>Welcome to your Dashboard</h3>
                        <div>
                            <label for="my-drawer-2" class=" p-2 bg-[#57c78E] rounded-full lg:hidden">
                                <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
                            </label>
                        </div>
                    </div>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-hidden w-60 bg-[#25262A] text-white">

                        <li className='bg-[#57c78e] rounded-full my-2'><Link to="/addtestimony">Add Testimony</Link></li>
                        <li className='bg-[#57c78e] rounded-full my-2'><Link to="/mytestimonies">My Testimonies</Link></li>
                        <li className='bg-[#57c78e] rounded-full my-2'><Link to="/alltestimonials">All Testimonials</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;