import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };
  const handleType = () => {
    // console.log(`Done after 5 loops!`);
  };
  return (
    <div className="resource-Banner h-[20vh] lg:h-[45vh] flex justify-end  pr-[5%] 2xl:pr-[20%] ">
      <div className="w-[220px] md:w-[400px] lg:w-[700px] md: mt-3 md:mt-5 lg:mt-[10vh]">
        <h3 className="text-2xl  lg:text-4xl   text-white md:font-bold font-medium  text-shadow league-spartan text-left mt-2">
          Resources
        </h3>
        <h1
          className="md:text-2xl lg:text-4xl text-lg  md:px-0 text-white league-spartan font-semibold  text-shadow  text-left md:mt-5 lg:mt-10 hidden md:block "
          style={{ whiteSpace: "pre-line" }}
        >
          <Typewriter
            words={["All Internal Resources You Can Use For\nYour Needs"]}
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
        <h1
          className="md:text-2xl lg:text-4xl text-lg  md:px-0 text-white league-spartan font-semibold  text-shadow  text-left md:mt-5 lg:mt-10 block md:hidden "
          style={{ whiteSpace: "pre-line" }}
        >
          <Typewriter
            words={["All Internal Resources You Can Use For Your Needs"]}
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
    </div>
  );
};

export default HeroSection;
