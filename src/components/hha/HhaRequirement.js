"use client";
import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import callReader from "../../assets/iUponBYPYB.json";

// ✅ Dynamically import Lottie only on the client side
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HhaRequirement = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-[#EBF8F9] py-16 dark:bg-slate-600">
      <div className="bg-white md:w-[80%] w-[95%] mx-auto dark:bg-slate-800 shadow-lg">
        <div className="pt-10">
          <h1 className="text-center dark:text-gray-200 md:text-xl lg:text-2xl xl:text-4xl text-2xl league-spartan font-bold text-[#00A6B2]">
            HHA Application Requirements:
          </h1>
          <div className="flex justify-center ">
            <hr className="bg-[#00A6B2] px-5 mt-2 py-[1px] w-[100px]" />
          </div>
        </div>

        <div className="bg-white pb-10 text-gray-600 grid md:grid-cols-7 items-center dark:bg-slate-800 dark:text-gray-200">
          <div className="md:col-span-4 md:mt-0 -mt-16">
            <div className="w-[90%] mx-auto mt-5 md:mt-0 open-sans text-[16px] leading-relaxed font-normal">
              <h4 className="md:text-lg font-medium">
                HHA Certificate & Reference Letter
              </h4>
              <ul className="list-disc ml-8 mt-1 space-y-0.5">
                <li>HHA Certificate from a certified school</li>
                <li>Two letters of recommendation</li>
              </ul>
              <h4 className="md:text-lg font-medium mt-5">Two forms of IDs</h4>
              <ul className="list-disc ml-8">
                <li>Green Card holder - Green card and Social Security card</li>
                <span className="font-semibold -ml-6">OR</span>
                <li>
                  Work Permit - Employment Authorization Card & Social Security
                  Card
                </li>
                <span className="font-semibold -ml-6">OR</span>
                <li>
                  U.S. Citizen - U.S. Passport/State IDs (Driver&apos;s License,
                  Identification Card) & Social Security Card
                </li>
              </ul>
              <h4 className="md:text-lg font-medium mt-5">Physical</h4>
              <ul className="list-disc ml-8">
                <li>Updated Pre-Employment Physical (Within Last 6 Months)</li>
                <li>
                  A drug Test also known as a drug screen is required (8-10
                  panel Drug Test)
                </li>
                <li>
                  RUBEOLA/MEASLES (if it’s not immune 2 booster shots needed)
                </li>
                <li>One step PPD: date given and date read.</li>
                <span className="font-semibold -ml-6">OR</span>
                <li>Quantiferon: Lab report required.</li>
                <li>
                  If PPD/Quantiferon is positive, Chest X-Ray report is required
                </li>
                <li>Covid-19 Vaccination Card</li>
              </ul>

              <h4 className="md:text-lg font-medium mt-5">Direct Deposit</h4>
              <ul className="list-disc ml-8">
                <li>Must have direct deposit form/void check when applying</li>
              </ul>
            </div>
          </div>

          {/* ✅ Lottie Animation */}
          <div className="md:col-span-3 order-first sm:order-none">
            <div ref={ref} className="mx-auto  -mt-8">
              {inView && (
                <Suspense fallback={<div>Loading...</div>}>
                  <Lottie
                    animationData={callReader}
                    loop={true}
                    className="h-fit object-cover   "
                  />
                </Suspense>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HhaRequirement;
