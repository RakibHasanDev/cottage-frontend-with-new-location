import React, { Suspense, useEffect } from "react";
import callReader from "../../assets/social-media-lottie/call.json";
import { useInView } from "react-intersection-observer";
import IconLoading from "../shared/IconLoading";
import BannerWithBreadcrumbs from "@/utils/BannerWithBreadcrumbs";

const HeroSection = () => {
  const Lottie = React.lazy(() => import("lottie-react"));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const Placeholder = () => (
    <div>
      <IconLoading />
    </div>
  );

  return (
    <div className=" text-center min-h-[82vh] contact-banner">
      <div className="pt-[40vh] ">
        <h1 className="text-[35px] font-bold relative league-spartan text-white afterEffect text-shadow">
          Contact Us
        </h1>
        <div className="pt-11 pb-[120px] font-[Roboto] flex justify-center items-center gap-8 md:gap-0 md:space-y-0 md:space-x-7 flex-wrap">
          <a
            href="tel:+1516-367-2266"
            className="flex items-center px-6 py-3 md:px-16 md:py-6 border border-[#00a6b2] rounded-full text-white hover:bg-[#00a6b2] duration-500 bg-hov2 league-spartan overflow-hidden xl:text-xl "
            aria-label="Call us at (516) 367-2266"
          >
            {/* <FaPhone className="mr-2 " /> */}
            <span ref={ref} className="h-[20px]">
              {inView && (
                <Suspense fallback={<Placeholder />}>
                  <Lottie
                    animationData={callReader}
                    loop={true}
                    className="h-[32px] w-[32px] mr-4 xl:mr-5 "
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
            Call Us
          </a>
          <a
            href="#contact-info"
            className="flex items-center px-6 py-3 md:px-16 md:py-6 border border-[#00a6b2] rounded-full text-white bg-[#00A6B2] duration-500 bg-hov2 league-spartan xl:text-xl"
          >
            Get Care
          </a>
        </div>
      </div>
      <BannerWithBreadcrumbs title="Contact" />
    </div>
  );
};

export default HeroSection;
