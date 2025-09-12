import React, { useState, useEffect } from "react";
import SkeletonLoading from "../shared/SkeletonLoading";
// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// import reader2 from "../../../src/assets/Lotty File/holi.json";
import Image from "next/image";

const images = [
  {
    lg: "https://res.cloudinary.com/di3wwp9s0/image/upload/f_auto,q_auto,w_1920/v1741710684/Website%20Hero%20Images/Cottage-Home-Care-Slider-1.webp",
    sm: "https://res.cloudinary.com/di3wwp9s0/image/upload/f_auto,q_auto,w_720/v1741710747/Website%20Hero%20Images/cottage-home-care-slider-1-sm.webp",
    alt: "Cottage Home Care Slider-1",
  },
  {
    lg: "https://res.cloudinary.com/di3wwp9s0/image/upload/f_auto,q_auto,w_1920/v1741710796/Website%20Hero%20Images/Cottage-Home-Care-Slider-2.webp",
    sm: "https://res.cloudinary.com/di3wwp9s0/image/upload/f_auto,q_auto,w_720/v1741710842/Website%20Hero%20Images/Cottage-Home-Care-slider-2-sm.webp",
    alt: "Cottage Home Care Slider-2",
  },
  {
    lg: "https://res.cloudinary.com/di3wwp9s0/image/upload/f_auto,q_auto,w_1920/v1741710873/Website%20Hero%20Images/Cottage-Home-Care-Slider-3.webp",
    sm: "https://res.cloudinary.com/di3wwp9s0/image/upload/f_auto,q_auto,w_720/v1741710910/Website%20Hero%20Images/Cottage-Home-Care-slider-3-sm.webp",
    alt: "Cottage Home Care Slider-3",
  },
];

const CustomCarousel = ({ onRequestCare = () => {} }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [shouldDisplay, setShouldDisplay] = useState(false);
  // const [isClient, setIsClient] = useState(false);
  const interval = 5000;

  useEffect(() => {
    setIsLoading(false); // Removed new Image() call
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  // useEffect(() => {
  //   setIsClient(true);

  //   const today = new Date();
  //   const deadline = new Date("March 15, 2025 23:59:59");
  //   const startOfToday = new Date(today);
  //   startOfToday.setHours(0, 0, 0, 0);

  //   setShouldDisplay(today >= startOfToday && today <= deadline);
  // }, []);

  if (isLoading) {
    return <SkeletonLoading />;
  }

  // Determine if today is within the range from today to the deadline

  // console.log(shouldDisplay, today);

  return (
    <div className="custom-wave-section relative overflow-hidden isolate  h-[84vh]">
      {/* {isClient && shouldDisplay && (
        <div className="w-36 h-36 md:h-52 md:w-52 absolute -top-7 md:-top-10 right-3 md:right-8 z-20">
          <Lottie
            animationData={reader2}
            loop={true}
            className="h-fit object-cover"
          />
        </div>
      )} */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="pointer-events-none  h-[100px]  z-20 hidden lg:block -mb-1"
      >
        <path
          d="M0,224C480,400,960,150,1440,256L1440,320L0,320Z"
          className="fill-white dark:fill-slate-600"
        />
      </svg>

      {/* md:top-[35vh] lg:top-[10vh] 2xl:top-[27vh] */}
      <div
        className=" absolute z-20 bottom-0  w-full  2xl:bottom-[120px] lg:bottom-[200px] "
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
              <div className="flex justify-center items-center text-white font-semibold second-text gap-3">
                <a
                  href="tel:+1516-367-2266"
                  className="md:px-8 md:py-3 px-5 py-2 rounded-full text-base bg-[#00A6B2] uppercase bg-hov2 coco-gothic"
                >
                  Contact Us
                </a>
                <button
                  onClick={onRequestCare} // ✅ opens modal
                  className="md:px-8 md:py-3 px-5 py-2 rounded-full text-base bg-[#687699] uppercase bg-hov2 coco-gothic"
                >
                  Request CARE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider">
        {images?.map((img, index) => (
          <div key={index} className={index === currentIndex ? "current" : ""}>
            <picture className={index === currentIndex ? "current" : ""}>
              <source media="(min-width: 768px)" srcSet={img.lg} />
              <Image
                src={img.sm}
                alt={img?.alt || "carousel image"}
                className={index === currentIndex ? "current bg-center" : ""}
                width={720}
                height={405}
                priority={index === 0} // eagerly load only the first
                loading={index === 0 ? "eager" : "lazy"}
                unoptimized // Optional if not already set in next.config.js
              />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
