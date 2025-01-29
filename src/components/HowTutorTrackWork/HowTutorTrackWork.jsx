import React from 'react'
import { FaGraduationCap, FaLanguage, FaStar } from 'react-icons/fa'

const HowTutorTrackWork = () => {
    return (
        <>
            <section className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-2 xl:px-0 lg:grid-cols-3 gap-6 pb-5'>

                {/* card no 1 */}
                <div className='border-[1px] border-black p-4 rounded-lg '>
                    <h3 className='lg:text-3xl font-bold bg-[#7BEAD6] px-4 py-2 w-[45px] rounded-lg'>1</h3>
                    <h2 className='lg:text-4xl font-bold my-3'>Find Your Tutor.</h2>
                    <p>We'll connect you with a tutor who will motivate, challenge, and inspire you.</p>

                    <div className='flex items-center gap-4 border-[1px] border-black px-4 py-4 rounded-lg mt-5'>
                        <div>
                            <img className='w-[85px]' src="https://i.imgur.com/c0hTClU.jpeg" alt="photo1" />
                        </div>
                        <div className='w-full space-y-1'>
                            <h2 className='flex items-center justify-between'><span className='text-2xl font-semibold'>Milena</span> <span className='flex items-center gap-2'><FaStar ></FaStar><span className='text-xl font-bold'>4.9</span></span></h2>
                            <p className='flex items-center gap-2 font-extralight'><FaGraduationCap ></FaGraduationCap> French Tutor</p>
                            <p className='flex items-center gap-2 font-extralight'><FaLanguage ></FaLanguage> Speaks France and English</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 border-[1px] border-black px-4 py-4 rounded-lg mt-3'>
                            <div>
                                <img className='w-[85px]' src="https://i.imgur.com/wE0GG4o.jpeg" alt="photo1" />
                            </div>
                            <div className='w-full space-y-1'>
                                <h2 className='flex items-center justify-between'><span className='text-2xl font-semibold'>Devid</span> <span className='flex items-center gap-2'><FaStar ></FaStar><span className='text-xl font-bold'>4.9</span></span></h2>
                                <p className='flex items-center gap-2 font-extralight'><FaGraduationCap ></FaGraduationCap>American Tutor</p>
                                <p className='flex items-center gap-2 font-extralight'><FaLanguage ></FaLanguage> Speaks American (Native) and English</p>
                            </div>
                        </div>

                  

                </div>

                {/* card no 2 */}
                <div className='border-[1px] border-black p-4 rounded-md'>
                    <h3 className='lg:text-3xl font-bold bg-[#FFE03D] px-4 py-2 w-[45px] rounded-lg'>2</h3>
                    <h2 className='lg:text-4xl font-bold my-3'>Start Learning.</h2>
                    <p>Your tutor will guide the way through your first lesson and help you plan your next steps.</p>

                    <div>
                        <img className='w-full h-[200px] md:h-[320px] p-4' src="https://i.imgur.com/dzdwCuW.jpeg" alt="photo1" />
                    </div>

                </div>

                {/* card no 3 */}
                <div className='border-[1px] border-black p-4 rounded-md'>
                    <h3 className='lg:text-3xl font-bold bg-[#2885FD] px-4 py-2 w-[45px] rounded-lg'>3</h3>
                    <h2 className='lg:text-4xl font-bold my-3'>Speak. Read. Write. Repeat.</h2>
                    <p>Choose how many lessons you want to take each week and get ready to reach your goals!</p>


                    <div className='w-full'>
                        <img className='w-full h-[200px] md:h-[320px] p-4' src="https://i.imgur.com/oNd0JQ1.jpeg" alt="photo1" />
                    </div>



                </div>

            </section>
        </>
    )
}

export default HowTutorTrackWork
