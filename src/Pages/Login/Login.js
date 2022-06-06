import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import auth from '../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';
import Footer from '../Shared/Footer';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [error, setError] = useState({})
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);

    const [token] = useToken(gUser || fUser)

    useEffect(() => {
        if (token) {
            navigate("/dashboard");
        }
    }, [token, navigate])

    if (gLoading || fLoading) {
        <Loading></Loading>
    }
    const handleGoogleSignin = () => {
        signInWithGoogle();

        if (gError) {
            setError(gError);
        }
    }
    const handleFacebookSignin = () => {
        signInWithFacebook();

        if (fError) {
            setError(fError);
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
                        <button onClick={handleFacebookSignin} className='flex items-center bg-[#57c78E] text-white rounded-md p-2 hover:bg-transparent hover:text-[#57c78e] transition-all duration-300 ease-in-out'>
                            <p>Continue with Facebook
                                <FontAwesomeIcon className='pl-2' icon={faFacebook}></FontAwesomeIcon></p>
                        </button>
                    </div>
                </div>
                {error && <p>{error.message}</p>}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;