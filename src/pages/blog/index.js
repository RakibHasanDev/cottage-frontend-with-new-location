import React, { Suspense, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import SpinerLoading from "@/components/shared/SpinerLoading";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";

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
    <>
      <Head>
        <title>Blog - Cottage Home Care Services</title>
        <meta
          name="description"
          content="Get tips on caregiving, wellness, and senior care with Cottage Home Care’s blog. Stay informed, inspired, and connected to the industry."
        />

        <meta
          name="keywords"
          content="home care blog, caregiving tips, senior care insights, health and wellness blog, Cottage Home Care news, home care industry updates, caregiver resources, home care trends, compassionate care stories, Cottage Home Care blog articles"
        />
        <link rel="canonical" href="https://cottagehomecare.com/blog/" />
      </Head>

      <main className="min-h-screen dark:bg-slate-500">
        <div className="relative min-h-[40vh]  league-spartan ">
          <picture>
            <source
              srcSet="https://res.cloudinary.com/di3wwp9s0/image/upload/v1743624112/blogs/mobile_blog_banner.webp"
              media="(max-width: 688px)"
            />
            <Image
              src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1743623965/blogs/blog_banner.webp"
              alt="Cottage Home Care Blog Banner"
              width={2580}
              height={795}
              priority // ✅ LCP Fix: Boost Loading Priority
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>

          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00A6B2]/10 to-[#00A6B2]/10 blog-cover "></div>

          {/* Text Content */}
          <div className="relative   h-[40vh] w-full ">
            <div className="text-white flex flex-col md:flex-row md:w-[90%] 2xl:w-[70%] lg:w-[70%] mx-auto gap-y-3 md:gap-y-0 h-full items-center md:justify-between justify-end poppins text-shadow pb-5 md:pb-0">
              <h1 className="text-2xl lg:text-4xl font-bold  league-spartan ">
                Cottage Care Blog
              </h1>
              <h2 className="sr-only">
                Cottage Blog – Caregiving Tips, Health & Wellness Stories
              </h2>

              <div className=" flex items-center text-lg gap-1 font-semibold">
                <Link
                  href="/"
                  className="blog-underline-animation  league-spartan text-xl "
                >
                  Home
                </Link>
                <MdOutlineArrowForwardIos className="text-lg font-bold" />
                <Link
                  href="/blog"
                  className="blog-underline-animation   league-spartan text-xl"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>

        {queryLoading ? (
          <div className="py-5">
            <SpinerLoading />
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
      </main>
    </>
  );
};

export default Blog;
