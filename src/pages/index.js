import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SkeletonLoading from "@/components/shared/SkeletonLoading";

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

const WeAre = dynamic(() => import("@/components/home/WeAre"), {
  suspense: true,
  ssr: false,
});
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
  const title = "Cottage Home Care Services - NHTD, HHA & Private Pay in NYC";
  const description =
    "Cottage Home Care provides top-quality home care services in NYC, including NHTD, HHA, Private Pay, CDPAP, and senior care support. Contact us today!";

  // ✅ Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cottage Home Care Services",
    url: "https://cottagehomecare.com",
    logo: "https://cottagehomecare.com/logo.png",
    description: description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1516-367-2266",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
    sameAs: [
      "https://www.facebook.com/cottageHC",
      "https://x.com/cottagecanery",
      "https://www.linkedin.com/company/cottage-homecare/",
    ],
  };

  // ✅ Preload Hero Section Image for Faster LCP
  const preloadLinks = [
    {
      href: "https://res.cloudinary.com/dlw7u1u5p/image/upload/v1728479602/tyfxpgbtpv364idxhn4g.webp",
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
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="home care, CDPAP, HHA, NHTD, senior care, private pay, NYC home care"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://cottagehomecare.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/logo.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* ✅ Preload Hero Image */}
        {preloadLinks.map((link, index) => (
          <link
            key={index}
            rel="preload"
            as={link.as}
            href={link.href}
            type={link.type}
            fetchPriority={link.fetchPriority}
          />
        ))}
      </Head>

      <div className="dark:bg-slate-600">
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

        <Suspense fallback={<SkeletonLoading />}>
          <WeAre />
        </Suspense>

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
