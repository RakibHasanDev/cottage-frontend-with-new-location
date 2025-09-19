// components/shared/CareRequestModal.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { validatePhoneNumber } from "./validatePhoneNumber";
import SpinerLoading from "./SpinerLoading";

const CareRequestModal = ({ open, setOpen }) => {
  //   const [open, setOpen] = useState(false); // <-- single state controls visibility
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // === keep API logic the same ===
  const smsHandler = (contactInfo) => {
    fetch("https://cottage-backend-voilerplate.vercel.app/sms", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-API-Key": `${apiKey}`,
      },
      body: JSON.stringify(contactInfo),
    })
      .then((res) => res.json())
      .catch(() => {});
  };

  const submitHandler = async (data) => {
    setLoading(true);

    const contactInfo = { contact: data.phoneNumber };

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("contact", data.phoneNumber);
    formData.append("dob", data.dob);
    formData.append("medicate", data.medicate);
    formData.append("time", data.time);
    formData.append("file", data.file?.[0]); // safe, same endpoint/shape

    try {
      const response = await fetch(
        "https://cottage-backend-voilerplate.vercel.app/email",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();

      if (result.acknowledged) {
        smsHandler(contactInfo);
        toast.success("Message Sent successfully");
        reset();
      } else {
        toast.error("Submission failed");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      toast.error("Error sending email");
    } finally {
      setLoading(false);
      setOpen(false); // close after submit
    }
  };

  return (
    <>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop (no click-to-close, per your ask) */}
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

          <div className="relative z-10 w-[95%] md:w-[680px] rounded-lg bg-[#000000bb] text-white p-4 md:p-6 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 p-2 rounded-full text-white"
              aria-label="Close"
            >
              <Icon icon="fa6-solid:xmark" className="text-2xl" />
            </button>

            <form
              onSubmit={handleSubmit(submitHandler)}
              className="md:max-w-2xl mx-auto md:p-4 overflow-y-scroll md:overflow-hidden"
            >
              {loading && (
                <div className="my-3">
                  <SpinerLoading />
                </div>
              )}

              <h1 className="md:text-2xl text-lg text-center md:font-medium custom-font">
                Eligibility Check
              </h1>
              <p className="mt-2 mb-1 text-center md:text-base text-sm">
                <b>You Need Homecare Services?</b> <br />
                Then fill out the form below to see how fast you can get started
                with your opportunities and benefits.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-6 mt-3 w-full">
                <div className="md:space-y-1 text-sm">
                  <label
                    htmlFor="firstName"
                    className="block dark:text-gray-400"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00A6B265] bg-[#EBF8F9] focus:bg-white shadow-md"
                  />
                  {errors.firstName && (
                    <p className="text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                <div className="md:space-y-1 text-sm">
                  <label
                    htmlFor="LastName"
                    className="block dark:text-gray-400"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00A6B265] bg-[#EBF8F9] focus:bg-white shadow-md"
                  />
                  {errors.lastName && (
                    <p className="text-red-600">{errors.lastName.message}</p>
                  )}
                </div>

                <div className="space-y-1 md:-mt-3 -mt-1 text-sm">
                  <label
                    htmlFor="birthday"
                    className="block dark:text-gray-400"
                  >
                    DOB
                  </label>
                  <input
                    type="text"
                    id="birthday"
                    placeholder="DOB"
                    {...register("dob", { required: "DOB is required" })}
                    className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00A6B265] bg-[#EBF8F9] focus:bg-white shadow-md"
                  />
                  {errors.dob && (
                    <p className="text-red-600">{errors.dob.message}</p>
                  )}
                </div>

                <div className="space-y-1 md:-mt-3 text-sm">
                  <label
                    htmlFor="MedicateNo"
                    className="block dark:text-gray-400 text-xs md:text-sm"
                  >
                    Medicaid No. [Optional]
                  </label>
                  <input
                    type="text"
                    id="MedicateNo"
                    placeholder="Ex:AB12345C"
                    {...register("medicate")}
                    className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00A6B265] bg-[#EBF8F9] focus:bg-white shadow-md placeholder:tracking-widest"
                  />
                </div>

                <div className="space-y-1 md:-mt-3 -mt-1 text-sm">
                  <label htmlFor="email" className="block dark:text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    {...register("email")}
                    className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00A6B265] bg-[#EBF8F9] focus:bg-white shadow-md"
                  />
                </div>

                <div className="space-y-1 md:-mt-3 -mt-1 text-sm">
                  <label
                    htmlFor="phoneNumber"
                    className="block dark:text-gray-400"
                  >
                    Contact No.
                  </label>
                  <div className="relative">
                    {/* tiny US flag – your original svg kept */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 480"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                    >
                      <g fillRule="evenodd" strokeWidth="1pt">
                        <path
                          fill="#bd3d44"
                          d="M0 0h924v37H0zm0 73h924v37H0zm0 73h924v37H0zm0 73h924v37H0zm0 73h924v37H0zm0 73h924v37H0zm0 73h924v37H0zM0 37h924v36H0zm0 73h924v37H0zm0 73h924v37H0zm0 73h924v37H0zm0 73h924v37H0zm0 73h924v37H0zm0 73h924v37H0z"
                        />
                        <path fill="#192f5d" d="M0 0h370v222H0z" />
                        <path
                          fill="#fff"
                          d="M33 8l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zM66 40l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm-330 65l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zM33 105l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10zm66 0l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10z"
                        />
                      </g>
                    </svg>
                    <input
                      type="tel"
                      id="phoneNumber"
                      placeholder="Enter Phone Number"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: {
                          value:
                            /^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.● ]?([0-9]{4})$/,
                          message: "Please enter a valid US phone number",
                        },
                      })}
                      className="w-full pl-10 md:pl-12 px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00A6B265] bg-[#EBF8F9] focus:bg-white shadow-md"
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-red-600 text-xs md:text-sm">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1 md:-mt-3 -mt-1 text-sm">
                  <label htmlFor="time" className="block dark:text-gray-400">
                    Preferred time to Call
                  </label>
                  <input
                    type="text"
                    placeholder="Preferred time to Call"
                    {...register("time", { required: "Time is required" })}
                    className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00A6B265] bg-[#EBF8F9] focus:bg-white shadow-md"
                  />
                  {errors.time && (
                    <p className="text-red-600">{errors.time.message}</p>
                  )}
                </div>

                <div className="space-y-1 md:-mt-3 -mt-1">
                  <label
                    htmlFor="file"
                    className="block dark:text-gray-400 text-sm"
                  >
                    Attached Benefit Card
                  </label>
                  <input
                    type="file"
                    id="file"
                    {...register("file")}
                    className="md:w-[215px] w-[155px] px-4 md:py-1 rounded-md border text-gray-700 focus:outline-[#00A6B265] bg-[#EBF8F9] focus:bg-white shadow-md"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="form-checkbox h-5 w-5 text-[#00A6B2] focus:outline-none"
                  />
                  <span className="text-xs leading-relaxed md:text-sm text-gray-100">
                    By checking this box, you agree to receive text messages
                    from Cottage Home Care Services, you can reply stop to
                    opt-out at any time, this is our{" "}
                    <Link
                      className="text-blue-600"
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      privacy policy
                    </Link>
                    .
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="block w-full p-3 text-center rounded-md bg-[#00A6B2] hover:bg-[#1D93AE] text-white mt-6"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CareRequestModal;
