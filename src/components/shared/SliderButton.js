import React from "react";
import { useSwiper } from "swiper/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex gap-5 text-white font-bold">
      <button
        onClick={() => swiper.slidePrev()}
        className="px-4 py-2 2xl:px-5 2xl:py-2 shadow-md rounded-md bg-gradient-to-r from-[#f71f1fb7] to-[#ff9898e7] text-white text-lg font-semibold"
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className=" px-4 py-3 2xl:px-5 2xl:py-2 shadow-md rounded-md bg-gradient-to-r from-[#f71f1fb0] to-[#ff9898] text-white text-lg font-semibold"
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
