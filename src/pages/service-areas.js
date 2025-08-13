import Head from "next/head";

import callReader from "../../src/assets/social-media-lottie/call.json";

import { Suspense } from "react";
import IconLoading from "@/components/shared/IconLoading";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// components/HeroSection.jsx
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

  return (
    <>
      <Head></Head>

      <section className="min-h-screen">
        <div className="relative isolate overflow-hidden bg-slate-900 h-[85vh] flex items-center">
          <div aria-hidden className="absolute inset-0">
            <img
              src={
                "https://res.cloudinary.com/di3wwp9s0/image/upload/v1755092457/Services/services_area.webp"
              }
              alt=""
              className="h-full w-full object-cover "
            />
            <div className="absolute inset-0 bg-slate-900/65" />
          </div>

          {/* Content */}
          <div className="relative ml-[45%] max-w-2xl  py-6 text-center text-white bg-simple px-10  -mt-20">
            <p className="mb-5 text-xs sm:text-base font-semibold tracking-[0.2em] uppercase text-white/80">
              {kicker}
            </p>
            <h1 className="text-4xl sm:text-xl lg:text-2xl font-extrabold leading-loose drop-shadow-sm open-sans tracking-wider">
              {heading}
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* <a
                href={callHref}
                className="inline-flex items-center rounded-full bg-[#00A6B2] px-6 py-3 text-base font-semibold text-white shadow-lg ring-1 ring-white/10 hover:bg-indigo-500 transition"
              >
                <span className="mr-2"></span> Call: (516) 367-2266
              </a> */}

              <a
                href="tel:+1516-367-2266"
                className="flex items-center px-6 py-3 md:px-5 md:py-4 border border-[#00a6b2] dark:border-[#3A4256] dark:bg-[#3A4256] rounded-full text-white hover:bg-[#00a6b2] duration-500 bg-hov2 league-spartan overflow-hidden xl:text-lg bg-[#00A6B2]"
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
            </div>
          </div>

          {/* Layered curved bottom (centered bowl) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0">
            {/* back band */}
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

            {/* middle band */}
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

            {/* front band */}
            <svg
              className="relative left-0 w-full text-white"
              viewBox="0 0 1440 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M0,180 Q720,390 1440,180 L1480,360 H0 Z"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
