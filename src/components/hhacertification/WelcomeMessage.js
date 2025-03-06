import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const WelcomeMessage = () => {
  return (
    <div>
      <div className="bg-[#f02f39d8] dark:bg-slate-800 py-10 mb-5">
        <div className="lg:w-[80%] mx-auto  w-[95%]  text-white p-4 ">
          <div className="lg:grid grid-cols-4 items-center md:gap-7 lg:gap-0">
            <div
              className="col-span-1 mt-5 md:mt-0 mb-8 lg:mb-0"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <h1 className="md:text-2xl font-semibold text-center md:text-start league-spartan custom-font">
                {" "}
                Join Our Institute{" "}
              </h1>
              <div className="mt-4 flex  gap-4 text-center ">
                <a
                  href="https://mybrooklyninstitute.com/classes"
                  target="_blank"
                  className="block w-full rounded bg-[#EBF8F9] px-12 py-3 text-sm league-spartan font-medium text-gray-700 shadow focus:outline-none focus:ring  sm:w-auto bg-hov2 md:text-lg "
                  rel="noreferrer"
                >
                  Find Out More
                </a>
              </div>
            </div>
            <div
              className="lg:col-span-2 md:col-span-3  mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="mt-1 text-xl font-semibold league-spartan custom-font">
                A Message From Our Directors, Navin and Arvin Shivpal
              </h4>
              <p className="mt-2 text-justify text-[16px] leading-relaxed open-sans font-normal">
                Welcome! We created this institution in order to not only give
                back but give power to our community. That is why we prefer to
                stay connected with the community, so please call us if you have
                any questions or concerns. As we like to believe,{" "}
                <span>{`"Changing Lives, One Student at a Time".`}</span>
              </p>
              <div className="md:block mt-1 hidden lg:hidden">
                <div>
                  <p className="mt-1  font-semibold flex gap-2 items-center league-spartan">
                    Navin -{" "}
                    <a
                      href="tel:+1347-975-2525"
                      className="hover:text-red-800  flex items-center gap-2"
                    >
                      <BsFillTelephoneFill /> 347-975-2525{" "}
                    </a>
                  </p>
                  <p className="  font-semibold mt-2 flex gap-2 items-center league-spartan">
                    Arvin -{" "}
                    <a
                      href="tel:+1347-969-1626"
                      className="hover:text-red-800 dark:hover:text-white  flex items-center gap-2 "
                    >
                      <BsFillTelephoneFill /> 347-969-1626{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="lg:flex flex justify-center md:justify-end col-span-1 mt-1 md:mt-0 md:hidden "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div>
                <p className="mt-1  font-semibold flex gap-2 items-center league-spartan">
                  Navin -{" "}
                  <a
                    href="tel:+1347-975-2525"
                    className="hover:text-gray-200 flex items-center gap-2 "
                  >
                    <BsFillTelephoneFill /> 347-975-2525{" "}
                  </a>
                </p>
                <p className="  font-semibold mt-2 flex gap-2 items-center">
                  Arvin -{" "}
                  <a
                    href="tel:+1347-969-1626"
                    className="hover:text-gray-200 flex items-center gap-2 ml-[5px] league-spartan"
                  >
                    <BsFillTelephoneFill /> 347-969-1626{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
