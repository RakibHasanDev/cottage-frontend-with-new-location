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
  const title = "Contact Us | Cottage Home Care Services | NY Locations";
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Cottage Home Care Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Cottage Home Care Services" />
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
        <meta name="twitter:site" content="@cottagecareny" />

        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/assets/cottage-home-care-logo.webp"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/contact/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/contact/"
          hreflang="x-default"
        />
        <link rel="canonical" href="https://cottagehomecare.com/contact/" />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>

      <main className="dark:bg-slate-600 min-h-screen">
        {/* ✅ Set Canonical to Prevent Duplicate Canonical Issues */}

        <h1 className="seo-text-hidden ">
          Contact Cottage Home Care Services – Locations, Phone, Email & Socials
        </h1>
        <h2 className="seo-text-hidden ">
          Contact Cottage Home Care for Questions or Support
        </h2>

        <LazyBanner />
        <div className="seo-text-hidden">
          <p>
            At Cottage Home Care Services, we are dedicated to delivering
            compassionate and professional home care to individuals and families
            across New York. Our goal is to enhance the quality of life for
            every client by offering personalized care services in the comfort
            of their homes. With a focus on safety, respect, and reliability, we
            ensure that each person we serve feels supported and valued.
          </p>
          <p>
            We proudly offer home care services throughout New York City, Nassau
            County, Suffolk County, Westchester, and Albany. Our team of
            certified Home Health Aides (HHAs) and Personal Care Aides (PCAs) is
            trained to assist with a wide range of non-medical support,
            including bathing, dressing, meal preparation, feeding assistance,
            medication reminders, light housekeeping, and mobility support for
            seniors and individuals needing elderly care.
          </p>
          <p>
            Our caregivers are selected not only for their skills but also for
            their empathy and cultural understanding. We serve diverse
            communities and offer multilingual support to Bengali, Spanish,
            Guyanese, Punjabi, Jamaican, and other families. At Cottage Home
            Care Services, we believe that clear communication and cultural
            sensitivity are essential to delivering care that truly meets each
            client’s needs.
          </p>
          <p>
            We understand how important it is to have someone you trust caring
            for your loved one. That’s why we work closely with families to
            match caregivers based on language, experience, and personality.
            Every care plan is customized to the individual’s requirements,
            ensuring comfort, continuity, and peace of mind with trusted in-home
            assistance and home health support.
          </p>
          <p>
            For service inquiries, caregiver support, or to learn more about how
            we can help, please reach out using the contact information below:
          </p>
          <ul>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:516-367-2266">516-367-2266</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@cottagehomecare.com">
                info@cottagehomecare.com
              </a>
            </li>
            <li>
              <strong>Office Address:</strong> 15 Clydesdale Road, Scotch
              Plains, NY 07076
            </li>
          </ul>
          <p>
            Our office is open Monday through Saturday from 8:00 AM to 5:00 PM.
            We are closed on Sundays. Whether you are a family member looking
            for care or a caregiver seeking to join our team, our staff is here
            to assist you with any questions or concerns.
          </p>
          <p>
            To explore more about our services and service areas, please visit
            our official contact page:{" "}
            <a
              href="https://cottagehomecare.com/contact/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Cottage Home Care Services Contact Page
            </a>
            .
          </p>
        </div>

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
