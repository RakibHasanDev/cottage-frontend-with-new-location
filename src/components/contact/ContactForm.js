import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { validatePhoneNumber } from "../shared/validatePhoneNumber";
import OverlayLoading from "../shared/OverlayLoading";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const date = Date.now();

  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

  console.log(apiKey);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const emailStorage = (email, name) => {
    localStorage.setItem("email", `${email}`);
    localStorage.setItem("name", `${name}`);
    localStorage.setItem("chatLength", 1);
  };

  const updateTime = (userMessage, email, name) => {
    const info = {
      date,
      name,
      email: email,
      message: userMessage,
      chat: "active",
    };

    fetch(`https://cottage-backend-voilerplate.vercel.app/users/time`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        //    console.log(data)
        if (data.acknowledged) {
          toast.success("Message Send Successfully");
        }
      });
  };

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
      })
      .catch((error) => {
        console.error("Error in SMS Handler:", error);
      });
  };

  const saveUser = (
    name,
    email,
    verify = "false",
    chat = "active",
    time = date
  ) => {
    const newUser = { name, email, verify, chat, time };
    fetch("https://cottage-backend-voilerplate.vercel.app/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        //    console.log(data)
        if (data.acknowledged) {
          emailStorage(email, name);
        }
      });
  };

  const submitHandler = (data) => {
    setLoading(true);

    const name = data.firstName;
    const email = data.email;
    const userMessage = data.subject;
    const contactInfo = {
      contact: data.phone,
    };

    const message = {
      firstName: data.firstName,
      email: data.email,
      phone: data.phone,
      service: data.service,
      inquiry: data.inquiry,
      messages: data.subject.replace(/<br>/g, "\n"),
      time: date,
    };

    fetch("https://cottage-backend-voilerplate.vercel.app/chats", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          //

          saveUser(name, email);
          updateTime(userMessage, email, name);
          smsHandler(contactInfo);
          reset();
          setLoading(false);
        }
      });
  };

  return (
    <div className="md:pt-9 pt-5 contact-bg" id="contact-form">
      {loading && <OverlayLoading />}
      <section className="flex justify-center items-center pb-8 mt-3 mb-12 rounded w-11/12  md:w-[80%] mx-auto">
        <div
          className="w-full md:mt-[10vh] "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <form
            // onSubmit={submitHandler}

            onSubmit={handleSubmit(submitHandler)}
            className="max-w-xl md:max-w-2xl   ml-auto bg-gray-50 dark:bg-slate-600 p-8 rounded-md shadow-xl "
          >
            <h1 className="text-2xl text-gray-600 dark:text-gray-100 text-center  font-semibold league-spartan">
              {" "}
              CONTACT FORM
            </h1>

            <div className="grid grid-cols-2 gap-6 mt-4 open-sans">
              <div className="space-y-1   text-sm">
                <label htmlFor="firstName" className="block dark:text-gray-100">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: "Name is required" })}
                  id="firstName"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                />

                {errors.firstName && (
                  <p className="text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-1    text-sm">
                <label htmlFor="phone" className="block dark:text-gray-100">
                  Phone
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value:
                        /^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.● ]?([0-9]{4})$/,
                      message: "Please enter a valid US phone number",
                    },
                    // Custom validation: stop submission if the phone number is already in the existing numbers array
                    validate: validatePhoneNumber,
                  })}
                  id="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                />

                {errors.phone && (
                  <p className="text-red-600">{errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-1   text-sm">
                <label htmlFor="email" className="block dark:text-gray-100 ">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "email is required" })}
                  placeholder="E-mail "
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                        focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1 text-sm ">
                <label htmlFor="option" className="block dark:text-gray-100">
                  Services
                </label>
                <select
                  // name='service'
                  {...register("service", {
                    required: "service is required",
                  })}
                  id="option"
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                              focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                >
                  <option value={""} disabled hidden selected>
                    Select One
                  </option>
                  <option value="CDPAP">CDPAP</option>
                  <option value="PCA">PCA</option>
                  <option value="NHTD">NHTD</option>
                  <option value="PRIVATE PAY">PRIVATE PAY</option>
                  <option value="Others">Others</option>
                </select>
                {errors.service && (
                  <p className="text-red-600">{errors.service.message}</p>
                )}
              </div>
            </div>

            <hr className="my-5" />

            <div className="space-y-1 text-sm mt-1">
              <label htmlFor="option" className="block dark:text-gray-100">
                Inquiry Type
              </label>
              <select
                {...register("inquiry", { required: "inquiry is required" })}
                id="option"
                className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                    focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
              >
                <option value={""} disabled hidden selected>
                  Select One
                </option>
                <option value="General">General Inquiry</option>
                <option value="Grievance">Grievance</option>
              </select>
              {errors.inquiry && (
                <p className="text-red-600">{errors.inquiry.message}</p>
              )}
            </div>

            <div className="space-y-1 text-sm  mt-5">
              <label htmlFor="description" className="block dark:text-gray-100">
                Subject
              </label>
              <textarea
                type="text"
                {...register("subject", { required: "subject is required" })}
                // name="subject"
                id="subject"
                rows={5}
                placeholder="Subject"
                className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                    focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
              />
              {errors.subject && (
                <p className="text-red-600">{errors.subject.message}</p>
              )}
            </div>
            {/* <button className="block w-full p-3 text-center rounded-sm  bg-[#00A6B2] hover:bg-secondary text-white mt-6">
              Send
            </button> */}

            <div className="mt-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-[#00A6B2] focus:outline-none"
                />
                <span className="text-xs md:text-sm leading-relaxed dark:text-gray-100 open-sans ">
                  By checking this box, you agree to receive text messages from
                  Cottage Home Care Services, you can reply stop to opt-out at
                  any time, this is our{" "}
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

            {/* <button className="block w-full p-3 text-center rounded-md bg-[#00A6B2] hover:bg-secondary text-white mt-6 ">
                    Send
                  </button> */}

            <button
              type="submit"
              className={`block w-full p-3 text-center rounded-md  bg-[#00A6B2] hover:bg-secondar text-white mt-6 league-spartan`}
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
