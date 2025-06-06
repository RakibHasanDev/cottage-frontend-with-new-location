import React from "react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

import { BsTwitter, BsYoutube } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                <FaFacebookF className="text-white md:text-2xl"></FaFacebookF>
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
                <GrInstagram className="text-white md:text-2xl"></GrInstagram>
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
                <FaXTwitter className="text-white md:text-2xl" />
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
                <FaTiktok className="text-white md:text-2xl"></FaTiktok>
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
                <BsYoutube className="text-white md:text-2xl"></BsYoutube>
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
        <div>
          <div className="container flex flex-col justify-between pt-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
              <Link
                href="/"
                className="flex justify-center space-x-3 lg:justify-start"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-xl border-2 border-[#00A6B2]">
                  <Image
                    src="/assets/Cottage-Home.webp"
                    alt="Cottage Home Care Services Logo"
                    className="p-2"
                    width="64"
                    height="64"
                  />
                </div>
                <p className="self-center text-2xl">
                  Cottage Home Care Services
                </p>
              </Link>
            </div>

            <div className="grid grid-cols-2  lg:text-base gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3 ">
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
                <p className=" uppercase text-gray-50 hover:text-[#00A6B2] tracking-wider">
                  About US
                </p>
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

          <span className="text-center my-4 uppercase text-xs md:text-sm  border-[1px] border-[#00A6B2] flex justify-center lg:w-[550px] mx-auto p-2">
            {" "}
            sms consent or phone numbers for the purpose of sms aren&apos;t
            shared
          </span>
        </div>

        <div className="py-6 md:text-sm  text-xs text-center text-gray-50 open-sans">
          Copyright © {currentYear} Cottage Home Care - All Rights Reserved.{" "}
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Footer;
