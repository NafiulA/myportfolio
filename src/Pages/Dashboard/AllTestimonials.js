import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import MytestimoniesRow from './MytestimoniesRow';
import MyTestimonyDltModal from './MyTestimonyDltModal';

const AllTestimonials = () => {
    const [adminDltModal, setAdminDltModal] = useState(null);
    const { data: testimonies, isLoading, refetch } = useQuery("testimonies", () => fetch(`https://nafiulalam.onrender.com/reviews`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='p-5'>
            <div className="overflow-x-auto rounded-xl">
                <table className="border-collapse table-auto text-center lg:w-full">
                    <thead className='bg-[#2D2E32] text-gray-400'>
                        <tr>
                            <th className='w-16 px-4'>#</th>
                            <th className='px-4'>Name</th>
                            <th className='px-4'>Testimony</th>
                            <th className='px-4'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonies.map((testimony, index) => <MytestimoniesRow key={testimony._id}
                            testimony={testimony} index={index} setDltModal={setAdminDltModal}></MytestimoniesRow>)}
                    </tbody>
                </table>
            </div>
            {adminDltModal && <MyTestimonyDltModal dltModal={adminDltModal} setDltModal={setAdminDltModal} refetch={refetch}></MyTestimonyDltModal>}
        </div>
    );
};

export default AllTestimonials;