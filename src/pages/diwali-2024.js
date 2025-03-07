import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const diwali2024 = () => {
  return (
    <div className="min-h-screen dark:bg-slate-600">
      <div>
        <div className="diwali-2024  min-h-[80vh] hidden md:block">
          <h1 className="lg:pt-[65vh] pt-[50vh] text-center text-white  text-2xl md:text-5xl font-semibold league-spartan">
            <span className="px-4 py-2 text-shadow">
              Diwali 2024 - Liberty Avenue Celebration
            </span>
          </h1>
        </div>
        <div className="diwali-2024  md:hidden block">
          <h1 className=" pt-[30vh] text-center text-white  text-2xl md:text-5xl font-semibold league-spartan">
            <span className=" px-4 py-2">
              Diwali 2024 - Liberty Avenue Celebration
            </span>
          </h1>
        </div>
      </div>

      <div className="md:py-5 lg:w-[80%] w-[95%] mx-auto ">
        <div className="lg:mb-8  py-5">
          <h1 className=" text-center  text-xl  md:text-xl lg:text-2xl xl:text-4xl font-bold text-primary dark:text-gray-100 text-shadow league-spartan">
            {" "}
            Diwali 2024 - Liberty Avenue Celebration
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
                <PhotoView src={"/assets/Diwali2024/img1.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img1.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img2.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img2.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img10.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img2.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img4.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img4.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img5.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img5.jpg"}
                    alt="img-5"
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
                <PhotoView src={"/assets/Diwali2024/img6.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img6.jpg"}
                    alt="img-6"
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
                <PhotoView src={"/assets/Diwali2024/img7.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img7.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img8.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img8.jpg"}
                    alt="img-8"
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
                <PhotoView src={"/assets/Diwali2024/img9.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img9.jpg"}
                    alt="img-9"
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
                <PhotoView src={"/assets/Diwali2024/img10.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img10.jpg"}
                    alt="img-10"
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
                <PhotoView src={"/assets/Diwali2024/img11.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img11.jpg"}
                    alt="img11"
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
                <PhotoView src={"/assets/Diwali2024/img12.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img12.jpg"}
                    alt="img12"
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
                <PhotoView src={"/assets/Diwali2024/img15.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img10.jpg"}
                    alt="img15"
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
                <PhotoView src={"/assets/Diwali2024/img14.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img14.jpg"}
                    alt="img-14"
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
                <PhotoView src={"/assets/Diwali2024/img17.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img17.jpg"}
                    alt="img-16"
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
                <PhotoView src={"/assets/Diwali2024/img16.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img16.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img18.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img18.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img19.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img19.jpg"}
                    alt="img-18"
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
                <PhotoView src={"/assets/Diwali2024/img20.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img20.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img21.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img21.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img22.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img22.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img23.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img23.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img24.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img24.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img10.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img10.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img26.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img26.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img27.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img27.jpg"}
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
                <PhotoView src={"/assets/Diwali2024/img28.jpg"}>
                  <img
                    src={"/assets/Diwali2024/img28.jpg"}
                    alt="img-18"
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

export default diwali2024;
