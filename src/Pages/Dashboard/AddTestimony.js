import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';


const AddTestimony = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    if (loading) {
        <Loading></Loading>
    }

    const onSubmit = data => {
        const body = {
            name: user.displayName,
            photo: user.photoURL,
            email: user.email,
            testimony: data.testimony
        }
        fetch("https://blooming-badlands-86390.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Testimony saved", { id: "testimony" });
                    reset();
                }
            })
    }

    return (
        <div className='p-5'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control max-w-sm my-5">
                        <label className="input-group input-group-vertical">
                            <span className='bg-[#25262A] text-gray-400'>Your Name</span>
                            <input type="text" disabled defaultValue={user.displayName} className="input disabled:border-0 disabled:bg-[#2D2E32] disabled:text-white" />
                        </label>
                    </div>
                    <div className="form-control max-w-sm my-5">
                        <label className="input-group input-group-vertical">
                            <span className='bg-[#25262A] text-gray-400'>Your Testimony</span>
                            <textarea {...register("testimony", {
                                required: "Please write your testimony"
                            })} type="text" className="textarea border-0 bg-[#2D2E32] text-white" />
                        </label>
                    </div>
                    {errors && <p className='text-red-500'>{errors?.testimony?.message}</p>}
                    <input type="submit" value="Save" className='w-28 p-2 rounded-full bg-[#57c78e]' />
                </form>
            </div>
        </div>
    );
};

export default AddTestimony;