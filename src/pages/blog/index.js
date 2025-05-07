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
        <title>Blog | Cottage Home Care Services Inc - News & Tips</title>
        <meta
          name="description"
          content="Get tips on caregiving, wellness, and senior care with Cottage Home Care’s blog. Stay informed, inspired, and connected to the industry."
        />

        <meta
          name="keywords"
          content="home care blog, caregiving tips, senior care insights, health and wellness blog, Cottage Home Care news, home care industry updates, caregiver resources, home care trends, compassionate care stories, Cottage Home Care blog articles"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/blog/"
          hreflang="en"
        />
        <link
          rel="alternate"
          href="https://cottagehomecare.com/blog/"
          hreflang="x-default"
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

        <div className="sr-only">
          <p>
            When it comes to caring for a loved one at home, there’s no room for
            cookie-cutter solutions. At Cottage Home Care Services, we
            specialize in providing both unique home health care services and
            comprehensive home care services designed around the person—not just
            the condition.
          </p>

          <p>
            Our mission is to bring warmth, dignity, and expert support into the
            homes of those who need it most. Whether your loved one needs
            post-hospital recovery, help with everyday tasks, or
            around-the-clock medical care, we create a plan that’s just right
            for them.
          </p>

          <p>
            <strong>What Makes Our Home Care Services Unique?</strong>
          </p>

          <p>
            At Cottage Home Care Services, we believe that truly unique care is
            built around real people—not generic templates. Our care plans are
            fully customized to reflect your loved one’s medical needs, daily
            routines, cultural background, and personal preferences.
          </p>

          <p>Our Unique Home Health Care Services Include:</p>

          <ul>
            <li>Custom caregiver matching (language, personality, gender)</li>
            <li>
              Specialized care plans for chronic illnesses or memory disorders
            </li>
            <li>Emotional support and companionship tailored to lifestyle</li>
            <li>Flexible care schedules (part-time, full-time, 24/7)</li>
            <li>
              Personalized meal preparation, mobility assistance, and more
            </li>
          </ul>

          <p>
            We take the time to understand each client’s story—because healing
            and well-being start with feeling seen and heard.
          </p>

          <p>
            <strong>Comprehensive Care That Covers Every Need</strong>
          </p>

          <p>
            What sets Cottage Home Care Services apart is our ability to deliver
            comprehensive home care services all under one roof. We provide a
            full spectrum of care, so families don’t have to coordinate multiple
            providers.
          </p>

          <p>Our Comprehensive Home Care Services Include:</p>

          <ul>
            <li>
              Skilled Nursing: IV therapy, wound care, chronic disease
              management
            </li>
            <li>
              Certified Home Health Aides: Personal hygiene, dressing, transfers
            </li>
            <li>
              Memory & Alzheimer’s Care: Specialized routines and safety
              protocols
            </li>
            <li>
              Companionship Services: Emotional support, light housekeeping,
              errands
            </li>
            <li>Therapy at Home: Physical, occupational, and speech therapy</li>
            <li>
              Overnight & Live-In Care: For clients needing 24/7 supervision
            </li>
          </ul>

          <p>
            Our holistic approach ensures continuity of care—and peace of mind
            for families.
          </p>

          <p>
            <strong>Why Families Choose Cottage Home Care Services</strong>
          </p>

          <p>
            We’re more than a home care agency—we’re your extended family, care
            partner, and trusted support system. Families across [your service
            area] choose us because:
          </p>

          <ul>
            <li>We provide consistent, high-quality care with heart</li>
            <li>
              Our staff is licensed, background-checked, and extensively trained
            </li>
            <li>
              We offer flexible plans that evolve with your loved one’s needs
            </li>
            <li>
              You’ll always have a dedicated care coordinator just a phone call
              away
            </li>
          </ul>

          <p>
            <strong>Who Can Benefit from Our Services?</strong>
          </p>

          <ul>
            <li>Seniors aging at home who value independence</li>
            <li>Individuals with disabilities or special needs</li>
            <li>Patients recovering from surgery or illness</li>
            <li>Caregivers needing respite or support</li>
            <li>
              Families looking for compassionate, in-home alternatives to
              nursing facilities
            </li>
          </ul>

          <p>
            Whether it’s short-term help or long-term care, Cottage Home Care
            Services is here to support your loved one’s best quality of life.
          </p>

          <p>
            <strong>Get Started with Cottage Home Care Services Today</strong>
          </p>

          <p>
            Looking for care that feels like family? Trust Cottage Home Care
            Services to provide both unique and comprehensive home health care
            that goes above expectations. We’ll meet with you to assess your
            needs, answer questions, and create a customized care plan—at no
            cost to you.
          </p>

          <p>
            Call us now or schedule your free in-home consultation to see how we
            can help your family today.
          </p>
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
