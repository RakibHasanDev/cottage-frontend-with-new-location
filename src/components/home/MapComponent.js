"use client";

import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

// ✅ Dynamically Import react-photo-view for Next.js Optimization
const PhotoProvider = dynamic(
  () => import("react-photo-view").then((mod) => mod.PhotoProvider),
  { ssr: false }
);
const PhotoView = dynamic(
  () => import("react-photo-view").then((mod) => mod.PhotoView),
  { ssr: false }
);

const MapComponent = () => {
  const offices = [
    {
      officeName: "Queens Office",
      locationName:
        "126-01 Liberty Avenue, South Richmond Hill Queens, New York 11419",
      location:
        "https://www.google.com/maps?daddr=126-01+Liberty+Avenue,+South+Richmond+Hill+Queens,+New+York+11419,+United+States",
      openingDays: "Monday - Sunday",
      openingHours: {
        monday: "08:30 AM - 05:00 PM",
        tuesday: "08:30 AM - 05:00 PM",
        wednesday: "08:30 AM - 05:00 PM",
        thursday: "08:30 AM - 05:00 PM",
        friday: "08:30 AM - 05:00 PM",
        saturday: "08:30 AM - 05:00 PM",
        sunday: "08:30 AM - 05:00 PM",
      },
      picture:
        "https://res.cloudinary.com/di3wwp9s0/image/upload/v1741711276/map/map-1_fyhqtk.webp",
    },
    {
      officeName: "Long Island Office",
      locationName: "25 Newbridge Road, Suite 302 Hicksville, New York 11801",
      location:
        "https://www.google.com/maps/dir//25+Newbridge+Rd+Unit+302,+Oyster+Bay,+NY+11801/@40.7680687,-73.5969743,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c280e280b85923:0x6d08773ea58e3908!2m2!1d-73.5269344!2d40.7680899",
      openingDays: "Monday - Friday",
      openingHours: {
        monday: "08:30 AM - 05:00 PM",
        tuesday: "08:30 AM - 05:00 PM",
        wednesday: "08:30 AM - 05:00 PM",
        thursday: "08:30 AM - 05:00 PM",
        friday: "08:30 AM - 05:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
      picture:
        "https://res.cloudinary.com/di3wwp9s0/image/upload/v1741711276/map/map-1_fyhqtk.webp",
    },
    {
      officeName: "Albany Office",
      locationName: "130 Washington Ave 3rd Floor Unit G, Albany, NY 12210",
      location:
        "https://www.google.com/maps/dir//130+Washington+Ave,+Albany,+NY+12210,+USA/@42.6548809,-73.795538,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89de0a3aa4c10641:0xaf8dd4ae670e2237!2m2!1d-73.7605185!2d42.6548231?hl=en",
      openingDays: "Monday - Friday",
      openingHours: {
        monday: "08:30 AM - 05:00 PM",
        tuesday: "08:30 AM - 05:00 PM",
        wednesday: "08:30 AM - 05:00 PM",
        thursday: "08:30 AM - 05:00 PM",
        friday: "08:30 AM - 05:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
      picture:
        "https://res.cloudinary.com/di3wwp9s0/image/upload/v1741711326/map/map-3_gtzqqu.webp",
    },
    {
      officeName: "Bronx Office",
      locationName: "391 East 149th Street, Bronx, New York 10455",
      location:
        "https://www.google.com/maps?daddr=391+East+149th+Street,+Bronx,+New+York+10455,+United+States",
      openingDays: "Monday - Friday",
      openingHours: {
        monday: "09:00 AM - 05:00 PM",
        tuesday: "09:00 AM - 05:00 PM",
        wednesday: "09:00 AM - 05:00 PM",
        thursday: "09:00 AM - 05:00 PM",
        friday: "09:00 AM - 05:00 PM",
        saturday: "Closed",
        sunday: "Closed",
      },
      picture:
        "https://res.cloudinary.com/di3wwp9s0/image/upload/v1741711356/map/map-4_sizzac.webp",
    },
  ];
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const handleOfficeClick = useCallback((office) => {
    setSelectedOffice(office);
    setAnimationTrigger(false);
    setTimeout(() => setAnimationTrigger(true), 10);
  }, []);

  const getTodayOpeningHours = (openingHours) => {
    const todayKey = new Date()
      .toLocaleString("en-US", { weekday: "long" })
      .toLowerCase(); // 🔹 More readable
    return openingHours[todayKey];
  };

  return (
    <div
      className="lg:w-[95%]  w-full mx-auto lg:py-8 md:px-4 px-2 pt-5 pb-8 "
      id="map-location"
    >
      <div className="flex items-center gap-2 text-center justify-center   relative ">
        <h1 className="text-xl md:text-3xl 2xl:text-4xl font-bold  dark:text-gray-300 league-spartan text-[#00A6B2]">
          Cottage Home Care
        </h1>
        <a
          href="https://www.google.com/maps/d/viewer?mid=1F8-owHlE5yYe1I4I4WWueTc_2zvqHSE&ll=40.72910277268202%2C-73.92877093246109&z=10"
          target="_blank"
          loading="lazy"
          rel="noreferrer"
          className=" text-xl md:text-2xl 2xl:text-3xl font-semibold text-[#ff9900] block dark:text-gray-300"
          aria-label="View all Cottage Home Care offices on Google Maps"
        >
          All Offices
        </a>

        {/* The underline added using after pseudo-element */}
      </div>
      <hr className="border-[#00a6b2] border-t-2 w-12 md:mb-10  mx-auto mb-5 mt-2 " />

      <div className="lg:flex flex-wrap lg:gap-x-5 2xl:gap-x-10 gap-y-6 items-center justify-center mt-5 w-full lg:max-w-[1200px] 2xl:max-w-[1500px] mx-auto hidden ">
        {offices?.map((office, index) => (
          <div key={index} data-aos="zoom-in" data-aos-duration="2000">
            <div
              onClick={() => handleOfficeClick(office)}
              className={`${
                selectedOffice?.officeName === office?.officeName
                  ? "bg-[#00A6B2] dark:bg-slate-800 text-white"
                  : "bg-gray-300 "
              } rounded-full w-80 h-28 flex items-center p-4 shadow-md  cursor-pointer open-sans`}
            >
              {/* Circle on the left */}
              <div className="bg-white w-20 h-20 rounded-full mr-5">
                <PhotoProvider>
                  <PhotoView src={office?.picture}>
                    <img
                      src={office?.picture}
                      alt={office?.officeName}
                      className="w-full h-full rounded-full object-cover border-[2px] border-white"
                      loading="lazy"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>

              {/* Text on the right */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-lg font-bold">{office?.officeName}</h2>
                  <p className="text-[14px] font-semibold">
                    {office?.openingDays}
                  </p>
                  <p className="text-[14px] font-semibold">
                    {office?.openingHours?.monday}
                  </p>
                </div>
                {/* Bar under the opening hour */}
                <div
                  className={`${
                    selectedOffice?.officeName === office?.officeName
                      ? "w-full h-[5px] mt-1 bg-[#ff9900] dark:bg-slate-100 rounded-full shadow-inner"
                      : " w-full h-[5px] mt-1 bg-white rounded-full shadow-inner"
                  }  `}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:grid grid-cols-1 lg:grid-cols-6 lg:gap-8 2xl:gap-10 gap-3 mt-10  hidden 2xl:w-[80%] mx-auto">
        <div
          className={`lg:col-span-2 lg:w-[90%]  w-full ${
            animationTrigger ? "zoom-in-animation" : ""
          }`}
        >
          <div
            className="w-full pt-8 pb-16 rounded-md montserrat relative dark:bg-gray-300 bg-[#fff] "
            style={{
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
            }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {selectedOffice ? (
              <>
                <div className="montserrat">
                  <h1 className="text-center text-2xl lg:text-3xl dark:text-gray-700 font-semibold league-spartan">
                    {selectedOffice?.officeName}
                  </h1>

                  <h2 className="text-center mt-1 text-lg dark:text-gray-800 font-semibold league-spartan">
                    {selectedOffice?.openingDays}
                  </h2>
                  <h3 className="text-center text-sm 2xl:text-base px-2 mt-2 py-1 rounded-md border-[2px] border-[#ff9900] dark:border-gray-500 w-[80%] lg:w-[90%] 2xl:w-[80%] mx-auto shadow-md dark:text-black font-medium open-sans">
                    {getTodayOpeningHours(selectedOffice?.openingHours) ===
                    "Closed"
                      ? "Closed Today"
                      : `Open Today: ${getTodayOpeningHours(
                          selectedOffice?.openingHours
                        )}`}
                  </h3>

                  <ul className="w-[90%] 2xl:w-[80%] lg:w-[85%] mx-auto mt-3 space-y-1 text-[16px] leading-relaxed open-sans font-normal tracking-wide">
                    {Object.entries(selectedOffice?.openingHours)?.map(
                      ([day, hours], index) => (
                        <li
                          key={index}
                          className="text-gray-700 text-base lg:text-sm 2xl:text-base dark:text-black "
                        >
                          {day.charAt(0).toUpperCase() + day.slice(1)}: {hours}
                        </li>
                      )
                    )}
                  </ul>
                  <a
                    href={selectedOffice?.location}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 open-sans text-gray-800 dark:text-black ml-3 mt-1 text-base  lg:text-sm 2xl:text-base hover:text-[#ff9900] dark:hover:text-[#ff9900]"
                  >
                    <FaLocationDot className="text-3xl text-[#ff9900] dark:text-gray-600" />{" "}
                    <span className="w-[80%]">
                      {selectedOffice?.locationName}
                    </span>
                  </a>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-center text-4xl tracking-wide h-full flex items-center justify-center leading-normal">
                  Come At Our <br /> Office
                </h1>
              </>
            )}

            <p className="w-[40%] p-[3px] bg-[#ff9900] dark:bg-gray-600 shadow-md rounded-md absolute bottom-8 left-[30%]"></p>
          </div>
        </div>

        <div
          className="lg:col-span-4 "
          data-aos="fade-left"
          data-aos-duration="2500"
        >
          <div className="relative shadow-lg rounded-lg overflow-hidden border border-gray-300">
            <iframe
              className="w-full h-[50vh] md:h-[470px] rounded-md"
              src="https://www.google.com/maps/d/embed?mid=1F8-owHlE5yYe1I4I4WWueTc_2zvqHSE&z=10&ehbc=2E312F&ll=40.729102772682%2C-73.92877093246109&hl=en&noprof=1"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              title="Cottage Home Care Service all Locations Map"
            ></iframe>

            <div className="absolute top-3 right-4 bg-[#2e312f] p-2 rounded-md hidden md:block">
              <a
                href="https://www.google.com/maps/d/viewer?mid=1F8-owHlE5yYe1I4I4WWueTc_2zvqHSE&ll=40.72910277268202%2C-73.92877093246109&z=10"
                rel="noreferrer"
                className="text-white text-xs text-md font-medium hover:underline"
                title="map in details"
                loading="lazy"
                target="_blank"
              >
                View Full Map
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* starting mobile device  */}

      <div className="grid grid-cols-2 gap-5 h-full auto-rows-fr lg:hidden  ">
        <div className="space-y-3.5 ">
          {offices?.map((office, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration={`${index * 500}`}
            >
              <div
                className={`
                ${
                  selectedOffice?.officeName === office?.officeName
                    ? "bg-[#00A6B2] text-white px-4 py-2 rounded-md shadow-md text-center ml-3 -mr-2 transition duration-500"
                    : "bg-gray-300  px-4 py-2 rounded-md shadow-md text-center "
                }`}
                onClick={() => handleOfficeClick(office)}
              >
                <h1 className="font-semibold text-sm"> {office?.officeName}</h1>

                <div
                  className={`${
                    selectedOffice?.officeName === office?.officeName
                      ? "w-[70%]  mx-auto h-[3px] mt-1 bg-[#ff9900] rounded-full shadow-inner"
                      : " w-[70%] mx-auto  h-[3px] mt-1 bg-white rounded-full shadow-inner"
                  }  `}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`lg:col-span-2 lg:w-[90%]  w-full ${
            animationTrigger ? "zoom-in-animation" : ""
          }`}
        >
          <div
            className="w-full rounded-xl bg-white pt-3 pb-8  relative   min-h-full"
            style={{
              boxShadow:
                "inset 0 6px 12px rgba(0, 0, 0, 0.1), inset 0 2px 6px rgba(0, 0, 0, 0.08)",
            }}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            {selectedOffice ? (
              <>
                <div className="">
                  <h1 className="text-center text-lg font-semibold text-gray-600 league-spartan">
                    {selectedOffice?.officeName}
                  </h1>

                  <p className="p-[2px] bg-[#ff9900] shadow-md rounded-md w-[40%] mx-auto mt-0.5"></p>

                  <div className="flex justify-center my-2">
                    <PhotoProvider>
                      <PhotoView src={selectedOffice?.picture}>
                        <img
                          src={selectedOffice?.picture}
                          alt={selectedOffice?.officeName}
                          className=" w-16 h-16 rounded-full object-cover border-[2px] border-[#ff9900]"
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  {/* <h3 className="text-center text-sm font-semibold">
                    {
                      selectedOffice?.openingDays
                    }
                  </h3> */}

                  <h3 className="text-center text-sm 2xl:text-base px-2  py-0.5 rounded-md w-[95%] mx-auto  leading-5 font-semibold">
                    {getTodayOpeningHours(selectedOffice?.openingHours) ===
                    "Closed"
                      ? "Closed Today"
                      : `Open Today : `}
                    <br />
                    {`${getTodayOpeningHours(selectedOffice?.openingHours)}`}
                  </h3>
                  <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <a
                      href={selectedOffice?.location}
                      target="_blank"
                      rel="noreferrer"
                      className="text-center flex gap-1 items-center justify-center text-[#ff9900] whitespace-nowrap text-base"
                    >
                      <FaLocationDot />
                      <span className="font-semibold ">View Location</span>
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-center text-4xl tracking-wide h-fit flex items-center justify-center leading-normal">
                  Come At Our <br /> Office
                </h1>
              </>
            )}
          </div>
        </div>
      </div>

      {/* map location start  */}

      <div className="block lg:hidden">
        <h1 className="text-center  text-lg text-gray-600 dark:text-white my-5 font-semibold">
          Map Location
        </h1>

        <div data-aos="fade-up" data-aos-duration="1500">
          <div className=" shadow-lg rounded-lg overflow-hidden border border-gray-300 w-[98%] mx-auto ">
            <iframe
              className=" h-[400px] w-full rounded-md"
              src="https://www.google.com/maps/d/embed?mid=1F8-owHlE5yYe1I4I4WWueTc_2zvqHSE&z=9&ll=40.7,-73.9&ehbc=2E312F&hl=en&noprof=1"
              frameBorder="0"
              allowFullScreen
              title="Cottage Home Care Service Locations Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* map location end  */}

      {/* end mobile device  */}
    </div>
  );
};

export default MapComponent;
