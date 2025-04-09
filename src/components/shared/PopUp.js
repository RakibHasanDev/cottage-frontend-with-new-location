import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { validatePhoneNumber } from "./validatePhoneNumber";
import SpinerLoading from "./SpinerLoading";

const PopUp = () => {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [minimize, setMinimize] = useState(true);
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const popupRef = useRef(null);
  const [showText, setShowText] = useState(true);

  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(false);
      setMinimize(false);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    let interval; // Declare the interval for cleanup

    // Timer for the first 18000ms delay
    const timer = setTimeout(() => {
      // Show text immediately after the 18000ms delay
      setShowText(true);
      const hideTimer = setTimeout(() => {
        setShowText(false); // Hide text after 2000ms
      }, 2000);

      // Start the interval for 20000ms
      interval = setInterval(() => {
        setShowText(true); // Show text
        const hideTimer = setTimeout(() => {
          setShowText(false); // Hide text after 2000ms
        }, 4000);
        return () => clearTimeout(hideTimer);
      }, 40000);

      return () => clearTimeout(hideTimer); // Cleanup hideTimer
    }, 18000);

    // Cleanup both the timer and interval when the component is unmounted
    return () => {
      clearTimeout(timer); // Clear the 18000ms timer
      clearInterval(interval); // Clear the interval
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleMinimize();
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  const handleMinimize = () => {
    setMinimize(true);
    setTimeout(() => {
      setShowPopup(false);
      setMinimize(false);
    }, 500);
  };

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
      .then((data) => {
        // toast.success(data?.message)
      });
  };

  const submitHandler = async (data) => {
    setLoading(true);

    const contactInfo = {
      contact: data.phoneNumber,
    };

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("contact", data.phoneNumber);
    formData.append("dob", data.dob);
    formData.append("medicate", data.medicate);
    formData.append("time", data.time);
    formData.append("file", data.file[0]);

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
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email");
    } finally {
      setLoading(false);
      handleMinimize();
    }
  };

  return (
    <div>
      {showPopup && (
        <div>
          <div className={`popup-overlay z-50 ${minimize ? "minimize" : ""}`}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <div
                ref={popupRef}
                className={`popup w-[95%] mx-auto md:w-full z-50 relative text-white ${
                  minimize ? "minimize" : ""
                }`}
              >
                <button
                  onClick={handleMinimize}
                  className="absolute top-3 right-3 bg-red-600 p-2 rounded-full text-white"
                >
                  <FaTimes className="text-2xl" />
                </button>
                <div className="Poppins">
                  <form
                    onSubmit={handleSubmit(submitHandler)}
                    className="md:max-w-lg  mx-auto md:p-4 rounded-md shadow-xl lg:ml-0"
                  >
                    {loading && (
                      <div className="my-3">
                        <SpinerLoading />
                      </div>
                    )}
                    <h1 className="md:text-2xl text-lg text-center md:font-medium custom-font">
                      {" "}
                      Eligibility Check
                    </h1>
                    <p className="mt-2 mb-1 text-center md:text-base text-sm">
                      If you want to get service please fill up the form.
                    </p>

                    <div className="grid grid-cols-2 gap-3 md:gap-6 mt-2 md:mt-4 w-full">
                      <div className="md:space-y-1 text-sm">
                        <label
                          htmlFor="firstName"
                          className="block dark:text-gray-400"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          {...register("firstName", {
                            required: "First Name is required",
                          })}
                          id="firstName"
                          placeholder="First Name"
                          className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                        />
                        {errors.firstName && (
                          <p className="text-red-600">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div className="md:space-y-1 text-sm">
                        <label
                          htmlFor="phone"
                          className="block dark:text-gray-400"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          {...register("lastName", {
                            required: "Last Name is required",
                          })}
                          id="LastName"
                          placeholder="Last Name"
                          className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                        />
                        {errors.lastName && (
                          <p className="text-red-600">
                            {errors.lastName.message}
                          </p>
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
                          name="birthday"
                          placeholder="DOB"
                          {...register("dob", { required: "DOB is required" })}
                          className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                        />
                        {errors.dob && (
                          <p className="text-red-600">{errors.dob.message}</p>
                        )}
                      </div>

                      <div className="space-y-1 md:-mt-3 text-sm">
                        <label
                          htmlFor="medicate"
                          className="block dark:text-gray-400 text-xs md:text-sm"
                        >
                          Medicaid No. [Optional]
                        </label>
                        <input
                          type="text"
                          id="MedicateNo"
                          name="MedicateNo"
                          placeholder="Ex:AB12345C"
                          {...register("medicate")}
                          className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100 placeholder:tracking-widest placeholder:"
                        />
                      </div>

                      <div className="space-y-1 md:-mt-3 -mt-1 text-sm">
                        <label
                          htmlFor="email"
                          className="block dark:text-gray-400"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          id="email"
                          placeholder="E-mail"
                          className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icons-us"
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
                              // Custom validation: stop submission if the phone number is already in the existing numbers array
                              validate: validatePhoneNumber, // Custom function to check existing numbers
                            })}
                            className="w-full pl-10 md:pl-12 px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                          />
                        </div>
                        {errors.phoneNumber && (
                          <p className="text-red-600">
                            {errors.phoneNumber.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1 md:-mt-3 -mt-1 text-sm">
                        <label
                          htmlFor="time"
                          className="block dark:text-gray-400"
                        >
                          Preferred time to Call
                        </label>
                        <input
                          type="text"
                          {...register("time", {
                            required: "Time is required",
                          })}
                          placeholder="Preferred time to Call"
                          className="w-full px-4 md:py-2.5 py-1.5 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
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
                          {...register("file")}
                          id="file"
                          className="md:w-[215px] w-[155px] px-4 md:py-1  rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
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
                        <span className="text-xs leading-relaxed md:text-sm text-gray-100 ">
                          By checking this box, you agree to receive text
                          messages from Cottage Home Care Services, you can
                          reply stop to opt-out at any time, this is our{" "}
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
                      className="block w-full p-3 text-center rounded-md bg-[#00A6B2] dark:bg-slate-600 hover:bg-[#1D93AE] text-white mt-6"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!showPopup && !minimize && (
        <div
          className="fixed bottom-0 left-0 mb-[30vh] lg:z-50 z-30 flex items-center"
          onClick={() => setShowPopup(true)}
        >
          {/* Eligibility Button */}
          <div
            className={`w-9  h-9 pop-btn  lg:w-10 lg:h-10  bg-white border-2 dark:border-[#77f6ff] border-[#00A6B2] rounded-full cursor-pointer flex justify-center items-center shadow-md ${
              minimize ? "minimize" : ""
            }`}
          >
            <img
              className="rounded-full"
              src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1733952336/zprizfk73ikzhkded5gb.jpg"
              alt="customer-support"
            />
          </div>

          {/* Eligibility Text */}
          {showText && (
            <div className="relative -mt-12 cursor-pointer lg:-mt-16 inline-block text-sm bg-white text-gray-700 shadow-md rounded-lg lg:p-3 px-2 py-1 ">
              <span>Check Your Eligibility! </span>
              <div className="absolute -left-[14px] bottom-0">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-white border-b-[10px] border-b-transparent"></div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PopUp;
