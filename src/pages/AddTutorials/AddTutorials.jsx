import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { TutorContext } from '../../contextApi/TutorContext'
import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import useAxiosSecure from '../../hooks/useAxiosSecure'


const AddTutorials = () => {

  const { user } = useContext(TutorContext)
  // get current register user data
  const [registerUser, setRegisterUser] = useState([])

  // get axios secure
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    axios.get(`https://server-side-sable-sigma.vercel.app/register-user/${user?.email}`)
      .then(res => {
        setRegisterUser(res.data)
      })
      .catch(err => console.log(err))
  }, [user?.email])


  // navigate to another page
  const navigate = useNavigate()

  const handleAddTutorial = e => {
    e.preventDefault()

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const image = form.imageURL.value;
    const language = form.language.value;
    const price = parseInt(form.price.value);
    const review = parseInt(form.reviews.value);
    const description = form.description.value;

    const tutorial = { name, email, image, language, price, review, description }

    // send data into database

    // axios.post('https://server-side-sable-sigma.vercel.app/allTutors', tutorial)
    axiosSecure.post('allTutors', tutorial)
      .then(res => {
        console.log(res.data)
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Tutorial added successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/my-tutorials');
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
        <title>TutorTrack || Add Tutorials</title>
      </Helmet>

      <div className='bg-[#B2A5FF] text-center py-4 text-black'>
        <h2 className='text-3xl font-bold'>Add tutorial</h2>
        <p>Fill-up this form carefully</p>
      </div>

      <section className='max-w-5xl mx-auto px-4 xl:px-0 md:min-h-[100vh]'>
        <form className='mt-6 mb-12' onSubmit={handleAddTutorial}>

          {/* here tutor name and email */}
          <div className='md:flex items-center gap-4'>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Your name: </span>
              </div>
              <input
                // defaultValue={currentUser ? currentUser.name : "Anonymous User"}
                name='name' type="text" defaultValue={registerUser?.name || user?.displayName} className="input input-bordered w-full  " />

            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Your Email: </span>
              </div>
              <input
                // defaultValue={currentUser.email}
                name='email' type="email" defaultValue={registerUser?.email || user?.email} className="input input-bordered w-full  " />

            </label>
          </div>

          {/* user img language */}
          <div className='md:flex items-center gap-4'>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Your Image URL: </span>
              </div>
              <input name='imageURL' type="text" placeholder="image URL here.." className="input input-bordered w-full  " />

            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Language: </span>
              </div>
              <input name='language' type="text" placeholder="Bangla/English" className="input input-bordered w-full  " />

            </label>
          </div>

          {/* price and review section */}

          <div className='md:flex items-center gap-4'>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price: </span>
              </div>
              <input name='price' type="number" placeholder="Price.." className="input input-bordered w-full  " />

            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Reviews: </span>
              </div>
              <input
                defaultValue={0}
                name='reviews' type="number" placeholder="50/100/150" className="input input-bordered w-full  " />

            </label>
          </div>

          {/* tutor description here */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Description:</span>
            </div>
            {/* Text Area */}
            <textarea
              placeholder="Detailed Description"
              name='description'
              className="textarea textarea-bordered w-full mt-2"
              rows="4"
            ></textarea>
          </label>

          <div>
            <button type='submit' className='btn bg-gradient-to-r from-[#493D9E] to-[#B2A5FF] text-white w-full mt-5'>Submit</button>
          </div>
        </form>
      </section>

    </>
  )
}

export default AddTutorials
