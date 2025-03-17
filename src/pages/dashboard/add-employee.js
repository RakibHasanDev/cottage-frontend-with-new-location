"use client"; // ✅ Ensures this component runs only on the client side.

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation"; // ✅ Next.js uses `useRouter` instead of `useNavigate`
import Script from "next/script"; // ✅ Next.js way to load external scripts
import OverlayLoading from "@/components/shared/OverlayLoading";

const EmployeeForm = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  // ✅ Fetch API key correctly in Next.js
  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

  // ✅ Handle form submission
  const submitHandler = async (data) => {
    setLoading(true);

    const employee = {
      name: data?.name,
      img: imageUrl,
      designation: data?.designation,
      department: data?.department,
      office: data?.office,
      description: data?.description.replace(/<br>/g, "\n"),
      primaryNumber: data?.primaryNumber,
      directNumber: data?.directNumber,
      extension: data?.extension,
      email: data?.email,
      facebook: data?.facebook,
      instagram: data?.instagram,
      twitter: data?.twitter,
      web: data?.web,
      linkEdin: data?.linkEdin,
    };

    try {
      const response = await fetch(
        "https://cottage-backend-voilerplate.vercel.app/employee",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-API-Key": apiKey,
          },
          body: JSON.stringify(employee),
        }
      );

      const data = await response.json();
      setLoading(false);

      if (data.acknowledged) {
        toast.success("Employee Added Successfully");
        reset();
        router.push("/team"); // ✅ Next.js uses `router.push`
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      toast.error("Something went wrong. Try again!");
    }
  };

  // ✅ Open Cloudinary Upload Widget
  const openCloudinaryWidget = () => {
    if (window.cloudinary) {
      window.cloudinary.openUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
          sources: ["local", "url"],
          multiple: false,
          folder: "employees",
          resourceType: "image",
        },
        (error, result) => {
          if (error) {
            console.error("Upload error:", error);
            toast.error("Image upload failed. Please try again.");
          } else if (result.event === "success") {
            setImageUrl(result.info.secure_url);
            setValue("imgUrl", result.info.secure_url);
            toast.success("Image uploaded successfully.");
          }
        }
      );
    }
  };

  return (
    <>
      {/* ✅ Load Cloudinary Widget Script */}
      <Script
        src="https://widget.cloudinary.com/v2.0/global/all.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Cloudinary Widget loaded")}
      />

      <div className="pt-5 contact-bg min-h-screen" id="contact-form">
        {loading && (
          <div className="my-5 text-center">
            <p className="text-lg font-semibold text-gray-600">
              <OverlayLoading />
            </p>
          </div>
        )}

        <section className="flex justify-center items-center pb-8 mt-3 mb-12 rounded w-11/12 md:w-[80%] mx-auto">
          <div className="w-full" data-aos="fade-up" data-aos-duration="2000">
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="max-w-xl md:max-w-3xl ml-auto bg-gray-50 p-8 rounded-md shadow-xl dark:bg-slate-600"
            >
              <h1 className="text-2xl text-gray-600 text-center font-semibold dark:text-gray-200">
                Add An Employee
              </h1>

              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                {/* Employee Name */}
                <div className="space-y-0.5 text-sm">
                  <label
                    htmlFor="Employee-Name"
                    className="block dark:text-gray-200"
                  >
                    Employee Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    id="Employee-Name"
                    placeholder="Employee Name"
                    className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                  />
                  {errors.name && (
                    <p className="text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Image Upload */}
                <div className="space-y-0.5 text-sm">
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="imageUpload"
                      className="block dark:text-gray-200"
                    >
                      Image
                    </label>
                    <small className="text-red-500">
                      [ Image should not be larger than 200 KB ]
                    </small>
                  </div>
                  <button
                    type="button"
                    onClick={openCloudinaryWidget}
                    className="file-input file-input-secondary  text-gray-700 w-full px-4 py-3 rounded-md border focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                  >
                    Upload an Image
                  </button>
                  {imageUrl && (
                    <p className="text-green-600 mt-2">Image uploaded!</p>
                  )}
                </div>
              </div>

              <hr className="my-3" />

              {/* Designation */}
              <div className="space-y-0.5 text-sm">
                <label
                  htmlFor="Employee-Designation"
                  className="block dark:text-gray-200"
                >
                  Designation
                </label>
                <input
                  type="text"
                  {...register("designation", {
                    required: "Designation is required",
                  })}
                  id="Employee-Designation"
                  placeholder="Employee Designation"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                />
                {errors.designation && (
                  <p className="text-red-600">{errors.designation.message}</p>
                )}
              </div>

              {/* Department */}
              <div className="space-y-1 text-sm mt-2">
                <label htmlFor="option" className="block dark:text-gray-400">
                  Department
                </label>
                <select
                  {...register("department", {
                    required: "Department is required",
                  })}
                  id="option"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                  required
                >
                  <option value="" disabled hidden selected>
                    Select One
                  </option>
                  <option value="CEO">CEO</option>
                  <option value="COO">COO</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Leadership">Leadership</option>
                  <option value="OfficeManager">Office Manager</option>
                  <option value="INTAKE">Intake</option>
                  <option value="CdpapSuperVisor">CDPAP Supervisor</option>
                  <option value="CDPAP">CDPAP</option>
                  <option value="HHA">HHA</option>
                  <option value="HHA_MANAGER">HHA Manager</option>
                  <option value="Administrative">
                    Administrative Associate
                  </option>
                  <option value="AdminSuperVisor">Admin Supervisor</option>
                  <option value="ADMIN">Admin</option>
                  <option value="HrSuperVisor">HR Supervisor</option>
                  <option value="HR">HR</option>
                  <option value="BillingSuperVisor">Billing Supervisor</option>
                  <option value="BILLING">Billing</option>
                  <option value="ItSoftware">IT/SOFTWARE</option>
                  <option value="MediaMarketing">Media Marketing</option>
                  <option value="FrontDesk">Front Desk</option>
                  <option value="RnDps">RN/DPS</option>
                </select>
                {errors.department && (
                  <p className="text-red-600">{errors.department.message}</p>
                )}
              </div>
              <div className="space-y-1 text-sm mt-2">
                <label htmlFor="option" className="block dark:text-gray-400">
                  Select Office
                </label>

                <select
                  {...register("office")}
                  id="option"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                >
                  <option value="" disabled hidden>
                    Select One
                  </option>
                  <option value="BD">BD Office</option>
                  <option value=" ">None</option>
                </select>
              </div>

              {/* Description */}
              <div className="space-y-0.5 text-sm mt-5">
                <label
                  htmlFor="description"
                  className="block dark:text-gray-200"
                >
                  Description
                </label>
                <textarea
                  {...register("description")}
                  id="description"
                  rows={5}
                  placeholder="Employee Details"
                  className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                />
              </div>

              <hr className="my-3" />

              {/* Primary Number */}
              <div className="space-y-0.5 text-sm mt-5">
                <label
                  htmlFor="primaryNumber"
                  className="block dark:text-gray-200"
                >
                  Primary Number
                </label>
                <input
                  type="text"
                  {...register("primaryNumber")}
                  id="primaryNumber"
                  placeholder="Primary Number"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                />
              </div>

              {/* Direct Number */}
              <div className="space-y-0.5 text-sm mt-5">
                <label
                  htmlFor="directNumber"
                  className="block dark:text-gray-200"
                >
                  Direct Number
                </label>
                <input
                  type="text"
                  {...register("directNumber")}
                  id="directNumber"
                  placeholder="Direct Number"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                />
              </div>

              {/* Extension */}
              <div className="space-y-0.5 text-sm mt-5">
                <label htmlFor="extension" className="block dark:text-gray-200">
                  Extension
                </label>
                <input
                  type="text"
                  {...register("extension")}
                  id="extension"
                  placeholder="Extension"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                />
              </div>

              {/* Email */}
              <div className="space-y-0.5 text-sm mt-5">
                <label htmlFor="email" className="block dark:text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                />
              </div>

              {/* Social Media Links */}
              <div className="space-y-0.5 text-sm mt-5">
                <label htmlFor="facebook" className="block dark:text-gray-200">
                  Facebook URL
                </label>
                <input
                  type="text"
                  {...register("facebook")}
                  id="facebook"
                  placeholder="Facebook URL"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                />
              </div>

              <div className="space-y-0.5 text-sm mt-5">
                <label htmlFor="twitter" className="block dark:text-gray-200">
                  Twitter URL
                </label>
                <input
                  type="text"
                  {...register("twitter")}
                  id="twitter"
                  placeholder="Twitter URL"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                />
              </div>

              <div className="space-y-0.5 text-sm mt-5">
                <label htmlFor="instagram" className="block dark:text-gray-200">
                  Instagram URL
                </label>
                <input
                  type="text"
                  {...register("instagram")}
                  id="instagram"
                  placeholder="Instagram URL"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                />
              </div>

              <div className="space-y-0.5 text-sm mt-5">
                <label htmlFor="linkEdin" className="block dark:text-gray-200">
                  LinkedIn URL
                </label>
                <input
                  type="text"
                  {...register("linkEdin")}
                  id="linkEdin"
                  placeholder="LinkedIn URL"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                />
              </div>

              <div className="space-y-0.5 text-sm mt-5">
                <label htmlFor="web" className="block dark:text-gray-200">
                  Web URL
                </label>
                <input
                  type="text"
                  {...register("web")}
                  id="web"
                  placeholder="Web URL"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-200 dark:placeholder:text-gray-200"
                />
              </div>

              <button className="block w-full p-3 text-center rounded-sm bg-[#00A6B2] hover:bg-secondary text-white mt-6">
                Upload
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default EmployeeForm;
