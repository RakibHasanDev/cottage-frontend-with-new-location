import Head from "next/head";
import Loading from "@/components/shared/Loading";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { PiLineVerticalBold } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "@/context/AuthProvider";
import useAdmin from "@/hooks/useAdmin";
import { encode } from "html-entities";
import BlogSidebar from "@/components/Blog/BlogSideBar";
import Image from "next/image";
import {
  MdHome,
  MdNavigateBefore,
  MdNavigateNext,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { sanitizeAndLinkify } from "@/utils/sanitize";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import { FiCopy } from "react-icons/fi";
import BannerWithBreadcrumbs from "@/utils/BannerWithBreadcrumbs";

export async function getStaticPaths() {
  try {
    const res = await fetch(
      "https://cottage-backend-voilerplate.vercel.app/blogs"
    );
    const data = await res.json();

    if (!Array.isArray(data.blogs)) {
      console.error("Error: Blogs data is not an array");
      return { paths: [], fallback: false };
    }

    const paths = data.blogs.map((blog) => ({
      params: { slug: blog.slug },
    }));

    return {
      paths,
      fallback: false, // ✅ Allows new pages to be generated at runtime
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return { paths: [], fallback: "blocking" };
  }
}

// ✅ Fetch blog details at build time or on demand

export async function getStaticProps({ params }) {
  try {
    // Fetch current blog
    const res = await fetch(
      `https://cottage-backend-voilerplate.vercel.app/blogs/single/${params.slug}`
    );

    if (!res.ok) {
      console.error(`Error fetching blog: ${params.slug}`);
      return { notFound: true };
    }

    const blog = await res.json();

    if (!blog || Object.keys(blog).length === 0) {
      console.log("Blog not found, returning 404");
      return { notFound: true };
    }

    // Meta info
    const metaDescription =
      blog?.metaDescription && blog?.metaDescription.length > 0
        ? blog.metaDescription
        : encode(
            blog?.description?.map((desc) => desc?.content).join(" ") || ""
          ).substring(0, 150);

    const metaKeywords =
      blog?.keywords && blog?.keywords.length > 0
        ? Array.isArray(blog.keywords)
          ? blog.keywords.join(", ")
          : blog.keywords
        : `${blog?.title}, home care blog, caregiving tips, senior care insights, health & wellness, Cottage Home Care blog, home care news`;

    const metaTitle = `${blog?.title}`;

    const rawDate = blog?.newDate || blog?.date;
    const isoDate =
      rawDate && !isNaN(new Date(rawDate))
        ? new Date(rawDate).toISOString()
        : null;

    // Fetch all blogs to determine prev/next
    const allRes = await fetch(
      "https://cottage-backend-voilerplate.vercel.app/blogs"
    );
    const allData = await allRes.json();
    const allBlogs = Array.isArray(allData.blogs) ? allData.blogs : [];

    const currentIndex = allBlogs.findIndex((b) => b.slug === params.slug);
    const previousBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
    const nextBlog =
      currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

    return {
      props: {
        blog,
        metaDescription,
        metaKeywords,
        metaTitle,
        isoDate,
        previousBlog,
        nextBlog,
      },
    };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { notFound: true };
  }
}

const BlogDetails = ({
  blog,
  metaDescription,
  metaKeywords,
  metaTitle,
  isoDate,
  previousBlog,
  nextBlog,
}) => {
  const [currentPageUrl, setCurrentPageUrl] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const { user } = useContext(AuthContext);
  const { isAdmin, isAdminLoading } = useAdmin(user?.email);
  const [imageSrc, setImageSrc] = useState(""); // Dynamically choose image

  // console.log(blog?.keywords, blog);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPageUrl(window.location.href);
    }
    if (blog?.newDate) {
      setFormattedDate(
        new Date(blog.newDate).toLocaleString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    } else {
      setFormattedDate(blog?.date || ""); // Use fallback date
    }
  }, [blog]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setImageSrc(
        window.innerWidth <= 688
          ? "https://res.cloudinary.com/di3wwp9s0/image/upload/v1743624112/blogs/mobile_blog_banner.webp"
          : "https://res.cloudinary.com/di3wwp9s0/image/upload/v1743623965/blogs/blog_banner.webp"
      );
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const url = `https://cottage-backend-voilerplate.vercel.app/comments/${blog?._id}`;

  // console.log(url)

  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comments", blog?._id],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const commentHandler = (data) => {
    const comment = {
      name: data?.fullName,
      email: data?.email,
      message: data?.comment,
      date: Date.now(),
      blogId: blog?._id,
    };

    // console.log(comment);

    if (blog?._id) {
      fetch("https://cottage-backend-voilerplate.vercel.app/comments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(comment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Comment Send Successfully");
            reset();
            refetch();
          }
        });
    }
  };

  const deleteHandler = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this comment"
    );
    if (proceed) {
      fetch(`https://cottage-backend-voilerplate.vercel.app/comments/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Comment Delete SuccessFully");
            refetch();
          }
        });
    }
  };

  <p className="text-[#8c8a98] font-semibold dark:text-gray-100 text-xs md:text-base">
    {formattedDate}
  </p>;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content="Cottage Home Care Services" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${blog?.title} - Cottage Home Care`}
        />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={blog?.img} />
        <meta
          property="og:url"
          content={`https://cottagehomecare.com/blog/${blog?.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={blog?.date} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog?.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={blog?.img} />

        {/* Canonical */}
        <link
          rel="alternate"
          href={`https://cottagehomecare.com/blog/${blog?.slug}/`}
          hreflang="en"
        />
        <link
          rel="alternate"
          href={`https://cottagehomecare.com/blog/${blog?.slug}/`}
          hreflang="x-default"
        />
        <link
          rel="canonical"
          href={`https://cottagehomecare.com/blog/${blog?.slug}/`}
        />
        {imageSrc && (
          <link rel="preload" href={imageSrc} as="image" fetchPriority="high" />
        )}

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://cottagehomecare.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: blog?.title,
                  item: `https://cottagehomecare.com/blog/${blog?.slug}`,
                },
              ],
            }),
          }}
        />

        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: blog?.title,
              description: metaDescription,
              image: [blog?.img],
              author: {
                "@type": "Organization",
                name: "Cottage Home Care Services",
                url: "https://cottagehomecare.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Cottage Home Care Services",
                logo: {
                  "@type": "ImageObject",
                  url: "https://cottagehomecare.com/assets/cottage-home-care-logo-blog.webp",
                },
              },
              datePublished: isoDate || new Date().toISOString(),
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://cottagehomecare.com/blog/${blog?.slug}`,
              },
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: blog?.title,
              url: `https://cottagehomecare.com/blog/${blog?.slug}`,
              description: metaDescription,
            }),
          }}
        />

        {/* Organization Schema with social media */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cottage Home Care Services",
              url: "https://cottagehomecare.com",
              logo: {
                "@type": "ImageObject",
                url: "https://cottagehomecare.com/assets/cottage-home-care-logo-blog.webp",
              },
              sameAs: [
                "https://www.facebook.com/cottageHC",
                "https://www.instagram.com/cottage.homecare/",
                "https://www.tiktok.com/@cottage.homecare",
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen dark:bg-gray-800">
        {/* banner start  */}
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
            <div className="text-white flex h-[80%] items-center   poppins text-shadow pb-5 md:pb-0">
              <h1 className="text-2xl lg:text-4xl font-bold  league-spartan ml-5">
                Cottage Care Blog
              </h1>
            </div>
            <div className=" absolute bottom-10  left-0">
              <BannerWithBreadcrumbs title="NHTD" />
            </div>
          </div>
        </div>
        {/* banner end?\ */}

        {blog ? (
          <>
            <div className="w-[95%] lg:w-[85%] md:w-[90%] mx-auto">
              <div className="md:grid grid-cols-8 gap-7  source-sans">
                <div className="lg:col-span-5 md:col-span-4">
                  <div className=" border-b-[1px] border-dashed pb-2 border-gray-400 ">
                    <h2 className=" text-lg  md:text-2xl  font-semibold  mt-5 md:mt-8 custom-font  text-gray-700 dark:text-gray-100 league-spartan">
                      {blog?.title}
                    </h2>
                  </div>

                  <div className="mt-3 flex items-center gap-0 md:gap-3 ">
                    <div className="flex items-center  md:gap-2 gap-0.5 open-sans">
                      <div className="bg-white w-6 h-6 md:w-10 md:h-10 rounded-full border border-[#00A6B2] ">
                        <img
                          src="/assets/cottage-home-care-logo-blog.webp"
                          alt="cottage home care logo"
                          width={20}
                          height={20}
                          className="rounded-full p-1 w-6 h-6  md:w-10 md:h-10  "
                        />
                      </div>

                      <p className="text-gray-500 font-semibold dark:text-gray-100 text-[11px]  md:text-base md:hidden block lg:block">
                        By{" "}
                        <span className="text-gray-800 dark:text-gray-300">
                          Cottage Home Care Services
                        </span>{" "}
                      </p>
                    </div>

                    <p>
                      <PiLineVerticalBold className=" text-lg md:text-xl text-gray-600 dark:text-gray-100" />
                    </p>

                    <div>
                      {blog?.newDate ? (
                        <p className="  text-[#8c8a98]  font-semibold dark:text-gray-100 text-[11px]  md:text-base">
                          {formattedDate}
                        </p>
                      ) : (
                        <p className="  text-[#8c8a98]  font-semibold dark:text-gray-100 text-sm md:text-base">
                          {blog?.date}
                        </p>
                      )}
                    </div>

                    <p>
                      <PiLineVerticalBold className=" text-lg md:text-xl text-gray-600 dark:text-gray-100" />
                    </p>

                    <div>
                      <p className="flex font-semibold text-gray-500 gap-1 md:gap-2 md:text-base text-[11px]  dark:text-gray-100">
                        <span>{comments?.length}</span>
                        <span>
                          {comments?.length > 1 ? "Comments" : "Comment"}
                        </span>
                      </p>
                    </div>
                    <p>
                      <PiLineVerticalBold className=" text-lg md:text-xl text-gray-600 dark:text-gray-100" />
                    </p>

                    <Link
                      href="/"
                      className="flex items-center gap-1hover:underline text-gray-600 dark:text-gray-100 font-semibold"
                    >
                      <MdHome size={18} />
                      <span>Home</span>
                    </Link>
                  </div>
                  <div className="lg:mt-8 mt-5 overflow-hidden aspect-video flex justify-center bg-[#f0f0f0] dark:bg-slate-300">
                    <img
                      src={blog?.img}
                      alt={blog?.title}
                      width="1280"
                      height="720"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="lg:mt-10 mt-3 text-[16px] leading-relaxed open-sans">
                    {blog?.description?.map((des, index) => (
                      <div key={index} className="mt-5 px-2 md:px-0">
                        <h1 className="text-xl league-spartan font-semibold dark:text-gray-100">
                          {des?.sub_title}
                        </h1>

                        {/* ✅ Sanitize + render raw HTML content safely */}
                        <div
                          className="prose dark:prose-invert max-w-none dark:text-gray-100"
                          dangerouslySetInnerHTML={{
                            __html: sanitizeAndLinkify(des?.content || ""),
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 flex-wrap md:flex-nowrap my-5">
                    <p className="font-semibold whitespace-nowrap dark:text-gray-100">
                      Social Share:
                    </p>
                    <div className="flex items-center gap-3">
                      <FacebookShareButton
                        url={currentPageUrl}
                        quote={blog?.title}
                      >
                        <FacebookIcon size={30} round />
                      </FacebookShareButton>

                      <TwitterShareButton url={currentPageUrl}>
                        <div
                          style={{
                            backgroundColor: "#000",
                            borderRadius: "50%",
                            padding: "6px",
                          }}
                        >
                          <FaXTwitter color="#fff" size={19} />
                        </div>
                      </TwitterShareButton>

                      <LinkedinShareButton
                        url={currentPageUrl}
                        title={blog?.title}
                      >
                        <LinkedinIcon size={30} round />
                      </LinkedinShareButton>

                      <WhatsappShareButton
                        url={currentPageUrl}
                        title={blog?.title}
                      >
                        <WhatsappIcon size={30} round />
                      </WhatsappShareButton>

                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(currentPageUrl);
                          toast.success("Link copied!"); // optional toast
                        }}
                        className="w-[32px] h-[32px] rounded-full bg-gray-300 dark:bg-slate-500 flex dark:text-white items-center justify-center"
                        title="Copy link"
                      >
                        <FiCopy size={14} />
                      </button>
                    </div>

                    <div className="flex items-center  gap-3 flex-wrap   text-sm md:text-base font-medium text-gray-700 dark:text-gray-200  mx-auto lg:mx-0">
                      {/* Previous */}
                      <p className="dark:text-gray-100 font-semibold mx-3 lg:block hidden">
                        |
                      </p>
                      {previousBlog ? (
                        <Link
                          href={`/blog/${previousBlog.slug}`}
                          className="flex items-center gap-1 text-blue-600 hover:underline dark:text-gray-100 font-bold"
                        >
                          <MdNavigateBefore size={18} />
                          <span>Previous</span>
                        </Link>
                      ) : (
                        <span className="flex items-center gap-1 text-gray-400 dark:text-gray-100 font-bold">
                          <MdNavigateBefore size={18} />
                          <span>Previous</span>
                        </span>
                      )}

                      {/* Separator */}
                      <span className="text-gray-400 dark:text-gray-100 font-bold">
                        |
                      </span>

                      {/* Home */}
                      <Link
                        href="/"
                        className="flex items-center gap-1 text-blue-600 hover:underline dark:text-gray-100 font-bold"
                      >
                        <MdHome size={18} />
                        <span>Home</span>
                      </Link>

                      {/* Separator */}
                      <span className="text-gray-400 dark:text-gray-100 font-bold">
                        |
                      </span>

                      {/* Next */}
                      {nextBlog ? (
                        <Link
                          href={`/blog/${nextBlog.slug}`}
                          className="flex items-center gap-1 text-blue-600 hover:underline dark:text-gray-100 font-bold"
                        >
                          <span>Next</span>
                          <MdNavigateNext size={18} />
                        </Link>
                      ) : (
                        <span className="flex items-center gap-1 text-gray-400 dark:text-gray-100">
                          <span>Next</span>
                          <MdNavigateNext size={18} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 md:col-span-4 mt-[5vh]">
                  <BlogSidebar />

                  {blog?.keywords && (
                    <div className="mt-14 border-[1.5px] lg:w-[90%] w-[95%] mx-auto border-t-[#00A6B2] bg-[#f2f4f6de] py-3 pb-14 dark:bg-slate-800">
                      <p className="text-center font-semibold mt-8 text-lg   dark:text-gray-100  league-spartan">
                        Related Topic
                      </p>
                      <hr className="border-[#00a6b2] border-t-[1.5px] w-12 mt-1 mx-auto" />
                      <p className="p-3 px-5">
                        {blog?.keywords?.map((keyword, index) => (
                          <span
                            key={index}
                            className="bg-white px-3 py-1.5 text-sm rounded mr-2 mb-2 inline-block"
                          >
                            {keyword}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2 pb-10 md:w-[62%]">
                <div className="mt-8 grid grid-cols-5 items-center">
                  <div className="col-span-2">
                    <hr className="border-t-[1px]" />
                  </div>
                  <div>
                    <p className="font-semibold text-center uppercase dark:text-gray-100 text-xs md:text-base league-spartan">
                      <span className="text-red-400 md:mr-1.5 ">
                        {comments?.length}
                      </span>
                      comments
                    </p>
                  </div>

                  <div className="col-span-2">
                    <hr className="border-t-[1px]" />
                  </div>
                </div>

                <div className="mt-14 border-[1.5px] lg:w-full w-[95%] mx-auto border-t-[#00A6B2] bg-[#f2f4f6de] py-3 pb-14 dark:bg-slate-800">
                  <p className="text-center font-semibold mt-8 text-lg   dark:text-gray-100  league-spartan">
                    COMMENT SECTION
                  </p>
                  <hr className="border-[#00a6b2] border-t-[1.5px] w-12 mt-1 mx-auto" />

                  <div className="w-[90%] mx-auto mt-10 open-sans">
                    <form onSubmit={handleSubmit(commentHandler)}>
                      <div className="space-y-3">
                        <div>
                          <input
                            type="text"
                            {...register("fullName", {
                              required: "FullName is required",
                            })}
                            id="fullName"
                            placeholder="Your Name"
                            className="input w-full focus:outline-none input-bordered input-[#00A6B2] dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100 rounded-md px-5 py-2.5 outline outline-1 outline-[#00A6B2] focus:outline-[#00A6B2]  focus:ring-[#00A6B2]  "
                          />
                          {errors.fullName && (
                            <p className="text-red-600">
                              {errors.fullName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <input
                            type="email"
                            {...register("email", {
                              required: "email is required",
                            })}
                            placeholder="Your Email"
                            className="input w-full focus:outline-none input-bordered input-[#00A6B2] dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100  rounded-md px-5 py-2.5 outline outline-1 outline-[#00A6B2] focus:outline-[#00A6B2]  focus:ring-[#00A6B2]"
                          />

                          {errors.email && (
                            <p className="text-red-600">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <textarea
                            type="text"
                            {...register("comment", {
                              required: "Message is required",
                            })}
                            className="textarea textarea-[#00A6B2] w-full focus:outline-none dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100  rounded-md px-5 py-2.5 outline outline-1 outline-[#00A6B2] focus:outline-[#00A6B2]  focus:ring-[#00A6B2]"
                            placeholder="Your Message"
                          ></textarea>

                          {errors.comment && (
                            <p className="text-red-600">
                              {errors.comment.message}
                            </p>
                          )}
                        </div>

                        <button className="input w-full focus:outline-none bg-[#00A6B2] hover:bg-secondary text-white uppercase text-lg font-medium rounded-md px-4 py-3">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {comments?.map((comment) => (
                  <div key={comment?._id}>
                    <div className="mt-5 text-[#6c6262] py-5 border-[1px] rounded p-5 border-[#00A6B2] dark:border-gray-100">
                      <p className="mb-1 text-red-400 dark:text-gray-100">
                        {new Date(comment?.date).toLocaleString()}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <h1 className="text-lg font-medium dark:text-gray-100">
                            {comment?.name}
                          </h1>
                        </div>
                        <div>
                          <i className="text-sm dark:text-gray-100">
                            {comment?.email}
                          </i>
                        </div>
                      </div>

                      <p className="mt-2 md:w-10/12 dark:text-gray-100">
                        <span className="mr-2">Message:</span>
                        {comment?.message}
                      </p>

                      {!isAdminLoading && isAdmin && user?.uid && (
                        <div className="mt-2">
                          <button
                            className="btn px-4 py-1.5 text-sm text-white bg-red-500 rounded-md shadow-md"
                            onClick={() => deleteHandler(comment?._id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
