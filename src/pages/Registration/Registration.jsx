import React, { useContext, useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import useLoginWithGoogle from '../../hooks/useLoginWithGoogle';
import { TutorContext } from '../../contextApi/TutorContext';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Registration = () => {

    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // get some context method from TutorContext
    const { newUserRegistration, setUser } = useContext(TutorContext)
    // Individual validation states
    const [hasMinLength, setHasMinLength] = useState(false);
    const [hasUpperCase, setHasUpperCase] = useState(false);
    const [hasLowerCase, setHasLowerCase] = useState(false);

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        // Update individual validation states
        setHasMinLength(value.length >= 6);
        setHasUpperCase(/[A-Z]/.test(value));
        setHasLowerCase(/[a-z]/.test(value));
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    // login with google handle method with custom hook
    const { handleLoginWithGoogle } = useLoginWithGoogle();

    // find user location and navigate user demand page
    const location = useLocation()
    const navigate = useNavigate()

    // new user register
    const handleUserRegister = e => {
        e.preventDefault()

        const form = e.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { name, photoURL, email, password }
        console.log(user)

        // send user email and password to firebase to create new user
        newUserRegistration(email, password)
            .then(result => {
                console.log(result)
                setUser(result.user)
                Swal.fire({
                    title: "Your registration is successful!",
                    icon: "success",
                    draggable: true
                });
                // navigate user demand path
                navigate(location?.state ? location.state : '/');

            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Check your credential again",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

        // send data into database
        axios.post('https://server-side-sable-sigma.vercel.app/registerUsers', {
            name,
            photoURL,
            email
        })
            .then(res => {
                console.log(res.data)

            })
            .catch(error => {
                console.error('Error:', error);

            });

    }

  
    return (
        <>

            <Helmet >
                <title>TutorTrack || Registration</title>
            </Helmet>

            <section className='px-4 xl:px-0'>
                <div className='max-w-xl mx-auto mt-6 border-[1px] border-pink-700 p-2 rounded-md'>
                    <h2 className='text-2xl lg:text-4xl font-bold text-center mb-4'>Sign Up</h2>
                    <div>
                        <form onSubmit={handleUserRegister}>
                            {/* user name */}
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Your name: </span>
                                    </div>
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder="Your name here.."
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>

                            {/* user photo URL */}
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Photo URL: </span>
                                    </div>
                                    <input
                                        type="text"
                                        name='photoURL'
                                        placeholder="Photo URL.."
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>

                            {/* user email */}
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Your Email: </span>
                                    </div>
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder="Your email here.."
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>

                            {/* user password */}
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Your Password: </span>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type={isPasswordVisible ? 'text' : 'password'}
                                            name='password'
                                            placeholder="Type password here.."
                                            className={`input input-bordered w-full ${hasMinLength && hasUpperCase && hasLowerCase ? 'border-green-500' : 'border-red-500'}`}
                                            value={password}
                                            onChange={handlePasswordChange}
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="absolute top-2/4 right-2 transform -translate-y-2/4"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <p className={`${hasMinLength ? 'text-green-500' : 'text-red-500'} text-sm`}>
                                            - At least 6 characters
                                        </p>
                                        <p className={`${hasUpperCase ? 'text-green-500' : 'text-red-500'} text-sm`}>
                                            - At least one uppercase letter
                                        </p>
                                        <p className={`${hasLowerCase ? 'text-green-500' : 'text-red-500'} text-sm`}>
                                            - At least one lowercase letter
                                        </p>
                                    </div>
                                </label>
                            </div>

                            {/* submit button */}
                            <div className='mt-2'>
                                <button
                                    type='submit'
                                    className='btn w-full bg-pink-700 hover:bg-pink-900 text-xl text-white'
                                >
                                    Register
                                </button>
                            </div>
                        </form>

                        {/* i have an account */}
                        <div>
                            <p className='text-center mt-2'>
                                I have an account?{' '}
                                <Link to={'/login'} className='hover:underline'>Log in</Link>
                            </p>
                        </div>

                        {/* divider */}
                        <div className='mt-4'>
                            <div className="flex w-full flex-col">
                                <div className="divider">other's login method</div>
                            </div>
                        </div>

                        {/* sign in with google account */}
                        <div className='mt-3'>
                            <Link onClick={() => { handleLoginWithGoogle() }} className='flex items-center gap-1 btn bg-slate-800 text-white hover:bg-slate-700'>
                                <FaGoogle className='text-2xl' /> Log in with Google Account
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Registration;
