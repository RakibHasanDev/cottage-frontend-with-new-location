import { useEffect, useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Quote,
  Users,
  Phone,
  Calendar,
  CheckCircle,
  ClipboardCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  Mail,
} from "lucide-react";

const reviews = [
  {
    name: "Devika Dwarka",
    date: "2 weeks ago",
    rating: 5,
    text: "Lovely people to work with. It was amazing! I also love those lovely ladies and gents I spoke to and handled the classes. It’s great to be here with Cottage, they are the best.",
  },
  {
    name: "Rajestha Chathura",
    date: "3 weeks ago",
    rating: 5,
    text: "I would like to congratulate miss nadia on a wonderful job she’s done on teaching other students the process of care.",
  },
  {
    name: "Brenda 'sunny'",
    date: "2 weeks ago",
    rating: 5,
    text: "Excellent experience with this agency. The staff is very helpful and friendly. I highly recommend anyone.",
  },
  {
    name: "Judith Allen",
    date: "2 weeks ago",
    rating: 5,
    text: "An excellent experience with front desk clerk. I will give recommended any one to cottage home care.",
  },
  {
    name: "Nadia Allen",
    date: "3 weeks ago",
    rating: 5,
    text: "Absolutely love working with this agency and my awesome coordinator Ayala. Very compassionate young lady, very understanding and hardworking coordinator. I highly recommend working here.",
  },
  {
    name: "Sabrina Brewlam",
    date: "2 months ago",
    rating: 5,
    text: "All the team members of Cottage Homecare are friendly, caring, helpful all the time. Orientation was great, very quick and smooth.",
  },
  {
    name: "Kiran Champasriya",
    date: "3 weeks ago",
    rating: 5,
    text: "I am happy for sure, always it is with this company for the second time. I love it here.",
  },
  {
    name: "Nadia Oriental",
    date: "3 weeks ago",
    rating: 5,
    text: "The service is excellent and they are very helpful at all times.",
  },
  {
    name: "Roshni Ockurum",
    date: "2 months ago",
    rating: 5,
    text: "I recently completed my HHA orientation, and I found it to be a highly informative and valuable experience.",
  },
  {
    name: "Fanny Perez",
    date: "3 weeks ago",
    rating: 5,
    text: "Great company to work with. The staff and coordinator are great.",
  },
];

const faqs = [
  {
    question: "What services does Cottage Homecare Maryland, LLC provide?",
    answer:
      "We provide care services through two main options: Private Pay and the Community First Choice (CFC) Program under Maryland Medicaid.",
  },

  {
    question: "What is the Community First Choice (CFC) program?",
    answer:
      "The CFC program is a Medicaid-funded service that allows individuals to receive personal care and support services in their homes rather than in institutional settings. It is ideal for those who need help with activities of daily living such as bathing, dressing, or mobility.",
  },
  {
    question: "Who is eligible for the CFC program?",
    answer:
      "Eligibility for the CFC program is determined by Medicaid and includes individuals who require assistance with daily activities and meet specific income and health criteria. We can help guide you through the application and assessment process.",
  },
  {
    question: "Do you accept private pay clients?",
    answer:
      "Yes, Cottage Homecare Maryland, LLC offers flexible private pay options for individuals who prefer or need to pay out of pocket for their care services. We work with families to develop a personalized care plan that fits their budget and needs.",
  },
  {
    question: "Are your caregivers trained and certified?",
    answer:
      "Yes, all of our caregivers are trained, certified, and background-checked. We prioritize safety, professionalism, and compassionate care in every home we serve.",
  },
  {
    question: "Can I choose the caregiver for my loved one?",
    answer:
      "Absolutely. We believe in matching the right caregiver to each client. You'll have the opportunity to meet potential caregivers and choose the one who best fits your loved one's needs and personality.",
  },
  {
    question: "Is Cottage Homecare Maryland, LLC available 24/7?",
    answer:
      "Yes, we offer 24/7 care options and flexible scheduling to meet your specific needs, whether you need part-time, full-time, or around-the-clock assistance.",
  },
];

import { MapPin, ChevronDown, Sparkles, Heart, Shield } from "lucide-react";
import EasierLife from "@/components/home/EasierLife";
import Head from "next/head";
import Image from "next/image";

