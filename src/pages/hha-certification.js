import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Head from "next/head";

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
  const title = "HHA Certification - Cottage Home Care Services";
  const description =
    "Get your HHA certification at Brooklyn Institute. Gain skills for a career in home care with Cottage Home Care Services. Enroll today!";
  const keywords =
    "HHA Certification, Home Health Aide Training, Brooklyn Institute of Vocational Training, healthcare training, home care industry training, Cottage Home Care Services, healthcare careers, vocational training in Brooklyn";

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

    // ✅ WebPage Schema (HHA Certification)
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url: "https://cottagehomecare.com/hha-certification",
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
          name: "HHA Certification",
          item: "https://cottagehomecare.com/hha-certification",
        },
      ],
    },

    // ✅ FAQ Schema
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
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://cottagehomecare.com/hha-certification/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/logo.png"
        />
        <link
          rel="canonical"
          href="https://cottagehomecare.com/hha-certification/"
        />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>

      <main className="dark:bg-slate-600 min-h-screen">
        <h1 className="sr-only">
          Become HHA Certified at Brooklyn Institute of Vocational Training
        </h1>
        <h2 className="sr-only">
          Get Certified as a Home Health Aide at Cottage Home Care
        </h2>

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
      </main>
    </>
  );
};

export default HhhaCertification;
