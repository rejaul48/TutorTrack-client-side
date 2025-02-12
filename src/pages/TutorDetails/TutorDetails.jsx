import React, { useContext } from 'react'
import { FaLanguage, FaStar, FaUser, FaVideo } from 'react-icons/fa'
import { Link, useLoaderData } from 'react-router-dom'
import { TutorContext } from '../../contextApi/TutorContext'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const TutorDetails = () => {

    // get current user information
    const { user } = useContext(TutorContext)

    const detailsData = useLoaderData()
    // console.log(detailsData)
    const axiosSecure = useAxiosSecure()

    const handleBookedTutor = () => {
        const name = detailsData?.name;
        const tutorId = detailsData?._id;
        const image = detailsData?.image;
        const language = detailsData?.language;
        const price = detailsData?.price;
        const tutorEmail = detailsData?.email;
        const email = user?.email;
        const review = detailsData?.review;

        const bookedTutor = { name, tutorId, image, language, price, tutorEmail, email, review }
        console.log(bookedTutor)

        // send booked tutor data into database
        // axios.post(`https://server-side-sable-sigma.vercel.app/booked-tutors`, bookedTutor)
        axiosSecure.post(`booked-tutors`,bookedTutor)
            .then(res => {
                console.log(res)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Tutor booking successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }

    return (
        <>

            <Helmet >
                <title>TutorTrack || Find Tutor-Details</title>
            </Helmet>

            <section className='max-w-7xl mx-auto mt-8 px-4 xl:px-0'>
                <div className='md:flex gap-6'>
                    {/* teacher img here */}
                    <div className='md:w-5/12'>
                        <img className='h-[280px] md:h-[500px] w-full object-fill rounded-md' src={detailsData?.image} alt="teachers img" />
                    </div>

                    {/* teacher others information here */}
                    <div className='md:w-7/12 mt-4 md:mt-0'>
                        <h2 className='text-4xl lg:text-4xl font-bold'>{detailsData?.name}</h2>
                        <p>Super Tutor</p>
                        <p className='text-lg lg:text-lg my-1'>Origin-language: {detailsData?.language}</p>
                        <h2 className='text-2xl bg-[#B2A5FF] w-6/12 md:4/12 xl:w-3/12 px-2 rounded-md py-2'>Price: $<span className='lg:text-2xl font-semibold'>{detailsData?.price}</span></h2>
                        <p className='flex items-center gap-1 py-1'><FaLanguage className='text-lg'></FaLanguage>{detailsData?.language}</p>
                        <p className='flex items-center gap-1 text-lg'><FaUser className='text-xl'></FaUser> <span>46</span>Active Students</p>
                        <p className='flex items-center gap-1 py-1'><FaVideo className='text-xl'></FaVideo> <span>4600 </span>Lesson</p>

                        <p className='flex items-center gap-1'><FaStar ></FaStar> {detailsData?.review} (reviews)</p>
                        <div className="divider w-10/12"></div>
                        <div className="collapse collapse-plus w-10/12">
                            <input type="checkbox" name="my-accordion-3" className='border-none w-full' />
                            <div className="collapse-title text-xl font-medium">Description</div>
                            <div className="collapse-content">
                                <p>{detailsData?.description}</p>
                            </div>
                        </div>
                        <div className="divider w-10/12"></div>

                        <div className='flex  gap-2'>
                            <Link className='btn bg-gradient-to-r from-[#493D9E] to-[#B2A5FF] text-white hover:bg-[#493D9E]'>Book Trail lesson</Link>
                            <Link onClick={() => { handleBookedTutor() }} className='btn bg-[#493D9E] text-white hover:bg-[#493D9E] hover:bg-opacity-65'>Booked</Link>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default TutorDetails