function Maryland() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // change every 5s

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Cottage Homecare Maryland | Private Pay & CFC Program</title>
        <meta
          name="description"
          content="Trusted in-home care in Maryland. Cottage Homecare offers Private Pay and Community First Choice (CFC) program services."
        />
        <meta
          name="keywords"
          content="Cottage Homecare Maryland, Private Pay care, CFC Program Maryland, Community First Choice, Medicaid home care, in-home caregivers Maryland"
        />
        <link rel="canonical" href="https://cottagehomecare.com/maryland/" />

        {/* Language & Alternate Versions */}
        <link
          rel="alternate"
          href="https://cottagehomecare.com/maryland/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/maryland/"
          hrefLang="x-default"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://cottagehomecare.com/maryland/"
        />
        <meta
          property="og:title"
          content="Cottage Homecare Maryland | Private Pay & CFC Program"
        />
        <meta
          property="og:description"
          content="Trusted in-home care in Maryland. Cottage Homecare offers Private Pay and Community First Choice (CFC) program services."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/di3wwp9s0/image/upload/v1759324186/Mary_Land_LLC/maryland_hero.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://cottagehomecare.com/maryland/"
        />
        <meta
          name="twitter:title"
          content="Cottage Homecare Maryland | Private Pay & CFC Program"
        />
        <meta
          name="twitter:description"
          content="Trusted in-home care in Maryland. Cottage Homecare offers Private Pay and Community First Choice (CFC) program services."
        />
        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/hero.webp"
        />

        {/* Structured Data: Organization (Global) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cottage Home Care Services",
      "url": "https://cottagehomecare.com/",
      "logo": "https://cottagehomecare.com/hero.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-516-367-2266",
        "contactType": "Home Care Service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/cottageHC"
      ]
    }
    `}
        </script>

        {/* Structured Data: LocalBusiness (Maryland) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Cottage Homecare - Maryland",
      "url": "https://cottagehomecare.com/maryland/",
      "image": "https://cottagehomecare.com/hero.webp",
      "telephone": "+1-667-400-0648",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6310 Stevens Forest Rd, Suite 100",
        "addressLocality": "Columbia",
        "addressRegion": "MD",
        "postalCode": "21046",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type":"AdministrativeArea",
        "name": "Maryland"
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "Cottage Homecare",
        "url": "https://cottagehomecare.com/"
      }
    }
    `}
        </script>

        {/* Structured Data: Breadcrumbs */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://cottagehomecare.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Maryland",
          "item": "https://cottagehomecare.com/maryland/"
        }
      ]
    }
    `}
        </script>

        {/* Structured Data: FAQs */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Cottage Homecare offer in Maryland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cottage Homecare provides trusted in-home care services in Maryland, including Private Pay options and Community First Choice (CFC) program support."
          }
        },
        {
          "@type": "Question",
          "name": "Is Cottage Homecare part of the Medicaid Community First Choice program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Cottage Homecare participates in Maryland’s Community First Choice (CFC) program, helping Medicaid-eligible individuals receive in-home care."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get started with Cottage Homecare services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can get started by contacting Cottage Homecare through our website or by phone to schedule a consultation and determine your care needs."
          }
        }
      ]
    }
    `}
        </script>
      </Head>

      <section className="relative overflow-hidden gradient-mesh min-h-[82vh] flex items-center dark:bg-slate-600">
        {/* Animated decorative shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-400/30 shape-blob blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-300/30 shape-blob-2 blur-3xl animate-float-slow " />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 shape-circle blur-2xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-300/20 shape-rounded-blob blur-2xl animate-float" />

        <div className="container mx-auto px-4 relative z-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="text-center text-white  col-span-1 ">
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6  mb-8 glass-effect">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold">
                Trusted by 10,000+ Families
              </span>
            </div>

            {/* Main heading with gradient text */}
            <h1 className="text-2xl md:text-5xl font-bold mb-3 leading-snug lg:leading-[60px] dark:text-gray-100">
              COTTAGE HOME CARE <br /> MARYLAND, LLC
            </h1>

            <div className="flex items-center justify-center gap-4 lg:mb-8 mb-3">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent rounded-full" />
              <Heart className="h-8 w-8 text-pink-300 fill-pink-300" />
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent rounded-full" />
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-cyan-50">
              Your #1 Choice for Home Care
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
              <a
                href="tel:+1(667) 400-0648"
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 glass-effect hover:bg-white/25 transition-all"
              >
                <Phone className="h-5 w-5 text-green-300" />
                <span className="text-sm font-medium uppercase">
                  Contact Us
                </span>
              </a>
            </div>
          </div>

          <div className="col-span-1 order-first sm:order-none">
            <Image
              src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1759324186/Mary_Land_LLC/maryland_hero.webp"
              alt="Cottage Home Care Maryland Hero Image"
              className="lg:w-[90%] h-auto lg:rotate-6 rounded-xl"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute -bottom-2 left-0 right-0 ">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full "
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-white dark:fill-slate-500 -mt-2"
            />
          </svg>
        </div>
      </section>
      <section
        className="
    lg:pb-20 relative overflow-hidden
    bg-gradient-to-b from-white via-cyan-50/30 to-white
    dark:bg-gradient-to-b dark:from-slate-500 dark:via-slate-500 dark:to-slate-500
  "
      >
        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-200/20 shape-blob blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-200/20 shape-blob-2 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <p className="text-xl md:text-4xl lg:text-4xl 2xl:text-4xl font-bold text-center mb-4 text-gray-800  uppercase dark:text-gray-100 mt-5 lg:mt-0 ">
            COTTAGE HOME CARE MARYLAND, LLC <br />
            <span className="pt-3 inline-block">
              {" "}
              Simplifying the Community First Choice (CFC) Program
            </span>
          </p>

          <h2 className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto dark:text-gray-100">
            Following these simple steps to get started with compassionate care
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center ">
            {/* Image with decorative frame */}
            <div className="relative">
              <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-md opacity-20 animate-pulse-glow" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src={
                    "https://res.cloudinary.com/di3wwp9s0/image/upload/v1759255378/Mary_Land_LLC/cfc_wv3myv.webp"
                  }
                  alt="Caregiver with elderly patient"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Steps with enhanced design */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#005F6B] to-[#027b8b] rounded-2xl blur opacity-25 group-hover:opacity-40" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-cyan-100">
                  <div className="flex items-start gap-4 flex-col md:flex-row ">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <ClipboardCheck className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                        1. Covered Under Maryland Medicaid
                      </h3>
                      <p className="text-gray-600 leading-relaxed lg:text-lg">
                        Get access to care services fully covered by Maryland
                        Medicaid, ensuring affordability and support without
                        added stress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-pink-100">
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                        2. Self-Direct Your Care
                      </p>
                      <p className="text-gray-600 leading-relaxed lg:text-lg ">
                        Enjoy the freedom to choose and even hire family members
                        as caregivers, giving you comfort and flexibility with
                        people you trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-cyan-100">
                  <div className="flex items-start gap-4 flex-col md:flex-row ">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <CheckCircle className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                        3. Comprehensive Support Services
                      </p>
                      <p className="text-gray-600 leading-relaxed lg:text-lg">
                        Receive personal care, emergency response, assistive
                        technology, home modifications, and training — all
                        designed to keep you safe, independent, and supported.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons with enhanced styling */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="tel:+1(667) 400-0648"
                  className="bg-gradient-to-r from-[#005F6B] to-[#0aa3b8] hover:from-cyan-600 hover:to-blue-700 text-white rounded-full px-10 py-3 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex gap-2 items-center"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  Call: (667) 400-0648
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    document.documentElement.style.scrollBehavior = "smooth";
                    const targetElement =
                      document.getElementById("contact-form");
                    const navbarHeight = 120;
                    if (targetElement) {
                      const offsetTop = targetElement.offsetTop - navbarHeight;
                      window.scrollTo({
                        top: offsetTop,
                      });
                    }
                  }}
                  href="#contact-form"
                  className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white rounded-full px-10 py-3 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105  flex gap-2 items-center"
                >
                  <Calendar className="mr-2 h-6 w-6" />
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="
    py-20 relative overflow-hidden
    bg-gradient-to-b from-white to-gray-50
    dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-500
  "
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200/30 shape-circle blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/30 shape-blob blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 ">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#005F6B] to-[#0aa3b8] text-white rounded-full px-6 py-2 mb-6 shadow-lg">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Trusted by Thousands</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-2 leading-relaxed max-w-4xl lg:max-w-5xl mx-auto dark:text-gray-100">
              Trusted by
              <span
                className="
    text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 
    dark:bg-none dark:text-white
    font-bold text-3xl ml-1
  "
              >
                thousands
              </span>{" "}
              of clients and patients in the
              <span
                className="
    text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 
    dark:bg-none dark:text-white
    font-bold ml-1
  "
              >
                Cottage Homecare
              </span>{" "}
              family!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Services List with enhanced gradient */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 rounded-3xl p-10 shadow-2xl border border-cyan-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <p className=" text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                    Private Pay
                  </p>
                </div>
                <ul className="space-y-5">
                  {[
                    "Personal Care",
                    "Emergency response",
                    "Choose Your Own Caregiver",
                  ].map((service, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg font-medium pt-0.5">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 my-8 border-t pt-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <p className=" text-lg lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
                    Community First Choice (CFC) Program
                  </p>
                </div>
                <ul className="space-y-5">
                  {[
                    "Covered under Maryland Medicaid",
                    "Self-direct your care even hire family as caregivers",
                    "personal care, emergency response, assistive tech, home modifications & training",
                  ].map((service, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-400 to-blue-500 rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg font-medium pt-0.5">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Video with enhanced frame */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-cyan-900 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-2">
                <div className="aspect-video relative rounded-2xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/B-hpC0dEJ5I?rel=0"
                    title="Cottage Home Care Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 dark:bg-slate-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl  ">
              <div className="lg:aspect-video relative bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.9604814631602!2d-76.8531371!3d39.198346699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7dfb69ed0139d%3A0x6dec8e5f6f17d6fd!2s6310%20Stevens%20Forest%20Rd%20STE%20100%2C%20Columbia%2C%20MD%20210463208%2C%20USA!5e0!3m2!1sen!2sbd!4v1759174979633!5m2!1sen!2sbd"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Location Info */}
            <div className=" ">
              <div className="bg-white rounded-2xl p-8 py-20 shadow-lg space-y-5">
                <p className="text-xl lg:text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Corporate Office Location
                </p>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/dir//6310+Stevens+Forest+Rd+STE+100,+Columbia,+MD+210463208,+USA/@39.1983508,-76.855712,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b7dfb69ed0139d:0x6dec8e5f6f17d6fd!2m2!1d-76.8531371!2d39.1983467?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                  className="text-gray-700 text-lg"
                >
                  6310 Stevens Forest Rd, Suite 100, Columbia, MD 21046
                </a>
                <p className="text-2xl font-bold text-primary mb-4  items-center gap-2 flex">
                  <Phone className="h-6 w-6" />
                  <a
                    target="_blank"
                    href="tel:+1(667) 400-0648"
                    className="text-gray-700 text-lg"
                  >
                    (667) 400-0648
                  </a>
                </p>
                <p className="lg:text-2xl font-bold text-primary mb-4  items-center gap-2 flex">
                  <Mail className="h-6 w-6" />
                  <a
                    target="_blank"
                    href="mailto:maryland@cottagehomecare.com"
                    className="text-gray-700 lg:text-lg"
                  >
                    maryland@cottagehomecare.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden gradient-mesh">
        {/* Enhanced decorative shapes */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-white/10 shape-blob blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300/20 shape-blob-2 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-300/20 shape-circle blur-2xl animate-pulse-glow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-xl">
              <MessageSquare className="h-10 w-10 text-white" />
            </div>
            <p className="text-xl md:text-4xl font-bold text-white mb-6 text-balance max-w-4xl mx-auto leading-tight">
              See Why So Many Families Needing Home Care In LLC Look To Us For{" "}
              <span className="relative inline-block">
                <span className="relative z-10">World-Class Care</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-pink-400/50 -rotate-1" />
              </span>
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-cyan-200/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl p-4 lg:p-10 md:p-14 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                  <p className="text-xl lg:text-3xl font-bold text-gray-800 text-center lg:text-start">
                    Cottage Home Care Services Reviews
                  </p>
                  <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl px-6 py-3 shadow-md">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-6 w-6 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-gray-800 font-bold text-2xl">
                      5.0
                    </span>
                  </div>
                </div>

                <div className="lg:text-right text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full px-6 py-2 shadow-lg">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">
                      <strong className="text-xl">147</strong> Total Reviews
                    </span>
                  </div>
                </div>

                {/* Enhanced Review Card */}
                <div className="relative bg-gradient-to-br from-gray-50 to-cyan-50/30 rounded-2xl p-10 mb-10 min-h-[240px] flex flex-col justify-center shadow-lg border border-cyan-100 ">
                  <Quote className="absolute top-6 left-6 h-12 w-12 text-cyan-200" />
                  <div className="flex mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 lg:text-xl mb-6 leading-relaxed relative z-10">
                    {reviews[currentIndex].text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-800 text-lg">
                        {reviews[currentIndex].name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {reviews[currentIndex].time}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Navigation */}
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={prevReview}
                    className="rounded-full w-12 h-12 border-2 border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50 transition-all shadow-md bg-transparent flex justify-center items-center"
                  >
                    <ChevronLeft className="h-6 w-6 text-cyan-600" />
                  </button>

                  <div className="flex gap-3">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 rounded-full transition-all shadow-sm ${
                          index === currentIndex
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 w-12"
                            : "bg-gray-300 w-3 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to review ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextReview}
                    className="rounded-full w-12 h-12 border-2 border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50 transition-all shadow-md bg-transparent flex justify-center items-center"
                  >
                    <ChevronRight className="h-6 w-6 text-cyan-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20  dark:bg-slate-500">
        <div className="container mx-auto px-4">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-primary dark:text-gray-100">
            Frequently Asked Questions
          </p>

          <div className="max-w-5xl 2xl:max-w-7xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors ${
                    openIndex === index
                      ? "bg-cyan-500 text-white"
                      : "bg-white text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span className="font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <EasierLife />
    </>
  );
}

export default Maryland;
