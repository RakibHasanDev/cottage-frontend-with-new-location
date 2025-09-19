import React from "react";
import { useSwiper } from "swiper/react";
import { Icon } from "@iconify/react";

export const CottageVideoSliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className=" text-red-500 font-bold  z-20 flex items-center gap-2">
      <button
        onClick={() => swiper.slidePrev()}
        className=" z-50 text-[#00A6B2] dark:text-white text-2xl font-semibold"
      >
        <Icon icon="bx:solid-left-arrow" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="z-50 text-[#00A6B2] dark:text-white text-2xl font-semibold"
      >
        <Icon icon="bx:solid-right-arrow" />
      </button>
    </div>
  );
};
