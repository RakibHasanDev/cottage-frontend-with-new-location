import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";
import { SliderButton } from "../shared/SliderButton";

const images = [
  {
    img: "/assets/HHH_Certification/img1.webp",
  },
  {
    img: "/assets/HHH_Certification/img2.webp",
    content: true,
  },
  {
    img: "/assets/HHH_Certification/img3.webp",
  },
];

export default function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        pagination={true}
        slidesPerView="auto"
        loop={true}
        zoom
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper relative "
      >
        {images.map((slider, index) => (
          <SwiperSlide key={index}>
            <div
              className="md:h-72 h-56 lg:h-80 2xl:h-96  bg-cover bg-center bg-no-repeat text-white hha-carousel w-[95%] md:w-full league-spartan"
              style={{
                backgroundImage: `url(${slider.img})`,
                borderRadius: "12px",
              }}
            >
              {slider?.content ? (
                <>
                  <div
                    className=" h-full w-full  
                             pt-12 md:pt-16 2xl:pt-32 p-5 lg:pl-20 rounded-xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #F24F57 10%, transparent 70%)",
                    }}
                  >
                    <div>
                      <h1 className="md:text-2xl 2xl:text-4xl text-lg roboto font-semibold">
                        Brooklyn Institute of
                        <p className="md:mt-2 mt-0">Vocational Training</p>
                      </h1>
                      <p className="md:mt-3 mt-0 text-sm md:text-xl 2xl:text-2xl hidden md:block ">
                        Become A Certified HHA Today!
                      </p>
                      <p className="md:mt-3 mt-0 text-sm md:text-2xl md:hidden ">
                        Become A Certified HHA <br /> Today!
                      </p>
                      <div className="lg:mt-3 mt-2 2xl:mt-5">
                        <a
                          href="https://mybrooklyninstitute.com/contact"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <button className="bg-gradient-to-r from-[#f71f1f7a] to-[#ff989877] px-3 py-2 md:py-2.5 2xl:px-4 2xl:py-3 rounded-md font-semibold shadow-lg uppercase md:text-sm 2xl:text-base text-xs">
                            Contact Us
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="h-full w-full 
                             pt-12 md:pt-16 2xl:pt-32 p-5 rounded-xl league-spartan "
                    style={{
                      backgroundImage:
                        "linear-gradient(to left, #F24F57 10%, transparent 70%)",
                    }}
                  >
                    <div className="flex justify-end ">
                      <div className=" md:w-[50%] md:pl-5 ">
                        <h1 className="lg:text-2xl 2xl:text-4xl text-lg roboto font-semibold">
                          Brooklyn Institute of
                          <p className="md:mt-2 mt-0">Vocational Training</p>
                        </h1>
                        <p className="md:mt-3 mt-0 text-sm md:text-xl 2xl:text-2xl hidden md:block ">
                          Become A Certified HHA Today!
                        </p>
                        <p className="md:mt-3 mt-0 text-sm md:text-2xl md:hidden ">
                          Become A Certified HHA <br /> Today!
                        </p>
                        <div className="md:mt-3 2xl:mt-5 mt-2">
                          <a
                            href="https://mybrooklyninstitute.com/contact"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <button className="bg-gradient-to-l from-[#f71f1f7a] to-[#ff989877] px-3 py-2 md:py-2.5 2xl:px-4 2xl:py-3 rounded-md font-semibold shadow-lg uppercase md:text-sm 2xl:text-base text-xs">
                              Contact Us
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}

        <div className=" absolute bottom-5 left-[60%] lg:left-[75%] 2xl:left-[80%]  z-50 hidden md:block">
          <SliderButton></SliderButton>
        </div>
      </Swiper>
    </>
  );
}
