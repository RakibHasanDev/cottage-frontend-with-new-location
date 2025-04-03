import Head from "next/head";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const schoolSupply = () => {
  return (
    <>
      <Head>
        <title>School Supplies Giveaway | Cottage Home Care Services</title>
        <meta
          name="description"
          content="Join Cottage Home Care’s School Supplies Giveaway. Explore event highlights and heartwarming moments in our back-to-school photo gallery."
        />
        <meta
          name="keywords"
          content="school supplies giveaway, Cottage Home Care events, back to school support, community giveaway NYC, free school supplies, family event, education support, care services events"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="School Supplies Giveaway | Cottage Home Care Services"
        />
        <meta
          property="og:description"
          content="Experience the joy and community impact of our School Supplies Giveaway. View the full event gallery and relive the smiles!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cottagehomecare.com/assets/Backpack School GIveway/backPack-cover-1.webp"
        />
        <meta
          property="og:image"
          content="https://www.cottagehomecare.com/assets/new-school-giveaway/img11.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="School Supplies Giveaway | Cottage Home Care Services"
        />
        <meta
          name="twitter:description"
          content="Check out the highlights from our School Supplies Giveaway event — supporting families and education in our community."
        />
        <meta
          name="twitter:image"
          content="https://www.cottagehomecare.com/assets/new-school-giveaway/img11.jpg"
        />
        <link
          rel="canonical"
          href="https://cottagehomecare.com/school-supply/"
        />
      </Head>
      <div className="min-h-screen dark:bg-slate-600">
        <div>
          <div className="school-supply min-h-[80vh] hidden md:block ">
            <h1 className="lg:pt-[60vh] pt-[60vh] text-center text-white  text-2xl md:text-5xl font-semibold league-spartan">
              <span className="graduation-title px-4 py-2  text-shadow">
                School Supplies Giveaway
              </span>
            </h1>
          </div>
          <div className="school-supply block md:hidden  ">
            <p className=" pt-[30vh] text-center text-white  text-2xl md:text-5xl font-semibold">
              <span className="graduation-title px-4 py-2  text-shadow advertise">
                School Supplies Giveaway
              </span>
            </p>
          </div>
        </div>

        <div className="md:py-10 lg:w-[80%] w-[95%] mx-auto ">
          <div className="lg:mb-8 lg:pt-12 py-5">
            <p className=" text-center  text-xl  league-spartan font-bold md:text-xl lg:text-2xl xl:text-4xl  dark:text-gray-100 text-[#00A6B2]">
              {" "}
              School Supplies Giveaway{" "}
            </p>
            <div className="flex justify-center ">
              <hr className="bg-[#00A6B2] px-5 md:mt-5 mt-2 py-[1px] w-[100px]" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            <div className="grid grid-rows-3 grid-flow-col gap-7">
              <div
                className="row-span-1 col-span-4 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img11.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img11.jpg"}
                      alt="img-1"
                      className="w-full h-[100%]  center shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className=" row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-2.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-2.jpg"}
                      alt="img2"
                      className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                    ></img>
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-3.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-3.jpg"}
                      alt="img3"
                      className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-2 col-span-2 lg:h-[628px] h-[428px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-4.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-4.jpg"}
                      alt="school supply"
                      className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>

            <div className="grid grid-rows-3 grid-flow-col gap-7">
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointe"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-5.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-5.jpg"}
                      alt="img-1"
                      className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom "
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-1 col-span-4 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointe"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-8.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-8.jpg"}
                      alt="img-1"
                      className="w-full h-[100%] object-cover custom-zoom center shadow-md border-[1px] border-[#00A6B2] cursor-pointer "
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-7.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-7.jpg"}
                      alt="img-1"
                      className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom "
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointe "
                data-aos="fade-down"
                data-aos-duration="1400"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-6.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-6.jpg"}
                      alt="img-1"
                      className="w-full  h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-1 col-span-2  lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer  "
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-10.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-10.jpg"}
                      alt="img-1"
                      className=" h-[100%] w-full shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-7 mt-[28px]">
            <div className="grid grid-rows-3 grid-flow-col gap-7">
              <div
                className="row-span-1 col-span-4 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img11.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img11.jpg"}
                      alt="img-1"
                      className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className=" row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-12.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-12.jpg"}
                      alt="img2"
                      className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                    ></img>
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-13.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-13.jpg"}
                      alt="img3"
                      className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2]  object-cover custom-zoom"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-2 col-span-2 lg:h-[628px] h-[428px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-14.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-14.jpg"}
                      alt="cottage school supply giveaway"
                      className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>

            <div className="grid grid-rows-3 grid-flow-col gap-7">
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-16.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-16.jpg"}
                      alt="img-1"
                      className="w-full h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-1 col-span-4 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-17.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-17.jpg"}
                      alt="img-1"
                      className="w-full h-[100%] object-cover custom-zoom center shadow-md border-[1px] border-[#00A6B2] cursor-pointer  "
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-15.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-15.jpg"}
                      alt="img-1"
                      className="w-full h-[100%] object-cover custom-zoom center shadow-md border-[1px] border-[#00A6B2] cursor-pointer "
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-1 col-span-2 lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointe "
                data-aos="fade-down"
                data-aos-duration="1400"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-13.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-13.jpg"}
                      alt="img-1"
                      className="w-full  h-[100%] shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div
                className="row-span-1 col-span-2  lg:h-[300px] h-[200px]  overflow-hidden w-full cursor-pointer  "
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <PhotoProvider>
                  <PhotoView src={"/assets/new-school-giveaway/img-19.jpg"}>
                    <img
                      src={"/assets/new-school-giveaway/img-19.jpg"}
                      alt="img-1"
                      className=" h-[100%] w-full shadow-md border-[1px] border-[#00A6B2] cursor-pointer object-cover custom-zoom"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default schoolSupply;
