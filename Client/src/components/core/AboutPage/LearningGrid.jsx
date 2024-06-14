import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../../core/HomePage/Button";

const LearningGridArray = [
    {
      order: -1,
      heading: "New FIR filed",
      highlightText: " Near you",
      description:
        "LawVistaHub partners with more than 275+ leading law Firms to bring flexible, affordable, online consultation to individuals and organizations worldwide.",
      BtnText: "Get Details",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Lucknow",
      description:
        "A total of 28 cases have been registered in this district",
    },
    {
      order: 2,
      heading: "Ghaziabad",
      description:
        "A total of 64 cases have been registered in this district",
    },
    {
      order: 3,
      heading: "Mathura",
      description:
        "A total of 56 cases have been registered in this district",
    },
    {
      order: 4,
      heading: "Varanasi",
      description:
        "A total of 82 cases have been registered in this district",
    },
    {
      order: 5,
      heading: "Delhi",
      description:
        "A total of 23 cases have been registered in this district",
    },
  ];


const LearningGrid = () => {
  return (
    <div className='grid grid-col-1 lg:grid-cols-4 mb-10 p-5 lg:w-fit'>
    {
        LearningGridArray.map( (card, index) => {
            return (
                <div
                key={index}
                className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                ${
                    card.order % 2 === 1 ? "bg-champ-100 lg:h-[280px] p-5" : "bg-marble-100 lg:h-[280px] p-5"
                }
                ${card.order === 3 && "lg:col-start-2"}
                ${card.order < 0 && "bg-transparent"}
                `}
                >
                {
                    card.order < 0 
                    ? (
                        <div className='lg:w-[90%] flex flex-col pb-5 gap-3 text-velvet-100'>
                            <div className='text-4xl font-semibold'>
                                {card.heading}
                                <HighlightText text={card.highlightText} />
                            </div>
                            <p className='font-medium'>
                                {card.description}
                            </p>
                            <div className='w-fit mt-4 text-white'>
                                <CTAButton active={false} linkto={card.BtnLink}>
                                    {card.BtnText}
                                </CTAButton>
                            </div>
                        </div>
                    )
                    : (<div className='flex flex-col gap-8 p-7'>
                        <h1 className='text-velvet-100 text-lg'>
                            {card.heading}
                        </h1>
                        <p className='text-velvet-100 font-medium'>
                            {card.description}
                        </p>
                    </div>)
                }

                </div>
            )
        } )
    } 
    </div>
  )
}

export default LearningGrid
