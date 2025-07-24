import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Link from "next/link";
import { AuthContext } from "@/context/AuthProvider";
import useAdmin from "@/hooks/useAdmin";

const cardStyle = {
  padding: "20px",
  boxShadow:
    "0px 2px 30px rgba(0, 0, 0, 0.05), 0px 10px 20px rgba(0, 0, 0, 0.05)",
  transition: "box-shadow 0.3s ease-in-out",
  margin: "20px",
  position: "relative",
};

const cardStyle2 = {
  padding: "20px",
  boxShadow:
    "0px 2px 80px rgba(0, 0, 0, 0.1), 0px 10px 60px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.3s ease-in-out",
  margin: "20px",
  position: "relative",
};

const BlogCard = ({ blog, refetch, buttonData }) => {
  const [style, setStyle] = useState(cardStyle);
  const { title, img, _id, slug, description } = blog;

  const { user } = useContext(AuthContext);
  const { isAdmin, isAdminLoading } = useAdmin(user?.email);

  // Initial style
  const options = { year: "numeric", month: "long", day: "numeric" };

  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

  const deleteHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const proceed = window.confirm(
      "Are you sure, you want to delete this Blog?"
    );
    if (proceed) {
      fetch(`https://cottage-backend-voilerplate.vercel.app/blogs/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": `${apiKey}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Blog deleted successfully");
            refetch();
          }
        });
    }
  };

  return (
    <div
      className="flex justify-center "
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div
        style={style}
        onMouseEnter={() => setStyle(cardStyle2)}
        onMouseLeave={() => setStyle(cardStyle)}
        className="block w-full bg-white dark:bg-slate-200 poppins relative group rounded-md"
      >
        {/* Image section */}
        <div className="relative aspect-[16/9] overflow-hidden w-full">
          <img
            className="w-full h-full object-cover"
            src={blog?.newImg || img}
            alt={`${blog?.title}`}
          />
        </div>

        {/* Content section */}
        <div className="p-6 relative h-44">
          {blog?.date && (
            <h3 className="mb-2 text-neutral-600 dark:text-gray-600 font-semibold">
              {blog.date}
            </h3>
          )}
          {blog?.newDate && (
            <h5 className="mb-2 text-neutral-600 dark:text-gray-600 open-sans">
              {new Date(blog.newDate).toLocaleString(undefined, options)}
            </h5>
          )}
          <h1
            className="text-base lg:text-lg leading-normal text-gray-900 dark:text-gray-600 mb-8 font-semibold break-words league-spartan "
            style={{ hyphens: "auto" }}
          >
            {title}
          </h1>
        </div>

        {/* Conditional rendering based on isAdmin or isEditor */}

        {/* Admin/Editor Buttons */}

        {!isAdminLoading &&
        user?.uid &&
        isAdmin &&
        user?.email === "info@cottagehomecare.com" ? (
          <div className="absolute bottom-0 left-0 w-full p-4 flex gap-3 justify-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-5 transition-all duration-300 ease-in-out">
            <Link className="" href={`/blog/${slug}`}>
              <button
                type="button"
                className="inline-block rounded bg-[#00A6B2] px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#00A6B2]-600"
              >
                Read More
              </button>
            </Link>
            <Link href={`/blog/${slug}`}>
              <button
                type="button"
                className="inline-block rounded bg-[#1D93AE] px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#1D93AE]-600"
              >
                Update
              </button>
            </Link>
            <button
              onClick={deleteHandler}
              type="button"
              className="inline-block rounded bg-red-500 px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="absolute top-[175px] left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <Link className="" href={`/blog/${slug}`}>
              <button
                type="button"
                className="rounded-full bg-[#00A6B2] w-[55px] h-[55px] text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg flex justify-center items-center play-btn3"
              >
                <HiOutlineArrowSmRight className="text-2xl" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
