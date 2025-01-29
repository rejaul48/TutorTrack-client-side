import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TutorContext } from '../../contextApi/TutorContext'
import axios from 'axios'
import useDataByEmail from '../../hooks/useDataByEmail'
import Loader from '../../components/Loader/Loader'
import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const MyTutorials = () => {

  const { user } = useContext(TutorContext)

  const axiosSecure = useAxiosSecure()
  const [myTutorials, setMyTutorials] = useState([])
  const [currentMyTutorials, setCurrentMyTutorials] = useState(myTutorials)
  // this both are use when custom hook use for data loading
  // const { myTutorials, loading, error } = useDataByEmail(user?.email)
  // const [currentMyTutorials, setCurrentMyTutorials] = useState([])


  useEffect(() => {

    axiosSecure.get(`my-tutorials/${user?.email}`)
      .then(res => {
        setMyTutorials(res.data)
      })
      .catch(err => console.log(err))

  }, [user?.email])

  useEffect(() => {
    setCurrentMyTutorials(myTutorials);
  }, [myTutorials]);

  // this is use for when data call with custom hook
  // but when i am using custom hook
  // why i can't get JWT token i don't know
  // useEffect(() => {
  //   if (myTutorials) {
  //     setCurrentMyTutorials(myTutorials);
  //   }
  // }, [myTutorials]);

  // console.log(currentMyTutorials);


  // when my tutorial data not found
  if (!currentMyTutorials || currentMyTutorials.length === 0) {
    return (
      <div className='flex h-[50vh] justify-center'>
        <h2 className='flex items-center lg:text-5xl font-bold opacity-55 animate-bounce delay-300'>No Data Found...</h2>
      </div>
    );
  }

  // thi is for when data call with custom hook
  // if (loading) {
  //   return <Loader ></Loader>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  // delete data
  const handleTutorialDelete = (id) => {
    // Show SweetAlert confirmation dialog first
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, proceed to delete
        // axios.delete(`https://server-side-sable-sigma.vercel.app/my-tutorials/${id}`)
        axiosSecure.delete(`my-tutorials/${id}`)
          .then((res) => {
            console.log(res.data);
            const remainData = currentMyTutorials.filter((current) => current?._id !== id);
            setCurrentMyTutorials(remainData);

            Swal.fire({
              title: "Deleted!",
              text: "Your tutorial has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              position: "top-center",
              icon: "error",
              title: "Something went wrong",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };




  return (
    <>

      <Helmet >
        <title>TutorTrack || My Tutorials</title>
      </Helmet>

      <section className='max-w-7xl mx-auto'>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Sl.</th>
                <th>Name & Language</th>
                <th>Description & Review</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {
                currentMyTutorials.map((tutorial, ind) => (
                  <tr key={ind}>

                    <td>{ind + 1}</td>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={tutorial?.image}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{tutorial.name}</div>
                          <div className="text-sm opacity-50">Language: {tutorial.language}</div>
                        </div>
                      </div>
                    </td>
                    <td className='w-[300px] max-w-[600px] truncate'>
                      {tutorial.description}
                      <br />
                      <span className="badge badge-ghost badge-sm">Review: <span className='mx-1'> {tutorial.review}</span> +</span>
                    </td>
                    <td>$<span>{tutorial.price}</span></td>
                    <th className='flex items-center gap-2'>
                      <Link to={`/update-tutorial/${tutorial._id}`} className='btn bg-green-400 text-black hover:bg-green-500'>Update</Link>
                      <Link onClick={() => { handleTutorialDelete(tutorial?._id) }} className='btn bg-error text-white hover:bg-red-500'>Del</Link>
                    </th>
                  </tr>
                ))
              }




            </tbody>

          </table>
        </div>
      </section>
    </>
  )
}

export default MyTutorials
