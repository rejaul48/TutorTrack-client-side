
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useContext } from 'react';
import { TutorContext } from '../../contextApi/TutorContext';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const { theme } = useContext(TutorContext);

  const sliderData = [
    {
      image: "https://i.imgur.com/KG5IAu6.jpeg",
      category: "Learn faster with best tutor",
      description: "Get expert career advice on job search strategies, resume building, and interview preparation from our experienced counselor."
    },
    {
      image: "https://i.imgur.com/lp7dtJd.jpeg",
      category: "Learn faster with best tutor",
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
    <div className='h-[300px] md:h-[340px] lg:h-[480px] bg-[#F2F6FD] lg:pt-12'>
      <div className='max-w-7xl mx-auto relative'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSwiper={() => { }}
          onSlideChange={() => { }}
          className="w-full h-full"
        >
          {sliderData.map((slider, ind) => (
            <SwiperSlide key={ind}>
              <div className="md:grid md:grid-cols-12 md:gap-12 mt-2 lg:mt-0  gap-5  lg:pt-0 lg:h-[380px]">


                <div className="w-full h-full md:col-span-6  px-2 xl:px-0">
                  <div className='lg:mt-16'>
                    <div className="hero_content md:pl-6">
                      <h2 className={`text-2xl  lg:text-5xl font-bold py-3 bg-gradient-to-r from-[#493D9E] to-[#B2A5FF] bg-clip-text text-transparent`}>
                        {slider.category}
                      </h2>
                      <p className={`w-9/12 lg:w-10/12 md:text-[16px] my-3 text-black`}>
                        {slider.description}
                      </p>
                      <Link to={'/find-tutors'} href="#service" className="btn  bg-gradient-to-r from-[#493D9E] to-[#B2A5FF] text-white mt-5 text-xl md:text-lg border-none px-8 md:px-10 md:h-[55px] rounded-lg hover:bg-opacity-50">
                        Get Started <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-full  md:col-span-6  hidden md:block relative h-full ">

                  <div className='h-full flex justify-center'>
                    <img className="md:w-[360px] md:h-[280px] lg:w-[460px] lg:h-[320px] xl:w-[560px] xl:h-[480px] object-cover rounded-md mr-6 w-full"
                      src={slider.image}
                      alt="slider img"
                    />

                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}


        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;



