import React, { Suspense, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import OverlayLoading from "@/components/shared/OverlayLoading";
import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/Blog/Herosection"), {
  suspense: true,
  ssr: false,
});
const AllBlog = dynamic(() => import("@/components/Blog/AllBlog"), {
  suspense: true,
  ssr: false,
});
const Categories = dynamic(() => import("@/components/Blog/Categories"), {
  suspense: true,
  ssr: false,
});

const Blog = () => {
  //   const { user } = useContext(AuthContext);
  //   const [isAdmin] = useAdmin(user?.email);
  //   const [isEditor] = useEditor(user?.email);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  const [loading, setIsLoading] = useState(false); // State to handle loading
  const [buttonQuery, setButtonQuery] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);

  const url = `https://cottage-backend-voilerplate.vercel.app/blogs/searchBlogsByTitle?keyword=${searchTerm}&category=${buttonQuery}&page=${page}&size=${size}`;

  const {
    data: { blogs, count } = [],
    isLoading: queryLoading,
    refetch,
  } = useQuery({
    queryKey: [
      "blogs",
      "searchBlogsByTitle",
      searchTerm,
      buttonQuery,
      page,
      size,
    ],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const pages = Math.ceil(count / size);

  // Handle search when the search button is clicked
  const handleSearch = (inputValue) => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      setSearchTerm(inputValue); // Set search term based on input value
      setButtonQuery("");
      setIsLoading(false); // End loading after the search is complete
      window.scrollTo(0, 0);
    }, 1000); // Simulate a delay for the search process (can be removed in actual API call)
  };

  const handleButtonClick = (category) => {
    setButtonQuery(category);
    setSearchTerm("");
    window.scrollTo(0, 0); // Set the button query
  };

  return (
    <div className="min-h-screen dark:bg-slate-500">
      <Suspense fallback={<SkeletonLoading />}>
        <HeroSection />
      </Suspense>

      {queryLoading ? (
        <div className="py-5">
          <OverlayLoading />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-5 ">
            <div className="lg:col-span-3 col-span-full relative">
              <Suspense fallback={<SkeletonLoading />}>
                <AllBlog
                  blogs={blogs}
                  //   isAdmin={isAdmin}
                  //   isEditor={isEditor}
                  refetch={refetch}
                  handleSearch={handleSearch}
                  loading={loading}
                  searchTerm={searchTerm}
                  pages={pages}
                  page={page}
                  size={size}
                  setSize={setSize}
                  setPage={setPage}
                  handleButtonClick={handleButtonClick}
                />
              </Suspense>
            </div>

            <div className="bg-[#EBF5F5] dark:bg-slate-600 lg:col-span-2 col-span-full pb-20">
              <Suspense fallback={<SkeletonLoading />}>
                <Categories
                  blogs={blogs}
                  handleSearch={handleSearch}
                  loading={loading}
                  handleButtonClick={handleButtonClick}
                />
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
