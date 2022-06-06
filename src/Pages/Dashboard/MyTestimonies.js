import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MytestimoniesRow from './MytestimoniesRow';
import MyTestimonyDltModal from './MyTestimonyDltModal';

const MyTestimonies = () => {
    const [dltModal, setDltModal] = useState(false);
    const [user, loading] = useAuthState(auth);
    const { data: testimonies, isLoading, refetch } = useQuery("testimonies", () => fetch(`http://localhost:5000/reviews/${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()));
    if (loading || isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-5'>
            <div class="overflow-x-auto rounded-xl">
                <table class="border-collapse table-fixed w-full text-center">
                    <thead className='bg-[#2D2E32] text-gray-400'>
                        <tr>
                            <th className='w-16'>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Testimony</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonies.map((testimony, index) => <MytestimoniesRow key={testimony._id}
                            testimony={testimony} index={index} setDltModal={setDltModal}></MytestimoniesRow>)}
                    </tbody>
                </table>
            </div>
            {dltModal && <MyTestimonyDltModal setDltModal={setDltModal}></MyTestimonyDltModal>}
        </div>
    );
};

export default MyTestimonies;