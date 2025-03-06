import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Herosection = () => {
  return (
    <div className="blog-cover">
      <div className="text-white flex flex-col md:flex-row md:w-[90%] 2xl:w-[70%] lg:w-[70%] mx-auto gap-y-3 md:gap-y-0 h-full items-center md:justify-between justify-end poppins text-shadow pb-5 md:pb-0">
        <h1 className="text-2xl lg:text-4xl font-bold  league-spartan ">
          Cottage Care Blog
        </h1>

        <div className=" flex items-center text-lg gap-1 font-semibold">
          <Link
            href="/"
            className="blog-underline-animation  league-spartan text-xl "
          >
            Home
          </Link>
          <MdOutlineArrowForwardIos className="text-lg font-bold" />
          <Link
            href="/blog"
            className="blog-underline-animation   league-spartan text-xl"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
