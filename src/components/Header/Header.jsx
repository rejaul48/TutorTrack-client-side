import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TutorContext } from '../../contextApi/TutorContext'
import axios from 'axios'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Header = () => {

    const { user, userLogOut, theme } = useContext(TutorContext)
    // get current register user data
    const [registerUser, setRegisterUser] = useState([])

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://server-side-sable-sigma.vercel.app/register-user/${user?.email}`)
                .then(res => {
                    setRegisterUser(res.data)
                })
                .catch(err => console.log(err))
        }
    }, [user?.email])

    const links = <>

        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `btn border-none shadow-none rounded-md ${isActive ? 'bg-orange-400 text-white' : 'bg-transparent text-black'} hover:bg-black hover:bg-opacity-45 hover:text-white`
                }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/find-tutors"
                className={({ isActive }) =>
                    `btn border-none shadow-none rounded-md ${isActive ? 'bg-orange-400 text-white' : 'bg-transparent text-black'} hover:bg-black hover:bg-opacity-45 hover:text-white`
                }>
                Find Tutors
            </NavLink>
        </li>

        {
            user &&
            <div className='lg:flex items-center'>
                <li>
                    <NavLink
                        to="/add-tutorials"
                        className={({ isActive }) =>
                            `btn border-none shadow-none rounded-md ${isActive ? 'bg-orange-400 text-white' : 'bg-transparent text-black'} hover:bg-black hover:bg-opacity-45 hover:text-white`
                        }>
                        Add Tutorials
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-tutorials"
                        className={({ isActive }) =>
                            `btn border-none shadow-none rounded-md ${isActive ? 'bg-orange-400 text-white' : 'bg-transparent text-black'} hover:bg-black hover:bg-opacity-45 hover:text-white`
                        }>
                        My Tutorials
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/myBooked-tutors"
                        className={({ isActive }) =>
                            `btn border-none shadow-none rounded-md ${isActive ? 'bg-orange-400 text-white' : 'bg-transparent text-black'} hover:bg-black hover:bg-opacity-45 hover:text-white`


                        }>
                        My Booked Tutors
                    </NavLink>
                </li>

            </div>
        }



    </>

    return (
        <>

            <div className='max-w-7xl mx-auto' >
                <div className='text-center md:hidden'>
                    <Link to={'/'} className={`text-2xl lg:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>TutorTrack</Link>
                </div>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <Link to={'/'} className={`text-2xl lg:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} hidden md:block`}>TutorTrack</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1  ">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end gap-3 ">

                        <div>
                            <ThemeToggle ></ThemeToggle>
                        </div>

                        {
                            user &&
                            <div className="dropdown dropdown-end  ">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full ">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL || registerUser?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-8 w-40  p-2 shadow 
                            absolute top-8 -left-12  
                            ">
                                    <li className='pointer-events-none'>
                                        <p>{user?.displayName || registerUser?.name}</p>
                                    </li>

                                </ul>
                            </div>
                        }
                        {
                            user?.email ? <Link onClick={() => { userLogOut() }} className='btn px-3'>Logout</Link> : <Link to={'/login'} className='btn'>Login</Link>
                        }

                    </div>
                </div>
            </div>


        </>
    )
}

export default Header
