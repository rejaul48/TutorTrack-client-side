
import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import { FaStar } from 'react-icons/fa';
import DifferentTutors from '../../components/DifferentTutors/DifferentTutors';
import HowTutorTrackWork from '../../components/HowTutorTrackWork/HowTutorTrackWork';
import BecomeATeacher from '../../components/BecomeATeacher/BecomeATeacher';
import { Helmet } from 'react-helmet';
import PremiumExperience from '../../components/PremiumExperience/PremiumExperience';
import OurTutors from '../../components/OurTutors/OurTutors';
import Testimonials from '../../components/Testimonials/Testimonials';
import { BiSolidToTop } from "react-icons/bi";

const Home = () => {

    // Function to scroll back to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Helmet>
                <title>TutorTrack || Home Page</title>
            </Helmet>

            {/* hero slider or banner section */}
            <HeroSlider></HeroSlider>

            {/* state section */}
            <section className='grid grid-cols-3 gap-4 lg:grid-cols-5 lg:gap-2 my-16 max-w-7xl mx-auto'>
                <div className='text-center space-y-1'>
                    <h2 className='text-sm lg:text-3xl font-bold'><span>50000</span>+</h2>
                    <p className='text-xs md:text-lg font-semibold'>Experienced tutors</p>
                </div>
                <div className='text-center space-y-1'>
                    <h2 className='text-sm lg:text-3xl font-bold'><span>300000</span>+</h2>
                    <p className='text-xs md:text-lg font-semibold'>5-star tutor reviews</p>
                </div>
                <div className='text-center space-y-1'>
                    <h2 className='text-sm lg:text-3xl font-bold'><span>120</span>+</h2>
                    <p className='text-xs md:text-lg font-semibold'>Subjects taught</p>
                </div>
                <div className='hidden lg:block text-center space-y-1'>
                    <h2 className='text-sm lg:text-3xl font-bold'><span>180</span>+</h2>
                    <p className='text-xs md:text-lg font-semibold'>Tutor nationalities</p>
                </div>

                <div className='hidden lg:block'>
                    <div className='flex flex-col items-center justify-center space-y-1'>
                        <h2 className='text-sm md:lg:text-3xl font-bold flex items-center gap-2'>4.8 <span className='flex items-center gap-1'>
                            <FaStar className='text-sm md:text-xl'></FaStar>
                            <FaStar className='text-sm md:text-xl'></FaStar>
                            <FaStar className='text-sm md:text-xl'></FaStar>
                            <FaStar className='text-sm md:text-xl'></FaStar>
                            <FaStar className='text-sm md:text-xl'></FaStar>
                        </span></h2>
                        <p className='text-xs md:text-lg font-semibold'>on the App Store</p>
                    </div>
                </div>
            </section>

            {/* language tutors category section */}
            <DifferentTutors></DifferentTutors>

            {/* How TutorTrack works section */}
            <section className='max-w-7xl mx-auto'>
                <h2 className='lg:text-5xl font-bold mt-24 mb-8 px-2 xl:px-0'>How TutorTrack Works:</h2>
                <HowTutorTrackWork></HowTutorTrackWork>

                {/* premium experience */}
                <div>
                    <PremiumExperience></PremiumExperience>
                </div>

                {/* our tutors */}
                <div>
                    <OurTutors></OurTutors>
                </div>
            </section>

            <section className='bg-[#B2A5FF] py-12 my-12'>
                {/* testimonials section */}
                <div className='max-w-7xl mx-auto'>
                    <Testimonials></Testimonials>
                </div>
            </section>

            {/* lesson Guaranteed section */}
            <section className='bg-[#F2F6FD] py-6 md:py-12 mt-12'>
                <div className='max-w-7xl mx-auto text-center text-black'>
                    <h2 className='text-3xl lg:text-7xl font-bold'>Lessons you'll love. Guaranteed.</h2>
                    <p className='text-sm lg:text-lg mt-5'>Try another tutor for free if you're not satisfied.</p>
                </div>
            </section>

            {/* become a tutor section */}
            <div className='px-2 xl:px-0'>
                <BecomeATeacher></BecomeATeacher>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12  bg-[#493D9E] text-white rounded-full shadow-lg hover:bg-[#B2A5FF] transition-all 
                flex justify-center items-center
                "
                aria-label="Back to top"
            >
                <BiSolidToTop className='text-2xl'/>
            </button>

        </>
    );
}

export default Home;


