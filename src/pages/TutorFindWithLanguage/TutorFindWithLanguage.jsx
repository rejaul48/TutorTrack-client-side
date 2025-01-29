import React from 'react'
import { useLoaderData } from 'react-router-dom'
import TeachersCard1 from '../../components/TeachersCard/TeachersCard1'
import { Helmet } from 'react-helmet'

const TutorFindWithLanguage = () => {

    const tutorWithLanguage = useLoaderData()
    console.log(tutorWithLanguage)

    if (!tutorWithLanguage || tutorWithLanguage.length === 0) {
        return (
            <div className='flex h-[50vh] justify-center'>
                <h2 className='flex items-center lg:text-5xl font-bold opacity-55 animate-bounce delay-300'>No Data Found...</h2>
            </div>
        );
    }

    return (
        <>

            <Helmet >
                <title>TutorTrack || Find Tutor With Language</title>
            </Helmet>

            <section className='max-w-7xl mx-auto mt-6 
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-2 xl:px-0'
            >
                {
                    tutorWithLanguage.map(tutorData => (
                        <TeachersCard1
                            key={tutorData?._id}
                            tutorData={tutorData}
                        >

                        </TeachersCard1>
                    ))
                }
            </section>
        </>
    )
}

export default TutorFindWithLanguage
