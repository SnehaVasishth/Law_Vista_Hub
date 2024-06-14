import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";
import CTAButton from './Button';

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-champ-100 shadow-[12px_12px_0_0] shadow-velvet-100 text-velvet-100"
          : "bg-richblack-800"
      }  text-white h-[340px] box-border cursor-pointer`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-white border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={` ${
            currentCard === cardData?.heading && "text-richblack-800 font-custom"
          } font-semibold text-[20px] font-custom`}
        >
          {cardData?.heading}
        </div>
       
        <div className={` ${
            currentCard === cardData?.heading && "text-velvet-100"
          } `}>
          
          
          {cardData?.description}</div>

        <div className="">
        <CTAButton active={true} linkto={"/contact"}>
           
           <div className='flex gap-2 items-center'>
            BOOK APPOINTMENT
           {/* <FaArrowRight/> */}
           </div>

       </CTAButton>
        </div>
      </div>
    
     
      <div></div>
    

     
      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading ? "text-blue-300" : "text-white"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>
       
        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Years</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;