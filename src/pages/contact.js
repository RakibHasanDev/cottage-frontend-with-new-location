import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import Head from "next/head";
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
  const title = "Contact Us - Cottage Home Care Services";
  const description =
    "Contact Cottage Home Care Services at 516-367-2266 or info@cottagehomecare.com. We're here to assist with your home care needs and questions.";

  const keywords =
    "contact Cottage Home Care, home care services contact, South Richmond Hill Queens, Hicksville office, Jamaica office, Washington office, home care support, Cottage Home Care Services contact, 516-367-2266, info@cottagehomecare.com";

  // ✅ Schema Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
        ],
        sameAs: [
          "https://www.facebook.com/cottageHC",
          "https://x.com/cottagecanery",
          "https://www.linkedin.com/company/cottage-homecare/",
        ],
      },
      {
        "@type": "WebPage",
        name: "Contact Us - Cottage Home Care Services",
        url: "https://cottagehomecare.com/contact",
        description:
          "Get in touch with Cottage Home Care Services. Call us at 516-367-2266, email info@cottagehomecare.com, or visit our offices in Queens, Hicksville, Jamaica, and Washington for home care support.",
        isPartOf: {
          "@type": "Website",
          url: "https://cottagehomecare.com",
        },
      },
      {
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
            item: "https://cottagehomecare.com/contact",
          },
        ],
      },
      {
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
    ],
  };

  return (
    <>
      <Head>
        {/* ✅ Essential Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Cottage Home Care Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://cottagehomecare.com/contact/"
        />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/hero.webp"
        />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/logo.png"
        />
        <link rel="canonical" href="https://cottagehomecare.com/contact/" />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>

      <main className="dark:bg-slate-600 min-h-screen">
        {/* ✅ Set Canonical to Prevent Duplicate Canonical Issues */}

        <h1 className="sr-only">
          Contact Cottage Home Care Services – Locations, Phone, Email & Socials
        </h1>
        <h2 className="sr-only">
          Contact Cottage Home Care for Questions or Support
        </h2>

        <LazyBanner />

        <Suspense fallback={<Placeholder />}>
          <ContactInfo />
        </Suspense>
        <Suspense fallback={<Placeholder />}>
          <ContactForm />
        </Suspense>
        <Suspense fallback={<Placeholder />}>
          <OfficeLocation />
        </Suspense>
      </main>
    </>
  );
};

export default Contacts;
