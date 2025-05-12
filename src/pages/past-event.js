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
        <link
          rel="alternate"
          href="https://cottagehomecare.com/past-event/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/past-event/"
          hreflang="x-default"
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

        <div className="seo-text-hidden">
          <p>
            At Cottage Home Care Services, we are proud to be more than just a
            home care agency — we are a community partner. Our dedication to
            giving back is demonstrated through a variety of past events that
            reflect our mission of compassion, cultural unity, and outreach.
            These initiatives showcase our effort to uplift communities across
            New York City, including Queens, Brooklyn, the Bronx, and beyond.
          </p>

          <p>
            Each event we host is designed to support seniors, families,
            caregivers, and children by providing moments of joy, resources, and
            education. As a leading home care provider in NYC, we believe in
            building strong connections beyond care by engaging with the people
            and neighborhoods we serve. Whether it&apos;s a cultural
            celebration, health awareness campaign, or a support drive for those
            in need, our goal is always to make a positive difference.
          </p>

          <p>Here are some of our most impactful community events:</p>

          <ul>
            <li>
              <strong>Diwali 2024 – Liberty Avenue Celebration:</strong> A
              colorful and festive gathering celebrating the Festival of Lights
              with cultural performances, food, and togetherness.
            </li>
            <li>
              <strong>Breast Cancer Awareness Month 2024:</strong> A month-long
              campaign to raise awareness, educate the community, and honor
              survivors through workshops, pink ribbon distribution, and support
              sessions.
            </li>
            <li>
              <strong>Christmas Toys Giveaway:</strong> An initiative to bring
              smiles to children&aposs;s faces by distributing holiday gifts to
              families in need across our service areas.
            </li>
            <li>
              <strong>Christmas Party 2023:</strong> A joyful event for clients,
              caregivers, and local residents to gather, celebrate, and create
              lasting holiday memories.
            </li>
            <li>
              <strong>School Supplies Giveaway:</strong> A back-to-school drive
              providing children with essential educational materials including
              backpacks, notebooks, and stationery.
            </li>
          </ul>

          <p>
            These events are a core part of our community outreach mission. We
            are committed to continuing these efforts and planning more events
            that uplift, unite, and empower the people we care for. Our work is
            rooted in compassion, and our events help reinforce the values that
            define Cottage Home Care Services.
          </p>

          <p>
            To learn more about our upcoming community events or explore
            partnership opportunities, contact us at{" "}
            <a href="mailto:info@cottagehomecare.com">
              info@cottagehomecare.com
            </a>{" "}
            or call <a href="tel:516-367-2266">516-367-2266</a>. Stay connected
            as we continue to build a better, more inclusive community—together.
          </p>
        </div>

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
