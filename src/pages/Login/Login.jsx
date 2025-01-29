import React, { useContext, useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useLoginWithGoogle from '../../hooks/useLoginWithGoogle';
import { TutorContext } from '../../contextApi/TutorContext';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';


const Login = () => {

    // login with google
    const { handleLoginWithGoogle } = useLoginWithGoogle();
    // get context method from TutorContext
    const { registerUserLogin, setUser } = useContext(TutorContext)

    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    // find user location
    const location = useLocation()
    const navigate = useNavigate()


    const handleRegisterUserLogin = e => {
        // stop default behavior
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        const login = { email, password }
        console.log(login)

        // login user check credential from firebase
        registerUserLogin(email, password)
            .then(result => {
                console.log(result)
                Swal.fire({
                    title: "Login Successful!",
                    icon: "success",
                    draggable: true
                });
                setUser(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Check your email and password again!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })


    }


    return (
        <>

            <Helmet >
                <title>TutorTrack || Login Page</title>
            </Helmet>

            <section className='px-4 xl:px-0'>
                <div className='max-w-xl mx-auto mt-6 border-[1px] border-pink-700 p-2 rounded-md'>
                    <h2 className='lg:text-4xl font-bold text-center m2-4'>Welcome Back</h2>
                    <p className='text-center text-2xl font-bold mb-4'>Login</p>
                    <div>
                        <form onSubmit={handleRegisterUserLogin}>

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

                            {/* submit button */}
                            <div className='mt-2'>
                                <button
                                    type='submit'
                                    className='btn w-full bg-pink-700 hover:bg-pink-900 text-xl text-white'>
                                    Log in
                                </button>
                            </div>
                        </form>

                        {/* i have an account */}
                        <div>
                            <p className='text-center mt-2'>
                                I don't have any account? <Link to={'/register'} className='hover:underline'>Register</Link>
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
                                <FaGoogle className='text-2xl'></FaGoogle> Log in with Google Account
                            </Link>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
};

export default Login;
