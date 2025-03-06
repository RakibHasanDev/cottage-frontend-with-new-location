import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";

// Import PDF files

const ResourcesCard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // List of all documents
  const allDocuments = [
    {
      name: "Physical Form (PDF)",
      file: "/assets/resources/PHYSICAL Form.pdf",
    },
    {
      name: "Daily Timesheet (PDF)",
      file: "/assets/resources/Daily Time sheet.pdf",
    },
    {
      name: "Celestial Timesheet (PDF)",
      file: "/assets/resources/chelestial timesheet.pdf",
    },
    { name: "DOH (PDF)", file: "/assets/resources/DOH.pdf" },
    {
      name: "DIRECT DEPOSIT AUTHORIZATION (PDF)",
      file: "/assets/resources/direct deposite.pdf",
    },
    { name: "Time-off Form (PDF)", file: "/assets/resources/time off.pdf" },
    {
      name: "Time-off Form Fillable (PDF)",
      file: "/assets/resources/time off fillable.pdf",
    },
    {
      name: "Completed CDPAP Application (PDF)",
      file: "/assets/Files/CDPAP Completed Application.pdf",
    },
    {
      name: "Change of Address Form Fillable (PDF)",
      file: "/assets/resources/Change of Address Form Fillable.pdf",
    },
    {
      name: "Employee Statement Form Fillable (PDF)",
      file: "/assets/resources/Employee Statement Form.pdf",
    },
  ];

  // Filter documents based on search query
  const filteredDocuments = allDocuments?.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-5 pb-20 min-h-screen bg-[#EBF8F9] px-5 dark:bg-slate-600 relative">
      <h1 className="text-center league-spartan md:text-xl lg:text-2xl xl:text-4xl text-xl font-bold text-[#00A6B2] dark:text-gray-100 hidden md:block">
        Downloads
      </h1>
      <hr className="border-[#00a6b2] border-t-[1px] w-12 mt-2 mb-5 mx-auto dark:border-gray-100 hidden md:block" />

      {/* Search Input */}
      <div className="absolute top-4 rig right-[20%] md:right-[10%] lg:top-5 lg:right-[24%]">
        <div className="relative">
          <input
            className="focus:outline-0 border-[2px] border-[#00A6B2] md:pl-8 md:pr-4 pl-7 pr-1 py-1 rounded-full md:placeholder:text-sm placeholder:font-medium placeholder:text-xs dark:bg-slate-500 dark:placeholder:text-gray-200 dark:text-gray-200"
            type="text"
            placeholder="Search by file name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <BsSearch className="absolute top-2.5 left-3 text-[#00A6B2]" />
        </div>
      </div>

      {/* Display Filtered Documents */}
      <h1 className="text-center league-spartan md:text-xl lg:text-2xl xl:text-4xl text-xl font-bold text-[#00A6B2] dark:text-gray-100  pt-12  block md:hidden">
        Downloads
      </h1>
      <hr className="border-[#00a6b2] border-t-[1px] w-12  mb-5 mx-auto dark:border-gray-100 block md:hidden" />

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-7"
        id="all-resources"
      >
        {filteredDocuments?.length > 0 ? (
          filteredDocuments?.map((doc, index) => (
            <div
              key={index}
              className="card w-80 lg:w-96 bg-base-100 shadow-xl mx-auto 2xl:mt-5 bg-hov3 dark:bg-slate-800 hover:bg-[#00A6B2] hover:text-white main-card bg-hov2 dark:hover:bg-[#00A6B2] relative rounded-lg py-8 px-4"
            >
              <div className="card-body mb-5">
                <h2 className="text-xl font-normal text-center open-sans dark:text-gray-100">
                  {doc?.name}
                </h2>
                <div className="card-actions justify-center mt-6 text-center">
                  <button
                    onClick={() => window.open(doc?.file, "_blank")}
                    className="custom-ancor bg-[#00A6B2] text-white px-5 py-2.5 open-sans rounded-md shadow-md"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-200 col-span-3">
            No matching documents found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ResourcesCard;
