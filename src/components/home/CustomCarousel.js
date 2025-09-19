import Image from "next/image";

// Simple, fast hero. Keep the same prop for your modal trigger.
const HERO_SRC =
  "https://res.cloudinary.com/di3wwp9s0/image/upload/v1758131541/main_banner/Cottage-Home-Care.webp";

export default function CustomCarousel({ onRequestCare = () => {} }) {
  return (
    <section className="relative isolate overflow-hidden h-[80vh] sm:h-[80vh] md:h-[56vh] lg:h-[81vh]">
      <Image
        src={HERO_SRC}
        alt="Cottage Home Care Services"
        fill
        priority
        fetchPriority="high"
        sizes="100vw" // critical for the right srcset pick
        placeholder="blur"
        blurDataURL="/hero-blur.jpg" // ~1–2KB tiny blur (put in /public)
        decoding="async"
        className="object-cover"
        style={{ objectPosition: "center 35%" }}
      />
      {/* Optional dark scrim for text readability */}
      <div
        className="absolute inset-0 bg-black/10 md:bg-black/10"
        aria-hidden="true"
      />

      {/* Wave (unchanged) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="pointer-events-none h-[100px] z-50 hidden lg:block -mb-1"
      >
        <path
          d="M0,224C480,400,960,150,1440,256L1440,320L0,320Z"
          className="fill-white dark:fill-slate-600"
        />
      </svg>

      {/* Your copy & CTAs (kept as-is) */}
      <div
        className="absolute z-20 bottom-0 w-full 2xl:bottom-[20px] lg:bottom-[20px]"
        id="main-banner-text"
      >
        <div className="mx-auto">
          <div
            className="rounded-md bg-contact-2 md:max-w-3xl lg:max-w-3xl mx-auto"
            id="lower-medium-device"
          >
            <div className="bg-simple px-5 pt-4 pb-8">
              <p className="text-white text-sm md:text-base text-center font-medium text-shadow open-sans">
                Cottage Home Care Services provides care to seniors in need and
                has taken on some of the most challenging cases in New York.
              </p>
              <p className="w-[18px] h-[2px] bg-gray-300 rounded-md mx-auto my-2.5"></p>
              <p className="text-center md:text-xl text-[15px] font-medium md:font-semibold text-[#dbf2f4] mb-5 px-5 md:px-0 mt-2 open-sans custom-font text-shadow">
                HHA/PCA, NHTD & PRIVATE PAY SERVICES THROUGHOUT NEW YORK CITY,
                NASSAU & SUFFOLK COUNTY, WESTCHESTER & ALBANY.
              </p>
              <div className="flex justify-center items-center text-white font-semibold gap-3">
                <a
                  href="tel:+1516-367-2266"
                  className="md:px-8 md:py-3 px-5 py-2 rounded-full text-base bg-[#005f6b] uppercase bg-hov2 coco-gothic"
                >
                  Contact Us
                </a>
                <button
                  onClick={onRequestCare}
                  className="md:px-8 md:py-3 px-5 py-2 rounded-full text-base bg-[#687699] uppercase bg-hov2 coco-gothic"
                >
                  Request CARE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
