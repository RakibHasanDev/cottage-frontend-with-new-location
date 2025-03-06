import Image from "next/image";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

const heroSection = () => {
  const handleDone = () => {
    // console.log(`Done after 5 loops!`)
  };
  const handleType = () => {
    // console.log(`Done after 5 loops!`)
  };

  return (
    <div className="relative  h-[82vh] hha-banner">
      <div className="relative  max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-5/6 lg:items-center lg:px-8 justify-start ml-[3%]">
        <div className="md:max-w-2xl w-[95%]  sm:text-left mt-[25vh] md:mt-[50vh] hha-banner-shadow md:p-6 p-3 ">
          <div className="flex  items-center gap-8 mb-3">
            <h1 className="text-xl md:text-3xl w-[400px] md:w-[600px] font-extrabold sm:text-5xl text-white league-spartan text-shadow">
              <Typewriter
                words={["Become HHA  Certified Today!"]}
                loop={1000}
                cursor
                cursorStyle="।"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </h1>
          </div>

          <p className="mt-4 text-start text-2xl md:text-2xl  2xl:text-4xl sm:leading-relaxed text-white font-medium  text-shadow league-spartan">
            Brooklyn Institute of Vocational Training
          </p>

          <div></div>

          <div className="flex items-center md:gap-32 gap-14">
            <div>
              <p className="mt-3 flex justify-start  items-center gap-2 font-semibold max-w-lg sm:text-xl md:text-3xl sm:leading-relaxed text-white custom-font text-shadow league-spartan ">
                <FiPhone className="text-shadow" />
                929-386-0092
              </p>
              <div className="mt-8 flex flex-wrap  text-center">
                <div>
                  <a
                    href="https://mybrooklyninstitute.com/"
                    target="_blank"
                    className="block w-full rounded bg-red-600  px-6 md:px-12 py-3  font-medium text-white shadow hover:bg-red-900   sm:w-auto bg-hov2 text-lg md:text-xl league-spartan"
                    rel="noreferrer"
                  >
                    Visit Us
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <img
                src={"/assets/hhalogo.webp"}
                alt={"cottage-logo"}
                className="md:w-36 md:h-36 w-20 h-20 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
