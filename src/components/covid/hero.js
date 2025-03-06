import Image from "next/image";
import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { BsShieldShaded } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="lg:grid grid-cols-2 gap-5 items-center flex flex-col-reverse">
      <div
        className="font-[Roboto]"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div className="flex gap-3 items-center">
          <p className="bg-[#F86168] league-spartan text-white uppercase px-2 py-[2px] w-[100px] rounded-sm font-semibold">
            COVID-19
          </p>

          <p className=" text-[#F86168] font-semibold">Coronavirus</p>
        </div>
        <h1 className=" lg:text-5xl  text-lg font-bold mt-5 league-spartan dark:text-gray-100 text-[#00A6B2]">
          Prevent the Spread <br />
          Stay at Home, Stay Safe
        </h1>

        <p className="text-justify mt-5 dark:text-gray-100 text-[16px] leading-relaxed open-sans font-normal">
          The best way to prevent and slow down transmission is be well informed
          about the COVID-19 virus. Protect yourself and others from infection
          by washing your hands at-least 20sec and not touching your face.
        </p>

        <div className="mt-5 lg:mt-8  lg:flex items-center gap-10">
          <a
            href="#actions-section"
            className="bg-[#00A6B2] px-5 py-3 bg-hov2 text-white shadow-md rounded-md  flex items-center gap-3 open-sans"
          >
            How to Protect <BsShieldShaded />
          </a>

          <a
            href="#about-covid"
            className="flex gap-2 items-center text-[#00A6B2] font-semibold cursor-pointer bg-hov2 lg:mt-0 mt-3 open-sans"
          >
            About COVID-19 <AiOutlineArrowRight />
          </a>
        </div>
      </div>

      <div className=" " data-aos="fade-left" data-aos-duration="2000">
        <Image
          src={"/assets/Covid-19/header-b.png"}
          className="md:h-[30vh] lg:h-[75vh] mx-auto"
          alt={"hero-section"}
          w="100"
          h="100"
        />
      </div>
    </div>
  );
};

export default Banner;
