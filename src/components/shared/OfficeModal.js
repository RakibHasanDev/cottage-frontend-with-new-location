import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SpinerLoading from "./SpinerLoading";

const Modal = ({ office, onClose }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const date = Date.now();

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
          setLoading(false);
          toast.success("message send successfully");
        }
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
          reset();
          onClose();
        }
      });
  };

  const submitHandler = (data) => {
    setLoading(true);

    const name = data.name;
    const email = data.email;
    const userMessage = data.message;

    const messageData = {
      firstName: data.name,
      email: data.email,
      phone: data.phone,
      messages: data.message.replace(/<br>/g, "\n"),
      officeName: office?.name,
      time: date,
    };

    fetch("https://cottage-backend-voilerplate.vercel.app/chats", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(messageData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          saveUser(name, email);

          updateTime(userMessage, email, name);
        }
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#E0F4F6] p-6 rounded-lg shadow-lg w-[95%] md:max-w-lg">
        {loading && <SpinerLoading />}

        {/* Close Button */}

        <h3 className="text-lg font-bold">Contact The {office?.name}</h3>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-1 gap-5 mt-5 relative"
        >
          <button
            onClick={onClose}
            className="absolute right-0 -top-14 text-white  rounded-full bg-[#00A6B2] w-10 h-10"
          >
            ✕
          </button>

          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Your name"
            className="input w-full border px-3 py-2 rounded-md"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email Address"
            className="input w-full border px-3 py-2 rounded-md"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <input
            type="tel"
            {...register("phone", { required: "Phone Number is required" })}
            placeholder="Your Phone Number"
            className="input w-full border px-3 py-2 rounded-md"
          />
          {errors.phone && (
            <p className="text-red-600">{errors.phone.message}</p>
          )}

          <textarea
            {...register("message", { required: "Message is required" })}
            className="textarea border w-full px-3 py-2 rounded-md"
            placeholder="Message"
          ></textarea>
          {errors.message && (
            <p className="text-red-600">{errors.message.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#00A6B2] text-white px-4 py-2 rounded-md hover:bg-[#2E2A4D]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
