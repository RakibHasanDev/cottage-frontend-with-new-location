import Link from "next/link";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-hot-toast";
import { validatePhoneNumber } from "../shared/validatePhoneNumber";
import OverlayLoading from "../shared/OverlayLoading";

const US_STATES = ["New York", "New Jersey", "Maryland"];

const StateSelect = ({ value, onChange, error }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filtered = US_STATES.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <label className="block dark:text-gray-100">Select Your State</label>
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

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_secureApiKey;

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
      state: "",
      isPatient: "", // new default
    },
  });

  const emailStorage = (email, name) => {
    if (typeof window === "undefined") return;
    localStorage.setItem("email", `${email}`);
    localStorage.setItem("name", `${name}`);
    localStorage.setItem("chatLength", "1");
  };

  const updateTime = (userMessage, email, name, date = Date.now()) => {
    const info = { date, name, email, message: userMessage, chat: "active" };

    fetch(`https://cottage-backend-voilerplate.vercel.app/users/time`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) toast.success("Message Send Successfully");
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
    }).catch((error) => {
      console.error("Error in SMS Handler:", error);
    });
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
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) emailStorage(email, name);
      });
  };

  const submitHandler = (data) => {
    setLoading(true);

    const name = data.firstName;
    const email = data.email;
    const userMessage = data.subject;

    const contactInfo = { contact: data.phone };

    const message = {
      firstName: data.firstName,
      email: data.email,
      phone: data.phone,
      service: data.service,
      state: data.state,
      isPatient: data.isPatient, // NEW FIELD
      inquiry: data.inquiry,
      messages: data.subject.replace(/<br>/g, "\n"),
      time: Date.now(),
    };

    fetch("https://cottage-backend-voilerplate.vercel.app/chats", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
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
            onSubmit={handleSubmit(submitHandler)}
            className="max-w-xl md:max-w-2xl   ml-auto bg-gray-50 dark:bg-slate-600 p-8 rounded-md shadow-xl "
          >
            <h1 className="text-2xl text-gray-600 dark:text-gray-100 text-center  font-semibold league-spartan">
              CONTACT FORM
            </h1>

            {/* State */}
            <div className="space-y-1 text-sm col-span-2 md:col-span-1">
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

            <div className="grid grid-cols-2 gap-6 mt-4 open-sans">
              <div className="space-y-1 text-sm">
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

              <div className="space-y-1 text-sm">
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

              <div className="space-y-1 text-sm">
                <label htmlFor="service" className="block dark:text-gray-100">
                  Services
                </label>
                <select
                  id="service"
                  defaultValue=""
                  {...register("service", { required: "service is required" })}
                  className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                    focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
                >
                  <option value="" disabled>
                    Select One
                  </option>
                  <option value="HHA">HHA</option>
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
              <label htmlFor="inquiry" className="block dark:text-gray-100">
                Inquiry Type
              </label>
              <select
                id="inquiry"
                defaultValue=""
                {...register("inquiry", { required: "inquiry is required" })}
                className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                  focus:bg-white shadow-md dark:bg-gray-400 dark:placeholder:text-gray-100 dark:text-gray-100"
              >
                <option value="" disabled>
                  Select One
                </option>
                <option value="General">General Inquiry</option>
                <option value="Grievance">Grievance</option>
              </select>
              {errors.inquiry && (
                <p className="text-red-600">{errors.inquiry.message}</p>
              )}
            </div>

            <div className="space-y-1 text-sm mt-5">
              <label htmlFor="subject" className="block dark:text-gray-100">
                Subject
              </label>
              <textarea
                id="subject"
                rows={5}
                placeholder="Subject"
                {...register("subject", { required: "subject is required" })}
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
                  <span className="text-gray-700 dark:text-gray-100">Yes</span>
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
                  <span className="text-gray-700 dark:text-gray-100">No</span>
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

            <button
              type="submit"
              className="block w-full p-3 text-center rounded-md  bg-[#00A6B2] hover:bg-secondar text-white mt-6 league-spartan"
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
