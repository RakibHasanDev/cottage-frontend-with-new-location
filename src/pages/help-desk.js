import React, { Suspense, useState } from "react";

import { GiSandsOfTime } from "react-icons/gi";
import { BsTable } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";

import Link from "next/link";
import OverlayLoading from "@/components/shared/OverlayLoading";
import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import Head from "next/head";

const GeneralRequest = dynamic(
  () => import("@/components/helpdesk/generalRequest"),
  {
    suspense: true,
    ssr: false,
  }
);

const PayStubAccess = dynamic(
  () => import("@/components/helpdesk/PayStubAccess"),
  {
    suspense: true,
    ssr: false,
  }
);
const PayrollInquiries = dynamic(
  () => import("@/components/helpdesk/PayrollInquiries"),
  {
    suspense: true,
    ssr: false,
  }
);
const RequestSupplies = dynamic(
  () => import("@/components/helpdesk/RequestSupplies"),
  {
    suspense: true,
    ssr: false,
  }
);
const RequestPto = dynamic(() => import("@/components/helpdesk/RequestPto"), {
  suspense: true,
  ssr: false,
});

const Placeholder = () => (
  <div>
    <SkeletonLoading />
  </div>
);

const HelpDesk = () => {
  const [loading, setLoading] = useState(false);

  const stuffs = [
    {
      icon: <GiSandsOfTime />,
      name: "EVV Clock In/Out",
      description: "Instructions to clock in and out of EVV",
      path: "clock-in-out",
    },
    {
      icon: <BsTable />,
      name: "View Your PTO",
      description: "Click here to view your paid time off",
      link: "https://hcm.viventium.com/apps/account/viventium/login",
    },
    {
      icon: <AiOutlineFileSearch />,
      name: "View Your Pay Stub",
      description: "View your latest pay stub",
      link: "https://hcm.viventium.com/apps/account/viventium/login",
    },
  ];

  return (
    <>
      <Head>
        <title>Help Desk - Cottage Home Care Services</title>
        <meta
          name="description"
          content="Access the Help Desk at Cottage Home Care to manage Clock In/Out, PayStubs, PTO, requests, payroll info, and supplies—all in one place."
        />
        <meta
          name="keywords"
          content="Cottage Home Care Help Desk, employee support, clock in, clock out, PayStub access, PTO management, general requests, payroll information, request supplies, administrative help, healthcare staff support"
        />
        <link rel="canonical" href="https://cottagehomecare.com/help-desk/" />
      </Head>

      <main className="min-h-screen dark:bg-slate-600 ">
        {loading && <OverlayLoading />}

        <div className="help-desk-cover">
          <h1 className="text-center w-full h-full flex justify-center items-center text-white text-3xl md:text-3xl xl:text-5xl font-bold text-shadow league-spartan">
            Help Desk
          </h1>
        </div>

        <div className="grid md:grid-cols-3 mx-auto w-[95%] md:w-[90%] 2xl:w-[75%]  py-6  gap-10 ">
          {stuffs?.map((stuff, index) => (
            <div key={index}>
              <div
                style={{ boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.3)" }}
                className=" rounded-lg py-10 bg-hov3 stuff-div dark:bg-slate-800 "
              >
                <h1 className="text-3xl md:text-5xl flex justify-center items-center w-20 md:w-[90px] h-20 md:h-[90px]  mx-auto rounded-full bg-[#00A6B2] text-white stuff-icon">
                  {stuff?.icon}
                </h1>

                <h1 className="text-center mt-5 font-semibold text-xl md:text-2xl dark:text-gray-100 league-spartan">
                  {stuff?.name}
                </h1>

                <p className="text-center mt-2 md:text-lg 2xl:text-xl dark:text-gray-100 league-spartan font-semibold">
                  {stuff?.description}
                </p>

                <div className="text-center mt-8">
                  {stuff?.link ? (
                    <a
                      href={stuff?.link}
                      target="_blank"
                      className="px-7 p-3.5 rounded-full font-semibold uppercase bg-[#00A6B2] text-white shadow-md stuff-button "
                      rel="nofollow"
                    >
                      {" "}
                      view
                    </a>
                  ) : (
                    <Link
                      href={`/${stuff?.path}`}
                      className="px-7 p-3.5 rounded-full font-semibold uppercase bg-[#00A6B2] text-white shadow-md stuff-button "
                    >
                      {" "}
                      view
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 mx-auto w-[95%] md:w-[90%] 2xl:w-[75%] pt-8 pb-6 gap-10 2xl:gap-20 ">
          <div>
            {/* <GeneralRequest loading={loading} setLoading={setLoading} /> */}

            <Suspense fallback={<Placeholder />}>
              <GeneralRequest loading={loading} setLoading={setLoading} />
            </Suspense>
          </div>

          <div>
            <Suspense fallback={<Placeholder />}>
              <PayStubAccess loading={loading} setLoading={setLoading} />
            </Suspense>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto w-[95%] md:w-[90%] 2xl:w-[75%] pt-8 pb-6 md:pb-10 gap-10 2xl:gap-10 ">
          <div>
            <Suspense fallback={<Placeholder />}>
              <PayrollInquiries loading={loading} setLoading={setLoading} />
            </Suspense>
          </div>

          <div>
            <Suspense fallback={<Placeholder />}>
              <RequestSupplies loading={loading} setLoading={setLoading} />
            </Suspense>
          </div>

          <div>
            <Suspense fallback={<Placeholder />}>
              <RequestPto loading={loading} setLoading={setLoading} />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
};

export default HelpDesk;
