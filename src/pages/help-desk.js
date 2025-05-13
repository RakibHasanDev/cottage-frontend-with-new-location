import React, { Suspense, useState } from "react";

import { GiSandsOfTime } from "react-icons/gi";
import { BsTable } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";

import Link from "next/link";
import OverlayLoading from "@/components/shared/OverlayLoading";
import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import Head from "next/head";
import BannerWithBreadcrumbs from "@/utils/BannerWithBreadcrumbs";

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
        <title>Help Desk Support | Cottage Home Care Services Inc</title>

        <meta
          name="description"
          content="Access the Help Desk at Cottage Home Care to manage Clock In/Out, PayStubs, PTO, requests, payroll info, and supplies—all in one place."
        />
        <meta
          name="keywords"
          content="Cottage Home Care Help Desk, employee support, clock in, clock out, PayStub access, PTO management, general requests, payroll information, request supplies, administrative help, healthcare staff support"
        />

        {/* Canonical & Alternate URLs */}
        <link
          rel="alternate"
          href="https://cottagehomecare.com/help-desk/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/help-desk/"
          hreflang="x-default"
        />
        <link rel="canonical" href="https://cottagehomecare.com/help-desk/" />

        {/* ✅ Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Help Desk Support | Cottage Home Care Services Inc"
        />
        <meta
          property="og:description"
          content="Manage Clock In/Out, view PayStubs, request PTO, submit general requests, and access payroll and supply services via our Help Desk portal."
        />
        <meta
          property="og:url"
          content="https://cottagehomecare.com/help-desk/"
        />
        <meta
          property="og:image"
          content="https://cottagehomecare.com/assets/cottage-home-care-logo.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cottage Home Care Services" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cottagecareny" />
        <meta name="twitter:creator" content="@cottagecareny" />
        <meta
          name="twitter:title"
          content="Help Desk Support | Cottage Home Care Services Inc"
        />
        <meta
          name="twitter:description"
          content="Quickly access Clock In/Out tools, PayStubs, PTO requests, payroll help, and supply requests through the Cottage Help Desk."
        />
        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/assets/cottage-home-care-logo.webp"
        />
      </Head>

      <main className="min-h-screen dark:bg-slate-600 ">
        {loading && <OverlayLoading />}

        <div className="help-desk-cover">
          <h1 className="text-center w-full h-[75%] flex justify-center items-center text-white text-3xl md:text-3xl xl:text-5xl font-bold text-shadow league-spartan">
            Help Desk
          </h1>

          <h2 className="seo-text-hidden ">
            Help Desk – Paystubs, PTO, Clock In/Out, and Support
          </h2>
          <BannerWithBreadcrumbs title="Help Desk" />
        </div>

        <div className="py-10 w-[95%] lg:w-[80%] mx-auto dark:text-gray-100 seo-text-hidden ">
          <p>
            <strong>Help Desk at Cottage Home Care Services</strong>
          </p>

          <p>
            At <strong>Cottage Home Care Services</strong>, we understand the
            importance of providing easy and reliable access to essential
            employee resources. Our Help Desk is designed to support our
            caregivers, staff, and employees by offering quick links to
            important tools and information. Whether you need to clock in and
            out, view your pay stub, or check your paid time off (PTO) balance,
            the Cottage Home Care Help Desk is here to assist you anytime,
            anywhere.
          </p>

          <p>
            We are committed to ensuring that our team has the support they need
            to manage their work efficiently and focus on what matters
            most—delivering compassionate, high-quality care to our clients
            across New York City, Nassau, Suffolk County, Westchester, and
            Albany.
          </p>

          <p>
            <strong>
              What You Can Access Through the Cottage Home Care Help Desk
            </strong>
          </p>

          <ul>
            <li>
              <strong>EVV Clock In/Out:</strong> Easily clock in and out through
              our Electronic Visit Verification (EVV) system to ensure your work
              hours are accurately recorded. Access clear instructions to
              streamline your daily check-in and check-out process.
            </li>
            <li>
              <strong>View PTO Balance:</strong> Stay updated on your paid time
              off (PTO) hours by logging into our system. Track your vacation
              time, sick leave, and personal days conveniently through a secure
              online platform.
            </li>
            <li>
              <strong>View Your Pay Stub:</strong> Instantly access your latest
              pay stubs and payment history. Manage your earnings information
              with ease and ensure you have accurate records for your financial
              planning.
            </li>
          </ul>

          <p>
            <strong>Why Use the Cottage Home Care Help Desk?</strong>
          </p>

          <ul>
            <li>
              <strong>24/7 Accessibility:</strong> Access important information
              and resources anytime, from any device, whether you are at home or
              on the go.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Our online portal is
              simple, fast, and secure, designed to make navigating your
              work-related information easy and hassle-free.
            </li>
            <li>
              <strong>Efficient Time Management:</strong> Quickly check your
              schedules, PTO balances, and pay information without the need for
              long wait times or paperwork.
            </li>
            <li>
              <strong>Employee Support:</strong> Our Help Desk is part of our
              broader commitment to supporting our employees needs, ensuring
              that your questions and concerns are addressed promptly.
            </li>
          </ul>

          <p>
            <strong>How to Get Started</strong>
          </p>

          <p>
            Using the Cottage Home Care Help Desk is simple. Visit the Help Desk
            page, and click on the appropriate link depending on the task you
            need to complete. For clocking in and out, following the EVV
            instructions will guide you through the process. To view your PTO or
            pay stubs, you can log in securely to the system and access your
            information with just a few clicks.
          </p>

          <p>
            If you encounter any issues or need additional support, our team is
            always ready to assist you. You can reach out by calling{" "}
            <strong>516-367-2266</strong> or emailing{" "}
            <strong>info@cottagehomecare.com</strong> for help.
          </p>

          <p>
            <strong>Stay Connected with Cottage Home Care Services</strong>
          </p>

          <p>
            We encourage all our team members to stay connected with us through
            our social media platforms. Follow us on Facebook, Instagram, X
            (formerly Twitter), TikTok, and YouTube to stay updated on news,
            announcements, and community events.
          </p>

          <p>
            At Cottage Home Care Services, we are proud of our amazing staff and
            are committed to making your experience as smooth, efficient, and
            rewarding as possible. The Help Desk is just one of the many ways we
            show our appreciation and support for everything you do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 mx-auto w-[95%] md:w-[90%] 2xl:w-[75%]  py-6  gap-10 ">
          {stuffs?.map((stuff, index) => (
            <div key={index}>
              <div
                style={{ boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.3)" }}
                className=" rounded-lg py-10 bg-hov3 stuff-div dark:bg-slate-800 "
              >
                <h5 className="text-3xl md:text-5xl flex justify-center items-center w-20 md:w-[90px] h-20 md:h-[90px]  mx-auto rounded-full bg-[#00A6B2] text-white stuff-icon">
                  {stuff?.icon}
                </h5>

                <h6 className="text-center mt-5 font-semibold text-xl md:text-2xl dark:text-gray-100 league-spartan">
                  {stuff?.name}
                </h6>

                <p className="text-center mt-2 md:text-lg 2xl:text-xl dark:text-gray-100 league-spartan font-semibold">
                  {stuff?.description}
                </p>

                <div className="text-center mt-8">
                  {stuff?.link ? (
                    <a
                      href={stuff?.link}
                      target="_blank"
                      className="px-7 p-3.5 rounded-full font-semibold uppercase bg-[#00A6B2] text-white shadow-md stuff-button "
                      rel="nofollow noopener noreferrer"
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
