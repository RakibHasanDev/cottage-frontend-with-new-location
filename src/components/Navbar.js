import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import navLogo from "../../src/assets/vector-logo.png";
import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";
import ToggleButton from "./shared/ToogleButton";

const NavBar = () => {
  const [customShadow, setCustomShadow] = useState("shadow-none");
  const [isSticky, setIsSticky] = useState(false);
  const [navColor] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ Fix: Define mounted state

  useEffect(() => {
    setMounted(true); // ✅ Ensure the component is mounted (fix SSR issues)

    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsSticky(true);
        setCustomShadow("shadow-xl");
      } else {
        setIsSticky(false);
        setCustomShadow("shadow-none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // ✅ Single useEffect that runs once after mount

  if (!mounted) return null; // ✅ Prevent SSR hydration issues

  const navbarClasses = `bg-white z-50   sticky   ${
    isSticky
      ? "top-0 transition-all duration-1000"
      : "-top-20 transition-all duration-1500 "
  } `;

  return (
    <ThemeProvider>
      <nav
        className={`  ${navbarClasses}  md:z-50 dark:bg-slate-800  ${customShadow}  `}
      >
        <div
          className="px-4 pt-2 pb-4 md:mx-auto nav-size ml-auto"
          id="nav-shape"
        >
          <div className=" flex items-center md:justify-between md:w-full w-[95%] ">
            <Link
              href="/"
              aria-label="Cottage Home Care Services"
              title="Cottage Home Care Services"
              className="inline-flex items-center  "
            >
              <div>
                <div className="md:flex items-center hidden ">
                  <Image
                    src={navLogo}
                    className="nav-img shadow-2xl p-2 border-2 border-[#00A6B2] rounded-full dark:bg-gray-300"
                    alt="Cottage Home Care Services Logo"
                    width="100" // Set an appropriate width
                    height="100" // Set an appropriate height
                  />
                  <h5
                    className={` ml-4   text-[#00a6b2]  nav-font league-spartan font-bold`}
                  >
                    <span className="text-shadow ">
                      Cottage Home Care Services
                    </span>
                    <hr className="border-[1px] -mt-0.5 border-[#00A6B2] dark:border-gray-100 md:w-full w-[85%]" />
                    <p className="font-semibold top-title md:text-center text-[#49465D] tracking-tighter md:tracking-normal dark:text-gray-300 md:ml-0 ml-2 ">
                      THE RIGHT HOME CARE FOR YOU
                    </p>
                  </h5>
                </div>

                <div className="header-container flex items-center md:hidden  ">
                  <Image
                    src={navLogo}
                    className="logo shadow-2xl border-2 border-[#00A6B2] rounded-full dark:bg-gray-300"
                    alt="Cottage Home Care Services Logo"
                    width="70"
                    height="70"
                  />

                  <div className="text-container ml-3 league-spartan">
                    <h5 className="title  text-[#00A6B2] tracking-wide  font-bold uppercase ">
                      Cottage Home <br /> Care Services
                    </h5>
                    <p className="  dark:border-gray-100 mb-[1px] border-t-[1px] border-gray-700" />
                    <p className="tagline  font-semibold text-[#49465D] dark:text-gray-100 mt-[1px]">
                      THE RIGHT HOME CARE FOR YOU
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <ul className=" items-center hidden space-x-4 lg:flex   nav-list">
              <li style={{ listStyle: "none" }}>
                <Link
                  href="/"
                  aria-label="Home"
                  title="Home"
                  className={`font-semibold    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${
                                  navColor && "customWhite"
                                } white   uppercase nav-text hover-underline-animation  dark:text-gray-300`}
                >
                  Home
                </Link>
              </li>
              {/* <li>
              <NavLink
                href="/services"
                aria-label="services"
                title="services"
                className={`font-semibold    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${
                                  navColor && "customWhite"
                                } white   uppercase nav-text hover-underline-animation dark:text-gray-300`}
              >
                Services
              </NavLink>
            </li> */}

              <li className="relative group">
                {/* Services Button */}
                <button
                  className={`dropdown-toggle font-semibold tracking-wide text-[#49465D] transition-colors duration-200  
      ${
        navColor ? "customWhite" : ""
      } uppercase nav-text hover-underline-animation dark:text-gray-300 `}
                >
                  Services
                </button>

                {/* Dropdown Menu */}
                <div
                  className="absolute left-0 top-full w-48 bg-white shadow-md border border-gray-200 rounded-md 
      dark:bg-slate-800 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
      transition-opacity duration-300 z-50 font-semibold "
                >
                  {/* Services Links */}
                  <Link href="/nhtd">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                      NHTD
                    </p>
                  </Link>

                  <Link href="/hha">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                      HHA/PCA
                    </p>
                  </Link>

                  <Link href="/personalPayService">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Private Pay
                    </p>
                  </Link>

                  <Link href="/cdpap">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase hover:bg-gray-100 dark:hover:bg-gray-700">
                      CDPAP
                    </p>
                  </Link>
                </div>
              </li>

              <li style={{ listStyle: "none" }}>
                <Link
                  href="/contacts"
                  aria-label="Contact US"
                  title="Contact US"
                  className={`font-semibold    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${
                                  navColor && "customWhite"
                                } white   uppercase nav-text hover-underline-animation dark:text-gray-300`}
                >
                  Contact US
                </Link>
              </li>

              <li style={{ listStyle: "none" }}>
                <Link
                  href="/hhaCertification"
                  aria-label="HHA Certification"
                  title="HHA Certification"
                  className={`font-semibold    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${
                                  navColor && "customWhite"
                                } white   uppercase nav-text hover-underline-animation dark:text-gray-300`}
                >
                  HHA Certification
                </Link>
              </li>

              <li className="relative group font-semibold">
                {/* Resources Button */}
                <button
                  className={`dropdown-toggle font-semibold tracking-wide text-[#49465D] transition-colors duration-200  
      ${
        navColor ? "customWhite" : ""
      } uppercase nav-text hover-underline-animation dark:text-gray-300`}
                >
                  Resources
                </button>

                {/* Dropdown Menu */}
                <div
                  className="absolute left-0 top-full w-48 bg-white shadow-md border border-gray-200 rounded-md 
      dark:bg-slate-800 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
      transition-opacity duration-300 z-50"
                >
                  {/* Resources Links */}
                  <Link href="/resources">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Resources
                    </p>
                  </Link>

                  <Link href="/helpDesk">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Help Desk
                    </p>
                  </Link>

                  <Link href="/covid">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Covid-19
                    </p>
                  </Link>

                  <Link href="/faqs">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase hover:bg-gray-100 dark:hover:bg-gray-700">
                      FAQs
                    </p>
                  </Link>
                </div>
              </li>

              <li
                className="relative group font-semibold"
                style={{ listStyle: "none" }}
              >
                {/* Community Outreach Button */}
                <button
                  className={`dropdown-toggle font-semibold tracking-wide text-[#49465D] transition-colors duration-200  
      ${
        navColor ? "customWhite" : ""
      } uppercase nav-text hover-underline-animation dark:text-gray-300`}
                >
                  Community Outreach
                </button>

                {/* Dropdown Menu */}
                <div
                  className="absolute left-0 top-full w-[200px] bg-white shadow-md border border-gray-200 rounded-md 
      dark:bg-slate-800 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
      transition-opacity duration-300 z-50"
                >
                  {/* Community Outreach Links */}
                  {/* <Link href="/videos">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Video Gallery
                    </p>
                  </Link> */}

                  <Link href="/pastEvent">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Past Events
                    </p>
                  </Link>

                  <Link href="/UpcomingEvent">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Upcoming Events
                    </p>
                  </Link>

                  <Link href="/team">
                    <p className="px-6 py-3 text-gray-800 dark:text-gray-100 uppercase hover:bg-gray-100 dark:hover:bg-gray-700">
                      Team Members
                    </p>
                  </Link>
                </div>
              </li>

              <li style={{ listStyle: "none" }}>
                <Link
                  href="/blog"
                  aria-label="Blog"
                  title="Blog"
                  className={`font-semibold    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${
                                  navColor && "customWhite"
                                } white   uppercase nav-text hover-underline-animation dark:text-gray-300`}
                >
                  Blog
                </Link>
              </li>

              <li>
                <ToggleButton />
              </li>

              {/* <DropdownMenu
              user={user}
              isAdmin={isAdmin}
              isEditor={isEditor}
              navColor={navColor}
              handleLogOut={handleLogOut}
            /> */}
            </ul>

            <div className="lg:hidden">
              <div className="  transition duration-200 rounded focus:outline-none focus:shadow-outline z-50 absolute right-5 top-5 ">
                {/* <SideNav /> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default NavBar;
