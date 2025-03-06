import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 bg-slate-300 min-h-screen">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-[#00A6B2] font-bold text-2xl">
                Looks like you have found the doorway to the great nothing
              </h1>
              <p className="my-2 text-[#00A6B2] font-sem">
                Sorry about that! Please visit our hompage to get where you need
                to go.
              </p>
              <Link href="/">
                <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-[#00A6B2] text-white  focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 hover:bg-violet-900 font-bold">
                  Take Me Home
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728484183/ntu4eblziau5sfpapxpb.png"
              alt="404-first"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728484233/y54gghnn72v5nrvr039j.png"
          alt="404-second"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
