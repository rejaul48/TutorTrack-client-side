import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TutorContext } from '../../contextApi/TutorContext'

const BecomeATeacher = () => {

    //get theme state
    const { theme } = useState(TutorContext)

    return (
        <>

            <section className='max-w-7xl mx-auto md:flex md:h-[600px] mt-24 border-2 border-black mb-24 '>

                <div className='md:w-6/12 h-[280px] md:h-full'>
                    <img className='w-full h-full' src="https://i.imgur.com/QKgIdJ6.jpeg" alt="become-a-tutor-img" />
                </div>

                <div className={`md:w-6/12 p-8 bg-[#3DDABE] text-black`}>
                    <h2 className='lg:text-8xl font-semibold'>Become a tutor</h2>
                    <p className='text-lg my-4'>Earn money sharing your expert knowledge with students. Sign up to start tutoring online with Preply.</p>
                    <ul className='list-disc ml-6'>
                        <li className='text-lg md:text-2xl font-semibold'>Find new students</li>
                        <li className='text-lg md:text-2xl font-semibold'>Grow your business</li>
                        <li className='text-lg md:text-2xl font-semibold'>Get paid securely</li>
                    </ul>


                    <Link className='btn bg-black text-white w-full mt-5 text-sm border-none'>Become a Tutor <FaArrowRight ></FaArrowRight></Link>

                </div>

            </section>

        </>
    )
}

export default BecomeATeacher
