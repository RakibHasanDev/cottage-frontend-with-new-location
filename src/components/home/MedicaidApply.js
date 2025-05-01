import React, { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { RxDotFilled } from "react-icons/rx";
import callReader from "../../../src/assets/social-media-lottie/call.json";
import OverlayLoading from "../shared/OverlayLoading";

import toast from "react-hot-toast";

import { useInView } from "react-intersection-observer";
import Image from "next/image";

const MedicaidApply = () => {
  const Lottie = React.lazy(() => import("lottie-react"));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [loading, setLoading] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const smsHandler = (contactInfo) => {
    // console.log("Contact Info being sent:", contactInfo);

    fetch("https://cottage-backend-voilerplate.vercel.app/sms/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-API-Key": `${apiKey}`,
      },
      body: JSON.stringify(contactInfo), // Ensure contactInfo matches server expectations
    })
      .then((res) => {
        // console.log("Raw Response:", res);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // console.log("Parsed Response:", data);
        toast.success("Message Send Successfully");
        setLoading(false);
        reset();
      })
      .catch((error) => {
        console.error("Error in SMS Handler:", error);
      });
  };

  const submitHandler = (data) => {
    setLoading(true);

    const contactInfo = {
      contact: data.phoneNumber,
    };

    const userInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phoneNumber,
    };

    fetch("https://cottage-backend-voilerplate.vercel.app/medicaids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-API-Key": `${apiKey}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          smsHandler(contactInfo);
        }
      });
  };

  return (
    <div className="bg-[#00A6B2] dark:bg-slate-800">
      {loading && <OverlayLoading />}
      <div
        className="py-10  mt-[50px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-[95%] md:w-[90%] lg:w-[1000px] xl:w-[1100px]  2xl:w-[1350px] mx-auto text-white ">
          {/* start medicaid section  */}

          <div className="flex flex-col md:flex-row  items-center justify-start gap-y-5 lg:gap-x-28 2xl:gap-x-48 ">
            <div className="lg:space-y-3 space-y-2">
              <p className="text-2xl md:text-3xl 2xl:text-4xl font-bold league-spartan">
                Don&apos;t Have Medicaid?
              </p>
              <p className="text-2xl md:text-3xl 2xl:text-4xl font-bold league-spartan">
                We&apos;ll help you apply.
              </p>

              <div className="pt-2 bg-hov2">
                <a
                  href="tel:+1516-367-2266"
                  className="flex items-center px-4 py-2.5  w-[205px] lg:w-[250px]  border border-white rounded-full text-white  bg-hov2 league-spartan overflow-hidden xl:text-xl "
                >
                  {/* <FaPhone className="mr-2 " /> */}
                  <span ref={ref} className="h-[17px] ">
                    {inView && (
                      <Suspense fallback={<div>Loading...</div>}>
                        <Lottie
                          animationData={callReader}
                          loop={true}
                          className="h-[32px] w-[32px] mr-4 xl:mr-5  "
                          style={{
                            width: "110%",
                            height: "110%",
                            transform: "scale(1.6)",
                            marginTop: "-4px",
                          }}
                        />
                      </Suspense>
                    )}
                  </span>
                  Call: (516) 367-2266
                </a>
              </div>
            </div>

            <div className="order-first sm:order-none ml-4 lg:ml-0">
              <img
                className=" w-[95%] md:w-[350px] lg:w-[550px] xl:w-[600px] image-infinity "
                src="https://res.cloudinary.com/di3wwp9s0/image/upload/v1741711429/medicaid/cottage-home-care-medicaid.webp"
                alt="Cottage Home Care Medicaid services application process for home care assistance"
                width={1080}
                height={472}
              />
            </div>
          </div>

          {/* end medicaid section  */}

          {/* form section start  */}

          <div className="lg:flex lg:justify-start  open-sans">
            <div>
              <div className="flex items-center  mb-5 lg:mt-2 mt-5">
                <RxDotFilled className="text-3xl" />
                <p>Or drop in your info and we&apos;ll be in touch.</p>
              </div>

              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="grid grid-cols-2 lg:grid-cols-5  items-center gap-x-2 gap-y-3 lg:gap-y-0 lg:gap-x-4 2xl:min-w-[1280px]">
                  <div className="flex flex-col items-start  ">
                    <input
                      type="text"
                      className="bg-white px-3 md:px-4 py-2 text-sm md:text-[15px]  rounded-full shadow-md placeholder:text-gray-700 text-gray-700 focus:outline-none w-full "
                      placeholder="First Name"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    <p className="text-red-600 my-1 text-sm md:text-[15px] h-5">
                      {errors.firstName?.message}
                    </p>
                  </div>

                  <div className="flex flex-col items-start ">
                    <input
                      type="text"
                      className="bg-white px-3 md:px-4 py-2 text-sm md:text-[15px]  rounded-full shadow-md placeholder:text-gray-700 text-gray-700 focus:outline-none  w-full"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    <p className="text-red-600 my-1 text-sm md:text-[15px] h-5">
                      {errors.lastName?.message}
                    </p>
                  </div>

                  <div className="flex flex-col  items-start">
                    <input
                      type="email"
                      className="bg-white px-3 md:px-4 py-2 text-sm md:text-[clamp(0.875rem, 1vw, 1rem)] rounded-full shadow-md placeholder:text-gray-700 text-gray-700 focus:outline-none w-full "
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                    <p className="text-red-600 my-1 text-sm md:text-[15px] h-5">
                      {errors.email?.message}
                    </p>
                  </div>

                  <div className="flex flex-col items-start">
                    <input
                      type="tel"
                      className="bg-white px-3 md:px-4 py-2 text-sm md:text-[15px]  rounded-full shadow-md placeholder:text-gray-700 text-gray-700 focus:outline-none w-full"
                      placeholder="Contact"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: {
                          value:
                            /^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.● ]?([0-9]{4})$/,
                          message: "Enter a valid US Number",
                        },
                      })}
                    />
                    <p className="text-red-600 my-1 text-xs lg:text-sm h-5">
                      {errors.phoneNumber?.message}
                    </p>
                  </div>

                  <div className="flex lg:flex-col justify-center items-center lg:items-start col-span-2 lg:col-span-1 ">
                    <button className="px-6 py-2 bg-[#1c3461] dark:bg-slate-600 rounded-full text-white">
                      Submit
                    </button>
                    <p className=" my-1 text-sm md:text-[15px] h-5"></p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* form section end */}
        </div>
      </div>
    </div>
  );
};

export default MedicaidApply;
