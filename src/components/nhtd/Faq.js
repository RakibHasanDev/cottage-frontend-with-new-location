import React, { useState } from "react";

const Faq = () => {
  const [tab, setTab] = useState(1);

  const handleClick = (id) => {
    setTab((prevTab) => (prevTab === id ? 0 : id));
  };

  const handleRotate = (id) => (tab === id ? "rotate-180" : "");
  const handleToggle = (id) =>
    `transition-max-height ${tab === id ? "open" : ""}`;

  const paidItems = [
    {
      id: 1,
      question: "How does the NHTD program support independent living?",
      answer:
        "The NHTD program, short for Nursing Home Transition and Diversion, is a New York Medicaid waiver that helps seniors and people with disabilities transition from nursing homes to community-based care. It promotes independent living while offering essential support services at home.",
    },
    {
      id: 2,
      question: "What is the NHTD Waiver Program?",
      answer:
        "The NHTD waiver program allows Medicaid-eligible individuals to receive care in their own homes or communities instead of in a nursing facility. It includes services like personal care, case management, and assistive technology.",
    },
    {
      id: 3,
      question: "Who is eligible for the NHTD Medicaid Waiver Program?",
      answer:
        "To qualify, you must be Medicaid-eligible, need a nursing home level of care, and be 65 or older—or between 18 and 64 with a verified physical disability. You must also be able to live safely in the community with waiver services.",
    },
    {
      id: 4,
      question: "What services does the NHTD waiver offer?",
      answer:
        "Services include personal care assistance, service coordination, medical equipment, environmental modifications, and independent living skills training. These services aim to enhance quality of life and independence.",
    },
    {
      id: 5,
      question: "What is the meaning of NHTD?",
      answer:
        "NHTD stands for Nursing Home Transition and Diversion. It reflects the program’s goal to help individuals avoid or leave nursing home settings and live more independently with Medicaid-funded support.",
    },
    {
      id: 6,
      question: "Why is NHTD considered a 1915(c) Medicaid waiver?",
      answer:
        "Under Section 1915(c) of the Social Security Act, states like New York can provide home and community-based services through Medicaid. The NHTD waiver was approved under this federal provision in 2007.",
    },
    {
      id: 7,
      question: "Can participants choose their own NHTD services?",
      answer:
        "Yes. Individuals have the right to select their service providers and customize their care plans. This flexibility helps ensure that support is aligned with their personal needs and goals.",
    },
    {
      id: 8,
      question: "Does NHTD cover housing assistance?",
      answer:
        "While housing is not classified as a waiver service, some participants may be eligible for a state-funded housing subsidy under the NHTD waiver to help them remain in the community.",
    },
    {
      id: 9,
      question: "How do I apply for the NHTD Medicaid Waiver?",
      answer:
        "If you're in a nursing home, ask your discharge planner for a referral to the RRDC or Open Doors. Community residents can contact their local RRDC to start the application process and complete an Initial Service Plan (ISP).",
    },
    {
      id: 10,
      question: "How is success measured in the NHTD program?",
      answer:
        "Success is measured through improved quality of life, independence, participant satisfaction, and reduced reliance on institutional care.",
    },
  ];

  return (
    <div className="">
      <div className=" ">
        <div className="flex flex-col text-[16px] leading-relaxed font-sans font-normal">
          {paidItems.map((item) => (
            <div
              key={item.id}
              className={` rounded-md dark:bg-slate-400 my-2  `}
            >
              <div
                onClick={() => handleClick(item.id)}
                className={`w-full shadow-md focus:outline-none rounded-md ${
                  tab === item.id
                    ? "text-white bg-[#00A6B2] dark:text-gray-100"
                    : "text-[#00A6B2] dark:text-[#00A6B2] bg-[#F6F6F6]"
                } `}
              >
                <div className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer mother-box  text-start md:text-center">
                  <h4 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
                    <span className="flex md:text-lg items-center gap-2 font-medium">
                      {item.question}
                    </span>
                  </h4>
                  <span>
                    <svg
                      className={` ${
                        tab === item.id
                          ? "text-white  "
                          : "text-[#00A6B2] dark:text-[#00A6B2]"
                      } fill-current  h-6 w-6 transform transition-transform duration-100 ${handleRotate(
                        item.id
                      )}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div
                id={`faq-answer-${item.id}`} // ✅ Links answer to the button
                className={`transition-all duration-500 ease-in-out ${
                  tab === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
                aria-hidden={tab !== item.id} // ✅ Helps screen readers know if it's hidden
              >
                {item.answer && (
                  <h5 className="p-3 text-gray-900 dark:text-gray-100">
                    {item.answer}
                  </h5>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
