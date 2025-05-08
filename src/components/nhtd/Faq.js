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
      question: "What is the role of the Service Coordinator in NHTD?",
      answer:
        "A Service Coordinator (case manager) assists applicants in developing an Initial Service Plan (ISP), identifying the necessary services and supports to ensure the participant's well-being in the community.",
    },
    {
      id: 2,
      question: 'Why is NHTD called a "1915(c) Medicaid Waiver"?',
      answer:
        "Section 1915(c) of the Social Security Act allows states to offer home and community-based services to Medicaid recipients who would otherwise need institutional care. New York's waiver, approved in 2007, provides alternative services to prevent institutionalization.",
    },
    {
      id: 3,
      question: "What is the philosophy behind this Medicaid waiver?",
      answer:
        "This community-based initiative is rooted in the belief that seniors and individuals with disabilities should have the right to manage their own lives, take risks, and learn from experience—while being supported in a safe environment.",
    },
    {
      id: 4,
      question: "How is the success of this waiver measured?",
      answer:
        "Success is evaluated by participant satisfaction, increased independence, community inclusion, and the ability to sustain a high quality of life with essential support services.",
    },
    {
      id: 5,
      question: "What is the Nursing Home Transition and Diversion Waiver?",
      answer:
        "This Medicaid-funded option in New York helps eligible individuals remain in their homes while receiving care, instead of moving into an institution.",
    },
    {
      id: 6,
      question: "Who is eligible for this community-based care option?",
      answer:
        "To qualify, individuals must be Medicaid-eligible, need a nursing home level of care, and be able to live safely in the community. Applicants must be 65+ or aged 18–64 with a verified physical disability.",
    },
    {
      id: 7,
      question: "What services are available through this waiver?",
      answer:
        "Participants may receive services such as personal care, case management, medical assistance, and home modifications—all tailored to promote independence.",
    },
    {
      id: 8,
      question: "Can participants choose their own services?",
      answer:
        "Yes. Individuals are empowered to make decisions about the services they receive, select their providers, and shape their personal care plans to match their goals.",
    },
    {
      id: 9,
      question: "Is housing assistance available?",
      answer:
        "Yes, some participants may qualify for a state-funded housing subsidy to help them live in the community. However, housing itself is not classified as a waiver service and depends on funding availability.",
    },
    {
      id: 10,
      question: "How does someone apply for this Medicaid waiver?",
      answer:
        "Applicants in nursing homes can speak to their discharge planner for a referral to Open Doors or the RRDC. Those in the community can contact the RRDC directly for guidance.",
    },
  ];

  return (
    <div className="">
      <div className=" ">
        <ul className="flex flex-col text-[16px] leading-relaxed font-sans font-normal">
          {paidItems.map((item) => (
            <li
              key={item.id}
              className={` rounded-md dark:bg-slate-400 my-2  `}
            >
              <button
                onClick={() => handleClick(item.id)}
                className={`w-full shadow-md focus:outline-none rounded-md ${
                  tab === item.id
                    ? "text-white bg-[#00A6B2] dark:text-gray-100"
                    : "text-[#00A6B2] dark:text-[#00A6B2] bg-[#F6F6F6]"
                } `}
              >
                <h5 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer mother-box  text-start md:text-center">
                  <p className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
                    <span className="flex md:text-lg items-center gap-2 font-medium">
                      {item.question}
                    </span>
                  </p>
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
                </h5>
              </button>
              <div
                id={`faq-answer-${item.id}`} // ✅ Links answer to the button
                className={`transition-all duration-500 ease-in-out ${
                  tab === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
                aria-hidden={tab !== item.id} // ✅ Helps screen readers know if it's hidden
              >
                {item.answer && (
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
  );
};

export default Faq;
