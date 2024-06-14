import React from 'react'
import HighlightText from './HighlightText'
import knowYourProgress from "../../../assets/Images/zo.jpg"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/5p1.webp"
import CTAButton from "../HomePage/Button"
import imgt from "../../../assets/Images/aboutus2.webp"

const LearningSection = () => {
  return (
    <div className='mt-[100px] mb-28'>
      <div className='flex flex-col gap-5 items-center'>

        <div className='text-4xl text-center font-semibold'>
            
            <HighlightText text={"Who We Are"} />
        </div>

        <div className='text-center text-richblack-900 mx-auto text-base font-semibold w-[70%] font-custom'>
            Pursuit of justice for our client
        </div>

        <div className='flex flex-col gap-28 lg:gap-52 lg:flex-row items-center justify-center mt-5'>
           <div className='w-[70%] lg:w-[40%]'>
              <p className='items-center justify-center'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas asperiores qui at consequuntur molestiae dolore voluptates. Possimus, odio quidem non magni, facere nemo cupiditate, a modi sit deserunt voluptatem?
              </p>
           </div>
           <div className='w-[70%]  lg:w-[40%] items-center justify-center'>
            <img src={imgt} className='shadow-xl'>
            </img>

           </div>
        </div>

        <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
                <div>
                    Learn More
                </div>
            </CTAButton>
        </div>

      </div>
    </div>
  )
}

export default LearningSection
