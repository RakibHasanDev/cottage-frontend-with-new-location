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
          content="Stay updated on COVID-19 safety and health services from Cottage Home Care. Learn how we protect our community during the coronavirus pandemic."
        />
        <meta
          name="keywords"
          content="COVID-19 updates, coronavirus safety measures, Cottage Home Care COVID response, health services during COVID, community health safety, pandemic response, health and safety protocols, COVID-19 healthcare services"
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
