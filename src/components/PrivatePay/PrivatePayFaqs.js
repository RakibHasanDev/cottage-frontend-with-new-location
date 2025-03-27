import React, { useState } from "react";

const PrivatePayFaqs = () => {
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
      question: "What is private pay in home care?",
      answer:
        "Private pay refers to home care services paid out-of-pocket by clients or their families, rather than through insurance or government assistance programs. This method offers greater flexibility and control over the care received.",
    },

    {
      id: 2,
      question: "What services are offered under the private pay option?",
      answer:
        "Our private pay services include personalized care plans that may cover daily living activities, medication management, and specialized care for seniors or individuals with disabilities, provided by our qualified Home Health Aides (HHA) and Personal Care Aides (PCA).",
    },
    {
      id: 3,
      question:
        "How do I determine if private pay is the right choice for our family?",
      answer:
        "Choosing private pay might be suitable if you seek more personalized care options, need services not covered by insurance, or prefer the simplicity of direct payments. We recommend consulting with our care coordinators to discuss your specific needs and how we can best meet them.",
    },
    {
      id: 4,
      question: "How are the costs calculated for private pay services?",
      answer:
        "Costs are based on the type and amount of care needed, as well as the duration of services. We provide a detailed and transparent pricing model during your initial consultation and tailor it to meet the specific care requirements and budget considerations of your family.",
    },
    {
      id: 5,
      question:
        "How can I get started with private pay services at Cottage Home Care Services?",
      answer:
        "To get started, please contact our office to schedule an in-depth consultation. We will discuss your care needs, our services, and how private pay can be structured to best support you or your loved one.",
    },
    {
      id: 6,
      question:
        "Can private pay services be customized according to specific health conditions or preferences?",
      answer:
        "Absolutely. One of the advantages of private pay is the ability to fully customize the care plan to the specific health conditions, preferences, and schedules of our clients, ensuring they receive the most appropriate and effective care.",
    },
  ];

  return (
    <div className="">
      <div className=" ">
        <ul className="flex flex-col text-[16px] leading-relaxed open-sans font-normal">
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
                <h6 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer mother-box  text-start md:text-center">
                  <p className="flex md:text-lg items-center gap-2 font-medium ">
                    <span className="w-full md:mx-auto  md:px-0 block ">
                      {item.question}
                    </span>
                  </p>
                  <span>
                    <svg
                      className={` ${
                        tab === item.id
                          ? "text-white "
                          : "text-[#00A6B2] dark:text-[#00A6B2]"
                      } fill-current dark:text-gray-100 h-6 w-6 transform transition-transform duration-100 ${handleRotate(
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
                className={`overflow-hidden transition-all duration-500 ${handleToggle(
                  item.id
                )}`}
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

export default PrivatePayFaqs;
