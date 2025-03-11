import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { MdOutlinePersonalInjury } from "react-icons/md";
import Link from "next/link";
import LazyLoadVideo from "@/components/shared/LazyLoadVideo";
import Head from "next/head";

const Cdpap = () => {
  const consumer = [
    "Choosing their own caregivers.",
    "Providing guidance and training to the caregivers.",
    "Developing a care plan with a healthcare professional.",
    "Manage and coordinate the caregiver's schedule.",
    "Stay in good communication with Medicaid and the Agency.",
  ];

  const agency = [
    "Manage payroll, including wages and taxes, for caregivers.",
    "Monitor and ensure adherence to the agreed-upon care plan.",
    "Provide continuous support and supervision to the caregivers.",
    "Ensure all parties are in compliance with all relevant regulations and requirements.",
  ];

  const eligibilities = [
    {
      img: "/assets/benefit-card.jpg",
      type: "card",
      description2: [
        "You must have Medicaid.",
        "(We can help you apply if you don't!)",
      ],
    },
    {
      img: "/assets/medical-condition.png",
      description: "You have a present medical condition.",
    },
    {
      img: "/assets/living-assistance.png",
      description:
        "You require some/full assistance with daily living situations.",
    },
    {
      img: "/assets/new-york-logo.png",
      description: "You live in New York State",
    },
  ];

  const title =
    "CDPAP Program - Get Paid as a Caregiver in NYC | Cottage Home Care";
  const description =
    "Join the CDPAP program in New York City and earn up to $21.09 per hour as a caregiver for family or friends. Learn about eligibility and how to apply today.";
  const keywords =
    "CDPAP NYC, Consumer Directed Personal Assistance Program, home care jobs NYC, caregiver salary NYC, Medicaid personal assistance, senior care NYC, hire family caregiver";

  // ✅ JSON-LD Structured Data
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Cottage Home Care Services",
      url: "https://cottagehomecare.com",
      logo: "https://cottagehomecare.com/logo.png",
      description:
        "Cottage Home Care Services provides top-rated home care, including CDPAP, NHTD, and private pay services in NYC, Nassau, and Suffolk.",
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
      "@type": "WebPage",
      name: "CDPAP Program - Get Paid as a Caregiver in NYC | Cottage Home Care",
      url: "https://cottagehomecare.com/cdpap",
      description:
        "Join the CDPAP program in New York City and earn up to $21.09 per hour as a caregiver for family or friends. Learn about eligibility and how to apply today.",
      isPartOf: {
        "@type": "WebSite",
        url: "https://cottagehomecare.com",
      },
    },
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
          name: "CDPAP",
          item: "https://cottagehomecare.com/cdpap",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the CDPAP program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CDPAP (Consumer Directed Personal Assistance Program) is a Medicaid program that allows eligible individuals to hire and manage their own caregivers, including family members and friends.",
          },
        },
        {
          "@type": "Question",
          name: "Who is eligible for CDPAP in New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To qualify for CDPAP, you must be a Medicaid recipient and require assistance with activities of daily living such as bathing, dressing, or meal preparation.",
          },
        },
        {
          "@type": "Question",
          name: "How much can a caregiver earn under CDPAP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CDPAP caregivers can earn up to $21.09 per hour in New York City, based on the MLTC (Managed Long-Term Care) plan.",
          },
        },
        {
          "@type": "Question",
          name: "Can I hire a family member as a CDPAP caregiver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, under CDPAP, you can hire family members, friends, or trusted individuals to provide personal care services.",
          },
        },
        {
          "@type": "Question",
          name: "How do I apply for CDPAP services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can apply for CDPAP through Cottage Home Care Services. Our team will assist with Medicaid eligibility verification, required paperwork, and enrollment.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* ✅ Basic SEO Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Cottage Home Care Services" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph Meta Tags (For Facebook & LinkedIn) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://cottagehomecare.com/cdpap/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/hero.webp"
        />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/hero.webp"
        />
        <link rel="canonical" href="https://cottagehomecare.com/cdpap/" />

        {/* ✅ Structured Data (Schema.org JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <main className="min-h-screen dark:bg-slate-600">
        <div className="cdpapService-banner min-h-[40vh]">
          <div className="pt-[5vh] md:pt-[50px] md:max-w-lg lg:ml-[3%] 2xl:ml-[1%] ">
            <div className="space-y-2 pl-2 md:pl-0 league-spartan ">
              <h1 className="text-center text-2xl xl:text-3xl 2xl:text-4xl text-white font-bold text-shadow">
                CDPAP
              </h1>
              <h1 className="text-center text-2xl text-white font-bold text-shadow block md:hidden">
                Get Optimum Pay Rates
              </h1>
              <h1 className="text-center text-2xl xl:text-3xl 2xl:text-4xl text-white font-bold text-shadow hidden md:block">
                Get Optimum Pay Rates
              </h1>
              <h1 className="text-center text-2xl xl:text-3xl 2xl:text-4xl text-white font-bold text-shadow">
                (New York City)
              </h1>
            </div>
          </div>
          <div className="flex justify-center md:justify-start pl-2 my-2 lg:ml-[17%] 2xl:ml-[9%] md:mt-5">
            <Link
              href="/contacts"
              className="cursor-pointer 2xl:text-lg font-medium md:font-semibold px-2.5 py-1.5 2xl:px-4 2xl:py-3 bg-[#00A6B2] border-b-4 border-r-4 border-white text-white shadow-md rounded-md text-base league-spartan"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div
          className="w-[95%] lg:w-[60%] mx-auto mt-10 dark:text-gray-100"
          id="cdpap-section"
        >
          <h1 className="league-spartan text-xl font-medium md:text-3xl md:leading-10 text-justify auto-hyphen">
            Cottage Home Care Services is approved to assist you with the
            Consumer Directed Personal Assistant Program (CDPAP) and help you to
            start earning at optimum pay rates in New York City!
          </h1>
          <p className="mt-5 leading-relaxed open-sans md:text-lg text-justify auto-hyphen">
            This unique program allows the consumer to administer and assume
            responsibility for their own care. The flexibility of this program
            and the way in which it is administered is what makes it so unique.
            It promotes independence and gives the consumer a true sense of
            involvement in the decision making process with his/her own care.
          </p>
        </div>

        <div className="w-[95%] lg:w-[70%] mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-2">
            <div className="text-center w-[95%] md:w-[90%] mx-auto cdpap-point">
              <h3 className="text-xl lg:text-2xl font-medium bg-[#00A6B2] py-3 text-white league-spartan">
                The consumer is responsible for:
              </h3>
              <ul className="text-start mb-10 mt-5">
                {consumer.map((con, index) => (
                  <li
                    key={index}
                    className="my-3 text-lg px-4 py-3 open-sans shadow-md hover:bg-[#00A6B2] hover:text-white flex items-center gap-2 dark:text-white dark:bg-slate-500"
                  >
                    <MdOutlinePersonalInjury className="text-[#F48221] text-xl" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center w-[95%] md:w-[90%] mx-auto cdpap-point">
              <h3 className="text-xl lg:text-2xl font-medium bg-[#164273] py-3 text-white league-spartan">
                The agency is responsible for:
              </h3>
              <ul className="text-start mb-10 mt-5">
                {agency.map((agn, index) => (
                  <li
                    key={index}
                    className="my-3 text-lg px-4 py-3 open-sans shadow-md hover:bg-[#164273] hover:text-white flex items-center gap-2 dark:text-white text-justify hyphens-auto dark:bg-slate-500"
                  >
                    <FaHandHoldingMedical className="text-[#F48221]" />
                    {agn}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="dark:text-gray-100 w-full text-lg md:text-xl lg:text-2xl xl:text-4xl text-center league-spartan font-bold mt-5 text-[#00A6B2]">
            Eligibility for a CDPAP program
          </h3>
          <div className="flex justify-center">
            <hr className="bg-[#00A6B2] px-5 mt-2 py-[1px] w-[100px]" />
          </div>

          <div
            className="grid lg:grid-cols-6 gap-7 md:w-[85%] w-[95%] mx-auto py-10 items-center"
            id="cdpap-points"
          >
            <div className="col-span-5 lg:col-span-3">
              <div className="my-3 md:-ml-[3%]">
                {eligibilities?.map((eligible, index) => (
                  <div
                    key={index}
                    className="my-2"
                    data-aos="fade-up"
                    data-aos-duration={`${index * 300}`}
                  >
                    <div className="flex items-center">
                      <div className="bg-[#00A6B2] rounded-full h-[120px] w-[120px] flex justify-center items-center z-10 mx-auto">
                        <div className="flex justify-center rounded-full bg-white w-[100px] h-[100px] overflow-hidden">
                          <img
                            src={eligible?.img}
                            alt={eligible?.description}
                            className={`object-cover h-fit flex justify-center items-center p-2 ${
                              eligible?.type ? "mt-5" : ""
                            }`}
                            w="100"
                            h="100"
                          />
                        </div>
                      </div>
                      <div className="bg-[#00A6B2] flex w-[80%] mx-auto h-[100px] -ml-[18%]">
                        <p className="flex justify-center items-center px-4 ml-[20%] text-white md:text-lg text-base open-sans">
                          {eligible.description2 ? (
                            <>
                              {eligible.description2[0]}
                              <br />
                              {eligible.description2[1]}
                            </>
                          ) : (
                            eligible.description
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="col-span-5 lg:col-span-3 order-first lg:order-none"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div
                id="cdpap-video"
                className="h-[300px] md:h-[450px] w-full lg:w-[800px] rounded-xl shadow-xl"
              >
                <LazyLoadVideo
                  src="https://www.youtube.com/embed/q_5BEK0CS8w?rel=0"
                  rounded={true}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cdpap;
