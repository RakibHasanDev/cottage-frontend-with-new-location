"use client";
import React, { Suspense, useState } from "react";
import { FaAward, FaHospital, FaSmile } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import callReader from "../../src/assets/social-media-lottie/call.json";
import { FaRegCalendar } from "react-icons/fa";
import IconLoading from "@/components/shared/IconLoading";
import { useInView } from "react-intersection-observer";
import ReviewsSection from "@/components/ServiceArea/ReviewSection";

import dynamic from "next/dynamic";
import Image from "next/image";
import EasierLife from "@/components/home/EasierLife";
import Head from "next/head";
// ...
const NJMapClient = dynamic(
  () => import("@/components/NjComponent/NJMapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] w-full rounded-2xl bg-gray-100 animate-pulse" />
    ),
  }
);
const LocationsList = dynamic(
  () => import("@/components/NjComponent/LocationsList"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] w-full rounded-2xl bg-gray-100 animate-pulse" />
    ),
  }
);

const LOCATIONS = [
  { name: "Jersey City", lat: 40.7178, lng: -74.0431 },
  { name: "Bayonne", lat: 40.6687, lng: -74.1143 },
  { name: "Union", lat: 40.6976, lng: -74.2632 },
  { name: "Newark", lat: 40.7357, lng: -74.1724 },
  { name: "Fairfield", lat: 40.8837, lng: -74.304 },
  { name: "East Orange", lat: 40.7673, lng: -74.2049 },
  { name: "Linden", lat: 40.622, lng: -74.2446 },
];

