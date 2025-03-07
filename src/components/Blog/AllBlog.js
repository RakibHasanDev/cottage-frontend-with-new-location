import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import BlogCard from "./BlogCard";
import Loading from "../shared/Loading";

const AllBlog = ({
  blogs,
  //   isAdmin,
  refetch,
  //   isEditor,
  handleSearch,
  loading,
  searchTerm,
  pages, // total number of pages
  page, // current page
  size,
  setSize,
  setPage,
  handleButtonClick,
}) => {
  const [inputValue, setInputValue] = useState(""); // Separate state for input value

  const nextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, pages - 1));
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
    window.scrollTo(0, 0);
  };

  // Function to generate pagination numbers
  const renderPaginationNumbers = () => {
    const pagination = [];
    const maxPage = pages - 1;

    for (let i = 0; i < pages; i++) {
      if (i === page) {
        // Current page
        pagination.push(
          <button
            key={i}
            className="text-white bg-[#00A6B2] font-bold w-9 h-9 rounded-full "
            onClick={() => {
              setPage(i);
              window.scrollTo(0, 0);
            }}
          >
            {i + 1}
          </button>
        );
      } else if (i === 0 || i === maxPage || i === page - 1 || i === page + 1) {
        // Show adjacent pages
        pagination.push(
          <button
            key={i}
            className="text-gray-500 dark:text-white font-bold w-9 h-9  m"
            onClick={() => {
              setPage(i);
              window.scrollTo(0, 0);
            }}
          >
            {i + 1}
          </button>
        );
      } else if (i === page - 2 || i === page + 2) {
        // Show ellipsis for large number of pages
        pagination.push(
          <span key={i} className="mx-2 text-gray-500">
            ...
          </span>
        );
      }
    }

    return pagination;
  };

  return (
    <div className="min-h-screen">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {!blogs || blogs?.length === 0 ? (
            <div className="w-[95%] md:w-[80%] mx-auto">
              <div className="border-[1px] border-gray-300 poppins px-3  md:px-6 md:py-8 md:p-8 flex justify-center items-center lg:h-[200px] lg:mt-[10vh] my-5">
                <div className="text-gray-700">
                  <h1 className="text-lg md:text-2xl font-semibold dark:text-gray-100">
                    Nothing Found
                  </h1>
                  <h3 className="dark:text-gray-100 mt-1 md:mt-3 md:text-base text-sm ">
                    Sorry, but nothing matched your search keyword{" "}
                    <b>{searchTerm}</b>. Please try again with some different
                    keywords.
                  </h3>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="mx-auto mt-5 block pr-9 pl-4 py-2.5 focus:outline-none relative w-full bg-slate-200"
                      placeholder="Search..."
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
              </div>

              <button
                className=" bg-[#00A6B2] mb-3 text-white px-3 py-2 rounded-md hover:bg-[#248086] transition duration-300 flex gap-1 items-center text-sm"
                onClick={() => {
                  handleSearch("");
                  handleButtonClick("");
                  setSize(6);
                  setPage(0);
                  window.scrollTo(0, 0);
                }}
              >
                View All Blogs{" "}
                <MdKeyboardDoubleArrowRight className="text-xl" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:gap-x-8 mt-5 w-full lg:mt-20 lg:w-[95%] 2xl:w-[80%]  mx-auto lg:ml-auto lg:mr-5 pb-3 ">
              {blogs
                ?.filter(
                  (blog) =>
                    blog?.status !== "pending" && blog?.status !== "rejected"
                )
                .map((blog) => (
                  <BlogCard
                    key={blog?._id}
                    blog={blog}
                    // isAdmin={isAdmin}
                    // isEditor={isEditor}
                    refetch={refetch}
                    loading={loading}
                  />
                ))}
            </div>
          )}

          {blogs?.length > 0 && (
            <div className="pagination py-3 flex justify-center gap-1 md:gap-3">
              {page > 0 && (
                <button
                  className="flex items-center pr-2 pl-1 py-1 text-gray-500 ml-1 2xl:ml-2 cursor-pointer hover:font-bold dark:text-white text-sm mr-1 font-medium"
                  onClick={prevPage}
                >
                  <MdKeyboardArrowLeft className="text-2xl font-bold " /> PREV
                </button>
              )}

              {renderPaginationNumbers()}

              {/* Conditionally render the NEXT button only if the current page is less than the last page */}
              {page < pages - 1 && (
                <button
                  className="flex items-center py-1 text-gray-500 ml-1 2xl:ml-2 cursor-pointer hover:font-bold dark:text-white text-sm font-medium"
                  onClick={nextPage}
                >
                  NEXT <MdKeyboardArrowRight className="text-2xl" />
                </button>
              )}

              <select
                className="ml-1 2xl:ml-2 dark:bg-gray-400 dark:text-gray-100 bg-white text-gray-500 border-[1px]
                   border-gray-300 rounded-md focus:outline-none px-1 text-xs 2xl:text-sm leading-tight font-medium hidden md:block"
                onChange={(event) => {
                  setSize(event.target.value);
                  window.scrollTo(0, 0);
                }}
              >
                <option selected disabled className="hidden">
                  {`Page Size ${size}`}
                </option>
                <option value="6">Page Size 6</option>
                <option value="10">Page Size 10</option>
                <option value="15">Page Size 15</option>
                <option value="20">Page Size 20</option>
              </select>

              <button
                className=" px-3 py-2 rounded-md flex gap-1 items-center text-xs md:text-sm  border-[1px] border-gray-300 text-gray-500 font-medium dark:text-gray-100 dark:bg-gray-400  "
                onClick={() => {
                  handleSearch("");
                  handleButtonClick("");
                  setSize(6);
                  setPage(0);
                  window.scrollTo(0, 0);
                }}
              >
                View All <MdKeyboardDoubleArrowRight className="text-xl" />
              </button>
            </div>
          )}
        </div>
      )}
      {/* {blogs?.length > 5 && (
        <div className="md:py-[156px] py-40 ">
          <Subscribe />
        </div>
      )} */}
    </div>
  );
};

export default AllBlog;
