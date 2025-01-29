import React, { useContext } from 'react'
import { FaGraduationCap, FaRegHeart, FaStar, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TutorContext } from '../../contextApi/TutorContext'

const TeachersCard1 = ({ tutorData }) => {
    // console.log(tutorData)

    const { theme } = useContext(TutorContext)

    return (
        <>

            <div className=' lg:grid lg:grid-cols-3 w-full gap-4 border-2 p-2 overflow-hidden py-4'>

                <div className="indicator ">
                    <span className="indicator-item badge bg-green-400"></span>
                    <div className="bg-base-300 grid h-32 w-32 place-items-center">

                        <img className='w-full h-32 object-cover rounded-md' src={tutorData?.image} alt="teacher-img" />

                    </div>
                </div>


                <div className='flex flex-col flex-grow my-2 md:my-0'>
                    <h2 className='text-3xl lg:text-xl font-semibold'>{tutorData?.name}</h2>
                    <p className='text-lg my-1'>Super Tutor</p>
                    <p className='flex items-center gap-2'><FaGraduationCap ></FaGraduationCap>{tutorData?.language}</p>
                    <p className='flex items-center gap-2'><FaUser ></FaUser> <span>53</span>Active User</p>
                </div>

                <div >
                    <div className='flex items-center gap-5'>
                        <div>
                            <span className='flex items-center gap-2'><FaStar ></FaStar> <span className='text-2xl font-bold'>5</span></span>
                            <p className='text-sm font-light'><span>{tutorData?.review}</span> reviews</p>
                        </div>

                        <div>
                            <span className='flex items-center gap-2'><span className='text-2xl font-bold'>$</span><span className='text-2xl font-bold'>{tutorData?.price}</span></span>
                            <p className='text-sm font-light'><span>50</span> min-per-lesson</p>
                        </div>

                        {/* <div>
                            <Link > <FaRegHeart className='text-3xl'></FaRegHeart></Link>
                        </div> */}

                    </div>

                    <div className='mt-2'>
                        <Link to={`/tutor/details/${tutorData?._id}`} className={`btn bg-black text-white hover:bg-pink-600 w-full lg:w-40 ${theme === 'dark' ? 'bg-pink-700 hover:bg-slate-600 hover:text-white' : ''}`}>Details</Link>
                    </div>


                </div>

            </div>



        </>
    )
}

export default TeachersCard1
