import React, { useState, useEffect } from "react";
import SkeletonLoading from "../shared/SkeletonLoading";

const optimizedImage = (url, width = 1920) =>
  url.replace("/upload/", `/upload/f_auto,q_auto,dpr_auto,w_${width}/`);

const images = [
  {
    lg: "https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728479602/tyfxpgbtpv364idxhn4g.webp",
    sm: "https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728479674/pa2vvqc61tvi4ctyqed9.webp",
  },
  {
    lg: "https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728479703/njxbsug6feitm1blsjbu.webp",
    sm: "https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728479733/yuzajymfp9auat0tc8bq.webp",
  },
  {
    lg: "https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728479755/kjzfcqxb4yzgo7itgrqw.webp",
    sm: "https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728479819/x7ujkz3bnbq3itp7ylpv.webp",
  },
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
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

  if (isLoading) {
    return <SkeletonLoading />;
  }
  return (
    <div className="custom-wave-section h-[84.04vh] relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full z-10 hidden md:block"
      >
        <path
          d="M0,224C480,400,960,150,1440,256L1440,320L0,320Z"
          className="fill-white dark:fill-slate-600"
        ></path>
      </svg>

      <div
        className="banner-text absolute z-20 bottom-0 md:top-[35vh] lg:top-[28vh] w-full"
        id="main-banner-text"
      >
        <div className="mx-auto">
          <div
            className="rounded-md bg-contact-2 md:max-w-3xl lg:max-w-3xl mx-auto"
            id="lower-medium-device"
          >
            <div className="bg-simple px-5 pt-4 pb-8">
              <h1 className="text-white text-sm md:text-base text-center font-medium text-shadow open-sans">
                Cottage Home Care Services provides care to seniors in need and
                has taken on some of the most challenging cases in New York.
              </h1>
              <p className="w-[18px] h-[2px] bg-gray-300 rounded-md mx-auto my-2.5"></p>
              <h2 className="text-center md:text-xl text-[15px] font-medium md:font-semibold text-[#dbf2f4] mb-5 px-5 md:px-0 mt-2 open-sans custom-font text-shadow">
                HHA/PCA, CDPAP, NHTD & PRIVATE PAY SERVICES THROUGHOUT NEW YORK
                CITY, NASSAU & SUFFOLK COUNTY, WESTCHESTER & ALBANY.
              </h2>
              <div className="flex justify-center text-white font-semibold second-text">
                <a
                  href="tel:+1516-367-2266"
                  className="px-8 py-3 rounded-full text-lg bg-[#00A6B2] uppercase bg-hov2 coco-gothic"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider">
        {images?.map((img, index) => (
          <div key={index} className={index === currentIndex ? "current" : ""}>
            <picture className={index === currentIndex ? "current" : ""}>
              <source
                media="(min-width: 768px)"
                srcSet={optimizedImage(img.lg)}
              />
              <img
                src={optimizedImage(img.sm, 720)}
                alt="Hero"
                className={index === currentIndex ? "current bg-center" : ""}
                width={img.naturalWidth}
                height={img.naturalHeight}
                loading={index === 0 ? "eager" : "lazy"} // Eager load first image
              />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
