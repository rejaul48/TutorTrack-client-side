
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TutorContext } from '../../contextApi/TutorContext';
import axios from 'axios';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FaArrowRightToBracket } from 'react-icons/fa6';

const Header = () => {
    const { user, userLogOut, theme } = useContext(TutorContext);
    const [registerUser, setRegisterUser] = useState([]);
    const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://server-side-sable-sigma.vercel.app/register-user/${user?.email}`)
                .then(res => {
                    setRegisterUser(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [user?.email]);

    // Toggle Admin Dropdown
    const toggleAdminMenu = () => {
        setIsAdminMenuOpen(!isAdminMenuOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.admin-dropdown')) {
                setIsAdminMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const links = <>
        <li>
            <NavLink to="/" className={({ isActive }) =>
                `btn border-transparent text-sm shadow-none rounded-md ${isActive
                    ? 'border-b-4 border-b-[#B2A5FF] text-black bg-transparent'
                    : 'bg-transparent text-black border-b-2 border-transparent'
                } hover:border-b-2 hover:border-b-[#B2A5FF] hover:bg-transparent`
            }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/find-tutors" className={({ isActive }) =>
                `btn border-transparent text-sm shadow-none rounded-md ${isActive
                    ? 'border-b-4 border-b-[#B2A5FF] text-black bg-transparent'
                    : 'bg-transparent text-black border-b-2 border-transparent'
                } hover:border-b-2 hover:border-b-[#B2A5FF] hover:bg-transparent`
            }>
                Find Tutors
            </NavLink>
        </li>

        <li>
            <NavLink to="/contact-us" className={({ isActive }) =>
                `btn border-transparent text-sm shadow-none rounded-md ${isActive
                    ? 'border-b-4 border-b-[#B2A5FF] text-black bg-transparent'
                    : 'bg-transparent text-black border-b-2 border-transparent'
                } hover:border-b-2 hover:border-b-[#B2A5FF] hover:bg-transparent`
            }>
                Contact Us
            </NavLink>
        </li>

        {user && (
            <div className="relative admin-dropdown text-center">
                <button
                    onClick={toggleAdminMenu}
                    className="btn border-transparent bg-transparent text-black hover:bg-transparent hover:border-transparent"
                >
                    Admin Routes
                </button>
                {isAdminMenuOpen && (
                    <ul className="absolute -right-48 md:-right-52 top-8 lg:top-12 lg:left-12 md:-top-1 mt-2 w-52 bg-[#F2F6FD] rounded-md p-2 shadow">
                        <li>
                            <NavLink to="/add-tutorials" className={({ isActive }) =>
                                `btn border-transparent text-sm shadow-none rounded-md ${isActive
                                    ? 'border-b-4 border-b-[#B2A5FF] text-black bg-transparent'
                                    : 'bg-transparent text-black border-b-2 border-transparent'
                                } hover:border-b-2 hover:border-b-[#B2A5FF] hover:bg-transparent`
                            }>
                                Add Tutorials
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-tutorials" className={({ isActive }) =>
                                `btn border-transparent text-sm shadow-none rounded-md ${isActive
                                    ? 'border-b-4 border-b-[#B2A5FF] text-black bg-transparent'
                                    : 'bg-transparent text-black border-b-2 border-transparent'
                                } hover:border-b-2 hover:border-b-[#B2A5FF] hover:bg-transparent`
                            }>
                                My Tutorials
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/myBooked-tutors" className={({ isActive }) =>
                                `btn border-transparent text-sm shadow-none rounded-md ${isActive
                                    ? 'border-b-4 border-b-[#B2A5FF] text-black bg-transparent'
                                    : 'bg-transparent text-black border-b-2 border-transparent'
                                } hover:border-b-2 hover:border-b-[#B2A5FF] hover:bg-transparent`
                            }>
                                My Booked Tutors
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        )}


    </>;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center md:hidden mt-2">
                <Link to="/" className={`text-2xl lg:text-4xl font-bold ${theme === 'dark' ? 'text-[#B2A5FF]' : 'text-[#B2A5FF]'}`}>TutorTrack</Link>
            </div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#493D9E] to-[#B2A5FF] bg-clip-text text-transparent hidden md:block">TutorTrack</Link>
                </div>
                <div className="navbar-center hidden lg:flex items-center justify-center">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <ThemeToggle />

                    {user && (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User Profile" src={user?.photoURL || registerUser?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-8 w-40 p-2 shadow absolute top-8 -left-12">
                                <li className="pointer-events-none">
                                    <p>{user?.displayName || registerUser?.name}</p>
                                </li>
                            </ul>
                        </div>
                    )}

                    {user?.email ? (
                        <Link onClick={userLogOut} className="btn bg-transparent border-[#9285E1] shadow-lg hover:bg-transparent text-black">
                            <FaArrowRightToBracket /> Logout
                        </Link>
                    ) : (
                        <Link to="/login" className="btn bg-transparent border-[#9285E1] shadow-lg hover:bg-transparent text-black">
                            <FaArrowRightToBracket /> Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
