import React from "react";
import NewSlider from "./NewSlider";

const Testimonials = () => {
  return (
    <div className="lg:pt-16 pt-7 dark:bg-slate-600">
      <h3 className="w-[90%] md:w-full mx-auto text-center league-spartan font-bold text-2xl  md:text-3xl 2xl:text-4xl dark:text-gray-100 text-[#00A6B2]">
        Testimonials From Our Patients <br /> and CareGivers
      </h3>
      <hr className="border-[#00a6b2] border-t-2 w-12 mt-3 md:mb-8  mx-auto mb-5 " />
      <div
        className=" bg-[#7eb2b6] dark:bg-slate-300 dark:to-slate-400 min-h-[420px] md:min-h-fit 
             p-1 rounded-md w-[83%] md:w-[80%] mx-auto mb-10  lg:mb-20 relative "
        id="carousel-section"
      >
        {/* bg-gradient-to-t from-[#00837f91] to-[#2044afbd] */}

        <NewSlider />
      </div>
    </div>
  );
};

export default Testimonials;
