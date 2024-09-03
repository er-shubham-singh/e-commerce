
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa6";


// Import Swiper styles
import 'swiper/css';

import "./styles.css";

export default () => {
    return (
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay:3000,
          disableOnInteraction:false
        }}
        
      >
        <SwiperSlide className=''>
           <div className='pb-14   '>
           <div className='max-w-[320px]  rounded-2xl shadow-2xl relative '>
                <div className=' w-[320px]  py-6 text-[14px] leading-[22px] text-[#747373] text-center px-6'>
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
                </div>
                <div className=''>
                    <img className=' absolute transform bottom-[-50px] left-1/2 -translate-x-1/2 rounded-full w-[100px] h-[100px] text-center' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
                </div>
            </div>
           
           </div>
           <h1 className='text-[24px] leading-[36px] text-[#1e6da4] font-bold flex justify-center'>Mukesh</h1>
           <p className='text-[10px] leading-[14px] text-[#636363] font-bold flex justify-center'>Corporate Employee- SAP INdia</p>
           <div className="flex text-[#fbb245] justify-center text-[18px] ">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
           <div className='pb-14  '>
           <div className='max-w-[320px]  rounded-2xl shadow-2xl relative '>
                <div className=' w-[320px]  py-6 text-[14px] leading-[22px] text-[#747373] text-center px-6'>
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
                </div>
                <div className=''>
                    <img className=' absolute transform bottom-[-50px] left-1/2 -translate-x-1/2 rounded-full w-[100px] h-[100px] text-center' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
                </div>
            </div>
           
           </div>
           <h1 className='text-[24px] leading-[36px] text-[#1e6da4] font-bold flex justify-center'>Mukesh</h1>
           <p className='text-[10px] leading-[14px] text-[#636363] font-bold flex justify-center'>Corporate Employee- SAP INdia</p>
           <div className="flex text-[#fbb245] justify-center text-[18px] ">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
           <div className='pb-14  '>
           <div className='max-w-[320px]  rounded-2xl shadow-2xl relative '>
                <div className=' w-[320px]  py-6 text-[14px] leading-[22px] text-[#747373] text-center px-6'>
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
                </div>
                <div className=''>
                    <img className=' absolute transform bottom-[-50px] left-1/2 -translate-x-1/2 rounded-full w-[100px] h-[100px] text-center' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
                </div>
            </div>
           
           </div>
           <h1 className='text-[24px] leading-[36px] text-[#1e6da4] font-bold flex justify-center'>Mukesh</h1>
           <p className='text-[10px] leading-[14px] text-[#636363] font-bold flex justify-center'>Corporate Employee- SAP INdia</p>
           <div className="flex text-[#fbb245] justify-center text-[18px] ">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
           <div className='pb-14  '>
           <div className='max-w-[320px]  rounded-2xl shadow-2xl relative '>
                <div className=' w-[320px]  py-6 text-[14px] leading-[22px] text-[#747373] text-center px-6'>
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
                </div>
                <div className=''>
                    <img className=' absolute transform bottom-[-50px] left-1/2 -translate-x-1/2 rounded-full w-[100px] h-[100px] text-center' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
                </div>
            </div>
           
           </div>
           <h1 className='text-[24px] leading-[36px] text-[#1e6da4] font-bold flex justify-center'>Mukesh</h1>
           <p className='text-[10px] leading-[14px] text-[#636363] font-bold flex justify-center'>Corporate Employee- SAP INdia</p>
           <div className="flex text-[#fbb245] justify-center text-[18px] ">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
           <div className='pb-14  '>
           <div className='max-w-[320px]  rounded-2xl shadow-2xl relative '>
                <div className=' w-[320px]  py-6 text-[14px] leading-[22px] text-[#747373] text-center px-6'>
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
                </div>
                <div className=''>
                    <img className=' absolute transform bottom-[-50px] left-1/2 -translate-x-1/2 rounded-full w-[100px] h-[100px] text-center' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
                </div>
            </div>
           
           </div>
           <h1 className='text-[24px] leading-[36px] text-[#1e6da4] font-bold flex justify-center'>Mukesh</h1>
           <p className='text-[10px] leading-[14px] text-[#636363] font-bold flex justify-center'>Corporate Employee- SAP INdia</p>
           <div className="flex text-[#fbb245] justify-center text-[18px] ">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
           <div className='pb-14  '>
           <div className='max-w-[320px]  rounded-2xl shadow-2xl relative '>
                <div className=' w-[320px]  py-6 text-[14px] leading-[22px] text-[#747373] text-center px-6'>
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
                </div>
                <div className=''>
                    <img className=' absolute transform bottom-[-50px] left-1/2 -translate-x-1/2 rounded-full w-[100px] h-[100px] text-center' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
                </div>
            </div>
           
           </div>
           <h1 className='text-[24px] leading-[36px] text-[#1e6da4] font-bold flex justify-center'>Mukesh</h1>
           <p className='text-[10px] leading-[14px] text-[#636363] font-bold flex justify-center'>Corporate Employee- SAP INdia</p>
           <div className="flex text-[#fbb245] justify-center text-[18px] ">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
           <div className='pb-14 '>
           <div className='max-w-[320px]  rounded-2xl shadow-2xl relative '>
                <div className=' w-[320px]  py-6 text-[14px] leading-[22px] text-[#747373] text-center px-6'>
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
                </div>
                <div className=''>
                    <img className=' absolute transform bottom-[-50px] left-1/2 -translate-x-1/2 rounded-full w-[100px] h-[100px] text-center' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
                </div>
            </div>
           
           </div>
           <h1 className='text-[24px] leading-[36px] text-[#1e6da4] font-bold flex justify-center'>Mukesh</h1>
           <p className='text-[10px] leading-[14px] text-[#636363] font-bold flex justify-center'>Corporate Employee- SAP INdia</p>
           <div className="flex text-[#fbb245] justify-center text-[18px] ">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
           <div className='pb-14 '>
           <div className='max-w-[320px]  rounded-2xl shadow-2xl relative '>
                <div className=' w-[320px]  py-6 text-[14px] leading-[22px] text-[#747373] text-center px-6'>
                Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
                </div>
                <div className=''>
                    <img className=' absolute transform bottom-[-50px] left-1/2 -translate-x-1/2 rounded-full w-[100px] h-[100px] text-center' src="https://staging.adiyogitechnology.com/sushmagroup/assets/img-Jfh4u6GO.jpeg" alt="" />
                </div>
            </div>
           
           </div>
           <h1 className='text-[24px] leading-[36px] text-[#1e6da4] font-bold flex justify-center'>Mukesh</h1>
           <p className='text-[10px] leading-[14px] text-[#636363] font-bold flex justify-center'>Corporate Employee- SAP INdia</p>
           <div className="flex text-[#fbb245] justify-center text-[18px] ">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
        </SwiperSlide>
       
    
      </Swiper>
    );
  };



