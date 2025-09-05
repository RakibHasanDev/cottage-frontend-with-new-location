"use client";
import React, { Suspense, useState } from "react";
import { FaAward, FaHospital, FaSmile } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import callReader from "../../src/assets/social-media-lottie/call.json";
import { FaRegCalendar } from "react-icons/fa";
import IconLoading from "@/components/shared/IconLoading";
import { useInView } from "react-intersection-observer";
import ReviewsSection from "@/components/ServiceArea/ReviewSection";
import MapComponent from "@/components/home/MapComponent";
import { MapContainer } from "react-leaflet";

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
          <img
            src={thumb}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
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
  return (
    <section>
      <div className="relative bg-white min-h-[68vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1757013616/state_images/her_banner_rqcnvc.webp"
            alt="Caregiver with patient"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20 lg:flex lg:items-end lg:justify-between min-h-[68vh]">
          <div className="max-w-xl bg-black/70 rounded-2xl shadow-lg p-6 mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">
              BEST PRIVATE PAY HOME CARE IN <br /> NEW JERSEY
            </h2>
            <p className="text-lg text-gray-100 font-medium">
              Compassionate home support — choose your caregiver with Medicaid
              or Private Pay.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 bg-[#00A6B2] py-10 text-center text-white font-semibold xl:text-2xl text-xl">
          Residents of NY, NJ, MD
          <br />
          <span className="text-sm font-normal lg:text-xl">
            Your #1 Choice for Home Care
          </span>
        </div>
      </div>
      <section className="bg-[#F5F5F7] dark:bg-slate-700 py-16">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-600 dark:text-gray-100 mb-8 text-center league-spartan">
          Cottage Homecare NJ, Makes Private Pay Care Simple with the Following
          Steps
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1757080745/nj_private_pay_ucvx5z.jpg"
              alt="Private Pay Services"
              className=""
              width={600}
              height={400}
            />
          </div>

          {/* Right Side: Steps */}
          <div>
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
                className="flex items-center px-6 py-3 md:px-5 md:py-3 border border-[#00a6b2] dark:border-[#3A4256] dark:bg-[#3A4256] rounded-full text-white hover:bg-[#00a6b2] duration-500 bg-hov2 league-spartan overflow-hidden xl:text-lg bg-[#00A6B2]"
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
                className="flex gap-1 -mt-1 px-6 py-3 md:px-8 md:py-3 border border-[#3A4256] rounded-full text-white bg-[#3A4256] duration-500 bg-hov2 league-spartan xl:text-lg cursor-pointer"
              >
                Schedule a Call <FaRegCalendar />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: custom-thumb YouTube section (remove if not needed) */}

      <section className="pt-12 ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-600 leading-snug dark:text-gray-100 league-spartan w-[95%] lg:w-[80%] 2xl:w-[65%] mx-auto text-center">
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
        </h2>

        <div className="lg:max-w-7xl 2xl:max-w-[1400px] mx-auto px-6  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 ">
          {/* Right Side: Empty Column */}
          <div className="mx-auto">
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
          <div>
            <div className="">
              <VideoWithCustomThumb
                videoId="7uoXudV9uas"
                caption="YOU CHOOSE WHO PROVIDES YOUR HOME CARE"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="-mt-10">
        <ReviewsSection />
      </div>
      <MapContainer />
    </section>
  );
}
