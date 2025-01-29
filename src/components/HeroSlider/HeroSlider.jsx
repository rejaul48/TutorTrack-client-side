// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useContext } from 'react';
import { TutorContext } from '../../contextApi/TutorContext';

const HeroSlider = () => {

    //get theme state value
    const { theme } = useContext(TutorContext)

    const sliderData = [
        {
            image: "https://i.imgur.com/KG5IAu6.jpeg",
            category: "Learn faster with your best language tutor",
            description: "Get expert career advice on job search strategies, resume building, and interview preparation from our experienced counselor."
        },
        {
            image: "https://i.imgur.com/lp7dtJd.jpeg",
            category: "Learn faster with your best language tutor",
            description: "Understand the college admission process, tips for writing effective essays, and how to make your application stand out."
        },
        {
            image: "https://i.imgur.com/5Vm6BG4.jpeg",
            category: "Personal Development",
            description: "Learn how to build confidence, set goals, and improve your communication skills to succeed in your career."
        },
        {
            image: "https://i.imgur.com/wwbkkAJ.jpeg",
            category: "Resume Building",
            description: "Our expert will guide you through creating an impressive resume that highlights your skills, experience, and accomplishments."
        },
        {
            image: "https://i.imgur.com/1joB0Wc.jpeg",
            category: "Job Market Trends",
            description: "Stay updated with the latest trends in the job market and learn which industries are hiring the most in today's competitive world."
        }
    ];

    return (
        <>
            <div className='bg-[#FF7AAC] h-[300px] md:h-[340px] lg:h-[430px] '>
                <div className='max-w-7xl mx-auto'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        onSwiper={() => { }}
                        onSlideChange={() => { }}
                        className="w-full h-full"
                    >
                        {sliderData.map((slider, ind) => (
                            <SwiperSlide key={ind}>
                                <div className="md:flex mt-2 lg:mt-0 items-center gap-5 md:pt-16 lg:h-[380px]">

                                    <div className="w-full h-full md:w-5/12 lg:w-5/12 px-2 xl:px-0">
                                        <div className="hero_content md:pl-16">
                                            <h2 className={`text-2xl md:text-xl lg:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                                {slider.category}
                                            </h2>

                                            <p className={`w-9/12 md:w-10/12 lg:w-9/12 md:text-sm my-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{slider.description}</p>
                                            <a
                                                href="#service"
                                                className="btn bg-black text-white mt-5 text-xl md:text-lg border-none px-8 md:px-10 md:h-[55px] rounded-lg 
                                            hover:bg-opacity-50
                                            
                                            "
                                            >
                                                Get Started <FaArrowRight ></FaArrowRight>
                                            </a>
                                        </div>
                                    </div>


                                    <div className="w-full md:w-7/12 lg:w-7/12 hidden md:block relative h-full">
                                        {/* bottom two img here */}
                                        <div className="w-full h-full relative flex items-center justify-center">
                                            <img
                                                className="
                                            md:w-[300px] md:h-[200px]
                                            lg:w-[460px] lg:h-[250px]
                                            xl:w-[420px] xl:h-[250px] object-cover"
                                                src={slider.image}
                                                alt="slider img"
                                            />

                                            <div className='absolute md:-top-3 lg:top-0 left-[120px]'>
                                                <img
                                                    className="
                                                md:w-[230px] md:h-[240px]
                                                lg:w-[380px] lg:h-[285px]
                                                xl:w-[440px] xl:h-[300px] object-cover"
                                                    src={slider.image}
                                                    alt="slider img"
                                                />
                                            </div>

                                        </div>

                                        {/* top img */}
                                        <div className='absolute md:-top-12 lg:-top-8 -left-6 lg:left-4 bg-orange-300 h-full  flex justify-center'>
                                            <img
                                                className="
                                            md:w-[360px] md:h-[280px]
                                            lg:w-[460px] lg:h-[320px]
                                            xl:w-[520px] xl:h-[420px] object-cover"
                                                src={slider.image}
                                                alt="slider img"
                                            />
                                        </div>

                                    </div>




                                </div>
                            </SwiperSlide>
                        ))}
                        {/* Custom Navigation Buttons */}
                        <button
                            className="custom-prev hidden md:block absolute left-2 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full z-10"
                        >

                            <FaChevronLeft className='text-orange-400 size-8'></FaChevronLeft>
                        </button>
                        <button
                            className="custom-next hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full z-10"
                        >
                            <FaChevronRight className='text-orange-400 size-8'></FaChevronRight>
                        </button>
                    </Swiper>
                </div>

            </div>

        </ >
    );
};

export default HeroSlider;







