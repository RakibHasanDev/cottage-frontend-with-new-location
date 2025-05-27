import React, { useEffect, useState } from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Link from "next/link";

const Quality = () => {
  const [imageSize, setImageSize] = useState({ width: 64, height: 64 });

  useEffect(() => {
    const updateImageSize = () => {
      if (window.innerWidth < 640) {
        // Small screens
        setImageSize({ width: 36, height: 36 });
      } else if (window.innerWidth < 768) {
        // Medium screens
        setImageSize({ width: 64, height: 64 });
      } else {
        // Large screens
        setImageSize({ width: 80, height: 80 });
      }
    };

    updateImageSize(); // Set initial size
    window.addEventListener("resize", updateImageSize);
    return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  return (
    <div className=" dark:bg-slate-600 services-bg bg-transparent ">
      <div>
        <h3 className="] text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-10 league-spartan text-gray-700 dark:text-gray-100">
          The Service We Provide <br /> in Home Care
        </h3>
        <hr className="border-[#00a6b2] border-t-2 w-12 mt-2 mb-8 mx-auto" />
        <h6 className="text-center md:text-2xl text-gray-700 px-4 md:px-0 league-spartan font-semibold dark:text-gray-100">
          HHA/PCA, CDPAP, NHTD & PRIVATE PAY SERVICES THROUGHOUT NEW YORK CITY{" "}
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:w-[90%] w-[95%] mx-auto pb-14 pt-9 gap-7  ">
          {/* cdpap start  */}
          <div
            className="flex flex-col lg:flex-row  h-full w-full"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            {/* Left Section: Image */}
            <div className="lg:w-[45%] h-full">
              <img
                src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1743522283/Services/cdpap-service.webp"
                alt="cdpap-service"
                className="w-full h-full object-cover"
                width={1176}
                height={784}
              />
            </div>

            {/* Right Section: Service Description */}
            <div className="newService-bg lg:w-[55%] lg:min-h-[100%] flex items-center ">
              <div className="pl-4 lg:pl-8 p-4">
                {/* Icon */}
                <div className="flex mb-2 lg:mb-4">
                  <img
                    src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1743522542/Services/cdpap-icon.png"
                    alt="cdpap-icon"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                </div>

                {/* Title */}
                <p className="text-xl lg:text-2xl font-semibold text-white mb-2 md:mb-4 ">
                  CDPAP
                </p>

                {/* List */}
                <ul className="space-y-1 xl:space-y-3 lg:space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      You can choose your own Caregivers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      Caregivers can be friends or family members.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      Allows you to receive help from your own home.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      Allows you to be in the company of your loved ones.
                    </span>
                  </li>
                </ul>
                <Link className="mt-2 block" href="/cdpap">
                  <button className="animated-button cursor-pointer">
                    <RiArrowRightDoubleFill className="text-2xl arrow-icon text-white" />
                    <span className="animated-text">
                      Learn More About CDPAP Services
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* cdpap end  */}

          {/* hha start  */}

          <div
            className="flex flex-col lg:flex-row  h-full w-full"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            {/* Left Section: Image */}
            <div className="lg:w-[45%] h-full">
              <img
                src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1733323108/Services/hha-service.webp"
                alt="hha-service"
                className="w-full h-full object-cover"
                width={1065}
                height={593}
              />
            </div>

            {/* Right Section: Service Description */}
            <div className="newService-bg lg:w-[55%] lg:min-h-[100%] flex items-center">
              <div className="pl-4 lg:pl-8 p-4">
                {/* Icon */}
                <div className="flex mb-2 md:mb-4">
                  <img
                    src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1733331399/Services/hha-icon.png"
                    alt="heart"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                </div>

                {/* Title */}
                <p className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4 ">
                  HHA/PCA
                </p>

                {/* List */}
                <ul className="space-y-1 xl:space-y-3 lg:space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      You receive an individualized care plan.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      You participate in all decision making.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      Have a qualified HHA provide the services you need.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      Allows assistance with meal preparation, light
                      housekeeping, and more.
                    </span>
                  </li>
                </ul>
                <Link className="mt-2 block" href="/hha">
                  <button className="animated-button cursor-pointer">
                    <RiArrowRightDoubleFill className="text-2xl arrow-icon text-white" />
                    <span className="animated-text">
                      Explore HHA & PCA Services
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* hha end  */}

          {/* nhtd start  */}

          <div
            className="flex flex-col lg:flex-row h-full w-full"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            {/* Left Section: Image */}
            <div className="lg:w-[45%] h-full">
              <img
                src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1743522907/Services/nhtd-service.webp"
                alt="nhtd-service"
                className="w-full h-full object-cover"
                width={1344}
                height={896}
              />
            </div>

            {/* Right Section: Service Description */}
            <div className="newService-bg lg:w-[55%] lg:min-h-[100%] flex items-center">
              <div className="pl-4 lg:pl-8 p4">
                {/* Icon */}
                <div className="flex mb-2 md:mb-4">
                  <img
                    src="https://res.cloudinary.com/di3wwp9s0/image/upload/Services/nhtd-service-icon.png"
                    alt="nhtd-service-icon"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                </div>

                {/* Title */}
                <p className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4 ">
                  NHTD
                </p>

                {/* List */}
                <ul className="space-y-1 xl:space-y-3 lg:space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      Patients receive services based on their unique strengths,
                      needs, and goals.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      Patients are the primary decision makers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      Patients receive care right in their own home.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      Patients receive an individualized care plan.
                    </span>
                  </li>
                </ul>
                <Link className="mt-2 block" href="/nhtd">
                  <button className="animated-button cursor-pointer">
                    <RiArrowRightDoubleFill className="text-2xl arrow-icon text-white" />
                    <span className="animated-text">
                      Learn More About the NHTD Program
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* nhtd end  */}

          {/* private pay start  */}

          <div
            className="flex flex-col lg:flex-row h-full w-full"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            {/* Left Section: Image */}
            <div className="lg:w-[45%] h-full">
              <img
                src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1733325400/Services/private-pay-service.webp"
                alt="private pay service image"
                className="w-full lg:h-full h-full object-cover"
                width={1133}
                height={755}
              />
            </div>

            {/* Right Section: Service Description */}
            <div className="newService-bg lg:w-[55%] lg:min-h-[100%] flex items-center">
              <div className="pl-4 lg:pl-8 p-4">
                {/* Icon */}
                <div className="flex mb-2 md:mb-4">
                  <img
                    src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1733330991/Services/private-pay-icon.png"
                    alt="heart"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                </div>

                {/* Title */}
                <p className="text-xl md::text-2xl font-semibold text-white mb-2 md:mb-4 ">
                  PRIVATE PAY
                </p>

                {/* List */}
                <ul className="space-y-1 xl:space-y-3 lg:space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      You choose the care you need
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      Have a qualified HHA provide the services you need
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      You participate in the decision making
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-[#D1F9FC] dark:fill-slate-400"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[#00A6B2] dark:stroke-white"
                      />
                    </svg>
                    <span className="ml-3 text-white">
                      You received an individualized care plan to suit your
                      needs
                    </span>
                  </li>
                </ul>
                <Link className="mt-2 block " href="/private-pay-home-care">
                  <button className="animated-button cursor-pointer">
                    <RiArrowRightDoubleFill className="text-2xl arrow-icon text-white" />
                    <span className="animated-text">
                      See How Private Pay Works
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* private pay end  */}
        </div>
      </div>
    </div>
  );
};

export default Quality;
