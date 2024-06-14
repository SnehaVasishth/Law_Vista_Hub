import React, { useEffect, useState } from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper/modules'
import ReactStars from "react-rating-stars-component"
import { apiConnector } from '../../services/apiconnector'
import { ratingsEndpoints } from '../../services/api'
import { FaStar } from 'react-icons/fa'
import lg from"../../assets/Images/passport_size.jpg"


const ReviewSlider = () => {

    const [reviews, setReviews] = useState([]);
    const truncateWords = 15;


   


  return (
    <div className='text-richblack-800 mb-10 mt-5'>
        <div className='max-h-max max-w-maxContent'>
            <Swiper
            slidesPerView={window.innerWidth < 768 ? 1 : 4}
            spaceBetween={24}
            loop={true}
            freeMode={true}
            autoplay={{
                delay: 2000,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className='w-screen'
            >

                
                   <div className=''>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>BizStrategist88</p>
                            <p className='mt-2 mx-auto'>"Opting for a pre-trial was a strategic move for my business. It gave us a deeper understanding of the legal landscape, allowing us to refine our approach. The insights gained were invaluable, and it ultimately led to a favorable outcome. Highly recommended!"</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>ContractPro2023</p>
                            <p className='mt-2 mx-auto'>"As a contract professional, the pre-trial option provided a comprehensive overview of potential legal challenges. It allowed us to address issues proactively, saving time and resources. The strategic guidance proved crucial, and we achieved a successful resolution. Great service!"</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>DealMakerXYZ</p>
                            <p className='mt-2 mx-auto'>Choosing the pre-trial route was a game-changer for our complex deal. It provided clarity on potential legal hurdles, enabling us to negotiate more effectively. The insights gained during the pre-trial consultation contributed significantly to the success of our commercial case."
</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>LegalInsightMaster</p>
                            <p className='mt-2 mx-auto'>"I'm a firm believer in the pre-trial process. It not only prepared us for potential legal disputes but also empowered us with the knowledge needed to navigate the complexities of our commercial case. The benefits far exceeded our expectations. Kudos to the pre-trial team!"</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>Vagish Maurya</p>
                            <p className='mt-2 mx-auto'>The Legal advice I get is straightforward and easy to understand, which is important for me. Using Legalkart has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help."</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>Vagish Maurya</p>
                            <p className='mt-2 mx-auto'>The Legal advice I get is straightforward and easy to understand, which is important for me. Using Legalkart has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help."</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>CommerceNavigator</p>
                            <p className='mt-2 mx-auto'>The pre-trial option was instrumental in navigating our commercial dispute. It provided a roadmap for our legal strategy and helped us anticipate challenges. The personalized guidance and insights were worth every penny. Highly
</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>Vagish Maurya</p>
                            <p className='mt-2 mx-auto'>The Legal advice I get is straightforward and easy to understand, which is important for me. Using Legalkart has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help."</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        </div>
            </Swiper>
        </div>
    </div>
  )
}

export default ReviewSlider
