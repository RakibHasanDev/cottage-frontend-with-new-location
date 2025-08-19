import Head from "next/head";
import callReader from "../../src/assets/social-media-lottie/call.json";
import React, { Suspense, useEffect, useRef, useState } from "react";
import IconLoading from "@/components/shared/IconLoading";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import ReviewsSection from "@/components/ServiceArea/ReviewSection";
import { FaRegCalendar } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import EasierLife from "@/components/home/EasierLife";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// --- inline collapsible (–/+ with smooth height) ---
function Collapsible({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    if (open) {
      const height = ref.current.scrollHeight;
      setH(height);
      const t = setTimeout(() => setH("auto"), 300);
      return () => clearTimeout(t);
    } else {
      const height = ref.current.scrollHeight;
      setH(height);
      requestAnimationFrame(() => setH(0));
    }
  }, [open]);

  return (
    <div className="rounded-xl border bg-white shadow-sm">
      {/* caption bar (click target) */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-5 py-3 text-left bg-gray-100 rounded-xl"
      >
        <span className="font-medium lg:text-xl">{title}</span>
        <span className="grid h-8 w-8 place-items-center rounded-full border text-gray-600 text-xl">
          {open ? "–" : "+"}
        </span>
      </button>

      {/* sliding panel */}
      <div
        style={{ height: h === "auto" ? "auto" : `${h}px` }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div ref={ref} className="px-5 pb-4 pt-3">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({
  bg = "/assets/your-cover.jpg",
  kicker = "Senior Home Care Agency in NY, NJ, MD, and CT",
  title,
  callHref = "tel:+15163672266",
  scheduleHref = "#schedule",
}) {
  const heading = title ?? (
    <>
      We Serve All of New York, New Jersey,
      <br className="hidden sm:block" /> Maryland, and Connecticut
    </>
  );

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // ✅ fetch JSON from /public
  const [locations, setLocations] = useState([]);
  const [loadErr, setLoadErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/locations.json", {
          cache: "no-cache",
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setLocations(data);
      } catch (e) {
        setLoadErr("Failed to load locations.json");
        console.error(e);
      }
    })();
  }, []);

  const leftColumn = [
    <>
      Expert support to maximize your <strong>LTC insurance benefits</strong>
    </>,
    <>
      Flexible, <strong>personalized care plans</strong> that adapt as your
      needs change
    </>,
    <>
      A <strong>registered nurse</strong> always available for guidance
    </>,
    <>
      <strong>24/7 care</strong>, including specialized support for{" "}
      <strong>dementia and Alzheimer’s</strong>
    </>,
    <>
      Customized <strong>scheduling</strong> tailored to your lifestyle and
      needs
    </>,
  ];

  const rightColumn = [
    <>
      Rigorous <strong>caregiver screening</strong> to ensure only the best
      professionals
    </>,
    <>
      <strong>Wellness checks</strong> by care managers{" "}
      <em>monthly or twice a month</em>
    </>,
    <>
      <strong>Licensed, bonded, and insured</strong> for your peace of mind
    </>,
    <>
      Options available for <strong>private pay home care</strong>
    </>,
    <>
      <strong>24/7 customer support</strong> to assist you anytime
    </>,
  ];

  return (
    <>
      <Head></Head>

      <section className="min-h-screen dark:bg-slate-600">
        {/* Hero section start */}
        <div className="relative isolate overflow-hidden bg-slate-900 h-[85vh] flex items-center">
          <div aria-hidden className="absolute inset-0">
            <img
              src={
                "https://res.cloudinary.com/di3wwp9s0/image/upload/v1755099213/Services/new-one_uo6nez.webp"
              }
              alt=""
              className="h-[72vh] w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/65" />
          </div>

          {/* Content */}
          <div className="relative lg:ml-[55%] max-w-2xl py-6 text-center text-white bg-simple px-10 lg:-mt-28 mt-20 ">
            <p className="mb-5 text-xs sm:text-base font-semibold tracking-[0.2em] uppercase text-white/80">
              {kicker}
            </p>
            <h1 className="text-base lg:text-2xl font-extrabold leading-loose drop-shadow-sm  tracking-wider league-spartan">
              {heading}
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+1516-367-2266"
                className="flex items-center px-5 py-2 md:px-4 md:py-3 border border-[#00a6b2] rounded-full text-white hover:bg-[#00a6b2] duration-500 xl:text-lg bg-[#00A6B2]"
                aria-label="Call us at (516) 367-2266"
              >
                <span ref={ref} className="h-[17px] ">
                  {inView && (
                    <Suspense fallback={<IconLoading />}>
                      <Lottie
                        animationData={callReader}
                        loop
                        className="h-[32px] w-[32px] mr-4 xl:mr-5"
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
                Call: (516) 367-2266
              </a>
            </div>
          </div>

          {/* Layered curved bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 ">
            <svg
              className="absolute bottom-6 left-0 w-full text-white/25"
              viewBox="0 0 1440 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M0,150 Q720,370 1440,150 L1440,360 H0 Z"
              />
            </svg>
            <svg
              className="absolute bottom-3 left-0 w-full text-white/45"
              viewBox="0 0 1440 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                fill="#D1D5DC"
                d="M0,165 Q720,375 1440,165 L1440,360 H0 Z"
              />
            </svg>
            <svg
              className="relative left-0 w-full fill-white dark:fill-slate-600"
              viewBox="0 0 1440 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0,180 Q720,390 1440,180 L1480,360 H0 Z" />
            </svg>
          </div>
        </div>

        {/* Body */}
        <div className="w-[95%] lg:w-[80%] mx-auto ">
          <h2 className="text-center text-lg lg:text-4xl font-semibold league-spartan text-gray-700 w-[80%] mx-auto leading-loose dark:text-gray-100">
            Cottage Home Care Services is proud to announce that we provide home
            care for elderly services for the NY, NJ, MD & CT, including:
          </h2>

          {/* mapped from /public/assets/locations.json */}
          <div className="mx-auto mt-8  space-y-4">
            {loadErr && (
              <p className="text-center text-sm text-red-600">{loadErr}</p>
            )}

            {/* CARD GRID — 600x380 image ratio, 2 cols on lg */}
            <div className="mx-auto mt-10 max-w-6xl grid gap-10 md:grid-cols-2 lg:grid-cols-2 my-6">
              {locations.map((loc) => (
                <div
                  key={loc.slug}
                  className="space-y-3"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  {/* image: 600x380 ratio (30/19) */}
                  <div className="relative overflow-hidden rounded-xl border aspect-[30/19]">
                    <img
                      src={loc.img}
                      alt={loc.title}
                      loading="lazy"
                      width={600}
                      height={380}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  {/* caption bar + minus; areas slide open below */}
                  <Collapsible title={loc.title} defaultOpen={false}>
                    <ul className="flex flex-wrap gap-2">
                      {loc.serviceAreas?.map((a) => (
                        <li
                          key={`${loc.slug}-${a}`}
                          className="rounded-full border px-3 py-1 text-sm bg-white"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                  </Collapsible>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ReviewsSection />

        {/* why chose section  start */}

        <div
          className="min-h-[60vh] py-10"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/di3wwp9s0/image/upload/v1755525578/Services/BG-SquareRight2_nurcvw.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
          }}
        >
          <h1 className="text-center league-spartan text-gray-700 text-xl lg:text-4xl font-semibold dark:text-gray-100 mb-10">
            Why Choose Cottage Home Care in NY, NJ, MD & CT?
          </h1>

          <div className="w-[95%] lg:w-[80%] 2xl:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mt-5">
            {/* Left Column */}
            <ul className="space-y-4 lg:space-y-5 text-gray-500 dark:text-gray-200">
              {leftColumn.map((item, idx) => {
                return (
                  <li key={idx} className="flex items-start lg:text-xl">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#03939daf] text-white flex items-center justify-center mr-2 text-sm font-bold">
                      ✓
                    </span>

                    {/* logic to insert space if <strong> or <em> */}
                    <span className="inline">
                      {React.Children.map(item, (child, i) => {
                        if (
                          typeof child === "object" &&
                          (child.type === "strong" || child.type === "em")
                        ) {
                          return <>{child} </>;
                        }
                        return child;
                      })}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Right Column */}
            <ul className="space-y-4 lg:space-y-5 text-gray-500 dark:text-gray-200">
              {rightColumn.map((item, idx) => {
                return (
                  <li key={idx} className="flex items-start lg:text-xl">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#03939daf] text-white flex items-center justify-center mr-2 text-sm font-bold">
                      ✓
                    </span>

                    {/* logic to insert space if <strong> or <em> */}
                    <span className="inline">
                      {React.Children.map(item, (child, i) => {
                        if (
                          typeof child === "object" &&
                          (child.type === "strong" || child.type === "em")
                        ) {
                          return <>{child} </>;
                        }
                        return child;
                      })}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className="pt-5 pb-5 md:pb-[120px] font-[Roboto] flex justify-center items-center gap-8 md:gap-0 md:space-y-0 md:space-x-7 flex-wrap mt-10">
              <a
                href="tel:+1516-367-2266"
                className="flex items-center px-6 py-3 md:px-5 md:py-4 border border-[#00a6b2] dark:border-[#3A4256] dark:bg-[#3A4256] rounded-full text-white hover:bg-[#00a6b2] duration-500 bg-hov2 league-spartan overflow-hidden xl:text-xl bg-[#00A6B2]"
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
                Call: (516) 367-2266
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
                className="flex gap-1 -mt-1 px-6 py-3 md:px-8 md:py-4 border border-[#3A4256] rounded-full text-white bg-[#3A4256] duration-500 bg-hov2 league-spartan xl:text-xl cursor-pointer"
              >
                Schedule a Call <FaRegCalendar />
              </a>
            </div>
          </div>
        </div>

        {/* why chose section end */}

        {/* another section start  */}
        <div
          className="min-h-[60vh] pb-16 lg:w-[80%] mx-auto "
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/di3wwp9s0/image/upload/v1755525578/Services/BG-SquareRight2_nurcvw.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        >
          <div className="relative z-10 lg:w-[85%] w-[95%] mx-auto">
            <h2
              className="text-center text-2xl lg:text-3xl font-bold  mb-12 league-spartan text-gray-600 dark:text-gray-100 w-[70%] mx-auto "
              style={{ lineHeight: "1.5" }}
            >
              3 Simple Steps to a Flourishing, Fulfilling Life at Home with a
              Loving Caregiver Near You
            </h2>

            <div className="grid md:grid-cols-3 gap-10 text-center ">
              {/* Step 1 */}
              <div className="space-y-3">
                <div className="flex justify-center">
                  <img
                    src="/assets/icons/call.webp"
                    alt="Call us"
                    className="h-12 w-12 lg:h-16 lg:w-16"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#00A6B2] dark:text-gray-100">
                  1. Call (516) 367-2266
                </h3>
                <p className="text-gray-600 lg:text-lg dark:text-gray-100">
                  Reach out to us to discuss your needs and concerns.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-3 border-l-2 border-r-2 border-dotted  border-gray-400 px-6">
                <div className="flex justify-center">
                  <img
                    src="/assets/icons/schedule.webp"
                    alt="Schedule assessment"
                    className="h-12 w-12 lg:h-16 lg:w-16"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#00A6B2] dark:text-gray-100">
                  2. Schedule a Home Care Assessment
                </h3>
                <p className="text-gray-600 lg:text-lg dark:text-gray-100">
                  Book a free, no-obligation in-home care assessment with our
                  team.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <div className="flex justify-center">
                  <img
                    src="/assets/icons/match.webp"
                    alt="Get matched"
                    className="h-12 w-12 lg:h-16 lg:w-16"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#00A6B2] dark:text-gray-100">
                  3. Get Matched to a Caregiver
                </h3>
                <p className="text-gray-600 lg:text-lg dark:text-gray-100">
                  Get matched with the perfect caregiver to{" "}
                  <span className="font-semibold">meet your needs.</span>
                </p>
              </div>
            </div>

            {/* Down arrow icon */}
            <div className="flex justify-center mt-10">
              <IoIosArrowDropdown
                size={42}
                className="text-gray-600 animate-float"
              />
            </div>
          </div>
        </div>

        {/* contact section start  */}

        <EasierLife />
      </section>
    </>
  );
}
