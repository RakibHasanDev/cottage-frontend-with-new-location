import React, { Suspense, useState } from "react";
import callReader from "../../../src/assets/social-media-lottie/call.json";
import { FaPlayCircle, FaRegCalendar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import ModalBody from "../shared/ModalBody";
import IconLoading from "../shared/IconLoading";

const optimizedImage = (url, width = 1080) =>
  url.replace("/upload/", `/upload/f_auto,q_auto,dpr_auto,w_${width}/`);

const OverwHelmed = () => {
  const [showModal, setShowModal] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Lottie = React.lazy(() => import("lottie-react"));

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const youtubeUrl =
    "https://www.youtube.com/embed/7uoXudV9uas?rel=0&autoplay=1&clipboard-write=1&encrypted-media=1&gyroscope=1&picture-in-picture=1&web-share=1";

  return (
    <section className="relative bg-white py-5 px-0 md:px-16 flex items-center dark:bg-slate-600 md:w-full w-[95%] mx-auto">
      <div className="md:container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* 📌 Background & Masked Image */}
        <div
          id="shape-bg"
          className="relative lg:w-[650px] md:w-[530px] w-[340px] mx-auto md:mx-0"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          {/* 🔹 Play Button */}
          <div className="absolute top-[70%] left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={openModal}
              className="demoVideo-btn cursor-pointer"
            >
              <FaPlayCircle className="text-2xl md:text-3xl lg:text-3xl" />
            </button>
          </div>

          {/* 🔹 Background Shape */}
          <img
            className="absolute w-[400px] md:w-[530px] md:h-[530px] top-2 md:top-4 z-0 rotate-3 md:-left-[10px] -left-[10px] dark:opacity-75"
            src={optimizedImage(
              "https://res.cloudinary.com/di3wwp9s0/image/upload/v1741711490/overhelmed/overhelmed_kvgwuz.png"
            )}
            alt="bg-shape"
          />

          {/* 🔹 Masked Image - Responsive */}
          <div className="relative z-10 masked-div md:w-[550px] md:h-[550px]">
            <picture>
              <source
                srcSet={optimizedImage(
                  "https://res.cloudinary.com/di3wwp9s0/image/upload/v1733429229/olq1biriqenliholyuyu.webp",
                  1920
                )}
                media="(min-width: 1200px)"
              />
              <source
                srcSet={optimizedImage(
                  "https://res.cloudinary.com/di3wwp9s0/image/upload/v1733429229/olq1biriqenliholyuyu.webp",
                  1080
                )}
                media="(min-width: 768px)"
              />
              <source
                srcSet={optimizedImage(
                  "https://res.cloudinary.com/di3wwp9s0/image/upload/v1733429229/olq1biriqenliholyuyu.webp",
                  720
                )}
                media="(max-width: 767px)"
              />
              <img
                src={optimizedImage(
                  "https://res.cloudinary.com/di3wwp9s0/image/upload/v1733429229/olq1biriqenliholyuyu.webp",
                  480
                )}
                alt="Cinque Terre"
                width="100%"
                height="auto"
                className="masked-img"
                loading="lazy"
              />
            </picture>
          </div>

          <svg
            width="250px"
            height="250px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            aria-labelledby="alt-text"
            role="img"
            className="animated-circle fill-[#1c3461] dark:fill-white absolute right-0 md:right-3 bottom-2 z-10 md:w-[200px] md:h-[200px]  w-[140px] h-[140px]"
          >
            <defs>
              <pattern
                id="dots-pattern"
                patternUnits="userSpaceOnUse"
                width="28"
                height="28"
              >
                <circle cx="10" cy="10" r="3" />
              </pattern>
            </defs>

            <circle cx="200" cy="200" r="200" fill="url(#dots-pattern)" />
          </svg>
        </div>

        {/* 📌 Text & Buttons */}
        <div
          className="md:pt-5 2xl:pt-8 px-5 md:pl-11 w-full"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="league-spartan md:text-3xl text-2xl lg:text-4xl text-[#00A6B2] font-bold md:pt-5 md:px-0 md:leading-loose dark:text-gray-200">
            When you&apos;re getting the right help,{" "}
            <br className="hidden md:block" /> you live healthier and happier!
          </h1>

          <div className="text-[16px] leading-relaxed open-sans w-full font-medium mt-5">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 dark:text-gray-100 league-spartan text-[#00A6B2]">
              We Believe...
            </h2>

            <ul className="space-y-4">
              {[
                {
                  title: "Exceptional patient care",
                  text: "We prioritize providing the highest level of care to our patients.",
                },
                {
                  title: "Strong communication & collaboration",
                  text: "We emphasize effective communication between caregivers, patients, and healthcare providers.",
                },
                {
                  title: "Respect for patients' choices",
                  text: "Every patient is unique, and we respect their values in all aspects of care.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-[#00A6B2] text-xl">&#9733;</span>
                  <p className="dark:text-gray-100">
                    <span className="text-[#00A6B2] font-semibold">
                      {item.title}:
                    </span>{" "}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* 📌 Call Buttons */}
          <div className="pt-5 pb-5 md:pb-[120px] font-[Roboto] flex  items-center gap-8 md:gap-0 md:space-y-0 md:space-x-7 flex-wrap">
            <a
              href="tel:+1516-367-2266"
              className="flex items-center px-6 py-3 md:px-5 md:py-4 border border-[#00a6b2] dark:border-[#3A4256] dark:bg-[#3A4256] rounded-full text-white hover:bg-[#00a6b2] duration-500 bg-hov2 league-spartan overflow-hidden xl:text-xl bg-[#00A6B2]"
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

      {showModal && <ModalBody youtubeUrl={youtubeUrl} onClose={closeModal} />}
    </section>
  );
};

export default OverwHelmed;
