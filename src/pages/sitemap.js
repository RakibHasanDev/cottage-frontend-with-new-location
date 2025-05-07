import Head from "next/head";
import Link from "next/link";
import React from "react";

const Sitemap = () => {
  return (
    <>
      <Head>
        <title>Full Sitemap | Cottage Home Care Services New York</title>

        <meta
          name="description"
          content="Navigate Cottage Home Care's complete website sitemap, including services, resources, community pages, legal policies, and more."
        />
        <meta
          name="keywords"
          content="sitemap, Cottage Home Care, services, resources, community outreach, terms, privacy, CDPAP, HHA"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/sitemap/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/sitemap/"
          hreflang="x-default"
        />
        <link rel="canonical" href="https://cottagehomecare.com/sitemap/" />
      </Head>

      <section className="bg-[#F7FAFC] py-10 px-4 text-center dark:bg-slate-600">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00A6B2]">
          Cottage Home Care Sitemap
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm dark:text-gray-100">
          Navigate our website with ease. Find all our service pages, resources,
          and community outreach initiatives in one place.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-start">
        <div>
          <h2 className="text-xl font-semibold text-[#00A6B2] mb-3">
            Home Page
          </h2>
          <ul className="space-y-1 text-gray-800 dark:text-gray-100">
            <li>
              <Link href="/" className="hover:text-[#00A6B2]">
                Homepage
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold text-[#00A6B2] mb-3">Services</p>
          <ul className="space-y-1 text-gray-800 dark:text-gray-100">
            <li>
              <Link href="/nhtd" className="hover:text-[#00A6B2]">
                NHTD
              </Link>
            </li>
            <li>
              <Link href="/hha" className="hover:text-[#00A6B2]">
                HHA/PCA
              </Link>
            </li>
            <li>
              <Link
                href="/personal-pay-service"
                className="hover:text-[#00A6B2]"
              >
                Private Pay
              </Link>
            </li>
            <li>
              <Link href="/cdpap" className="hover:text-[#00A6B2]">
                CDPAP
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-semibold text-[#00A6B2] mb-3">Resources</p>
          <ul className="space-y-1 text-gray-800 dark:text-gray-100">
            <li>
              <Link href="/resources" className="hover:text-[#00A6B2]">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/help-desk" className="hover:text-[#00A6B2]">
                Help Desk
              </Link>
            </li>
            <li>
              <Link href="/covid" className="hover:text-[#00A6B2]">
                COVID-19
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-[#00A6B2]">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-semibold text-[#00A6B2] mb-3">
            Community Outreach
          </p>
          <ul className="space-y-1 text-gray-800 dark:text-gray-100">
            <li>
              <Link href="/past-event" className="hover:text-[#00A6B2]">
                Past Events
              </Link>
            </li>
            <li>
              <Link href="/upcoming-event" className="hover:text-[#00A6B2]">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-[#00A6B2]">
                Team Members
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-semibold text-[#00A6B2] mb-3">
            Other Pages
          </p>
          <ul className="space-y-1 text-gray-800 dark:text-gray-100">
            <li>
              <Link href="/blog" className="hover:text-[#00A6B2]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#00A6B2]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/hha-certification" className="hover:text-[#00A6B2]">
                HHA Certification
              </Link>
            </li>
            <li>
              <Link href="/clock-in-out" className="hover:text-[#00A6B2]">
                Clock In/Out
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-semibold text-[#00A6B2] mb-3">Legal</p>
          <ul className="space-y-1 text-gray-800 dark:text-gray-100">
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-[#00A6B2]"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-[#00A6B2]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/mission-vision" className="hover:text-[#00A6B2]">
                Mission & Vision
              </Link>
            </li>
            <li>
              <Link href="/values" className="hover:text-[#00A6B2]">
                Values
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-[#00A6B2]">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
