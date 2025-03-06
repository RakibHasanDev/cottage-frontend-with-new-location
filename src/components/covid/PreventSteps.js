import Image from "next/image";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const PreventSteps = () => {
  const wrongThings = [
    {
      img: "/assets/Covid-19/shake.png",
      title: "Avoid Close Contact",
      description: "The best thing you can do now is plan for how.",
    },
    {
      img: "/assets/Covid-19/tuch.png",
      title: "Don’t Touch Face",
      description: "The best thing you can do now is plan for how.",
    },
    {
      img: "/assets/Covid-19/gathering.png",
      title: "Social Distancing",
      description: "The best thing you can do now is plan for how.",
    },
  ];

  const rightThings = [
    {
      img: "/assets/Covid-19/hand.png",
      title: "Wash Your Hands",
      description: "The best thing you can do now is plan for how.",
    },
    {
      img: "/assets/Covid-19/drink.png",
      title: "Drink Much Watar",
      description: "The best thing you can do now is plan for how.",
    },
    {
      img: "/assets/Covid-19/mask.png",
      title: "Use Face Mask",
      description: "The best thing you can do now is plan for how.",
    },
  ];

  return (
    <div className=" py-10 bg-cover " id="actions-section">
      <h1 className=" text-2xl md:text-2xl  2xl:text-4xl font-bold text-center text-[#00A6B2] league-spartan dark:text-gray-100">
        What Actions We Took And So On
      </h1>

      <p className="md:w-[60%] mx-auto w-[95%] text-justify md:text-center mt-5 dark:text-gray-100 text-[16px] leading-relaxed open-sans font-normal">
        The safety of our employees and our clients at Cottage Home Care
        Services is our priority. As the Coronavirus (COVID-19) pandemic
        continues, we are monitoring the situation closely and following the
        guidance from the Centers for Disease Control and Prevention and local
        health authorities.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 w-[95%]  md:w-[70%] mx-auto mt-8">
        <div>
          {rightThings.map((right, index) => (
            <div
              key={index}
              className="shadow-md my-5 px-6 py-5 bg-hov2 cursor-pointer hover:bg-[#00A6B2] hover:text-white 
                            top-div rounded-md open-sans"
              data-aos-duration="2000"
              data-aos="zoom-in"
            >
              <div className="flex gap-4 items-center dark:text-gray-100  ">
                <div className="relative w-24 md:w-fit ">
                  <Image
                    src={right.img}
                    className="w-16 h-16 rounded-full border-2 border-[#00A6B2]  circle"
                    alt={right?.img}
                    width="64"
                    height="64"
                  />
                  <BsCheck className="bg-green-500 text-white  h-4 w-4 text-lg rounded-full absolute top-3 -right-1" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-2">{right.title}</h5>
                  <p>{right.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          {wrongThings.map((wrong, index) => (
            <div
              key={index}
              className="shadow-md my-5 px-6 py-5 bg-hov2 cursor-pointer hover:bg-[#00A6B2] hover:text-white top-div rounded-md open-sans"
              data-aos-duration="2000"
              data-aos="zoom-in"
            >
              <div className="flex gap-4 items-center dark:text-gray-100  ">
                <div className="relative w-24 md:w-fit ">
                  <Image
                    src={wrong?.img}
                    className="w-16 h-16 rounded-full border-2 border-[#00A6B2] circle"
                    alt={wrong?.img}
                    width="64"
                    height="64"
                  />
                  <RxCross2 className="bg-red-600 p-0.5 text-white  h-4 w-4 text-lg rounded-full absolute top-3 -right-1 font-semibold " />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-2">{wrong.title}</h5>
                  <p>{wrong.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreventSteps;
