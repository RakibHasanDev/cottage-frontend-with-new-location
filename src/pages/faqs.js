import BannerWithBreadcrumbs from "@/utils/BannerWithBreadcrumbs";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { FaRegQuestionCircle } from "react-icons/fa";

const Faqs = () => {
  const [tab, setTab] = useState(0);

  const [mounted, setMounted] = useState(false); // ✅ Prevents SSR issues

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    setMounted(true); // ✅ Runs only in the browser
  }, []);

  const paidItems = [
    {
      id: 1,
      question: "How much do you pay the caregivers?",
      answer:
        "For any pay rate related questions, please contact us so we can give you the most up-to-date rate, and avoid any confusion.",
    },
    {
      id: 6,
      question: "Does Cottage give Overtime?",
      answer:
        "No, we limit our caregivers to work a maximum of 40 hours per week.",
    },
    {
      id: 3,
      question: "Is there a minimum number of hours I have to work?",
      answer: "No, as long as you do not exceed the maximum of 40 hours.",
    },

    {
      id: 5,
      question:
        "What is the pay schedule for Cottage/What payment method do you use?",
      answer:
        "Cheque/Direct Deposits are sent out every Friday! Payroll is done on Wednesday so please ensure all timesheets are submitted by Tuesday. Direct deposits are highly encouraged but we also offer payment through cheque.",
    },

    {
      id: 7,
      question: "Can I work for more than one patient?",
      answer:
        "You may work for any number of patients as long as the total combined hours does not exceed the maximum of 40 hours. Please note that hours from our company do not roll over to any other agencies you may be working with.",
    },
    {
      id: 8,
      question: "Can I get paid to take care of my spouse?",
      answer:
        "Unfortunately, if you are legally married, you cannot take care of your spouse and be paid for it. Please note that siblings, children, or even other friends and family are still permitted to do so!",
    },
    {
      id: 9,
      question: "Will I be reimbursed for my travel expenses?",
      answer:
        "No, we are not able to reimburse any travel expenses incurred during visits to a patient.",
    },
  ];

  const faqItems = [
    // {
    //   id: 11,
    //   question: "Do you have to be on Medicaid to qualify?",
    //   answer:
    //     "Yes. The CDPAP program is a medicaid funded program so therefore only available to those with medicaid.",
    // },
    {
      id: 66,
      question: "I don’t have Medicaid, what can I do?",
      answer:
        "Not to worry! If you do not have medicaid, we can assist you in applying for it and then help you complete the home care process. Give us a call at 516-367-2266!",
    },
    {
      id: 55,
      question: "Can I qualify with Medicare only?",
      answer:
        "No, but we can help you apply for Medicaid, give us a call at 516-367-2266!",
    },

    {
      id: 33,
      question: "What is the difference between Medicaid and Medicare?",
      answer:
        "Medicaid is a state and federal program that provides health coverage if you have a low income. Medicare is a federal program that provides health coverage if you are 65 and older or have a severe disability, no matter your income.",
    },
    {
      id: 77,
      question: "Will I still be eligible if I have Medicaid spend down?",
      answer:
        "A- As long as you pay your medicaid spend down each month, you can be eligible.",
    },
    {
      id: 88,
      question:
        "What is the difference between a certified Home Health Aide and a CDPAP personal assistant?",
      answer2: true,
    },
  ];

  const careItems = [
    // {
    //   id: 111,
    //   question: "Who can be a caregiver under the CDPAP program?",
    //   answer2: {
    //     des1: "Your son, daughter, grandchild, relative, friend or existing home attendant — anyone except your",
    //     des2: [
    //       "Legal spouse",
    //       "Designated representative (the person who makes home care decisions for you)",
    //       " Parent (if you are under 21).",
    //     ],
    //   },
    // },
    {
      id: 222,
      question:
        "My son is under 21 and needs care, am I qualified to be his caregiver?",
      answer:
        "Parents are allowed to be the caregiver for their children but only if the child is over the age of 21 years old. If they are under 21, a parent cannot be their caregiver.",
    },
    // {
    //   id: 333,
    //   question:
    //     "Can I be the caregiver for my neighbor/sibling/friend who qualifies for CDPAP?",
    //   answer:
    //     "Absolutely! As long as they are not your legally wed spouse or child under 21.",
    // },
    // {
    //   id: 444,
    //   question: "Can I become a CDPAP Personal Assistant if I am 18?",
    //   answer: "Yes! You can be a caregiver if you are 18 years or older.",
    // },
    // {
    //   id: 555,
    //   question:
    //     "Do I need to be a US Citizen to work as a CDPAP Personal Assistant?",
    //   answer:
    //     "No, as long as you are authorized to work in the United states, you may work as a CDPAP caregiver!",
    // },
    {
      id: 666,
      question:
        "Can I be the caregiver for someone that is also living in the same household?",
      answer:
        "Yes! As long as they are not your legally wed spouse or child under 21.",
    },
  ];

  const enrollmentItems = [
    {
      id: 1111,
      question: "What is the process of signing up?",
      answer:
        "The easiest way is to just give our Intake team a call at 516-367-2266 who can guide you through the enrollment process. We will send you some forms to fill out with the patient's information and a form to be filled out by the patient's doctor.",
    },
    {
      id: 2222,
      question: "How long does it take to be approved for services?",
      answer:
        "It can take anywhere from two weeks to three months, depending on how fast your insurance sends approval.",
    },
    {
      id: 3333,
      question: "Will I need to visit your office in-person to enroll?",
      answer:
        " Nope! You’ll email or fax the necessary forms, and we’ll come to you for the orientation.",
    },
    {
      id: 5555,
      question: "I filled out all the forms, where can I submit them?",
      answer4:
        "You can email them to: info@cottagehomecare.com or fax them to: 516-367-1067",
    },
    {
      id: 4444,
      question: "Where are you guys located?",
      answer3: {
        des1: "You can visit to our offices. We have offices in:",
        des2: [
          "25 Newbridge Road, Suite 302, Hicksville, New York 11801, United States",
          "126-01 Liberty Avenue, South Richmond Hill Queens, New York 11419, United States",
          "391 East 149th Street, Bronx, New York 10455, United States - (Recruitment Center)",
          "130 Washington Ave 3rd Floor Unit G, Albany, NY 12210 ",
        ],
      },
    },
  ];
  const programItems = [
    {
      id: 11111,
      question: "Do you guys offer your services outside of New York? ",
      answer:
        "Cottage Home Care only operates within New York City, Nassau, Suffolk, Westchester & Albany. We are growing fast and this may change so give us a call and ask if we serve your area in New York! 516-367-2266",
    },
    {
      id: 22222,
      question: "Do I have to pay you guys anything?",
      answer:
        "Absolutely not! The entire program is covered by your Medicaid including our services!",
    },
  ];

  const questions1 = [
    {
      title: "How much will I get paid?",
      description: "FAQs about Payment + Benefits",
      path: "get-paid",
    },
    {
      title: "Am I eligible?",
      description: "FAQs about Medicaid and Insurance",
      path: "eligible",
    },
    {
      title: "Can I be a caregiver?",
      description: "FAQs for prospective caregivers",
      path: "caregiver",
    },
  ];

  const questions2 = [
    {
      title: "How does enrollment work?",
      description: "FAQs about the enrollment process",
      path: "sign-up",
    },
    {
      title: "How does this program work?",
      description: "General Questions about Cottage Home Care ",
      path: "program",
    },
  ];

  const handleClick = (id) => {
    setTab((prevTab) => (prevTab === id ? 0 : id));
  };

  const handleRotate = (id) => (tab === id ? "rotate-180" : "");

  const handleToggle = (id) =>
    `transition-max-height ${tab === id ? "open" : ""}`;

  return (
    <>
      <Head>
        <title>FAQs | Cottage Home Care Services Inc - Your Questions</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <meta
          name="description"
          content="Find answers to FAQs about home care, COVID-19 safety, pricing, and policies. Get the info you need to make smart decisions about your care options."
        />
        <meta
          name="keywords"
          content="home care FAQs, Cottage Home Care services, COVID-19 safety FAQ, home care pricing questions, home care policies, senior care solutions, healthcare FAQs, Cottage Home Care information"
        />

        {/* Canonical & Alternate URLs */}
        <link
          rel="alternate"
          href="https://cottagehomecare.com/faqs/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/faqs/"
          hreflang="x-default"
        />
        <link rel="canonical" href="https://cottagehomecare.com/faqs/" />

        {/* ✅ Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="FAQs | Cottage Home Care Services Inc - Your Questions"
        />
        <meta
          property="og:description"
          content="Explore frequently asked questions about home care services, COVID-19 precautions, pricing, and Cottage Home Care policies."
        />
        <meta property="og:url" content="https://cottagehomecare.com/faqs/" />
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
          content="FAQs | Cottage Home Care Services Inc - Your Questions"
        />
        <meta
          name="twitter:description"
          content="Find clear answers to common questions about home care services, COVID-19 safety, costs, and policies at Cottage Home Care."
        />
        <meta
          name="twitter:image"
          content="https://cottagehomecare.com/assets/cottage-home-care-logo.webp"
        />
      </Head>

      <main className="min-h-screen dark:bg-slate-600 bg-blue-50">
        <div className="relative bg-cover bg-center text-center h-[40vh] md:min-h-[82vh] faqs-Banner ">
          <div className="absolute bottom-5 md:bottom-10 left-4">
            <BannerWithBreadcrumbs title="Faqs" />
          </div>
        </div>

        <div className="">
          <h1 className=" mt-5 md:mt-8 text-center font-bold text-2xl md:text-2xl  2xl:text-4xl  dark:text-gray-100 text-[#00A6B2] league-spartan">
            What is your #1 question today?
          </h1>

          <div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-[90%] lg:w-[60%] mx-auto gap-8 my-8"
            id="faqs"
          >
            {questions1?.map((qus, index) => (
              <div key={index}>
                <a
                  className="bg-[#00A6B2] px-4 py-10 shadow-md cursor-pointer text-white block h-44"
                  href={`#${qus?.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetElement = document.getElementById(qus?.path);
                    const navbarHeight = 120;
                    if (targetElement) {
                      const offsetTop = targetElement.offsetTop - navbarHeight;
                      window.scrollTo({ top: offsetTop });
                    }
                  }}
                >
                  <p className="text-center text-xl md:text-2xl league-spartan font-semibold">
                    {qus?.title}
                  </p>
                  <p className="text-center md:text-lg mt-3 open-sans">
                    {qus?.description}
                  </p>
                </a>
              </div>
            ))}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2  w-[90%] lg:w-[45%] mx-auto gap-8 my-8"
            id="faqs2"
          >
            {questions2?.map((qus, index) => (
              <div key={index}>
                <a
                  className="bg-[#00A6B2] px-4 py-10 shadow-md cursor-pointer text-white block h-44"
                  href={`#${qus?.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetElement = document.getElementById(qus?.path);
                    const navbarHeight = 120;
                    if (targetElement) {
                      const offsetTop = targetElement.offsetTop - navbarHeight;
                      window.scrollTo({ top: offsetTop });
                    }
                  }}
                >
                  <p className="text-center text-xl md:text-2xl league-spartan font-semibold">
                    {qus?.title}
                  </p>
                  <p className="text-center md:text-lg mt-3 open-sans">
                    {qus?.description}
                  </p>
                </a>
              </div>
            ))}
          </div>

          {/* 1st section  */}

          <div className="p-5" id="get-paid">
            <div className="flex justify-center items-start my-2">
              <div className="w-full md:w-[65%] mx-auto my-1 ">
                <h2 className="text-2xl md:text-2xl  2xl:text-4xl font-bold text-center mb-2  dark:text-gray-100 text-[#00A6B2] league-spartan">
                  {" "}
                  How much will I get paid?
                </h2>
                <p className="text-lg md:text-2xl font-semibold text-center mb-2  dark:text-gray-100 text-[#00A6B2] league-spartan">
                  {" "}
                  Questions about Payment
                </p>
                <p className="text-base md:text-xl font-bold text-center mb-2 md:mb-3 dark:text-gray-100 text-[#00A6B2] league-spartan">
                  {" "}
                  Caregiver Pay Rate
                </p>

                <ul className="flex flex-col">
                  {paidItems.map((item) => (
                    <li
                      key={item.id}
                      className={`bg-white dark:bg-slate-400 my-2 shadow-lg ${
                        tab === item.id
                          ? "border-open dark:text-gray-100"
                          : " border-l-[2px] border-white dark:border-slate-400 "
                      }`}
                    >
                      <button
                        onClick={() => handleClick(item.id)}
                        className="w-full focus:outline-none"
                      >
                        <h3 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer mother-box dark:text-gray-100 text-start md:text-center">
                          <p className="flex md:text-lg items-center gap-2 font-medium question dark:text-gray-100 ">
                            {" "}
                            <span>
                              <FaRegQuestionCircle className="text-[#00A6B2] font-bold text-xl dark:text-gray-100" />
                            </span>
                            <span className="w-[95%] md:w-full mx-auto px-2 md:px-0 text-[16px] leading-relaxed open-sans font-semibold">
                              {item.question}
                            </span>{" "}
                          </p>
                          <span>
                            <svg
                              className={` fill-current text-[#00A6B2] dark:text-gray-100 h-6 w-6 transform  transition-transform duration-100  ${handleRotate(
                                item.id
                              )}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                            </svg>
                          </span>
                        </h3>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${handleToggle(
                          item.id
                        )}`}
                      >
                        {item?.answer && (
                          <h6 className="p-3 text-gray-900 dark:text-gray-100 text-[16px] leading-relaxed open-sans">
                            {item?.answer}
                          </h6>
                        )}
                        {item?.answer2 && (
                          <div className="p-3 text-gray-900 dark:text-gray-100 my-1">
                            <p>{item?.answer2?.des1}</p>

                            <ul className="list-disc ml-4">
                              {item?.answer2?.des2?.map((ds, index) => (
                                <li key={index} className="my-1">
                                  {ds}
                                </li>
                              ))}
                            </ul>
                            <p>{item?.answer2?.des3}</p>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 1st section end */}

          {/* 2ns section start  */}

          <div className="p-5" id="eligible">
            <div className="flex justify-center items-start my-2">
              <div className="w-full md:w-[65%] mx-auto my-1 ">
                <p className="text-2xl md:text-2xl  2xl:text-4xl font-bold text-center mb-2 md:mb-2 dark:text-gray-100 text-[#00A6B2] league-spartan">
                  Am I eligible ?
                </p>
                <h3 className="text-lg md:text-2xl font-semibold text-center mb-2 md:mb-3 dark:text-gray-100 text-[#00A6B2] league-spartan">
                  Questions about Medicaid, Medicare & Insurance
                </h3>
                <h3 className="text-base md:text-xl font-bold text-center mb-2 md:mb-5 dark:text-gray-100 text-[#00A6B2] league-spartan">
                  Medicaid and Medicare
                </h3>
                <ul className="flex flex-col">
                  {faqItems.map((item) => (
                    <li
                      key={item.id}
                      className={`bg-white dark:bg-slate-400 my-2 shadow-lg ${
                        tab === item.id
                          ? "border-open dark:text-gray-100"
                          : "border-l-[2px] border-white dark:border-slate-400 "
                      }`}
                    >
                      <button
                        onClick={() => handleClick(item.id)}
                        className="w-full focus:outline-none"
                      >
                        <h5 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer mother-box dark:text-gray-100 text-start md:text-center">
                          <p className="flex items-center gap-2 question dark:text-gray-100 md:text-lg font-medium">
                            {" "}
                            <span>
                              <FaRegQuestionCircle className="text-[#00A6B2] font-bold text-xl dark:text-gray-100" />
                            </span>{" "}
                            <span className="w-[95%] md:w-full font-semibold mx-auto px-2 md:px-0 text-[16px] leading-relaxed open-sans">
                              {item.question}
                            </span>
                          </p>
                          <span>
                            <svg
                              className={`fill-current text-[#00A6B2] dark:text-gray-100 h-6 w-6 transform transition-transform duration-500  ${handleRotate(
                                item.id
                              )}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                            </svg>
                          </span>
                        </h5>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500  text-[16px] leading-relaxed open-sans ${handleToggle(
                          item.id
                        )}`}
                      >
                        {item?.answer2 === true ? (
                          <>
                            <p className="p-3 text-gray-900 dark:text-gray-100">
                              Home Health Aides are required to be certified by
                              the Department of Education hence they all go
                              through a multi-week rigorous training course.
                            </p>
                            <p className="p-3 text-gray-900 dark:text-gray-100">
                              CDPAP Personal Assistant on the other hand does
                              not need to be certified as the responsibility for
                              training and managing the PA falls upon the
                              patient.
                            </p>

                            <p className="p-3 text-gray-900 dark:text-gray-100">
                              Furthermore, if you do not have any friends or
                              family that can take care of you, we can assist
                              you in locating someone to fill the Personal
                              Assistant position. Just give us a call at{" "}
                              <a
                                href="tel:516-367-2266"
                                className="text-[#00A6B2] font-bold dark:text-[#ff1818]"
                              >
                                516-367-2266
                              </a>{" "}
                              !
                            </p>
                          </>
                        ) : (
                          <>
                            {item?.answer.includes("516-367-2266") ? (
                              <p
                                className="p-3 text-gray-900 dark:text-gray-100"
                                dangerouslySetInnerHTML={{
                                  __html: item.answer.replace(
                                    /(516-367-2266)/,
                                    '<a href="tel:516-367-2266" className="text-[#00A6B2] dark:text-[#ff1818] font-bold">$1</a>'
                                  ),
                                }}
                              ></p>
                            ) : (
                              <p className="p-3 text-gray-900 dark:text-gray-100">
                                {item.answer}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 2nd section end */}
          {/* 3rd section start  */}

          <div className="p-5" id="caregiver">
            <div className="flex justify-center items-start my-2">
              <div className="w-full md:w-[65%] mx-auto my-1 ">
                <p className="text-2xl md:text-2xl  2xl:text-4xl font-bold text-center mb-2 md:mb-2 dark:text-gray-100 text-[#00A6B2] league-spartan">
                  Can I be a caregiver?
                </p>
                <h3 className="text-lg md:text-2xl font-semibold text-center mb-2 md:mb-3 dark:text-gray-100 text-[#00A6B2] league-spartan">
                  Questions for caregivers
                </h3>
                <h3 className="text-base md:text-xl font-bold text-center mb-2 md:mb-5 dark:text-gray-100 text-[#00A6B2] league-spartan ">
                  Who can be a caregiver?
                </h3>
                <ul className="flex flex-col">
                  {careItems.map((item) => (
                    <li
                      key={item.id}
                      className={`bg-white dark:bg-slate-400 my-2 shadow-lg ${
                        tab === item.id
                          ? "border-open dark:text-gray-100"
                          : "border-l-[2px] border-white dark:border-slate-400 "
                      }`}
                    >
                      <button
                        onClick={() => handleClick(item.id)}
                        className="w-full focus:outline-none"
                      >
                        <h4 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer mother-box dark:text-gray-100 text-start md:text-center">
                          <p className="flex items-center gap-2 question dark:text-gray-100 md:text-lg font-medium">
                            {" "}
                            <span>
                              <FaRegQuestionCircle className="text-[#00A6B2] font-bold text-xl dark:text-gray-100" />
                            </span>{" "}
                            <span className="w-[95%] md:w-full mx-auto px-2 md:px-0 text-[16px] font-semibold leading-relaxed open-sans">
                              {item.question}
                            </span>
                          </p>
                          <span>
                            {" "}
                            <svg
                              className={`fill-current text-[#00A6B2] dark:text-gray-100 h-6 w-6 transform transition-transform duration-500  ${handleRotate(
                                item.id
                              )}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                            </svg>
                          </span>
                        </h4>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500 text-[16px] leading-relaxed open-sans ${handleToggle(
                          item.id
                        )}`}
                      >
                        {item?.answer2 ? (
                          <>
                            <p className="p-3 text-gray-900 dark:text-gray-100">
                              {item?.answer2?.des1}
                            </p>

                            <ul className="list-disc ml-7">
                              {item?.answer2?.des2?.map((ds, index) => (
                                <li key={index} className="my-1">
                                  {ds}
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <>
                            {item?.answer.includes("516-367-2266") ? (
                              <p
                                className="p-3 text-gray-900 dark:text-gray-100"
                                dangerouslySetInnerHTML={{
                                  __html: item.answer.replace(
                                    /(516-367-2266)/,
                                    '<a href="tel:516-367-2266" className="text-[#00A6B2] dark:text-[#ff1818] font-bold">$1</a>'
                                  ),
                                }}
                              ></p>
                            ) : (
                              <p className="p-3 text-gray-900 dark:text-gray-100">
                                {item.answer}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3rd section end */}
          {/* fourth section start  */}

          <div className="p-5" id="sign-up">
            <div className="flex justify-center items-start my-2">
              <div className="w-full md:w-[65%] mx-auto my-1 ">
                <p className="text-2xl md:text-2xl  2xl:text-4xl font-bold text-center mb-2 md:mb-2 dark:text-gray-100 text-[#00A6B2] league-spartan">
                  What are the steps to Sign up ?
                </p>
                <h3 className="text-lg md:text-2xl font-semibold text-center mb-2 md:mb-3 dark:text-gray-100 text-[#00A6B2] league-spartan">
                  Questions about the Enrollment Process
                </h3>
                <h3 className="text-base md:text-xl font-bold text-center mb-2 md:mb-5 dark:text-gray-100 text-[#00A6B2] league-spartan">
                  What is the process of signing up ?
                </h3>
                <ul className="flex flex-col">
                  {enrollmentItems.map((item) => (
                    <li
                      key={item.id}
                      className={`bg-white dark:bg-slate-400 my-2 shadow-lg ${
                        tab === item.id
                          ? "border-open dark:text-gray-100"
                          : "border-l-[2px] border-white dark:border-slate-400 "
                      }`}
                    >
                      <button
                        onClick={() => handleClick(item.id)}
                        className="w-full focus:outline-none"
                      >
                        <h6 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer mother-box dark:text-gray-100 text-start md:text-center">
                          <p className="flex items-center gap-2 question dark:text-gray-100 md:text-lg font-medium">
                            {" "}
                            <span>
                              <FaRegQuestionCircle className="text-[#00A6B2] font-bold text-xl dark:text-gray-100" />{" "}
                            </span>
                            <span className="w-[95%] md:w-full mx-auto px-2 md:px-0 text-[16px] leading-relaxed font-sans font-semibold">
                              {item.question}
                            </span>
                          </p>
                          <span>
                            <svg
                              className={`fill-current text-[#00A6B2] dark:text-gray-100 h-6 w-6 transform transition-transform duration-500  ${handleRotate(
                                item.id
                              )}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                            </svg>
                          </span>
                        </h6>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500 text-[16px] leading-relaxed open-sans ${handleToggle(
                          item.id
                        )}`}
                      >
                        {item?.answer && (
                          <p className="p-3 text-gray-900 dark:text-gray-100">
                            {item.answer}
                          </p>
                        )}

                        {item?.answer2 && (
                          <>
                            <p className="p-3 text-gray-900 dark:text-gray-100">
                              {item?.answer2?.des1}
                            </p>
                            <ul className="list-disc ml-6 mb-5">
                              {item?.answer2?.des2?.map((ans, index) => (
                                <li key={index} className="my-1">
                                  {ans}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        {item?.answer3 && (
                          <>
                            <p className="p-3 text-gray-900 dark:text-gray-100">
                              {item?.answer3?.des1}
                            </p>
                            <ul className="list-disc ml-6 pb-4">
                              {item?.answer3?.des2?.map((ans, index) => (
                                <li key={index} className="my-1">
                                  {ans}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {item?.answer4 && (
                          <p className="p-3 text-gray-900 dark:text-gray-100">
                            You can email them to:{" "}
                            <a
                              href={`mailto:${"info"}@${"cottagehomecare.com"}`}
                              className="text-[#00A6B2] font-semibold dark:text-[#ff1818]"
                            >
                              {`${"info"}@${"cottagehomecare.com"}`}
                            </a>{" "}
                            or fax them to:{" "}
                            <a
                              href="tel:+15163671067"
                              className="text-[#00A6B2] font-semibold dark:text-[#ff1818]"
                            >
                              516-367-1067
                            </a>
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* fourth section end */}
          {/* fourth section start  */}

          <div className="p-5" id="program">
            <div className="flex justify-center items-start my-2">
              <div className="w-full md:w-[65%] mx-auto my-1 ">
                <p className="text-2xl md:text-2xl  2xl:text-4xl font-bold text-center mb-2 md:mb-2 dark:text-gray-100 text-[#00A6B2] league-spartan ">
                  How does this program work?
                </p>
                <h3 className="text-lg md:text-2xl font-semibold text-center mb-2 md:mb-3 dark:text-gray-100 text-[#00A6B2]  league-spartan">
                  General Questions about Cottage Home Care
                </h3>
                <ul className="flex flex-col">
                  {programItems?.map((item) => (
                    <li
                      key={item.id}
                      className={`bg-white dark:bg-slate-400 my-2 shadow-lg ${
                        tab === item.id
                          ? "border-open dark:text-gray-100"
                          : "border-l-[2px] border-white dark:border-slate-400 "
                      }`}
                    >
                      <button
                        onClick={() => handleClick(item.id)}
                        className="w-full focus:outline-none"
                      >
                        <h6 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer mother-box dark:text-gray-100 text-start md:text-center">
                          <p className="flex items-center gap-2 question dark:text-gray-100 md:text-lg font-medium">
                            {" "}
                            <span>
                              <FaRegQuestionCircle className="text-[#00A6B2] font-bold text-xl dark:text-gray-100" />
                            </span>{" "}
                            <span className="w-[95%] md:w-full mx-auto px-2 md:px-0 text-[16px] leading-relaxed open-sans font-semibold">
                              {item.question}
                            </span>
                          </p>
                          <span>
                            <svg
                              className={`fill-current text-[#00A6B2] dark:text-gray-100 h-6 w-6 transform transition-transform duration-500  ${handleRotate(
                                item.id
                              )}`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                            </svg>
                          </span>
                        </h6>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500 text-[16px] leading-relaxed open-sans ${handleToggle(
                          item.id
                        )}`}
                      >
                        {item?.answer.includes("516-367-2266") ? (
                          <p
                            className="p-3 text-gray-900 dark:text-gray-100"
                            dangerouslySetInnerHTML={{
                              __html: item.answer.replace(
                                /(516-367-2266)/,
                                '<a href="tel:516-367-2266" className="text-[#00A6B2] dark:text-[#ff1818] font-bold">$1</a>'
                              ),
                            }}
                          ></p>
                        ) : (
                          <p className="p-3 text-gray-900 dark:text-gray-100">
                            {item.answer}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* fourth section end */}
        </div>
        {/* <Chat /> */}
      </main>
    </>
  );
};

export default Faqs;
