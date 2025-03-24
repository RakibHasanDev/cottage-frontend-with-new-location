import Head from "next/head";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const christmasParty = () => {
  return (
    <>
      <Head>
        <title>Christmas Party 2023 | Cottage Home Care Services</title>
        <meta
          name="description"
          content="Celebrate the joy of Christmas 2023 with Cottage Home Care Services. View highlights and photos from our festive party filled with laughter, love, and community spirit."
        />
        <meta
          name="keywords"
          content="Christmas Party 2023, Cottage Home Care, holiday celebration, NYC holiday party, community event, Christmas photos, Christmas event recap, festive gathering"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Christmas Party 2023 | Cottage Home Care Services"
        />
        <meta
          property="og:description"
          content="Explore the warm memories from our 2023 Christmas celebration hosted by Cottage Home Care Services. A night to remember!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.cottagehomecare.com/assets/christmas-party/christmas-cover.webp"
        />
        <meta
          property="og:image"
          content="https://www.cottagehomecare.com/assets/christmas-party/img1.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Christmas Party 2023 | Cottage Home Care Services"
        />
        <meta
          name="twitter:description"
          content="Step into the joy and celebration from our Christmas Party 2023 — hosted by Cottage Home Care Services!"
        />
        <meta
          name="twitter:image"
          content="https://www.cottagehomecare.com/assets/christmas-party/img1.jpg"
        />
        <link
          rel="canonical"
          href="https://cottagehomecare.com/christmas-party/"
        />
      </Head>

      <div className="min-h-screen dark:bg-slate-600 ">
        <div>
          <div className="christmas-banner min-h-[80vh] hidden md:block">
            <h1 className="lg:pt-[65vh] pt-[50vh] text-center text-white  text-2xl md:text-5xl font-semibold league-spartan">
              <span className="graduation-title px-4 py-2">
                Christmas Party 2023
              </span>
            </h1>
          </div>
          <div className="christmas-banner   md:hidden block">
            <h1 className=" pt-[30vh] text-center text-white  text-2xl md:text-5xl font-semibold league-spartan">
              <span className="graduation-title px-4 py-2">
                Christmas Party 2023
              </span>
            </h1>
          </div>
        </div>

        <div className="md:py-5 lg:w-[80%] w-[95%] mx-auto ">
          <div className="lg:mb-8  py-5">
            <h1 className="text-center  text-xl text-[#00A6B2] md:text-xl lg:text-2xl xl:text-4xl font-bold league-spartan dark:text-gray-100 text-shadow">
              {" "}
              Christmas Party 2023{" "}
            </h1>
            <div className="flex justify-center ">
              <hr className="bg-[#00A6B2] px-5 md:mt-2 mt-2 py-[1px] w-[100px]" />
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
                  <PhotoView src={"/assets/christmas-party/img1.jpg"}>
                    <img
                      src={"/assets/christmas-party/img1.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img6.jpg"}>
                    <img
                      src={"/assets/christmas-party/img6.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img3.jpg"}>
                    <img
                      src={"/assets/christmas-party/img3.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img22.jpg"}>
                    <img
                      src={"/assets/christmas-party/img22.jpg"}
                      alt=""
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
                  <PhotoView src={"/assets/christmas-party/img5.jpg"}>
                    <img
                      src={"/assets/christmas-party/img5.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img7.jpg"}>
                    <img
                      src={"/assets/christmas-party/img7.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img6.jpg"}>
                    <img
                      src={"/assets/christmas-party/img6.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img8.jpg"}>
                    <img
                      src={"/assets/christmas-party/img8.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img9.jpg"}>
                    <img
                      src={"/assets/christmas-party/img9.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img1.jpg"}>
                    <img
                      src={"/assets/christmas-party/img1.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img3.jpg"}>
                    <img
                      src={"/assets/christmas-party/img3.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img12.jpg"}>
                    <img
                      src={"/assets/christmas-party/img12.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img13.jpg"}>
                    <img
                      src={"/assets/christmas-party/img13.jpg"}
                      alt=""
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
                  <PhotoView src={"/assets/christmas-party/img14.jpg"}>
                    <img
                      src={"/assets/christmas-party/img14.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img16.jpg"}>
                    <img
                      src={"/assets/christmas-party/img16.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img15.jpg"}>
                    <img
                      src={"/assets/christmas-party/img15.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img17.jpg"}>
                    <img
                      src={"/assets/christmas-party/img17.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img5.jpg"}>
                    <img
                      src={"/assets/christmas-party/img5.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img19.jpg"}>
                    <img
                      src={"/assets/christmas-party/img19.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img20.jpg"}>
                    <img
                      src={"/assets/christmas-party/img20.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img21.jpg"}>
                    <img
                      src={"/assets/christmas-party/img21.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img22.jpg"}>
                    <img
                      src={"/assets/christmas-party/img22.jpg"}
                      alt=""
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
                  <PhotoView src={"/assets/christmas-party/img23.jpg"}>
                    <img
                      src={"/assets/christmas-party/img23.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img24.jpg"}>
                    <img
                      src={"/assets/christmas-party/img24.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img12.jpg"}>
                    <img
                      src={"/assets/christmas-party/img12.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img26.jpg"}>
                    <img
                      src={"/assets/christmas-party/img26.jpg"}
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
                  <PhotoView src={"/assets/christmas-party/img27.jpg"}>
                    <img
                      src={"/assets/christmas-party/img27.jpg"}
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

export default christmasParty;
