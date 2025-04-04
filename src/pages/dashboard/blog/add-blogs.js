"use client"; // ✅ Ensures this runs only on the client-side.

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation"; // ✅ Next.js navigation
import Script from "next/script";
import OverlayLoading from "@/components/shared/OverlayLoading";
import slugify from "slugify";

const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const [paragraphs, setParagraphs] = useState([
    { title: "", description: "" },
  ]);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;
  console.log(apiKey);
  useEffect(() => {
    const loadCloudinaryWidget = () => {
      if (typeof window !== "undefined" && !window.cloudinary) {
        const script = document.createElement("script");
        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          console.log("Cloudinary Widget loaded");
          setWidgetLoaded(true);
        };
      }
    };

    loadCloudinaryWidget();
  }, []);

  // ✅ Handle Cloudinary Image Upload (EXACTLY LIKE EmployeeForm)
  const handleImageUpload = () => {
    if (widgetLoaded && window.cloudinary) {
      window.cloudinary.openUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
          sources: ["local", "url"],
          multiple: false,
          folder: "blogs",
          resourceType: "image",
        },
        (error, result) => {
          if (!error && result.event === "success") {
            setImageUrl(result.info.secure_url);
            setValue("imageUrl", result.info.secure_url);
            toast.success("Image uploaded successfully.");
          } else if (error) {
            toast.error("Image upload failed. Please try again.");
          }
        }
      );
    } else {
      toast.error("Cloudinary widget is not loaded yet. Please try again.");
    }
  };

  const addParagraph = () => {
    setParagraphs([...paragraphs, { title: "", description: "" }]);
  };

  const removeParagraph = (index) => {
    setParagraphs(paragraphs.filter((_, i) => i !== index));
  };

  const submitHandler = async (data) => {
    if (!imageUrl) {
      toast.error("Please upload an image.");
      return;
    }

    setLoading(true);

    const slug = slugify(data.title, { lower: true, strict: true });

    const blog = {
      title: data.title,
      slug: slug,
      keywords: data.keywords.split(",").map((kw) => kw.trim()),
      category: data.category,
      newDate: new Date().toISOString(),
      img: imageUrl,
      description: paragraphs.map((_, index) => ({
        sub_title: data[`title${index + 1}`],
        content: data[`description${index + 1}`].replace(/\n/g, "<br/>"),
      })),
    };

    try {
      const response = await fetch(
        "https://cottage-backend-voilerplate.vercel.app/blogs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": apiKey,
          },
          body: JSON.stringify(blog),
        }
      );

      const result = await response.json();
      setLoading(false);

      if (result.acknowledged) {
        toast.success("Blog added successfully!");
        reset();
        setImageUrl("");
        router.push("/blog");
      } else {
        toast.error("Failed to add the blog. Try again.");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      {/* ✅ Load Cloudinary Widget Script */}
      <Script
        src="https://widget.cloudinary.com/v2.0/global/all.js"
        strategy="lazyOnload"
        onLoad={() => setWidgetLoaded(true)}
      />

      <div className="pt-5 contact-bg" id="contact-form">
        {loading && (
          <div className="my-5">
            <OverlayLoading />
          </div>
        )}
        <section className="flex justify-center items-center pb-8 mt-3 mb-12 rounded w-11/12 md:w-[80%] mx-auto">
          <div className="w-full" data-aos="fade-up" data-aos-duration="2000">
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="max-w-xl md:max-w-3xl ml-auto bg-gray-50 p-8 rounded-md shadow-xl dark:bg-slate-600"
            >
              <h1 className="text-2xl text-gray-600 text-center Poppins font-semibold dark:text-gray-100">
                Add A Blog
              </h1>

              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div className="space-y-0.5 text-sm">
                  <label htmlFor="title" className="block dark:text-gray-200">
                    Title
                  </label>
                  <input
                    type="text"
                    {...register("title", { required: "Title is required" })}
                    id="title"
                    placeholder="Title"
                    className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-100"
                  />
                  {errors.title && (
                    <p className="text-red-600">{errors.title.message}</p>
                  )}
                </div>

                <div className="space-y-0.5 text-sm">
                  <div className="flex items-center gap-4">
                    <label htmlFor="url" className="block dark:text-gray-200">
                      Image
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    className="file-input file-input-[#1D93AE] border-0 w-full text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-100 py-3"
                  >
                    Upload Image
                  </button>
                  {errors.imageUrl && (
                    <p className="text-red-600">{errors.imageUrl.message}</p>
                  )}
                </div>

                <div className="space-y-0.5 text-sm">
                  <label
                    htmlFor="category"
                    className="block dark:text-gray-200"
                  >
                    Category
                  </label>
                  <select
                    {...register("category", {
                      required: "Category is required",
                    })}
                    id="category"
                    className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-100"
                  >
                    <option value="">Select Category</option>
                    <option value="HHA">HHA</option>
                    <option value="NHTD">NHTD</option>
                    <option value="PRIVATEPAY">PRIVATEPAY</option>
                    <option value="CDPAP">CDPAP</option>
                    <option value="NEWS">News</option>
                    <option value="BLOG">Blog</option>
                    <option value="EVENT">Event</option>
                    <option value="OFFER">Offer</option>
                    <option value="OTHERS">Others</option>
                  </select>
                  {errors.category && (
                    <p className="text-red-600">{errors.category.message}</p>
                  )}
                </div>
              </div>

              <hr className="my-3" />

              {paragraphs?.map((paragraph, index) => (
                <div key={index} className="mb-4">
                  <div className="space-y-0.5 text-sm">
                    <input
                      type="text"
                      {...register(`title${index + 1}`)}
                      id={`title${index + 1}`}
                      placeholder={`Paragraph Title-${index + 1}`}
                      className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-100"
                    />
                    {errors[`title${index + 1}`] && (
                      <p className="text-red-600">
                        {errors[`title${index + 1}`].message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-0.5 text-sm mt-5">
                    <textarea
                      {...register(`description${index + 1}`, {
                        required: "Description is required",
                      })}
                      id={`description${index + 1}`}
                      rows={5}
                      placeholder={`Paragraph-${index + 1} Description`}
                      className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-100"
                    />
                    {errors[`description${index + 1}`] && (
                      <p className="text-red-600">
                        {errors[`description${index + 1}`].message}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => removeParagraph(index)}
                    className="mt-2 bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addParagraph}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Add Paragraph
              </button>

              <div className="space-y-0.5 text-sm mt-5">
                <label htmlFor="keywords">Keywords (comma separated)</label>
                <textarea
                  {...register("keywords", {
                    required: "Keywords is required",
                  })}
                  id={`keywords`}
                  rows={3}
                  placeholder="e.g. sleep, senior care, night routine"
                  className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-100"
                />
                {errors.keywords && (
                  <p className="text-red-600">{errors.keywords.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="block w-full p-3 text-center rounded-sm bg-[#00A6B2] hover:bg-[#1D93AE] text-white mt-6"
              >
                Upload
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddBlog;
