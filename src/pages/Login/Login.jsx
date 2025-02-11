

import React, { useContext, useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useLoginWithGoogle from '../../hooks/useLoginWithGoogle';
import { TutorContext } from '../../contextApi/TutorContext';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { HiOutlineLightBulb } from "react-icons/hi";

const Login = () => {
    // Login with Google
    const { handleLoginWithGoogle } = useLoginWithGoogle();
    // Get context method from TutorContext
    const { registerUserLogin, setUser } = useContext(TutorContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    // Find user location
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegisterUserLogin = (e) => {
        e.preventDefault();

        // Login user check credentials from Firebase
        registerUserLogin(email, password)
            .then((result) => {
                Swal.fire({
                    title: "Login Successful!",
                    icon: "success",
                    draggable: true
                });
                setUser(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Check your email and password again!",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    // Autofill credentials on button click
    const autofillCredentials = () => {
        setEmail("rejaul.admin@gmail.com");
        setPassword("AdminPass");
    };

    return (
        <>
            <Helmet>
                <title>TutorTrack || Login Page</title>
            </Helmet>

            <section className='px-4 xl:px-0 md:min-h-screen'>
                <div className='max-w-xl mx-auto mt-6 border-[1px] border-[#B2A5FF] p-2 rounded-md'>
                    <h2 className='lg:text-4xl font-bold text-center m2-4'>Welcome Back</h2>

                    <div className='flex justify-between mr-6'>
                        <p></p>
                        {/* Click Me button */}
                        <button onClick={autofillCredentials} className="btn bg-[#B2A5FF] text-white  rounded flex items-center justify-center hover:bg-[#493D9E]">Hint <HiOutlineLightBulb className='text-xl'/></button>
                    </div>

                    <div>
                        <form onSubmit={handleRegisterUserLogin}>
                            {/* User email */}
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Your Email: </span>
                                    </div>
                                    <input
                                        type="email"
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email here.."
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>

                            {/* User password */}
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Your Password: </span>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type={isPasswordVisible ? 'text' : 'password'}
                                            placeholder="Type password here.."
                                            className="input input-bordered w-full"
                                            value={password}
                                            name='password'
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-2/4 right-2 transform -translate-y-2/4"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </label>
                            </div>

                            {/* Submit button */}
                            <div className='mt-2'>
                                <button
                                    type='submit'
                                    className='btn w-full bg-gradient-to-r from-[#493D9E] to-[#B2A5FF] text-xl text-white'>
                                    Log in
                                </button>
                            </div>
                        </form>

                        {/* I have an account */}
                        <div>
                            <p className='text-center mt-2'>
                                I don't have an account? <Link to={'/register'} className='hover:underline'>Register</Link>
                            </p>
                        </div>

                        {/* Divider */}
                        <div className='mt-4'>
                            <div className="flex w-full flex-col">
                                <div className="divider">other's login method</div>
                            </div>
                        </div>

                        {/* Sign in with Google */}
                        <div className='mt-3'>
                            <Link onClick={handleLoginWithGoogle} className='flex items-center gap-1 btn bg-[#493D9E] text-white hover:bg-slate-700'>
                                <FaGoogle className='text-2xl' /> Log in with Google Account
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
