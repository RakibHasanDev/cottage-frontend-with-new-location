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
        <title>COVID-19 - Cottage Home Care Services</title>
        <meta
          name="description"
          content="Stay updated with the latest COVID-19 safety measures and health services provided by Cottage Home Care. Learn more about our response to the coronavirus pandemic and how we ensure the safety and health of our community."
        />
        <meta
          name="keywords"
          content="COVID-19 updates, coronavirus safety measures, Cottage Home Care COVID response, health services during COVID, community health safety, pandemic response, health and safety protocols, COVID-19 healthcare services"
        />
      </Head>
      <main className=" px-5  dark:bg-slate-600">
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
