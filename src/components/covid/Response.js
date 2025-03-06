import React from "react";

const Response = () => {
  return (
    <div className="mt-5 bg-[#EBF8F9] py-16 dark:bg-slate-800">
      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 className="text-center dark:text-gray-100 league-spartan text-2xl md:text-2xl  2xl:text-4xl font-semibold text-[#00A6B2]">
          Our Response
        </h1>

        <p className="md:w-[60%] mx-auto w-[95%] text-justify md:text-center mt-5 dark:text-gray-100 text-[16px] leading-relaxed open-sans font-normal">
          The safety of our employees and our clients at Cottage Home Care
          Services is our priority. As the Coronavirus (COVID-19) pandemic
          continues, we are monitoring the situation closely and following the
          guidance from the Centers for Disease Control and Prevention and local
          health authorities.
        </p>

        <div className="flex justify-center text-center mt-8 bg-hov2">
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
            target="_blank"
            className="uppercase text-semibold  text-white rounded-md bg-[#00A6B2] shadow-md px-5 py-3 league-spartan"
            rel="noreferrer"
          >
            Find out More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Response;