/* --- Optional reusable video with custom thumbnail --- */
function VideoWithCustomThumb({
  videoId = "7uoXudV9uas",
  thumb = "https://img.youtube.com/vi/7uoXudV9uas/maxresdefault.jpg",
  caption = "YOU CHOOSE WHO PROVIDES YOUR HOME CARE",
}) {
  const [play, setPlay] = useState(false);
  return (
    <div className="w-full aspect-video  overflow-hidden shadow-lg">
      {play ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0`}
          title="Customer Testimonial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="relative w-full h-full group"
          aria-label="Play video"
        >
          <Image
            src={thumb}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
            width={1280}
            height={720}
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="rounded-full p-5 bg-white/90 shadow-md transition group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#E53935]">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-12 left-4 right-4">
            <span className="block bg-[#009EA9]/90 text-white text-sm md:text-base font-semibold tracking-wide text-center py-2 text-shadow shadow-md">
              {caption}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

/* --- Page component --- */
export default function NewJersey() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Lottie = React.lazy(() => import("lottie-react"));
  const [selectedLoc, setSelectedLoc] = useState(null);

  const [tab, setTab] = useState(1);

  const handleClick = (id) => {
    setTab((prevTab) => (prevTab === id ? 0 : id));
  };

  const handleRotate = (id) => (tab === id ? "rotate-180" : "");
  const handleToggle = (id) =>
    `transition-max-height ${tab === id ? "open" : ""}`;

  const faqItems = [
    {
      id: 1,
      question: "What services does Cottage Homecare NJ, LLC provide?",
      answer:
        "We offer a wide range of homecare services, including personal care, companion care, respite care, medication reminders, light housekeeping, and customized care plans tailored to each client’s needs.",
    },
    {
      id: 2,
      question: "How do I know if homecare is right for my loved one?",
      answer:
        "Homecare is perfect for individuals who want to remain in the comfort of their own home but need help with daily activities such as bathing, dressing, mobility, meal preparation, or companionship.",
    },
    {
      id: 3,
      question: "Are your caregivers trained and certified?",
      answer:
        "Yes. Every caregiver goes through a thorough background check, professional training, and certification to ensure they provide safe, reliable, and compassionate care.",
    },
    {
      id: 4,
      question: "Do you create personalized care plans?",
      answer:
        "Absolutely. We collaborate with each family to create a personalized care plan that reflects your loved one’s health needs, preferences, and schedule.",
    },
    {
      id: 5,
      question: "Can I choose the caregiver for my loved one?",
      answer:
        "Yes. We carefully match caregivers to clients based on skills, experience, and personality. Families also have the flexibility to request a caregiver change if needed.",
    },
    {
      id: 6,
      question: "Is Cottage Homecare NJ, LLC available 24/7?",
      answer:
        "Yes. We offer flexible scheduling with caregivers available days, nights, weekends, and holidays to ensure your loved one always has the support they need.",
    },
    {
      id: 7,
      question: "Do you accept private pay or insurance?",
      answer:
        "We offer private pay services and can also guide families through long-term care insurance options. Our team provides clear, upfront information about all payment methods.",
    },
    {
      id: 8,
      question: "How quickly can services begin?",
      answer:
        "In most cases, we can start services within 24–48 hours of your consultation, so care is available without long delays.",
    },
    {
      id: 9,
      question: "What areas do you serve in New Jersey?",
      answer:
        "Cottage Homecare NJ, LLC proudly serves families throughout NJ service areas – Jersey City, Bayonne, Union, Newark, Fairfield, East Orange, Linden",
    },
    {
      id: 10,
      question: "How do I get started with Cottage Homecare NJ, LLC?",
      answer:
        "Getting started is simple! Call us to schedule your free in-home consultation. Together, we’ll create a customized care plan that best supports your loved one.",
    },
  ];

  const title = "Top Homecare Services in New Jersey – Quality Care at Home";
  const description =
    "Discover reliable homecare services in New Jersey. Our expert caregivers provide personalized care for your loved ones, ensuring comfort and safety at home";
  const keywords =
    "home care agency in new jersey, new jersey home care jobs, senior home care in new jersey, home care agencies in new jersey, homecare agencies in nj, new jersey home care agencies, home care agencies in new jersey, new jersey home health, best home care agency nj, best home care agency jersey city, nj";

  // ✅ JSON-LD Schema Data
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
          name: "Service Area",
          item: "https://cottagehomecare.com/service-areas/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "NHTD",
          item: "https://cottagehomecare.com/new-jersey/",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Top Homecare Services in New Jersey – Quality Care at Home",
      url: "https://cottagehomecare.com/new-jersey/",
      description:
        "Discover reliable homecare services in New Jersey. Our expert caregivers provide personalized care for your loved ones, ensuring comfort and safety at home",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/di3wwp9s0/image/upload/v1757013616/state_images/her_banner_rqcnvc.webp",
        width: "2580",
        height: "795",
      },
      datePublished: "2025-09-10",
      dateModified: "2025-09-10",
      author: {
        "@type": "Organization",
        name: "Cottage Homecare NJ, LLC",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Cottage Homecare NJ, LLC provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer a wide range of homecare services, including personal care, companion care, respite care, medication reminders, light housekeeping, and customized care plans tailored to each client’s needs.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if homecare is right for my loved one?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Homecare is perfect for individuals who want to remain in the comfort of their own home but need help with daily activities such as bathing, dressing, mobility, meal preparation, or companionship.",
          },
        },
        {
          "@type": "Question",
          name: "Are your caregivers trained and certified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every caregiver goes through a thorough background check, professional training, and certification to ensure they provide safe, reliable, and compassionate care.",
          },
        },
        {
          "@type": "Question",
          name: "Do you create personalized care plans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We collaborate with each family to create a personalized care plan that reflects your loved one’s health needs, preferences, and schedule.",
          },
        },
        {
          "@type": "Question",
          name: "Can I choose the caregiver for my loved one?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We carefully match caregivers to clients based on skills, experience, and personality. Families also have the flexibility to request a caregiver change if needed.",
          },
        },
        {
          "@type": "Question",
          name: "Is Cottage Homecare NJ, LLC available 24/7?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer flexible scheduling with caregivers available days, nights, weekends, and holidays to ensure your loved one always has the support they need.",
          },
        },
        {
          "@type": "Question",
          name: "Do you accept private pay or insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer private pay services and can also guide families through long-term care insurance options. Our team provides clear, upfront information about all payment methods.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can services begin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In most cases, we can start services within 24–48 hours of your consultation, so care is available without long delays.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you serve in New Jersey?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cottage Homecare NJ, LLC proudly serves families throughout NJ service areas – Jersey City, Bayonne, Union, Newark, Fairfield, East Orange, Linden.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started with Cottage Homecare NJ, LLC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Getting started is simple! Call us to schedule your free in-home consultation. Together, we’ll create a customized care plan that best supports your loved one.",
          },
        },
      ],
    },
  ];
  const imageSrc =
    "https://res.cloudinary.com/di3wwp9s0/image/upload/v1757013616/state_images/her_banner_rqcnvc.webp";
  return (
    <section>
      <Head>
        {/* ✅ Basic SEO Meta Tags */}
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Cottage Home Care Services" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph Meta Tags (Facebook & LinkedIn) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Cottage Home Care Services" />
        <meta
          property="og:url"
          content="https://res.cloudinary.com/di3wwp9s0/image/upload/v1757080745/nj_private_pay_ucvx5z.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/di3wwp9s0/image/upload/v1757080745/nj_private_pay_ucvx5z.jpg"
        />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cottagecareny" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/hero.webp"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/new-jersey/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/new-jersey/"
          hreflang="x-default"
        />

        <link rel="canonical" href="https://cottagehomecare.com/new-jersey/" />

        {/* ✅ Preloading Images for Faster Load Times */}
        {imageSrc && (
          <link rel="preload" href={imageSrc} as="image" fetchPriority="high" />
        )}
        {/* ✅ Structured Data (Schema.org JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <div className="relative bg-white min-h-[68vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1757013616/state_images/her_banner_rqcnvc.webp"
            alt="Caregiver with patient"
            width={1920}
            height={1097}
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content */}
        <div className="relative  max-w-4xl mx-auto px-6 lg:pb-20 pb-5 flex items-end justify-between min-h-[68vh]">
          <div className="max-w-xl bg-black/70 rounded-2xl shadow-lg p-3 lg:p-6 mx-auto text-center">
            <h1 className="text-lg lg:text-2xl font-bold text-gray-100 lg:mb-4 league-spartan">
              BEST PRIVATE PAY HOME CARE IN <br /> NEW JERSEY
            </h1>
            <p className="lg:text-lg text-gray-100 font-medium">
              Compassionate home support — choose your caregiver with Medicaid
              or Private Pay.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative  bg-[#00A6B2] py-10 text-center text-white font-semibold xl:text-2xl text-xl league-spartan">
          Residents of NY, NJ, MD
          <br />
          <span className="text-sm font-normal lg:text-xl">
            Your #1 Choice for Home Care
          </span>
        </div>
      </div>
      <section className="bg-[#F5F5F7] dark:bg-slate-700 py-16">
        <h2
          className="text-xl md:text-3xl font-extrabold text-gray-600 dark:text-gray-100 mb-8 text-center league-spartan"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Cottage Homecare NJ, Makes Private Pay Care Simple: Following Steps
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <Image
              src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1757080745/nj_private_pay_ucvx5z.jpg"
              alt="Private Pay Services"
              className=""
              width={600}
              height={400}
              property
            />
          </div>

          {/* Right Side: Steps */}
          <div data-aos="fade-left" data-aos-duration="3000">
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-200">
              <div>
                <h3 className="font-bold text-xl text-gray-700 dark:text-gray-100">
                  1. Select the Services You Need
                </h3>
                <p>
                  Choose from hourly support, live-in care, skilled nursing
                  visits, or companionship services tailored to your needs.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-700 dark:text-gray-100">
                  2. Create a Custom Plan
                </h3>
                <p>
                  We’ll help you design a personalized schedule and care plan
                  that fits your lifestyle, preferences, and budget.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-700 dark:text-gray-100">
                  3. Receive Care with Peace of Mind
                </h3>
                <p>
                  Enjoy professional, reliable care with flexible payment
                  options, giving your family peace of mind.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="my-6 font-[Roboto] flex  items-center gap-8 md:gap-0 md:space-y-0 md:space-x-7 flex-wrap">
              <a
                href="tel:+1(201) 633-8481"
                className="flex items-center px-6 py-3 md:px-5 md:py-3 border border-[#00a6b2] dark:border-[#3A4256]  rounded-full text-white hover:bg-[#00a6b2] duration-500 bg-hov2 league-spartan overflow-hidden xl:text-lg bg-[#00A6B2]"
                aria-label="Call us at (516) 367-2266"
              >
                {/* <FaPhone className="mr-2 " /> */}
                <span ref={ref} className="h-[17px] ">
                  {inView && (
                    <Suspense fallback={<IconLoading />}>
                      <Lottie
                        animationData={callReader}
                        loop={true}
                        className="h-[32px] w-[32px] mr-4 xl:mr-5  "
                        style={{
                          width: "110%",
                          height: "110%",
                          transform: "scale(1.6)",
                          marginTop: "-4px",
                        }}
                      />
                    </Suspense>
                  )}
                </span>
                Call: (201) 633-8481
              </a>
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.documentElement.style.scrollBehavior = "smooth";
                  const targetElement = document.getElementById("contact-form");
                  const navbarHeight = 120;
                  if (targetElement) {
                    const offsetTop = targetElement.offsetTop - navbarHeight;
                    window.scrollTo({
                      top: offsetTop,
                    });
                  }
                }}
                className="flex gap-1 -mt-1 px-6 py-3 md:px-8 md:py-3 border border-[#3A4256] rounded-full text-white bg-[#3A4256] dark:bg-[#838896] duration-500 bg-hov2 league-spartan xl:text-lg cursor-pointer"
              >
                Schedule a Call <FaRegCalendar />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: custom-thumb YouTube section (remove if not needed) */}

      <section className="pt-12 ">
        <h3
          className="text-2xl md:text-3xl font-bold text-gray-600 leading-snug dark:text-gray-100 league-spartan w-[95%] lg:w-[80%] 2xl:w-[65%] mx-auto text-center"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Over{" "}
          <span className="text-[#00A6B2] dark:text-gray-100">
            10,000 Customers
          </span>{" "}
          have joined the{" "}
          <span className="text-[#00A6B2] dark:text-gray-100">
            Cottage Homecare
          </span>{" "}
          family where a family or friend gets{" "}
          <span className="font-extrabold">paid to care</span> for their loved
          ones in need.
        </h3>

        <div className="lg:max-w-7xl 2xl:max-w-[1400px] mx-auto px-6  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 ">
          {/* Right Side: Empty Column */}
          <div
            className="mx-auto"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h3 className="text-2xl font-bold text-[#00A6B2] dark:text-gray-100 mb-3">
              Private Pay Services Include
            </h3>
            <ul className="space-y-4 text-lg font-medium text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2">
                {" "}
                <span className="w-7 h-7 rounded-full bg-[#00A6B2] flex justify-center items-center p-1 ">
                  {" "}
                  <LuHeart className="text-white" />{" "}
                </span>
                Medication Reminders
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="w-7 h-7 rounded-full bg-[#00A6B2] flex justify-center items-center p-1 ">
                  {" "}
                  <LuHeart className="text-white" />{" "}
                </span>
                Light Housekeeping & Laundry
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="w-7 h-7 rounded-full bg-[#00A6B2] flex justify-center items-center p-1 ">
                  {" "}
                  <LuHeart className="text-white" />{" "}
                </span>
                Personal Care (Bathing, grooming, toileting)
              </li>
            </ul>
            <div className=" my-6">
              <h3 className="text-2xl font-bold text-[#00A6B2] dark:text-gray-100">
                Why Families Trust Us
              </h3>
              <ul className=" space-y-3 text-lg font-semibold text-gray-800 dark:text-gray-100 mt-3">
                <ul className="space-y-4 text-lg font-semibold text-gray-800 dark:text-gray-100 mt-3">
                  <li className="flex items-center gap-3">
                    <FaHospital className="text-[#00A6B2] w-6 h-6" />
                    21% Lower Hospitalization Rate
                  </li>
                  <li className="flex items-center gap-3">
                    <FaSmile className="text-[#00A6B2] w-6 h-6" />
                    99% Customer Satisfaction
                  </li>
                  <li className="flex items-center gap-3">
                    <FaAward className="text-[#00A6B2] w-6 h-6" />
                    7,000+ 5-star reviews
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          {/* Left Side: Text + Video */}

          <div className="" data-aos="fade-left" data-aos-duration="3000">
            <VideoWithCustomThumb
              videoId="7uoXudV9uas"
              caption="YOU CHOOSE WHO PROVIDES YOUR HOME CARE"
            />
          </div>
        </div>
      </section>

      <div className="-mt-10">
        <ReviewsSection />
      </div>

      {/* map location  */}
      <div className="flex flex-col text-[16px] leading-relaxed font-sans font-normal lg:w-[80%] mx-auto mb-10 w-[95%]">
        <p className="pt-3 playrify text-xl lg:text-4xl font-semibold dark:text-gray-100 mb-3 league-spartan text-[#00A6B2] text-center">
          Frequently Asked Questions
        </p>
        {faqItems?.map((item) => (
          <div key={item.id} className={` rounded-md dark:bg-slate-400 my-2  `}>
            <div
              onClick={() => handleClick(item.id)}
              className={`w-full shadow-md focus:outline-none rounded-md ${
                tab === item.id
                  ? "text-white bg-[#00A6B2] dark:text-gray-100"
                  : "text-[#00A6B2] dark:text-[#00A6B2] bg-[#F6F6F6]"
              } `}
            >
              <div className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer mother-box  text-start md:text-center">
                <h4 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
                  <span className="flex md:text-lg items-center gap-2 font-medium">
                    {item.question}
                  </span>
                </h4>
                <span>
                  <svg
                    className={` ${
                      tab === item.id
                        ? "text-white  "
                        : "text-[#00A6B2] dark:text-[#00A6B2]"
                    } fill-current  h-6 w-6 transform transition-transform duration-100 ${handleRotate(
                      item.id
                    )}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div
              id={`faq-answer-${item.id}`} // ✅ Links answer to the button
              className={`transition-all duration-500 ease-in-out ${
                tab === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
              aria-hidden={tab !== item.id} // ✅ Helps screen readers know if it's hidden
            >
              {item.answer && (
                <h5 className="p-3 text-gray-900 dark:text-gray-100">
                  {item.answer}
                </h5>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
        <div className="lg:col-span-4 ">
          <NJMapClient
            locations={LOCATIONS}
            selected={selectedLoc} // <- drives flyTo
            heightClass="h-[520px]"
            pinColor="#1c3461"
            halo="rgba(160, 32, 240, 0.3)"
          />
        </div>

        <div className="col-span-2 order-first sm:order-none">
          <LocationsList
            items={LOCATIONS}
            active={selectedLoc}
            onPick={(loc) => {
              setSelectedLoc(loc);
              document
                .querySelector(".col-span-4")
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          />
        </div>
      </div>

      {/* map location end */}

      {/* faq section start  */}

      {/* faq section end  */}

      {/* contact section start  */}
      <EasierLife />

      {/* contact section end  */}
    </section>
  );
}
