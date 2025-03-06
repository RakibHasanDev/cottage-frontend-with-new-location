import React from "react";
import { useSwiper } from "swiper/react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

export const CottageVideoSliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className=" text-red-500 font-bold  z-20 flex items-center gap-2">
      <button
        onClick={() => swiper.slidePrev()}
        className=" z-50 text-[#00A6B2] dark:text-white text-2xl font-semibold"
      >
        <BiSolidLeftArrow />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="z-50 text-[#00A6B2] dark:text-white text-2xl font-semibold"
      >
        <BiSolidRightArrow />
      </button>
    </div>
  );
};
