
import React from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonialsData = [
    {
        name: 'Admed Uddin',
        batchNo: 'Batch-10',
        studentImage: 'https://media.istockphoto.com/id/1069673870/photo/young-male-college-student.jpg?s=612x612&w=0&k=20&c=YI_HyAqEgRxiqwq7EYMMuxwhHRdeMfGi49Ne-u93KLY=',
        studentComments: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facilis recusandae ad fugit excepturi, cumque sit dolorum eaque rem facere aut omnis'
    },
    {
        name: 'Rahim Khan',
        batchNo: 'Batch-11',
        studentImage: 'https://media.istockphoto.com/id/1069673870/photo/young-male-college-student.jpg?s=612x612&w=0&k=20&c=YI_HyAqEgRxiqwq7EYMMuxwhHRdeMfGi49Ne-u93KLY=',
        studentComments: 'Amazing experience! The faculty is really supportive and the courses are well structured. I have learned a lot.'
    },
    {
        name: 'Sajid Ahmed',
        batchNo: 'Batch-12',
        studentImage: 'https://media.istockphoto.com/id/1069673870/photo/young-male-college-student.jpg?s=612x612&w=0&k=20&c=YI_HyAqEgRxiqwq7EYMMuxwhHRdeMfGi49Ne-u93KLY=',
        studentComments: 'The best place to learn and grow. Highly recommended for students who are passionate about their careers.'
    },
    {
        name: 'Karim Hossain',
        batchNo: 'Batch-13',
        studentImage: 'https://media.istockphoto.com/id/1069673870/photo/young-male-college-student.jpg?s=612x612&w=0&k=20&c=YI_HyAqEgRxiqwq7EYMMuxwhHRdeMfGi49Ne-u93KLY=',
        studentComments: 'Excellent curriculum and practical exposure. The mentorship is outstanding, and I feel confident in my skills now.'
    }
];

const Testimonials = () => {
    return (
        <section className='pb-6 px-2 xl:px-0'>
            <div className='mt-12'>
                <p className='text-lg font-semibold uppercase tracking-wide text-white'>Testimonials</p>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-medium mt-4 text-white'>Positive Reviews From</h2>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-medium mt-2 text-white'>Our Students</h2>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                }}
                modules={[Pagination, Autoplay]}
                className='mt-8'
            >
                {testimonialsData.map((student, index) => (
                    <SwiperSlide key={index}>
                        <div className='bg-white p-6 rounded-md h-[320px] md:h-[290px] flex flex-col justify-between'>
                            <div>
                                <p className='flex items-center gap-2'>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className='text-lg text-yellow-400' />
                                    ))}
                                </p>
                                <p className='text-lg lg:text-xl py-4'>
                                    {student.studentComments.split(" ").slice(0, 18).join(" ")}...
                                </p>

                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='flex gap-3 items-center'>
                                    <img className='w-20 h-20 rounded-full border-2' src={student.studentImage} alt="student_image" />
                                    <div>
                                        <h3 className='text-xl font-semibold'>{student.name}</h3>
                                        <p>{student.batchNo}</p>
                                    </div>
                                </div>
                                <div>
                                    <FaQuoteRight className='text-4xl' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
