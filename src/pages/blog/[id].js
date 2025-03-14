import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaCircleUser } from "react-icons/fa6";
import { PiLineVerticalBold } from "react-icons/pi";
import { React, Suspense, useEffect, useState } from "react";
import Link from "next/link";
import SkeletonLoading from "@/components/shared/SkeletonLoading";
import dynamic from "next/dynamic";
import ReactLinkify from "react-linkify";
import Loading from "@/components/shared/Loading";
import toast from "react-hot-toast";
import Head from "next/head";

export async function getStaticPaths() {
  const res = await fetch(
    "https://cottage-backend-voilerplate.vercel.app/blogs"
  );
  let data = await res.json();

  if (!Array.isArray(data.blogs)) {
    console.error("employees is not an array:", blogs);
    data = [];
  }

  const paths = data?.blogs.map((blog) => ({
    params: { id: blog._id.toString() },
  }));

  return {
    paths,
    fallback: false, // No fallback, all pages must be pre-built
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://cottage-backend-voilerplate.vercel.app/blogs/${params.id}`
  );
  const blog = await res.json();

  if (!blog || Object.keys(blog).length === 0) {
    return { notFound: true };
  }

  return {
    props: { blog },
  };
}

const HeroSection = dynamic(() => import("@/components/Blog/Herosection"), {
  suspense: true,
  ssr: false,
});

const BlogDetails = ({ blog }) => {
  const [currentPageUrl, setCurrentPageUrl] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

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

  // Extract first 150 characters for description
  const metaDescription = blog?.description
    ?.map((desc) => desc?.content)
    .join(" ")
    .substring(0, 150);

  // Generate keywords from title & description
  const metaKeywords = `${blog?.title}, home care blog, caregiving tips, senior care insights, health & wellness, Cottage Home Care blog, home care news`;

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
        <title>{blog?.title} - Cottage Home Care Services</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content="Cottage Home Care Services" />
        <meta
          property="og:title"
          content={`${blog?.title} - Cottage Home Care`}
        />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={blog?.img} />
        <meta property="og:url" content={currentPageUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={blog?.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog?.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={blog?.img} />
      </Head>

      <div className="min-h-screen dark:bg-gray-800">
        <Suspense fallback={<SkeletonLoading />}>
          <HeroSection />
        </Suspense>

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
                          Admin
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

                    <p>
                      <PiLineVerticalBold className=" text-lg md:text-xl text-gray-600 dark:text-gray-100" />
                    </p>

                    <div>
                      <p className="text-[#8c8a98]  font-semibold dark:text-gray-100 md:text-base text-xs md:text-bas">
                        <span>{blog?.views}</span>{" "}
                        <span className="ml-1">
                          {" "}
                          {blog?.views > 1 ? "Views" : "View"}{" "}
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
                  <div className="border-[1.5px] min-h-[30rem] lg:w-[90%] w-[95%] mx-auto border-t-[#00A6B2] hidden md:block">
                    <p className="text-center font-semibold py-3 border-b-[1.5px] text-sm dark:text-gray-100">
                      ABOUT
                    </p>

                    <div className="w-[70%] mx-auto bg-[#EBF8F9] mt-8 py-8 rounded-md">
                      <div className="flex justify-center">
                        <img
                          src={"/assets/Cottage Home.png"}
                          alt=""
                          className="w-[50%] h-[50%]"
                          w="100"
                          h="100"
                        />
                      </div>
                    </div>
                    <div className="mx-auto px-2 text-lg mt-3 text-center w-[80%] text-[#6c6262]">
                      <p className="font-medium dark:text-gray-100 text-[16px] leading-relaxed open-sans">
                        Cottage Home Care Services. 516.367.2266. The Right Home
                        Care for You . HHA/PCA, NHTD, Private PAY & CDPAP
                        Services throughout New York City
                      </p>
                    </div>

                    <div className="text-center mt-4">
                      <Link href="/">
                        <button className="bg-gray-50 px-3 py-3 shadow-md text-lg text-[#00A6B2] uppercase font-semibold bg-hov2 league-spartan">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-14 border-[1.5px] lg:w-[90%] w-[95%] mx-auto border-t-[#00A6B2] bg-[#f2f4f6de] py-3 pb-14 dark:bg-slate-800">
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

                      {/* {user && isAdmin && (
                  <div className="mt-2">
                    <button
                      className="btn btn-sm bg-red-500 rounded-md shadow-md"
                      onClick={() => deleteHandler(comment?._id)}
                    >
                      Delete
                    </button>
                  </div>
                )} */}
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
