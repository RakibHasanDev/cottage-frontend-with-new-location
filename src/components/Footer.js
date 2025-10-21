import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const pathname = usePathname(); // ✅ always at top level

  let companyName = "Cottage Home Care Services";
  let companyLogo =
    "https://res.cloudinary.com/di3wwp9s0/image/upload/v1757434710/cottage_logo/cottage-home-care-logo_n8fskh.webp";
  if (pathname?.includes("new-jersey")) {
    companyName = "Cottage Homecare NJ LLC";
    companyLogo =
      "https://res.cloudinary.com/di3wwp9s0/image/upload/v1757435478/cottage_logo/new_jersey_logo_a1pexa.webp";
  }
  if (pathname?.includes("michigan")) {
    companyName = "Cottage Home Care MI LLC";
    companyLogo =
      "https://res.cloudinary.com/di3wwp9s0/image/upload/v1760640433/cottage_logo/mi_bcbgbh.webp";
  } else if (pathname?.includes("maryland")) {
    companyName = "Cottage Home Care Maryland LLC";
    companyLogo =
      "https://res.cloudinary.com/di3wwp9s0/image/upload/v1759419105/Mary_Land_LLC/maryland-logo_mbwqtp.webp";
  }

  return (
    <div className="footer-bg relative">
      <div className=" py-6">
        <div className="grid grid-cols-5 lg:grid-cols-5 w-[97%] mx-auto shadow-sm open-sans">
          {/* facebook  */}
          <a
            className="flex justify-center md:justify-center bg-[#5271B3] py-3 cursor-pointer"
            href="https://www.facebook.com/cottageHC"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visit our Facebook page"
          >
            <div className="flex items-center gap-3 md:gap-5">
              <div className="flex justify-center items-center w-8 h-8 md:w-14 md:h-14 bg-[#46619A] border-[1px] border-[#40598d] shadow-md">
                <Icon
                  icon="simple-icons:facebook"
                  className="text-white md:text-2xl"
                />
              </div>
              <div className="text-white text-sm lg:text-base md:text-base hidden lg:block">
                <p>Facebook</p>
                <p>Follow us on Facebook</p>
              </div>
            </div>
          </a>
          {/* end facebook */}

          {/* start instagram */}
          <a
            className="flex justify-center md:justify-center bg-gradient-to-r from-[#E0406D] to-[#6162DC] py-3 cursor-pointer"
            href="https://www.instagram.com/cottage.homecare/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visit our Instagram Profile"
          >
            <div className="flex items-center gap-3 md:gap-5">
              <div className="flex justify-center items-center w-8 h-8 md:w-14 md:h-14 bg-gradient-to-t from-[#F08535] via-[#D63573] to-[#7135B0] border-[1px] border-[#7135B0] shadow-md">
                <Icon
                  icon="simple-icons:instagram"
                  className="text-white md:text-2xl"
                />
              </div>
              <div className="text-white text-sm lg:text-base md:text-base hidden lg:block">
                <p>Instagram</p>
                <p>Follow us on Instagram</p>
              </div>
            </div>
          </a>
          {/* end instagram */}

          {/* start twitter */}
          <a
            className="flex justify-center md:justify-center bg-[#0f0f0f] py-3 cursor-pointer"
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visit our Twitter page"
          >
            <div className="flex items-center gap-3 md:gap-5">
              <div className="flex justify-center items-center w-8 h-8 md:w-14 md:h-14 bg-[#0f0f0f] border-[1px] border-white shadow-md">
                <Icon
                  icon="simple-icons:x"
                  className="text-white md:text-2xl"
                />
              </div>
              <div className="text-white text-sm lg:text-base md:text-base hidden lg:block">
                <p>X</p>
                <p>Follow us on X</p>
              </div>
            </div>
          </a>
          {/* end twitter */}

          {/* start TikTok */}
          <a
            className="flex justify-center md:justify-center bg-gradient-to-r from-gray-700 via-gray-400 to-[#65C7CD] py-3 cursor-pointer"
            href="https://www.tiktok.com/@cottage.homecare"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visit our Tiktok page"
          >
            <div className="flex items-center gap-3 md:gap-5">
              <div className="flex justify-center items-center w-8 h-8 md:w-14 md:h-14 bg-gradient-to-t from-pink-400 via-[#65C7CD] to-gray-800 border-[1px] border-pink-300 shadow-md">
                <Icon
                  icon="simple-icons:tiktok"
                  className="text-white md:text-2xl"
                />
              </div>
              <div className="text-white text-sm lg:text-base md:text-base hidden lg:block">
                <p>TikTok</p>
                <p>Follow us on TikTok</p>
              </div>
            </div>
          </a>
          {/* end TikTok */}

          {/* start YouTube */}
          <a
            className="flex justify-center md:justify-center bg-[#cc181e] py-3 cursor-pointer"
            href="https://www.youtube.com/@cottage.homecare"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visit our Youtube channel"
          >
            <div className="flex items-center gap-3 md:gap-5">
              <div className="flex justify-center items-center w-8 h-8 md:w-14 md:h-14 bg-[#b008] border-[1px] border-[#880000b7] shadow-md">
                <Icon
                  icon="simple-icons:youtube"
                  className="text-white md:text-2xl"
                />
              </div>
              <div className="text-white text-sm lg:text-base md:text-base hidden lg:block">
                <p>YouTube</p>
                <p>Watch on YouTube</p>
              </div>
            </div>
          </a>
          {/* end YouTube */}
        </div>
      </div>
      <div className="  px-4 np divide-y  text-white  footer-shade footer-opacity league-spartan ">
        <div className="mb-3">
          <div className="container flex flex-col gap-10  pt-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 ">
            <div className="lg:w-[20%] ">
              <Link href="/" className="">
                <div className="flex items-center justify-center  ">
                  <Image
                    src={companyLogo}
                    alt="Cottage Home Care Services Logo"
                    className="p-2 bg-white flex justify-center rounded-full  shadow-xl border-2 border-[#00A6B2] w-16 h-16 "
                    width="64"
                    height="64"
                  />
                </div>
                <p className="text-center text-2xl">{companyName}</p>
              </Link>
            </div>

            <div className="grid grid-cols-1  lg:text-base gap-x-3 gap-y-8  sm:grid-cols-4  lg:w-[80%] ">
              <div className="space-y-3">
                <Link
                  href="/service-areas"
                  className=" uppercase text-gray-50 hover:text-[#00A6B2] tracking-wider"
                >
                  Service Areas
                </Link>
                <ul className="space-y-1 uppercase tracking-wider">
                  <li>
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      className=" hover:text-[#00A6B2]"
                    >
                      {" "}
                      New York City
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/new-jersey"
                      rel="noopener noreferrer"
                      className=" hover:text-[#00A6B2]"
                    >
                      {" "}
                      New Jersey
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/maryland"
                      rel="noopener noreferrer"
                      className=" hover:text-[#00A6B2]"
                    >
                      {" "}
                      Maryland
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="space-y-3">
                <Link
                  href="/privacy-policy"
                  className=" uppercase text-gray-50 hover:text-[#00A6B2] tracking-wider"
                >
                  Privacy Policy
                </Link>
                <ul className="space-y-1 uppercase tracking-wider">
                  <li>
                    <Link
                      href="/terms-and-conditions"
                      rel="noopener noreferrer"
                      className=" hover:text-[#00A6B2]"
                    >
                      {" "}
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/disclaimer"
                      rel="noopener noreferrer"
                      className=" hover:text-[#00A6B2]"
                    >
                      {" "}
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <Link
                  href="/about-us"
                  className=" uppercase text-gray-50 hover:text-[#00A6B2] tracking-wider"
                >
                  About US
                </Link>
                <ul className="space-y-1 uppercase tracking-wider">
                  <li>
                    <Link
                      href="/mission-vision"
                      className="hover:text-[#00A6B2]"
                      rel="noopener noreferrer"
                    >
                      Mission Vision
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/sitemap"
                      rel="noopener noreferrer"
                      className="hover:text-[#00A6B2]"
                      title="Learn more about the NHTD Program at Cottage Home Care"
                    >
                      Site Map
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3 flex  ">
                <div>
                  <h3 className="uppercase dark:text-gray-50 tracking-wider">
                    Contact Info
                  </h3>
                  <ul className="space-y-1 uppercase tracking-wider">
                    <li>
                      <a
                        href="tel:+1516-367-2266"
                        rel="noreferrer"
                        aria-label="Call us on 516-367-2266"
                      >
                        Phone:{" "}
                        <span className="hover:text-[#00A6B2] ">
                          {" "}
                          516-367-2266
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href={`mailto:${"info"}@${"cottagehomecare.com"}`}
                        className="hover:text-[#00A6B2] text-xs lg:text-base "
                        rel="noreferrer"
                        aria-label="Email us on info@cottagehomecare.com"
                      >
                        {`${"info"}@${"cottagehomecare.com"}`}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 md:text-sm text-xs text-gray-50 open-sans ">
          <div className="flex flex-col md:grid md:grid-cols-3 items-center lg:w-[80%]  mx-auto">
            {/* Left: RSS Badge */}
            <div className="mb-2 md:mb-0 md:flex md:items-center">
              <a href="http://www.rssboard.org/rss-validator/check.cgi?url=https%3A//cottagehomecare.com/feed.xml">
                <Image
                  src="https://www.rssboard.org/rss-validator/images/valid-rss-rogers.png"
                  alt="[Valid RSS]"
                  title="Validate my RSS feed"
                  className="h-6 mx-auto md:mx-0 2xl:ml-[80px]"
                  width={68}
                  height={24}
                />
              </a>
            </div>

            {/* Middle: Copyright */}
            <p className="text-center">
              Copyright © {currentYear} Cottage Home Care - All Rights Reserved.
            </p>

            {/* Right column left blank so copyright stays centered */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
