"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-hot-toast";
import { validatePhoneNumber } from "../shared/validatePhoneNumber";
import OverlayLoading from "../shared/OverlayLoading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const US_STATES = ["New York", "New Jersey", "Maryland"];

const StateSelect = ({ value, onChange, error }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filtered = US_STATES.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <label className="block dark:text-gray-400">Select Your State</label>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                   focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100 text-left"
      >
        {value || "Select Your State"}
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white dark:bg-gray-500 rounded-md shadow-lg border">
          <div className="p-2">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-400 dark:text-gray-100"
            />
          </div>
          <ul className="max-h-56 overflow-auto">
            {filtered.map((s) => (
              <li
                key={s}
                onClick={() => {
                  onChange(s);
                  setOpen(false);
                  setQuery("");
                }}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              >
                {s}
              </li>
            ))}
            {!filtered.length && (
              <li className="px-4 py-2 text-gray-500 dark:text-gray-200">
                No results
              </li>
            )}
          </ul>
        </div>
      )}
      {error && <p className="text-red-600 mt-1">{error}</p>}
    </div>
  );
};

const EasierLife = () => {
  const [loading, setLoading] = useState(false);
  const [showProperty, setShowProperty] = useState("");
  const pathname = usePathname();
  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

  useEffect(() => {
    if (
      pathname === "/cdpap" ||
      pathname === "/hha" ||
      pathname === "/nhtd" ||
      pathname === "/private-pay-home-care"
    ) {
      setShowProperty("hidden");
    } else {
      setShowProperty("");
    }
  }, [pathname]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      service: "",
      inquiry: "",
      subject: "",
      state: "",
      isPatient: "",
      firstName: "",
      email: "",
      phone: "",
    },
  });

  const updateTime = (userMessage, email, name, date = Date.now()) => {
    const info = { date, name, email, message: userMessage, chat: "active" };
    fetch(`https://cottage-backend-voilerplate.vercel.app/users/time`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.acknowledged) {
          toast.success("message send successfully");
          setLoading(false);
          reset();
        }
      });
  };

  const smsHandler = (contactInfo) => {
    fetch("https://cottage-backend-voilerplate.vercel.app/sms/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-API-Key": `${apiKey}`,
      },
      body: JSON.stringify(contactInfo),
    }).catch((e) => console.error("Error in SMS Handler:", e));
  };

  const emailStorage = (email, name) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("email", `${email}`);
    localStorage.setItem("name", `${name}`);
    localStorage.setItem("chatLength", "1");
  };

  const saveUser = (
    name,
    email,
    verify = "false",
    chat = "active",
    time = Date.now()
  ) => {
    const newUser = { name, email, verify, chat, time };
    fetch("https://cottage-backend-voilerplate.vercel.app/users", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.acknowledged) emailStorage(email, name);
      });
  };

  const submitHandler = (data) => {
    setLoading(true);

    const name = data.firstName;
    const email = data.email;
    const userMessage = data?.subject;

    const contactInfo = { contact: data.phone };

    const message = {
      firstName: data.firstName,
      email: data.email,
      phone: data.phone,
      service: data.service,
      state: data.state, // ← added
      isPatient: data.isPatient, // ← added
      inquiry: data.inquiry,
      messages: data.subject.replace(/<br>/g, "\n"),
      time: Date.now(),
    };

    fetch("https://cottage-backend-voilerplate.vercel.app/chats", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(message),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.acknowledged) {
          smsHandler(contactInfo);
          saveUser(name, email);
          updateTime(userMessage, email, name);
        }
      });
  };

  return (
    <div>
      {loading && <OverlayLoading />}
      <div
        className="bg-[#F5F5F7] md:pb-16 pb-5 dark:bg-slate-700"
        id="contact-form"
      >
        <div
          id="schedule-calendar"
          className={`text-center max-w-xl mx-auto py-[20px] lg:py-[90px] ${showProperty}`}
        >
          <p className="text-[#322e51] pb-3 text-2xl md:text-xl lg:text-2xl xl:text-4xl relative font-bold afterEffect mb-5  dark:text-gray-100 league-spartan">
            You deserve an easier life, too
          </p>
          <p className="text-[#67637e] text-lg font-[Roboto] dark:text-gray-100 open-sans">
            Call us now at{" "}
            <a href="tel: +1516-367-2266" className="text-[#00a6b2]">
              516-367-2266
            </a>
            , or fill out this form and a member of our team will contact you
            within 24 business hours.
          </p>
        </div>

        <div className="max-w-6xl mx-auto ">
          <div className="bg-white dark:bg-slate-800 lg:flex justify-start gap-2 py-5 md:py-[68px] rounded-lg">
            <div
              className={`md:-ml-15 lg:-ml-10 flex lg:block justify-center items-center px-5 ${showProperty}`}
            >
              <Image
                src="/assets/cottage-home-care-contact-image.webp"
                alt="Cottage Home Care contact section image"
                width={800}
                height={1046}
                className="w-full shadow-lg md:max-w-2xl lg:max-w-[85%] rounded-lg"
                loading="lazy"
                unoptimized
              />
            </div>

            <div className="w-full ">
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="max-w-xl md:max-w-2xl dark:bg-slate-800  bg-gray-50 px-4 py-3 md:py-4 md:p-8 rounded-md shadow-xl md:ml-[7%] lg:ml-0 open-sans"
              >
                <p className="text-2xl text-gray-600 text-center md:font-semibold league-spartan custom-font dark:text-gray-100">
                  CONTACT FORM
                </p>

                {/* State */}
                <div className="space-y-1 text-sm mt-4">
                  <Controller
                    name="state"
                    rules={{ required: "state is required" }}
                    control={control}
                    render={({ field, fieldState }) => (
                      <StateSelect
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error?.message}
                      />
                    )}
                  />
                </div>

                <div className="grid gap-3 md:gap-6 md:mt-4 grid-cols-2">
                  <div className="md:space-y-1 text-sm ">
                    <label
                      htmlFor="firstName"
                      className="block dark:text-gray-400"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "Name is required",
                      })}
                      id="firstName"
                      placeholder="Full Name"
                      className="w-full px-4  py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                    />
                    {errors.firstName && (
                      <p className="text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div className="md:space-y-1  text-sm ">
                    <label htmlFor="phone" className="block dark:text-gray-400">
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

                  <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: "email is required" })}
                      id="email"
                      placeholder="E-mail "
                      className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1 text-sm ">
                    <label
                      htmlFor="option"
                      className="block dark:text-gray-400"
                    >
                      Services
                    </label>
                    <select
                      {...register("service", {
                        required: "service is required",
                      })}
                      id="option"
                      className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                            focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        Select One
                      </option>
                      <option value="HHA">HHA</option>
                      <option value="PCA">PCA</option>
                      <option value="NHTD">NHTD</option>
                      <option value="PRIVATE PAY">PRIVATE PAY</option>
                      <option value="Others">Others</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-600">{errors?.service?.message}</p>
                    )}
                  </div>
                </div>

                <hr className="my-3 md:my-5" />

                <div className="space-y-1 text-sm mt-1">
                  <label htmlFor="option" className="block dark:text-gray-400">
                    Inquiry Type
                  </label>
                  <select
                    {...register("inquiry", {
                      required: "inquiry is required",
                    })}
                    id="option"
                    className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                    focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select One
                    </option>
                    <option value="General">General Inquiry</option>
                    <option value="Grievance">Grievance</option>
                  </select>
                  {errors?.inquiry && (
                    <p className="text-red-600">{errors?.inquiry?.message}</p>
                  )}
                </div>

                <div className="space-y-1 text-sm mt-5">
                  <label
                    htmlFor="description"
                    className="block dark:text-gray-400"
                  >
                    Subject
                  </label>
                  <textarea
                    {...register("subject", {
                      required: "subject is required",
                    })}
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

                {/* Are you the patient? */}
                <div className="space-y-1 text-sm mt-5">
                  <label className="block font-semibold text-red-500">
                    Are you the patient? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center space-x-6 mt-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="Yes"
                        {...register("isPatient", {
                          required: "Please select an option",
                        })}
                        className="form-radio h-4 w-4 text-[#00A6B2] focus:outline-none"
                      />
                      <span className="text-gray-700 dark:text-gray-100">
                        Yes
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="No"
                        {...register("isPatient", {
                          required: "Please select an option",
                        })}
                        className="form-radio h-4 w-4 text-[#00A6B2] focus:outline-none"
                      />
                      <span className="text-gray-700 dark:text-gray-100">
                        No
                      </span>
                    </label>
                  </div>
                  {errors.isPatient && (
                    <p className="text-red-600">{errors.isPatient.message}</p>
                  )}
                </div>

                <div className="mt-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-[#00A6B2] focus:outline-none"
                    />
                    <span className="text-xs leading-relaxed md:text-sm dark:text-gray-100 open-sans font-normal">
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
                  className="block w-full p-3 text-center rounded-md bg-[#00A6B2] dark:bg-slate-600 hover:bg-[#1D93AE] text-white mt-6 cursor-pointer"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasierLife;
