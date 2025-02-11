import React from 'react'

const OurTutors = () => {
    return (
        <>

            <section>

                {/* out tutor head */}
                <div className='text-center py-12 px-2 xl:px-0'>
                    <p className='text-[#493D9E] text-lg font-semibold uppercase tracking-wider'>Our Tutors</p>
                    <h2 className='text-2xl md:text-4xl font-semibold md:w-4/12 mx-auto mt-3'>Meet Our Professional Tutors</h2>
                </div>

                {/* teacher image  */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 xl:px-0'>

            
                    <div className="relative group overflow-hidden rounded-md cursor-pointer">
                        <img
                            className="w-full h-[400px] md:h-[380px] rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
                            src="https://i.imgur.com/3zK3byQ.jpeg"
                            alt="teachers-image"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#493D9E]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Teacher Info */}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-[#493D9E]/70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                            <h3 className="text-lg font-semibold">Dr. Michael Carter</h3>
                            <p className="text-sm">Stanford University</p>
                            <p className="text-xs">Associate Professor</p>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-md cursor-pointer">

                        <img className='className="w-full h-[400px] md:h-[380px] rounded-md object-cover transition-transform duration-300 group-hover:scale-105 w-full' src="https://i.imgur.com/SrZUyYW.jpeg" alt="teachers-image" />

                    
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#493D9E]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Teacher Info */}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-[#493D9E]/70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                            <h3 className="text-lg font-semibold">Dr. Emily Watson</h3>
                            <p className="text-sm">Harvard University</p>
                            <p className="text-xs">Professor</p>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-md cursor-pointer">
                    <img className=' className="w-full h-[400px] md:h-[380px] rounded-md object-cover transition-transform duration-300 group-hover:scale-105 w-full' src="https://i.imgur.com/VewhFF3.jpeg" alt="teachers-image" />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#493D9E]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Teacher Info */}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-[#493D9E]/70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                            <h3 className="text-lg font-semibold">Dr. Sophia Martinez</h3>
                            <p className="text-sm">University of Oxford</p>
                            <p className="text-xs">Lecturer </p>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-md cursor-pointer">
                    <img className=' className="w-full h-[400px] md:h-[380px] rounded-md object-cover transition-transform duration-300 group-hover:scale-105 w-full' src='https://i.imgur.com/e8UlYwz.jpeg' alt="teachers-image" />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#493D9E]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Teacher Info */}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-[#493D9E]/70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                            <h3 className="text-lg font-semibold">Dr. Olivia Brown</h3>
                            <p className="text-sm">Harvard University</p>
                            <p className="text-xs">Assistant Professor</p>
                        </div>
                    </div>




                </div>

            </section>

        </>
    )
}

export default OurTutors
