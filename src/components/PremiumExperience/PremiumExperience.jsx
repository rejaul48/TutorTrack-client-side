import React from 'react'

const PremiumExperience = () => {
    return (
        <>

            <section className='px-2 xl:px-0'>

                {/* premium leading header */}
                <div className='text-center py-16'>
                    <h2 className='text-2xl md:text-4xl font-semibold tracking-wider'>Premium Learning</h2>
                    <h2 className='text-2xl md:text-4xl font-semibold tracking-wider text-[#493D9E]'>Experience</h2>
                </div>

                {/* card style 1 premium experience */}
                <div className='md:grid md:grid-cols-8 lg:grid-cols-12 md:gap-12 lg:gap-24'>
                    {/* left side image */}
                    <div className='md:col-span-4 lg:col-span-5 w-full h-full'>
                        <img className='rounded-md w-full h-[250px] md:h-[280px] lg:h-[340px]' src="https://i.imgur.com/Y6fXOIo.jpeg" alt="PremiumExperience" />
                    </div>
                    {/* right side text */}
                    <div className='md:col-span-4 lg:col-span-7 flex flex-col justify-center mt-5 md:mt-0'>
                        <h3 className='bg-[#493D9E] w-10 h-10 rounded-full flex justify-center items-center text-white md:text-xl'>01</h3>
                        <h2 className='text-2xl md:text-3xl font-semibold py-4 w-full'>Browse our courses</h2>
                        <p className='text-lg w-11/12 md:w-full lg:w-10/12'>Browse a variety of available courses across different subjects. Discover detailed descriptions, course content, and choose the ideal tutor to meet your learning goals.</p>
                    </div>
                </div>

                {/* card style 2 premium exprerience */}
                <div className='md:grid md:grid-cols-8 lg:grid-cols-12 md:gap-12 lg:gap-24 lg:mt-12 mt-8'>

                    {/* right side image */}
                    <div className='md:col-span-4 lg:col-span-5 w-full h-full order-2'>
                        <img className='rounded-md w-full h-[250px] md:h-[340px]' src="https://i.imgur.com/TdNneeX.jpeg" alt="PremiumExperience" />
                    </div>

                    {/* left side text */}
                    <div className='md:col-span-4 lg:col-span-7 flex flex-col justify-center mt-5 md:mt-0 order-1'>
                        <h3 className='bg-[#493D9E] w-10 h-10 rounded-full flex justify-center items-center text-white  md:text-xl'>02</h3>
                        <h2 className='text-2xl md:text-3xl font-semibold py-4'>Purchase quickly and securely</h2>
                        <p className='text-lg w-11/12 md:w-full lg:w-10/12'>Make your purchase with ease! Enjoy a fast, secure checkout process for a smooth and safe transaction, ensuring your learning experience starts right away.</p>
                    </div>



                </div>

                {/* card style 1 premium experience */}
                <div className='md:grid md:grid-cols-8 lg:grid-cols-12 md:gap-12 lg:gap-24 md:mt-8 lg:mt-12'>
                    {/* left side image */}
                    <div className='md:col-span-4 lg:col-span-5 w-full h-full mt-5 md:mt-0'>
                        <img className='rounded-md w-full h-[250px] md:h-[340px]' src="https://i.imgur.com/NJLkD7Z.jpeg" alt="PremiumExperience" />
                    </div>
                    {/* right side text */}
                    <div className='md:col-span-4 lg:col-span-7 flex flex-col justify-center  mt-5 md:mt-0'>
                        <h3 className='bg-[#493D9E] w-10 h-10 rounded-full flex justify-center items-center text-white   md:text-xl'>03</h3>
                        <h2 className='text-2xl md:text-3xl font-semibold py-4'>Start learning right away</h2>
                        <p className='text-lg w-11/12 md:w-full lg:w-10/12'>Get started instantly! Choose your course, connect with a tutor, and begin your learning journey with personalized lessons, all at your convenience.</p>
                    </div>
                </div>

            </section>


        </>
    )
}

export default PremiumExperience
