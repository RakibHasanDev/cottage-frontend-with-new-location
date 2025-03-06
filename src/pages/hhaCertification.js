import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const LazyBanner = dynamic(
  () => import("@/components/hhacertification/heroSection"),
  {
    suspense: true,
    ssr: false,
  }
);
const WelcomeMessage = dynamic(
  () => import("@/components/hhacertification/WelcomeMessage"),
  {
    suspense: true,
    ssr: false,
  }
);
const HhhaCertificationAbout = dynamic(
  () => import("@/components/hhacertification/HhhaCertificationAbout"),
  {
    suspense: true,
    ssr: false,
  }
);

const HhhaSchoolMap = dynamic(
  () => import("@/components/hhacertification/HhhaSchoolMap"),
  {
    suspense: true,
    ssr: false,
  }
);
const HhhaContactForm = dynamic(
  () => import("@/components/hhacertification/HhhaContactForm"),
  {
    suspense: true,
    ssr: false,
  }
);

const Placeholder = () => (
  <div>
    <SkeletonLoading />
  </div>
);

const HhhaCertification = () => {
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
        "https://x.com/cottagecanery",
        "https://www.linkedin.com/company/cottage-homecare/",
      ],
    },

    // ✅ WebSite Schema (Boosts Domain-wide SEO & Indexing)
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Cottage Home Care Services",
      url: "https://cottagehomecare.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://cottagehomecare.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    // ✅ WebPage Schema (For the HHA Certification Page)
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "HHA Certification Program | Cottage Home Care",
      url: "https://cottagehomecare.com/hhaCertification",
      description:
        "Get certified as a Home Health Aide (HHA) through Cottage Home Care. Learn how to enroll, eligibility requirements, and career opportunities in home care.",
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
          item: "https://cottagehomecare.com/personalPayService",
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
          item: "https://cottagehomecare.com/contacts",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "HHA Certification",
          item: "https://cottagehomecare.com/hhaCertification",
        },
      ],
    },

    // ✅ FAQ Schema for Better Search Visibility
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is HHA Certification?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HHA Certification qualifies individuals to work as Home Health Aides, providing personal care and support to patients in their homes.",
          },
        },
        {
          "@type": "Question",
          name: "How do I enroll in the HHA Certification program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can enroll by visiting our website's HHA Certification page, filling out the application form, or contacting us directly at +1-516-367-2266.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to complete the HHA Certification?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The HHA Certification program typically takes a few weeks to complete, depending on the course schedule and your availability.",
          },
        },
      ],
    },
  ];

  return (
    <div className="dark:bg-slate-600">
      <Suspense fallback={<Placeholder />}>
        <LazyBanner />
      </Suspense>
      <Suspense fallback={<Placeholder />}>
        <WelcomeMessage />
      </Suspense>
      <Suspense fallback={<Placeholder />}>
        <HhhaCertificationAbout></HhhaCertificationAbout>
      </Suspense>
      <Suspense fallback={<Placeholder />}>
        <HhhaSchoolMap></HhhaSchoolMap>
      </Suspense>
      <Suspense fallback={<Placeholder />}>
        <HhhaContactForm></HhhaContactForm>
      </Suspense>
    </div>
  );
};

export default HhhaCertification;
