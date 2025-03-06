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

const schemaData = [
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
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Resources | Cottage Home Care",
    url: "https://cottagehomecare.com/resources",
    description:
      "Access important resources at Cottage Home Care Services, including timesheets, DOH guidelines, Direct Deposit Authorization, and other essential forms.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://cottagehomecare.com",
    },
  },
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
      {
        "@type": "ListItem",
        position: 9,
        name: "Resources",
        item: "https://cottagehomecare.com/resources",
      },
    ],
  },
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
    <div>
      <Head>
        <title>Resources - Cottage Home Care Services</title>
        <meta
          name="description"
          content="Explore a wide range of resources at Cottage Home Care Services, including timesheets, Department of Health (DOH) guidelines, TIME-OFF forms, Direct Deposit Authorization forms, Physical Examination forms, and specialized timesheets like Daily and Celestial. These tools are designed to support our staff and ensure compliance with industry standards."
        />
        <meta
          name="keywords"
          content="Cottage Home Care resources, timesheet downloads, DOH guidelines, TIME-OFF form, direct deposit authorization, physical examination form, daily timesheet, celestial timesheet, healthcare compliance, employee support tools"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Suspense fallback={<SkeletonLoading />}>
        <LazyBanner />
      </Suspense>
      <Suspense fallback={<SkeletonLoading />}>
        <ResourcesCard />
      </Suspense>
    </div>
  );
};

export default Resources;
