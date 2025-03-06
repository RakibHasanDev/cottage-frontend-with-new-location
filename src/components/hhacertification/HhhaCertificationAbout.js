import React from "react";
import { FaStar } from "react-icons/fa";

import HhaCarousel from "./HhaCarousel";

const HhhaCertificationAbout = () => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto md:my-14 my-5">
      <div className="grid lg:grid-cols-5 gap-8 items-center dark:text-gray-100">
        <div className="lg:col-span-2 mt-5 w-[95%] md:w-full">
          <div className="flex flex-col justify-center lg:p-6 text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
            <div
              className="flex items-center "
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <FaStar className="mr-3 text-[#f02f39d8] text-2xl"></FaStar>
              <h3 className="font-semibold text-lg lg:w-80 text-justify w-[98%]">
                <h5 className="text-[#f02f39d8] font-semibold text-lg league-spartan">
                  Dedicated Educators{" "}
                </h5>
                <p className=" pr-3 md:pr-0 text-[16px] leading-relaxed font-sans font-normal">
                  Our classes are taught by dedicated and experienced educators.
                  Both of our instructors have over 30 years of experience as
                  Registered Nurses.
                </p>
              </h3>
            </div>
            <div
              className="flex items-center mt-5 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <FaStar className="mr-3 text-[#f02f39d8] text-2xl"></FaStar>
              <h3 className="font-semibold text-lg lg:w-80 text-justify w-[98%]">
                <h5 className="text-[#f02f39d8] font-semibold text-lg league-spartan">
                  {" "}
                  Immediate Job Placement{" "}
                </h5>
                <p className="text-[16px] leading-relaxed font-sans font-normal pr-3 md:pr-0">
                  Your success is our priority. To support you, we have
                  partnered with our sister agency, Cottage Home Care Services,
                  to get you started and working as fast as a day after
                  graduation!
                </p>
              </h3>
            </div>
            <div
              className="flex items-center mt-5 "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <FaStar className="mr-3 text-[#f02f39d8] text-2xl"></FaStar>
              <h3 className="font-semibold text-lg lg:w-80 text-justify w-[98%]">
                <h5 className="text-[#f02f39d8] font-semibold text-lg league-spartan">
                  {" "}
                  First-Rate Course Offerings{" "}
                </h5>
                <p className="text-[16px] leading-relaxed font-sans font-normal pr-3 md:pr-0">
                  We embrace a learning environment that will prepare you for
                  the path ahead. Our classes incorporate traditional learning
                  styles as well as hands-on experiences.
                </p>
              </h3>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 mt-5 order-first lg:order-none ">
          <div className="mx-auto">
            <HhaCarousel></HhaCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HhhaCertificationAbout;
