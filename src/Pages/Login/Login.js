import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user, navigate])

    if (loading) {
        <Loading></Loading>
    }
    const handleGoogleSignin = () => {
        signInWithGoogle();

        if (error) {
            console.log(error);
        }
    }

    return (
        <div className='bg-[#2D2E32]'>
            <div className='min-h-[90vh] flex justify-center items-center'>
                <div class="card w-full max-w-sm bg-[#25262A] shadow-md shadow-[#57c78e]">
                    <div class="card-body">
                        <button onClick={handleGoogleSignin} className='flex items-center bg-[#57c78E] text-white rounded-md p-2 hover:bg-transparent hover:text-[#57c78e] transition-all duration-300 ease-in-out'>
                            <p>Continue with Google
                                <FontAwesomeIcon className='pl-2' icon={faGoogle}></FontAwesomeIcon></p>
                        </button>
                        <div className='py-2 flex justify-center items-center'>
                            <hr className='h-px w-1/3 bg-[#57c78e] border-none' />
                            <span className='mx-3 text-[#57c78e]'>Or</span>
                            <hr className='h-px w-1/3 bg-[#57c78e] border-none' />
                        </div>
                        <button className='flex items-center bg-[#57c78E] text-white rounded-md p-2 hover:bg-transparent hover:text-[#57c78e] transition-all duration-300 ease-in-out'>
                            <p>Continue with Facebook
                                <FontAwesomeIcon className='pl-2' icon={faFacebook}></FontAwesomeIcon></p>
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;