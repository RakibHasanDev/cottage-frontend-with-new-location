// BlogSidebar.jsx
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SpinerLoading from "../shared/SpinerLoading";
import { useQuery } from "@tanstack/react-query";

const BlogSidebar = () => {
  const [categories, setCategories] = useState({});
  const [buttonQuery, setButtonQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [recentBlog, setRecentBlog] = useState([]);
  const [blogSection, setBlogSection] = useState(false);

  useEffect(() => {
    fetch("https://cottage-backend-voilerplate.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        const grouped = data.blogs.reduce((acc, blog) => {
          acc[blog.category] = (acc[blog.category] || 0) + 1;
          return acc;
        }, {});
        setCategories(grouped);
        setRecentBlog(data?.blogs);
      });
  }, []);

  //   console.log(recentBlog);

  const url = `https://cottage-backend-voilerplate.vercel.app/blogs/searchBlogsByTitle?keyword=${searchTerm}&category=${buttonQuery}`;

  const {
    data: { blogs, count } = [],
    isLoading: queryLoading,
    refetch,
  } = useQuery({
    queryKey: ["blogs", buttonQuery, searchTerm],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleSearch = (inputValue) => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      setSearchTerm(inputValue); // Set search term based on input value
      setButtonQuery("");

      set;
      window.scrollTo(0, 0);
    }, 1000); // Simulate a delay for the search process (can be removed in actual API call)
  };

  const handleButtonClick = (category) => {
    setButtonQuery(category);
    setSearchTerm("");
    setBlogSection(true);
  };

  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <div className="p-4 bg-white dark:bg-slate-700 ">
      <div className="lg:w-[95%] mx-auto mb-10 border border-[#00A6B2] p-4">
        <h1 className="text-center text-2xl  font-semibold mt-3 dark:text-white league-spartan">
          Recent Posts
        </h1>
        <hr className="w-[50px] border-t-[2px] border-[#00A6B2] mx-auto" />

        <div className="mt-3">
          {queryLoading && <SpinerLoading />}
          {recentBlog
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
                    className="flex gap-5 py-5 border-b-2 border-gray-300 border-dotted cursor-pointer"
                  >
                    <div className="w-[30%]">
                      <img
                        src={blog?.img}
                        alt={blog?.title}
                        className="w-28 h-20"
                        width={112}
                        height={80}
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

      <div className="lg:w-[95%] mx-auto mb-10 border border-[#00A6B2] p-4">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">
          Categories
        </h2>
        <ul className="space-y-2">
          {Object.entries(categories).map(([category, count]) => (
            <li
              key={category}
              className="text-gray-700 dark:text-gray-200 flex justify-between items-center px-2 py-1 hover:bg-gray-100 dark:hover:bg-slate-600 rounded cursor-pointer"
              onClick={() => handleButtonClick?.(category)}
            >
              <span className="capitalize">{category}</span>
              <span className="bg-[#00A6B2] text-white px-2 rounded text-xs">
                {count}
              </span>
            </li>
          ))}
        </ul>
        {blogSection && (
          <div className="my-5 border-t-2 border-dotted">
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
                      className="flex gap-5 py-5 border-b-2 border-gray-300 border-dotted cursor-pointer"
                    >
                      <div className="w-[30%]">
                        <img
                          src={blog?.img}
                          alt={blog?.title}
                          className="w-28 h-20"
                          width={112}
                          height={80}
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
        )}
      </div>
    </div>
  );
};

export default BlogSidebar;
