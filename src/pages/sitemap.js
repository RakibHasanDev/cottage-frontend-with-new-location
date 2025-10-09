import Head from "next/head";
import Link from "next/link";
import React from "react";

/** ---- Static list of blog post URLs (from your XML) ---- */
const BLOG_POSTS = [
  "/blog/compassionate-home-care-in-nyc-with-cottage-home-care-services/",
  "/blog/hhapca-services-compassionate-home-care-with-cottage-home-care-services/",
  "/blog/nhtd-program-personalized-home-care-with-cottage-home-care-services/",
  "/blog/five-tips-for-a-restful-night/",
  "/blog/nhtd-medicaid-waiver-eligibility-services-and-benefits-for-independent-living/",
  "/blog/world-health-day-2025/",
  "/blog/cottage-home-care-services-expands-to-jersey-city/",
  "/blog/what-does-the-medical-abbreviation-hha-represent-today/",
  "/blog/free-hha-training-in-brooklyn-ny-start-your-career-today/",
  "/blog/free-hha-training-near-me-paid-training-might-be-a-smarter/",
  "/blog/above-and-beyond-trusted-home-care-services-near-you/",
  "/blog/find-top-home-health-care-services-jobs-hiring-near-you/",
  "/blog/urgent-care-that-takes-medicaid-or-cottage-home-care-services/",
  "/blog/understanding-the-positive-outcomes-medicaid-cuts-vote-today/",
  "/blog/how-can-medicaid-take-your-home-protect-your-assets-today/",
  "/blog/personal-care-home-services-by-cottage-home-care-services/",
  "/blog/top-medical-assistant-jobs-near-you-or-apply-today/",
  "/blog/empowering-caregivers-the-role-of-caregiver-connect/",
  "/blog/caregiver-certification-advance-your-career-and-care/",
  "/blog/latest-pca-job-description-25-or-cottage-home-care-services/",
  "/blog/free-pca-training-nyc-why-paid-might-be-the-smarter-bet/",
  "/blog/get-medical-pedicure-near-me-and-know-why-should-use-this/",
  "/blog/find-urgent-care-that-accepts-medicaid-or-affordable-care/",
  "/blog/therapists-accepting-medicaid-or-quality-care-without-hassele/",
  "/blog/find-medical-assistant-jobs-near-me-now-hiring/",
  "/blog/how-to-access-hha-exchange-login-a-step-by-step-guide/",
  "/blog/how-to-get-pca-certification-becoming-a-personal-care-aide/",
  "/blog/find-pca-jobs-near-me-local-personal-care-aide-positions/",
  "/blog/top-reasons-why-cottage-is-the-preferred-home-health-care/",
  "/blog/what-is-a-pca-in-healthcare-role-duties-and-how-to-becomeone/",
  "/blog/top-hha-jobs-career-opportunities-salary-and-training/",
  "/blog/get-free-hha-training-in-2-weeks-local-programs-near-you/",
  "/blog/how-to-enroll-in-ppl-cdpap-in-new-york-caregiver-guide/",
  "/blog/learn-about-private-pay-home-care-rates/",
  "/blog/best-home-care-services-how-to-choose-the-right-care/",
  "/blog/ppl-cdpap-program-home-care-ny/",
  "/blog/ppl-cdpap-home-care-benefits-alternatives/",
  "/blog/private-pay-homecarethe-ultimate-personalized-care-solution/",
  "/blog/after-hospital-care-new-york/",
  "/blog/pca-vs-hha-a-comprehensive-guide-to-home-care-careers/",
  "/blog/best-in-home-care-new-york/",
  "/blog/child-mental-health-opwdd-home-care-ny/",
  "/blog/nhtd-waiver-help-independent-living-ny/",
  "/blog/top-personal-care-homes-ny-and-nj/",
  "/blog/home-care-services-in-jersey-city/",
  "/blog/disability-home-care-opwdd-services-ny/",
  "/blog/types-of-disabilities-a-comprehensive-guide-to-opwdd-service/",
  "/blog/top-home-care-services-new-york/",
  "/blog/learn-why-benefits-of-home-care-for-loved-ones/",
  "/blog/home-care-vs-nursing-home-best-choice-for-loved-ones/",
  "/blog/info-about-in-home-care-for-special-needs-adults/",
  "/blog/7-reasons-families-in-queens-trust-cottage-homecare-services/",
  "/blog/know-home-care-service-employment-career-guide/",
  "/blog/pca-and-cna-difference/",
  "/blog/caregiver-certification/",
  "/blog/pca-certification-training-ny/",
  "/blog/caregiver-jobs-training/",
  "/blog/best-home-care-agency-queens/",
  "/blog/group-homes-new-york-opwdd-care/",
  "/blog/how-to-become-a-pca/",
  "/blog/trends-in-home-care-new-york/",
  "/blog/live-in-caregiver-guide/",
  "/blog/best-home-care-new-york/",
  "/blog/new-jersey-home-care-jobs/",
  "/blog/best-home-care-new-jersey-private-pay-caregiver-services/",
  "/blog/queens-home-care-services/",
  "/blog/caregiver-jobs-in-maryland/",
  "/blog/home-care-agencies-bronx/",
  "/blog/home-care-albany-ny/",
  "/blog/daily-needs-elderly-care-checklist/",
  "/blog/non-medical-home-care-agency-guide/",
  "/blog/why-is-home-care-important/",
  "/blog/care-packages-for-elderly-at-home/",
  "/blog/adult-day-care-near-me/",
  "/blog/caregiver-agency-jobs-new-jersey/",
  "/blog/home-care-services-maryland/",
  "/blog/personalized-home-care-queens/",
  "/blog/home-health-care-services-jobs-vs-in-home-care-services-jobs/",
  "/blog/care-homes-for-stroke-patients/",
  "/blog/companion-care-for-seniors-new-york/",
  "/blog/benefits-of-home-care/",
  "/blog/direct-support-professional-vs-caregiver/",
  "/blog/home-care-for-seniors-who-speak-different-languages/",
  "/blog/home-care-after-hospital/",
  "/blog/private-pay-home-care-guide/",
  "/blog/personalized-homecare-new-york/",
  "/blog/difference-between-cna-and-pca/",
  "/blog/caregiver-daily-checklist/",
  "/blog/caregiver-vs-cna-differences/",
  "/blog/whats-a-pca-job/",
  "/blog/checklist-for-elderly-living-alone/",
  "/blog/home-health-aide-bronx/",
  "/blog/is-a-pca-the-same-as-a-cna/",
  "/blog/best-care-bronx-ny/",
  "/blog/homecare-maryland/",
  "/blog/urgent-care-that-takes-medicaid-2025-guide/",
  "/blog/brooklyn-home-care-hha-employment/",
  "/blog/home-health-aide-queens-ny/",
  "/blog/americas-best-homecare/",
  "/blog/medic-home-care-guide-usa/",
  "/blog/home-care-qualifications-guide/",
  "/blog/home-care-in-maryland/",
  "/blog/homecare-services-queens-hicksville-albany-bronx-md-nj/",
  "/blog/best-home-care-agency-new-york-city/",
  "/blog/private-caregiver-near-me/",
  "/blog/daily-reminders-for-dementia-patients/",
  "/blog/bronx-home-health-aide-services/",
  "/blog/best-home-care-new-jersey/",
  "/blog/home-care-new-jersey/",
  "/blog/home-care-agency-in-new-jersey/",
  "/blog/best-home-health-care-in-new-jersey/",
  "/blog/best-home-care-in-new-jersey/",
  "/blog/homecare-in-new-jersey/",
  "/blog/best-home-care-nj/",
  "/blog/home-care-nj/",
  "/blog/best-home-care-agency-in-new-jersey/",
  "/blog/home-health-care-nj/",
  "/blog/cost-of-nursing-home-care-in-new-jersey/",
  "/blog/best-home-health-care-nj-2025/",
  "/blog/homecare-agency-newjersey/",
  "/blog/new-jersey-home-care-agency/",
  "/blog/cost-of-nursing-home-care-in-newjersey/",
  "/blog/in-new-jersey-home-care-agency/",
  "/blog/home-care-agency-new-jersey/",
  "/blog/home-health-nj/",
  "/blog/home-care-agencies-in-maryland/",
];

