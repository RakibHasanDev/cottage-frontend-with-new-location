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

// const CottageVideoSlider = dynamic(
//   () => import("@/components/home/VideoSlider/CottageVideoSlider"),
//   {
//     suspense: true,
//     ssr: false,
//   }
// );
const PromotionalVideoSlider = dynamic(
  () => import("@/components/home/VideoSlider/PromotionalVideoSlider"),
  {
    suspense: true,
    ssr: false,
  }
);

export default function Home() {
  const title = "Cottage Home Care Services – NHTD, HHA & Private Pay";
  const description =
    "Cottage Home Care offers top-rated home care in NYC, including NHTD, HHA, CDPAP, Private Pay, and elder care support. Call us today for more info!";

  const keywords =
    "Cottage Home Care, Cottage Agency, Cottage Home Care Services, private home care services, Home Health Aide NYC, NHTD program, CDPAP NYC, Private Pay Home Care, Medicaid Home Care NYC, Senior Home Care, elderly care NYC, personal care assistance, home care agencies near me, home health care services NYC, HHA services, independent living support, home care for seniors, in-home caregivers NYC, Rockaway home care, care in homes, cottagecare, Queens home care, Suffolk home care services, Nassau County home care, best home care agency NYC, personal care home, valley cottage ny, cottage inn near me, cottage st, modern cottage, cottage buy";

  // ✅ Optimized JSON-LD Structured Data

  const videos = [
    {
      title: "Cottage Home Care: Compassion You Can Trust, Care You Deserve",
      description:
        "Cottage Home Care: Compassion You Can Trust, Care You Deserve",
      thumbnailUrl: "https://img.youtube.com/vi/7uoXudV9uas/maxresdefault.jpg",
      uploadDate: "2024-06-16T00:00:00Z",
      duration: "PT50S",
      embedUrl: "https://www.youtube.com/embed/7uoXudV9uas",
      contentUrl: "https://www.youtube.com/watch?v=7uoXudV9uas",
    },
    {
      title: "Having Trouble with PPL or Payments?",
      description:
        "Cottage Home Care helps resolve PPL or payment issues effectively.",
      thumbnailUrl: "https://img.youtube.com/vi/tGyiwV3YYHU/maxresdefault.jpg",
      uploadDate: "2024-06-13T00:00:00Z",
      duration: "PT39S",
      embedUrl: "https://www.youtube.com/embed/tGyiwV3YYHU",
      contentUrl: "https://www.youtube.com/watch?v=tGyiwV3YYHU",
    },
    {
      title: "Reliable & Compassionate Homecare Services (Tamil Version)",
      description:
        "Reliable and compassionate homecare services in Tamil provided by Cottage Home Care Services.",
      thumbnailUrl: "https://img.youtube.com/vi/mkWcgLyx-I0/maxresdefault.jpg",
      uploadDate: "2024-06-13T00:00:00Z",
      duration: "PT1M1S",
      embedUrl: "https://www.youtube.com/embed/mkWcgLyx-I0",
      contentUrl: "https://www.youtube.com/watch?v=mkWcgLyx-I0",
    },
    {
      title: "Reliable & Compassionate Homecare Services (Hindi Version)",
      description:
        "Reliable and compassionate homecare services in Hindi by Cottage Home Care Services.",
      thumbnailUrl: "https://img.youtube.com/vi/BYuXb_Ni9pI/maxresdefault.jpg",
      uploadDate: "2024-06-13T00:00:00Z",
      duration: "PT1M13S",
      embedUrl: "https://www.youtube.com/embed/BYuXb_Ni9pI",
      contentUrl: "https://www.youtube.com/watch?v=BYuXb_Ni9pI",
    },
    {
      title: "Why Choose Cottage Home Care Services? (Spanish Version)",
      description:
        "Learn why Cottage Home Care Services is the best choice for compassionate home care, presented in Spanish.",
      thumbnailUrl: "https://img.youtube.com/vi/roHmwfWgm3w/maxresdefault.jpg",
      uploadDate: "2024-06-13T00:00:00Z",
      duration: "PT1M17S",
      embedUrl: "https://www.youtube.com/embed/roHmwfWgm3w",
      contentUrl: "https://www.youtube.com/watch?v=roHmwfWgm3w",
    },
    {
      title: "Compassionate, Professional Homecare Services",
      description:
        "Discover compassionate, professional homecare services from Cottage Homecare Services.",
      thumbnailUrl: "https://img.youtube.com/vi/yOtPb-LVfuk/maxresdefault.jpg",
      uploadDate: "2024-06-13T00:00:00Z",
      duration: "PT1M18S",
      embedUrl: "https://www.youtube.com/embed/yOtPb-LVfuk",
      contentUrl: "https://www.youtube.com/watch?v=yOtPb-LVfuk",
    },
    {
      title: "Quality Homecare You Can Trust (Punjabi version)",
      description:
        "Quality and trustworthy homecare services presented in Punjabi by Cottage Home Care.",
      thumbnailUrl: "https://img.youtube.com/vi/V8DI9MCHArs/maxresdefault.jpg",
      uploadDate: "2024-06-13T00:00:00Z",
      duration: "PT57S",
      embedUrl: "https://www.youtube.com/embed/V8DI9MCHArs",
      contentUrl: "https://www.youtube.com/watch?v=V8DI9MCHArs",
    },
    {
      title: "Cottage Homecare HHA registration process",
      description:
        "Step-by-step guide on HHA registration process at Cottage Homecare Services.",
      thumbnailUrl:
        "https://res.cloudinary.com/di3wwp9s0/image/upload/v1749139336/carousel%20Thumnail/hha_registration.webp",
      uploadDate: "2024-06-13T00:00:00Z",
      duration: "PT2M54S",
      embedUrl: "https://www.youtube.com/embed/R-naoq-B5HI",
      contentUrl: "https://www.youtube.com/watch?v=R-naoq-B5HI",
    },
    {
      title: "OPWDD Navigation & Support Services",
      description:
        "Detailed information on OPWDD Navigation & Support Services offered by Cottage Home Care.",
      thumbnailUrl: "https://img.youtube.com/vi/Lsj_0TL_Fak/maxresdefault.jpg",
      uploadDate: "2024-06-13T00:00:00Z",
      duration: "PT57S",
      embedUrl: "https://www.youtube.com/embed/Lsj_0TL_Fak",
      contentUrl: "https://www.youtube.com/watch?v=Lsj_0TL_Fak",
    },
  ];

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
      description:
        "Cottage Home Care offers top-rated home care in NYC, including NHTD, HHA, CDPAP, Private Pay, and elder care support. Call us today for more info!",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: videos.map((video, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "VideoObject",
          name: video.title,
          description: video.description,
          thumbnailUrl: video.thumbnailUrl,
          uploadDate: video.uploadDate,
          duration: video.duration,
          embedUrl: video.embedUrl,
          publisher: {
            "@type": "Organization",
            name: "Cottage Home Care",
            logo: {
              "@type": "ImageObject",
              url: "https://www.cottagehomecare.com/logo.png",
            },
          },
        },
      })),
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
        <link
          rel="alternate"
          href={"https://cottagehomecare.com/"}
          hreflang="en"
        />
        <link
          rel="alternate"
          href={"https://cottagehomecare.com/"}
          hreflang="x-default"
        />

        {/* ✅ Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://cottagehomecare.com/" />
        <meta property="og:site_name" content="Cottage Home Care Services" />
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
        <h1 className="seo-text-hidden ">
          Cottage Home Care – Home Health Aide, Private Pay, and NHTD Services
        </h1>
        <h2 className="seo-text-hidden ">
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
          <PromotionalVideoSlider />
        </Suspense>
        {/* <Suspense fallback={<SkeletonLoading />}>
          <CottageVideoSlider />
        </Suspense> */}
        <Suspense fallback={<SkeletonLoading />}>
          <MapComponent />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <EasierLife />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <NewsLetter />
        </Suspense>

        <div class="seo-text-hidden">
          <p>
            Cottage Home Care Services offers a full range of home care programs
            across New York, including CDPAP, HHA, PCA, NHTD Waiver, and Private
            Pay services. Through the Consumer Directed Personal Assistance
            Program (CDPAP), family members or friends can get paid to care for
            loved ones. Our Home Health Aide (HHA) and Personal Care Aide (PCA)
            services provide assistance with bathing, dressing, meal prep,
            medication reminders, and daily living activities. The Nursing Home
            Transition and Diversion (NHTD) program helps individuals safely
            move from nursing facilities back into their communities. We also
            provide customized Private Pay options for those who prefer
            flexible, out-of-pocket care solutions. Cottage Home Care is
            committed to serving multicultural communities and delivering care
            in multiple languages. Whether you need skilled assistance or
            non-medical support, our experienced, compassionate caregivers are
            ready to meet your needs with professionalism, dignity, and respect.
          </p>
        </div>
      </div>
    </>
  );
}
