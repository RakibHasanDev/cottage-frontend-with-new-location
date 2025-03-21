import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import createSlug from "../shared/slugify";
import Link from "next/link";
import OverlayLoading from "../shared/OverlayLoading";
import SpinerLoading from "../shared/SpinerLoading";

const cardStyle = {
  boxShadow:
    "0px 2px 20px rgba(0, 0, 0, 0.05), 0px 5px 15px rgba(0, 0, 0, 0.05)",
  transition: "box-shadow 0.3s ease-in-out",
  position: "relative",
};

const Categories = ({ handleSearch, handleButtonClick }) => {
  const [inputValue, setInputValue] = useState(""); // Separate state for input value

  const categories = [
    {
      serviceName: "HHA/PCA",
      icon: "/assets/nurse-icon-1.1.png",
      category: "HHA",
    },
    {
      serviceName: "NHTD",
      icon: "/assets/nhtd-vector.png",
      category: "NHTD",
    },
    {
      serviceName: "Private Pay",
      icon: "/assets/two-heart-icons-large.png",
      category: "PRIVATEPAY",
    },
    {
      serviceName: "CDPAP",
      icon: "/assets/privatePay.png",
      category: "CDPAP",
    },
  ];

  const options = { year: "numeric", month: "long", day: "numeric" };

  const url = `https://cottage-backend-voilerplate.vercel.app/blogs`;

  const { data: { blogs } = [], isLoading: queryLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="w-[90%] lg:w-[80%] 2xl:w-[380px] 2xl:ml-10 mx-auto">
      {/* Categories Section */}
      <div className="mt-10 poppins">
        <h1 className="text-center text-2xl mb-2  font-bold dark:text-white league-spartan">
          Categories
        </h1>
        <hr className="w-[50px] border-t-[2px] border-[#00A6B2] mx-auto" />
      </div>

      <div className="grid grid-cols-2 bg-white mt-8" style={cardStyle}>
        {categories?.map((category, index) => (
          <div
            onClick={() => handleButtonClick(category?.category)}
            key={index}
            className={`p-4 flex justify-center text-center ${
              index < 2 ? "border-b" : ""
            } ${
              index % 2 === 1 ? "border-l" : ""
            } border-gray-300 cursor-pointer hover:bg-[#a2f9ff]  category-style`}
          >
            <div>
              <div>
                <img
                  className="w-24 h-24 rounded-full border-[1px] p-4"
                  src={category?.icon}
                  alt={category?.serviceName}
                />
              </div>
              <h1 className="mt-2 font-semibold league-spartan">
                {category?.serviceName}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <h1
        className="text-center mt-3 uppercase font-semibold dark:text-gray-100 text-[#00A6B2] cursor-pointer league-spartan"
        onClick={() => handleButtonClick("OTHERS")}
      >
        Others
      </h1>

      {/* Search Option Start */}
      <div>
        <h1 className="text-center text-2xl  font-semibold mt-12 dark:text-white league-spartan">
          Search
        </h1>
        <hr className="w-[50px] border-t-[2px] border-[#00A6B2] mx-auto" />

        <div className="relative w-full">
          <input
            type="text"
            value={inputValue} // Controlled input for typing
            onChange={(e) => setInputValue(e.target.value)} // Update input value, not searchTerm
            className="mx-auto mt-5 block pr-9 pl-4 py-2.5 focus:outline-none relative w-full open-sans"
            placeholder="Search..."
            style={cardStyle}
            required
          />
          <button
            className="absolute top-3 right-3 hover:text-[#00A6B2] text-xl"
            onClick={() => {
              handleSearch(inputValue);
            }}
          >
            <IoSearch />
          </button>
        </div>
      </div>
      {/* Search Option End */}

      {/* Popular Posts Start */}
      <div>
        <h1 className="text-center text-2xl  font-semibold mt-14 dark:text-white league-spartan">
          Recent Posts
        </h1>
        <hr className="w-[50px] border-t-[2px] border-[#00A6B2] mx-auto" />

        <div className="mt-5">
          {queryLoading && <SpinerLoading />}
          {blogs
            ?.filter(
              (blog) =>
                blog?.status !== "pending" && blog?.status !== "rejected"
            )
            ?.slice(0, 3)
            ?.map((blog) => {
              return (
                <div key={blog?._id}>
                  <Link
                    href={`/blog/${blog?.slug}`}
                    target="_blank" // This will open the link in a new tab
                    rel="noopener noreferrer"
                    className="flex gap-5 py-5 border-b-2 border-gray-300 border-dotted"
                  >
                    <div className="w-[30%]">
                      <img
                        src={blog?.img}
                        alt={blog?.title}
                        className="w-28 h-20 "
                      />
                    </div>
                    <div className="w-[60%]">
                      <h1 className="text-gray-600 font-semibold manual-hyphen leading-tight hover:text-[#00A6B2] dark:hover:text-[#00A6B2] dark:text-gray-200 league-spartan">
                        {blog?.title}
                      </h1>

                      <p className="font-semibold text-sm text-gray-400 mt-1 dark:text-gray-300 open-sans">
                        {new Date(blog?.newDate).toLocaleString(
                          undefined,
                          options
                        )}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      {/* Popular Posts End */}
    </div>
  );
};

export default Categories;
