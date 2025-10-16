"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Loading from "./shared/Loading";
import { Icon } from "@iconify/react"; // one library for system + brand icons

const GoogleTranslate = dynamic(
  () => import("@/components/nav/GoogleTranslate"),
  {
    suspense: true,
    ssr: false,
  }
);

// sanitize phone for tel: links
const digitsOnly = (s) => s.replace(/\D+/g, "");

const TopBar = () => {
  const pathname = usePathname();
  // Default contact info
  let phone = "516-367-2266";
  let email = "info@cottagehomecare.com";
  // Conditional override based on route
  if (pathname.includes("new-jersey")) {
    phone = "(201) 633-8481"; // NJ phone
    email = "nj@cottagehomecare.com"; // NJ email
  }
  if (pathname.includes("michigan")) {
    phone = "(347) 975-2525"; // NJ phone
    email = "michigan@cottagehomecare.com"; // NJ email
  } else if (pathname.includes("maryland")) {
    phone = "(667) 400-0648"; // MD phone
    email = "maryland@cottagehomecare.com"; // MD email
  }

  const telHref = `tel:+1${digitsOnly(phone)}`;
  const mailHref = `mailto:${email}`;

  return (
    <div className="dark:bg-slate-800 dark:from-transparent dark:via-transparent dark:to-transparent   bg-gradient-to-r from-[#00A6B2]/20 via-white to-[#00A6B2]/20 ">
      <div className="block w-[95%] mx-auto league-spartan font-semibold dark:text-gray-200">
        <div className="flex md:justify-center justify-between items-center">
          <div className="roboto px-4 md:px-8 py-3 lg:flex items-center lg:justify-between lg:w-[95%]">
            {/* Left: Phone + Email (desktop) */}
            <div className="lg:flex gap-8 hidden">
              <div className="flex gap-4 items-center md:text-lg topbar-text">
                <Icon
                  icon="lucide:phone"
                  className="lg:w-6 lg:h-6 w-4 h-4"
                  aria-hidden
                />
                <p>
                  Call{" "}
                  <a
                    href={telHref}
                    className="text-[#005f6b] dark:text-gray-100 font-semibold"
                    aria-label={`Call us at ${phone}`}
                  >
                    {phone}
                  </a>
                </p>
              </div>
              <div className="flex gap-4 items-center md:text-lg topbar-text">
                <Icon
                  icon="lucide:mail"
                  className="lg:w-6 lg:h-6 w-4 h-4"
                  aria-hidden
                />
                <p>
                  Email{" "}
                  <a
                    href={mailHref}
                    className="text-[#005f6b] dark:text-gray-100 font-semibold"
                    aria-label={`Email us at ${email}`}
                  >
                    {email}
                  </a>
                </p>
              </div>
            </div>

            {/* Right: quick actions + socials */}
            <div className="flex items-center gap-4 md:gap-5 md:text-lg font-medium text-[#005f6b]">
              {/* Mobile quick actions */}
              <a
                href={telHref}
                className="text-[#005f6b] lg:hidden md:text-2xl bg-hov2 dark:text-gray-300"
                aria-label={`Call us at ${phone}`}
              >
                <Icon icon="lucide:phone" className="w-4 lg:w-6 h-4 lg:h-6" />
              </a>
              <a
                href={mailHref}
                className="text-[#005f6b] md:text-2xl bg-hov2 lg:hidden dark:text-gray-300"
                aria-label={`Email us at ${email}`}
              >
                <Icon icon="lucide:mail" className="w-4 lg:w-6 h-4 lg:h-6" />
              </a>

              {/* Social icons */}
              <a
                href="https://www.facebook.com/cottageHC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our Facebook page"
              >
                <Icon
                  icon="simple-icons:facebook"
                  className="md:text-2xl bg-hov2 dark:text-gray-300 topbar-icon w-4 lg:w-6 h-4 lg:h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/cottage.homecare/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
              >
                <Icon
                  icon="simple-icons:instagram"
                  className="md:text-2xl bg-hov2 dark:text-gray-300 topbar-icon w-4 lg:w-6 h-4 lg:h-6"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter (X) profile"
              >
                <Icon
                  icon="simple-icons:x"
                  className="md:text-2xl bg-hov2 dark:text-gray-300 topbar-icon w-4 lg:w-6 h-4 lg:h-6"
                />
              </a>
              <a
                href="https://www.tiktok.com/@cottage.homecare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TikTok profile"
              >
                <Icon
                  icon="simple-icons:tiktok"
                  className="md:text-2xl bg-hov2 dark:text-gray-300 topbar-icon w-4 lg:w-6 h-4 lg:h-6"
                />
              </a>
            </div>
          </div>

          {/* Lazy Load Google Translate */}
          <div className="md:w-[260px] w-[140px]">
            <Suspense fallback={<Loading />}>
              <GoogleTranslate />
            </Suspense>
          </div>
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-gray-200" />
    </div>
  );
};

export default TopBar;
