"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import ToggleButton from "./shared/ToogleButton";
import SideNav from "./nav/SideNav";
import { AuthContext } from "@/context/AuthProvider";
import DropdownMenu from "./nav/DropdownMenu";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/context/ThemeContext";

const NavBar = () => {
  const [customShadow, setCustomShadow] = useState("shadow-none");
  const [isSticky, setIsSticky] = useState(false);
  const [navColor] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ Fix: Define mounted state
  const { user, logOut } = useContext(AuthContext);

  const pathname = usePathname(); // ✅ always at top level

  let companyName = "Cottage Home Care Services";
  let companyLogo =
    "https://res.cloudinary.com/di3wwp9s0/image/upload/v1757434710/cottage_logo/cottage-home-care-logo_n8fskh.webp";
  if (pathname?.includes("new-jersey")) {
    companyName = "Cottage Homecare NJ, LLC";
    companyLogo =
      "https://res.cloudinary.com/di3wwp9s0/image/upload/v1757435478/cottage_logo/new_jersey_logo_a1pexa.webp";
  } else if (pathname?.includes("maryland")) {
    companyName = "Cottage Home Care, Maryland, LLC";
    companyLogo =
      "https://res.cloudinary.com/di3wwp9s0/image/upload/v1757434710/cottage_logo/cottage-home-care-logo_n8fskh.webp";
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

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
        className={`  ${navbarClasses} md:z-50 ${customShadow} 
bg-gradient-to-r from-[#00A6B2]/20 via-white to-[#00A6B2]/20 
dark:bg-slate-800 dark:from-transparent dark:via-transparent dark:to-transparent`}
      >
        <div
          className="px-4 pt-2 pb-4 md:mx-auto nav-size ml-auto roboto-regular"
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
                    src={companyLogo}
                    className="nav-img shadow-2xl p-2 border-2 border-[#005f6b] dark:border-[#00b3ca] rounded-full dark:bg-gray-300"
                    alt="cottage-home-care-logo"
                    width="100" // Set an appropriate width
                    height="100" // Set an appropriate height
                  />
                  <h5
                    className={` ml-4  dark:text-gray-100 text-[#005f6b]  nav-font league-spartan font-bold`}
                  >
                    <span className="text-shadow ">{companyName}</span>
                    <hr className="border-[1px] -mt-0.5 border-[#005f6b] dark:border-gray-100 md:w-full w-[85%]" />
                    <p className="font-semibold top-title md:text-center text-[#49465D] tracking-tighter md:tracking-normal dark:text-gray-300 md:ml-0 ml-2 ">
                      THE RIGHT HOME CARE FOR YOU
                    </p>
                  </h5>
                </div>

                <div className="header-container flex items-center md:hidden  ">
                  <Image
                    src={companyLogo}
                    className="logo shadow-2xl border-2 border-[#00A6B2] rounded-full dark:bg-gray-300"
                    alt="Cottage Home Care Services Logo"
                    width="70"
                    height="70"
                  />

                  <div className="text-container ml-3 league-spartan">
                    <h5 className="title text-[#00A6B2] tracking-wide font-bold uppercase">
                      {companyName.slice(0, 12)}
                      {<br />}
                      {companyName.slice(12)}
                    </h5>

                    <p className="  dark:border-gray-100 mb-[1px] border-t-[1px] border-gray-700" />
                    <p className="tagline  font-semibold text-[#49465D] dark:text-gray-100 mt-[1px]">
                      THE RIGHT HOME CARE FOR YOU
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <nav aria-label="Primary navigation">
              <ul className="nav-list lg:flex items-center hidden lg:space-x-4 xl:space-x-4 2xl:space-x-4.5">
                {/* Home */}
                <li>
                  <Link
                    href="/"
                    aria-label="Home"
                    title="Home"
                    className={`font-semibold tracking-wide text-[#49465D] transition-colors duration-200 ${
                      navColor && "customWhite"
                    } uppercase nav-text hover-underline-animation dark:text-gray-300`}
                  >
                    Home
                  </Link>
                </li>

                {/* Select Your State */}
                <li className="relative group font-semibold focus-within:block">
                  <button
                    type="button"
                    className={`group inline-flex items-center gap-1 font-semibold tracking-wide text-[#49465D] transition-colors duration-200 ${
                      navColor ? "customWhite" : ""
                    } uppercase nav-text hover-underline-animation dark:text-gray-300`}
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-controls="nav-state-menu"
                  >
                    Select Your State
                    <Icon
                      icon="heroicons-outline:chevron-down"
                      className="w-5 h-5 text-[#49465D] dark:text-gray-300 transition-transform duration-200 group-hover:rotate-180 inline"
                    />
                  </button>

                  <ul
                    id="nav-state-menu"
                    role="menu"
                    className="absolute left-0 top-full w-[200px] bg-white shadow-md border border-gray-200 rounded-md
                   dark:bg-slate-800 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                   focus-within:opacity-100 focus-within:visible transition-opacity duration-300 z-50"
                  >
                    <li role="none">
                      <Link
                        role="menuitem"
                        href="/service-areas"
                        className="block px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Services Areas
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        role="menuitem"
                        href="/"
                        className="block px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        New York City
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        role="menuitem"
                        href="/new-jersey"
                        className="block px-6 py-3 text-gray-800 dark:text-gray-100 uppercase hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        New Jersey
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Services */}
                <li className="relative group font-semibold focus-within:block">
                  <button
                    type="button"
                    className={`group inline-flex items-center gap-1 font-semibold tracking-wide text-[#49465D] transition-colors duration-200 ${
                      navColor ? "customWhite" : ""
                    } uppercase nav-text hover-underline-animation dark:text-gray-300`}
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-controls="nav-services-menu"
                  >
                    Services
                    <Icon
                      icon="heroicons-outline:chevron-down"
                      className="w-5 h-5 text-[#49465D] dark:text-gray-300 transition-transform duration-200 group-hover:rotate-180 inline"
                    />
                  </button>

                  <ul
                    id="nav-services-menu"
                    role="menu"
                    className="absolute left-0 top-full w-48 bg-white shadow-md border border-gray-200 rounded-md
                   dark:bg-slate-800 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                   focus-within:opacity-100 focus-within:visible transition-opacity duration-300 z-50 font-semibold"
                  >
                    <li role="none">
                      <Link
                        role="menuitem"
                        href="/nhtd"
                        className="block px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        NHTD
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        role="menuitem"
                        href="/hha"
                        className="block px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        HHA/PCA
                      </Link>
                    </li>
                    <li role="none">
                      <Link
                        role="menuitem"
                        href="/private-pay-home-care"
                        className="block px-6 py-3 text-gray-800 dark:text-gray-100 uppercase hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Private Pay
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Contact */}
                <li>
                  <Link
                    href="/contact"
                    aria-label="Contact Us"
                    title="Contact Us"
                    className={`font-semibold tracking-wide text-[#49465D] transition-colors duration-200 ${
                      navColor && "customWhite"
                    } uppercase nav-text hover-underline-animation dark:text-gray-300`}
                  >
                    Contact Us
                  </Link>
                </li>

                {/* HHA Certification */}
                <li>
                  <Link
                    href="/hha-certification"
                    aria-label="HHA Certification"
                    title="HHA Certification"
                    className={`font-semibold tracking-wide text-[#49465D] transition-colors duration-200 ${
                      navColor && "customWhite"
                    } uppercase nav-text hover-underline-animation dark:text-gray-300`}
                  >
                    HHA Certification
                  </Link>
                </li>

                {/* Resources */}
                <li className="relative group font-semibold focus-within:block">
                  <button
                    type="button"
                    className={`group inline-flex items-center gap-1 font-semibold tracking-wide text-[#49465D] transition-colors duration-200 ${
                      navColor ? "customWhite" : ""
                    } uppercase nav-text hover-underline-animation dark:text-gray-300`}
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-controls="nav-resources-menu"
                  >
                    Resources
                    <Icon
                      icon="heroicons-outline:chevron-down"
                      className="w-5 h-5 text-[#49465D] dark:text-gray-300 transition-transform duration-200 group-hover:rotate-180 inline"
                    />
                  </button>

                  <ul
                    id="nav-resources-menu"
                    role="menu"
                    className="absolute left-0 top-full w-44 bg-white shadow-md border border-gray-200 rounded-md
                   dark:bg-slate-800 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                   focus-within:opacity-100 focus-within:visible transition-opacity duration-300 z-50"
                  >
                    {[
                      { href: "/resources", label: "Resources" },
                      { href: "/blog", label: "Blog" },
                      { href: "/help-desk", label: "Help Desk" },
                      { href: "/covid", label: "Covid-19" },
                      { href: "/faqs", label: "FAQs" },
                      { href: "/past-event", label: "Past Events" },
                      { href: "/team", label: "Team Members" },
                    ].map((it) => (
                      <li key={it.href} role="none">
                        <Link
                          role="menuitem"
                          href={it.href}
                          className="block px-6 py-3 text-gray-800 dark:text-gray-100 uppercase border-b last:border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Blog */}
                <li>
                  <Link
                    href="/blog"
                    aria-label="Blog"
                    title="Blog"
                    className={`font-semibold tracking-wide text-[#49465D] transition-colors duration-200 ${
                      navColor && "customWhite"
                    } uppercase nav-text hover-underline-animation dark:text-gray-300`}
                  >
                    Blog
                  </Link>
                </li>

                {/* Theme toggle + user menu must be inside <li> */}
                <li>
                  <ToggleButton />
                </li>
                <li>
                  <DropdownMenu user={user} handleLogOut={handleLogOut} />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden">
              <div className="  transition duration-200 rounded focus:outline-none focus:shadow-outline z-50 absolute right-5 top-5 ">
                <SideNav />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default NavBar;
