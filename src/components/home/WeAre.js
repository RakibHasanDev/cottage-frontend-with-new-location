import React, { useState } from "react";
import benifit from "../../../src/assets/TRUST.png";
import day from "../../../src/assets/day.png";
import match from "../../src/../assets/match.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import MyImageComponent from "../shared/MyImageComponent";
import Image from "next/image";

const WeAre = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [timerId, setTimerId] = useState(null);

  const handleMouseEnter = (index) => {
    const id = setTimeout(() => {
      setHoveredIndex(index);
    }, 300); // Delay of 1 second
    setTimerId(id); // Store the timeout ID to clear it later
  };
  const handleMouseLeave = () => {
    clearTimeout(timerId);
    setHoveredIndex(null); // Reset when the mouse leaves
  };

  const informations = [
    {
      img: benifit,
      title: " Caregivers You Can Trust",
      description:
        "At Cottage Home Care Services, we provide daily or weekly assistance tailored to your needs, whether due to aging, illness, recovery, or rehabilitation. Through the CDPAP program, your family can care for you without special certifications. Our in-house Registered Nurse ensures your safety and wellbeing with regular visits, offering peace of mind for you and your loved ones. Dedicated to quality care and support, we’re always here to answer your questions—just give us a call!",
    },
    {
      img: day,
      title: "Experienced and Supportive",
      description:
        " We understand that not one care plan fits all, CDPAP or Home Health Care. Daily services can include anything from meal preparation, hygiene, cleaning, and supervision. We at Cottage Home Care Services will take the time to get to know you and develop an individualized care plan that fits your specific needs. ",
    },
    {
      img: match,
      title: "Experienced Home Health Aids",
      description:
        "Companionship is key to a trusted relationship with our caregivers at Cottage Home Care Services. We not only strive to help you with everyday tasks but want to develop a caring relationship with you. We provide one-on-one attention and care that cannot compare in other settings for both patients in Home Health Care and CDPAP. All our Home Health Aides are strictly trained under New York City guidelines, and all have Certification from a specialized training school.",
    },
  ];
  return (
    <div className="bg-[#F5F5F7] pb-16 dark:bg-slate-600">
      <div className=" pt-10 2xl:w-[80%] md:w-[90%] w-[95%] mx-auto">
        <h1 className=" text-2xl xl:text-4xl font-bold text-center league-spartan  dark:text-gray-200 text-[#00A6B2]">
          Who We Are
        </h1>
        <hr className="border-[#00a6b2] border-t-2 w-12 mt-2 mx-auto mb-5  " />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 shadow-xl ">
          {informations?.map((info, index) => (
            <div
              key={index}
              className="cube-container"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`cube ${
                  hoveredIndex === index ? "rotate-forward" : "rotate-backward"
                }`}
              >
                <div
                  className={`face front  ${
                    index === 0
                      ? "bg-[#00A6B2] dark:bg-slate-400"
                      : index === 1
                        ? "bg-white dark:bg-slate-300"
                        : index === 2
                          ? "bg-[#EBF8F9] dark:bg-slate-200"
                          : "bg-[#00A6B2]" // Default background
                  }`}
                >
                  <div className="  " id="front-part">
                    <Image
                      src={info?.img}
                      alt={`${info?.title}`}
                      className="w-14 lg:w-20 lg:h-20 h-14"
                      width="80"
                      height="80"
                    />
                    <h1
                      className={`lg:text-xl md:text-lg text-[19px] ${
                        index === 0
                          ? "text-white border-white"
                          : index === 1
                            ? "text-gray-700 border-gray-700"
                            : index === 2
                              ? "text-gray-700"
                              : "bg-[#00A6B2]" // Default background
                      } font-medium md:font-semibold mt-5 league-spartan   flex items-center justify-between  w-[95%]`}
                    >
                      {info.title}{" "}
                      <p
                        className={`w-8 h-8  rounded-full border-[1px] ${
                          index === 0
                            ? "text-white border-white"
                            : index === 1
                              ? "text-gray-700 border-gray-700"
                              : index === 2
                                ? " text-gray-700 border-gray-700"
                                : "bg-[#00A6B2]" // Default background
                        } font-bold`}
                      >
                        <IoIosArrowRoundForward className="text-3xl flex justify-center items-center arrow-animation" />
                      </p>
                    </h1>
                  </div>
                </div>
                <div
                  className={`face top ${
                    index === 0
                      ? "bg-[#00A6B2] dark:bg-slate-400"
                      : index === 1
                        ? "bg-white dark:bg-slate-300"
                        : index === 2
                          ? "bg-[#EBF8F9] dark:bg-slate-200"
                          : "bg-[#00A6B2]" // Default background
                  }`}
                >
                  <span className="content"> </span>
                </div>
                <div
                  className={`face back ${
                    index === 0
                      ? "bg-[#00A6B2] dark:bg-slate-400"
                      : index === 1
                        ? "bg-white dark:bg-slate-300"
                        : index === 2
                          ? "bg-[#EBF8F9] dark:bg-slate-200"
                          : "bg-[#00A6B2]" // Default background
                  }`}
                >
                  <h1
                    className={`content  ld:pr-6 md:p-4 p-3 2xl:leading-6 text-justify font-sans ${
                      index === 0
                        ? "text-white"
                        : index === 1
                          ? "text-gray-700"
                          : index === 2
                            ? "text-gray-700"
                            : "text-white"
                    }`}
                    style={{
                      fontSmooth: "always", // For smoother rendering
                      WebkitFontSmoothing: "antialiased", // Optimized for macOS/iOS
                      MozOsxFontSmoothing: "grayscale", // Optimized for macOS
                      textRendering: "optimizeLegibility", // For better kerning and clarity
                    }}
                  >
                    <p className="font-semibold text-base mb-1">
                      {info?.title}
                    </p>
                    <p className="text-[15px]">{info?.description}</p>
                  </h1>
                </div>

                <div
                  className={`face bottom ${
                    index === 0
                      ? "bg-[#23b2bd] dark:bg-slate-400"
                      : index === 1
                        ? "bg-gray-100 dark:bg-slate-300"
                        : index === 2
                          ? "bg-[#ebf5f5] dark:bg-slate-200"
                          : "bg-[#00A6B2]" // Default background
                  }`}
                >
                  <span className="content"> </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Modal details={show}></Modal> */}
    </div>
  );
};

export default WeAre;
