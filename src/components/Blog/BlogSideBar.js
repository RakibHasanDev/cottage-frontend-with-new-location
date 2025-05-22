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
  const [page, setPage] = useState(0);
  const size = 3;

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

  const url = `https://cottage-backend-voilerplate.vercel.app/blogs/searchBlogsByTitle?keyword=${searchTerm}&category=${buttonQuery}&page=${page}&size=${size}`;

  const {
    data: { blogs = [], count = 0 } = {},
    isLoading: queryLoading,
    refetch,
  } = useQuery({
    queryKey: ["blogs", buttonQuery, searchTerm, page],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    keepPreviousData: true,
  });

  const handleButtonClick = (category) => {
    setButtonQuery(category);
    setSearchTerm("");
    setPage(0);
    setBlogSection(true);
  };

  const totalPages = Math.ceil(count / size);
  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <div className="p-4 bg-white dark:bg-slate-700">
      {/* Recent Posts */}
      <div className="lg:w-[95%] mx-auto mb-10 border border-[#00A6B2] p-4">
        <p className="text-center text-2xl font-semibold mt-3 dark:text-white league-spartan">
          Recent Posts
        </p>
        <hr className="w-[50px] border-t-[2px] border-[#00A6B2] mx-auto" />

        <div className="mt-3">
          {queryLoading && <SpinerLoading />}
          {recentBlog
            ?.filter(
              (blog) =>
                blog?.status !== "pending" && blog?.status !== "rejected"
            )
            ?.slice(0, 5)
            ?.map((blog) => (
              <div key={blog?._id}>
                <Link
                  href={`/blog/${blog?.slug}`}
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
                    <h1 className="text-gray-600 font-semibold leading-tight hover:text-[#00A6B2] dark:hover:text-[#00A6B2] dark:text-gray-200 league-spartan">
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
            ))}
        </div>
      </div>

      {/* Categories */}
      <div className="lg:w-[95%] mx-auto mb-10 border border-[#00A6B2] p-4">
        <p className="text-lg font-semibold mb-4 dark:text-white">Categories</p>
        <ul className="space-y-2">
          {Object.entries(categories).map(([category, count]) => (
            <li
              key={category}
              className="text-gray-700 dark:text-gray-200 flex justify-between items-center px-2 py-1 hover:bg-gray-100 dark:hover:bg-slate-600 rounded cursor-pointer"
              onClick={() => handleButtonClick(category)}
            >
              <span className="capitalize">{category}</span>
              <span className="bg-[#00A6B2] text-white px-2 rounded text-xs">
                {count}
              </span>
            </li>
          ))}
        </ul>

        {/* Search Results with Pagination */}
        {blogSection && (
          <div className="my-5 border-t-2 border-dotted">
            {queryLoading && <SpinerLoading />}
            {blogs
              ?.filter(
                (blog) =>
                  blog?.status !== "pending" && blog?.status !== "rejected"
              )
              ?.map((blog) => (
                <div key={blog?._id}>
                  <Link
                    href={`/blog/${blog?.slug}`}
                    className="flex gap-5 py-5 border-b-2 border-gray-300 border-dotted cursor-pointer"
                  >
                    <div className="w-[30%]">
                      <img
                        src={blog?.img}
                        alt={blog?.title}
                        className="w-28 h-20"
                      />
                    </div>
                    <div className="w-[60%]">
                      <p className="text-gray-600 font-semibold leading-tight hover:text-[#00A6B2] dark:hover:text-[#00A6B2] dark:text-gray-200 league-spartan">
                        {blog?.title}
                      </p>
                      <p className="font-semibold text-sm text-gray-400 mt-1 dark:text-gray-300 open-sans">
                        {new Date(blog?.newDate).toLocaleString(
                          undefined,
                          options
                        )}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                  disabled={page === 0}
                  className="px-3 py-1 bg-[#00A6B2] text-white rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Page {page + 1} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev))
                  }
                  disabled={page + 1 >= totalPages}
                  className="px-3 py-1 bg-[#00A6B2] text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSidebar;
