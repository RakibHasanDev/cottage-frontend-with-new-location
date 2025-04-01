import React from "react";
import { FaStar } from "react-icons/fa";

const optimizedImage = (url, width = 1080) =>
  url.replace("/upload/", `/upload/f_auto,q_auto,dpr_auto,w_${width}/`);

const WhyChoose = () => {
  return (
    <div className="pt-16 md:pt-10 pb-12 lg:pb-5">
      <div className="md:w-[80%] w-[95%] mx-auto flex flex-col lg:flex-row justify-between items-center lg:gap-x-20 gap-10">
        {/* Left Content */}
        <div
          className="px-5 lg:px-0 mt-5 md:mt-0 open-sans w-[95%] lg:w-[48%]"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <p className="text-2xl md:text-2xl 2xl:text-4xl font-bold mb-4 dark:text-gray-100 text-[#00A6B2]">
            Why choose Cottage Home Care Services?
          </p>

          {/* Key Features */}
          {[
            {
              text: "Cottage Home Care Services has a person-led approach and genuinely cares for the welfare and well-being of our patients, aides, and staff. We're like family.",
            },
            {
              text: "We will ensure your loved ones are safe, comfortable, and given the best care to bring relief to family members.",
            },
            {
              text: "We provide personalized care. Each of our patients receives one-on-one attention and a care plan tailored to their specific needs. It makes treatment more effective and builds trust.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start mt-5 space-x-3">
              <FaStar className="text-[#00A6B2] text-2xl flex-shrink-0 dark:text-gray-100" />
              <p className="text-[#67637e] text-base leading-relaxed text-justify dark:text-gray-100">
                {item.text}
              </p>
            </div>
          ))}

          {/* Learn More Button */}
          <div className="mt-6 lg:mt-10">
            <a
              href="tel:+1516-367-2266"
              className="px-6 py-3 md:px-9 md:py-4 dark:bg-[#3A4256] rounded-full bg-[#00A6B2] hover:bg-hov2 text-white league-spartan md:text-[18px] capitalize font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image & SVG Section */}
        <div
          className="relative lg:w-[650px] md:w-[530px] w-[340px] mx-auto md:mx-0 order-first sm:order-none"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          {/* Background Blob Shape */}
          <img
            className="absolute w-[340px] md:w-[590px] md:rotate-6 top-4 md:-top-2 z-0 -ml-2 dark:opacity-25"
            src={optimizedImage(
              "https://res.cloudinary.com/di3wwp9s0/image/upload/v1733425449/why-chose/why-chose-background.webp"
            )}
            alt="why-chose-background"
          />

          {/* Masked Image */}
          <div className="relative z-10 whyChose-div md:w-[600px] md:h-[500px]">
            <picture>
              <source
                srcSet={optimizedImage(
                  "https://res.cloudinary.com/di3wwp9s0/image/upload/v1733428120/why-chose/why-chose.webp",
                  1920
                )}
                media="(min-width: 1200px)"
              />
              <source
                srcSet={optimizedImage(
                  "https://res.cloudinary.com/di3wwp9s0/image/upload/v1733428120/why-chose/why-chose.webp",
                  1080
                )}
                media="(min-width: 768px)"
              />
              <source
                srcSet={optimizedImage(
                  "https://res.cloudinary.com/di3wwp9s0/image/upload/v1733428120/why-chose/why-chose.webp",
                  720
                )}
                media="(max-width: 767px)"
              />
              <img
                src={optimizedImage(
                  "https://res.cloudinary.com/di3wwp9s0/image/upload/v1733428120/why-chose/why-chose.webp",
                  480
                )}
                alt="why-chose-image"
                width="480"
                height="480"
                className="whyChose-img"
                loading="lazy"
              />
            </picture>
          </div>

          {/* Dotted Pattern SVG */}
          <svg
            width="250px"
            height="250px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            aria-labelledby="alt-text"
            role="img"
            className="animated-circle fill-[#1c3461] dark:fill-[#00A6B2] absolute right-0 md:right-4 bottom-2 z-10 md:w-[200px] md:h-[200px] w-[140px] h-[140px]"
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
      </div>
    </div>
  );
};

export default WhyChoose;
