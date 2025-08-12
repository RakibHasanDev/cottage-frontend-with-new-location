import Head from "next/head";

// components/HeroSection.jsx
export default function HeroSection({
  bg = "/assets/your-cover.jpg",
  kicker = "Senior Home Care Agency in NY, NJ, MA, and CT",
  title,
  callHref = "tel:+15163672266",
  scheduleHref = "#schedule",
}) {
  const heading = title ?? (
    <>
      We Serve All of New York, New Jersey,
      <br className="hidden sm:block" /> Massachusetts, and Connecticut
    </>
  );

  return (
    <>
      <Head></Head>

      <section className="min-h-screen">
        <div className="relative isolate overflow-hidden bg-slate-900 h-[85vh] flex items-center">
          <div aria-hidden className="absolute inset-0">
            <img
              src={
                "https://res.cloudinary.com/di3wwp9s0/image/upload/v1755031996/new-image-services_mm0wu8.webp"
              }
              alt=""
              className="h-full w-full object-cover "
            />
            <div className="absolute inset-0 bg-slate-900/65" />
          </div>

          {/* Content */}
          <div className="relative mx-auto max-w-6xl  py-6 text-center text-white bg-simple px-10 mt-44">
            <p className="mb-5 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
              {kicker}
            </p>
            <h1 className="text-4xl sm:text-xl lg:text-3xl font-extrabold leading-tight drop-shadow-sm">
              {heading}
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={callHref}
                className="inline-flex items-center rounded-full bg-[#00A6B2] px-6 py-3 text-base font-semibold text-white shadow-lg ring-1 ring-white/10 hover:bg-indigo-500 transition"
              >
                <span className="mr-2">📞</span> Call: (516) 367-2266
              </a>
              <a
                href={scheduleHref}
                className="inline-flex items-center rounded-full bg-amber-300 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg hover:bg-amber-200 transition"
              >
                Schedule a Call <span className="ml-2">📅</span>
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
