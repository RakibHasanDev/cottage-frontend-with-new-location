import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense, useEffect } from "react";

const Covid = () => {
  const Banner = dynamic(() => import("@/components/covid/hero"), {
    suspense: true,
    ssr: false,
  });
  const Response = dynamic(() => import("@/components/covid/Response"), {
    suspense: true,
    ssr: false,
  });
  const AboutCovid = dynamic(() => import("@/components/covid/AboutCovid"), {
    suspense: true,
    ssr: false,
  });
  const CovidSymption = dynamic(
    () => import("@/components/covid/CovidSymption"),
    {
      suspense: true,
      ssr: false,
    }
  );
  const PreventSteps = dynamic(
    () => import("@/components/covid/PreventSteps"),
    {
      suspense: true,
      ssr: false,
    }
  );

  return (
    <>
      <Head>
        <title>COVID-19 Info | Cottage Home Care Services Inc - NY</title>
        <meta
          name="description"
          content="Stay updated on COVID-19 safety and health services from Cottage Home Care. Learn how we protect our community during the coronavirus pandemic."
        />
        <meta
          name="keywords"
          content="COVID-19 updates, coronavirus safety measures, Cottage Home Care COVID response, health services during COVID, community health safety, pandemic response, health and safety protocols, COVID-19 healthcare services"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/covid/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/covid/"
          hreflang="x-default"
        />

        <link rel="canonical" href="https://cottagehomecare.com/covid/" />
      </Head>
      <main className=" px-5  dark:bg-slate-600 min-h-screen">
        <h1 className="sr-only">
          COVID-19 Awareness—Stay at Home, Stay Safe | Cottage Care
        </h1>
        <h2 className="sr-only">
          COVID-19 Safety and Health Updates from Cottage Home Care
        </h2>

        <div className="py-10 w-[95%] lg:w-[85%] mx-auto dark:text-gray-100 sr-only">
          <p>
            <strong>COVID-19 Safety at Cottage Home Care Services</strong>
          </p>

          <p>
            At <strong>Cottage Home Care Services</strong>, the health and
            safety of our clients, caregivers, and team members is our top
            priority. We follow strict COVID-19 protocols to protect everyone
            involved in our care.
          </p>

          <p>
            We are committed to delivering home care services with the highest
            level of safety. Our staff is trained to follow updated health
            guidelines and precautions during every visit.
          </p>

          <p>
            <strong>What We’re Doing to Keep You Safe:</strong>
          </p>

          <ul>
            <li>
              <strong>Personal Protective Equipment (PPE):</strong> Our
              caregivers wear masks, gloves, and carry sanitizer during each
              home visit.
            </li>
            <li>
              <strong>Health Screenings:</strong> Staff and caregivers undergo
              regular health checks to ensure they are symptom-free before each
              assignment.
            </li>
            <li>
              <strong>Sanitization:</strong> Frequent handwashing, disinfecting
              of surfaces, and hygiene protocols are strictly followed.
            </li>
            <li>
              <strong>Vaccination Support:</strong> We encourage all staff and
              caregivers to stay updated with recommended vaccinations for
              better protection.
            </li>
            <li>
              <strong>Remote Services:</strong> When possible, we offer virtual
              consultations and support to reduce in-person exposure.
            </li>
          </ul>

          <p>
            <strong>Stay Informed</strong>
          </p>

          <p>
            We recommend checking trusted health sources and following updates
            from our team. If you have any questions about our COVID-19
            procedures, please call <strong>516-367-2266</strong> or email{" "}
            <strong>info@cottagehomecare.com</strong>.
          </p>

          <p>
            Thank you for trusting Cottage Home Care Services. Together, we will
            continue to protect our families and community with care and
            caution.
          </p>
        </div>

        <div className="w-[95%] md:w-[80%] mx-auto">
          <Suspense fallback={<SkeletonLoading />}>
            <Banner />
          </Suspense>
        </div>
        <Suspense fallback={<SkeletonLoading />}>
          <Response />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <AboutCovid />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <CovidSymption />
        </Suspense>
        <Suspense fallback={<SkeletonLoading />}>
          <PreventSteps />
        </Suspense>

        {/* <PreventSteps></PreventSteps> */}
      </main>
    </>
  );
};

export default Covid;
