import React, { useContext, useEffect, useState } from 'react';
import { TutorContext } from '../../contextApi/TutorContext';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyBookedTutors = () => {
  const { user } = useContext(TutorContext);
  // My booked tutors state control
  const [myBookedTutors, setMyBookedTutors] = useState([]);
  const [myReviews, setMyReviews] = useState([])

  const axiosSecure = useAxiosSecure()
  // console.log(myBookedTutors)
  // console.log(myReviews)

  // Fetch booked tutors 
  useEffect(() => {
    if (user?.email) {

      axiosSecure.get(`booked-tutors/${user?.email}`)
        .then(res => {
          setMyBookedTutors(res.data);
        })
        .catch(err => {
          console.error('Error fetching booked tutors:', err);
        });
    }
  }, [user?.email]);

  // Function to increase the review count
  const handleReviewIncrease = async (id, index, bookedId) => {
    try {
      // Request to increase the review count
      const res1 = await axios.patch(`https://server-side-sable-sigma.vercel.app/increase-reviews/${id}`);
      console.log('Review increment response:', res1.data);

      // Update the review count in the state
      const updatedBookedTutors = myBookedTutors.map((tutor, idx) => {
        if (idx === index) {
          return { ...tutor, review: res1.data.review }; // Update the review count
        }
        return tutor;
      });

      setMyBookedTutors(updatedBookedTutors);

      handleUpdateReview(bookedId, res1.data.review)

    } catch (err) {
      console.error('Error increasing review count:', err);
    }
  };

  // handle update into booked tutor collection
  const handleUpdateReview = (id, review) => {
    console.log(id, review);

    // Send `review` as an object
    axios.patch(`https://server-side-sable-sigma.vercel.app/booked-tutors/${id}`, { review })
      .then(res => {
        console.log("Review updated:", res.data);
        setMyReviews(res.data);
      })
      .catch(err => console.error("Error updating review:", err));
  };

  // When no booked tutors are found
  if (!myBookedTutors || myBookedTutors.length === 0) {
    return (
      <div className='flex md:min-h-[100vh] justify-center items-center'>
        <h2 className='flex items-center lg:text-5xl font-bold opacity-55 animate-bounce delay-300'>No Data Found...</h2>
      </div>
    );
  }

  return (
    <>

      <Helmet >
        <title>TutorTrack || My Booked Tutor</title>
      </Helmet>

      <section className='max-w-7xl mx-auto mt-8 px-4 xl:px-0 md:min-h-[100vh]'>
        <div className='grid  md:grid-cols-3 gap-4'>
          {myBookedTutors.map((tutor, index) => (
            <div className='border-2 p-4 text-center' key={tutor?._id}>
              <div className='flex items-center justify-center'>
                <img
                  className='w-[130px] h-[130px] rounded-full'
                  src={tutor?.image}
                  alt="Teacher photo"
                />
              </div>

              <div className='space-y-1 mt-3'>
                <h2 className='lg:text-2xl font-bold'>Name: <span className='font-normal'>{tutor?.name}</span></h2>
                <p className='lg:text-2xl font-semibold'>Language: <span className='font-light'>{tutor?.language}</span></p>
                <p className='lg:text-2xl font-semibold'>Price: $<span className='font-light'>{tutor?.price}</span></p>
                <p className='lg:text-2xl font-semibold'>Reviews: <span className='font-light'>{tutor?.review}</span></p>

                {/* Button to increase review count */}
                <button
                  onClick={() => {
                    handleReviewIncrease(tutor?.tutorId, index, tutor?._id)
                  }}
                  className='btn bg-gradient-to-r from-[#493D9E] to-[#B2A5FF] hover:bg-[#493D9E] text-white'
                >
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MyBookedTutors;
