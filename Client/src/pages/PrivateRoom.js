import React from 'react'
import { useSelector } from "react-redux"
import CourseReviewModal from '../components/core/ViewCourse/CourseReviewModal'
import { useState } from 'react'
import IconBtn from '../components/Common/IconBtn'
import Query from '../components/core/Course/Query'
import { Link } from 'react-router-dom'
function PrivateRoom() {
const { user } = useSelector((state) => state.profile)
const [reviewModal, setReviewModal] = useState(false)
  return (
    <div>
        <div className='bg-cover bg-center h-screen courtbg justify-center'>
          <div>
        <div className="flex justify-center items-center gap-x-4 bg-champ-100 lg:w-[30%]">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-velvet-100 font-custom ">Welcome
              {" "+user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-velvet-100">This is Your Private Court Room</p>
          </div>
        </div>

        </div>

        <div className='flex gap-10 items-center justify-center'>
          <div>
        <IconBtn
              text="Ask Question"
              customClasses="ml-auto"
              onclick={() => setReviewModal(true)}
            />
          </div>
          {/* <div>
            <IconBtn
              text="Upload Documents"
              customClasses="ml-auto"
              onclick={() => setReviewModal(true)}
            />
          </div> */}
          </div>
         

        {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}


        <div className='flex gap-4 items-center justify-center mt-10 text-silk-200'>
             <div className='bg-velvet-100 w-[30%] h-[30%] shadow-2xl'>
                  <h2 className='text-center font-custom text-lg'>Important Points</h2>
                  <p className='text-start ml-2 mt-1'>1. Parties provide a brief summary of the case.</p>
                  <p className='text-start ml-2'>2. Discussion on the exchange of evidence, documents. </p>
                  <p className='text-start ml-2'>3. Addressing any pending motions or legal issues that may affect the trial proceedings.</p>
                  <p className='text-start ml-2'>4. Exploring the possibility of a settlement before proceeding to trial.</p>
                  <p className='text-start ml-2'>5. Identifying and exchanging witness lists.</p>
                  <p className='text-start ml-2'>6. Setting the trial date and discussing the estimated duration of the trial.</p>
          
             </div>
             <div className='bg-velvet-100 w-[30%] h-[30%] text-center shadow-2xl'>
                  <h2 className='font-custom text-lg'>Chat With others</h2>
                  <p className='text-start ml-2 mt-1'>Introducing our cutting-edge chat application tailored for the legal and judiciary community. Facilitating secure and confidential communication, our platform is designed to streamline collaboration among legal professionals. Exchange case updates, information in a protected environment. With end-to-end encryption and robust security features. </p>
                   <div className=' mt-6 mb-6' >
                    <button className='bg-champ-100 px-5 font-bold text-velvet-100'>
                    Chat Application
                  </button>
                  </div>
             </div>
             <div className='bg-velvet-100 w-[30%] h-[30%] text-center shadow-2xl'>
                  <h2 className='font-custom text-lg'>
                    Video Confrencing
                  </h2>
                  <p className='text-start ml-2 mt-1'>Presenting our cutting-edge video conferencing application tailored for the legal and judiciary community. Facilitating secure and confidential virtual meetings, our platform is designed to streamline remote collaboration among legal professionals. Conduct face-to-face discussions, share legal insights with the highest level of security.</p>
                  <div className=' mt-6 mb-6 flex gap-4 items-center justify-center' >
                    <Link to={"/screen"}>
                    <button className='bg-champ-100 px-5 font-bold text-velvet-100'>
                     LawVista
                  </button>
                  </Link>
                  <Link to="https://meet.google.com/whq-mbcy-crz">
                   <button className='bg-champ-100 px-5 font-bold text-velvet-100'>
                    Google Meet
                  </button>
                  </Link>
                  </div>
            
            
             </div>
        </div>
            <div className='flex gap-10 justify-center mt-10'>
              {/* <div className=' bg-champ-100'>
                 <h2>Client</h2>
              </div>
              <div className=' bg-champ-100'> 
                  <h2>
                    Judges
                  </h2>
              </div>
              <div className=' bg-champ-100'>
                <h2>Lawyers</h2>  
              </div> */}
           
            

           </div>
           <Query/>
          </div>
          </div>

    
  )
}

export default PrivateRoom