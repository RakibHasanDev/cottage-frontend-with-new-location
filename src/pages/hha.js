import React from "react";

import { FaCreditCard } from "react-icons/fa";
import { RiHospitalLine } from "react-icons/ri";
import { HiBuildingLibrary } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import HhaRequirement from "@/components/hha/HhaRequirement";
import InsuranceCarousel from "@/components/hha/InsuranceCarousel";
import Head from "next/head";
import Image from "next/image";

const hha = () => {
  const requirements = [
    {
      title: "Medicaid Need",
      des: "Make sure, you are eligible for Medicaid",
      icon: <FaCreditCard />,
    },

    {
      title: "Insurance Coverage",
      des: "Eligibility depends on insurance, including Medicaid and Medicare.",
      icon: <RiHospitalLine />,
    },
    {
      title: "Assessment by Agency",
      des: "Initial assessment by the home health agency to determine eligibility.",
      icon: <HiBuildingLibrary />,
    },
    {
      title: "Service Area",
      des: "Our service is available in New York city, Nassau, Suffolk County, Westchester and Albany",
      icon: <FaLocationDot />,
    },
  ];

  const training = [
    {
      img: "/assets/HHA Tarining/EDUCATION-TRAINING.webp",
      title: "Formal Education Programs",
      description:
        "Some HHAs undergo formal training through educational programs. These programs may be offered by community colleges, vocational schools, or home healthcare agencies. Training typically covers topics such as basic healthcare, nutrition, infection control, and communication skills.",
    },
    {
      img: "/assets/HHA Tarining/certificate.webp",
      title: "Certification",
      description:
        "Depending on the location, HHAs may be required to complete a certification program. Certification requirements vary, but they often involve completing a certain number of training hours and passing an examination.",
    },
    {
      img: "/assets/HHA Tarining/training.webp",
      title: "On-the-Job Training",
      description:
        " In some cases, HHAs receive training while on the job. This training is often provided by experienced healthcare professionals or supervisors and covers the specific tasks and responsibilities required for the job.",
    },
  ];

  const vetting = [
    {
      img: "/assets/HHA Tarining/BACKGROUND-CHECK.webp",
      title: "Background Checks",
      des: "Employers typically conduct thorough background checks on potential HHAs. This includes criminal background checks to ensure that the individual does not have a history that would pose a risk to the clients they will be working with.",
    },
    {
      img: "/assets/HHA Tarining/reference.webp",
      title: "Reference Checks",
      des: "Employers may contact previous employers or personal references to verify the HHA's work history and gather information about their reliability, professionalism, and interpersonal skills.",
    },
    {
      img: "/assets/HHA Tarining/drugScreen.webp",
      title: "Drug Screening",
      des: "Some employers require drug screening to ensure that HHAs are not using substances that could impair their ability to perform their duties safely.",
    },

    {
      img: "/assets/HHA Tarining/license.webp",
      title: "HHA Certificate Verification",
      des: "If applicable, employers may verify that the HHA's certification is valid and up-to-date.",
    },
  ];

  const title = "HHA/PCA - Cottage Home Care Services";
  const description =
    "Our Home Health Aides (HHA) and Personal Care Aides (PCA) provide compassionate and professional care to support seniors and individuals in need. Our services include bathing, dressing assistance, meal preparation, feeding assistance, and medication reminders. We serve clients across New York City, Nassau, Suffolk County, Westchester, and Albany.";
  const keywords =
    "HHA, PCA, Home Health Aides, Personal Care Aides, senior care, bathing assistance, dressing assistance, meal preparation, feeding assistance, medication reminders, home care services, New York City, Nassau, Suffolk County, Westchester, Albany";

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://cottagehomecare.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://cottagehomecare.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "NHTD",
          item: "https://cottagehomecare.com/nhtd",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "HHA/PCA",
          item: "https://cottagehomecare.com/hha",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Cottage Home Care Services",
      url: "https://cottagehomecare.com",
      logo: "https://cottagehomecare.com/logo.png",
      description:
        "Cottage Home Care Services offers high-quality HHA and PCA services, providing personalized home care throughout NYC, Nassau, Suffolk, Westchester, and Albany.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1516-367-2266",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: ["English", "Spanish"],
      },
      sameAs: [
        "https://www.facebook.com/cottageHC",
        "https://x.com/cottagecanery",
        "https://www.linkedin.com/company/cottage-homecare/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an HHA/PCA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Home Health Aides (HHA) and Personal Care Aides (PCA) provide essential support services such as personal hygiene, meal preparation, medication reminders, and companionship for seniors and individuals with disabilities.",
          },
        },
        {
          "@type": "Question",
          name: "Who is eligible for HHA/PCA services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eligibility for HHA/PCA services includes seniors and individuals with disabilities who require assistance with daily living activities and personal care.",
          },
        },
        {
          "@type": "Question",
          name: "How can I apply for HHA/PCA services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To apply for HHA/PCA services, contact Cottage Home Care Services. Our team will assist with eligibility verification and enrollment.",
          },
        },
        {
          "@type": "Question",
          name: "Do HHA/PCA services include medical care?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HHA and PCA services primarily focus on non-medical personal care and assistance with daily living activities, ensuring clients receive the support they need at home.",
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen dark:bg-slate-600">
      <Head>
        {/* Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cottagehomecare.com/hha" />

        {/* Open Graph for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://cottagehomecare.com/hha" />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/logo.png"
        />
        <meta property="og:site_name" content="Cottage Home Care Services" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/logo.png"
        />
        <meta name="twitter:site" content="@cottagehomecare" />

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <div className="singleService-banner min-h-[40vh]">
        <h1 className="ml-5 md:ml-0  text-center text-2xl md:text-xl lg:text-2xl xl:text-4xl text-white pt-[15vh] mb-5 font-bold text-shadow league-spartan">
          HHA / PCA
        </h1>
        <div className="flex justify-center pl-5 my-2">
          <Link
            href="/contacts"
            className="cursor-pointer  md:text-lg font-medium md:font-semibold px-2.5 py-1.5 md:px-4  border-b-4 border-r-4 border-white md:py-3 bg-[#00A6B2] text-white shadow-md rounded-md text-base  league-spartan"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* new section start "Eligible for hha/pca"  */}

      <div className="w-[95%]  lg:w-[70%] mx-auto">
        <h1 className="text-center mt-4  text-2xl md:text-2xl  2xl:text-4xl font-bold dark:text-gray-100 league-spartan text-[#00A6B2]">
          Requirements to be eligible for HHA/PCA Program
        </h1>
        <div className="flex justify-center ">
          <hr className="bg-[#00A6B2] px-5 mt-2 py-[1px] w-[100px]" />
        </div>

        <p className="text-justify lg:text-center md:text-xl text-base auto-hyphen mt-2 md:mt-3 dark:text-gray-100 open-sans">
          To be eligible for Home Health Aide (HHA) or Personal Care Aide (PCA)
          services as a patient, certain criteria typically need to be met. Keep
          in mind that eligibility requirements can vary based on the specific
          program, location, and healthcare policies. Here are common
          eligibility criteria:
        </p>
      </div>

      {/* grid system start  */}

      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 w-[95%] md:w-[80%] mx-auto md:py-10 py-3 items-center"
        id="hha-pca"
      >
        <div data-aos="fade-up" data-aos-duration="2000">
          {requirements?.map((req, index) => (
            <div
              key={index}
              className="flex items-center gap-2 my-4 bg-[#00A6B2] px-3 py-2 shadow-md text-white rounded-md open-sans"
            >
              <p className="md:text-2xl text-lg">{req?.icon}</p>

              <div className="w-[95%] mx-auto ">
                <p className="text-lg font-semibold">{req?.title}:</p>

                <p className="mt-1 md:text-lg">{req?.des}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="lg:order-none order-first"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <img
            src={"/assets/hha.webp"}
            alt="HHA-BANNER"
            className="shadow-md md:h-[380px] "
            w="380"
            h="380"
          />
        </div>
      </div>

      {/* grid system end */}

      {/* new section end "Eligible for hha/pca"  */}

      {/* Aid train section start  */}

      {/* hha application requirement */}

      <HhaRequirement></HhaRequirement>

      {/* close hha application requirement  */}

      <div className="w-[80%] mx-auto py-5">
        <h1 className="text-center league-spartan text-2xl md:text-2xl  2xl:text-4xl dark:text-gray-100 font-bold text-[#00A6B2]">
          How the aides are trained and Examined
        </h1>

        <div className="flex justify-center ">
          <hr className="bg-[#00A6B2] px-5 mt-2 py-[1px] w-[100px]" />
        </div>

        <p className=" text-justify auto-hyphen md:text-center my-5 text-base md:text-xl  md:w-[70%] mx-auto dark:text-gray-100 open-sans">
          The training and vetting processes for HHAs may vary by location and
          employer, but there are common practices in place. Here&apos;s a
          general overview:
        </p>
      </div>

      <h1 className="text-center league-spartan text-xl md:text-3xl dark:text-gray-100 font-semibold">
        {" "}
        Training Process
      </h1>
      <div className="flex justify-center ">
        <hr className="bg-[#00A6B2] px-5 mt-2 py-[1px] w-[100px]" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-8 w-[95%] lg:w-[75%] mx-auto gap-7">
        {training?.map((train, index) => (
          <div
            key={index}
            className="shadow-md dark:border-[1px] dark:border-white"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div>
              <div className="h-56 overflow-hidden">
                <img
                  src={train?.img}
                  alt={`{train?.img}`}
                  className="h-full object-cover w-full"
                  w="100"
                  h="100"
                />
              </div>
              <div className="px-2 pb-3">
                <h3 className="text-xl my-1 font-medium dark:text-gray-100">
                  {train?.title}
                </h3>
                <p className="text-justify auto-hyphen dark:text-gray-100">
                  {train?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-center league-spartan text-2xl md:text-2xl  2xl:text-4xl dark:text-gray-100 font-bold text-[#00A6B2]">
        {" "}
        Examining and Screening{" "}
      </h1>
      <div className="flex justify-center ">
        <hr className="bg-[#00A6B2] px-5 mt-2 py-[1px] w-[100px]" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-8 w-[95%] lg:w-[75%] mx-auto gap-7">
        {vetting?.map((train, index) => (
          <div
            key={index}
            className="shadow-md dark:border-[1px] dark:border-white"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div>
              <div className="h-56 overflow-hidden">
                <img
                  src={train?.img}
                  alt={`{train?.img}`}
                  className="h-full object-cover w-full"
                  w="100"
                  h="100"
                />
              </div>
              <div className="px-2 pb-3">
                <h3 className="text-xl my-1 font-medium dark:text-gray-100 league-spartan ">
                  {train?.title}
                </h3>
                <p className="text-justify auto-hyphen dark:text-gray-100 open-sans text-[16px] leading-relaxed open-sans font-normal">
                  {train?.des}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* insurance we work with start  */}

      <div className="w-[80%] md:w-[85%] lg:w-[90%] mx-auto py-5">
        <h1 className="text-center text-xl  md:text-xl lg:text-2xl xl:text-4xl dark:text-gray-100 league-spartan font-bold text-[#00A6B2]">
          Insurance We Work With For HHA/PCA
        </h1>
        <div className="flex justify-center ">
          <hr className="bg-[#00A6B2] px-5 mt-2 py-[1px] w-[100px]" />
        </div>

        <InsuranceCarousel />
      </div>

      {/* insurance we work with end  */}

      {/* <Chat /> */}
    </div>
  );
};

export default hha;
