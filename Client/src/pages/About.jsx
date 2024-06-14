import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/Common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import HighlightText from "../components/core/HomePage/HighlightText"
import ReviewSlider from "../components/Common/ReviewSlider"

const About = () => {
  return (
    <div className="bg-silk-200">
      {/* <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
          Bringing Medical Care to Your Doorstep
            <HighlightText text={" We are the quickest"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            In today's fast-paced world, finding the time to visit a medical facility when you're feeling unwell can be a challenge. That's where our Home Doctor Service steps in - providing you with quality medical care in the comfort of your own home. Our dedicated team of experienced physicians is committed to delivering timely and compassionate healthcare services, ensuring your well-being is our top priority.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="h-[200px]">

        </div>
      </section>

      

       */}

      <section className="mx-auto mt-20 bg-silk-200 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"> */}
        {/* Reviws from Other Learner */}
        {/* <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from others
        </h1> */}
        {/* <ReviewSlider /> */}
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  )
}

export default About