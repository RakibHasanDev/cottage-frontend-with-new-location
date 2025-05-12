import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense } from "react";

const LazyBanner = dynamic(() => import("@/components/Resources/HeroSection"), {
  suspense: true,
  ssr: false,
});

const ResourcesCard = dynamic(
  () => import("@/components/Resources/ResourcesCard"),
  {
    suspense: true,
    ssr: false,
  }
);

const title = "Caregiver Resources | Cottage Home Care Services Inc";
const description =
  "Access timesheets, DOH guidelines, time-off forms, deposit and physical forms, and more at Cottage Home Care to support staff and compliance.";
const keywords =
  "Cottage Home Care resources, timesheet downloads, DOH guidelines, TIME-OFF form, direct deposit authorization, physical examination form, daily timesheet, celestial timesheet, healthcare compliance, employee support tools";

const schemaData = [
  // ✅ Organization Schema
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cottage Home Care Services",
    url: "https://cottagehomecare.com",
    logo: "https://cottagehomecare.com/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1516-367-2266",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: [
          "English",
          "Spanish",
          "Bengali",
          "Punjabi",
          "Gujarati",
        ],
      },
    ],
    sameAs: [
      "https://www.facebook.com/cottageHC",
      "https://www.linkedin.com/company/cottage-homecare/",
    ],
  },

  // ✅ WebPage Schema (Resources Page)
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: "https://cottagehomecare.com/resources",
    description: description,
    isPartOf: {
      "@type": "WebSite",
      url: "https://cottagehomecare.com",
    },
  },

  // ✅ Breadcrumb Schema
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cottagehomecare.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://cottagehomecare.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "NHTD",
        item: "https://cottagehomecare.com/nhtd",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "HHA/PCA",
        item: "https://cottagehomecare.com/hha",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Private Pay",
        item: "https://cottagehomecare.com/personal-pay-service",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "CDPAP",
        item: "https://cottagehomecare.com/cdpap",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Contact Us",
        item: "https://cottagehomecare.com/contact",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "HHA Certification",
        item: "https://cottagehomecare.com/hha-certification",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Resources",
        item: "https://cottagehomecare.com/resources",
      },
    ],
  },

  // ✅ FAQ Schema (Resources Page)
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What resources are available at Cottage Home Care Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a variety of resources including timesheets, Department of Health (DOH) guidelines, TIME-OFF forms, Direct Deposit Authorization forms, Physical Examination forms, Daily Timesheets, and Celestial Timesheets.",
        },
      },
      {
        "@type": "Question",
        name: "How can I download timesheets and forms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can download timesheets and forms directly from our Resources page. Simply click on the form you need to access the downloadable version.",
        },
      },
      {
        "@type": "Question",
        name: "Who can I contact for help with resource forms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you need assistance with resource forms, you can reach our customer service team at +1-516-367-2266 or email us at info@cottagehomecare.com.",
        },
      },
    ],
  },
];

