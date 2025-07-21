import React from "react";
import { TbFileTypePdf } from "react-icons/tb";
import ServicesComponent from "@/components/nhtd/ServicesComponent";
import PrivatePayFaqs from "@/components/PrivatePay/PrivatePayFaqs";
import Link from "next/link";
import Head from "next/head";
import BannerWithBreadcrumbs from "@/utils/BannerWithBreadcrumbs";

const PrivatePayService = () => {
  const stuffs = [
    {
      content: "Home Care Professionals",
    },
    {
      content: "Successfully Managed Care",
    },
    {
      content: "Senior Medical Consultants",
    },
  ];

  const handleOpenPdfClick = (pdf) => {
    // Replace this with your actual PDF file or provide a way for the user to select a file
    window.open(pdf, "_blank");
  };

  const title = "Private Pay Home Care Services | Cottage Home Care";
  const description =
    "Private Pay at Cottage Home Care offers flexible, personalized home care services without insurance — available across NYC, Nassau, Suffolk & beyond.";

  const keywords =
    "Private Pay Home Care, Personalized Home Care Services, Home Health Aides, Personal Care Aides, Flexible Payment Home Care, Customized Care Plans, Disability Support, Senior Care, Home Care Privacy, Direct Client Billing, New York City, Nassau, Suffolk County, Westchester, Albany";

  // ✅ JSON-LD Structured Data
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Cottage Home Care Services",
      url: "https://cottagehomecare.com",
      logo: "https://cottagehomecare.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1516-367-2266",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: ["English", "Spanish"],
      },
      sameAs: [
        "https://www.facebook.com/cottageHC",
        "https://www.linkedin.com/company/cottage-homecare/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Private Pay Home Care Services | Cottage Home Care",
      url: "https://cottagehomecare.com/private-pay-home-care",
      description:
        "Private Pay Service offers personalized home care in NYC, Nassau, and Suffolk. Flexible care plans allow clients to pay directly for high-quality services without third-party involvement.",
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
          name: "Private Pay",
          item: "https://cottagehomecare.com/private-pay-home-care",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the Private Pay Service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private Pay Service offers personalized care options where clients directly pay for services without third-party involvement, allowing for flexible care plans.",
          },
        },
        {
          "@type": "Question",
          name: "How does the Private Pay Service work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clients can choose their desired level of care and pay directly for the services. This gives individuals control over their home care needs without relying on insurance or government assistance.",
          },
        },
      ],
    },
  ];

  // ✅ Preload Hero Images for Better LCP
  const preloadLinks = [
    {
      href: "https://cottagehomecare.com/assets/PrivatePay/private-pay-cover.webp",
      fetchPriority: "high",
      type: "image/webp",
    },
  ];

  return (
    <>
      <Head>
        {/* ✅ Basic SEO Meta Tags */}
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Cottage Home Care Services" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph Meta Tags (For Facebook & LinkedIn) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Cottage Home Care Services" />
        <meta
          property="og:url"
          content="https://cottagehomecare.com/private-pay-home-care/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/assets/PrivatePay/private-pay-cover.webp"
        />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cottagecareny" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/assets/PrivatePay/private-pay-cover.webp"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/private-pay-home-care/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/private-pay-home-care/"
          hreflang="x-default"
        />

        <link
          rel="canonical"
          href="https://cottagehomecare.com/private-pay-home-care/"
        />

        {/* ✅ Preloading Hero Images for Faster Load */}
        {preloadLinks.map((link, index) => (
          <link
            key={index}
            rel="preload"
            href={link.href}
            as="image"
            type={link.type}
          />
        ))}

        {/* ✅ Structured Data (Schema.org JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* banner section start  */}

      <main className="min-h-screen dark:bg-gray-600">
        <div className="singleService-banner min-h-[40vh] league-spartan">
          <h1 className="ml-5 md:ml-0   text-2xl md:text-xl lg:text-2xl xl:text-4xl text-white pt-[10vh] mb-5 font-bold text-shadow text-center md:max-w-md  lg:ml-[10%]">
            Private Pay
            <p className="mt-1 md:mt-3 ">In</p>
            <p className="mt-1 md:mt-3 ">Cottage Home Care </p>
          </h1>
          <div className="flex justify-center pl-5 my-2 md:max-w-md lg:ml-[10%]">
            <Link
              href="/contact"
              className="cursor-pointer  md:text-lg font-medium md:font-semibold px-2.5 py-1.5 md:px-4  border-b-4 border-r-4 border-white md:py-3 bg-[#00A6B2] text-white shadow-md rounded-md text-base league-spartan "
            >
              Contact Us
            </Link>
          </div>
          <BannerWithBreadcrumbs title="Private Pay" />
        </div>

        {/* banner section end  */}

        {/* details service section start  */}

        <div className="2xl:w-[75%] lg:w-[90%] w-[95%] mx-auto mt-10 pb-20">
          <div className="grid md:grid-cols-7 gap-5 md:gap-0">
            {/* left side column start */}

            <div className="md:col-span-2  ">
              <div className="bg-[#F8F9FA]  rounded-md py-8 dark:bg-slate-800">
                <div className="w-[90%] mx-auto">
                  <h2 className="txt-lg md:text-2xl font-semibold dark:text-gray-100 league-spartan">
                    All Services
                  </h2>

                  <div className="mt-3 nhtd-section league-spartan">
                    <ServicesComponent />
                  </div>
                </div>
              </div>

              {/* contact card start  */}

              <div className=" my-5 league-spartan">
                <div
                  className="rounded-md "
                  style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${"/assets/NHTD/contact.jpg"})`,
                    height: "350px",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <p
                    className="text-white text-2xl lg:text-4xl text-center playrify  w-[full]  flex justify-center items-center
                 pt-[120px]"
                  >
                    Need Any Help ?
                  </p>
                  <a
                    href="tel:+1516-367-2266"
                    className="text-white text-center playrify text-2xl lg:text-4xl mt-2 block"
                  >
                    +1516-367-2266
                  </a>
                  <div className="flex justify-center mt-5">
                    <Link
                      href="/contact"
                      className="bg-[#00A6B2] text-white px-4 lg:py-4 py-2 rounded-md  text-lg lg:text-2xl playrify "
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" my-5 rounded-md bg-[#f1f1f1] lg:h-[300px] dark:bg-slate-800">
                <div className="  px-4 py-8 ">
                  <p className="playrify font-bold text-gray-600 text-lg lg:text-2xl dark:text-gray-100 league-spartan">
                    Downloads
                  </p>
                  <p className="mt-3 dark:text-gray-100 text-[16px] leading-relaxed open-sans font-normal">
                    To download all the important documents regarding the needs
                    of home healthcare, please click the buttons.
                  </p>

                  <div className="my-5 open-sans">
                    <button
                      onClick={() =>
                        handleOpenPdfClick(
                          "/assets/Brochures/Private Pay/7.pdf"
                        )
                      }
                      className=" my-3 bg-[#00A6B2] text-white  px-4 md:px-2  py-2 md:text-sm  rounded-md flex gap-1 items-center"
                    >
                      <TbFileTypePdf className="lg:text-xl text-xl md:text-base" />{" "}
                      Private Pay Brochures
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

              {/* contact card end  */}
            </div>

            {/* left side colum end  */}

            {/* right side colum start  */}

            <div className="md:col-span-5 order-first md:order-none ">
              <div className="w-[95%] mx-auto  min-h-[100vh]">
                {/* banner start  */}

                <div className="lg:h-[500px] 2xl:h-[550px] overflow-hidden ">
                  <img
                    className=" h-fit w-full object-cover"
                    src={"/assets/PrivatePay/private-pay-cover.webp"}
                    alt={"private-pay-cover-image"}
                    width={1600}
                    height={1067}
                  />
                </div>

                {/* banner end  */}

                <h3 className="mt-5  text-xl lg:text-4xl font-semibold dark:text-gray-100 league-spartan text-[#00A6B2]">
                  What Is Private Pay In Home Care ?
                </h3>
                <p className="mt-3 lg:text-lg dark:text-white space-y-2 md:space-y-0 text-[16px] leading-relaxed open-sans font-normal ">
                  Private pay in home health care refers to a payment
                  arrangement where services are paid for directly by the client
                  or their family, rather than through insurance or government
                  assistance programs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-5 ">
                  {stuffs?.map((stuff, index) => (
                    <div
                      key={index}
                      className="shadow-xl border-b-4 border-[#00A6B2] rounded-md px-4 py-6 dark:bg-slate-200 league-spartan text-[#00A6B2]"
                      style={{
                        boxShadow: "0 10px 15px 3px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <h3 className="text-center text-xl md:text-base lg:text-3xl font-semibold mt-3">
                        {stuff?.content}
                      </h3>
                    </div>
                  ))}
                </div>

                <div className="my-5">
                  <p className="pt-3 playrify text-xl lg:text-3xl font-semibold dark:text-gray-100 league-spartan text-[#00A6B2]">
                    Why Choose Us?
                  </p>

                  <ul className=" mt-3 lg:text-lg dark:text-white md:space-y-0 text-[16px] leading-relaxed open-sans font-normal">
                    <li className="font-semibold">Experience and Expertise:</li>

                    <li>
                      With years of experience in the home care industry, we
                      have <br /> the knowledge and expertise to provide peace
                      of mind.
                    </li>
                    <li className="font-semibold pt-3">
                      Compassionate Caregivers:
                    </li>
                    <li>
                      Our caregivers are carefully screened, trained, and
                      selected for <br /> their compassion, reliability, and
                      dedication to their craft.
                    </li>
                  </ul>
                </div>

                <div className=" md:flex justify-between gap-5 items-center">
                  <div
                    className=" h-[250px] md:h-[300px] w-full"
                    style={{
                      background: `linear-gradient(180deg, rgba(0, 166, 178, 0.123) 0%, rgba(0, 166, 178, 0.116) 100%), url('/assets/PrivatePay/private-pay.webp')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <div className="  flex justify-center h-full items-center">
                  <button
                      onClick={openModal}
                      className="play-btn cursor-pointer"
                    >
                      <ion-icon name="play"></ion-icon>
                    </button>

                    {showModal ? <ModalBody youtubeUrl={youtubeUrl} onClose={closeModal} /> : null}
                  </div> */}
                  </div>

                  <div className="w-full">
                    <p className="playrify text-xl lg:text-3xl tracking-wider font-semibold dark:text-gray-100 mt-3 md:mt-0 league-spartan text-[#00A6B2]">
                      Benefit of Private Pay Services
                    </p>

                    <ul className=" mt-3  dark:text-white md:space-y-0 text-[16px] leading-relaxed open-sans font-normal">
                      <li className="font-semibold text-lg">
                        Custom Tailored Care Plan:
                      </li>

                      <li>
                        You Should receive care tailored to your needs,
                        preferences and schedule.
                      </li>
                      <li className="font-semibold pt-1 text-lg">
                        Flexible Scheduling:
                      </li>
                      <li>
                        Enjoy the flexibility to choose the timing and frequency
                        of caregiver visits that work best for you.
                      </li>
                      <li className="font-semibold pt-1 text-lg">
                        Dedicated Caregivers:
                      </li>
                      <li>
                        Our compassionate and experienced caregivers are
                        committed to providing the highest level of care and
                        support.
                      </li>
                      <li className="font-semibold pt-1 text-lg">
                        Peace of Mind:
                      </li>
                      <li>
                        Rest assured knowing that you or your loved one is
                        receiving personalized care from a trusted and reliable
                        provider.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="my-5">
                  <h4 className="pt-3  text-xl lg:text-4xl font-semibold dark:text-gray-100 mb-3 league-spartan text-[#00A6B2]">
                    Frequently Asked Questions
                  </h4>

                  <PrivatePayFaqs />
                </div>
              </div>
            </div>

            {/* right side colum end  */}
          </div>
        </div>

        {/* details service section end  */}

        {/* contact modal start  */}

        {/* contact modal end  */}

        {/* chat boat import  */}
        {/* <Chat /> */}

        {/* chat boat import end  */}
      </main>
    </>
  );
};

export default PrivatePayService;
