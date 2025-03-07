import React, { useContext, useState } from "react";
import { ImBlog, ImHome } from "react-icons/im";
import {
  MdDashboard,
  MdLightMode,
  MdOutlineMedicalServices,
} from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { BsFiles, BsFillTelephoneFill, BsVirus } from "react-icons/bs";
import { RiCommunityFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { GoDesktopDownload } from "react-icons/go";
import { IoDesktopOutline, IoMoonSharp } from "react-icons/io5";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const [tab, setTab] = useState(0);

  const toggleSidebar = () => {
    setIsOpen(true);
  };

  const toggleCloser = () => {
    setIsOpen(false);
  };

  const options = [
    { icon: <MdLightMode />, text: "light" },
    { icon: <IoMoonSharp />, text: "dark" },
    { icon: <IoDesktopOutline />, text: "system" },
  ];

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme); // Persist theme selection
  };
  const handleClick = (id) => {
    setTab((prevTab) => (prevTab === id ? 0 : id));
  };

  const handleRotate = (id) => (tab === id ? "rotate-180 text-[#04eeff]" : "");

  const handleToggle = (id) =>
    `transition-max-height ${tab === id ? "open" : ""}`;

  const services = [
    {
      id: 1,
      question: "Services",
      answer: [
        {
          property: "NHTD",
          path: "nhtd",
        },
        {
          property: "HHA/PCA",
          path: "hha",
        },
        {
          property: "PRIVATE PAY",
          path: "personalPayService",
        },
        {
          property: "CDPAP",
          path: "cdpap",
        },
      ],
    },
  ];

  const community = [
    {
      id: 11,
      question: "Community Outreach",
      answer: [
        {
          property: "Video Gallery",
          path: "videos",
        },
        {
          property: "Past Event",
          path: "pastEvent",
        },
        {
          property: "Upcoming Events",
          path: "UpcomingEvent",
        },
        {
          property: "Team Members",
          path: "team",
        },
      ],
    },
  ];

  return (
    <div className=" z-50">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className=" p-2 rounded-md bg-[#00A6B2] text-white  focus:outline-none "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar Content */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-screen w-[75%] text-white p-4 transition-transform duration-300 ease-in-out transform overflow-y-auto`}
        style={{
          backgroundColor: isOpen ? "rgba(0, 0, 0, 0.8)" : "transparent",
        }}
      >
        <ul id="nav-text" className="space-y-5">
          <li
            className="flex items-center justify-between"
            style={{ listStyle: "none" }}
          >
            <div className="w-[75%] rounded-md  p-2 flex justify-evenly items-center border-[1px] border-gray-100 shadow-2xl">
              {options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => handleThemeChange(opt.text)}
                  className={`h-7 w-7 text-xl flex items-center justify-center transition-all 
                    ${
                      theme === opt.text
                        ? "text-sky-600 scale-125" // Highlight selected theme
                        : "text-gray-400"
                    }`}
                >
                  {opt.icon}
                </button>
              ))}
            </div>
            <div>
              <button
                className=" bg-[#00A6B2]  w-10 h-10 shadow-xl rounded-full text-white flex justify-center items-center text-2xl "
                onClick={toggleCloser}
              >
                <RxCross2 />
              </button>
            </div>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              onClick={toggleCloser}
              href="/"
              aria-label="Home"
              title="Home"
              className={`font-medium    tracking-wide  transition-colors duration-200 uppercase nav-text hover-underline-animation  text-gray-100 flex gap-2`}
            >
              <ImHome className="font-medium mt-[1.5px]" /> Home
            </Link>
          </li>

          {services?.map((item) => (
            <li
              key={item.id}
              className={` py-1 shadow-lg ${
                tab === item.id
                  ? "bg-[#435670f5] px-4 -ml-4 -mr-4"
                  : "bg-transparent "
              }`}
              style={{ listStyle: "none" }}
            >
              <button
                onClick={() => handleClick(item.id)}
                className="w-full focus:outline-none  "
              >
                <h3 className="flex items-center justify-between">
                  <p className="flex items-center gap-2">
                    <MdOutlineMedicalServices />{" "}
                    <span className="uppercase font-medium    tracking-wide  transition-colors duration-200 nav-text hover-underline-animation  text-gray-100">
                      {item?.question}{" "}
                    </span>
                  </p>

                  <span>
                    <svg
                      className={`fill-current   h-6 w-6 transform transition-transform duration-500  ${handleRotate(
                        item.id
                      )}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                  </span>
                </h3>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500  ${handleToggle(
                  item.id
                )}`}
              >
                {item?.answer?.map((ans, index) => (
                  <Link
                    key={index}
                    onClick={toggleCloser}
                    href={`/${ans?.path}`}
                    aria-label="Contact US"
                    title="Contact US"
                    className={`font-medium  tracking-wide  transition-colors duration-200  
                                         uppercase nav-text hover-underline-animation text-gray-100 block my-4 `}
                  >
                    {ans?.property}
                  </Link>
                ))}
              </div>
            </li>
          ))}

          <li style={{ listStyle: "none" }}>
            <Link
              onClick={toggleCloser}
              href="/contacts"
              aria-label="Contact US"
              title="Contact US"
              className={`font-medium  tracking-wide  transition-colors duration-200  
                                uppercase nav-text hover-underline-animation text-gray-100 flex gap-2 `}
            >
              <BsFillTelephoneFill className="font-medium mt-[1.5px]" /> Contact
              US
            </Link>
          </li>

          <li style={{ listStyle: "none" }} onClick={toggleCloser}>
            <Link
              href="/hhaCertification"
              aria-label="HHA Certification"
              title="HHA Certification"
              className={`font-medium    tracking-wide  transition-colors duration-200  
                                uppercase nav-text hover-underline-animation text-gray-100 flex gap-2 items-center`}
            >
              <TbCertificate className="text-lg" /> HHA Certification
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              onClick={toggleCloser}
              href="/covid"
              aria-label="covid"
              title="covid"
              className={`font-medium    tracking-wide  transition-colors duration-200  
                                uppercase nav-text hover-underline-animation text-gray-100 flex gap-2 items-center`}
            >
              <BsVirus className="text-md" onClick={toggleCloser} /> Covid-19
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              onClick={toggleCloser}
              href="/resources"
              aria-label="Resources"
              title="Resources"
              className={`font-medium    tracking-wide  transition-colors duration-200  
                                uppercase nav-text hover-underline-animation text-gray-100 flex gap-2 items-center`}
            >
              <BsFiles className="text-md" /> Resources
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              onClick={toggleCloser}
              href="/helpDesk"
              aria-label="helpDesk"
              title="helpDesk"
              className={`font-medium    tracking-wide  transition-colors duration-200  
                                uppercase nav-text hover-underline-animation text-gray-100 flex gap-2 items-center`}
            >
              <GoDesktopDownload className="text-md" /> Help Desk
            </Link>
          </li>

          <li style={{ listStyle: "none" }}>
            <Link
              onClick={toggleCloser}
              href="/faqs"
              aria-label="FAQs"
              title="FAQs"
              className={`font-medium    tracking-wide  transition-colors duration-200  
                                uppercase nav-text hover-underline-animation text-gray-100 flex gap-2 items-center`}
            >
              <FaQuestionCircle className="text-md" /> FAQs
            </Link>
          </li>

          {community?.map((item) => (
            <li
              key={item.id}
              style={{ listStyle: "none" }}
              className={` py-1 shadow-lg ${
                tab === item.id
                  ? "bg-[#435670f5] px-4  -ml-4 -mr-4"
                  : "bg-transparent"
              }`}
            >
              <button
                onClick={() => handleClick(item.id)}
                className="w-full focus:outline-none  "
              >
                <h3 className="flex items-center justify-between">
                  <p className="flex items-center gap-2">
                    <RiCommunityFill />{" "}
                    <span className="uppercase font-medium    tracking-wide  transition-colors duration-200 nav-text hover-underline-animation  text-gray-100">
                      {item?.question}{" "}
                    </span>
                  </p>

                  <span>
                    <svg
                      className={`fill-current   h-6 w-6 transform transition-transform duration-500  ${handleRotate(
                        item.id
                      )}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                  </span>
                </h3>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500  ${handleToggle(
                  item.id
                )}`}
              >
                {item?.answer?.map((ans, index) => (
                  <Link
                    key={index}
                    onClick={toggleCloser}
                    href={`/${ans?.path}`}
                    aria-label="Contact US"
                    title="Contact US"
                    className={`font-medium  tracking-wide  transition-colors duration-200  
                                         uppercase nav-text hover-underline-animation text-gray-100 block my-4 `}
                  >
                    {ans?.property}
                  </Link>
                ))}
              </div>
            </li>
          ))}

          <li style={{ listStyle: "none" }}>
            <Link
              onClick={toggleCloser}
              href="/blog"
              aria-label="Blog"
              title="Blog"
              className={`font-medium    tracking-wide  transition-colors duration-200  
                                uppercase nav-text hover-underline-animation text-gray-100 flex gap-2 items-center `}
            >
              <ImBlog className="text-md" /> Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
