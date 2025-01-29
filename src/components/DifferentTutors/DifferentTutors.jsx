import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { FaCompassDrafting } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const DifferentTutors = () => {
    return (
        <>
            <section className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 px-2 xl:px-0'>

                <Link to={`/find-tutors/${"English"}`} className='flex items-center gap-4 w-full border-2 p-6 rounded-md'>
                    <span>
                        <FaCompassDrafting className='text-3xl'></FaCompassDrafting>
                    </span>
                    <div className='w-full flex items-center justify-between '>
                        <div className='space-y-1'>
                            <h2 className='lg:text-2xl font-bold'>English Tutors</h2>
                            <p className='text-lg font-light'>27850 teachers</p>
                        </div>
                        <span className='text-end'><FaAngleRight className='text-3xl'></FaAngleRight></span>
                    </div>
                </Link>

                <Link to={`/find-tutors/${"Spanish"}`} className='flex items-center gap-4 w-full border-2 p-6 rounded-md'>
                    <span>
                        <FaCompassDrafting className='text-3xl'></FaCompassDrafting>
                    </span>
                    <div className='w-full flex items-center justify-between '>
                        <div className='space-y-1'>
                            <h2 className='lg:text-2xl font-bold'>Spanish Tutors</h2>
                            <p className='text-lg font-light'>2850 teachers</p>
                        </div>
                        <span className='text-end'><FaAngleRight className='text-3xl'></FaAngleRight></span>
                    </div>
                </Link>

                <Link to={`/find-tutors/${"French"}`} className='flex items-center gap-4 w-full border-2 p-6 rounded-md'>
                    <span>
                        <FaCompassDrafting className='text-3xl'></FaCompassDrafting>
                    </span>
                    <div className='w-full flex items-center justify-between '>
                        <div className='space-y-1'>
                            <h2 className='lg:text-2xl font-bold'>French Tutors</h2>
                            <p className='text-lg font-light'>2750 teachers</p>
                        </div>
                        <span className='text-end'><FaAngleRight className='text-3xl'></FaAngleRight></span>
                    </div>
                </Link>

                <Link to={`/find-tutors/${"German"}`} className='flex items-center gap-4 w-full border-2 p-6 rounded-md'>
                    <span>
                        <FaCompassDrafting className='text-3xl'></FaCompassDrafting>
                    </span>
                    <div className='w-full flex items-center justify-between '>
                        <div className='space-y-1'>
                            <h2 className='lg:text-2xl font-bold'>German Tutors</h2>
                            <p className='text-lg font-light'>7850 teachers</p>
                        </div>
                        <span className='text-end'><FaAngleRight className='text-3xl'></FaAngleRight></span>
                    </div>
                </Link>

                <Link to={`/find-tutors/${"Italian"}`} className='flex items-center gap-4 w-full border-2 p-6 rounded-md'>
                    <span>
                        <FaCompassDrafting className='text-3xl'></FaCompassDrafting>
                    </span>
                    <div className='w-full flex items-center justify-between '>
                        <div className='space-y-1'>
                            <h2 className='lg:text-2xl font-bold'>Italian Tutors</h2>
                            <p className='text-lg font-light'>27850 teachers</p>
                        </div>
                        <span className='text-end'><FaAngleRight className='text-3xl'></FaAngleRight></span>
                    </div>
                </Link>

                <Link to={`/find-tutors/${"Chinese"}`} className='flex items-center gap-4 w-full border-2 p-6 rounded-md'>
                    <span>
                        <FaCompassDrafting className='text-3xl'></FaCompassDrafting>
                    </span>
                    <div className='w-full flex items-center justify-between '>
                        <div className='space-y-1'>
                            <h2 className='lg:text-2xl font-bold'>Chinese Tutors</h2>
                            <p className='text-lg font-light'>27850 teachers</p>
                        </div>
                        <span className='text-end'><FaAngleRight className='text-3xl'></FaAngleRight></span>
                    </div>
                </Link>

                <Link to={`/find-tutors/${"Arabic"}`} className='flex items-center gap-4 w-full border-2 p-6 rounded-md'>
                    <span>
                        <FaCompassDrafting className='text-3xl'></FaCompassDrafting>
                    </span>
                    <div className='w-full flex items-center justify-between '>
                        <div className='space-y-1'>
                            <h2 className='lg:text-2xl font-bold'>Arabic Tutors</h2>
                            <p className='text-lg font-light'>27850 teachers</p>
                        </div>
                        <span className='text-end'><FaAngleRight className='text-3xl'></FaAngleRight></span>
                    </div>
                </Link>

                <Link to={`/find-tutors/${"Japanese"}`} className='flex items-center gap-4 w-full border-2 p-6 rounded-md'>
                    <span>
                        <FaCompassDrafting className='text-3xl'></FaCompassDrafting>
                    </span>
                    <div className='w-full flex items-center justify-between '>
                        <div className='space-y-1'>
                            <h2 className='lg:text-2xl font-bold'>Japanese Tutors</h2>
                            <p className='text-lg font-light'>2785 teachers</p>
                        </div>
                        <span className='text-end'><FaAngleRight className='text-3xl'></FaAngleRight></span>
                    </div>
                </Link>

                <Link to={`/find-tutors/${"Portuguese"}`} className='flex items-center gap-4 w-full border-2 p-6 rounded-md'>
                    <span>
                        <FaCompassDrafting className='text-3xl'></FaCompassDrafting>
                    </span>
                    <div className='w-full flex items-center justify-between '>
                        <div className='space-y-1'>
                            <h2 className='lg:text-2xl font-bold'>Portuguese Tutors</h2>
                            <p className='text-lg font-light'>27850 teachers</p>
                        </div>
                        <span className='text-end'><FaAngleRight className='text-3xl'></FaAngleRight></span>
                    </div>
                </Link>



            </section>
        </>
    )
}

export default DifferentTutors
