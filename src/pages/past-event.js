import React, { Suspense } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";
import BannerWithBreadcrumbs from "@/utils/BannerWithBreadcrumbs";

const HeroBanner = dynamic(() => import("@/components/pastevent/Hero"), {
  suspense: true,
  ssr: false,
});

const PastEvent = () => {
  const events = [
    {
      img: "/assets/Diwali2024/card-cover.webp",
      title: "Diwali 2024 - Liberty Avenue Celebration",
      path: "diwali-2024",
      alt: "Diwali event 2024 cottage home care",
      height: "1200",
      width: "800",
    },
    {
      img: "/assets/Breast_Cancer_Awarencess/img1.webp",
      title: "Breast Cancer Awareness Month 2024",
      alt: "breast cancer awareness event 2024 cottage home care",
      path: "breast-cancer-awareness",
      width: "1200",
      height: "675",
    },
    {
      img: "/assets/christmas-toy/card-cover.webp",
      title: "Christmas Toys Giveaway",
      path: "toys-giveaway",
      alt: "toys giveaway event 2024",
      width: "720",
      height: "480",
    },
    {
      img: "/assets/christmas-party/christmas-card-cover.webp",
      title: "Christmas Party 2023",
      path: "christmas-party",
      alt: "cottage christmas party event",
      alt: "christmas party event",
      width: "720",
      height: "445",
    },
    {
      img: "/assets/Backpack School GIveway/backPack-cover.webp",
      title: "School Supplies Giveaway",
      path: "school-supply",
      alt: "back-pack-giveaway",
      width: "720",
      height: "528",
    },
  ];

  return (
    <>
      <Head>
        <title>Past Events - Cottage Home Care Services</title>
        <meta
          name="description"
          content="Discover past events at Cottage Home Care—community programs, webinars, photos, and highlights that show how we support and engage our community."
        />
        <meta
          name="keywords"
          content="Cottage Home Care past events, community outreach programs, healthcare webinars, event highlights, home care activities, community support events, past event photos, event key takeaways, Cottage Home Care community engagement"
        />
        <link rel="canonical" href="https://cottagehomecare.com/past-event/" />
      </Head>

      <main className="dark:bg-slate-600">
        {/* Lazy-loaded banner */}
        <HeroBanner />

        <div>
          <div className="md:flex justify-between  items-center dark:bg-slate-800 ">
            <div
              className="md:w-[50%]  mx-auto "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="w-[90%] mx-auto ">
                <div className="-mt-20">
                  <BannerWithBreadcrumbs title="Past Event" />
                </div>

                <div className="rounded-md  mr-auto ">
                  <div className=" pb-8 pt-5 md:mt-0">
                    <h1
                      className=" text-start md:text-5xl text-[26px] font-medium md:font-bold text-gray-600   md:px-0 mt-2  league-spartan  dark:text-gray-300 lg:max-w-[620px] medium-device inline-block "
                      id="empowering"
                    >
                      Empowering & Educating
                      <svg
                        className="nectar-scribble basic-underline"
                        role="presentation"
                        viewBox="-400 -55 730 60"
                        preserveAspectRatio="none"
                      >
                        <path
                          style={{ "animation-duration": "0s" }}
                          d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15"
                          stroke="#FFA500"
                          pathLength="1"
                          strokeWidth="6"
                          fill="none"
                        ></path>
                      </svg>
                    </h1>
                    <h2 className=" text-start md:text-5xl text-[20px] font-medium md:font-bold text-gray-600 league-spartan dark:text-gray-300 medium-device ">
                      {" "}
                      Building stronger Communities
                    </h2>
                  </div>
                </div>
                <p className="text-2xl font-semibold text-[#00A6B2] league-spartan">
                  Our Mission
                </p>
                <p className="mt-5 md:text-lg font-medium text-justify text-gray-600 tracking-normal dark:text-gray-200 text-[16px] leading-relaxed open-sans">
                  At Cottage Home Care Services, our mission is to enrich the
                  lives of individuals and strengthen our community through
                  meaningful and impactful initiatives.
                </p>
                <p className="mt-3 md:text-lg font-medium text-justify text-gray-600 tracking-normal dark:text-gray-200 leading-relaxed  open-sans">
                  We firmly believe in the power of giving and strive to make a
                  lasting difference by focusing on initiatives that align with
                  our <span>{`community's`}</span> needs. Together, we can
                  create a stronger community built on compassion, empathy, and
                  shared prosperity.
                </p>
              </div>
            </div>
            <div
              className="z-10 md:-mt-8 "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src="/assets/pst_event-cover.webp"
                alt="past_event-cover"
                width={918}
                height={612}
              />
            </div>
          </div>
        </div>

        {/* <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 items-end -mt-[40px] relative">
          {pictures?.map((picture, index) => (
            <a href={picture?.link} target="_blank"
              rel="noreferrer noopener"

              key={index} className="block">
              <div
                key={index}
                className={`z-10 card-zoom relative flex items-center justify-center overflow-hidden ${picture?.id}`}
                style={{
                  minHeight: `${picture?.height}`,
                  position: "relative", 
                }}
                id="event"
              >
                <video
                  src={picture?.picture}
                  autoPlay
                  loop
                  muted
                  playsInline 
                  className="absolute top-0 left-0 w-full h-full object-cover custom-zoom "
                >
          
                </video>
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-eveient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5))",
                  }}
                ></div>

                <div className="text-gray-100  md:h-28 w-[95%] md:w-[85%] mx-auto absolute md:bottom-12 bottom-8  ">
                  <div className="">
                    <h1 className="md:text-3xl text-2xl font-bold league-spartan">
                      {picture?.title}
                    </h1>
                    <p className="md:mt-3  mt-2 font-semibold flex items-center gap-2 league-spartan">
                      LEARN MORE <BsArrowRight className="text-2xl" />
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div> */}

        {/* event cards start */}

        <p className="text-center  text-xl  league-spartan md:text-xl lg:text-2xl xl:text-4xl font-semibold dark:text-gray-100 mt-12 text-[#00A6B2] ">
          Cottage Photo Album
        </p>
        <hr className="border-[#00a6b2] border-t-2 w-12 mt-2 md:mb-3  mx-auto mb-3 " />
        <div className="lg:w-[75%] mx-auto py-8 w-[95%] " id="event-card">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-7 ">
            {events?.map((eve, index) => (
              <Link key={index} href={`/${eve?.path}`}>
                <div data-aos="zoom-in" data-aos-duration="1000">
                  <div className="relative overflow-hidden h-64 md:h-48 xl:h-64">
                    <img
                      src={eve?.img}
                      alt={eve?.alt}
                      className="w-full object-cover h-fit transition duration-500 transform hover:scale-105"
                      width={eve?.width}
                      height={eve?.height}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-0 hover:opacity-50 transition duration-300 flex items-center justify-center">
                      <p className="text-white text-center text-lg font-semibold">
                        View Your Gallery
                      </p>
                    </div>
                  </div>

                  {/* 
                                <h3 className=''>
                                    {eve?.title}
                                </h3> */}

                  <p
                    className={`${
                      eve?.title?.length > 32
                        ? "uppercase text-center mt-1 font-medium tracking-widest dark:text-gray-100 text-gray-600 text-base open-sans font-semibold"
                        : "uppercase text-center mt-1 font-medium tracking-widest dark:text-gray-100 text-gray-600 text-lg open-sans font-semibold"
                    }`}
                  >
                    {eve?.title || "Default Title"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* event cards end  */}

        {/* <Chat /> */}
      </main>
    </>
  );
};

export default PastEvent;
