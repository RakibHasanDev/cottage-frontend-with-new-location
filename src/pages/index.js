import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SkeletonLoading from "@/components/shared/SkeletonLoading";
import WeAre from "@/components/home/WeAre";

// ✅ Import Components Dynamically
const CustomCarousel = dynamic(
  () => import("@/components/home/CustomCarousel"),
  {
    suspense: false,
    ssr: true, // ✅ Hero Section should load immediately for better LCP
  }
);

const UpdateTestimonial = dynamic(
  () => import("@/components/home/Testimonial/Testimonials"),
  {
    suspense: true,
    ssr: false, // ✅ Client-side only (Lazy-loaded for speed)
  }
);

const Overwhelmed = dynamic(() => import("@/components/home/OverwHelmed"), {
  suspense: true,
  ssr: false, // ✅ Lazy-loaded for better performance
});

// const WeAre = dynamic(() => import("@/components/home/WeAre"), {
//   suspense: true,
//   ssr: false,
// });
const Quality = dynamic(() => import("@/components/home/Quality"), {
  suspense: true,
  ssr: false,
});
const WhyChoose = dynamic(() => import("@/components/home/WhyChoose"), {
  suspense: true,
  ssr: false,
});
const MedicaidApply = dynamic(() => import("@/components/home/MedicaidApply"), {
  suspense: true,
  ssr: false,
});
const MapComponent = dynamic(() => import("@/components/home/MapComponent"), {
  suspense: true,
  ssr: false,
});
const EasierLife = dynamic(() => import("@/components/home/EasierLife"), {
  suspense: true,
  ssr: false,
});

const NewsLetter = dynamic(() => import("@/components/home/NewsLetter"), {
  suspense: true,
  ssr: false,
});

const CottageVideoSlider = dynamic(
  () => import("@/components/home/VideoSlider/CottageVideoSlider"),
  {
    suspense: true,
    ssr: false,
  }
);

export default function Home() {
  const title = "Cottage Home Care Services – NHTD, HHA & Private Pay";
  const description =
    "Cottage Home Care provides top-quality home care services in NYC, including NHTD, HHA, Private Pay, CDPAP, and senior care support. Contact us today!";

  const keywords =
    "Cottage Home Care, Cottage Agency, Cottage Home Care Services, NHTD, NHTD Program, home care agencies near me, homecare, Home Health Aide NYC, Private Pay Home Care, Senior Care NYC, Medicaid Home Care, Nursing Home Transition, Diversion Services, Independent Living Support, HHA Certification, Personal Care Services, Home Health Care, Home Care Services, Home Care Agencies, Senior Home Care, Elderly Care Services, Non-Medical Home Care, Home Care Assistance, Home Care Providers, home care for seniors, cottage home care pay rate, private home care agencies in NYC, HHA PCA services";

  // ✅ Optimized JSON-LD Structured Data
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Cottage Home Care Services",
      url: "https://cottagehomecare.com",
      logo: "https://cottagehomecare.com/logo.png",
      description:
        "Cottage Home Care Services provides NHTD, Home Health Aide, and Private Pay home care services in NYC, Nassau, and Suffolk, ensuring high-quality care for seniors and individuals transitioning from nursing homes.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1516-367-2266",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: ["English", "Spanish"],
      },
      sameAs: [
        "https://www.facebook.com/cottageHC",
        "https://www.linkedin.com/company/cottage-homecare/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Home - Cottage Home Care Services",
      url: "https://cottagehomecare.com",
      description: description,
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
          name: "NHTD",
          item: "https://cottagehomecare.com/nhtd",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Cottage Home Care Services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cottage Home Care Services is a trusted provider of home care solutions in NYC, Nassau, and Suffolk, offering compassionate support through programs like NHTD, CDPAP, and Home Health Aide (HHA) services.",
          },
        },
        {
          "@type": "Question",
          name: "What home care services does Cottage Home Care provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cottage Home Care Services offers NHTD, Home Health Aide (HHA), and Private Pay home care. We ensure high-quality, personalized care for seniors and individuals with disabilities, helping them live comfortably in their homes.",
          },
        },
        {
          "@type": "Question",
          name: "What is the NHTD program at Cottage Home Care?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The NHTD (Nursing Home Transition and Diversion) program by Cottage Home Care Services helps Medicaid-eligible seniors and individuals with disabilities transition from nursing homes to independent living, providing personalized care and support.",
          },
        },
      ],
    },
  ];

  const preloadLinks = [
    {
      href: "https://res.cloudinary.com/di3wwp9s0/image/upload/f_auto,q_auto,w_1920/v1741710684/Website%20Hero%20Images/Cottage-Home-Care-Slider-1.webp",
      // ✅ Matches first large image
      as: "image",
      type: "image/webp",
      fetchPriority: "high",
    },
    {
      href: "https://res.cloudinary.com/di3wwp9s0/image/upload/f_auto,q_auto,w_720/v1741710747/Website%20Hero%20Images/cottage-home-care-slider-1-sm.webp", // ✅ Matches first small image
      as: "image",
      type: "image/webp",
      fetchPriority: "high",
    },
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        {/* ✅ Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Cottage Home Care Services" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://cottagehomecare.com/" />
        <meta property="og:type" content="website" />
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
          content="https://cottagehomecare.com/hero.webp"
        />
        <meta name="twitter:site" content="@cottagecareny" />

        {/* ✅ Preloading Images */}
        {preloadLinks.map((link, index) => (
          <link
            key={index}
            rel="preload"
            href={link.href}
            as={link.as}
            type={link.type}
            fetchPriority={link.fetchPriority}
          />
        ))}

        {/* ✅ Structured Data (Schema.org JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <link rel="canonical" href="https://cottagehomecare.com/" />
      </Head>

      <div className="dark:bg-slate-600 min-h-screen">
        <h1 className="sr-only">
          Cottage Home Care – Home Health Aide, Private Pay, and NHTD Services
        </h1>
        <h2 className="sr-only">
          Trusted NHTD, HHA, and Private Pay Services Across New York State
        </h2>

        {/* ✅ Hero Section (Fast LCP) */}
        <CustomCarousel />

        {isMounted && (
          <Suspense fallback={<SkeletonLoading />}>
            <UpdateTestimonial />
          </Suspense>
        )}

        <Suspense fallback={<SkeletonLoading />}>
          <Overwhelmed />
        </Suspense>

        <WeAre />

        <Suspense fallback={<SkeletonLoading />}>
          <Quality />
        </Suspense>

        <Suspense fallback={<SkeletonLoading />}>
          <WhyChoose />
        </Suspense>

        <Suspense fallback={<SkeletonLoading />}>
          <MedicaidApply />
        </Suspense>

        <Suspense fallback={<SkeletonLoading />}>
          <CottageVideoSlider />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <MapComponent />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <EasierLife />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <NewsLetter />
        </Suspense>
      </div>
    </>
  );
}
