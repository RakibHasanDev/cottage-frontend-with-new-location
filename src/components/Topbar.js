import React from "react";
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="dark:bg-slate-800">
      <div className="block w-[95%] mx-auto league-spartan font-semibold dark:text-gray-200">
        <div className="flex md:justify-center justify-between items-center">
          <div className="roboto px-4 md:px-8 py-3 lg:flex items-center lg:justify-between lg:w-[95%]">
            <div className="lg:flex gap-8 hidden">
              <div className="flex gap-4 items-center md:text-lg topbar-text">
                <BsFillTelephoneFill />
                <h1>
                  Call{" "}
                  <a
                    href="tel:+1516-367-2266"
                    className="text-[#00A6B2] dark:text-gray-300"
                    aria-label="Call us at 516-367-2266"
                  >
                    516-367-2266
                  </a>
                </h1>
              </div>
              <div className="flex gap-4 items-center md:text-lg topbar-text">
                <TfiEmail />
                <h1>
                  Email{" "}
                  <a
                    href="mailto:info@cottagehomecare.com"
                    className="text-[#00A6B2] dark:text-gray-300"
                    aria-label="Email us at info@cottagehomecare.com"
                  >
                    info@cottagehomecare.com
                  </a>
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-5 md:text-lg font-medium text-[#00A6B2]">
              <a
                href="tel:+1516-367-2266"
                className="text-[#00A6B2] lg:hidden md:text-2xl bg-hov2 dark:text-gray-300"
                aria-label="Call us at 516-367-2266"
              >
                <BsFillTelephoneFill />
              </a>
              <a
                href="mailto:info@cottagehomecare.com"
                className="text-[#00A6B2] md:text-2xl bg-hov2 lg:hidden dark:text-gray-300"
                aria-label="Email us at info@cottagehomecare.com"
              >
                <TfiEmail />
              </a>
              <a
                href="https://www.facebook.com/cottageHC"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our Facebook page"
              >
                <BsFacebook className="md:text-2xl bg-hov2 dark:text-gray-300 topbar-icon" />
              </a>
              <a
                href="https://www.instagram.com/cottage.homecare/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our Instagram profile"
              >
                <BsInstagram className="md:text-2xl bg-hov2 dark:text-gray-300 topbar-icon" />
              </a>
              <a
                href="https://x.com/cottagecareny"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter
                  className="md:text-2xl bg-hov2 dark:text-gray-300 topbar-icon"
                  aria-label="Visit our Twitter profile"
                />
              </a>
              <a
                href="https://www.tiktok.com/@cottage.homecare"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok
                  className="md:text-2xl bg-hov2 dark:text-gray-300 topbar-icon"
                  aria-label="Visit our Tiktok profile"
                />
              </a>
            </div>
          </div>

          {/* Lazy Load Google Translate */}
          {/* <div className="md:w-[260px] w-[140px]">
            <Suspense fallback={<Placeholder />}>
              <GoogleTranslate />
            </Suspense>
          </div> */}
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-gray-200" />
    </div>
  );
};

export default TopBar;
