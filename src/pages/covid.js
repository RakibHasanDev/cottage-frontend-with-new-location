import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
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
    <div className=" px-5  dark:bg-slate-600">
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
    </div>
  );
};

export default Covid;
