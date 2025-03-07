import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const toysGiveaway = () => {
  return (
    <div className="min-h-screen dark:bg-slate-600 ">
      <div>
        <div className="toys-banner  min-h-[80vh] hidden md:block">
          <h1 className="lg:pt-[65vh] pt-[50vh] text-center text-white  text-2xl md:text-5xl font-semibold">
            <span className="graduation-title px-4 py-2 text-shadow">
              Christmas Toys Giveaway
            </span>
          </h1>
        </div>
        <div className="toys-banner    md:hidden block">
          <h1 className=" pt-[30vh] text-center text-white  text-2xl md:text-5xl font-semibold league-spartan">
            <span className="graduation-title px-4 py-2">
              Christmas Toys Giveaway
            </span>
          </h1>
        </div>
      </div>

      <div className="md:py-5 lg:w-[80%] w-[95%] mx-auto ">
        <div className="lg:mb-8  py-5">
          <h1 className=" text-center  text-xl font-bold text-primary md:text-xl lg:text-2xl xl:text-4xl  dark:text-gray-100 text-shadow league-spartan">
            {" "}
            Christmas Toys Giveaway{" "}
          </h1>
          <div className="flex justify-center ">
            <hr className="bg-primary px-5 md:mt-2 mt-2 py-[1px] w-[100px]" />
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
                <PhotoView src={"/assets/christmas-toy/img1.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img1.jpg"}
                    alt="img-1"
                    className="w-full h-[100%]  center shadow-md border-[1px] border-primary  object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img2.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img2.jpg"}
                    alt="img2"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary  object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img3.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img3.jpg"}
                    alt="img3"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary  object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img4.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img4.jpg"}
                    alt=""
                    className="w-full h-[100%] shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img5.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img5.jpg"}
                    alt="img-1"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom "
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
                <PhotoView src={"/assets/christmas-toy/img1.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img1.jpg"}
                    alt="img-1"
                    className="w-full h-[100%] object-cover custom-zoom center shadow-md border-[1px] border-primary cursor-pointer "
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
                <PhotoView src={"/assets/christmas-toy/img7.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img7.jpg"}
                    alt="img-1"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom "
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
                <PhotoView src={"/assets/christmas-toy/img8.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img8.jpg"}
                    alt="img-1"
                    className="w-full  h-[100%] shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img9.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img9.jpg"}
                    alt="img-1"
                    className=" h-[100%] w-full shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img11.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img11.jpg"}
                    alt="img-1"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary  object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img10.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img10.jpg"}
                    alt="img2"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary  object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img12.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img12.jpg"}
                    alt="img3"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary  object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img13.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img13.jpg"}
                    alt=""
                    className="w-full h-[100%] shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img15.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img15.jpg"}
                    alt="img-1"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img1.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img1.jpg"}
                    alt="img-1"
                    className="w-full h-[100%] object-cover custom-zoom center shadow-md border-[1px] border-primary cursor-pointer  "
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
                <PhotoView src={"/assets/christmas-toy/img16.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img16.jpg"}
                    alt="img-1"
                    className="w-full h-[100%] object-cover custom-zoom center shadow-md border-[1px] border-primary cursor-pointer "
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
                <PhotoView src={"/assets/christmas-toy/img17.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img17.jpg"}
                    alt="img-1"
                    className="w-full  h-[100%] shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img18.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img18.jpg"}
                    alt="img-1"
                    className=" h-[100%] w-full shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img19.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img19.jpg"}
                    alt="img-1"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary  object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img20.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img20.jpg"}
                    alt="img2"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary  object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img21.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img21.jpg"}
                    alt="img3"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary  object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img22.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img22.jpg"}
                    alt=""
                    className="w-full h-[100%] shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img23.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img23.jpg"}
                    alt="img-1"
                    className="w-full h-[100%] shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img25.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img25.jpg"}
                    alt="img-1"
                    className="w-full h-[100%] object-cover custom-zoom center shadow-md border-[1px] border-primary cursor-pointer  "
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
                <PhotoView src={"/assets/christmas-toy/img2.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img2.jpg"}
                    alt="img-1"
                    className="w-full h-[100%] object-cover custom-zoom center shadow-md border-[1px] border-primary cursor-pointer "
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
                <PhotoView src={"/assets/christmas-toy/img26.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img26.jpg"}
                    alt="img-1"
                    className="w-full  h-[100%] shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom"
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
                <PhotoView src={"/assets/christmas-toy/img27.jpg"}>
                  <img
                    src={"/assets/christmas-toy/img27.jpg"}
                    alt="img-1"
                    className=" h-[100%] w-full shadow-md border-[1px] border-primary cursor-pointer object-cover custom-zoom"
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default toysGiveaway;
