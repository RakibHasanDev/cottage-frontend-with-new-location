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

const title = "Resources - Cottage Home Care Services";
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
        <link rel="canonical" href="https://cottagehomecare.com/resources/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <main className="dark:bg-slate-600 min-h-screen">
        <h1 className="sr-only">
          Cottage Home Care Services – Forms, Timesheets & Internal Documents
        </h1>
        <h2 className="sr-only">
          Access Essential Resources, Timesheets, and Forms at Cottage Home Care
        </h2>
        <p className="sr-only">
          If you&apos;re pursuing a career as a Home Health Aide (HHA) in New
          York State, it&apos;s important to understand the essential tools,
          certifications, and opportunities available to you—especially if
          you&apos;re considering roles within the New York State Office for
          People With Developmental Disabilities (OPWDD). This guide will walk
          you through three key areas: HHA login, HHA online certification, and
          job opportunities with NYS OPWDD. HHA Login: Accessing Your Training
          and Employment Portals For HHAs in New York, various agencies and
          training platforms require secure HHA login access. Whether
          you&apos;re enrolled in a certification course or already employed
          with an agency, here are a few common uses for your login credentials:
          Training Portals: Access online lessons, exams, and certification
          status. Employee Dashboards: View work schedules, pay stubs, and HR
          updates. Compliance Records: Track your completed training hours and
          certifications. Be sure to always use official links from your agency
          or training provider. If you&apos;re unsure about the login portal you
          need, contact your training coordinator or HR department. HHA Online
          Certification in New York State Getting certified as a Home Health
          Aide in New York is a crucial step. Thanks to recent updates and
          remote learning options, you can now pursue your HHA online
          certification more conveniently. Requirements: Completion of a 75-hour
          training program approved by the New York State Department of Health.
          Combination of classroom instruction and supervised practical
          training. Successful demonstration of core skills in patient care and
          communication. Many training programs now offer hybrid or fully online
          options for the classroom portion, allowing greater flexibility for
          those balancing work or family responsibilities. Where to Find Online
          HHA Programs: Local home care agencies (often offer free training with
          job placement) Accredited vocational schools and community colleges
          NYS Department of Health listings of approved providers New York State
          OPWDD Jobs for HHAs The New York State Office for People With
          Developmental Disabilities (OPWDD) offers fulfilling career paths for
          certified HHAs who want to support individuals with developmental
          disabilities. Why Work with OPWDD? Stable, state-supported employment
          Opportunities to make a meaningful impact Excellent benefits and
          pension options Career advancement through state-sponsored training
          Common Roles Include: Direct Support Professional (DSP): Assisting
          individuals with daily living skills. Residential Habilitation Aide:
          Working in group home settings. Community Support Staff: Helping
          individuals live independently and participate in community life. To
          qualify for OPWDD jobs, an active HHA certification, background check,
          and in many cases, a valid NYS driver’s license are required.
        </p>

        <Suspense fallback={<SkeletonLoading />}>
          <LazyBanner />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <ResourcesCard />
        </Suspense>
      </main>
    </>
  );
};

export default Resources;
