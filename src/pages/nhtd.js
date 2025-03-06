"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TbFileTypePdf } from "react-icons/tb";
import { FaPlayCircle } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Faq from "@/components/nhtd/Faq";
import ModalBody from "@/components/shared/ModalBody";
import Link from "next/link";
import Head from "next/head";
import ServicesComponent from "@/components/nhtd/ServicesComponent";
import Image from "next/image";

const NHTD = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const youtubeUrl =
    "https://www.youtube.com/embed/2jZGWEI1iOw?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1";

  const stuffs = [
    {
      value: "900",
      content: "Active HHA Aide",
    },
    {
      content: "Extensive Experience",
    },
    {
      content: "Expert Medical Team",
    },
  ];

  const handleOpenPdfClick = (pdf) => {
    window.open(pdf, "_blank");
  };

  const title =
    "NHTD Program in NYC | Official NHTD Provider - Cottage Home Care";
  const description =
    "Cottage Home Care is an officially enrolled NHTD provider in NYC, offering Medicaid-covered Nursing Home Transition & Diversion (NHTD) services.";
  const keywords =
    "NHTD Provider NYC, Official NHTD Program, Nursing Home Transition NYC, Medicaid NHTD Services, Independent Living Support NYC, NHTD Home Care Brooklyn";
  const pageUrl = "https://cottagehomecare.com/nhtd";
  const imageUrl =
    "https://res.cloudinary.com/di3wwp9s0/image/upload/q_auto,f_auto/v1739904083/cvy7kdo0ixxwltvunnam.webp";

  return (
    <div className="min-h-screen dark:bg-gray-600">
      {/* banner section start  */}

      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph (OG) for Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Cottage Home Care Services" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@cottagehomecare" />

        {/* ✅ Preload Hero Images for Better LCP */}
        <link rel="preload" as="image" href={imageUrl} fetchPriority="high" />
      </Head>

      {/* ✅ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: title,
              url: pageUrl,
              description: description,
              mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
              image: imageUrl,
              datePublished: "2025-02-20",
              dateModified: "2025-02-20",
              author: {
                "@type": "Organization",
                name: "Cottage Home Care Services",
              },
            },
          ]),
        }}
      />

      <div className="relative min-h-[40vh]  league-spartan">
        <picture>
          {/* Mobile Image (for screens smaller than 688px) */}
          <source
            srcSet="https://res.cloudinary.com/di3wwp9s0/image/upload/q_auto:best,f_auto,w_1080/v1739904168/ayaemn0p3ldnjpq6bmau.webp"
            media="(max-width: 688px)"
          />
          {/* Desktop Image (default) */}
          <Image
            src="https://res.cloudinary.com/di3wwp9s0/image/upload/q_auto,f_auto/v1739904083/cvy7kdo0ixxwltvunnam.webp"
            alt="NHTD - Nursing Home Transition and Diversion"
            width="2580"
            height="795"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>

        {/* Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A6B2]/10 to-[#00A6B2]/10"></div>

        {/* Text Content */}
        <div className="relative   h-[40vh] w-full ">
          <h1 className="ml-5 md:ml-0 text-2xl md:text-xl lg:text-2xl xl:text-4xl text-white pt-[10vh] mb-5 font-bold text-shadow text-center md:max-w-md lg:ml-[5%]">
            NHTD
            <br />
            <span className="mt-3 block text-3xl md:text-4xl font-bold">
              Nursing Home
            </span>
            <span className="mt-3 block text-3xl md:text-4xl font-bold">
              Transition and Diversion
            </span>
          </h1>

          <div className="flex justify-center pl-5 my-2 md:max-w-md lg:ml-[5%]">
            <Link
              href="/contacts"
              className="cursor-pointer md:text-lg font-medium md:font-semibold px-2.5 py-1.5 md:px-4 border-b-4 border-r-4 border-white md:py-3 bg-[#00A6B2] text-white shadow-md rounded-md text-base "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* banner section end  */}

      {/* details service section start  */}

      <div className="2xl:w-[75%] lg:w-[95%] w-[95%] mx-auto mt-10 pb-20">
        <div className="grid md:grid-cols-7 gap-5 md:gap-0">
          {/* left side column start */}

          <div className="md:col-span-2 ">
            <div className="bg-[#F8F9FA] rounded-md py-8 dark:bg-slate-800">
              <div className="w-[90%] mx-auto league-spartan">
                <h1 className="txt-lg md:text-2xl font-semibold dark:text-gray-100">
                  All Services
                </h1>

                <div className="mt-3 nhtd-section">
                  <ServicesComponent />
                </div>
              </div>
            </div>

            {/* contact card start */}

            <div className=" my-5">
              <div className="rounded-md league-spartan nhtd-banner">
                <h1 className="text-white text-2xl lg:text-4xl text-center playrify  w-[full]  flex justify-center items-center pt-[120px]">
                  Need Any Help ?
                </h1>
                <a
                  href="tel:+1516-367-2266"
                  className="text-white text-center playrify text-2xl lg:text-4xl mt-2 block"
                >
                  +1516-367-2266
                </a>
                <div className="flex justify-center mt-5">
                  <Link
                    href="/contacts"
                    className="bg-[#00A6B2] text-white px-4 lg:py-4 py-2 rounded-md  text-lg lg:text-2xl playrify "
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className=" my-5 rounded-md bg-[#f1f1f1] lg:h-[300px] dark:bg-slate-800">
              <div className="  px-4 py-8 ">
                <h1 className="playrify font-bold text-gray-600 text-lg lg:text-2xl dark:text-gray-100 league-spartan">
                  Downloads
                </h1>
                <h3 className="mt-3 dark:text-gray-100 text-[16px] leading-relaxed open-sans font-normal">
                  To download all the important documents regarding the needs of
                  home healthcare, please click the buttons.
                </h3>

                <div className="my-5 open-sans">
                  <button
                    onClick={() =>
                      handleOpenPdfClick("assets/Brochures/NHTD/allNHTD.pdf")
                    }
                    className=" my-3 bg-[#00A6B2] text-white px-4 py-2 rounded-md flex gap-1 items-center"
                  >
                    <TbFileTypePdf className="text-xl" /> NHTD Brochures
                  </button>

                  <button
                    onClick={() =>
                      handleOpenPdfClick(
                        "/assets/Brochures/Cottage/CottageBrushers.pdf"
                      )
                    }
                    className=" my-3 bg-[#00A6B2] text-white px-4 py-2 rounded-md flex gap-1 items-center"
                  >
                    <TbFileTypePdf className="text-xl md:text-base lg:text-xl" />{" "}
                    Company Details
                  </button>
                </div>
              </div>
            </div>

            {/* contact card end */}
          </div>

          {/* left side colum end */}

          {/* right side colum start */}

          <div className="md:col-span-5 order-first md:order-none ">
            <div className="w-[95%] mx-auto  min-h-[100vh]">
              {/* banner start */}

              <div className="lg:h-[500px] 2xl:h-[550px] overflow-hidden ">
                <Image
                  className=" h-full w-full object-cover"
                  src="https://res.cloudinary.com/di3wwp9s0/image/upload/q_auto,f_auto,w_1080/v1739298895/clfasecrrmzcsn9vacze.webp"
                  alt="Nhtd_Cover"
                  width="100"
                  height="100"
                  loading="lazy"
                />
              </div>

              {/* banner end */}

              <h2 className="mt-5 league-spartan text-xl lg:text-4xl font-semibold dark:text-gray-100 text-[#00A6B2]">
                What Is NHTD ?
              </h2>

              <p className="mt-3 lg:text-lg dark:text-white open-sans">
                The{" "}
                <strong>
                  Nursing Home Transition and Diversion (NHTD) Waiver Program
                </strong>{" "}
                is a
                <Link
                  href="https://www.health.ny.gov/facilities/long_term_care/nhtd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline ml-1"
                >
                  New York State Medicaid initiative
                </Link>{" "}
                designed to help eligible seniors and individuals with physical
                disabilities live independently instead of in a nursing home.
                The program provides personalized home care services that
                promote safety, independence, and well-being.
              </p>

              <ul className="list-disc ml-5 mt-3 lg:text-lg dark:text-white space-y-2 md:space-y-0 open-sans">
                <li>
                  Supports individuals in transitioning from nursing homes to
                  home-based care.
                </li>
                <li>
                  Provides Medicaid-covered services for eligible participants.
                </li>
                <li>
                  Allows participants to choose their services, providers, and
                  caregivers.
                </li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-5">
                {stuffs?.map((stuff, index) => (
                  <div
                    key={index}
                    className="shadow-xl border-b-4 border-[#00A6B2] rounded-md px-4 py-6 dark:bg-slate-200 text-[#00A6B2] league-spartan"
                    style={{ boxShadow: "0 10px 15px 3px rgba(0, 0, 0, 0.3)" }}
                  >
                    {stuff?.value && stuff?.content && (
                      <h1 className="lg:text-5xl text-4xl text-[#00A6B2] text-center font-semibold ">
                        {stuff?.value}+
                      </h1>
                    )}
                    {!stuff?.value && stuff?.content && (
                      <h3 className=" text-center text-xl lg:text-2xl font-semibold mt-3">
                        {stuff?.content}
                      </h3>
                    )}
                    {stuff?.value && stuff?.content && (
                      <h3 className=" text-center text-xl lg:text-xl font-semibold mt-3">
                        {stuff?.content}
                      </h3>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right side colum end */}
        </div>

        {/* new section start  */}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 my-8 items-center ">
          <div className=" md:flex justify-between gap-5 lg:col-span-3">
            <div
              className=" h-[250px] md:h-[300px] w-full"
              style={{
                background: `linear-gradient(180deg, rgba(0, 166, 178, 0.123) 0%, rgba(0, 166, 178, 0.116) 100%), url("https://res.cloudinary.com/di3wwp9s0/image/upload/v1739299223/h6zsxrjy1oxdoxidrhh1.webp")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="  flex justify-center h-full items-center">
                <button onClick={openModal} className="play-btn cursor-pointer">
                  <FaPlayCircle className="text-3xl lg:text-4xl" />
                </button>

                {showModal ? (
                  <ModalBody youtubeUrl={youtubeUrl} onClose={closeModal} />
                ) : null}
              </div>
            </div>

            <div className="w-full">
              <h2 className="playrify text-xl lg:text-2xl tracking-wider font-semibold dark:text-gray-100 mt-3 md:mt-0 league-spartan text-[#00A6B2]">
                Eligibility for NHTD
              </h2>

              <ul className="list-disc ml-5 mt-3 lg:text-lg dark:text-white space-y-2 md:space-y-1 open-sans">
                <li>Must be Medicaid-eligible.</li>
                <li>Require a nursing-home level of care.</li>
                <li>
                  Be <strong>18-64 years old</strong> with a verified physical
                  disability OR <strong>65+ years old</strong>.
                </li>
                <li>
                  Must be able to live safely in the community with Medicaid
                  waiver services.
                </li>
              </ul>

              <Link
                className="mt-3   bg-[#00A6B2] px-4 py-1.5  flex w-[280px] rounded-md text-white shadow-md"
                href="https://www.health.ny.gov/facilities/long_term_care/nhtd/eligibility.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiArrowRightDoubleFill className="text-2xl   text-white " />
                <span className="">Official NHTD Eligibility Criteria</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="pt-3 playrify text-xl lg:text-2xl font-semibold dark:text-gray-100 league-spartan text-[#00A6B2]">
              Why Choose NHTD ?
            </h2>

            <ul className="list-disc ml-5 mt-3 lg:text-lg dark:text-white space-y-2 md:space-y-0 open-sans">
              <li>
                <strong>Stay Close to Family & Friends:</strong> Get care at
                home while staying connected with loved ones.
              </li>
              <li>
                <strong>Comfort & Independence:</strong> Receive care in a
                familiar and supportive environment.
              </li>
              <li>
                <strong>Personalized Home Care:</strong> Tailored services,
                including home modifications and medical assistance.
              </li>
              <li>
                <strong>State-Funded Housing Subsidy:</strong> Eligible
                participants may qualify for a housing subsidy (administered
                through NHTD).
              </li>
            </ul>
            {/* <Link
                  href="https://www.health.ny.gov/facilities/long_term_care/nhtd/services.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 text-blue-500 hover:underline"
                >
                  Read more about NHTD services
                </Link> */}

            <Link
              className="mt-3   bg-[#00A6B2] px-4 py-1.5  flex w-[290px] rounded-md text-white shadow-md"
              href="https://www.health.ny.gov/facilities/long_term_care/nhtd/services.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiArrowRightDoubleFill className="text-2xl   text-white " />
              <span className="">Learn About the NHTD Program</span>
            </Link>
          </div>
        </div>

        <div className="w-[95%] mx-auto py-5 -ml-1">
          <h2 className="text-xl lg:text-2xl font-semibold dark:text-gray-100 text-[#00A6B2]">
            How to Apply for NHTD?
          </h2>

          <ul className="list-disc ml-5 mt-3 lg:text-lg dark:text-white space-y-2 open-sans">
            <li>
              <strong>For Nursing Home Residents:</strong> Speak with a
              discharge planner who can connect you with the{" "}
              <Link
                href="https://www.health.ny.gov/facilities/long_term_care/nhtd/rrdc.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Regional Resource Development Center (RRDC)
              </Link>
              .
            </li>
            <li>
              <strong>For Community Residents:</strong> Contact your local RRDC
              office to start the application process.
            </li>
            <li>
              Meet with an RRDC Coordinator and complete an Initial Service Plan
              (ISP).
            </li>
          </ul>

          <Link
            className="mt-3   bg-[#00A6B2] px-4 py-1.5  flex w-56 rounded-md text-white shadow-md"
            href="https://www.health.ny.gov/facilities/long_term_care/nhtd/rrdc.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiArrowRightDoubleFill className="text-2xl   text-white " />
            <span className="">Find an RRDC Near You</span>
          </Link>
        </div>
        <div className="my-5">
          <h2 className="pt-3 playrify text-xl lg:text-4xl font-semibold dark:text-gray-100 mb-3 league-spartan text-[#00A6B2]">
            Frequently Asked Questions
          </h2>

          <Faq />
        </div>

        {/* new section end */}
      </div>

      {/* details service section end */}

      {/* contact modal start */}

      {/* <ServicesModal /> */}

      {/* contact modal end */}
    </div>
  );
};

export default NHTD;
