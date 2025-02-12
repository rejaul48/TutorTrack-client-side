
// import React, { useState, useEffect } from 'react';
// import TeachersCard1 from '../../components/TeachersCard/TeachersCard1';
// import { useLoaderData } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { BiSolidToTop } from 'react-icons/bi';


// const FindTutors = () => {
//   const allTutorsData = useLoaderData();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredTutors, setFilteredTutors] = useState(allTutorsData);

//   // Handle search term input
//   useEffect(() => {
//     // If searchTerm is empty, show all data
//     if (!searchTerm.trim()) {
//       setFilteredTutors(allTutorsData);
//       return;
//     }

//     // Filter tutors based on the search term (client-side filtering)
//     const results = allTutorsData.filter((tutor) =>
//       tutor.language?.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredTutors(results);
//   }, [searchTerm, allTutorsData]);


//   // Function to scroll back to the top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <>

//       <Helmet >
//         <title>TutorTrack || Find Tutor</title>
//       </Helmet>

//       <div className="max-w-7xl mx-auto mt-8 px-6 xl:px-0">
//         <h2 className="lg:text-2xl font-bold mb-2">Find Your Tutor</h2>
//         <label className="input input-bordered flex items-center gap-2">
//           <input
//             type="text"
//             className="grow p-2 border rounded"
//             placeholder="Search by language"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="h-4 w-4 opacity-70"
//           >
//             <path
//               fillRule="evenodd"
//               d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </label>
//       </div>

//       <section
//         className="max-w-7xl mx-auto mt-5 
//             grid grid-cols-1 md:grid-cols-2 gap-4 px-2 xl:px-0"
//       >
//         {filteredTutors.length > 0 ? (
//           filteredTutors.map((tutorData) => (
//             <TeachersCard1 key={tutorData?._id} tutorData={tutorData} />
//           ))
//         ) : (
//           <p className="col-span-full text-center text-lg font-semibold">
//             No tutors found matching "{searchTerm}"
//           </p>
//         )}
//       </section>

//       {/* Back to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-8 right-8 w-12 h-12  bg-[#493D9E] text-white rounded-full shadow-lg hover:bg-[#B2A5FF] transition-all 
//                 flex justify-center items-center
//                 "
//         aria-label="Back to top"
//       >
//         <BiSolidToTop className='text-2xl' />
//       </button>

//     </>
//   );
// };

// export default FindTutors;


import React, { useState, useEffect } from 'react';
import TeachersCard1 from '../../components/TeachersCard/TeachersCard1';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BiSolidToTop } from 'react-icons/bi';

const FindTutors = () => {
  const allTutorsData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [filteredTutors, setFilteredTutors] = useState(allTutorsData);

  // Handle filtering logic
  useEffect(() => {
    let results = allTutorsData;

    // Filter by language
    if (searchTerm.trim()) {
      results = results.filter((tutor) =>
        tutor.language?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price
    if (priceFilter) {
      const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
      results = results.filter((tutor) => tutor.price >= minPrice && tutor.price <= maxPrice);
    }

    // Filter by rating
    if (ratingFilter) {
      results = results.filter((tutor) => tutor.review >= Number(ratingFilter));
    }

    setFilteredTutors(results);
  }, [searchTerm, priceFilter, ratingFilter, allTutorsData]);

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>TutorTrack || Find Tutor</title>
      </Helmet>

      <div className="max-w-7xl mx-auto mt-8 px-6 xl:px-0">
        <h2 className="lg:text-2xl font-bold mb-2">Find Your Tutor</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search by Language */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow p-2 border rounded"
              placeholder="Search by language"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          <div className='flex items-center gap-6'>
            {/* Filter by Price */}
            <select
              className="p-2 border rounded"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="">Filter by Price</option>
              <option value="0-20">$0 - $20</option>
              <option value="21-50">$21 - $50</option>
              <option value="51-100">$51 - $100</option>
            </select>

            {/* Filter by Rating */}
            <select
              className="p-2 border rounded"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            >
              <option value="">Filter by Rating</option>
              <option value="1">1 Star & Above</option>
              <option value="2">2 Stars & Above</option>
              <option value="3">3 Stars & Above</option>
              <option value="4">4 Stars & Above</option>
            </select>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 px-2 xl:px-0">
        {filteredTutors.length > 0 ? (
          filteredTutors.map((tutorData) => (
            <TeachersCard1 key={tutorData?._id} tutorData={tutorData} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg font-semibold">
            No tutors found matching your criteria
          </p>
        )}
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#493D9E] text-white rounded-full shadow-lg hover:bg-[#B2A5FF] transition-all flex justify-center items-center"
        aria-label="Back to top"
      >
        <BiSolidToTop className="text-2xl" />
      </button>
    </>
  );
};

export default FindTutors;
