import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"
import timelines from "../../../assets/Images/360.jpg"

const timeline = [
    {
        Logo:Logo1,
        Heading:"Government Certified",
        Description:"Our website is certified by Government"
    },
    {
        Logo:Logo2,
        Heading:"Responsibility",
        Description:"User will always be our top priority"
    },
    {
        Logo:Logo3,
        Heading:"Flexibility",
        Description:"The ability to connect anytime , anywhere"
    },
    {
        Logo:Logo4,
        Heading:"Solve the Problem",
        Description:"We ensure you have access to the right resource without any hassle"
    },
]
const TimeLineSection = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row items-center gap-20'>
         
         <div className='lg:w-[45%] flex flex-col gap-5'>
            {
                timeline.map( (element,index) => {
                    return (
                        <div className='flex gap-5' key={index}>

                            <div className='w-[50px] h-[50px] items-center flex'>
                                <img src={element.Logo} />
                            </div>

                            <div>
                                <h2 className='font-semibold text-[18px] font-custom'>{element.Heading}</h2>
                                <p className='text-base text-velvet-100'>{element.Description}</p>
                            </div>
                        </div>
                    )
                })
            }
         </div>

         <div className=' ml-8 gap-5'>
            
            <img src={timelines} alt='timelineImage' className='h-fit shadow-lg shadow-pure-greys-400 object-cover' />

         </div>

      </div>
    </div>
  )
}

export default TimeLineSection
