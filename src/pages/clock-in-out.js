import Head from "next/head";
import React from "react";

const ClockInOut = () => {
  return (
    <>
      <Head>
        <title>Clock In & Out Instructions - Cottage Home Care</title>
        <meta
          name="description"
          content="Learn how caregivers at Cottage and Celestial Home Care can accurately clock in and out with step-by-step call procedures and duty codes."
        />
        <meta
          name="keywords"
          content="clock in instructions, clock out guide, Cottage Home Care, Celestial Home Care, caregiver clock in, duty codes, timekeeping, assignment ID, caregiver steps, phone dial instructions"
        />
        <link
          rel="canonical"
          href="https://cottagehomecare.com/clock-in-out/"
        />
      </Head>
      <main className="min-h-screen dark:bg-slate-600">
        <div className="clockInOut-cover"></div>

        <div>
          <p className="w-[85%]  md:text-center mx-auto dark:text-gray-100 text-base lg:text-xl font-medium mt-8 md:mt-16 mb-5 text-justify">
            These instructions should be followed by the caregivers to
            accurately record their Clock-In and Clock-Out times, along with any
            relevant duty codes if applicable. <span>{`It's`}</span> essential
            for Celestial Home Care to ensure that their caregivers are trained
            in these procedures for efficient and accurate timekeeping.
          </p>
        </div>

        <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 my-5 gap-3 lg:gap-0">
          <div>
            <h1 className="text-lg lg:text-2xl  font-semibold dark:text-gray-100">
              Clock-In Instructions (Cottage):
            </h1>
            <h2 className="sr-only">
              Clock In and Out for Cottage Caregivers – Access Portal
            </h2>

            <ul className="list-decimal mt-2 ml-4 space-y-1 xl:text-lg font-medium dark:text-gray-100">
              <li>
                Dial{" "}
                <a
                  className="text-[#00A6B2] font-semibold"
                  href="tel:+1866-982-3022"
                >
                  866-982-3022
                </a>{" "}
                from the <span>{`patient's`}</span> phone.
              </li>
              <li>Press 1 to initiate the Clock-In process.</li>
              <li>Enter the Caregiver’s 6-digit assignment ID.</li>
              <li>Confirm the entry.</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg lg:text-2xl  font-semibold dark:text-gray-100">
              Clock-Out Instructions (Cottage):
            </h1>

            <ul className="list-decimal mt-2 ml-4 space-y-1 xl:text-lg font-medium dark:text-gray-100">
              <li>
                Dial{" "}
                <a
                  className="text-[#00A6B2] font-semibold"
                  href="tel:+1866-982-3022"
                >
                  866-982-3022
                </a>{" "}
                from the <span>{`patient's`}</span> phone.
              </li>
              <li>Press 2 to begin the Clock-Out process.</li>
              <li>Enter the Caregiver’s 6-digit assignment ID.</li>
              <li>
                Optionally, enter duty codes from the list provided: 103, 106,
                111, 112, 206, 301, 411, 502, 511.
              </li>
              <li>To complete the Clock-Out process, press: 000.</li>
            </ul>
          </div>
        </div>

        <p></p>

        <p className="w-[85%]  md:text-center mx-auto dark:text-gray-100 text-base lg:text-xl font-medium mt-8 md:mt-16 mb-5 text-justify ">
          These instructions should be followed by the caregivers to accurately
          record their Clock-In and Clock-Out times, along with any relevant
          duty codes if applicable. It&#39;s essential for Celestial Home Care
          to ensure that their caregivers are trained in these procedures for
          efficient and accurate timekeeping.
        </p>
        <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2  pb-10 gap-3 lg:gap-0">
          <div>
            <h1 className="text-lg lg:text-2xl  font-semibold dark:text-gray-100">
              Clock-In Instructions (Celestial):
            </h1>

            <ul className="list-decimal mt-2 ml-4 space-y-1 xl:text-lg font-medium dark:text-gray-100">
              <li>
                Dial{" "}
                <a
                  className="text-[#00A6B2] font-semibold"
                  href="tel:+1866-979-3669"
                >
                  866-979-3669{" "}
                </a>{" "}
                from the patient&#39;s phone.
              </li>
              <li>Press 1 to initiate the Clock-In process.</li>
              <li>Enter the Caregiver’s 6-digit assignment ID.</li>
              <li>Confirm the entry.</li>
            </ul>
          </div>
          <div>
            <p className="text-lg lg:text-2xl  font-semibold dark:text-gray-100">
              Clock-Out Instructions (Celestial):
            </p>

            <ul className="list-decimal mt-2 ml-4 space-y-1 xl:text-lg font-medium dark:text-gray-100">
              <li>
                Dial{" "}
                <a
                  className="text-[#00A6B2] font-semibold"
                  href="tel:+1866-979-3669"
                >
                  866-979-3669
                </a>{" "}
                from the patient&#39;s phone.
              </li>
              <li>Press 2 to begin the Clock-Out process.</li>
              <li>Enter the Caregiver’s 6-digit assignment ID.</li>
              <li>
                Optionally, enter duty codes from the list provided: 103, 106,
                111, 112, 206, 301, 411, 502, 511.
              </li>
              <li>To complete the Clock-Out process, press: 000.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default ClockInOut;