/** Title from slug */
function prettifySlug(path) {
  var seg = (path || "").split("/").filter(Boolean);
  var last = seg[seg.length - 1] || "";
  return decodeURIComponent(last.replace(/[-_]+/g, " ")).replace(
    /\b[a-z]/g,
    function (m) {
      return m.toUpperCase();
    }
  );
}

const Sitemap = () => {
  return (
    <>
      <Head>
        <title>Full Sitemap | Cottage Home Care Services New York</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

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
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/sitemap/"
          hrefLang="x-default"
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

      {/* Core sections (unchanged) */}
      <div className="lg:max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-start">
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
          <h3 className="text-xl font-semibold text-[#00A6B2] mb-3">
            About Company
          </h3>
          <ul className="space-y-1 text-gray-800 dark:text-gray-100">
            <li>
              <Link href="/about-us" className="hover:text-[#00A6B2]">
                About us
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
                href="/private-pay-home-care"
                className="hover:text-[#00A6B2]"
              >
                Private Pay
              </Link>
            </li>
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <p className="text-xl font-semibold text-[#00A6B2] mb-3">
            Service Areas
          </p>
          <ul className="space-y-1 text-gray-800 dark:text-gray-100">
            <li>
              <Link href="/service-areas" className="hover:text-[#00A6B2]">
                All Service Areas
              </Link>
            </li>
            <li>
              <Link href="/new-jersey" className="hover:text-[#00A6B2]">
                New Jersey
              </Link>
            </li>
            <li>
              <Link href="/maryland" className="hover:text-[#00A6B2]">
                Maryland
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

      {/* Blog section: all /blog/... statically listed */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h4 className="text-2xl font-semibold text-[#00A6B2] mb-4 text-center md:text-left">
          Blog
        </h4>
        {BLOG_POSTS.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-100">
            No blog posts listed.
          </p>
        ) : (
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-800 dark:text-gray-100">
            {BLOG_POSTS.map(function (path) {
              return (
                <li key={path}>
                  <Link href={path} className="hover:text-[#00A6B2]">
                    {prettifySlug(path)}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Hidden SEO copy (unchanged) */}
      <div className="seo-text-hidden">
        {/* your existing paragraphs remain here */}
      </div>
    </>
  );
};

export default Sitemap;
