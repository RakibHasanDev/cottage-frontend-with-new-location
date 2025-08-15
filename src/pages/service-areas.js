import Head from "next/head";
import callReader from "../../src/assets/social-media-lottie/call.json";
import { Suspense, useEffect, useRef, useState } from "react";
import IconLoading from "@/components/shared/IconLoading";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import ReviewsSection from "@/components/ServiceArea/ReviewSection";
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
            <h1 className="text-base lg:text-2xl font-extrabold leading-loose drop-shadow-sm open-sans tracking-wider">
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
      </section>
    </>
  );
}
