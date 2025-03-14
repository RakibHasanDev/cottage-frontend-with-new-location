import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import OverlayLoading from "../shared/OverlayLoading";

const HhhaContactForm = () => {
  const { user } = "";

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const updateTime = (userMessage, email, name, date = Date.now()) => {
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
          toast.success("message send successfully");
        }
      });
  };

  const emailStorage = (email, name) => {
    localStorage.setItem("email", `${email}`);
    localStorage.setItem("name", `${name}`);
    localStorage.setItem("chatLength", 1);
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
          reset();
        }
      });
  };

  const hhaSubmitHandler = (data) => {
    setLoading(true);

    const name = data.fullName;
    const email = data.email;
    const userMessage = data.subject;

    const message = {
      firstName: data.fullName,
      photoURL: user?.photoURL,
      email: data.email,
      messages: data.subject.replace(/<br>/g, "\n"),
      institute: "Brooklyn Institute",
      time: Date.now(),
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
          saveUser(name, email);
          updateTime(userMessage, email, name);
          setLoading(false);
        }
      });
  };

  return (
    <div className="contact-container border-t-2 border-white py-5 dark:border-slate-600 dark:bg-slate-600">
      {loading && <OverlayLoading />}
      <div
        className="w-[90%]  lg:w-[75%] mx-auto dark:bg-slate-600 bg-[#F4F4F4] opacity-90    
            lg:my-[50px] contact-adjustment lg:pb-3 rounded-md shadow-lg my-10 "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div>
          <div>
            <h1 className="text-3xl font-bold league-spartan text-center pt-10 px-3 dark:text-gray-100">
              Brooklyn Institute Of Vocational Training
            </h1>
            <hr className="border-[#F60D23] border-t-2 w-12 mt-3  mx-auto" />
          </div>
          <div className="my-8 ">
            <section className="flex justify-center items-center pb-8 mt-3 mb-12 rounded w-[95%]  md:w-[90%] mx-auto ">
              <div className="w-full">
                <form
                  onSubmit={handleSubmit(hhaSubmitHandler)}
                  className="max-w-xl md:max-w-2xl mx-auto"
                >
                  <h1 className="text-2xl text-start league-spartan font-semibold dark:text-gray-100">
                    {" "}
                    Contact Our School
                  </h1>

                  <div className="space-y-1  mt-5 text-sm open-sans">
                    <input
                      type="text"
                      // defaultValue={user?.displayName}
                      // readOnly

                      {...register("fullName", {
                        required: "Name is required",
                      })}
                      id="fullName"
                      placeholder="Full Name"
                      className="w-full px-4 py-4 placeholder-gray-600 rounded-md border border-[#F60D23] text-gray-700 outline-[#F60D23] bg-white focus:bg-white dark:placeholder:text-gray-100 dark:bg-gray-400 dark:text-gray-100 dark:focus:bg-gray-400"
                    />

                    {errors.fullName && (
                      <p className="text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-1 mt-5  text-sm">
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      // defaultValue={user?.email}

                      id="email"
                      // readOnly
                      placeholder="E-mail "
                      className="w-full placeholder-gray-600 px-4 py-4 rounded-md border border-[#F60D23] text-gray-700 outline-[#F60D23] bg-white
                                        focus:bg-white dark:placeholder:text-gray-100 dark:bg-gray-400 dark:text-gray-100 dark:focus:bg-gray-400"
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1 text-sm  mt-5">
                    <textarea
                      type="text"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      // name="subject"
                      id="subject"
                      rows={5}
                      placeholder="Subject"
                      className="w-full px-4 py-4 border border-[#F60D23] placeholder-gray-600 text-gray-700 outline-[#F60D23] bg-white
                                        focus:bg-white dark:placeholder:text-gray-100 dark:bg-gray-400 dark:text-gray-100 dark:focus:bg-gray-400"
                    />
                    {errors.subject && (
                      <p className="text-red-600">{errors.subject.message}</p>
                    )}
                  </div>
                  <button className="block w-full p-3 text-center rounded-sm  bg-[#d82828] hover:bg-red-800 text-white mt-6 league-spartan">
                    Send
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HhhaContactForm;
