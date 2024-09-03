import React, { useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdMenu } from "react-icons/io";
// import Slider from "./Slider";
// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import { IoCallOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { Data, faq, MeetMember } from "./DATA VISIBILE/DataVisible";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import SlidingPage from "./SlidingPage";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { LuDownload } from "react-icons/lu";
import { ImInstagram } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";

// Import Swiper styles

export default function SinglePage() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear"
  };

  // for Meet Our Board Member
  let [showData, setShowData] = useState(MeetMember[0]);
  let setShowDetail = (index) => {
    setShowData(MeetMember[index]);
  };

  let [showFaq, setShowFaq] = useState([0]);
  // let handleFaq=(index)=>{
  //   setShowFaq(faq[index])
  // }
  return (
    <div>
      {/* First Section */}
      <div className="grid grid-cols-[45%_55%]">
        <div className=" relative h-[100vh] bg-[url(https://staging.adiyogitechnology.com/sushmagroup/assets/aa3adfea8ebb38b3b1b10f40dabc929a-BGc6J0a9.png)] bg-cover bg-no-repeat  ">
          <div className=" h-[60vh]  uppercase text-white flex  items-center justify-start text-[50px] ps-20">
            we make <br /> homes that <br /> understand <br /> you
          </div>
          <div className="">
            <div className="absolute h-[50px] w-[90%] bg-red-500">
              <video
                height="400px"
                className=" "
                src="https://staging.adiyogitechnology.com/sushmagroup/videos/sushmamaintour.mp4"
                autoPlay
              ></video>
            </div>
          </div>
        </div>

        <div className=" h-[100vh] bg-black ">{/* <Slider /> */}</div>
      </div>

      {/* Section 2 */}
      <div className="my-20">
        <div className="grid grid-cols-[50%,50%]">
          <div className=" text-white flex border-[1px] border-white py-8 items-center justify-center bg-[url(https://staging.adiyogitechnology.com//sushmagroup/assets/089035460b1685390c840f400f092d06-Nby1G-K4.png)] bg-center">
            <svg
              className="text-[40px] "
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 384 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"></path>
            </svg>
            <div>
              <p className="text-[40px] font-bold">100+</p>
              <p className="text-[15px]">
                DELIVERY OF HOMES AND BUSINESS SPACES/MONTH
              </p>
            </div>
          </div>
          <div className=" text-white flex border-[1px] border-white py-8 items-center justify-center bg-[url(https://staging.adiyogitechnology.com//sushmagroup/assets/089035460b1685390c840f400f092d06-Nby1G-K4.png)] bg-center">
            <svg
              className="text-[40px] "
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 384 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"></path>
            </svg>
            <div>
              <p className="text-[40px] font-bold">100+</p>
              <p className="text-[15px]">
                DELIVERY OF HOMES AND BUSINESS SPACES/MONTH
              </p>
            </div>
          </div>
          <div className=" text-white flex border-[1px] border-white py-8 items-center justify-center bg-[url(https://staging.adiyogitechnology.com//sushmagroup/assets/089035460b1685390c840f400f092d06-Nby1G-K4.png)] bg-center">
            <svg
              className="text-[40px] "
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 384 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"></path>
            </svg>
            <div>
              <p className="text-[40px] font-bold">100+</p>
              <p className="text-[15px]">
                DELIVERY OF HOMES AND BUSINESS SPACES/MONTH
              </p>
            </div>
          </div>
          <div className=" text-white flex border-[1px] border-white py-8 items-center justify-center bg-[url(https://staging.adiyogitechnology.com//sushmagroup/assets/089035460b1685390c840f400f092d06-Nby1G-K4.png)] bg-center">
            <svg
              className="text-[40px] "
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 384 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"></path>
            </svg>
            <div>
              <p className="text-[40px] font-bold">100+</p>
              <p className="text-[15px]">
                DELIVERY OF HOMES AND BUSINESS SPACES/MONTH
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SHUSMA GROUP */}
      <div>
        <div className="max-w-[1000px] mx-auto">
          <div className="grid gap-20 grid-cols-[50%_auto]">
            <div className="">
              <img
                className="h-[520px] w-full "
                src="https://staging.adiyogitechnology.com/sushmagroup/assets/46f00ea88134fb2e0b90c47f7672bd3e-CTda4t-G.png"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-[#1e6da4] text-[40px] font-[400] leading-[56px] ">
                About <br /> Sushma Group
              </h1>
              <p className="py-10 text-[#575757] text-[18px] font-[400] leading-[30px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum
              </p>
              <h2 className="font-[400] text-[#575858] leading-[48px] text-[32px]">
                WE PROVIDE YOU THE BEST{" "}
                <span className="font-[600]">EXPERIENCE</span>
              </h2>

              <div>
                <div className="flex px-3 py-3 mt-[30px] rounded-t-[10px] items-center justify-center bg-[#1e6da4] text-white">
                  <div className="text-center px-2 relative">
                    <p className="text-[38px] leading-[38px] font-[700]">
                      100+
                    </p>
                    <p className="text-[10px]">
                      Complete <br /> Project
                    </p>
                    <div className=" rotate-180 absolute top-1 right-[0px] h-[65px] border border-dashed  border-white"></div>
                  </div>
                  <div className="text-center px-3 relative">
                    <p className="text-[38px] leading-[38px] font-[700]">50+</p>
                    <p className="text-[10px]">Complete Project</p>
                    <div className=" rotate-180 absolute top-1 right-[0px] h-[65px] border border-dashed  border-white"></div>
                  </div>
                  <div className="text-center px-3 relative">
                    <p className="text-[38px] leading-[38px] font-[700]">50+</p>
                    <p className="text-[10px]">Complete Project</p>
                    <div className=" rotate-180 absolute top-1 right-[0px] h-[65px] border border-dashed  border-white"></div>
                  </div>
                  <div className="text-center px-3 relative">
                    <p className="text-[38px] leading-[38px] font-[700]">02+</p>
                    <p className="text-[10px]">Complete Project</p>
                  </div>
                </div>
                <div className="bg-[#1e6da4] py-[1px] mt-[2px]"></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Passion For Perfection */}
      <div>
        <div className="max-w-[1200px] mx-auto py-14  m-10 grid grid-cols-[auto_60%] justify-end ">
          <div className="relative w-full h-full z-[100] ">
            <div className="absolute border-2 border-[#2370a6] w-[500px] h-[300px] top-1/2 right-[-50px] transform  -translate-y-1/2 bg-[#2370a6] rounded-lg  ">
              <div className="absolute border-2 border-[#2370a6] w-[495px] h-[294px] top-1/2  right-[1px] transform  -translate-y-1/2 bg-white rounded-lg">
                <div className=" grid items-center justify-center ">
                  <p className="text-[66px] font-[400] text-[#767676] leading-[80px] uppercase">
                    passion for
                  </p>
                  <p className="text-[66px] font-[400] text-[#1e6da4] leading-[80px] uppercase">
                    perfection
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-[]">
            <img
              className=" rounded-lg h-[450px]"
              width="900px"
              src="https://staging.adiyogitechnology.com/sushmagroup/assets/685ddec8f310242e1fd0a6a4bc54c0c8-CcEGxz4J.png"
              alt=""
            />

            <div className="  z-[100] absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <img
                width="150"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACqCAYAAAAwaKTFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxoSURBVHgB7Z37ddu4EsZHOfv/eisIbgXJrSBMBUkH0a1gfSuwbgXJVqC4AudWIKWCOBWQqcDeCmYBA0xocMCHRFLk8PudA9HUyyLwcTgzeHBD4CSY+cpuXDHhKdPykSJsH93fm83mkUBvNgSSWFEau8nIi/Fl2JZlCIpQnHi/23Lv/rZiPhIQgWADFXG+seU1eVFe0eVw4i1sOdry1Yr4nsB6BRsE+o68ON/TZcXZBWeFnWi/0IoFvCrBWpFm5C3ols6/rD9GpWh5vwnb0u899wQpyFvf2zW5EOoFWxHpNfUXSUHeqv0I29LKPQ4RNAUrXy2vwvY19aOglYhXpWBDBP+B/KU+6/ix6iX3KQC6VCQffr8TrRNwRr986i4UtuzIuw0FgfliG/q1LZ9seeBuHGz5M1jhWROObWvLHXdnv4RjWx2uUYL42ngI79sGK7ZY7O9/b8tnW/IOx+2O+QOBy9JDqAcNIk1REW8bOYR7AToK1VnTnVaRSthjNeHEzCHcGRAa5NDSGO71jFZOOKnvOtSVITAszkracsPNwRSEKhBO8jZ3YQ/hDkSwFDmEeh4dhJsz3ITTCVb1DkIdlo7CNQS6wz7qfYAlGI9Qx3mDcG8INBOs6seGSlxV1D8Ftj6vG4zDAdY2AfuenLyh4vr2r4OOcLObkNvynsAv2HePSme5e+6awCRwcw4XLoKD0y7AN1jV6eHmXLcLgg2tkVAx3xIV4wawwFe9IOzjBYl8daINYs2FynAuwJbALOB0XJGv5uoXKuEBZ+4yaLkS6k4vsu+1ksR6YLgAs4a9myahMxhzZ2PigD8RWASc9mt1ibZBrDsCi4J9R4Ne0UKs+uB01/myRRsOTGJLYNFwOnhepmgbDmhLQAUNbbys7AGn86xbAqpoEG1GS6BBrDsCKmGfroxxIjY0d1hOMu8IqIb9wJmYfNaiZXkgC/KsK4HlPO2B5gj7IYLL+LFgNFjuEftIc4K937qsywEYDZaHJ84jc8B+Wkse/bhlONxgFGatCZanVmCS4MphOd11WReR5cgQQRZ4guVxBzu6BCznW3MCoALLa0tMP/g74QoYAqACy/7sN5qShCuwIwAEWO4J29EUJM4YuAKgEeGKPE3WgP0qgnAFQC+CoZs2a8ByB8GOAOgAy1mDjMZCMOs5Y/Ig6AHXe8HGsbIJ64oOAtALlgOw4XUknBkItMBJjH6lTpwVGQFwAuFqHQdgOxqKyfwOsBq4Pnb2gYZgLdY1HOc+nJxuTKchMBosp7nO92UFf0OddQ1ClXAzKJAFGQnByp7XZctyZiAjRbDcEVIlZ2RDRiFY2eH0JVhXdZkB7navVsee4SYMDg95BRcaU5WlSZzhTeTa6uDSsBwjGeoL10dkabSuhk/jwLC2g8H1LNSO+iJ8yZ6UcYZgS3CjigHg+hiDfimuREMaUgafL1hHrrFupoTlFFcmvfdF4jvi+zIdN5tNQUDC2OJEe8NIgZ2E1daj3dxGT3ePFbi+3JDKQGMgCxtbWwRlJ8D14OuhkwHglbgDDh5esCV7rXU2JtzBLZBcArgD57O15cCwtn3p7xZwPTugttJHtLBV9gxr2wkW3IK2D0iJdENK4WkE+1TxjBRYJ7jFLYhdgizav4c7MAgueNgxUmBd+H+0n1V3YsHG/utXAkNiKKTACKQ4Rvtvku/kejorI8XwdC6BRG7LOwLPENpETm+x7L+qToTzZQVbsme4Cc/g+qCrrHyt6hLEC3Tdhx4IMC5bQgosJnZFf2qzKtis5UNgPIwtn2Ftf3If7b8q/3ghPRmYdoU54Nja4uKIa1o3x2g/K/+oCtZEb/pO4BK4uOEjrzsFVkT7LtZ4iqeeBBt2nvmw1n+9J3BJDK00BRZipyJ62riH0sLWAi4Cc6HscMhoXcQafNJoKdg4ffWDwJww5DMJawrKYg0a95CysAWBObKl9aTAYgv70j2UgjXRiwWBuWJoHSmwuA/AuIdSsC+jF7Ey4fzZku4UWGxhjXtIzen6m8AS0JwCa7SwJnqxILAkDClLgYXU1jPRuvSrKFiMgV0sZQps+hu3jUNsZa9eENCGIe/bagzKrl5wfQghRmjpYEs+BfaelksR7T9ZWAhWL8aWu4WL9hlwCdbBR1ICBLsOjBZ/FoJdD4YUAMGuBJuqPJICINh18D9SAgSrn1trXXekhBdCr5YhoIHClre2fbekCFhYnfxly78V+K0m2i9KwRbVZzHVeLG4IXnOql4rWVOi1qn1GwENOHH+pclXDTwTrDsJRQtL9TUKwHw5kr/870gRwlW+cA+lYOMJX38QmDvOqv7XCvWt0uGgJtov3MNv1Z2GN4N58YW8WAvSS+y/Ps2CSQn2JYE5UtjyHy29Vi2IM7lTPqyWEeua0JKq6kocRxXuAS7B/CloPVa1SuwSPM2ifbKwwReq5u2ukIudBW4MwJqsahVx+awX8RMVkNq6HEdb/uVSVWtcVDpMoqxa2MeyHqqCjZfXfEtgarSnqrpiov2fxvQ36ckALOy0HMn7qgWBLNr/uRp8VbDH6E3IFEyDs6pOqF8IlMS3OpJXg+eO96zXAl/+LjKfGLesfwa33M0oHl4Y34UOVnYcCtI1qmpIsmj/2d2MYsHGfixufDY8a05VdSFeQyG9Gjx3vQudEnhal+DAeta8Gg2u31TuXd8PZKQUnkaw7qS/JtBKoj2eGUxpikzsx6pZ5uYCHMlf/j8R6EKstWOrj+8samwhSCk8noV1VhUnek/Yu01Vut3LgVeS3hpJsEhVnUCiLUz8vtSs2dtoHzfubacgpKrOQXIHCuoCC26BRqvBw1lYWNUz4Xqw389Ict0tUBfpDiDYAyNVdTZcN5AO0+c73Jfs4sYhZZwhWKSqBsTW5eeofvfUF5b7dDNSxImCPTAGtw9Gog0yOgWupxnuSBlcd31SuPch+BwYW6c3UT2fflNDln0LVcGFcFJK7LUd91zgc4Mt4QsP0RfuSBHsL0l5Qqju+YzAKNi63Qr1begchC9Vl+IKov0cHeNO23HODcFQ9A+2El/8oNnKVmEEVJMgGEIerO65nuJSPewQjM9o1jV8+dWo/wCsCqudP0ezrpV/IpnwjADoActB7jjGT/hH6nq/wLhwvVcr57HiBpbzshj3CTrBcq/WjsaE63nZnBGAgQ5w/Qp9eq9Wj38qnSVqbr4LxoHlQGuarm6up7kcGQEgEIxcnMufLsvEcporh2sAJBJupKEpYTkAg2sAnsH10VjTuQLCj/k0mx8DZgfL8c7lOpwSrsEDoz9+9bDcQZBfXBv2B7zmukP9jeHPrhqudxDM5+prf8j1rEw/uCgs+63zWv0mcUbdEFgVts3fCzoYv4OgLyz7s/O5DIDRYTnf6jRhaI4kfrDbx9x95XB6qtG8257l/CwyB4ppEOsy1m5gOQjLIVp9cNoV3NGSYHm8AUSriCDWb0I7L3M9XIhWLw1iXfZiKyynuyDaBcPeZ5XEqqPDqEG0yB4sDE4HWLp6NxOixdLqC2I1Yi1h2ad1oEds5rBPV0oL5x1UirUEol0eLE9vcXymNdAgWndpMQRmAftMwD7RVjtaE+wHSUiXmJwxP+zicPOqjutcfbylUuAiXAj2LoBkTB5Wb0yCaO8Sos0ZLsJkhLY4JNoC7loVTvu1sLYT0GBVHbitkwT71EnOsLaT0WJVcbecNri+GnbMHsI9H/YZgBtOW9UD6rkH7Jf3zDltbXHmn0hL3cKqnkoHa5szpuB0hr3LdWiozwOs6gCwz9nmEO5pdBAq7kE2BuxnMuRtwoWV+OmjbjsI1WVnkAEYC253E8qG2K9RuNweTJWssn4uRkfhOg7sra5aKxJE2nbZr9ZHRuAy9BCu406LeCsidUn9LvfLvYNQZ0QQbpuPG1uaD7ygyyL/8kv3HUWqzkfdkEJco9qNi3qzjh8pbDmG8n2z2dzTDAgnU2aLm0r0Jmy7cLTliy239lgeSREqBVsSGnxLXrymx0ddIzvRfiff+E/7YzV+sICGvCBdeUleqH0so/ttt7Z8sb/zSEpRLdgqwX9z88feUT/xVnGiKCrbH7Y82PJ3eL1IfM6E7e+2/EFekKVIDfUTZvx71Iu0ymoEW4X9bF13iXUCzmhZHG356rZrEWmVVQo2JlhfV0o/cS5BSuyaHLX5pH2BYAWCBTbkxfuq8veYFOTF+SNsnTgLAs+AYHsQgqPSApc+qNv+Ht5iEh8twtb5us5Cln6vE+YjhNmdfwC75Ek0C/eS0QAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* WHY SUSHMA GROUP */}
      <div>
        <div className="grid grid-cols-[30%_70%]">
          <div>
            <video style={{objectFit:'cover',width:'100%',height:'100%'}}
              className=""
              src="https://staging.adiyogitechnology.com/sushmagroup/videos/whysushmavideo.mp4"
              autoPlay
            />
          </div>
          <div className=" pt-10 bg-[#1e6da4] text-white">
            <h1 className="text-center text-[40px] leading-[60px] font-bold ">
              Why Sushma Group
            </h1>
            <p className="text-center py-3 text-[18px] leading-[27px] font-[400] ">
              Within the premises of the Sushma Township are reputed Schools.
            </p>
            <div className=" mx-[60px]">
              <div className="flex flex-wrap gap-[7%]">
                <div className=" border-b-[1px] py-2 mb-10 border-[#3489c4]  flex  items-center basis-[45%]">
                  <div className="text-[16px] leading-[24px] pe-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAnCAYAAABJ0cukAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7ZntUcJAEIbfOPyXDowVgBUIFUgH0gF2YOwgdoAVqB1gBdABlBAriLvJnmYykOyFXD4kz8zOXcJe7i738WYP4L8Rx/F7XI09WsDL3+CWoDq3nucd0CCjgt/WZF8oZ0q2QlfITIml0n+WKeOjYa7Qcy6nAzw9ZIeaokOMLHwDsgXSnWuBjlBlCl2jQ9iMQG3IbrVENULSmshctNIB4gnVtYMbH5oLmw5woQnZK85njL/GRMoyfq5sgroDNGw7Su5QLzt67lzjKN9afv7+IGRtY9WBJkSM6hizaf1tlJh3ji2lARwh2yvP9b22EzYjYN7+PdzhI91ljJXS+zVQt5Dtzwvo7LEZgUMudUF0In8SGyEL6O2ymG0K3Hihf6OcR7LZkTp2VMdc8vV2QB76UeLyqQnqOQwtqGMDCwYlbhunISX5rshCG2Ul32cbsXQdUvKi9pHuXGGZs6yNQPJrzXpqKqRUj4AtwyJuG9ch5RvZA9JzVg2/Qqk9JHYaUrJ6Qxal0p/VVxViGoY10DbJFBKhyQuUX/TNkmGSzSuP2G8kHSvrSHxNWSkT8bT2pPFbHDmy6AEvZgo5ExrXJP+RySj0rhO81f4AzU/2H8MLH8IAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[17px] leading-[9px]">
                      Quality Construction
                    </p>
                  </div>
                </div>
                <div className=" border-b-[1px] py-2 mb-10 border-[#3489c4]  flex  items-center basis-[45%]">
                  <div className="text-[16px] leading-[24px] pe-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAnCAYAAABJ0cukAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7ZntUcJAEIbfOPyXDowVgBUIFUgH0gF2YOwgdoAVqB1gBdABlBAriLvJnmYykOyFXD4kz8zOXcJe7i738WYP4L8Rx/F7XI09WsDL3+CWoDq3nucd0CCjgt/WZF8oZ0q2QlfITIml0n+WKeOjYa7Qcy6nAzw9ZIeaokOMLHwDsgXSnWuBjlBlCl2jQ9iMQG3IbrVENULSmshctNIB4gnVtYMbH5oLmw5woQnZK85njL/GRMoyfq5sgroDNGw7Su5QLzt67lzjKN9afv7+IGRtY9WBJkSM6hizaf1tlJh3ji2lARwh2yvP9b22EzYjYN7+PdzhI91ljJXS+zVQt5Dtzwvo7LEZgUMudUF0In8SGyEL6O2ymG0K3Hihf6OcR7LZkTp2VMdc8vV2QB76UeLyqQnqOQwtqGMDCwYlbhunISX5rshCG2Ul32cbsXQdUvKi9pHuXGGZs6yNQPJrzXpqKqRUj4AtwyJuG9ch5RvZA9JzVg2/Qqk9JHYaUrJ6Qxal0p/VVxViGoY10DbJFBKhyQuUX/TNkmGSzSuP2G8kHSvrSHxNWSkT8bT2pPFbHDmy6AEvZgo5ExrXJP+RySj0rhO81f4AzU/2H8MLH8IAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[17px] leading-[9px]">
                      Quality Construction
                    </p>
                  </div>
                </div>
                <div className=" border-b-[1px] py-2 mb-10 border-[#3489c4]  flex  items-center basis-[45%]">
                  <div className="text-[16px] leading-[24px] pe-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAnCAYAAABJ0cukAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7ZntUcJAEIbfOPyXDowVgBUIFUgH0gF2YOwgdoAVqB1gBdABlBAriLvJnmYykOyFXD4kz8zOXcJe7i738WYP4L8Rx/F7XI09WsDL3+CWoDq3nucd0CCjgt/WZF8oZ0q2QlfITIml0n+WKeOjYa7Qcy6nAzw9ZIeaokOMLHwDsgXSnWuBjlBlCl2jQ9iMQG3IbrVENULSmshctNIB4gnVtYMbH5oLmw5woQnZK85njL/GRMoyfq5sgroDNGw7Su5QLzt67lzjKN9afv7+IGRtY9WBJkSM6hizaf1tlJh3ji2lARwh2yvP9b22EzYjYN7+PdzhI91ljJXS+zVQt5Dtzwvo7LEZgUMudUF0In8SGyEL6O2ymG0K3Hihf6OcR7LZkTp2VMdc8vV2QB76UeLyqQnqOQwtqGMDCwYlbhunISX5rshCG2Ul32cbsXQdUvKi9pHuXGGZs6yNQPJrzXpqKqRUj4AtwyJuG9ch5RvZA9JzVg2/Qqk9JHYaUrJ6Qxal0p/VVxViGoY10DbJFBKhyQuUX/TNkmGSzSuP2G8kHSvrSHxNWSkT8bT2pPFbHDmy6AEvZgo5ExrXJP+RySj0rhO81f4AzU/2H8MLH8IAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[17px] leading-[9px]">
                      Quality Construction
                    </p>
                  </div>
                </div>
                <div className=" border-b-[1px] py-2 mb-10 border-[#3489c4]  flex  items-center basis-[45%]">
                  <div className="text-[16px] leading-[24px] pe-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAnCAYAAABJ0cukAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7ZntUcJAEIbfOPyXDowVgBUIFUgH0gF2YOwgdoAVqB1gBdABlBAriLvJnmYykOyFXD4kz8zOXcJe7i738WYP4L8Rx/F7XI09WsDL3+CWoDq3nucd0CCjgt/WZF8oZ0q2QlfITIml0n+WKeOjYa7Qcy6nAzw9ZIeaokOMLHwDsgXSnWuBjlBlCl2jQ9iMQG3IbrVENULSmshctNIB4gnVtYMbH5oLmw5woQnZK85njL/GRMoyfq5sgroDNGw7Su5QLzt67lzjKN9afv7+IGRtY9WBJkSM6hizaf1tlJh3ji2lARwh2yvP9b22EzYjYN7+PdzhI91ljJXS+zVQt5Dtzwvo7LEZgUMudUF0In8SGyEL6O2ymG0K3Hihf6OcR7LZkTp2VMdc8vV2QB76UeLyqQnqOQwtqGMDCwYlbhunISX5rshCG2Ul32cbsXQdUvKi9pHuXGGZs6yNQPJrzXpqKqRUj4AtwyJuG9ch5RvZA9JzVg2/Qqk9JHYaUrJ6Qxal0p/VVxViGoY10DbJFBKhyQuUX/TNkmGSzSuP2G8kHSvrSHxNWSkT8bT2pPFbHDmy6AEvZgo5ExrXJP+RySj0rhO81f4AzU/2H8MLH8IAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[17px] leading-[9px]">
                      Quality Construction
                    </p>
                  </div>
                </div>
                <div className=" border-b-[1px] py-2 mb-10 border-[#3489c4]  flex  items-center basis-[45%]">
                  <div className="text-[16px] leading-[24px] pe-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAnCAYAAABJ0cukAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7ZntUcJAEIbfOPyXDowVgBUIFUgH0gF2YOwgdoAVqB1gBdABlBAriLvJnmYykOyFXD4kz8zOXcJe7i738WYP4L8Rx/F7XI09WsDL3+CWoDq3nucd0CCjgt/WZF8oZ0q2QlfITIml0n+WKeOjYa7Qcy6nAzw9ZIeaokOMLHwDsgXSnWuBjlBlCl2jQ9iMQG3IbrVENULSmshctNIB4gnVtYMbH5oLmw5woQnZK85njL/GRMoyfq5sgroDNGw7Su5QLzt67lzjKN9afv7+IGRtY9WBJkSM6hizaf1tlJh3ji2lARwh2yvP9b22EzYjYN7+PdzhI91ljJXS+zVQt5Dtzwvo7LEZgUMudUF0In8SGyEL6O2ymG0K3Hihf6OcR7LZkTp2VMdc8vV2QB76UeLyqQnqOQwtqGMDCwYlbhunISX5rshCG2Ul32cbsXQdUvKi9pHuXGGZs6yNQPJrzXpqKqRUj4AtwyJuG9ch5RvZA9JzVg2/Qqk9JHYaUrJ6Qxal0p/VVxViGoY10DbJFBKhyQuUX/TNkmGSzSuP2G8kHSvrSHxNWSkT8bT2pPFbHDmy6AEvZgo5ExrXJP+RySj0rhO81f4AzU/2H8MLH8IAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[17px] leading-[9px]">
                      Quality Construction
                    </p>
                  </div>
                </div>
                <div className=" border-b-[1px] py-2 mb-10 border-[#3489c4]  flex  items-center basis-[45%]">
                  <div className="text-[16px] leading-[24px] pe-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAnCAYAAABJ0cukAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7ZntUcJAEIbfOPyXDowVgBUIFUgH0gF2YOwgdoAVqB1gBdABlBAriLvJnmYykOyFXD4kz8zOXcJe7i738WYP4L8Rx/F7XI09WsDL3+CWoDq3nucd0CCjgt/WZF8oZ0q2QlfITIml0n+WKeOjYa7Qcy6nAzw9ZIeaokOMLHwDsgXSnWuBjlBlCl2jQ9iMQG3IbrVENULSmshctNIB4gnVtYMbH5oLmw5woQnZK85njL/GRMoyfq5sgroDNGw7Su5QLzt67lzjKN9afv7+IGRtY9WBJkSM6hizaf1tlJh3ji2lARwh2yvP9b22EzYjYN7+PdzhI91ljJXS+zVQt5Dtzwvo7LEZgUMudUF0In8SGyEL6O2ymG0K3Hihf6OcR7LZkTp2VMdc8vV2QB76UeLyqQnqOQwtqGMDCwYlbhunISX5rshCG2Ul32cbsXQdUvKi9pHuXGGZs6yNQPJrzXpqKqRUj4AtwyJuG9ch5RvZA9JzVg2/Qqk9JHYaUrJ6Qxal0p/VVxViGoY10DbJFBKhyQuUX/TNkmGSzSuP2G8kHSvrSHxNWSkT8bT2pPFbHDmy6AEvZgo5ExrXJP+RySj0rhO81f4AzU/2H8MLH8IAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[17px] leading-[9px]">
                      Quality Construction
                    </p>
                  </div>
                </div>
                <div className=" border-b-[1px] py-2 mb-10 border-[#3489c4]  flex  items-center basis-[45%]">
                  <div className="text-[16px] leading-[24px] pe-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAnCAYAAABJ0cukAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7ZntUcJAEIbfOPyXDowVgBUIFUgH0gF2YOwgdoAVqB1gBdABlBAriLvJnmYykOyFXD4kz8zOXcJe7i738WYP4L8Rx/F7XI09WsDL3+CWoDq3nucd0CCjgt/WZF8oZ0q2QlfITIml0n+WKeOjYa7Qcy6nAzw9ZIeaokOMLHwDsgXSnWuBjlBlCl2jQ9iMQG3IbrVENULSmshctNIB4gnVtYMbH5oLmw5woQnZK85njL/GRMoyfq5sgroDNGw7Su5QLzt67lzjKN9afv7+IGRtY9WBJkSM6hizaf1tlJh3ji2lARwh2yvP9b22EzYjYN7+PdzhI91ljJXS+zVQt5Dtzwvo7LEZgUMudUF0In8SGyEL6O2ymG0K3Hihf6OcR7LZkTp2VMdc8vV2QB76UeLyqQnqOQwtqGMDCwYlbhunISX5rshCG2Ul32cbsXQdUvKi9pHuXGGZs6yNQPJrzXpqKqRUj4AtwyJuG9ch5RvZA9JzVg2/Qqk9JHYaUrJ6Qxal0p/VVxViGoY10DbJFBKhyQuUX/TNkmGSzSuP2G8kHSvrSHxNWSkT8bT2pPFbHDmy6AEvZgo5ExrXJP+RySj0rhO81f4AzU/2H8MLH8IAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[17px] leading-[9px]">
                      Quality Construction
                    </p>
                  </div>
                </div>
                <div className=" border-b-[1px] py-2 mb-10 border-[#3489c4]  flex  items-center basis-[45%]">
                  <div className="text-[16px] leading-[24px] pe-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAnCAYAAABJ0cukAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7ZntUcJAEIbfOPyXDowVgBUIFUgH0gF2YOwgdoAVqB1gBdABlBAriLvJnmYykOyFXD4kz8zOXcJe7i738WYP4L8Rx/F7XI09WsDL3+CWoDq3nucd0CCjgt/WZF8oZ0q2QlfITIml0n+WKeOjYa7Qcy6nAzw9ZIeaokOMLHwDsgXSnWuBjlBlCl2jQ9iMQG3IbrVENULSmshctNIB4gnVtYMbH5oLmw5woQnZK85njL/GRMoyfq5sgroDNGw7Su5QLzt67lzjKN9afv7+IGRtY9WBJkSM6hizaf1tlJh3ji2lARwh2yvP9b22EzYjYN7+PdzhI91ljJXS+zVQt5Dtzwvo7LEZgUMudUF0In8SGyEL6O2ymG0K3Hihf6OcR7LZkTp2VMdc8vV2QB76UeLyqQnqOQwtqGMDCwYlbhunISX5rshCG2Ul32cbsXQdUvKi9pHuXGGZs6yNQPJrzXpqKqRUj4AtwyJuG9ch5RvZA9JzVg2/Qqk9JHYaUrJ6Qxal0p/VVxViGoY10DbJFBKhyQuUX/TNkmGSzSuP2G8kHSvrSHxNWSkT8bT2pPFbHDmy6AEvZgo5ExrXJP+RySj0rhO81f4AzU/2H8MLH8IAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[17px] leading-[9px]">
                      Quality Construction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR OFFERING */}
      <div>
        <div className="my-12">
          <h1 className=" text-center text-[40px] leading-[60px] text-[#1e6da4] font-bold">
            OUR OFFERING
          </h1>
          <p className=" text-center text-[18px] leading-[27px] text-[#5a5454]">
            Within the premises of the Sushma Township are reputed Schools.
          </p>
          <div className="border-y-[1px] border-[#a7babe] py-4">
            <div className="flex justify-around">
              <div className="basis-[10%]">
                <h1 className="text-[26px] text-[#94999a] font-[700]">
                  RESIDENTIAL
                </h1>
              </div>
              <div className="basis-[10%]">
                <h1 className="text-[26px] text-[#94999a] font-[700]">
                  RESIDENTIAL
                </h1>
              </div>
              <div className="basis-[10%]">
                <h1 className="text-[26px] text-[#94999a] font-[700]">
                  RESIDENTIAL
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="ps-4  grid grid-cols-[65%_25%_auto]">
            <div>
              <img
                className="h-full"
                src="https://staging.adiyogitechnology.com/sushmagroup/assets/d172e02422ee757c63b0a92502f6001f-Cd_o3t6P.png"
                alt=""
              />
            </div>
            <div className=" shadow shadow-[black] border ">
              <div className="my-7 mx-8">
                <div className="w-[200px]">
                  <img
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/c14334e5e2fd343ccc75a74621dff2fb-eBxvA3oa.png"
                    alt=""
                  />
                </div>
                <h1 className="py-4 text-[30px] leading-[45px] text-[#4e4a4a] font-[500]">
                  SUSHMA ELEMENTHA
                </h1>
                <div className="border-b-[2px] border-[]#ccc">
                  <h1 className="text-[17px] leading-[26px] text-[#1e6da4]">
                    RERA NUMBER
                  </h1>
                  <p className="pb-3 text-[19px] leading-[25px] text-[#464646]">
                    PBRERA-SAS79-PR0680
                  </p>
                </div>
                <div className="border-b-[2px] pt-3 border-[]#ccc">
                  <h1 className="text-[17px] leading-[26px] text-[#1e6da4]">
                    RERA NUMBER
                  </h1>
                  <p className="pb-3 text-[19px] leading-[25px] text-[#464646]">
                    PBRERA-SAS79-PR0680
                  </p>
                </div>
                <div className="border-b-[2px] pt-3 border-[]#ccc">
                  <h1 className="text-[17px] leading-[26px] text-[#1e6da4]">
                    RERA NUMBER
                  </h1>
                  <p className="pb-3 text-[19px] leading-[25px] text-[#464646]">
                    PBRERA-SAS79-PR0680
                  </p>
                </div>
                <div className=" pt-3 ">
                  <h1 className="text-[17px] leading-[26px] text-[#1e6da4]">
                    RERA NUMBER
                  </h1>
                  <p className="pb-3 text-[19px] leading-[25px] text-[#464646]">
                    PBRERA-SAS79-PR0680
                  </p>
                </div>
                <div className="flex mt-3 gap-6">
                  <div className="border rounded-full p-3 border-[#86b0ce] text-[#86b0ce] text-[30px]">
                    <IoCallOutline />
                  </div>
                  <div className="border rounded-full p-3 border-[#86b0ce] text-[#86b0ce] text-[30px]">
                    <PiTelegramLogo />
                  </div>
                  <div className="border rounded-full p-3 border-[#86b0ce] text-[#86b0ce] text-[30px]">
                    {" "}
                    <IoLogoWhatsapp />
                  </div>
                </div>
                <button className=" mt-8 py-2 px-3 flex items-center border   border-[#86b0ce] text-[#86b0ce] text-[20px] font-bold ">
                  EXPLORE NOW{" "}
                  <span>
                    <IoArrowForward />
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-[#1e6da4]">
              <h1 className="rotate-90   mt-[90px] text-[25px]  text-[#8db5d1] ">
                RESINDETIAL
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER GALLERY */}
      <div>
        <div className="my-12 max-w-[1380px] mx-auto">
          <Slider {...settings}>
            <div>
              <div className="overflow-hidden rounded-lg me-10 ">
                <div className="relative  transition-transform duration-1000 ease-in-out transform hover:scale-110">
                  <img
                    className="h-[250px] w-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/0fffcb139262bbb172f983b447243756-B1zFwik-.png"
                    alt=""
                  />
                  <div>
                    <img
                      className="absolute bottom-0 bg-white h-[40px]"
                      src="https://staging.adiyogitechnology.com/sushmagroup/assets/666b2e9f30e4125306f6f3824aef55cf-Bph2PvQG.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="border shadow-lg">
                  <h1 className="px-3 py-4 text-[22px] text-[#1e6da4] font-[700]">
                    SUSHMA BELLEZA
                  </h1>
                  <p className="px-3 pb-4">ZARIKPUR</p>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden rounded-lg me-10 ">
                <div className="relative  transition-transform duration-1000 ease-in-out transform hover:scale-110">
                  <img
                    className="h-[250px] w-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/0fffcb139262bbb172f983b447243756-B1zFwik-.png"
                    alt=""
                  />
                  <div>
                    <img
                      className="absolute bottom-0 bg-white h-[40px]"
                      src="https://staging.adiyogitechnology.com/sushmagroup/assets/666b2e9f30e4125306f6f3824aef55cf-Bph2PvQG.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="border shadow-lg">
                  <h1 className="px-3 py-4 text-[22px] text-[#1e6da4] font-[700]">
                    SUSHMA BELLEZA
                  </h1>
                  <p className="px-3 pb-4">ZARIKPUR</p>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden rounded-lg me-10 ">
                <div className="relative  transition-transform duration-1000 ease-in-out transform hover:scale-110">
                  <img
                    className="h-[250px] w-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/0fffcb139262bbb172f983b447243756-B1zFwik-.png"
                    alt=""
                  />
                  <div>
                    <img
                      className="absolute bottom-0 bg-white h-[40px]"
                      src="https://staging.adiyogitechnology.com/sushmagroup/assets/666b2e9f30e4125306f6f3824aef55cf-Bph2PvQG.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="border shadow-lg">
                  <h1 className="px-3 py-4 text-[22px] text-[#1e6da4] font-[700]">
                    SUSHMA BELLEZA
                  </h1>
                  <p className="px-3 pb-4">ZARIKPUR</p>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden rounded-lg me-10 ">
                <div className="relative  transition-transform duration-1000 ease-in-out transform hover:scale-110">
                  <img
                    className="h-[250px] w-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/0fffcb139262bbb172f983b447243756-B1zFwik-.png"
                    alt=""
                  />
                  <div>
                    <img
                      className="absolute bottom-0 bg-white h-[40px]"
                      src="https://staging.adiyogitechnology.com/sushmagroup/assets/666b2e9f30e4125306f6f3824aef55cf-Bph2PvQG.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="border shadow-lg">
                  <h1 className="px-3 py-4 text-[22px] text-[#1e6da4] font-[700]">
                    SUSHMA BELLEZA
                  </h1>
                  <p className="px-3 pb-4">ZARIKPUR</p>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden rounded-lg me-10 ">
                <div className="relative  transition-transform duration-1000 ease-in-out transform hover:scale-110">
                  <img
                    className="h-[250px] w-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/0fffcb139262bbb172f983b447243756-B1zFwik-.png"
                    alt=""
                  />
                  <div>
                    <img
                      className="absolute bottom-0 bg-white h-[40px]"
                      src="https://staging.adiyogitechnology.com/sushmagroup/assets/666b2e9f30e4125306f6f3824aef55cf-Bph2PvQG.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="border shadow-lg">
                  <h1 className="px-3 py-4 text-[22px] text-[#1e6da4] font-[700]">
                    SUSHMA BELLEZA
                  </h1>
                  <p className="px-3 pb-4">ZARIKPUR</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* OUR SUCCESS STORY */}
      <div>
        <div className="my-20">
          <h1 className="text-center font-[700] text-[40px] text-[#1e6da4]">
            OUR SUCCESS STORY
          </h1>
          <p className="text-center text-[18px] text-[#5a5454]">
            Within the premises of the Sushma Township are reputed Schools.
          </p>
        </div>

        <Marquee>
          <div className="grid my-10">
            <div className="inline-flex ">
              <div className=" relative w-[380px] pt-14 px-4 pb-4 flex border-[#1e6da4] border-t-0 border-[2px] border-dashed">
                <div className="absolute top-[-18px] left-[-9px] text-[#1e6da4] ">
                  {" "}
                  <FaCircle />
                </div>
                <div className="absolute top-[-18px] right-[-9px] text-[#1e6da4] ">
                  {" "}
                  <FaCircle />
                </div>
                <div className="">
                  <img
                    className="w-[300px] h-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/2019villas2-CDfLfbLj.png"
                    alt=""
                  />
                </div>
                <div className="ps-3">
                  <p className="text-[20px] font-bold text-[#353535]">2019</p>
                  <p className="font-[600] text-[21px] text-[#1e6da4] uppercase">
                    Infinium
                  </p>
                  <p className="text-[12px] text-[#5a5454]">
                    Infinium by Sushma Group Best Commercial property in
                    Zirakpur Located on Chandigarh Delhi NH, Zirakpur, one of
                    the busiest corridor connecting to Chandigarh
                  </p>
                </div>
              </div>

              <div className=" relative w-[380px] pt-14 px-4 pb-4 flex border-[#1e6da4] border-t-0 border-l-0 border-[2px] border-dashed">
                <div className="absolute top-[-18px] right-[-9px] text-[#1e6da4] ">
                  {" "}
                  <FaCircle />
                </div>
                <div className="">
                  <img
                    className="w-[300px] h-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/2019villas2-CDfLfbLj.png"
                    alt=""
                  />
                </div>
                <div className="ps-3">
                  <p className="text-[20px] font-bold text-[#353535]">2019</p>
                  <p className="font-[600] text-[21px] text-[#1e6da4] uppercase">
                    Infinium
                  </p>
                  <p className="text-[12px] text-[#5a5454]">
                    Infinium by Sushma Group Best Commercial property in
                    Zirakpur Located on Chandigarh Delhi NH, Zirakpur, one of
                    the busiest corridor connecting to Chandigarh
                  </p>
                </div>
              </div>
              <div className="relative w-[380px] pt-14 px-4 pb-4 flex border-[#1e6da4] border-t-0 border-l-0 border-[2px] border-dashed">
                <div className="absolute top-[-18px] right-[-9px] text-[#1e6da4] ">
                  {" "}
                  <FaCircle />
                </div>
                <div className="">
                  <img
                    className="w-[300px] h-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/2019villas2-CDfLfbLj.png"
                    alt=""
                  />
                </div>
                <div className="ps-3">
                  <p className="text-[20px] font-bold text-[#353535]">2019</p>
                  <p className="font-[600] text-[21px] text-[#1e6da4] uppercase">
                    Infinium
                  </p>
                  <p className="text-[12px] text-[#5a5454]">
                    Infinium by Sushma Group Best Commercial property in
                    Zirakpur Located on Chandigarh Delhi NH, Zirakpur, one of
                    the busiest corridor connecting to Chandigarh
                  </p>
                </div>
              </div>
              <div className="w-[380px] pt-14 px-4 pb-4 flex border-r-0 border-[#1e6da4] border-t-0 border-l-0 border-[2px] border-dashed">
                <div className="">
                  <img
                    className="w-[300px] h-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/2019villas2-CDfLfbLj.png"
                    alt=""
                  />
                </div>
                <div className="ps-3">
                  <p className="text-[20px] font-bold text-[#353535]">2019</p>
                  <p className="font-[600] text-[21px] text-[#1e6da4] uppercase">
                    Infinium
                  </p>
                  <p className="text-[12px] text-[#5a5454]">
                    Infinium by Sushma Group Best Commercial property in
                    Zirakpur Located on Chandigarh Delhi NH, Zirakpur, one of
                    the busiest corridor connecting to Chandigarh
                  </p>
                </div>
              </div>
            </div>
            <div className="inline-flex ">
              <div className=" relative w-[380px] pt-5 px-4 pb-14 flex border-[#1e6da4] border-b-0  border-t-0 border-[2px] border-dashed">
                <div className="absolute bottom-[0] left-[-9px] text-[#1e6da4] ">
                  {" "}
                  <FaCircle />
                </div>
                <div className="absolute bottom-[0] right-[-9px] text-[#1e6da4] ">
                  {" "}
                  <FaCircle />
                </div>
                <div className="">
                  <img
                    className="w-[300px] h-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/2019villas2-CDfLfbLj.png"
                    alt=""
                  />
                </div>
                <div className="ps-3">
                  <p className="text-[20px] font-bold text-[#353535]">2019</p>
                  <p className="font-[600] text-[21px] text-[#1e6da4] uppercase">
                    Infinium
                  </p>
                  <p className="text-[12px] text-[#5a5454]">
                    Infinium by Sushma Group Best Commercial property in
                    Zirakpur Located on Chandigarh Delhi NH, Zirakpur, one of
                    the busiest corridor connecting to Chandigarh
                  </p>
                </div>
              </div>

              <div className="relative w-[380px] pt-5 px-4 pb-14 flex border-[#1e6da4] border-b-0 border-t-0 border-l-0 border-[2px] border-dashed">
                <div className="absolute bottom-[0] right-[-9px] text-[#1e6da4] ">
                  {" "}
                  <FaCircle />
                </div>
                <div className="">
                  <img
                    className="w-[300px] h-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/2019villas2-CDfLfbLj.png"
                    alt=""
                  />
                </div>
                <div className="ps-3">
                  <p className="text-[20px] font-bold text-[#353535]">2019</p>
                  <p className="font-[600] text-[21px] text-[#1e6da4] uppercase">
                    Infinium
                  </p>
                  <p className="text-[12px] text-[#5a5454]">
                    Infinium by Sushma Group Best Commercial property in
                    Zirakpur Located on Chandigarh Delhi NH, Zirakpur, one of
                    the busiest corridor connecting to Chandigarh
                  </p>
                </div>
              </div>
              <div className="relative w-[380px] pt-5 px-4 pb-14 flex border-[#1e6da4] border-b-0  border-t-0 border-l-0 border-[2px] border-dashed">
                <div className="absolute bottom-[0] right-[-9px] text-[#1e6da4] ">
                  {" "}
                  <FaCircle />
                </div>
                <div className="">
                  <img
                    className="w-[300px] h-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/2019villas2-CDfLfbLj.png"
                    alt=""
                  />
                </div>
                <div className="ps-3">
                  <p className="text-[20px] font-bold text-[#353535]">2019</p>
                  <p className="font-[600] text-[21px] text-[#1e6da4] uppercase">
                    Infinium
                  </p>
                  <p className="text-[12px] text-[#5a5454]">
                    Infinium by Sushma Group Best Commercial property in
                    Zirakpur Located on Chandigarh Delhi NH, Zirakpur, one of
                    the busiest corridor connecting to Chandigarh
                  </p>
                </div>
              </div>
              <div className="relative w-[380px] pt-5 px-4 pb-14 flex border-[#1e6da4] border-r-0 border-b-0  border-t-0 border-l-0 border-[2px] border-dashed">
                <div className="">
                  <img
                    className="w-[300px] h-full"
                    src="https://staging.adiyogitechnology.com/sushmagroup/assets/2019villas2-CDfLfbLj.png"
                    alt=""
                  />
                </div>
                <div className="ps-3">
                  <p className="text-[20px] font-bold text-[#353535]">2019</p>
                  <p className="font-[600] text-[21px] text-[#1e6da4] uppercase">
                    Infinium
                  </p>
                  <p className="text-[12px] text-[#5a5454]">
                    Infinium by Sushma Group Best Commercial property in
                    Zirakpur Located on Chandigarh Delhi NH, Zirakpur, one of
                    the busiest corridor connecting to Chandigarh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </div>

      {/*  */}
      <div className="my-10">
        <div className="h-[60vh]">
          <div className="relative w-full h-full  bg-[url(https://staging.adiyogitechnology.com/sushmagroup/assets/edffdb6cad0937fc0c25eb85cfd9bd5c-Dalyr-VQ.png)] bg-center bg-cover bg-no-repeat">
            <div className="absolute px-[70px] py-10 backdrop-blur-[5px] bg-[rgba(0,0,0,0.51)] p-4 rounded-[22px] top-1/2 -translate-y-1/2 text-white  left-[120px]">
              <p className="font-bold text-[20px]">UP TO</p>
              <div className="flex">
                <div className="border-r-[2px] pe-5  text-center">
                  <p class="font-bold xl:text-[122px] lg:text-[100px] text-[60px] font-supera800 leading-none">
                    12%
                  </p>
                  <p className="py-1 lg:text-[21.57px] text-[10px]  font-supera700 ">
                    {" "}
                    ASSURED RETURNS
                  </p>
                </div>
                <div className="px-6">
                  <p class=" font-bold xl:text-[122px] lg:text-[100px] text-[60px] leading-none  font-supera800 text-center ">
                    09
                  </p>

                  <p class="py-1 lg:text-[21.57px] text-[10px]  font-supera700 ">
                    YEARS LEASE GUARANTEE
                  </p>
                </div>
              </div>
              <button className="rounded-full border-[1px] mt-5 px-8 py-1">
                Enqiry Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div>
        <div className=" px-10  py-7 flex items-center justify-between bg-[#1e6da4] rounded-2xl max-w-[1320px] mx-auto">
          <div>
            <h1 className="uppercase text-white text-[36px] leading-[49px] font-[400]">
              schedule your site visit
            </h1>
          </div>
          <div>
            <button className="uppercase font-[700] bg-white text-[#1e6da4] rounded-full px-4 py-2">
              connect with us
            </button>
          </div>
        </div>
      </div>

      {/* MEET OUR BOARD MEMBER */}
      <div>
        <div className="bg-[#f3f3f3] my-14 ">
          <div className="max-w-[1320px] mx-auto py-14 grid grid-cols-[29%_auto] gap-[30px]  ">
            <div>
              <h1 className="pe-9 uppercase text-[#226fa5] text-[40px] font-bold leading-[55px]">
                meet our board member
              </h1>
              <p className="pe-8 text-[18px] leading-[21px] text-[#5a5454]">
                Within the premises of the Sushma Township are reputed Schools.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-[70%_20%] gap-[10%] ">
                <div className="">
                  <div className="flex items-center gap-[30px] ">
                    <div className="rounded-full relatiove bg-[#1f5b87]">
                      <img
                        className=" rounded-full h-[120px] w-[120px] shadow-[-2px_-8px_0px_rgba(30,109,164)]"
                        src={showData.thumbnail}
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="text-[#1f5b87] text-[18px] leading-[27px] font-bold">{showData["sub-part"][0].name}</h1>
                      <p>{showData["sub-part"][0].position}</p>
                    </div>
                  </div>
                  <p className="bg-[#226fa5] text-white text-[17px] leading-[26px] text-left ps-14 pe-20 mt-10 rounded-2xl py-10">
                    {showData["sub-part"][0].description}
                  </p>
                </div>

                <div className="">
                  <div className="grid justify-center">
                    <div className="rounded-full mb-5">
                      {MeetMember.length >= 0
                        ? MeetMember.map((item, index) => {
                            let { thumbnail } = item;
                            return (
                              <img
                                onClick={() => setShowDetail(index)}
                                className="cursor-pointer rounded-full h-[120px] w-[120px] mb-4"
                                src={thumbnail}
                                alt=""
                              />
                            );
                            {
                              console.log(thumbnail);
                            }
                          })
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Creativity section */}
      <div>
        <div className="my-16">
          <div className="text-center py-8 text-[25px] text-[#6f6e6e] leading-[38px]">
            <p>We blend creativity with intelligence to craft homes</p>
            <p>
              that enhance your living experience and deliver on our promises.
            </p>
          </div>
          <div className="max-w-[1400px] mx-auto  grid grid-cols-[690px_690px] gap-[1%]">
            {Data.map((item, index) => {
              let { thumbnail, data1, data2, description } = item;
              console.log(thumbnail);

              return (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${thumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className={`w-[100%] rounded-2xl grid items-center justify-center h-[50vh]  group`}
                >
                  <div className="bg-[rgba(30,108,164,0.8)] py-2 w-[690px] text-white overflow-hidden ease-in-out h-[110px] group-hover:h-[56%] group-hover:overflow-visible duration-700">
                    <p className="text-center text-[33px] leading-[45px]">
                      {data1}
                    </p>
                    <p className=" text-center font-bold text-[33px] leading-[45px]">
                      {data2}
                    </p>
                    <p
                      className={`max-w-[360px] h-0 overflow-hidden mx-auto text-center hidden duration-700  ease-in-out group-hover:block group-hover:h-auto`}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* <div className="bg-[url(https://staging.adiyogitechnology.com/sushmagroup/assets/a083c685dacc3cc178999bbd2187624d-BnQl13Qp.png)]"></div> */}
          </div>
        </div>
      </div>

      {/* Banner */}
      <div>
        <div
          style={{ objectFit: "cover" }}
          className=" h-[45vh] bg-[url(https://staging.adiyogitechnology.com/sushmagroup/assets/banner-CK8xIpqY.png)] bg-cover bg-center"
        ></div>
      </div>

      {/* Five Star Rating */}
      <div>
        <div className="max-w-[1200px] mx-auto my-20">
          <div className="flex text-[#fbb245] justify-center text-[30px] ">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <h1 className="text-[40px] leading-[60px] text-[#1e6da4] font-[700] text-center">
            SUSHMA SERVICE PARTNER
          </h1>
          <p className="text-[18px] leading-[27px] text-[#5a5454] font-[400] text-center">
            Within the premises of the Sushma Township are reputed Schools.
          </p>
          <div className="rounded-lg my-20">
            <div className="grid grid-cols-[40%_60%] rounded-lg">
              <div>
                <img
                  className="w-full h-[400px]"
                  src="https://staging.adiyogitechnology.com/sushmagroup/assets/705febab1eba783bdb74e0f6f6db3a90-CS-YPTjC.png"
                  alt=""
                />
              </div>
              <div className="bg-[#3e3c3c] ">
                <div className="text-white ms-10 pe-[30px] py-8 rounded-lg">
                  <p className="text-[18px] font-[400] leading-[27px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    eu rhoncus urna facilisis quisque orci lectus sed nulla.
                    amet, consectetur adipiscing Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. In eu rhoncus urna facilisis
                    quisque orci.
                  </p>
                  <p className="py-5 text-[18px] font-[300] leading-[27px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    eu rhoncus urna facilisis
                  </p>
                  <h1 className="text-[26px] font-[500] leading-[39px]">
                    PAWAN KUMAR
                  </h1>
                  <p className="text-[18px] font-[300] leading-[27px]">
                    FOUNDER REALITY NIVESH
                  </p>
                </div>
                <div className="bg-white py-3 mb-2 ">
                  <img
                    className=" h-[60px] ms-10 "
                    src=" https://staging.adiyogitechnology.com/sushmagroup/assets/c3611c24db9ffa2be6bf1b8a5b51cbd2--9KUxnWA.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Our Clients Say */}
      <div>
        <div className="text-center">
          <h1>What Our Clients Say</h1>
          <p>Within the premises of the Sushma Township are reputed Schools.</p>
        </div>
        <div className="my-16  pt-5 ">
          <SlidingPage />
        </div>
      </div>

      {/* FAQ’s */}
      <div>
        <div>
          <h1 className="text-center text-[#1e6da4] text-[40px] leading-[60px] font-bold">
            FAQ’s
          </h1>
          <p className="text-center text-[18px] leading-[27px] text-[#5a5454]">
            Within the premises of the Sushma Township are reputed Schools.
          </p>
          <div className="width-full grid grid-cols-[70%_30%]   ">
            <div className="ms-20  pe-[40px] border-[#d3e7f4] h-[460px] my-7">
              {faq.length >= 1
                ? faq.map((items, index) => {
                    return (
                      <>
                        <div className="mb-8">
                          <div
                            onClick={() => setShowFaq(index)}
                            className={` cursor-pointer border border-[#3a7faf] py-4 px-4   ${
                              showFaq == index
                                ? "bg-[#3a7faf] text-white"
                                : "text-[#3a7faf] "
                            }`}
                          >
                            <div
                              className={`flex  justify-between items-center   duration-100  `}
                            >
                              <div className="basis-[80%]">
                                <h1 className="font-[600]">{items.question}</h1>
                                {showFaq == index && (
                                  <p className="duration-100 ease-in-out">
                                    {items["sub-part"][0].answer}
                                  </p>
                                )}
                              </div>
                              <div className="basis-[20%]  flex justify-center">
                                <div
                                  class={`w-[40px] h-[40px]  text-center bg-blue-700 ${
                                    showFaq ? "rotate-90" : ""
                                  }`}
                                >
                                  <svg
                                    class="w-full h-full"
                                    viewBox="0 0 52 51"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <mask
                                      id="mask0_1_2"
                                      maskUnits="userSpaceOnUse"
                                      x="0"
                                      y="0"
                                      width="52px"
                                      height="51"
                                      style={{ "mask-type": "alpha;" }}
                                    >
                                      <path
                                        d="M38.3601 3.47328C43.7799 6.58858 47.8623 11.5767 49.8321 17.4906C51.8018 23.4046 51.5218 29.8327 49.0453 35.5547C46.5687 41.2767 42.068 45.8943 36.3976 48.5308C30.7272 51.1673 24.2817 51.6394 18.2848 49.8571C12.288 48.0749 7.15711 44.1627 3.8663 38.863C0.575487 33.5633 -0.646184 27.2451 0.433195 21.1079C1.51258 14.9707 4.81787 9.44162 9.72162 5.57036C14.6254 1.69911 20.7861 -0.244856 27.0345 0.107495L25.5902 25.4932L38.3601 3.47328Z"
                                        fill="#D9D9D9"
                                      ></path>
                                    </mask>
                                    <g mask="url(#mask0_1_2)">
                                      <path
                                        d="M25.5902 48.7436C38.4884 48.7436 48.9444 38.334 48.9444 25.4932C48.9444 12.6523 38.4884 2.24268 25.5902 2.24268C12.6921 2.24268 2.23607 12.6523 2.23607 25.4932C2.23607 38.334 12.6921 48.7436 25.5902 48.7436Z"
                                        stroke=""
                                        stroke-width="0.75996"
                                      ></path>
                                    </g>
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M29.0381 31.5506C29.2621 31.5506 29.4437 31.3699 29.4437 31.1469C29.4437 30.9587 29.5458 30.6627 29.7635 30.2809C29.9726 29.9138 30.2576 29.5201 30.5518 29.1525C31.2998 28.2175 32.19 27.4047 33.2056 26.7859C33.5912 26.5509 34.0103 26.3257 34.4204 26.1601C34.835 25.9928 35.2145 25.897 35.5282 25.897V25.0894C35.2145 25.0894 34.8352 24.9937 34.4207 24.8263C34.0107 24.6608 33.5916 24.4355 33.2054 24.2005C32.1899 23.5825 31.3 22.77 30.5522 21.8336C30.2579 21.4663 29.9725 21.0727 29.7634 20.7059C29.5459 20.3246 29.4437 20.0286 29.4437 19.8396C29.4437 19.6166 29.2621 19.4357 29.0381 19.4357C28.814 19.4357 28.6324 19.6166 28.6324 19.8396C28.6324 20.2499 28.8276 20.701 29.0579 21.1047C29.2964 21.5228 29.6098 21.9526 29.9172 22.3363C30.7173 23.3383 31.677 24.2169 32.7822 24.8896C32.8923 24.9566 33.0061 25.0236 33.1228 25.0894H16.0578C15.8338 25.0894 15.6523 25.2702 15.6523 25.4932C15.6523 25.7162 15.8338 25.897 16.0578 25.897H33.1225C33.0059 25.9629 32.8921 26.0299 32.7821 26.0969C31.677 26.7703 30.7174 27.649 29.9174 28.6492C29.6098 29.0333 29.2964 29.4639 29.0579 29.8823C28.8276 30.2862 28.6324 30.7373 28.6324 31.1469C28.6324 31.3699 28.814 31.5506 29.0381 31.5506Z"
                                      fill="#F2FAFF"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                : ""}
            </div>

            <div className=" ps-10 mt-5 border-s-[4px] ">
              <img
                className="w-[full] h-[480px]  "
                src="https://staging.adiyogitechnology.com/sushmagroup/assets/9500423e943f26118d254c27a17d48bb-BnIM_mCe.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* CONNECT WITH US */}
      <div>
        <div className="max-w-[1320px] mx-auto my-20 py-4 px-10 rounded-2xl flex justify-between items-center bg-[#1e6da4]">
          <div>
            <h1 className="text-[36px] leading-[49px] text-white">
              SCHEDULE YOUR SITE VISIT
            </h1>
          </div>
          <div>
            <button className="px-3 py-2 rounded-full uppercase font-[600] text-[16px] text-[#1e6da4] bg-white leading-[24px]">
              connect with us
            </button>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div>
        <div className="bg-[url(https://staging.adiyogitechnology.com/sushmagroup/assets/f0103bb1d31d8508ebd43af012650f4d-D7hsTMEr.png)] bg-center bg-cover ">
          <div style={{ "background-image":"linear-gradient(90.93deg, rgba(30, 109, 164, 0.8) 43.48%, rgba(11, 41, 62, 0) 91.86%)",}} class="py-16 grid grid-cols-2">
            <div className="ms-20">
              <p className="text-[63px] leadinng-[95px] text-white font-[700] uppercase">project</p>
              <p className="text-[63px] leadinng-[95px] text-white font-[700] uppercase mb-5">walk-through</p>
              <div className="flex border-[2px] border-white px-4 py-3 justify-between w-[65%]">
              <div className="flex flex-col items-center justify-center">
                  <div>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHjSURBVHgB7ZqLccIwDIYVjgHYoNmAbtCwQTtB6QRtJ4BO0G4AnaAjECaATkA2aDpBKoHp+QzENnk4CH13OpCjnPMndqLIARDqpSiKZ7RV0R4LtBjaBDucFGH42YuNoGFURxsIRxpF0agHzXMLYdn234bQgeHPo4Y51n8bQjuBCOWGCOWGCOVGcKGYOSVoG81mlvjYiF+AA33oBvGJ/y7xTsjQ5UYXhu4abaT5uSU+94zfElwo5uB0oGlT8XtkjnJDhHJDhHLj//FCOSf+PMIZ6ZWFuGwj9kvFq3etaY2PkNeSeKoBfWlNOcY/gIW+2nmCP1MIAx14UiE+c9mpp67kFJhDc/QergAaukOjbY62hObIDJ9y3SfNd8l1feJ3FLvFGJ0xXDjmAgy1yXOUGyKUG14v3lr25MMv2gqzl08IiLNQdTeewZnQzS+kWJ8rWnVBN0E7EKpWxMda06bshKhc90Vrolz3Ayz4CB1AM8RoE81P4cgJMY5Dj8/QahVqkkJ5BkUZV2fSyypClzhkpqc2qjnNQmhdZGhvmm/7giU34i+mrpuBx2uiqus6x++RzIgbIpQbIpQbIpQbIpQbx1LAO1UhNLkx/KGlNJoYfhyylBqpD5ISYAx9rCxzlBs0R7/hCvgDE1mjZGQuPycAAAAASUVORK5CYII=" alt="" />
                  </div>
                  <div className="text-[21px] leading-[23px] text-white">
                <div className="flex flex-col justify-center items-center">
                <p>LUXuRY</p>
                <p>PROPERTY</p>
                </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHjSURBVHgB7ZqLccIwDIYVjgHYoNmAbtCwQTtB6QRtJ4BO0G4AnaAjECaATkA2aDpBKoHp+QzENnk4CH13OpCjnPMndqLIARDqpSiKZ7RV0R4LtBjaBDucFGH42YuNoGFURxsIRxpF0agHzXMLYdn234bQgeHPo4Y51n8bQjuBCOWGCOWGCOVGcKGYOSVoG81mlvjYiF+AA33oBvGJ/y7xTsjQ5UYXhu4abaT5uSU+94zfElwo5uB0oGlT8XtkjnJDhHJDhHLj//FCOSf+PMIZ6ZWFuGwj9kvFq3etaY2PkNeSeKoBfWlNOcY/gIW+2nmCP1MIAx14UiE+c9mpp67kFJhDc/QergAaukOjbY62hObIDJ9y3SfNd8l1feJ3FLvFGJ0xXDjmAgy1yXOUGyKUG14v3lr25MMv2gqzl08IiLNQdTeewZnQzS+kWJ8rWnVBN0E7EKpWxMda06bshKhc90Vrolz3Ayz4CB1AM8RoE81P4cgJMY5Dj8/QahVqkkJ5BkUZV2fSyypClzhkpqc2qjnNQmhdZGhvmm/7giU34i+mrpuBx2uiqus6x++RzIgbIpQbIpQbIpQbIpQbx1LAO1UhNLkx/KGlNJoYfhyylBqpD5ISYAx9rCxzlBs0R7/hCvgDE1mjZGQuPycAAAAASUVORK5CYII=" alt="" />
                  </div>
                  <div className="text-[21px] leading-[23px] text-white">
                <div className="flex flex-col justify-center items-center">
                <p>LUXuRY</p>
                <p>PROPERTY</p>
                </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHjSURBVHgB7ZqLccIwDIYVjgHYoNmAbtCwQTtB6QRtJ4BO0G4AnaAjECaATkA2aDpBKoHp+QzENnk4CH13OpCjnPMndqLIARDqpSiKZ7RV0R4LtBjaBDucFGH42YuNoGFURxsIRxpF0agHzXMLYdn234bQgeHPo4Y51n8bQjuBCOWGCOWGCOVGcKGYOSVoG81mlvjYiF+AA33oBvGJ/y7xTsjQ5UYXhu4abaT5uSU+94zfElwo5uB0oGlT8XtkjnJDhHJDhHLj//FCOSf+PMIZ6ZWFuGwj9kvFq3etaY2PkNeSeKoBfWlNOcY/gIW+2nmCP1MIAx14UiE+c9mpp67kFJhDc/QergAaukOjbY62hObIDJ9y3SfNd8l1feJ3FLvFGJ0xXDjmAgy1yXOUGyKUG14v3lr25MMv2gqzl08IiLNQdTeewZnQzS+kWJ8rWnVBN0E7EKpWxMda06bshKhc90Vrolz3Ayz4CB1AM8RoE81P4cgJMY5Dj8/QahVqkkJ5BkUZV2fSyypClzhkpqc2qjnNQmhdZGhvmm/7giU34i+mrpuBx2uiqus6x++RzIgbIpQbIpQbIpQbIpQbx1LAO1UhNLkx/KGlNJoYfhyylBqpD5ISYAx9rCxzlBs0R7/hCvgDE1mjZGQuPycAAAAASUVORK5CYII=" alt="" />
                  </div>
                  <div className="text-[21px] leading-[23px] text-white">
                <div className="flex flex-col justify-center items-center">
                <p>LUXuRY</p>
                <p>PROPERTY</p>
                </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/Group%203824-a60CLqkW.png" alt="" />
            </div>
            
          </div>
        </div>
      </div>

      {/* Brands */}
      <div>
        <div className="my-20 max-w-[1200px] mx-auto">
          <h1 className="text-center text-[#1e6da4] text-[40px] leading-[60px] font-bold">SUSHMA PROJECTS BRANDS ON BOARD</h1>
          <p className="text-center text-[18px] leading-[27px] text-[#5a5454]">Within the premises of the Sushma Township are reputed Schools.</p>
          <Marquee className="mt-20">
          <div className="flex justify-between">
              <div className="w-[200px]">
                <img className="w-[130px]" src="https://staging.adiyogitechnology.com/sushmagroup/assets/10-150x150-C8NYqgcS.png" alt="" />
              </div>
              <div className="w-[200px]">
                <img className="w-[130px]" src="https://staging.adiyogitechnology.com/sushmagroup/assets/8-150x150-CCKPS7rI.png" alt="" />
              </div>
              <div className="w-[200px]">
                <img className="w-[130px]" src="https://staging.adiyogitechnology.com/sushmagroup/assets/7-150x150-CNxrUjbv.png" alt="" />
              </div>
              <div className="w-[200px]">
                <img className="w-[130px]" src="https://staging.adiyogitechnology.com/sushmagroup/assets/6-150x150-PhNqO6bo.png" alt="" />
              </div>
              <div className="w-[200px]">
                <img className="w-[130px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACXCAYAAAD3XaJHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA5VSURBVHgB7Z1pjFRVGoa/pvdmX2QZBEHFaAYQtyAExhAWjRqQgEb8oeCCoxCZaMY/M/7nj8RonAQ1oo6KGtHBEdwREVAERZYxICKyCIqyCU1v1V1TzxlOT3VRTfeE+kasfp9Ydlffe8895zvvec93zq1uCpLJ5AITIscUpISVNCFyTDsTwgEJS7ggYQkXJCzhgoQlXJCwhAsSlnBBwhIuSFjCBQlLuCBhCRckLOGChCVckLCECxKWcEHCEi5IWMIFCUu4IGEJFyQs4YKEJVyQsIQLEpZwQcISLkhYwgUJS7ggYQkXJCzhgoQlXJCwhAsSlnBBwhIuSFjCBQlLuCBhCRckLOGChCVckLCECxKWcEHCEi5IWMIFCUu4UNSakxqSDXa0+rglGuqtrVKYNCuva7ACa7sUFBZZUYf2VtCuZT9qlbCq6mrs8eULbffB/dZWI9u9qsEmbqu0spS42irlfX9nA/8404oqKlo8t1XCqqmrtSUbV9rGPVvbrLD6Ha233684aJ1r2q6wOg3+vQ2YMd0sV8KCqtpqO1ZTZW2S1GA6Xp2wxPFUOtCGhVVf1fr+V/IuXJCwhAsSlnBBwhIuSFjCBQlLuCBhCRckLOGChCVckLCEC61+pNMiyST/s7wkWRDal2xIPc5JvfK0lalHVwWp/3LzMDgnwipMVaZ3x+5WUVxs+UmB9SlLWPv+5VZRm8xbYdVX11rdzz+nxtDptzAnwiorLLbpIydZeU2B1VTXWD5SkWiwkl51Vt+Qn7IqKSm13nV1tvNv8y1Zc/p9mBNhlRQW2tBeg2zZwn/arp278vKjNQUpPa1O8jU/hdXvnHNs9vgJ1q6wyBrsDBEWOmpI1Nu6NWtt86bNefuZrbzNrVIMGTzYZo4dZ7kid8l7ikRdwmpq83MqzHfqEgnLJdpuEC5IWMIFCUu4IGEJFySsLORq9znXnKn1ykZOV4XpFKb2tvr162ddunSx2tpa++WXX+zgwYNWVVXVeKxDhw5Nrjl+/LgdO3bMzjrrrJOCWF1dbfv27bO+ffumNvNKmhw7cOCA7d+/384++2zr3Llz6qlLgx09etR++umnUGbmTnJRUZH1798/3L/diV++5Bzq+P3339vAgQPDV+qSrV1cS7ncM5ZdVlYW6ka7qN+hQ4ds586doW719fWhPT179rT27duHn/OzbFBOnz59bNeuXU3OKS0ttQEDBth3331nNVk2MLnnOam9KO77c2r3nLhTT+7L+bTt8OHDIf7J/8NenJuwCMTNN99sF198cWgQ4tq+fbu98cYboeHTp0+38847r0nn7dixw77++msbP368FaceDyESAkEn7t692958802bNWtWCGIMLkH66KOPwrFp06bZ0KFDQxATqeUz93vttddCR6YHk8698847Q+CrTvxKE8e/+uore+6552zixIm2d+9ee/3118O9M9t122232bfffmsvvPBCEHHv3r3t2muvtSuuuCIII/LDDz/Y22+/bZ9++qnVpXa1J0yYYIMGDbK5c+eeVC4ggosuusimTp1qjzzySBgYkfLycrvlllvsk08+sWXLloV4ptO1a1ebOXOmrVixIsSCuN97770hvsSCeFHnlStX2qZNm7KKM5e4CQtXGDZsWBg5y5cvt+7du9u4ceOCSzzzzDN22WWXhQYjCjoHfvzxx/D6/PPPmwTqs88+CyOfThs5cmQI7MaNG8M1CALh0Cnp98MdxowZEzpk3rx5jQIChIkIGN3cnzKoAy5Fnej8KVOmhM5jIKR3Au2i7pSB23Xr1i3Uk3tTp61btwZ3xXUvv/xyu/vuu4N7btiwwS688EK79NJLQxnZQLTXXXed3XTTTbZ69WpbunRp44DAKSlv+PDhoT4IBLFGaOeVV14ZYgG4J/d6+umng4hjfWj3iy++aO+++26T63ONm7CAYGDpuAZBI6Bjx44NnYUQtm3bZosWLQqdCXylg3EtpgNG6BdffNF4zgUXXBA6E6ExKmPQEQD34oWz4TR0PNdwv2effdb27NnTpG6UgwheffXVMOVQFufzPeUwHd5+++2hbFwnU1zxhbtdddVVtnDhwtBZuAxl0NFffvmljR49utGdKLf4FA/qcXAGHx0+adIkW7VqVXD7CDE8//zzg1i5B+JLpG1sUnac2uMU+NZbb4W2M6DjgGEg4F5btmxxmxZdhQWMXqYmBEPQKyoqQuN5T6BwpphL0AGcwzUdO3YMjSY4jHi+J1hcS5C4Dvg5zhPLoFPiVMhURAdncwjKwgFxuBhcpg2uBYJO8O+4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" alt="" />
              </div>
              <div className="w-[220px]">
                <img className="w-[130px]" src="https://staging.adiyogitechnology.com/sushmagroup/assets/11-150x150-BegWhfBn.png" alt="" />
              </div>
              
          </div>
          </Marquee>
        </div>
      </div>

      {/*  */}
      <div>
        <div className="max-w-[1250px] mx-auto">
          <h1 className="text-center text-[#1e6da4] text-[40px] leading-[60px] font-bold">BLOGS</h1>
          <p className="text-center text-[18px] leading-[27px] text-[#5a5454]">Within the premises of the Sushma Township are reputed Schools.</p>
          <div className=" my-16 grid grid-cols-3 gap-[25px] py-2">
            <div className=" shadow-2xl rounded-2xl group">
              <div className="overflow-hidden rounded-t-2xl">
                <img className="rounded-t-2xl transition-transform transform duration-1000 ease-in-out group-hover:scale-110 group-hover:rounded-t-2xl" src="https://staging.adiyogitechnology.com/sushmagroup/assets/1f402e905205374dd3bc5a348c4daa3c-BAXa_HFL.png" alt="" />
              </div>
              <div className="p-6">
                <div className="flex gap-4 items-center">
                  <div>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#FF6B6B] text-[15px] sm:text-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Calendar"><path d="M18.438,4.954H16.5c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372c0-0.262-0.23-0.512-0.5-0.5
            c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408h-7c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372
            c0-0.262-0.23-0.512-0.5-0.5c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408H5.562c-1.378,0-2.5,1.122-2.5,2.5v11
            c0,1.379,1.122,2.5,2.5,2.5h12.875c1.379,0,2.5-1.121,2.5-2.5v-11C20.938,6.076,19.816,4.954,18.438,4.954z M5.562,5.954H7.5
            c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5c0-0.197,0-0.394,0-0.592
            h7c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5
            c0-0.197,0-0.394,0-0.592h1.937c0.827,0,1.5,0.673,1.5,1.5v1.584H4.062V7.454C4.062,6.627,4.735,5.954,5.562,5.954z M18.438,19.954
            H5.562c-0.827,0-1.5-0.673-1.5-1.5v-8.416h15.875v8.416C19.938,19.281,19.265,19.954,18.438,19.954z"></path></g></svg>
                  </div>
                  <p>Published on June 20,2023</p>
                </div>
                <h1 className="pt-3 text-[20px] text-[#494a4a] leading-[30px]">What is a Short-Term Apartment Rentals? | Confident Group</h1>
                <p className=" pt-3 text-[14px] leading-[21px] text-[#6f6d6d]">Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.</p>
                <button className="py-[3px] mt-5 rounded-lg px-3 flex items-center text-[18px] text-[#1e6da4] gap-4 border border-[] hover:bg-[#1e6da4] hover:text-white">Read More <span><FaArrowRightLong />
                </span></button>
              </div>
            </div>
            <div className=" shadow-2xl rounded-2xl group">
              <div className="overflow-hidden rounded-t-2xl">
                <img className="rounded-t-2xl transition-transform transform duration-1000 ease-in-out group-hover:scale-110 group-hover:rounded-t-2xl" src="https://staging.adiyogitechnology.com/sushmagroup/assets/94e93e85275be3359bd08525d53be9ec-B8gV-QY6.png" alt="" />
              </div>
              <div className="p-6">
                <div className="flex gap-4 items-center">
                  <div>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#FF6B6B] text-[15px] sm:text-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Calendar"><path d="M18.438,4.954H16.5c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372c0-0.262-0.23-0.512-0.5-0.5
            c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408h-7c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372
            c0-0.262-0.23-0.512-0.5-0.5c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408H5.562c-1.378,0-2.5,1.122-2.5,2.5v11
            c0,1.379,1.122,2.5,2.5,2.5h12.875c1.379,0,2.5-1.121,2.5-2.5v-11C20.938,6.076,19.816,4.954,18.438,4.954z M5.562,5.954H7.5
            c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5c0-0.197,0-0.394,0-0.592
            h7c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5
            c0-0.197,0-0.394,0-0.592h1.937c0.827,0,1.5,0.673,1.5,1.5v1.584H4.062V7.454C4.062,6.627,4.735,5.954,5.562,5.954z M18.438,19.954
            H5.562c-0.827,0-1.5-0.673-1.5-1.5v-8.416h15.875v8.416C19.938,19.281,19.265,19.954,18.438,19.954z"></path></g></svg>
                  </div>
                  <p>Published on June 20,2023</p>
                </div>
                <h1 className="pt-3 text-[20px] text-[#494a4a] leading-[30px]">What is a Short-Term Apartment Rentals? | Confident Group</h1>
                <p className=" pt-3 text-[14px] leading-[21px] text-[#6f6d6d]">Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.</p>
                <button className="py-[3px] mt-5 rounded-lg px-3 flex items-center text-[18px] text-[#1e6da4] gap-4 border border-[] hover:bg-[#1e6da4] hover:text-white">Read More <span><FaArrowRightLong />
                </span></button>
              </div>
            </div>
            <div className=" shadow-2xl rounded-2xl group">
              <div className="overflow-hidden rounded-t-2xl">
                <img className="rounded-t-2xl transition-transform transform duration-1000 ease-in-out group-hover:scale-110 group-hover:rounded-t-2xl" src="https://staging.adiyogitechnology.com/sushmagroup/assets/1f16aa257afa528aa03a0272a4aeb9bf-Cmt7pQVi.png" alt="" />
              </div>
              <div className="p-6">
                <div className="flex gap-4 items-center">
                  <div>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#FF6B6B] text-[15px] sm:text-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Calendar"><path d="M18.438,4.954H16.5c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372c0-0.262-0.23-0.512-0.5-0.5
            c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408h-7c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372
            c0-0.262-0.23-0.512-0.5-0.5c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408H5.562c-1.378,0-2.5,1.122-2.5,2.5v11
            c0,1.379,1.122,2.5,2.5,2.5h12.875c1.379,0,2.5-1.121,2.5-2.5v-11C20.938,6.076,19.816,4.954,18.438,4.954z M5.562,5.954H7.5
            c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5c0-0.197,0-0.394,0-0.592
            h7c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5
            c0-0.197,0-0.394,0-0.592h1.937c0.827,0,1.5,0.673,1.5,1.5v1.584H4.062V7.454C4.062,6.627,4.735,5.954,5.562,5.954z M18.438,19.954
            H5.562c-0.827,0-1.5-0.673-1.5-1.5v-8.416h15.875v8.416C19.938,19.281,19.265,19.954,18.438,19.954z"></path></g></svg>
                  </div>
                  <p>Published on June 20,2023</p>
                </div>
                <h1 className="pt-3 text-[20px] text-[#494a4a] leading-[30px]">What is a Short-Term Apartment Rentals? | Confident Group</h1>
                <p className=" pt-3 text-[14px] leading-[21px] text-[#6f6d6d]">Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.</p>
                <button className="py-[3px] mt-5 rounded-lg px-3 flex items-center text-[18px] text-[#1e6da4] gap-4 border border-[] hover:bg-[#1e6da4] hover:text-white">Read More <span><FaArrowRightLong />
                </span></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOG */}
      <div>
        <div className="flex justify-center">
          <button className="text-[23px] text-white leading-[ 24px] uppercase bg-[#1e6da4] text-center py-2 px-10 rounded-full font-[600]">see all blog</button>
        </div>
      </div>


      {/*  */}
      <div>
        <div className="max-w-[1320px] mx-auto bg-[#424242] py-6 m-20 flex justify-between items-center px-8 rounded-lg">
          <h1 className="text-[36px] leading-[49px] text-white">SCHEDULE YOUR SITE VISIT</h1>
          <button className="text-[16px] leading-[24px] text-[#1e6da4] uppercase font-[500] bg-white px-7 py-2 rounded-full ">connect with us</button>
        </div>
      </div>

      {/* news & Events */}
      <div className="bg-[#f4f4f4]">
        <div className="max-w-[1200px] mx-auto py-16 ">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[40px] leading-[60px] text-[#1e6da4] uppercase font-[500]">news & Events</h1>
              <p className="text-[18px] leading-[27px] text-[#5a5454] uppercase font-[500]">Within the premises of the Sushma Township are reputed Schools.</p>
            </div>
            <div>
              <button className="capitalize text-[#1e6da4] text-[25px] border border-[#1e6da4] rounded-full px-6 py-1 hover:bg-[#1e6da4] hover:text-white">see all</button>
              </div>
          </div>
          <div className=" pt-16  grid grid-cols-3 gap-[25px] py-2">
          <div className=" rounded-2xl group">
              <div className="overflow-hidden rounded-2xl">
                <img className="rounded-2xl transition-transform transform duration-1000 ease-in-out group-hover:scale-110 group-hover:rounded-2xl" src="https://staging.adiyogitechnology.com/sushmagroup/assets/8c9ce481accd7d4dfac53828d66669a1-Cu_B79Ac.png" alt="" />
              </div>
              <div className="p-3">
                <p>Nov 11, 2023</p>
               
                <p className=" pt-1 text-[17px] leading-[26px] text-[#3f4041] font-[600]">What is a Short-Term Apartment <br /> Rentals? | Confident Group</p>
              
              </div>
            </div>
            <div className=" rounded-2xl group">
              <div className="overflow-hidden rounded-2xl">
                <img className=" w-full h-[260px] rounded-2xl transition-transform transform duration-1000 ease-in-out group-hover:scale-110 group-hover:rounded-2xl" src="https://staging.adiyogitechnology.com/sushmagroup/assets/d6f6aa4c4f06df6944abb75e19b2c7f8-BCb6xZrm.png" alt="" />
              </div>
              <div className="p-3">
                <p>Nov 11, 2023</p>
               
                <p className=" pt-1 text-[17px] leading-[26px] text-[#3f4041] font-[600]">What is a Short-Term Apartment <br /> Rentals? | Confident Group</p>
              
              </div>
            </div>
            <div className=" rounded-2xl group">
              <div className="overflow-hidden rounded-2xl">
                <img className="w-full h-[260px] rounded-2xl transition-transform transform duration-1000 ease-in-out group-hover:scale-110 group-hover:rounded-2xl" src="https://staging.adiyogitechnology.com/sushmagroup/assets/1eba12b64ff6cb579cb2bbe2ee8be3ed-aLqH5BGM.png" alt="" />
              </div>
              <div className="p-3">
                <p>Nov 11, 2023</p>
               
                <p className=" pt-1 text-[17px] leading-[26px] text-[#3f4041] font-[600]">What is a Short-Term Apartment <br /> Rentals? | Confident Group</p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/*  */}
      <div>
        <div className="my-20">
          <div className="relative h-[40vh] bg-[url(https://staging.adiyogitechnology.com/sushmagroup/assets/50a47ae02fe827cace4cb04eece57bc8-CW7d-UKq.png)] bg-cover bg-center">
            <div className="bg-[rgba(0,0,0,0.5)] h-full flex flex-col items-center justify-center">
              <h1 className=" text-cetner text-[40px] leading-[60px] text-white font-bold uppercase"> contact us</h1>
              <p className="text-center text-[24px] leading-[24px] text-white font-[600] ">Within the premises of the Sushma Township are reputed Schools</p>
            </div>
            <div className="absolute z-10 w-[1180px] left-1/2 -translate-x-1/2 bottom-[-190px] bg-[#1e6da4] rounded-lg ">
              <div className="grid grid-cols-5 items-center justify-between gap-[40px] px-8 py-14">
                <div className="border-b-[2px]">
                  <input className="w-full pb-3 text-[20px] border-0 bg-transparent focus:ring-0 focus:outline-none ring-0 text-white placeholder-white"  type="text " placeholder="Your Name" />
                  
                </div>
                <div className="border-b-[2px]">
                  <input className="w-full pb-3 text-[20px] border-0 bg-transparent focus:ring-0 focus:outline-none ring-0 text-white placeholder-white"  type="text " placeholder="Your Name" />
                  
                </div>
                <div className="border-b-[2px]">
                  <input className="w-full pb-3 text-[20px] border-0 bg-transparent focus:ring-0 focus:outline-none ring-0 text-white placeholder-white"  type="text " placeholder="Your Name" />
                  
                </div>
                <div className="border-b-[2px]">
                  <input className="w-full pb-3 text-[20px] border-0 bg-transparent focus:ring-0 focus:outline-none ring-0 text-white placeholder-white"  type="text " placeholder="Your Name" />
                  
                </div>
                <div className="">
                  <button className="bg-white text-[#1e6da4] py-2 px-10 rounded-full uppercase font-[600]">Submit</button>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center justify-between gap-[40px] px-8 py-8 bg-[#f4f4f4]">
                  <div className="uppercase font-bold text-black text-[30px] leading-[24px]">get in touch</div>
                  <div className="flex items-center gap-3 border-black border-r-[1px]">
                    <div className="text-white bg-[#1e6da4] rounded-full p-2 font-bold"><FiPhoneCall /></div>
                    <div className="text-[#515151] font-[800] text-[15px]"><p>+91 124567890</p><p>+91 124567890</p></div>
                  </div>
                  <div className="flex items-center gap-3 border-black border-r-[1px]">
                    <div className="text-white bg-[#1e6da4] rounded-full p-2 font-bold"><GoMail /></div>
                    <div className="text-[#515151] font-[800] text-[15px]"><p>needhelp@gmail.com</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-white bg-[#1e6da4] rounded-full p-2 font-bold"><CiLocationOn /></div>
                    <div className="text-[#515151] font-[800] text-[15px]"><p>PR-7 Airport Road, Zirakpur, Punjab</p></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRESENTATION */}
      <div className="mt-52">
        <div className="py-16 max-w-[1250px] mx-auto grid grid-cols-[55%_34%] gap-[10%] items-center">
          <div>
            <h1 className="text-[67px] leading-[81px] text-[#1e6da4] font-bold uppercase ">Presentation of the sushma group</h1>
            <button className="mt-7 rounded-xl flex items-center gap-3 py-5 px-14 border-[3px] justify-center text-[25px] font-bold text-[#1e6da4] border-[#1e6da4] shadow-[10px_8px_0px_rgba(30,109,164)] hover:bg-[#1e6da4] hover:text-white hover:shadow-none duration-700"> <span><LuDownload /></span> Brochure </button>
          </div>
          <div>
            <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/5c38dd308d0409a102cb3be9838ca36a-CrQ5igkw.png" alt="" />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-[#104367]">
        <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-center border-b-[2px] py-5">
          <img className="" src="https://staging.adiyogitechnology.com/sushmagroup/assets/footerlogo-m57807hP.png" alt="" />
        </div>
        <div className="grid  justify-center py-10 border-b-[2px]">
          <ul className="flex text-white uppercase ">
            <li className="pr-8 text-[17px] leading-[26px] font-[500]">about us</li>
            <li className="pr-8 text-[17px] leading-[26px] font-[500]">products</li>
            <li className="pr-8 text-[17px] leading-[26px] font-[500]">location map</li>
            <li className="pr-8 text-[17px] leading-[26px] font-[500]">floor plan</li>
            <li className="pr-8 text-[17px] leading-[26px] font-[500]">price</li>
            <li className="pr-8 text-[17px] leading-[26px] font-[500]">amenities</li>
            <li className="pr-8 text-[17px] leading-[26px] font-[500]">gallery</li>
            <li className="pr-8 text-[17px] leading-[26px] font-[500]">faq</li>
            <li className="pr-8 text-[17px] leading-[26px] font-[500]">contact us</li>
          </ul>
          <ul className="flex text-white uppercase justify-center mt-12 ">
            <li className="pr-8 text-[20px] leading-[30px] font-[500] flex items-center gap-3">
                    <div className="text-white   font-bold"><FiPhoneCall /></div>
                    <p>+91 124567890</p>
              </li>
              <li className="pr-8 text-[20px] leading-[30px] font-[500] flex items-center gap-3">
                    <div className="text-white   font-bold"><FiPhoneCall /></div>
                    <p>+91 124567890</p>
              </li>
            <li className="pr-8 text-[20px] leading-[30px] font-[500] flex gap-[14px]">
              <div className="text-[#104367] bg-white rounded-full p-[6px] text-[20px]"><ImInstagram /></div>
              <div className="text-[#104367] bg-white rounded-full p-[6px] text-[20px]"><FaFacebookF /></div>
              <div className="text-[#104367] bg-white rounded-full p-[6px] text-[20px]"><FaTwitter /></div>
              <div className="text-[#104367] bg-white rounded-full p-[6px] text-[20px]"><FaPinterestP /></div>
              <div className="text-[#104367] bg-white rounded-full p-[6px] text-[20px]"><FaYoutube /></div>
            </li>
         
          </ul>
          
        </div>
        <div className="flex justify-center gap-[10px] text-white items-center py-5">
            <h1 className="text-[23px] leading-[35px] font-[600]">Sales Partner</h1>
            <BiLogoTelegram className="text-[30px] leading-[35px] font-[600]"  />
            <p><span className="text-[18px] leading-[27px] text-[#fc6602]">Reality</span><span className="text-[#1ec8ec] text-[18px] leading-[27px]"> Nivesh : </span><span className="text-[18px] leading-[27px] font-[500]">Showroom No. 12 level 2, UPTOWN INSIGNIA PR-7 Airport Road, Zirakpur, Punjab</span></p>
          </div>
        </div>
      </div>

      {/* COPY RIGHT */}
      <div>
          <div className="flex justify-between py-4 px-16 font-[700]">
            <div>
              <ul className="flex gap-[20px] text-[#1e6da4]">
                <li>Disclaimer</li>
                <li>Term & Condition</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div><p className="text-[16px] leading-[23px] text-[#1e6da4]">© Copyright 2024 sushma GROUP. REALTY NIVESH All Rights Reserved</p></div>
          </div>
        </div>
    </div>
  );
}
