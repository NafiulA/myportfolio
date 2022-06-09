import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    const handleLogout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    }
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-[#16191E]">
                    <div className='flex justify-between p-5'>
                        <h3 className='text-2xl text-white'>Welcome to your Dashboard</h3>
                        <div>
                            <label for="my-drawer-2" className=" p-2 bg-[#57c78E] rounded-full lg:hidden">
                                <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
                            </label>
                        </div>
                    </div>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-hidden w-60 bg-[#25262A] text-white">

                        {!admin && <>
                            <li className='bg-[#57c78e] rounded-full my-2'><Link to="/dashboard">Add Testimony</Link></li>
                            <li className='bg-[#57c78e] rounded-full my-2'><Link to="/dashboard/mytestimonies">My Testimonies</Link></li>
                        </>}
                        {admin && <li className='bg-[#57c78e] rounded-full my-2'><Link to="/dashboard/alltestimonials">All Testimonials</Link></li>}
                        <li className='bg-[#57c78e] rounded-full my-2'><button className='flex justify-between' onClick={handleLogout}>
                            <p>Log Out</p>
                            <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon></button></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;