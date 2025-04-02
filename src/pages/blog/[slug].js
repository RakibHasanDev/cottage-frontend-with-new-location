import Head from "next/head";
import ReactLinkify from "react-linkify";
import Loading from "@/components/shared/Loading";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import { PiLineVerticalBold } from "react-icons/pi";
import { Suspense, useContext, useEffect, useState } from "react";
import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "@/context/AuthProvider";
import useAdmin from "@/hooks/useAdmin";
import { encode } from "html-entities";
import BlogSidebar from "@/components/Blog/BlogSideBar";
import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";

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

    // ✅ Generate metadata at build time
    const raw = blog?.description?.map((desc) => desc?.content).join(" ");
    const encoded = encode(raw);
    const metaDescription = encoded.substring(0, 150);

    const metaKeywords = `${blog?.title}, home care blog, caregiving tips, senior care insights, health & wellness, Cottage Home Care blog, home care news`;
    const metaTitle = `${blog?.title} - Cottage Home Care Services`;

    return {
      props: { blog, metaDescription, metaKeywords, metaTitle },
    };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { notFound: true };
  }
}

const BlogDetails = ({ blog, metaDescription, metaKeywords, metaTitle }) => {
  const [currentPageUrl, setCurrentPageUrl] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const { user } = useContext(AuthContext);
  const { isAdmin, isAdminLoading } = useAdmin(user?.email);
  const [imageSrc, setImageSrc] = useState(""); // Dynamically choose image

  // console.log(blog?.kywords, blog);

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

  const customComponentDecorator = (href, text, key) => (
    <a
      href={href}
      key={key}
      style={{ color: "blue" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );

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
        <meta
          property="og:title"
          content={`${blog?.title} - Cottage Home Care`}
        />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={blog?.img} />
        <meta
          property="og:url"
          content={`https://cottagehomecare.com/blogs/${blog?.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={blog?.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog?.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={blog?.img} />

        {imageSrc && (
          <link rel="preload" href={imageSrc} as="image" fetchPriority="high" />
        )}
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
            <div className="text-white flex flex-col md:flex-row md:w-[90%] 2xl:w-[70%] lg:w-[70%] mx-auto gap-y-3 md:gap-y-0 h-full items-center md:justify-between justify-end poppins text-shadow pb-5 md:pb-0">
              <h1 className="text-2xl lg:text-4xl font-bold  league-spartan ">
                Cottage Care Blog
              </h1>

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
        {/* banner end?\ */}

        {blog ? (
          <>
            <div className="w-[95%] lg:w-[85%] md:w-[90%] mx-auto">
              <div className="md:grid grid-cols-8 gap-7  source-sans">
                <div className="lg:col-span-5 md:col-span-4">
                  <div className=" border-b-[1px] border-dashed pb-2 border-gray-400 ">
                    <h1 className=" text-lg  md:text-2xl  font-semibold  mt-5 md:mt-8 custom-font  text-gray-700 dark:text-gray-100 league-spartan">
                      {blog?.title}
                    </h1>
                  </div>

                  <div className="mt-3 flex items-center gap-0 md:gap-3 ">
                    <div className="flex items-center  md:gap-2 gap-1 open-sans">
                      <p>
                        <FaCircleUser className="text-2xl md:text-xl lg:text-2xl xl:text-4xl text-gray-400 dark:text-gray-200" />
                      </p>
                      <p className="text-gray-500 font-semibold dark:text-gray-100 text-xs md:text-base md:hidden block lg:block">
                        By{" "}
                        <span className="text-gray-800 dark:text-gray-300">
                          Cottage Home Care
                        </span>{" "}
                      </p>
                    </div>

                    <p>
                      <PiLineVerticalBold className=" text-lg md:text-xl text-gray-600 dark:text-gray-100" />
                    </p>

                    <div>
                      {blog?.newDate ? (
                        <p className="  text-[#8c8a98]  font-semibold dark:text-gray-100 text-xs md:text-base">
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
                      <p className="flex font-semibold text-gray-500 gap-1 md:gap-2 md:text-base text-xs dark:text-gray-100">
                        <span>{comments?.length}</span>
                        <span>
                          {comments?.length > 1 ? "Comments" : "Comment"}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="lg:mt-8 mt-5 overflow-hidden 2xl:h-[600px] lg:h-[450px] md:h-[400px] h-[250px]">
                    <img
                      src={blog?.img}
                      alt={`${blog?.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="lg:mt-10 mt-3 text-[16px] leading-relaxed open-sans">
                    {blog?.description?.map((des, index) => (
                      <div key={index} className="mt-5  px-2 md:px-0">
                        <h2 className="text-xl league-spartan font-semibold dark:text-gray-100">
                          {des?.sub_title}
                        </h2>
                        <ReactLinkify
                          componentDecorator={customComponentDecorator}
                        >
                          {des?.content?.split("<br/>").map((line, i) => (
                            <span
                              key={i}
                              className="text-justify dark:text-gray-100 block"
                            >
                              {line}
                            </span>
                          ))}
                        </ReactLinkify>
                      </div>
                    ))}
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
