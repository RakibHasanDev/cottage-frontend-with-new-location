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
        <h1 className="seo-text-hidden ">
          COVID-19 Awareness—Stay at Home, Stay Safe | Cottage Care
        </h1>
        <h2 className="seo-text-hidden ">
          COVID-19 Safety and Health Updates from Cottage Home Care
        </h2>

        <div className="seo-text-hidden">
          <p>
            <strong>COVID-19 Home Care Safety in New York City</strong>
          </p>

          <p>
            At Cottage Home Care Services, we understand that providing reliable
            home care during the COVID-19 pandemic requires enhanced safety and
            vigilance. As a trusted home care agency in New York City, our top
            priority is protecting the health of our patients, caregivers, and
            staff while continuing to deliver high-quality, in-home support.
          </p>

          <p>
            We proudly offer essential home health care services across NYC,
            including Queens, Brooklyn, Manhattan, the Bronx, and Staten Island,
            as well as Nassau, Suffolk, Westchester, and Albany counties.
            Whether you need a certified home health aide (HHA) or a personal
            care aide (PCA), our team is trained to follow the latest CDC and
            New York State Department of Health COVID-19 guidelines to ensure
            safe and dependable care.
          </p>

          <p>
            Our home care services include help with bathing, dressing,
            mobility, meal preparation, medication reminders, and other
            non-medical support — all while maintaining the highest standards of
            infection control. We know that seniors and medically vulnerable
            individuals need trustworthy in-home care, especially during a
            public health crisis.
          </p>

          <p>
            <strong>
              COVID-19 Safety Practices Implemented by Our Caregivers:
            </strong>
          </p>

          <ul>
            <li>
              <strong>Use of PPE:</strong> Every caregiver wears face masks,
              gloves, and carries hand sanitizer during each home visit.
            </li>
            <li>
              <strong>Daily Health Screenings:</strong> Caregivers and staff are
              checked daily for COVID-19 symptoms to prevent exposure.
            </li>
            <li>
              <strong>Enhanced Sanitization:</strong> Surfaces, tools, and
              personal items are disinfected regularly according to COVID-19
              safety protocols.
            </li>
            <li>
              <strong>Vaccination Support:</strong> We promote full vaccination
              and boosters for all staff and caregivers to reduce risk.
            </li>
            <li>
              <strong>Virtual Consultations:</strong> When appropriate, we offer
              remote check-ins to minimize in-person contact and maintain
              continuity of care.
            </li>
          </ul>

          <p>
            Our caregivers are trained to serve diverse communities and
            understand the importance of COVID-19 prevention, especially in
            senior home care. Families in NYC can rest assured that we take
            every step to create a safe and supportive environment.
          </p>

          <p>
            If you have questions about our COVID-19 safety measures or need
            in-home care in New York City, please contact us at{" "}
            <strong>516-367-2266</strong> or email{" "}
            <strong>info@cottagehomecare.com</strong>. We’re here to help you
            with trusted care during uncertain times.
          </p>

          <p>
            Thank you for choosing Cottage Home Care Services — your reliable
            source for COVID-safe home health care in NYC.
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
