"use client"; // ✅ Ensures this runs only on the client side

import axios from "axios";
import { useEffect, useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { IoMdArrowRoundUp } from "react-icons/io";
import { AuthContext } from "@/context/AuthProvider";
import Linkify from "react-linkify";

const AdminConversation = ({ newUser, users, setLoad, load }) => {
  const chatDivRef = useRef();
  const id = newUser?._id || users?.[0]?._id;
  const email = newUser?.email || users?.[0]?.email || "";
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const date = Date.now();

  const emailSend = async (userName, email, messages, userMessage) => {
    try {
      await axios.post(
        `https://cottage-backend-voilerplate.vercel.app/adminMessage`,
        {
          userName,
          email,
          messages,
          userMessage,
        }
      );
      toast.success("Email sent successfully");
    } catch (error) {
      toast.error("Error sending email");
    }
  };

  const updateTime = async (adminMessage) => {
    try {
      await axios.put(
        `https://cottage-backend-voilerplate.vercel.app/users/time`,
        {
          date,
          name: newUser?.name,
          email,
          chat: "active",
          adminMessage,
        }
      );
      toast.success("Message sent successfully");
      setLoad(!load);
    } catch (error) {
      toast.error("Error updating time");
    }
  };

  // ✅ Fetch Chats Data
  const { data, refetch } = useQuery({
    queryKey: ["chats", email],
    queryFn: async () => {
      const response = await axios.get(
        `https://cottage-backend-voilerplate.vercel.app/chats/allChats?email=${email}`
      );
      return response.data;
    },
    refetchInterval: 4000, // Auto-refetch every 4 seconds
  });

  useEffect(() => {
    setTimeout(() => {
      if (chatDivRef.current) {
        chatDivRef.current.scrollTop = chatDivRef.current.scrollHeight;
      }
    }, 100);
  }, [data]);

  const userName = data?.[0]?.firstName;
  let userMessage = "";

  for (let i = data?.length - 1; i >= 0; i--) {
    if (data?.[i]?.messages && data?.[i]?.role !== "admin") {
      userMessage = data?.[i]?.messages;
      break;
    }
  }

  const submitHandler = async (formData) => {
    const adminMessage = formData?.message;
    const messages = formData?.message;

    try {
      await axios.post(`https://cottage-backend-voilerplate.vercel.app/chats`, {
        firstName: user?.displayName,
        photoURL: user?.photoURL,
        email,
        time: date,
        userId: id,
        role: "admin",
        messages: formData?.message,
      });

      updateTime(adminMessage);
      emailSend(userName, email, messages, userMessage);
      reset();
      refetch();
    } catch (error) {
      toast.error("Error sending message");
    }
  };

  const customComponentDecorator = (href, text, key) => (
    <a
      href={href}
      key={key}
      style={{ color: "blue" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );

  return (
    <div className="w-full bg-[#EBF8F9] dark:bg-slate-600">
      <div className="pb-10">
        {user?.email && data && (
          <div className=" flex items-center gap-4 sticky top-0 bg-[#79a4a8] dark:bg-neutral-700 px-4 py-2 text-center">
            {data?.[0]?.photoURL && (
              <img
                src={data?.[0]?.photoURL}
                alt={data?.[0]?.displayName}
                className="w-12 h-12 rounded-full"
                w="48px"
                h="48px"
              />
            )}
            {!data?.[0]?.photoURL && (
              <BiUserCircle className="w-12 h-12 rounded-full text-gray-300"></BiUserCircle>
            )}
            {data?.[0]?.firstName && (
              <p className="text-lg md:text-xl font-semibold text-gray-100">
                {data?.[0]?.firstName}
              </p>
            )}
            {data?.[0]?.institute && (
              <p className="text-base md:text-lg font-semibold text-gray-100">
                To: {data?.[0]?.institute}
              </p>
            )}
            {data?.[0]?.subject && (
              <p className="text-base md:text-lg font-semibold text-gray-100">
                Subject: {data?.[0]?.subject}
              </p>
            )}

            {data?.[0]?.officeName && (
              <p className="text-base md:text-lg font-semibold text-gray-100">
                To: {data?.[0]?.officeName}
              </p>
            )}

            {data?.[0]?.inquiry && (
              <p className=" text-gray-200 text-sm font-semibold">
                Inquiry: {data?.[0]?.inquiry}
              </p>
            )}

            {data?.[0]?.service && (
              <p className="text-gray-200 text-sm font-semibold">
                Service Type: {data?.[0]?.service}
              </p>
            )}
            {data?.[0]?.time && (
              <p className="text-gray-200 text-sm font-semibold">
                Date: {new Date(data?.[0]?.time).toLocaleString()}
              </p>
            )}
            {data?.[0]?.email && (
              <a
                href={`mailto:${data?.[0]?.email}`}
                className=" text-gray-200 text-sm font-semibold "
              >
                Email:{" "}
                <span className="hover:text-white">{data?.[0]?.email}</span>
              </a>
            )}

            {data?.[0]?.phone && (
              <a
                href={`tel:+1${data?.[0]?.phone}`}
                className=" text-gray-200 text-sm font-semibold "
              >
                Phone:{" "}
                <span className="hover:text-white">{data?.[0]?.phone}</span>
              </a>
            )}
          </div>
        )}

        <div
          // id='chat-feed'
          className="px-6  h-[67vh] overflow-y-scroll"
          ref={chatDivRef}
        >
          {data?.map((message) => (
            <div key={message?._id} className="py-2.5 ">
              {!message?.role && (
                <p className="flex items-center gap-3">
                  {message?.photoURL && (
                    <img
                      src={message?.photoURL}
                      alt={`${message?.photoURL}`}
                      className="w-6 h-6 rounded-full"
                      w="24"
                      h="24"
                    />
                  )}
                  {!message?.photoURL && (
                    <BiUserCircle className="w-6 h-6 rounded-full text-gray-400"></BiUserCircle>
                  )}
                  <span
                    className="bg-gray-400 text-white px-3 py-1.5 rounded-md shadow-md  "
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {" "}
                    <Linkify componentDecorator={customComponentDecorator}>
                      {message?.messages}
                    </Linkify>{" "}
                  </span>
                </p>
              )}
              {message?.role && (
                <h1
                  className="flex items-center gap-3 justify-end"
                  style={{ whiteSpace: "pre-line" }}
                >
                  <span className="bg-[#00A6B2] text-white px-3 py-1.5 rounded-md shadow-md ">
                    {" "}
                    <Linkify componentDecorator={customComponentDecorator}>
                      {message?.messages}
                    </Linkify>{" "}
                  </span>
                  <img
                    src={message?.photoURL}
                    alt={`${message?.photoURL}`}
                    className="w-6 h-6 rounded-full"
                    w="24"
                    h="24"
                  />
                </h1>
              )}
            </div>
          ))}
        </div>

        {/* ✅ Input Field */}
        <div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="lg:w-[90%] w-[92%] mx-auto relative">
              <textarea
                {...register("message", { required: "Message is required" })}
                rows={2}
                placeholder="Type Your Message"
                className="w-full px-4 py-3 border pr-16 rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md dark:bg-gray-400 dark:text-gray-100"
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(submitHandler)();
                  }
                }}
              />
              <button type="submit">
                <IoMdArrowRoundUp className="bg-black p-1 absolute right-4 bottom-6 text-white text-4xl rounded-md" />
              </button>
            </div>
            {errors.message && (
              <p className="text-red-600 lg:w-[90%] w-[92%] mx-auto">
                {errors.message.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminConversation;
