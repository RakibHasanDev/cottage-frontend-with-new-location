import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const LazyBanner = dynamic(() => import("@/components/contact/HeroSection"), {
  suspense: true,
  ssr: false,
});

const ContactInfo = dynamic(() => import("@/components/contact/ContactInfo"), {
  suspense: true,
  ssr: false,
});
const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  suspense: true,
  ssr: false,
});
const OfficeLocation = dynamic(
  () => import("@/components/contact/OfficeLocation"),
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

const Contacts = () => {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Cottage Home Care Services",
      url: "https://cottagehomecare.com",
      logo: "https://cottagehomecare.com/logo.png",
      description:
        "Cottage Home Care Services provides professional home care services, including CDPAP, NHTD, and private pay services, throughout New York.",
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
        {
          "@type": "ContactPoint",
          telephone: "+1516-367-2266",
          contactType: "Technical Support",
          areaServed: "US",
          availableLanguage: "English",
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
      "@type": "WebPage",
      name: "Contact Us - Cottage Home Care Services",
      url: "https://cottagehomecare.com/contacts",
      description:
        "Get in touch with Cottage Home Care Services. Call us at 516-367-2266, email info@cottagehomecare.com, or visit our offices in Queens, Hicksville, Jamaica, and Washington for home care support.",
      isPartOf: {
        "@type": "Website",
        url: "https://cottagehomecare.com",
      },
      breadcrumb: {
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
            name: "Contact Us",
            item: "https://cottagehomecare.com/contacts",
          },
        ],
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
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can I contact Cottage Home Care Services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact us by calling +1-516-367-2266, emailing info@cottagehomecare.com, or visiting our office at South Richmond Hill Queens, Hicksville, Jamaica, Washington.",
          },
        },
        {
          "@type": "Question",
          name: "What are your office hours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our office is open Monday through Friday from 9:00 AM to 5:00 PM. For urgent inquiries, you can reach us via our 24/7 helpline.",
          },
        },
        {
          "@type": "Question",
          name: "Can I schedule an appointment online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can schedule an appointment through our website on the Contact Us page by filling out the form. We will get back to you shortly.",
          },
        },
      ],
    },
  ];

  return (
    <div className="dark:bg-slate-600">
      {/* ✅ Set Canonical to Prevent Duplicate Canonical Issues */}

      <Suspense fallback={<Placeholder />}>
        <LazyBanner />
      </Suspense>
      <Suspense fallback={<Placeholder />}>
        <ContactInfo />
      </Suspense>
      <Suspense fallback={<Placeholder />}>
        <ContactForm />
      </Suspense>
      <Suspense fallback={<Placeholder />}>
        <OfficeLocation />
      </Suspense>
    </div>
  );
};

export default Contacts;
