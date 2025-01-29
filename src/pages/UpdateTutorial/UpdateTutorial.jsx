import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const UpdateTutorial = () => {

    const updateData = useLoaderData()
    console.log(updateData)

    // navigate to my tutorials page
    const navigate = useNavigate()

    // get secureAxios hooks
    const axiosSecure = useAxiosSecure()

    const handleUpdateData = e => {
        e.preventDefault()
        const form = e.target;

        const image = form.image.value;
        const language = form.language.value;
        const price = form.price.value;
        const description = form.description.value;

        const updateTutorial = { image, language, price, description }
        console.log(updateTutorial)

        // update data into database
        // axios.put(`https://server-side-sable-sigma.vercel.app/update-tutorials/${updateData?._id}`, updateTutorial)
        axiosSecure.put(`update-tutorials/${updateData?._id}`, updateTutorial)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Data Update Successfully.",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/my-tutorials')
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
                <title>TutorTrack || Update Tutorial</title>
            </Helmet>

            <div className='bg-[#D8F8F2] text-center py-4 text-black'>
                <h2 className='text-3xl font-bold'>Update your tutorial</h2>
                <p>Fill-up this form carefully</p>
            </div>

            <section className='max-w-5xl mx-auto px-4 xl:px-0'>
                <form className='mt-6 mb-12' onSubmit={handleUpdateData}>

                    {/* here tutor name and email */}
                    <div className='md:flex items-center gap-4'>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Your name: </span>
                            </div>
                            <input name='name' type="text" defaultValue={updateData?.name} className="input input-bordered w-full  " readOnly />

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Your Email: </span>
                            </div>
                            <input name='email' type="email" defaultValue={updateData?.email} className="input input-bordered w-full " readOnly />

                        </label>
                    </div>

                    {/* user img language */}
                    <div className='md:flex items-center gap-4'>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Your Image URL: </span>
                            </div>
                            <input name='image' type="text" defaultValue={updateData?.image} className="input input-bordered w-full  " />

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Language: </span>
                            </div>
                            <input name='language' type="text" defaultValue={updateData?.language} className="input input-bordered w-full  " />

                        </label>
                    </div>

                    {/* price and review section */}

                    <div className='md:flex items-center gap-4'>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price: </span>
                            </div>
                            <input name='price' type="number" defaultValue={updateData?.price} className="input input-bordered w-full  " />

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Reviews: </span>
                            </div>
                            <input name='review' type="number" defaultValue={updateData?.review} readOnly className="input input-bordered w-full  " />

                        </label>
                    </div>

                    {/* tutor description here */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Description:</span>
                        </div>
                        {/* Text Area */}
                        <textarea
                            name='description'
                            defaultValue={updateData?.description}
                            className="textarea textarea-bordered w-full mt-2"
                            rows="4"
                        ></textarea>
                    </label>

                    <div>
                        <button type='submit' className='btn bg-pink-800 hover:bg-pink-600 w-full mt-5'>Submit</button>
                    </div>
                </form>
            </section>

        </>
    )
}

export default UpdateTutorial
