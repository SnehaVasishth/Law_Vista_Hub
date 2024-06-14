import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight , FaAmbulance} from 'react-icons/fa';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import LearningSection from '../components/core/HomePage/LearningSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/Common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/Common/ReviewSlider';
import cartoon from '../assets/Images/cartoonChar.svg';
import spiral from '../assets/Images/curveArrow.svg';
import connect from '../assets/Images/Connect.png'
import chat from '../assets/Images/chat.png'
import resolve from'../assets/Images/377.png'
import bail from '../assets/Images/470.png'
import lawf from '../assets/Images/lawf.webp'
import procedure from '../assets/Images/procedure.jpg'
import Slider from 'react-slick';
import PrivateRoom from './PrivateRoom';



    
//import React, {useRef} from "react";
//import CSSRulePlugin from "gsap/CSSRulePlugin"
import {  Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useEffect } from 'react';


const Home = () => {
    
    
  return (
    
    <div>
        
     
    {/*Section 1*/}

   
        <div className='bg-cover bg-center h-screen homebg'>
       
    <div className='bg-cover m-0 p-0 w-12/12 bg-center h-screen flex items-center mx-auto font-serif  max-w-maxContent text-champ-100 justify-between'>


    





        <div className=' text-silk-200 ml-10 flex flex-col justify-center lg:justify-center lg:items-center w-full'>
        <p className='text-xl'>We are here to help !</p> 
        <p className='text-3xl text-silk-200 font-custom font-bold'>
            Welcome to LawVistaHub
        </p>
        <p className='text-champ-100 mt-2'>
        Streamline Process of Pre-Trial and Case Management
        {/* <CodeBlocks 
        codeblock={`PreTrial`}
        codeColor={"text-champ-100"}
        /> */}
        </p>
        <div className='flex gap-4'>
        <div>
        <Link to={"/dashboard/my-profile"}>
           <div className='group mt-52  mx-auto bg-champ-100 font-bold text-velvet-100 border-2 border-champ-100
           transition-all duration-100 hover:scale-95 w-fit shadow-4xl shadow-champ-100/75'>
              <div className='flex flex-row items-center gap-2 rounded-full px-6 py-[5px] transition-all 
              duration-100 group-hover:bg-champ-100/75 shadow-4xl shadow-champ-100'>
                  <p>Go To Dashboard</p>
                  
              </div>
           </div>
        </Link>
        </div>
        
        <div>
        <Link to={"/contact"}>
           <div className='group mt-52 text-md  mx-auto  text-white border-2 border-white
           transition-all duration-100 hover:scale-95 w-fit shadow-champ-100/75'>
              <div className='flex flex-row items-center gap-2 rounded-full px-6 py-[5px] transition-all 
              duration-100'>
                  <p>Connect With Lawyer</p>
                  
              </div>
           </div>
        </Link>
        </div>
        </div>
        </div>
         <div className='shadow-2xl '>
             {/* <img src={lawf}/> */}
        </div> 
        </div>
        </div>

        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8'>

{/* <InstructorSection /> */}
<div className='mt-8 text-velvet-100 font-custom text-5xl'>
       <h2>Testimonials</h2>
</div>
{/* <h2 className='font-semibold text-4xl text-center mt-10'>Review from Other Learners</h2> */}
<ReviewSlider />
{/* <Slider {...settings}>
<div className='flex w-[50%]'>
<img src="https://t3.ftcdn.net/jpg/02/02/29/18/360_F_202291879_FMb2tvYOYaVwBIlI5cAlEh2w4EypC5eI.jpg" alt="Slide 1" />
</div>
<div>
<img src="https://t3.ftcdn.net/jpg/02/02/29/18/360_F_202291879_FMb2tvYOYaVwBIlI5cAlEh2w4EypC5eI.jpg"alt="Slide 2" />
</div>

</Slider> */}

</div>










        <div className='relative w-full  mx-auto font-serif flex flex-col items-center  max-w-maxContent text-richblack-800 justify-between'>
        <div className='flex  justify-center w-[80%] font-bold text-lg text-richblack-400 mt-18'>
            {/* <div className='flex flex-col gap-32'>
                <div>
                    <img src={connect}
                    width={100}
                    className='rounded-full'
                    ></img>
                </div>
                <div>
                    <img src={chat}
                    width={100}
                    ></img>
                </div>
            </div> */}
           <img  src={cartoon}></img>
           {/* <img src={spiral}></img> */}
               {/* <div className=' flex flex-col gap-32'>
                <div>
                    <img src={resolve}
                    width={100}
                    ></img>
                </div>
                <div>
                    <img src={bail}
                    width={100}
                    >
                    </img>
                </div>
             </div> */}
           </div>
           
          


        




        {/* <div className='flex flex-row mt-8 gap-7'> */}
        {/* <CTAButton active={true} linkto={"/signup"}>
            Top Lawyer
        </CTAButton> */}
        <div className='text-white'>
        {/* <CTAButton active={false} linkto={"/login"}>
            Pro Bono Lawyers
        </CTAButton> */}
        </div>
        {/* </div> */}

        {/* <div className='mx-3 my-12 shadow-lg'>
            <video
            muted
            loop
            autoPlay
            >
            <source src={Banner}/>
            </video>
        </div> */}

        {/* <div className='m-2'>
            <CodeBlocks 
                position={"flex flex-col lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Where justice resides, so does the judiciary."
                      
                        
                    </div>
                }
                subheading={"The judiciary is the cornerstone of a just and ordered society, tasked with interpreting and upholding the law. Comprising judges and magistrates, it serves as the impartial arbiter in disputes, ensuring that justice is dispensed without bias or favor. Through rigorous examination of evidence and legal precedent, the judiciary safeguards individual rights and liberties, upholds the rule of law, and holds those who transgress it accountable."}
                ctabtn1={
                    {
                        btnText:"Pro Bono Lawyers",
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"Chat With Us",
                        linkto:"/login",
                        active:true,
                    }
                }
                codeblock={`Schedule your appointment\nConnect With Pro Bono Lawyers\nPersonalized Dashboard\nRegular and timely Status Update\nGet Free Consultation\nVoice assistant\nChat With Us\nUpload your Documents\nLegal Rigths\nJoin us`}
                codeColor={"text-yellow-25"}
            />
        </div> */}

        {/* <div className='m-2'>
            <CodeBlocks 
                position={"flex flex-col-reverse lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Join Us In
                        <HighlightText text={" Seconds"}/>
                    </div>
                }
                subheading={"Our doctors spend adequate time with our patients to identify the root cause of the problem so that we can not only cure but also prevent the problem from recurring ensuring our patient's questions are answered."}
                ctabtn1={
                    {
                        btnText:"Book Appointment",
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"Learn More",
                        linkto:"/login",
                        active:false,
                    }
                }
                codeblock={`Schedule your appointment\nConnect With doctor\nPersonalized health check ups\nRegular and timely follow-ups are done\nGet Free Consultation\nOrder Medicine\nChat With Us\nUpload your previous Certificates\nBe Healthy\nJoin us`}
                codeColor={"text-yellow-25"}
            />
        </div> */}

        <ExploreMore />
       

    </div>

    {/*Section 2*/}
    <div className='bg-gradient-to-r from-white to-white text-richblack-700'>
       
       <div className='h-[333px] homebg'>

       <div className='w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-5 mx-auto'>

       <div className='h-[100px] lg:h-[200px]'></div>
       <div className='text-white flex  gap-7'>

       <CTAButton active={true} linkto={"/catalog/criminal"}>
           
           <div className='flex gap-2 items-center'>
            Explore More
           <FaArrowRight/>
           </div>

       </CTAButton>

       <CTAButton active={false} linkto={"/contact"}>
           
           <div className='flex items-center'>
            Book Appointment
           </div>

       </CTAButton>

       </div>
       
       </div>

       </div>

        {/*Section 3*/}
    {/* <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8'> */}

{/* <InstructorSection /> */}

{/* <h2 className='font-semibold text-4xl text-center mt-10'>Review from Other Learners</h2> */}
{/* <ReviewSlider /> */}
{/* <Slider {...settings}>
<div className='flex w-[50%]'>
<img src="https://t3.ftcdn.net/jpg/02/02/29/18/360_F_202291879_FMb2tvYOYaVwBIlI5cAlEh2w4EypC5eI.jpg" alt="Slide 1" />
</div>
<div>
<img src="https://t3.ftcdn.net/jpg/02/02/29/18/360_F_202291879_FMb2tvYOYaVwBIlI5cAlEh2w4EypC5eI.jpg"alt="Slide 2" />
</div>

</Slider> */}

{/* </div> */}


       <div className='w-11/12 mx-auto flex- max-w-maxContent flex-col items-center justify-between gap-7'>

             <div className='flex flex-col items-center justify-center lg:flex-row gap-28 mb-10 mt-[100px]'>
                <div className='text-4xl font-semibold lg:w-[45%]'>
                Consultation Made Easy!
                    <HighlightText text={" Expert Lawyer with proven experience  "} />
                </div>

                <div className='flex flex-col gap-6 lg:w-[40%] items-start'>
                   <p className='text-[16px]'>
                   
                  Justice is the cornerstone of a fair and civilized society, ensuring that individuals receive their due rights and that wrongs are rectified. It embodies the principle that all individuals, regardless of background or status, are equal before the law. 
                   </p>

                   <CTAButton active={true} linkto={"/signup"}>
                    Learn more
                   </CTAButton>
                </div>
             </div>

             <TimeLineSection />
             {/* <div className='bg-pure-greys-25/90 flex justify-center mt-5'>
                <img src={procedure}
                width={500}
                />
             </div> */}

             <LearningSection />
             
       </div>


    </div>

    {/*Section 3*/}
    <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8'>

        {/* <InstructorSection /> */}

        {/* <h2 className='font-semibold text-4xl text-center mt-10'>Review from Other Learners</h2> */}
        {/* <ReviewSlider /> */}
        {/* <Slider {...settings}>
      <div className='flex w-[50%]'>
        <img src="https://t3.ftcdn.net/jpg/02/02/29/18/360_F_202291879_FMb2tvYOYaVwBIlI5cAlEh2w4EypC5eI.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="https://t3.ftcdn.net/jpg/02/02/29/18/360_F_202291879_FMb2tvYOYaVwBIlI5cAlEh2w4EypC5eI.jpg"alt="Slide 2" />
      </div>
    
     </Slider> */}
        
    </div>

    {/*Footer Section*/}
    {/* <Footer /> */}
    
    
   
    </div>
  )
}

export default Home
