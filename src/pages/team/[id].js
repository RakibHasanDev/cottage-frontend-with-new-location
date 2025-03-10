import Head from "next/head";
import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";
import React, { useEffect, useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import ReactLinkify from "react-linkify";
import { PhotoProvider, PhotoView } from "react-photo-view";

export async function getStaticPaths() {
  const res = await fetch(
    "https://cottage-backend-voilerplate.vercel.app/employee"
  );
  let employees = await res.json();

  if (!Array.isArray(employees)) {
    console.error("employees is not an array:", employees);
    employees = [];
  }

  const paths = employees.map((employee) => ({
    params: { id: employee._id.toString() },
  }));

  return {
    paths,
    fallback: false, // No fallback, all pages must be pre-built
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://cottage-backend-voilerplate.vercel.app/employee/${params.id}`
  );
  const employee = await res.json();

  if (!employee || Object.keys(employee).length === 0) {
    return { notFound: true };
  }

  return {
    props: { employee },
  };
}

const EmployeeDetails = ({ employee }) => {
  const [currentPageUrl, setCurrentPageUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPageUrl(window.location.href);
    }
  }, []);

  const customComponentDecorator = (href, text, key) => (
    <a
      href={href}
      key={key}
      style={{ color: "blue" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );

  return (
    <>
      <Head>
        <title>{employee?.name} - Cottage Home Care Services</title>
        <meta
          name="description"
          content={`${employee?.description} at Cottage Home Care Services`}
        />
        <meta
          name="keywords"
          content={`${employee?.name}, ${employee?.designation}, Cottage Home Care Services, home care staff, caregiver, professional care services`}
        />
        <meta
          property="og:title"
          content={`${employee?.name} - Cottage Home Care`}
        />
        <meta
          property="og:description"
          content={`${employee?.designation} at Cottage Home Care Services`}
        />
        <meta property="og:url" content={currentPageUrl} />
        {employee?.img && <meta property="og:image" content={employee?.img} />}
      </Head>
      <main className="min-h-screen dark:bg-slate-700">
        <div className="pt-[5vh]"></div>

        <div
          id="employee-details"
          className="bg-slate-100 md:bg-white w-[95%] md:max-w-4xl lg:max-w-5xl md:min-h-[70vh] mx-auto shadow-2xl rounded-xl
           relative dark:bg-slate-500"
        >
          <div className="p-4 md:p-8 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-gray-600">
                <div>
                  <PhotoProvider>
                    <PhotoView src={employee?.img}>
                      <img
                        className="w-[55px] h-[55px] md:w-20 md:h-20 rounded-full shadow-md cursor-pointer"
                        src={employee?.img}
                        alt={employee?.name}
                        width="55"
                        height="55"
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>
                <div className="open-sans">
                  <h1 className=" font-bold text-base md:text-[22px] dark:text-white league-spartan">
                    {employee?.name}
                  </h1>
                  <h5 className="mt-1 md:block hidden md:text-[18px]">
                    <span className="font-semibold dark:text-white league-spartan">
                      {employee?.designation}
                    </span>
                    <span className="mx-1 font-semibold text-gray-500 dark:text-gray-200 league-spartan">
                      at
                    </span>
                    <span className="font-semibold dark:text-white league-spartan">
                      {" "}
                      Cottage Home Care Services
                    </span>
                  </h5>
                  {employee?._id === "65dcede2331dfddc25c80c26" ? (
                    <>
                      <h5 className="space-y-0.5 block md:hidden dark:text-gray-100 league-spartan">
                        <p className="text-sm font-semibold">
                          {" "}
                          Chief Operating Officer{" "}
                        </p>
                        <p className="text-xs font-semibold">
                          At Cottage Home Care Services
                        </p>
                      </h5>
                    </>
                  ) : (
                    <>
                      <h5 className="space-y-0.5 block md:hidden dark:text-gray-100">
                        <p className="text-sm font-semibold league-spartan">
                          {employee?.designation}
                        </p>
                        <p className="text-xs font-semibold">
                          At Cottage Home Care Services
                        </p>
                      </h5>
                    </>
                  )}
                </div>
              </div>
              <div>
                <Link
                  href="/team"
                  className=" px-2 py-2.5 md:px-4 md:py-3 bg-black text-white rounded-lg shadow lg:mr-10 text-[10px] md:text-base league-spartan"
                >
                  All Employees
                </Link>
              </div>
            </div>

            <div className="md:mt-5 mt-3 open-sans text-[16px] leading-relaxed ">
              {employee?.primaryNumber && (
                <p className="text-gray-600 dark:text-gray-100 text-sm md:text-base">
                  <b>Primary Number:</b>{" "}
                  <a href={`tel:+1${employee?.primaryNumber}`}>
                    {employee?.primaryNumber}
                  </a>
                </p>
              )}

              {employee?.directNumber && (
                <p className="text-gray-600 dark:text-gray-100 text-sm md:text-base">
                  {" "}
                  <b>Cell:</b>{" "}
                  <a href={`tel:+1${employee?.directNumber}`}>
                    {employee?.directNumber}
                  </a>{" "}
                </p>
              )}
              {employee?.extension && (
                <p className="text-gray-600 dark:text-gray-100 text-sm md:text-base">
                  {" "}
                  <b>Extension: </b>{" "}
                  <a href={`tel:+1${employee?.extension}`}>
                    {employee?.extension}
                  </a>{" "}
                </p>
              )}
              {employee?.email && (
                <p className="text-gray-600 dark:text-gray-100 text-sm md:text-base">
                  {" "}
                  <b>Email:</b>{" "}
                  <a href={`mailto:${employee?.email}`}>{employee?.email}</a>
                </p>
              )}
            </div>

            <ReactLinkify componentDecorator={customComponentDecorator}>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="text-justify mt-3 md:mt-3 pb-10 dark:text-gray-100 text-[#6c6262] text-sm md:text-base text-[16px] leading-relaxed open-sans "
              >
                {employee?.description}
              </p>
            </ReactLinkify>

            <div className="flex items-center justify-between md:block">
              <div className="flex gap-3 text-2xl lg:text-3xl md:absolute bottom-8 left-14  dark:text-gray-100">
                {employee?.facebook ? (
                  <>
                    <a
                      href={employee?.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaSquareFacebook className="bg-hov2" />
                    </a>
                  </>
                ) : (
                  <>
                    <button className="bg-hov2 cursor-default" disabled>
                      <FaSquareFacebook className="bg-hov2" />
                    </button>
                  </>
                )}
                {employee?.instagram ? (
                  <>
                    <a
                      href={employee?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagramSquare className="bg-hov2" />
                    </a>
                  </>
                ) : (
                  <>
                    <button className="bg-hov2 cursor-default" disabled>
                      <FaInstagramSquare className="bg-hov2" />
                    </button>
                  </>
                )}

                {employee?.twitter ? (
                  <>
                    <a
                      href={employee?.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter className="bg-hov2" />
                    </a>
                  </>
                ) : (
                  <>
                    <button className="bg-hov2 cursor-default" disabled>
                      <FaXTwitter className="bg-hov2" />
                    </button>
                  </>
                )}
                {employee?.linkEdin ? (
                  <>
                    <a
                      href={employee?.linkEdin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="bg-hov2" />
                    </a>
                  </>
                ) : (
                  <>
                    <button className="bg-hov2 cursor-default" disabled>
                      <FaLinkedin className="bg-hov2" />
                    </button>
                  </>
                )}

                {employee?.web && (
                  <>
                    <a
                      href={employee?.web}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineGlobal className="bg-hov2" />
                    </a>
                  </>
                )}
              </div>
              <div className="md:absolute bottom-8 right-14   my-4 md:my-0 ">
                <QRCodeCanvas className="w-10" value={currentPageUrl} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EmployeeDetails; // ✅ Ensure this is a valid React component
