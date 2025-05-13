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

        {/* Canonical & Alternate URLs */}
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

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Full Sitemap | Cottage Home Care Services New York"
        />
        <meta
          property="og:description"
          content="Explore Cottage Home Care Services' full sitemap and easily navigate to our services, resources, events, team, and legal pages."
        />
        <meta
          property="og:url"
          content="https://cottagehomecare.com/sitemap/"
        />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/assets/cottage-home-care-logo.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cottage Home Care Services" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cottagecareny" />
        <meta name="twitter:creator" content="@cottagecareny" />
        <meta
          name="twitter:title"
          content="Full Sitemap | Cottage Home Care Services New York"
        />
        <meta
          name="twitter:description"
          content="Quickly navigate Cottage Home Care Services' full website using our organized sitemap."
        />
        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/assets/cottage-home-care-logo.webp"
        />
      </Head>

      <section className="bg-[#F7FAFC] py-10 px-4 text-center dark:bg-slate-600">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00A6B2]">
          Cottage Home Care Sitemap
        </h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto text-base dark:text-gray-100">
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

        <div className="seo-text-hidden">
          <p>
            Welcome to the official sitemap of Cottage Home Care Services, your
            trusted home care agency proudly serving New York City, Nassau
            County, Suffolk County, Westchester, and Albany. This sitemap
            provides easy access to every major page on our website, ensuring
            visitors and search engines can quickly navigate our core services,
            resources, and legal policies. Whether you&apos;re looking for our
            CDPAP program, HHA/PCA services, NHTD waiver, or Private Pay care
            options, our sitemap helps you find the information you need in
            seconds. We also provide community-based programs, past and upcoming
            event highlights, and support for caregivers through our help desk
            and resource pages.
          </p>

          <p>
            Cottage Home Care Services is committed to delivering compassionate
            and culturally aligned care to diverse communities, including
            Bengali, Spanish, Punjabi, Jamaican, and Guyanese families. Our
            sitemap includes links to essential service pages such as CDPAP
            (Consumer Directed Personal Assistance Program), where loved ones
            can be hired and paid as caregivers, and HHA/PCA support for seniors
            needing help with daily living activities like bathing, dressing,
            and medication reminders. You’ll also find our Private Pay page for
            families seeking flexible, self-funded care, and our NHTD program
            information designed for those transitioning from nursing homes into
            the community.
          </p>

          <p>
            In addition to care services, we offer valuable resources such as
            COVID-19 safety updates, FAQs, forms, timesheets, and caregiver
            support tools. Our sitemap also directs you to community outreach
            pages featuring Past Events, Upcoming Events, and our dedicated Team
            Members section, highlighting the people behind our mission. We keep
            families and caregivers informed through our regularly updated blog
            and provide quick access to Contact Us, HHA Certification, and Clock
            In/Out pages for both clients and staff.
          </p>

          <p>
            Legal compliance and transparency are central to our operations. Use
            this sitemap to explore pages like our Terms and Conditions, Privacy
            Policy, Disclaimer, Mission & Vision, and Core Values. Whether
            you&apos;re a new visitor exploring our site or a returning user
            looking for specific information, our sitemap ensures a smooth and
            organized browsing experience. We are constantly updating our site
            to reflect the latest offerings, policies, and service areas.
          </p>

          <p>
            Thank you for choosing Cottage Home Care Services. If you need
            additional help navigating our website or would like to speak with a
            representative, please contact us at{" "}
            <a href="mailto:info@cottagehomecare.com">
              info@cottagehomecare.com
            </a>{" "}
            or call <a href="tel:516-367-2266">516-367-2266</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