const Resources = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://cottagehomecare.com/resources/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/logo.png"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/resources/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/resources/"
          hreflang="x-default"
        />
        <link rel="canonical" href="https://cottagehomecare.com/resources/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <main className="dark:bg-slate-600 min-h-screen">
        <h1 className="seo-text-hidden ">
          Cottage Home Care Services – Forms, Timesheets & Internal Documents
        </h1>
        <h2 className="seo-text-hidden ">
          Access Essential Resources, Timesheets, and Forms at Cottage Home Care
        </h2>
        <div className="seo-text-hidden ">
          <p>
            If you&apos;re pursuing a career as a Home Health Aide (HHA) in New
            York State, it&apos;s important to understand the essential tools,
            certifications, and opportunities available to you—especially if
            you&apos;re considering roles within the New York State Office for
            People With Developmental Disabilities (OPWDD). This guide will walk
            you through three key areas: HHA login, HHA online certification,
            and job opportunities with NYS OPWDD.
          </p>

          <h3>HHA Login: Accessing Your Training and Employment Portals</h3>
          <p>
            For HHAs in New York, various agencies and training platforms
            require secure HHA login access. Whether you&apos;re enrolled in a
            certification course or already employed with an agency, here are a
            few common uses for your login credentials:
          </p>
          <ul>
            <li>
              <strong>Training Portals:</strong> Access online lessons, exams,
              and certification status.
            </li>
            <li>
              <strong>Employee Dashboards:</strong> View work schedules, pay
              stubs, and HR updates.
            </li>
            <li>
              <strong>Compliance Records:</strong> Track your completed training
              hours and certifications.
            </li>
          </ul>
          <p>
            Be sure to always use official links from your agency or training
            provider. If you&apos;re unsure about the login portal you need,
            contact your training coordinator or HR department.
          </p>

          <h3>HHA Online Certification in New York State</h3>
          <p>
            Getting certified as a Home Health Aide in New York is a crucial
            step. Thanks to recent updates and remote learning options, you can
            now pursue your HHA online certification more conveniently.
          </p>
          <p>
            <strong>Requirements:</strong>
          </p>
          <ul>
            <li>
              Completion of a <strong>75-hour training program</strong> approved
              by the New York State Department of Health.
            </li>
            <li>
              Combination of{" "}
              <strong>
                classroom instruction and supervised practical training.
              </strong>
            </li>
            <li>
              Successful demonstration of{" "}
              <strong>core skills in patient care and communication.</strong>
            </li>
          </ul>
          <p>
            Many training programs now offer hybrid or fully online options for
            the classroom portion, allowing greater flexibility for those
            balancing work or family responsibilities.
          </p>
          <p>
            <strong>Where to Find Online HHA Programs:</strong>
          </p>
          <ul>
            <li>
              Local home care agencies (often offer free training with job
              placement)
            </li>
            <li>Accredited vocational schools and community colleges</li>
            <li>NYS Department of Health listings of approved providers</li>
          </ul>

          <h3>New York State OPWDD Jobs for HHAs</h3>
          <p>
            The New York State Office for People With Developmental Disabilities
            (OPWDD) offers fulfilling career paths for certified HHAs who want
            to support individuals with developmental disabilities.
          </p>
          <p>
            <strong>Why Work with OPWDD?</strong>
          </p>
          <ul>
            <li>Stable, state-supported employment</li>
            <li>Opportunities to make a meaningful impact</li>
            <li>Excellent benefits and pension options</li>
            <li>Career advancement through state-sponsored training</li>
          </ul>

          <p>
            <strong>Common Roles Include:</strong>
          </p>
          <ul>
            <li>
              <strong>Direct Support Professional (DSP):</strong> Assisting
              individuals with daily living skills.
            </li>
            <li>
              <strong>Residential Habilitation Aide:</strong> Working in group
              home settings.
            </li>
            <li>
              <strong>Community Support Staff:</strong> Helping individuals live
              independently and participate in community life.
            </li>
          </ul>
          <p>
            To qualify for OPWDD jobs, an active HHA certification, background
            check, and in many cases, a valid NYS driver’s license are required.
          </p>
        </div>

        <Suspense fallback={<SkeletonLoading />}>
          <LazyBanner />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <ResourcesCard />
        </Suspense>

        {/* <div className="lg:grid grid-cols-7">
          <div className="lg:col-span-5">
            <Suspense fallback={<SkeletonLoading />}>
              <ResourcesCard />
            </Suspense>
          </div>

          <div className="w-[100%] h-full  mx-auto lg:col-span-2 bg-[#3A3A3A] ">
            <iframe
              src="https://online.pubhtml5.com/jmohp/exol/"
              seamless
              scrolling="no"
              frameBorder="0"
              allowTransparency="true"
              allowFullScreen
              className="w-[100%] h-[80vh] lg:h-[80vh] mx-auto bg-white "
            />
            <h1 className="text-center 2xl:text-lg text-white font-semibold  lg:-mt-[65vh]">
              HHA Handbook – Cottage Home Care Services NJ
            </h1>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default Resources;
