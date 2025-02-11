import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { CiLocationOn } from "react-icons/ci"
import { MdEmail } from "react-icons/md"
import { BiSolidToTop } from 'react-icons/bi'

const ContactUs = () => {

    // Function to scroll back to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>

            <main>
                <section>
                    {/* contact us banner section */}
                    <div
                        className="hero h-[350px] md:h-[480px] lg:min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.imgur.com/8leb3BH.jpeg)",
                        }}>
                        <div className="hero-overlay bg-[#B2A5FF] bg-opacity-50"></div>
                        <div className="hero-content  text-center text-black">
                            <div className="max-w-7xl mx-auto text-center ">
                                <h1 className="mb-5 text-5xl font-bold">Our Contacts</h1>
                                <p className='flex items-center justify-center gap-3 text-lg'>Home <FaArrowRightLong /> Contact Us</p>

                            </div>
                        </div>
                    </div>


                </section>

                <section className='max-w-7xl mx-auto'>
                    {/* contact method head */}
                    <div className='text-center my-16'>
                        <p className='text-lg text-[#493D9E] uppercase font-semibold'>Our contact</p>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold py-6'>Get In Touch With Us</h1>
                        <p className='text-lg md:w-9/12 lg:w-6/12 mx-auto px-3 xl:px-0'>Feel free to reach out for collaboration, inquiries, or discussions. Let's connect, share ideas, and grow together in technology and innovation!</p>
                    </div>

                    {/* contact method */}

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-2 xl:px-0'>

                        <div className='border-[1px] p-5 rounded-md flex flex-col justify-center items-center py-10'>
                            <h3 className='bg-[#E4F1FE] w-10 h-10 flex items-center justify-center rounded-full p-2'><FaPhoneAlt className='text-3xl text-[#493D9E]' /></h3>
                            <h2 className='text-2xl font-semibold my-3'>Phone Number</h2>
                            <p>+88012345678976</p>
                            <p className='mt-1'>+88012376778976</p>
                        </div>

                        <div className='border-[1px] p-5 rounded-md flex flex-col justify-center items-center py-10'>
                            <h3 className='bg-[#E4F1FE] w-10 h-10 flex items-center justify-center rounded-full p-2'><CiLocationOn className='text-3xl text-[#493D9E]' /></h3>

                            <h2 className='text-2xl font-semibold my-3'>Our Address</h2>
                            <p>17 road, Mirpur, Dhaka</p>
                            <p className='mt-1'>Dhaka 10386</p>
                        </div>


                        <div className='border-[1px] p-5 rounded-md flex flex-col justify-center items-center py-10'>
                            <h3 className='bg-[#E4F1FE] w-10 h-10 flex items-center justify-center rounded-full p-2'>  <MdEmail className='text-3xl text-[#493D9E]' /></h3>

                            <h2 className='text-2xl font-semibold my-3'>Our Emails</h2>
                            <p>tutorfind.info@gmail.com</p>
                            <p className='mt-1'>tutorfind.teacher@gmail.com</p>
                        </div>

                    </div>

                    {/* find us using map */}

                    <div className='mt-24 h-[280px] md:h-[450px]'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192593.12853355356!2d90.25487340238261!3d23.781067238672893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1739283386671!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: '0' }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                            className='rounded-md'
                        ></iframe>
                    </div>

                </section>

                {/* Back to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12  bg-[#493D9E] text-white rounded-full shadow-lg hover:bg-[#B2A5FF] transition-all 
                flex justify-center items-center
                "
                    aria-label="Back to top"
                >
                    <BiSolidToTop className='text-2xl' />
                </button>

            </main>


        </>
    )
}

export default ContactUs
